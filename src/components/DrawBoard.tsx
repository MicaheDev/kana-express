import { useEffect, useRef, useState, type RefObject } from "react"
import { LuEraser } from "react-icons/lu"

export default function DrawBoard() {

    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef(null)
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return;
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        setCtx(canvas.getContext("2d"))
    }, [])


    function startDraw() {
        setIsDrawing(true)
        if (!ctx) return;
        ctx.beginPath()
        ctx.lineWidth = 20;
    }

    function drawing(e: React.MouseEvent<HTMLCanvasElement>) {
        if (!ctx || !isDrawing) return;
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        ctx.stroke();
    }

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };


    return (
        <>
            <div className="border relative border-neutral-300 rounded-xl bg-neutral-100">
                <canvas
                    ref={canvasRef}
                    width={700}
                    height={700}
                    onMouseDown={startDraw}
                    onMouseMove={drawing}
                    onMouseUp={() => setIsDrawing(false)}
                ></canvas>

                <button onClick={clearCanvas} className="w-[50px] cursor-pointer h-[50px] bg-white text-black shadow inline-flex justify-center items-center rounded-full border hover:opacity-60 opacity-100 transition-opacity duration-300 border-neutral-300 text-2xl absolute top-0 right-0 m-2">
                    <LuEraser />
                </button>
            </div>
        </>
    )
}
