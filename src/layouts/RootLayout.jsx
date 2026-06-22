import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import "./RootLayout.css"

export default function RootLayout() {
    return (
        <>
            <div className="global-bg-fixed"></div>

            <div className="layout-wrapper">
                <Header />

                <main className="main-content"> 
                    <Outlet />
                </main>

                <Footer />
            </div>
        </>
    )
}