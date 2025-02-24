import { useState } from "react";
import { Card, CardBody, CardHeader, CardFooter, Typography, Button, Input } from "@material-tailwind/react";
import BusinessCategorySelect from "../components/BusinessCategoryDropDown";
import "./ocean-theme.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { Navigate } from "react-router-dom";

function SignUpCustomerPage() {
    // States for sign-up form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [category, setCategory] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user;

        try {
            await axios.post('/signup/user', {
                name,
                email,
                categories_of_interest: category,
            });
            setRedirect(true);
            console.log("Form submitted", { email, password, category });
        } catch (err) {
            console.log(err);
        }
    };

    if (redirect) {
        return <Navigate to={'/home'} />
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-md bg-white/80 backdrop-blur-md floating">
                <CardHeader className="text-center p-4">
                    <Typography variant="h5" className="text-blue-600 font-bold">
                        Sign Up
                    </Typography>
                    <Typography variant="small" color="gray" className="mt-2">
                        Create your account to get started
                    </Typography>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Typography variant="small">Full Name</Typography>
                            <Input 
                                id="name" 
                                type="text" 
                                required 
                                className="bg-white/50" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Typography variant="small">Email</Typography>
                            <Input 
                                id="email" 
                                type="email" 
                                required 
                                className="bg-white/50" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Typography variant="small">Password</Typography>
                            <Input 
                                id="password" 
                                type="password" 
                                required 
                                className="bg-white/50" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Typography variant="small">Confirm Password</Typography>
                            <Input 
                                id="confirmPassword" 
                                type="password" 
                                required 
                                className="bg-white/50" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Typography variant="small">Category</Typography>
                            <BusinessCategorySelect
                                type = "text"
                                required
                                value = {category}
                                onSelect={(category) => setCategory(category)}
                            />
                        </div>
                        <Button type="submit" fullWidth color="blue">
                            Sign Up
                        </Button>
                    </form>
                </CardBody>
                <CardFooter className="flex justify-center">
                    <Typography variant="small">
                        Already have an account? <a href="/signin" className="text-blue-600">Log in</a>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
}

export default SignUpCustomerPage;
