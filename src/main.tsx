import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Learn from './pages/Learn';
import Practice from './pages/Practice';
import LearnKana from './pages/LearnKana';
import PracticeKana from './pages/PracticeKana';



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <main className="max-w-[1280px] mx-auto">
                <Navbar />
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/learn/:kana" element={<LearnKana />} />
                    <Route path="/practice" element={<Practice />} />
                    <Route path="/practice/:kana" element={<PracticeKana />} />
                </Routes>
            </main>
        </BrowserRouter>
    </StrictMode>,
)
