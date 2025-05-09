import { useEffect, useRef, useState, type RefObject } from "react";
import DrawBoard from "../components/DrawBoard";
import { MdCheck, MdOutlineArrowBack } from "react-icons/md";
import { hiragana, katakana, type Kana } from "../data/kana";


interface CanvasHistory {
    imageData: ImageData | null;
}



export default function LearnKana({params}:any) {


    const kana = katakana
    

    const [audio, setAudio] = useState(new Audio(`/sounds/${(kana[1][1] as Kana).sound}`)); // Inicializa con el primer sonido
    const [gif, setGif] = useState((kana[1][1] as Kana).gif);

    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null)
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

    const [isDrawing, setIsDrawing] = useState(false)

    //History
    const [history, setHistory] = useState<CanvasHistory[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const [selectedRow, setSelectedRow] = useState(1);
    const [selectedCol, setSelectedCol] = useState(1);

    useEffect(() => {
        changeMediaSources()
    }, [selectedCol, selectedRow])

   
    // Nuevo efecto para reproducir el audio cuando cambia
    useEffect(() => {
        if (audio) {
            audio.play().catch(e => console.log("Error al reproducir audio:", e));
        }
        
        // Limpieza del audio anterior
        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, [audio]);


    function handleNext() {
        if (selectedRow >= (kana.length - 1) && selectedCol >= (kana[kana.length - 1].length - 1)) {
            setSelectedRow(1);
            setSelectedCol(1);
            clearCanvas()
            changeMediaSources()
            return;
        }
        if (selectedCol >= (kana[0].length - 1)) {
            setSelectedRow(selectedRow + 1);
            setSelectedCol(1);
            clearCanvas()
            changeMediaSources()
            return;
        }
        setSelectedCol(selectedCol + 1);

        clearCanvas()
        changeMediaSources()


    }

    function handlePrev() {
        if (selectedRow <= 1 && selectedCol <= 1) {
            setSelectedRow(kana.length - 1);
            setSelectedCol(kana[kana.length - 1].length - 1);
            clearCanvas()
            changeMediaSources()
            return;
        }
        if (selectedCol <= 1) {
            setSelectedRow(selectedRow - 1);
            setSelectedCol(kana[kana.length - 1].length - 1);

            clearCanvas()
            changeMediaSources()
            return;
        }
        setSelectedCol(selectedCol - 1);

        clearCanvas()
        changeMediaSources()

    }

    function changeMediaSources() {
        setAudio(new Audio(`/sounds/${(kana[selectedRow][selectedCol] as Kana).sound}`))
        setGif((kana[selectedRow][selectedCol] as Kana).gif)
    }

    function clearCanvas() {
        const canvas = canvasRef.current
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setHistory([{ imageData: ctx.getImageData(0, 0, canvas.width, canvas.height) || null }]);
        setHistoryIndex(0);
    }

    return (
        <div className="w-full h-[80svh] flex justify-center gap-4">
            <div className="w-min h-min border-neutral-300 flex flex-col border overflow-hidden rounded-xl select-none">
                {/* Filas*/}
                {kana.map((_, row) => (
                    <div className="flex" key={`row-${row + 1}`}>
                        {/* Columnas */}
                        {kana[row].map((item, col) => {
                            const isSelected = selectedRow === row && selectedCol === col ? "bg-blue-300 select-none" : ""
                            const isGuide = row === 0 || col === 0 ? 'bg-neutral-100 select-none' : "select-text";
                            const isDecoration = row === 0 && col === 0 ? 'bg-neutral-300 select-none' : '';
                            return (
                                <div
                                    className={`w-[50px] h-[50px] border border-neutral-300 flex justify-center items-center ${isDecoration} ${isGuide} ${isSelected}`}
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

            <div className="flex flex-col gap-2">
                <DrawBoard canvasRef={canvasRef} ctx={ctx} setCtx={setCtx} isDrawing={isDrawing} setIsDrawing={setIsDrawing} history={history} setHistory={setHistory} historyIndex={historyIndex} setHistoryIndex={setHistoryIndex} audio={audio} gif={gif} />
                <div className="flex items-center gap-2 justify-between">
                    <button onClick={handlePrev} className="bg-black cursor-pointer opacity-100 rounded-full hover:opacity-80 transition-opacity duration-300 inline-flex gap-2 items-center text-white px-4 py-2">
                        <MdOutlineArrowBack /> <span>Volver</span>
                    </button>
                    <button onClick={handleNext} className="bg-black cursor-pointer opacity-100 rounded-full hover:opacity-80 transition-opacity duration-300 inline-flex gap-2 items-center text-white px-4 py-2">
                        <span>Verificar</span><MdCheck />
                    </button>
                </div>
            </div>
        </div>
    );
}