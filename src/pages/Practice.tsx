import { Link } from "react-router"

export default function Practice() {

   const selectionMenu = [
    {
      path: "/practice/hiragana",
      label: "Hiragana",
      description: "ひらがな",
      symbol: "あ",
      color: "#FF9696"
    },
    {
      path: "/practice/katakana",
      label: "Katakana",
      description: "カタカナ",
      symbol: "ア",
      color: "#CBB4FF"
    }
  ]
  return (
    <div className="flex gap-4 h-[100svh]">


      {selectionMenu.map(item => (
        <Link key={item.path} className="w-full h-1/2 rounded-4xl relative flex justify-center items-center" to={item.path} style={{ background: item.color }}>

          <div className="relative flex flex-col gap-2 z-10 justify-center items-center">
            <h2 className="text-6xl font-bold">{item.label}</h2>
            <h4 className="text-2xl">{item.description}</h4>

          </div>

          <span className="absolute top-auto z-0 left-auto text-[400px] font-extrabold text-white/30">
            {item.symbol}
          </span>


        </Link>
      ))}
    </div>
  )
}
