import { Link, NavLink } from "react-router";

export default function Footer() {
    return (

        <footer className="h-[80px] w-full border-b border-gray-700 bg-gray-700 text-white ">
            <div className="max-w-[1280px] mx-auto flex justify-between items-center w-full h-full">
                <Link className="text-lg inline-flex flex-col" to="/">Kana Express. <span className="font-jpn text-sm">かなエクスプレス</span></Link>
                <Menu />
            </div>
        </footer>
    )
}


function Menu() {
    const menuItems = [
         {
            path: "/",
            label: "Inicio",
        },
        {
            path: "/learn",
            label: "Aprender",
        },
        {
            path: "/practice",
            label: "Practicar",
        }
    ]

    return (
        <ul className="flex justify-center items-center gap-2">
            {menuItems.map(item => (
                <li key={item.path} className="">
                    <NavLink to={item.path}
                        className={({ isActive }) =>
                            [
                                isActive ? " text-white bg-neutral-800" : "", // Enfatiza el activo
                            ].filter(Boolean).join(" ").concat(" px-4 py-2 bg-neutral-100/0 rounded-lg transition-all items-center flex")
                        }
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
