import { useState } from "react";
import DrawBoard from "../components/DrawBoard";
import { MdCheck, MdOutlineArrowBack } from "react-icons/md";


export default function LearnKana() {
    const grid = [
        ["", "a", "i", "u", "e", "o"],
        ["", "", "", "", "", ""],
        ["k", "", "", "", "", ""],
        ["s", "", "", "", "", ""],
        ["t", "", "", "", "", ""],
        ["n", "", "", "", "", ""],
        ["h", "", "", "", "", ""],
        ["m", "", "", "", "", ""],
        ["y", "", "", "", "", ""],
        ["r", "", "", "", "", ""],
        ["w", "", "", "", "", ""],
    ];

    const [selectedRow, setSelectedRow] = useState(1);
    const [selectedCol, setSelectedCol] = useState(1);

    function handleNext() {
        if (selectedRow >= (grid.length - 1) && selectedCol >= (grid[grid.length - 1].length - 1)) {
            setSelectedRow(1);
            setSelectedCol(1);
            return;
        }
        if (selectedCol >= (grid[0].length - 1)) {
            setSelectedRow(selectedRow + 1);
            setSelectedCol(1);
            return;
        }
        setSelectedCol(selectedCol + 1);
    }

    function handlePrev() {
        if (selectedRow <= 1 && selectedCol <= 1) {
            setSelectedRow(grid.length - 1);
            setSelectedCol(grid[grid.length - 1].length - 1);
            return;
        }
        if (selectedCol <= 1) {
            setSelectedRow(selectedRow - 1);
            setSelectedCol(grid[grid.length - 1].length - 1);
            return;
        }
        setSelectedCol(selectedCol - 1);
    }

    return (
        <div className="w-full h-[80svh] flex justify-center gap-4">
            <div className="w-min h-min border-neutral-300 flex flex-col border overflow-hidden rounded-xl">
                {/* Filas*/}
                {grid.map((_, row) => (
                    <div className="flex" key={`row-${row + 1}`}>
                        {/* Columnas */}
                        {grid[row].map((label, col) => {
                            const isSelected = selectedRow === row && selectedCol === col ? "bg-blue-300" : ""
                            const isGuide = row === 0 || col === 0 ? 'bg-neutral-100' : "";
                            const isDecoration = row === 0 && col === 0 ? 'bg-neutral-300' : '';
                            return (
                                <div
                                    className={`w-[50px] h-[50px] border border-neutral-300 flex justify-center items-center ${isDecoration} ${isGuide} ${isSelected}`}
                                    key={`col-${col + 1}`}
                                >
                                    {label}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <DrawBoard />
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