import { NavLink } from "react-router"

export default function Menu() {
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
                                isActive ? "active" : "", // Enfatiza el activo
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
