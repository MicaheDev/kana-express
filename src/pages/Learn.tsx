
import { Link } from "react-router"

export default function Learn() {

  const selectionMenu = [
    {
      path: "/learn/hiragana",
      label: "Hiragana",
      description: "ひらがな",
      symbol: "あ",
      color: "#FFD3D4"
    },
    {
      path: "/learn/katakana",
      label: "Katakana",
      description: "カタカナ",
      symbol: "ア",
      color: "#A8D8ED"
    }
  ]

  return (
    <div className="flex flex-col h-[80vh] items-center justify-center gap-8">

      <div className="flex flex-col gap-2 items-center"><h1 className="uppercase text-2xl font-bold">Selecciona un silabario para aprender</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum adipisci incidunt magni hic asperiores ipsa eaque magnam nulla dolore.</p>
      </div>
      <div className="flex gap-4 justify-between items-center w-full h-min">
        {selectionMenu.map(item => {
          const description = item.description.split("")
          return (

            <Link key={`${item.path}`} className={`w-full h-max rounded-4xl hover:scale-95 hover:opacity-80 transition-all duration-300 p-12`}
              to={item.path} style={{
                background: `${item.color}`,
              }} >
              <div className="relative flex justify-center items-center w-full h-full">

                <h2 className="uppercase font-bold absolute top-0 mt-6 mx-auto w-full text-center text-6xl">{item.label}</h2>

                <div className="flex flex-col gap-0 absolute right-0 font-jpn my-auto mr-12 text-6xl">
                  {description.map((char, i) => (
                    <span key={i}>{char}</span>
                  ))}
                </div>

                <h1 className="text-[300px] font-jpn">{item.symbol}</h1>

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
