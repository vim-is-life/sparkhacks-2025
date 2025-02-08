import { Outlet } from "react-router-dom";
import P5Sketch from './components/P5Sketch'

export default function Layout() {
    return (
        <div>
            <P5Sketch />
            <div className="py-4 px-8 flex flex-col min-h-screen ">
                <Outlet />
            </div>
        </div>
    )
}