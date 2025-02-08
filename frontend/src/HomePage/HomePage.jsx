import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";



function HomePage() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Link to={'/signup'}>
                <Button>Button</Button>
            </Link>
            

        </>
        
    )
}

export default HomePage;