import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Learn from './pages/Learn';
import Practice from './pages/Practice';
import Footer from './components/Footer';
import LearnDetail from './pages/LearnDetail';



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            < >
                <Navbar />
                <main className="max-w-[1280px] mx-auto min-h-[100svh] px-4">
                    <Routes>
                        <Route index path="/" element={<Home />} />
                        <Route path="/learn" element={<Learn />} />
                        <Route path="/learn/:kana" element={<LearnDetail />} />
                        <Route path="/practice" element={<Practice />} />
                    </Routes>
                </main>
                <Footer />

            </>
        </BrowserRouter>
    </StrictMode>,
)
