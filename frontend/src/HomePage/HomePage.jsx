import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import MyMapComponent from "../components/Map";
import "../index.css"



function HomePage() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Link to={'/signup'}>
                <Button>Button</Button>
            </Link>
            <div className='container'>
                <div className="map">
                    <MyMapComponent  />
                </div>
                
                <div className='bg-white side-view'>
                    {/* <BCard/> */}
                </div>
            </div>
        </>
        
    )
}

export default HomePage;