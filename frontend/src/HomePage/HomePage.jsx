import { Button } from "@material-tailwind/react";
import { DrawerWithNavigation } from "../components/DrawerWithNavigation";
import '../index.css'
import { Link } from "react-router-dom";
import MyMapComponent from "../components/Map";
import BCard from "../components/BCard";



function HomePage() {
    return (
        <>

            <DrawerWithNavigation />

            <Link to={'/signup'}>
                <Button>Button</Button>
            </Link>
            <div className='container'>
                <div className="map">
                    <MyMapComponent  />
                </div>
                
                <BCard/>
            </div>
        </>
        
    )
}

export default HomePage;