import { useEffect, useState, type RefObject } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineSound } from "react-icons/ai";
import { LuEraser, LuRedo2, LuUndo2 } from "react-icons/lu"

interface CanvasHistory {
    imageData: ImageData | null;
}

interface DrawBoardProps {
    canvasRef: RefObject<HTMLCanvasElement | null>;
    ctx: CanvasRenderingContext2D | null;
    setCtx: React.Dispatch<React.SetStateAction<CanvasRenderingContext2D | null>>;
    isDrawing: boolean
    setIsDrawing: React.Dispatch<React.SetStateAction<boolean>>;
    history: CanvasHistory[]
    setHistory: React.Dispatch<React.SetStateAction<CanvasHistory[]>>
    historyIndex: number
    setHistoryIndex: React.Dispatch<React.SetStateAction<number>>
    audio: HTMLAudioElement
    setAudio?: React.Dispatch<React.SetStateAction<HTMLAudioElement>>
    gif: string,
    setGif?: React.Dispatch<React.SetStateAction<string>>
}


export default function DrawBoard({ canvasRef, ctx, setCtx, isDrawing, setIsDrawing, history, setHistory, historyIndex, setHistoryIndex, audio, gif }: DrawBoardProps) {


    const [isShowEx, setIsShowEx] = useState(true)
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return;
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        setCtx(canvas.getContext("2d", { willReadFrequently: true }))

        if (!ctx) return;
        // Inicializa el historial con un estado vacío
        setHistory([{ imageData: ctx.getImageData(0, 0, canvas.width, canvas.height) || null }]);
        setHistoryIndex(0);


    }, [ctx])

    const toggleSound = () => {
        audio.play();
    };


    const saveState = () => {
        const canvas = canvasRef.current;
        if (!ctx || !canvas) return;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        // Crea un nuevo array de historial insertando el nuevo estado después del actual
        const newHistory = [...history.slice(0, historyIndex + 1), { imageData }];
        setHistory(newHistory);
        setHistoryIndex(historyIndex + 1);
    };

    useEffect(() => {
        const handleMouseUp = () => {
            if (!isDrawing) return;
            setIsDrawing(false);
            if (!ctx) return;
            ctx.closePath();
            saveState();
        };

        document.addEventListener('mouseup', handleMouseUp);

        // Limpiar los listeners al desmontar el componente
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [ctx, isDrawing, saveState])


    function startDraw(e: React.MouseEvent<HTMLCanvasElement>) {
        if (e.button !== 0) return;

        setIsDrawing(true)
        if (!ctx) return;
        ctx.beginPath()
        ctx.lineWidth = 20;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';


    }

    function drawing(e: React.MouseEvent<HTMLCanvasElement>) {
        if (!ctx || !isDrawing) return;
        //console.log(`x: ${e.nativeEvent.offsetX}, y: ${e.nativeEvent.offsetY}`)

        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        ctx.stroke();
    }

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setHistory([{ imageData: ctx.getImageData(0, 0, canvas.width, canvas.height) || null }]);
        setHistoryIndex(0);
    };

    const undo = () => {
        if (historyIndex > 0 && ctx && canvasRef.current) {
            setHistoryIndex((prevIndex) => prevIndex - 1);
            const previousState = history[historyIndex - 1];
            ctx.putImageData(previousState.imageData!, 0, 0);
        }
    };

    const redo = () => {
        if (historyIndex < history.length - 1 && ctx && canvasRef.current) {
            setHistoryIndex((prevIndex) => prevIndex + 1);
            const nextState = history[historyIndex + 1];
            ctx.putImageData(nextState.imageData!, 0, 0);
        }
    };

    return (
        <>
            <div className="border relative border-neutral-300 rounded-xl overflow-hidden bg-neutral-100">
                <canvas
                    ref={canvasRef}
                    width={700}
                    height={700}
                    onMouseDown={startDraw}
                    onMouseMove={drawing}
                ></canvas>

                <img
                    className={`w-full h-full absolute inset-0 m-auto pointer-events-none transition-opacity duration-300 ${isShowEx ? 'opacity-10' : 'opacity-0'}`}
                    src={`/gifs/katakana/${gif}`}
                    alt="GIF animado" // Siempre es bueno añadir un texto alternativo
                />


                <button onClick={clearCanvas} className="w-[50px] cursor-pointer h-[50px] bg-white text-black shadow inline-flex justify-center items-center rounded-full border hover:opacity-60 opacity-100 transition-opacity duration-300 border-neutral-300 text-2xl absolute top-0 right-0 m-2">
                    <LuEraser />
                </button>

                <div className="flex flex-col gap-2 items-center justify-center absolute bottom-0 right-0 m-2">
                    <button onClick={() => setIsShowEx(!isShowEx)} className="w-[50px] cursor-pointer h-[50px] bg-white text-black shadow inline-flex justify-center items-center rounded-full border hover:opacity-60 opacity-100 transition-opacity duration-300 border-neutral-300 text-2xl">

                        {isShowEx ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                        }
                    </button>
                    <button onClick={toggleSound} className="w-[50px] cursor-pointer h-[50px] bg-white text-black shadow inline-flex justify-center items-center rounded-full border hover:opacity-60 opacity-100 transition-opacity duration-300 border-neutral-300 text-2xl">
                        <AiOutlineSound />

                    </button>


                </div>

                <div className="absolute top-0 left-0 m-2 inline-flex gap-2 items-center">
                    <button onClick={undo}
                        disabled={historyIndex <= 0}
                        className="w-[50px] cursor-pointer h-[50px] disabled:opacity-30  bg-white text-black shadow inline-flex justify-center items-center rounded-full border hover:opacity-60 opacity-100 transition-opacity duration-300 border-neutral-300 text-2xl">
                        <LuUndo2 />
                    </button>
                    <button onClick={redo}
                        disabled={historyIndex >= history.length - 1}
                        className={`w-[50px] cursor-pointer h-[50px] disabled:opacity-30 bg-white text-black shadow inline-flex justify-center items-center rounded-full border hover:opacity-60 opacity-100 transition-opacity duration-300 border-neutral-300 text-2xl`}>
                        <LuRedo2 />
                    </button>
                </div>
            </div>
        </>
    )
}
