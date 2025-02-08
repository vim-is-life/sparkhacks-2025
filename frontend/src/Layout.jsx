import { Outlet } from "react-router-dom";
import P5Sketch from './components/P5Sketch'
import { DrawerWithNavigation } from "./components/DrawerWithNavigation";
import Header from "./components/Header";

export default function Layout() {
    return (
        <div>
            <P5Sketch />
            
            <div className="flex flex-col min-h-screen">
                <Header/>
                <Outlet />
            </div>
        </div>
    )
}