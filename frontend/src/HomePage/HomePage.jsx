import { Button } from "@material-tailwind/react";
import P5Sketch from '../components/P5Sketch';


function HomePage() {
    return (
        <>

            {
                <P5Sketch />
                    
            }

            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Button>Button</Button>

        </>
        
    )
}

export default HomePage;