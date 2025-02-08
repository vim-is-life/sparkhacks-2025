import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, Input } from "@material-tailwind/react";
import { ArrowLeftIcon, XMarkIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { auth, storage } from "../firebase"; // Import Firebase services
import { ref, uploadBytes } from "firebase/storage";
import "./ocean-theme.css";

function BusinessPhotoUploadPage() {
  const [photos, setPhotos] = useState([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);
    const newPhotos = files.map((file) => ({
      name: file.name,
      file, // Store the file object for uploading
      url: URL.createObjectURL(file), // Preview URL
    }));
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const removePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUploading(true);

    try {
      const user = auth.currentUser; // Get the current authenticated user
      if (!user) {
        throw new Error("User not authenticated");
      }

      const userId = user.uid; // Use the user's UID as the unique identifier

      // Upload photos to Firebase Storage
      await Promise.all(
        photos.map(async (photo) => {
          const storageRef = ref(storage, `businessPhotos/${userId}/${photo.name}`);
          await uploadBytes(storageRef, photo.file); // Upload the file
        })
      );

      console.log("Photos uploaded successfully!");
      navigate("/"); // Navigate to the dashboard
    } catch (error) {
      console.error("Error uploading photos:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleSkip = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center ocean-gradient overflow-hidden">
      <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-md floating">
        <Button
          variant="text"
          className="absolute top-4 left-4 text-blue-600 hover:text-blue-800 hover:bg-blue-100"
          onClick={() => navigate("/business/signup")}
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back
        </Button>
        <CardHeader className="pt-16">
          <Typography variant="h4" className="flex items-center justify-center text-blue-600">
            <PhotoIcon className="h-6 w-6 mr-2" />
            Showcase Your Business
          </Typography>
          <Typography variant="small" color="gray" className="mt-2 text-center">
            Add photos of your business to attract more customers
          </Typography>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="relative">
                  <img
                    src={photo.url || "/placeholder.svg"}
                    alt={photo.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <Button
                    type="button"
                    variant="text"
                    color="red"
                    size="sm"
                    className="absolute top-2 right-2 p-1"
                    onClick={() => removePhoto(index)}
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </Button>
                </div>
              ))}
              {photos.length < 4 && (
                <div className="flex items-center justify-center w-full h-40 border-2 border-dashed border-blue-300 rounded-md">
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <PhotoIcon className="h-8 w-8 text-blue-500" />
                      <Typography variant="small" color="blue" className="mt-2">
                        Add Photo
                      </Typography>
                    </div>
                    <Input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              )}
            </div>
            <div className="flex justify-between">
              <Button variant="outlined" color="blue" onClick={handleSkip} disabled={uploading}>
                Skip for Now
              </Button>
              <Button type="submit" color="blue" disabled={uploading}>
                {uploading ? "Uploading..." : "Continue"}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
}

export default BusinessPhotoUploadPage