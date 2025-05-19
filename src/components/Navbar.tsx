

import { NavLink } from "react-router";
import { Link } from "react-router";


export default function Navbar() {
    return (
        <nav className="h-[80px] w-full flex items-center justify-between border-b border-gray-700">
            <Link className="text-lg inline-flex flex-col" to="/">Kana Express. <span className="font-jpn text-sm">かなエクスプレス</span></Link>            
            <Menu />
        </nav>
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
                <li key={item.path}>
                    <NavLink to={item.path}
                        className={({ isActive, isPending, isTransitioning }) =>
                            [
                                isPending
                                    ? "bg-neutral-100/0 mr-2" // Añade animación de spinner y margen
                                    : "",
                                isPending && "opacity-70", // Reduce la opacidad durante la carga
                                isActive ? "bg-neutral-100/100" : "", // Enfatiza el activo
                                isTransitioning ? "bg-neutral-100/80 opacity-90" : "", // Ligeramente diferente de pending
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



