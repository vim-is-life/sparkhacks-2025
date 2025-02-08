import {
  Button,
  Typography,
} from "@material-tailwind/react";
import CarouselCustomNav from "../components/CarouselCustomNav.jsx"

const carouselImages2 = [
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
];

function LandingPage() {
  return (
    <>
      <div className="relative min-h-screen w-full bg-[url('https://www.material-tailwind.com/image/image-6.png')] bg-center bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/50" />
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto">
            <Typography
              variant="h1"
              color="white"
              className="lg:text-5xl text-3xl"
            >
              TideTogether
            </Typography>
            <Typography
              color="white"
              variant="lead"
              className="mt-2 w-full lg:w-5/12"
            >
              The time is now for it be okay to be great. People in this world
              shun people for being nice.
            </Typography>
            <div className="mt-10 flex gap-2">
              <Button variant="gradient" color="white">
                get started
              </Button>
              <Button variant="text" color="white">
                read more
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CarouselCustomNav images={carouselImages2}/>

      
      
    </>
  );
}

export default LandingPage;