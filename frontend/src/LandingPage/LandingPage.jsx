import {
  Button,
  Typography,
} from "@material-tailwind/react";


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
    </>
  );
}

export default LandingPage;