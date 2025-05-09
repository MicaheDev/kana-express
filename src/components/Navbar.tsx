

import { NavLink } from "react-router";
import { Link } from "react-router";

function Menu() {
    const menuItems = [
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
                        end
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default function Navbar() {
    return (
        <nav className="h-[80px] w-full flex items-center justify-between">
            <Link className="text-lg inline-flex items-center gap-2" to="/"><img className="w-6 h-6" src="/vite.svg" alt="" />Kana Express.</Link>            
            <Menu />
        </nav>
    )
}


