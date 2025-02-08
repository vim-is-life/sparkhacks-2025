import { Button } from "@material-tailwind/react";
import { DrawerWithNavigation } from "../components/DrawerWithNavigation";
import '../index.css'
import { Link } from "react-router-dom";
import MyMapComponent from "../components/Map";



function HomePage() {
    return (
        <>

            <DrawerWithNavigation />

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