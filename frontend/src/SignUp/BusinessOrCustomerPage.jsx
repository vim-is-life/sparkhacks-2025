import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Typography, Button } from "@material-tailwind/react";
import "./ocean-theme.css";

function BusinessOrCustomerPage() {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center overflow-hidden no-scrollbar border-red-900">
        <div className="max-w-full w-full px-4 z-10">
          <Typography variant="h1" className="text-4xl font-bold text-center mb-8 text-white">
            Dive Into Your Account
          </Typography>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white/80 backdrop-blur-md floating">
              <CardHeader shadow={false} floated={false} className="text-center p-4">
                <Typography variant="h5" className="flex items-center justify-center font-bold">
                  Business Account
                </Typography>
                <Typography variant="small" color="gray" className="mt-2">
                  Navigate your business waters
                </Typography>
              </CardHeader>
              <CardBody className="text-center">
                <Link to="/business/signup">
                  <Button fullWidth color="blue">Set Sail as Business</Button>
                </Link>
              </CardBody>
            </Card>
            <Card className="bg-white/80 backdrop-blur-md floating">
              <CardHeader shadow={false} floated={false} className="text-center p-4">
                <Typography variant="h5" className="flex items-center justify-center font-bold">
                  Customer Account
                </Typography>
                <Typography variant="small" color="gray" className="mt-2">
                  Embark on your personal journey
                </Typography>
              </CardHeader>
              <CardBody className="text-center">
                <Link to="/customer/signup">
                  <Button fullWidth color="teal">Sail as Customer</Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
   
  );
}

export default BusinessOrCustomerPage;
