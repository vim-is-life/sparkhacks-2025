import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardFooter, Typography, Button, Input } from "@material-tailwind/react";
import BusinessCategorySelect from "../components/BusinessCategoryDropDown";
import "./ocean-theme.css";

function SignUpBusinessPage() {
    // States for the users
    const [businessName, setBusinessName] = useState("");
    const [businessEmail, setBusinessEmail] = useState("");
    const [businessCategory, setBusinessCategory] = useState("");
    const [businessDescription, setBusinessDescription] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");
    const [businessPassword, setBusinessPassword] = useState("");

    const [isSignUp, setIsSignUp] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        console.log({
            businessName,
            businessEmail,
            businessCategory,
            businessDescription,
            businessAddress,
            businessPassword,
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden">
            <Card className="w-full max-w-md bg-white/80 backdrop-blur-md floating">
                <CardHeader className="text-center p-4">
                <Typography variant="h5" className="text-blue-600 font-bold">
                    Anchor Your Business
                </Typography>
                <Typography variant="small" color="gray" className="mt-2">
                    Register your business vessel
                </Typography>
                </CardHeader>
                <CardBody>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {isSignUp && (
                    <div className="space-y-2">
                        <Typography variant="small">Vessel Name</Typography>
                        <Input 
                            id="businessName" 
                            value = {businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            type="text" 
                            required 
                            className="bg-white/50" 
                        />
                    </div>
                    )}
                    <div className="space-y-2">
                        <Typography variant="small">Captain's Log (Email)</Typography>
                        <Input 
                            id="email" 
                            value={businessEmail}
                            onChange={(e) => setBusinessEmail(e.target.value)}
                            type="email" 
                            required 
                            className="bg-white/50" 
                        />
                    </div>
                    <div className="space-y-2">
                        <Typography variant="small">Category</Typography>
                        <BusinessCategorySelect
                            type = "text"
                            required
                            value = {businessCategory}
                            onSelect={(category) => setBusinessCategory(category)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Typography variant="small">Description</Typography>
                        <Input 
                            id="description"
                            value = {businessDescription} 
                            onChange={(e) => setBusinessDescription(e.target.value)}
                            type="description" 
                            required 
                            className="bg-white/50" 
                        />
                    </div>
                    <div className="space-y-2">
                        <Typography variant="small">Address</Typography>
                        <Input 
                            id="address"
                            value = {businessAddress}
                            onChange={(e) => setBusinessAddress(e.target.value)}
                            type="address" 
                            required 
                            className="bg-white/50"
                        />
                    </div>
                    <div className="space-y-2">
                        <Typography variant="small">Secret Code (Password)</Typography>
                        <Input 
                            id="password"
                            value = {businessPassword}
                            onChange={(e) => setBusinessPassword(e.target.value)}

                            type="password" 
                            required 
                            className="bg-white/50" 
                        />
                    </div>
                    <Button type="submit" fullWidth color="blue">
                        {isSignUp ? "Set Sail" : "Board Your Ship"}
                    </Button>
                </form>
                </CardBody>
                <CardFooter className="flex justify-center">
                    <Button variant="text" color="blue" onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp ? "Already have a ship? Board now" : "Need a new vessel? Register here"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default SignUpBusinessPage;