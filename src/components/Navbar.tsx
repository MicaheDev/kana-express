

import { Link } from "react-router";
import Menu from "./Menu";


export default function Navbar() {
    return (
        <>
            <nav className="h-[80px] max-w-[1280px] w-full mx-auto sticky bg-white z-[100] top-0 flex items-center justify-between border-b border-gray-700">
                <Link className="text-lg inline-flex items-center gap-4" to="/">
                <img src="/vite.svg" alt="Kana express logo" className="w-12 h-12" />
                    <div className="inline-flex flex-col">
                        Kana Express. <span className="font-jpn text-sm">かなエクスプレス</span>
                    </div>
                </Link>
                <Menu />
            </nav>
        </>
    )
}





