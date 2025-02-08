import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { Card, CardBody, CardHeader, CardFooter, Typography, Button, Input } from "@material-tailwind/react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import "./ocean-theme.css";

function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Redirect after sign-in

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null); // Clear previous errors

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/"); // Redirect to dashboard after successful sign-in
        } catch (error) {
            setError("Invalid email or password. Please try again.");
            setEmail('')
            setPassword('');
            await signOut(auth);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-md bg-white/80 backdrop-blur-md floating">
                <CardHeader className="text-center p-4">
                    <Typography variant="h5" className="text-blue-600 font-bold">
                        Sign In
                    </Typography>
                    <Typography variant="small" color="gray" className="mt-2">
                        Enter your credentials to access your account
                    </Typography>
                </CardHeader>
                <CardBody>
                    {error && <Typography color="red" className="mb-3">{error}</Typography>}
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                        <Button type="submit" fullWidth color="blue">
                            Sign In
                        </Button>
                    </form>
                </CardBody>
                <CardFooter className="flex justify-center">
                    <Typography variant="small">
                        Don't have an account? <a href="/signup" className="text-blue-600">Sign up</a>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
}

export default SignInPage;
