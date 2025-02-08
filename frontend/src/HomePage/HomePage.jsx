import { Button } from "@material-tailwind/react";
import { DrawerWithNavigation } from "../components/DrawerWithNavigation";
import '../index.css'
import { Link } from "react-router-dom";
import MyMapComponent from "../components/Map";
import BCard from "../components/BCard";
import { useEffect, useState } from 'react';



function HomePage() {
    return (
        <>

            
            <Link to={'/signup'}>
                <Button>Button</Button>
            </Link>
            <div className='container'>
                <div className="map">
                    <MyMapComponent />
                </div>
                <div>
                    <BCard
                        title = "HOLDER" 
                        srclink = 'https://media.istockphoto.com/id/141914198/photo/young-labrador-retriever-4-months-old.jpg?s=612x612&w=0&k=20&c=w3I20o2KkK9cKzdY69nqbj_HNSJFGp28KgK9Gp11UME='
                        description = "this is a description of the card"
                        buttonText = "SOCIAL MEDIA"
                    />
                </div>
                    
                
            </div>
        </>
        
    )
}

export default HomePage;