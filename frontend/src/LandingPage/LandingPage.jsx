import { Search, Globe, TrendingUp, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { Typography, Button, } from "@material-tailwind/react";
import CarouselCustomNav from "../components/CarouselCustomNav";

const carouselImages = [
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
];
export default function TideTogetherLanding() {
  const { currentUser } = useAuth();

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

      <CarouselCustomNav images={carouselImages}/>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-100 to-teal-200 text-blue-900">
      <Hero currentUser={currentUser} />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
      
    </>
    

  );
}

function Hero({ currentUser }) {
  return (
    <section id="home" className="pt-32 pb-20 text-center relative overflow-hidden">
      <div className="px-4 relative z-10">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-400">
          Ride the Wave of Visibility
        </h1>
        <p className="text-2xl mb-8 text-blue-800 max-w-2xl mx-auto">
          Helping small businesses surface and thrive in the vast ocean of the market
        </p>
        {currentUser ? (
          <Link to="/home">
            <button className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-teal-500 transition duration-300 transform hover:scale-105 shadow-lg">
              Dive In
            </button>
          </Link>
        ) : (
          <Link to="/signin">
            <button className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-teal-500 transition duration-300 transform hover:scale-105 shadow-lg">
              Sign In to Dive In
            </button>
          </Link>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#0099ff"
            fillOpacity="0.2"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "Enhanced Visibility",
      description: "Get your business noticed in local searches and directories",
    },
    {
      icon: <Globe className="h-12 w-12 text-teal-600" />,
      title: "Wider Reach",
      description: "Expand your customer base beyond your immediate locality",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-emerald-600" />,
      title: "Growth Insights",
      description: "Gain valuable data on customer engagement and market trends",
    },
    {
      icon: <Users className="h-12 w-12 text-cyan-600" />,
      title: "Community Building",
      description: "Connect with other businesses and create a supportive network",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          How TideTogether Lifts Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white bg-opacity-50 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg transform hover:scale-105 transition duration-300"
            >
              <div className="mb-4 transform hover:rotate-12 transition duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                {feature.title}
              </h3>
              <p className="text-blue-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      business: "Coastal Cafe",
      quote: "TideTogether helped us reach customers we never knew existed!",
    },
    {
      name: "Mike R.",
      business: "Harbor Handmade",
      quote: "Our online presence has grown tremendously thanks to TideTogether.",
    },
    {
      name: "Emily T.",
      business: "Seaside Spa",
      quote: "The insights we've gained have been invaluable for our business growth.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-r from-blue-500 to-teal-400 text-white relative overflow-hidden"
    >
      <div className="px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Voices from the Shore
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-filter backdrop-blur-lg"
            >
              <p className="mb-4 text-lg italic">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm">{testimonial.business}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-20 bg-blue-900 text-white text-center">
      <div className="px-4">
        <h2 className="text-4xl font-bold mb-6">Ready to Make Waves?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join TideTogether and watch your business visibility soar to new heights.
        </p>
        <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-teal-500 hover:to-blue-600 transition duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
          Get Started Now
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
              TideTogether
            </h3>
            <p className="text-blue-200">
              Empowering small businesses to make a big splash in the market.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-teal-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About Us", "Features", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-teal-300 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4 text-teal-300">
              Stay Connected
            </h4>
            <p className="text-blue-200 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md text-blue-900 w-full"
              />
              <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-r-md hover:from-teal-500 hover:to-blue-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>&copy; 2025 TideTogether. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
