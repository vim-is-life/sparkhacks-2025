import { Outlet, useLocation } from "react-router-dom";
import P5Sketch from "./components/P5Sketch";
import Header from "./Header/Header";

export default function Layout() {
    const location = useLocation();
    const isLandingPage = location.pathname === "/"; 

    return (
        <div>
            <P5Sketch />
            <Header />
            <div className={isLandingPage ? "min-h-screen" : "py-4 px-8 flex flex-col"}>
                <Outlet />
            </div>
        </div>
    );
}
