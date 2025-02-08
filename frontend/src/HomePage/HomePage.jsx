import { Button } from "@material-tailwind/react";
import { DrawerWithNavigation } from "../components/DrawerWithNavigation";
import '../index.css'


function HomePage() {
    return (
        <>

            <DrawerWithNavigation />

            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Button>Button</Button>

        </>
        
    )
}

export default HomePage;