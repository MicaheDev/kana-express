
import { Link } from "react-router"

export default function Learn() {

  const selectionMenu = [
    {
      path: "/learn/hiragana",
      label: "Hiragana",
      description: "ひらがな",
      symbol: "あ",
      color: "#FFB4B4"
    },
    {
      path: "/learn/katakana",
      label: "Katakana",
      description: "カタカナ",
      symbol: "ア",
      color: "#B4BAFF"
    }
  ]

  return (
    <div className="flex flex-col h-[80vh] items-center justify-center">

      <div className="flex flex-col gap-2 items-center"><h1 className="uppercase text-2xl font-bold">Selecciona un silabario para aprender</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum adipisci incidunt magni hic asperiores ipsa eaque magnam nulla dolore.</p>
      </div>
      <div className="flex gap-4 justify-between items-center w-full h-min">
        {selectionMenu.map(item => {
          const description = item.description.split("")
          return (

            <Link key={`${item.path}`} className={`w-full h-3/4 rounded-4xl hover:scale-95 hover:opacity-80 transition-all duration-300 p-12`}
              to={item.path} style={{
                background: `linear-gradient(0deg, transparent 0%, ${item.color} 100%)`,
              }} >
              <div className="relative  flex justify-center items-center">

                <h2 className="uppercase font-bold absolute top-0 mt-12 mx-auto w-full text-center text-6xl">{item.label}</h2>

                <div className="flex flex-col gap-0 absolute right-0 my-auto mr-12 text-6xl">
                  {description.map((char, i) => (
                    <span key={i}>{char}</span>
                  ))}
                </div>

                <h1 className="text-[300px]">{item.symbol}</h1>

              </div>

              <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, reprehenderit?</p>
            </Link>
          )
        })
        }
      </div>
    </div >
  )
}
