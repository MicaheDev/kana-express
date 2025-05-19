import { Link } from "react-router";

export default function Home() {

  const syllabaries = [
    {
      title: "Hiragana",
      subTitle: "ひらがな",
      symbol: "あ",
      color: "#FFD3D4"
    },
    {
      title: "Katakana",
      subTitle: "カタカナ",
      symbol: "ア",
      color: "#A8D8ED"
    },
    {
      title: "Kanji",
      subTitle: "漢字",
      symbol: "学",
      color: "#FFF1A3"
    },

  ]
  return (

    <div className="flex flex-col w-full h-full">

    

      <div className="w-full h-[80vh] flex justify-between items-center gap-[40px]">
        <div className="relative w-1/2 rounded-4xl overflow-hidden">
          <div className="absolute w-full h-full z-[10] bg-gradient-to-b from-pink-400/30 to-white" />
          <img src="/hero.jpg" alt="" className="w-full h-full object-contain" />
        </div>


        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="text-4xl font-bold uppercase">Aprende japones de forma rapida y sencilla</h1>
          <p className=" text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis neque id! Quae et, quia, totam doloremque quisquam distinctio consectetur eius earum amet beatae atque, nostrum nihil eum voluptatibus quod.</p>

          <Link to="/learn" className="btn bg-pink-400 w-min text-gray-700 hover:bg-pink-400/80 outline outline-gray-700 text-nowrap">Comenzar a aprender</Link>
        </div>
      </div>

      <div className="h-[100vh] w-full flex flex-col gap-8 justify-center">
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="text-4xl font-bold uppercase ">Silabario Japones</h1>
          <p className=" text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis neque id! Quae et, quia, totam doloremque quisquam distinctio consectetur eius earum amet beatae atque, nostrum nihil eum voluptatibus quod.</p>

          <div className="flex items-center gap-2">
          <Link to="/learn" className="btn bg-pink-400 w-min text-gray-700 hover:bg-pink-400/80 outline outline-gray-700 text-nowrap">Aprender</Link>
          <Link to="/practice" className="btn  w-min text-gray-700  outline outline-gray-700 text-nowrap">Practicar</Link>
          </div>
        </div>

        <div className="w-full flex gap-4">
          {
            syllabaries.map((item, i) => {

              const subTitle = item.subTitle.split("")

              return (
                <div
                  style={{
                    background: `${item.color}`,
                  }} key={`${item.title}-${i}`} className={`w-[400px] h-[400px] rounded-4xl flex justify-center items-center relative hover:scale-95 hover:opacity-80 transition-all duration-300`}>

                  <h2 className="uppercase font-bold absolute top-0 mt-12 mx-auto w-full text-center text-4xl">{item.title}</h2>

                  <div className="flex flex-col gap-0 font-bold font-jpn absolute right-0 my-auto mr-12 text-2xl">
                    {subTitle.map((char, i) => (
                      <span key={i}>{char}</span>
                    ))}
                  </div>

                  <h1 className="text-[200px] font-bold font-jpn">{item.symbol}</h1>
                </div>
              )
            })
          }

        </div>

      </div>
    </div>
  );
}
