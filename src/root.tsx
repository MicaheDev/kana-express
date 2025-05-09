import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";
import Navbar from "./components/Navbar";


export function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <head>
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Kana Express</title>
                <Meta />
                <Links />
            </head>
            <body>
                <main className="max-w-[1280px] mx-auto">
                    <Navbar />
                    {children}
                </main>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function Root() {
    return <Outlet />;
}
