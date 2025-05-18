import { HiraganaList, KatakanaList } from "../data/kana";

export default function PracticeKana() {


  function validate(e: React.KeyboardEvent<HTMLInputElement>, key: string, value: string) {
    console.log(e.nativeEvent.key)

    if(e.nativeEvent.key === 'Enter'){
      const current = HiraganaList[key]
      if(current === value){
        console.log("Perfecto %s", value)
      }
    }
  }
  return (
    <div className="w-full h-full flex justify-center">

      <div className="grid grid-cols-3 row-auto gap-4">
        {
          Object.entries(HiraganaList).map(([key, value], i) => (

            <div key={key} className="w-[300px] h-[300px] border border-neutral-300 rounded-2xl gap-4 flex flex-col justify-evenly items-center">
              <h1 className="text-9xl font-bold">{key}</h1>

              <input onKeyDown={(e) => validate(e, key, value)} type="text" className="px-4 py-4 text-center font-bold rounded-2xl border outline bg-neutral-100 outline-neutral-300 border-neutral-300" />
            </div>
          ))
        }
      </div>
    </div>
  )
}
