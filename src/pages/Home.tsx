export default function Home() {

  const syllabaries = [
    {
      title: "Hiragana",
      subTitle: "ひらがな",
      symbol: "あ",
      color: "#FFB4B4"


    },
    {
      title: "Katakana",
      subTitle: "カタカナ",
      symbol: "ア",
      color: "#B4BAFF"
    },
    {
      title: "Kanji",
      subTitle: "漢字",
      symbol: "学",
      color: "#FFC088"
    },

  ]
  return (

    <div className="flex flex-col w-full h-full">

      <div className="w-full h-[80vh] flex justify-between items-center gap-[40px]">
        <div className="relative w-1/2 rounded-4xl overflow-hidden">
          <div className="absolute w-full h-full z-[10] bg-gradient-to-b from-black/30 to-white" />
          <img src="/hero.jpg" alt="" className="w-full h-full object-contain" />
        </div>


        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="text-4xl font-bold uppercase text-gray-800">Aprende japones de forma rapida y sencilla</h1>
          <p className=" text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis neque id! Quae et, quia, totam doloremque quisquam distinctio consectetur eius earum amet beatae atque, nostrum nihil eum voluptatibus quod.</p>

          <button className="bg-beige-400 w-min text-white hover:bg-beige-400/80">Comenzar</button>
        </div>
      </div>

      <div className="h-[100vh] w-full flex justify-between items-center gap-[40px]">
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="text-4xl font-bold uppercase text-gray-800">Silabario Japones</h1>
          <p className=" text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis neque id! Quae et, quia, totam doloremque quisquam distinctio consectetur eius earum amet beatae atque, nostrum nihil eum voluptatibus quod.</p>

          <div className="flex items-center gap-2">
            <button className="bg-beige-400 w-min text-white hover:bg-beige-400/80">Aprender</button>
            <button className="bg-beige-400 w-min text-white hover:bg-beige-400/80">Practicar</button>
          </div>
        </div>

        <div className="w-1/2  flex flex-wrap justify-center gap-4">
          {
            syllabaries.map((item, i) => {

              const subTitle = item.subTitle.split("")

              return (
                <div
                  style={{
                    background: `linear-gradient(0deg, transparent 0%, ${item.color} 100%)`,
                  }} key={`${item.title}-${i}`} className={`w-[300px] h-[300px] rounded-4xl flex justify-center items-center relative`}>

                  <h2 className="uppercase font-bold absolute top-0 mt-12 mx-auto w-full text-center text-2xl">{item.title}</h2>

                  <div className="flex flex-col gap-0 absolute right-0 my-auto mr-12 text-2xl">
                    {subTitle.map((char, i) => (
                      <span key={i}>{char}</span>
                    ))}
                  </div>

                  <h1 className="text-8xl font-bold">{item.symbol}</h1>
                </div>
              )
            })
          }

        </div>

      </div>
    </div>
  );
}
