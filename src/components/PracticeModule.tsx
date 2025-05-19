import { useEffect, useState } from "react";
import { HiraganaCombinationList, HiraganaDakutenList, HiraganaList, KatakanaCombinationList, KatakanaDakutenList, KatakanaList, Modes, Variations } from "../data/kana";

interface PracticeModuleProps {
  mode: Modes,
  variations: string[],
  onReset: () => void
}

type QuizItem = {
  kana: string;
  romaji: string;
  hasError: boolean;
};

export default function PracticeModule({ mode, variations, onReset }: PracticeModuleProps) {
  const Quizes = {
    hiragana: {
      [Variations.mainKana]: HiraganaList,
      [Variations.dakutenKana]: HiraganaDakutenList,
      [Variations.combinationKana]: HiraganaCombinationList,
    },
    katakana: {
      [Variations.mainKana]: KatakanaList,
      [Variations.dakutenKana]: KatakanaDakutenList,
      [Variations.combinationKana]: KatakanaCombinationList,
    },
  };
  const [quizList, setQuizList] = useState<QuizItem[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [answered, setAnswered] = useState<string[]>([]);

  useEffect(() => {
    setQuizList([]);
    setAnswered([]);
    setErrorCount(0);
    setProgress(0);
    const newQuizList: QuizItem[] = [];

    variations.forEach((variation) => {
      const kanaMap = Quizes[mode][variation as Variations];
      if (kanaMap) {
        Object.entries(kanaMap).forEach(([kana, romaji]) => {
          newQuizList.push({ kana, romaji, hasError: false });
        });
      }
    });

    const shuffledList = [...newQuizList].sort(() => Math.random() - 0.5);
    setQuizList(shuffledList);
  }, [mode, variations]);

  const validate = (
    e: React.KeyboardEvent<HTMLInputElement>,
    quizItem: QuizItem,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Enter') {
      const inputValue = e.currentTarget.value.trim().toLowerCase();
      const isCorrect = inputValue === quizItem.romaji;

      const updatedQuizList = [...quizList];
      const updatedAnswered = [...answered];
      let newErrorCount = errorCount;

      if (isCorrect) {
        if (!answered.includes(quizItem.kana)) {
          updatedAnswered.push(quizItem.kana);
          setAnswered(updatedAnswered);
        }
        updatedQuizList[index].hasError = false;
        setQuizList(updatedQuizList);
        // Optionally clear the input after correct answer
      } else {
        updatedQuizList[index].hasError = true;
        setQuizList(updatedQuizList);
        // Increment error count only once per character
        if (!answered.includes(quizItem.kana) && !updatedAnswered.includes(quizItem.kana)) {
          newErrorCount++;
          setErrorCount(newErrorCount);
        }
        // Reset hasError after a short delay
        setTimeout(() => {
          const resetQuizList = [...quizList];
          resetQuizList[index].hasError = false;
          setQuizList(resetQuizList);
        }, 1000);
      }
    }
  };
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center my-8">

      <div className="grid grid-cols-4 row-auto gap-4">
        {
          quizList.map((quiz, index) => (

            <div
              key={quiz.kana}
              className={`w-[300px] h-[300px] outline outline-gray-700 rounded-2xl gap-4 flex flex-col justify-evenly items-center transition-colors duration-500 ${quiz.hasError ? 'bg-red-200 outline-red-500' : answered.includes(quiz.kana) ? 'bg-green-200 outline-green-500' : ''}`}>            
                <h1 className="text-9xl font-jpn">{quiz.kana}</h1>
              <input onKeyDown={(e) => validate(e, quiz, index)} type="text" className="px-4 py-2 text-center font-bold  border-b outline-none border-gray-700 " />
            </div>
          ))
        }
      </div>

      <button onClick={onReset} className="bg-pink-400">Finalizar</button>
    </div>
  )
}
