import { useEffect, useRef, useState, type RefObject } from "react";
import DrawBoard from "../components/DrawBoard";
import { MdCheck, MdOutlineArrowBack, MdOutlineArrowForward, MdOutlineFlag, MdOutlineTaskAlt } from "react-icons/md";
import { hiragana, katakana, type Kana } from "../data/kana";
import { useParams } from "react-router";


interface CanvasHistory {
    imageData: ImageData | null;
}



export default function LearnDetail() {


    const { kana: kanaType } = useParams<{ kana: string }>();

    // Seleccionar el array basado en el parámetro
    const [kana, setKana] = useState(kanaType === 'hiragana' ? [...hiragana] : [...katakana]);

    const [audio, setAudio] = useState<HTMLAudioElement | null>(new Audio(`/sounds/${(kana[1][1] as Kana).sound}`)); // Inicializa con el primer sonido
    const [gif, setGif] = useState((kana[1][1] as Kana).gif);

    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null)
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

    const [isDrawing, setIsDrawing] = useState(false)

    //History
    const [history, setHistory] = useState<CanvasHistory[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const [selectedRow, setSelectedRow] = useState(1);
    const [selectedCol, setSelectedCol] = useState(1);

    const strokesRef = useRef(0); // Ref para almacenar el número de trazos


    const [isStart, setIsStart] = useState(false)

    const [progress, setProgress] = useState<{ total: number, doIt: number, progress: number } | null>(null)


    useEffect(() => {
        changeMediaSources()
    }, [selectedCol, selectedRow])


    // Nuevo efecto para reproducir el audio cuando cambia
    useEffect(() => {
        if (!audio) return;

        if (audio.src == null || audio.src.length < 1) return;
        if (!isStart) return;

        audio.play()

        // Limpieza del audio anterior
        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, [audio]);

    function handleStrokeUndo() {
        strokesRef.current -= 1;
    }


    const handleStrokeEnd = () => {
        strokesRef.current += 1;
    };

    const verifyKana = () => {
        const currentKana = kana[selectedRow]?.[selectedCol];

        if (typeof currentKana === 'object' && currentKana !== null) {
            if (currentKana.strokes === strokesRef.current) {
                // Crear una copia del array para no mutar el estado directamente
                const updatedKana = kana.map((row, rowIndex) =>
                    rowIndex === selectedRow
                        ? row.map((item, colIndex) =>
                            colIndex === selectedCol && typeof item === 'object' && item !== null
                                ? { ...item, todo: true }
                                : item
                        )
                        : row
                );
                setKana(updatedKana);
            } else {
                alert(`Inténtalo de nuevo. El número de trazos esperado es ${currentKana.strokes}, y has realizado ${strokesRef.current}.`);
                return;
            }
        }

        handleNext()

    };

    function navigateToKana(row: number, col: number) {
        if (typeof kana[row][col] === "object") {
            setSelectedRow(row)
            setSelectedCol(col)
            clearCanvas();
            changeMediaSources();
        }
    }

    function handleNext() {
        let nextRow = selectedRow;
        let nextCol = selectedCol;
        strokesRef.current = 0; // Resetear el contador de trazos al cambiar de carácter

        while (true) {
            if (nextRow >= (kana.length - 1) && nextCol >= (kana[kana.length - 1].length - 1)) {
                setSelectedRow(1);
                setSelectedCol(1);
                clearCanvas();
                changeMediaSources();
                return;
            }

            if (nextCol >= (kana[nextRow].length - 1)) {
                nextRow++;
                nextCol = 1;
            } else {
                nextCol++;
            }

            // Verificar si la celda actual contiene un objeto Kana con sonido
            const currentItem = kana[nextRow]?.[nextCol];
            if (currentItem && typeof currentItem === 'object' && (currentItem as Kana).sound) {
                setSelectedRow(nextRow);
                setSelectedCol(nextCol);
                clearCanvas();
                changeMediaSources();
                return;
            }

            // Evitar bucles infinitos
            if (nextRow >= kana.length) {
                setSelectedRow(1);
                setSelectedCol(1);
                clearCanvas();
                changeMediaSources();
                return;
            }
        }
    }

    function handlePrev() {
        let prevRow = selectedRow;
        let prevCol = selectedCol;
        strokesRef.current = 0; // Resetear el contador de trazos al cambiar de carácter


        while (true) {
            if (prevRow <= 1 && prevCol <= 1) {
                setSelectedRow(kana.length - 1);
                setSelectedCol(kana[kana.length - 1].length - 1);
                clearCanvas();
                changeMediaSources();
                return;
            }

            if (prevCol <= 1) {
                prevRow--;
                prevCol = kana[prevRow].length - 1;
            } else {
                prevCol--;
            }

            // Verificar si la celda actual contiene un objeto Kana con sonido
            const currentItem = kana[prevRow]?.[prevCol];
            if (currentItem && typeof currentItem === 'object' && (currentItem as Kana).sound) {
                setSelectedRow(prevRow);
                setSelectedCol(prevCol);
                clearCanvas();
                changeMediaSources();
                return;
            }

            // Evitar bucles infinitos
            if (prevRow <= 0) {
                setSelectedRow(kana.length - 1);
                setSelectedCol(kana[kana.length - 1].length - 1);
                clearCanvas();
                changeMediaSources();
                return;
            }
        }
    }

    function changeMediaSources() {
        if ((kana[selectedRow][selectedCol] as Kana).sound == null || (kana[selectedRow][selectedCol] as Kana).sound.length < 1) return;
        setAudio(new Audio(`/sounds/${(kana[selectedRow][selectedCol] as Kana).sound}`))
        setGif((kana[selectedRow][selectedCol] as Kana).gif)
    }

    function clearCanvas() {
        const canvas = canvasRef.current
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setHistory([{ imageData: ctx.getImageData(0, 0, canvas.width, canvas.height) || null }]);
        setHistoryIndex(0);
        strokesRef.current = 0
    }

    function resetAll() {
        clearCanvas()
        resetProgress()

        setSelectedRow(1)
        setSelectedCol(1)
    }

    function resetProgress() {
        let kanaList = [...kana]

        kanaList.forEach((_, row) => {
            return kanaList[row].forEach((quiz, _) => {
                if (typeof quiz === 'object') {
                    quiz.todo = false
                }
            })
        })

        setKana(kanaList)
    }

    function verifyProgress() {

        let total = 0

        let doIt = 0

        kana.forEach((_, row) => {
            kana[row].forEach((quiz, _) => {
                if (typeof quiz === 'object') {
                    total++

                    if (quiz.todo) {
                        doIt++
                    }
                }
            })
        })

        console.log(total)
        console.log(doIt)

        const calc = (doIt / total) * 100

        const result = Math.round(calc)
        console.log(`${result}%`)

        if (doIt <= 0 && result <= 0) {
            setProgress(null)
        } else {
            setProgress({ total, doIt, progress: result })

        }

        setIsStart(false)

        resetAll()
    }

    return (
        <div className="flex justify-center items-center w-full h-[80vh]">
            {isStart ? <div className="w-full  flex justify-center gap-4">
                <div className="flex flex-col gap-2">
                    <div className="w-min h-min outline-2 outline-neutral-300 flex flex-col overflow-hidden rounded-xl select-none">
                        {/* Filas*/}
                        {kana.map((_, row) => (
                            <div className="flex" key={`row-${row + 1}`}>
                                {/* Columnas */}
                                {kana[row].map((item, col) => {
                                    const isSelected = selectedRow === row && selectedCol === col ? "bg-pink-400 select-none" : ""
                                    const isGuide = row === 0 || col === 0 ? 'bg-neutral-100 select-none' : "select-text";
                                    const isDecoration = row === 0 && col === 0 ? 'bg-neutral-300 select-none' : '';
                                    const isTodo = typeof item === 'object' && item.todo ? 'bg-green-200' : ''
                                    return (
                                        <div
                                            onClick={() => navigateToKana(row, col)}
                                            className={`w-[50px] h-[50px] font-jpn border border-neutral-300 flex justify-center items-center ${isDecoration} ${isGuide} ${isSelected} ${isTodo}`}
                                            key={`col-${col + 1}`}
                                        >
                                            {typeof item === 'object' && item !== null ? (
                                                item.label
                                            ) : (
                                                item
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        ))}
                    </div>

                    <button onClick={verifyProgress} className="bg-pink-400 outline justify-center outline-gray-700">
                        <span>Finalizar sesión</span><MdOutlineTaskAlt className="text-xl" />
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    <DrawBoard handleStrokeUndo={handleStrokeUndo} clearCanvas={clearCanvas} onStrokeEnd={handleStrokeEnd} kanaType={kanaType} canvasRef={canvasRef} ctx={ctx} setCtx={setCtx} isDrawing={isDrawing} setIsDrawing={setIsDrawing} history={history} setHistory={setHistory} historyIndex={historyIndex} setHistoryIndex={setHistoryIndex} audio={audio} gif={gif} />
                    <div className="flex items-center gap-2 justify-between">
                        <button onClick={handlePrev} className="bg-white outline outline-gray-700 text-gray-700">
                            <MdOutlineArrowBack /> <span>Volver</span>
                        </button>
                        <div className="flex gap-2 items-center">
                            <button onClick={handleNext} className="bg-white outline outline-gray-700 text-gray-700">
                                <span>Saltar</span><MdOutlineArrowForward />
                            </button>
                            <button onClick={verifyKana} className="bg-green-200 text-gray-700 outline outline-gray-700">
                                <span>Verificar</span><MdCheck />
                            </button>
                        </div>
                    </div>

                </div>
            </div> : <div className="h-[80svh] w-full flex justify-center gap-4 items-center flex-col">

                <h1 className="font-bold uppercase text-2xl">Aprender {kanaType}</h1>

                {
                    progress != null && <div className="flex justify-center items-center flex-col">
                        <h2>Tu puntaje fue de <span className="text-green-500">{progress.progress}%</span></h2>
                        <h2>Realizastes {progress.doIt}/{progress.total}</h2>
                    </div>
                }

                <button onClick={() => { setIsStart(true); changeMediaSources(); setProgress(null) }} className="bg-pink-400 outline outline-gray-700">
                    <span>Empezar sesión</span><MdOutlineFlag className="text-xl" />
                </button>
            </div>}
        </div>
    );
}