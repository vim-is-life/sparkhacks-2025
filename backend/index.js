// note that we use https://geocode.maps.co/ for our geocoding
const { admin, db } = require('./firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
const geocodingApiKey = "67a7b07bd7c04782315820cwze3a649";

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));


// return the distance (in meters) between two points on the earth where point 1
// is represented by `lat1` and `lon1` and point 2 by `lat2` and `lon2`.
// - reference: https://www.movable-type.co.uk/scripts/latlong.html
function calculateDistBetweenTwoPoints(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres

    return d;
}

// routes (in order of importance):
// - business registration
//     POST{name, email, category, desc, latitude, longitude, profile picture(s)}
//     /signup/business
//     use firebase createUserWithEmailAndPassword func to handle the user's pass
app.post('/signup/business', async (req, res) => {
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
    // since this is for hackathon, wont handle api issues
    const { userId, name, email, businessCategory, description, address } = req.body;

    const url = encodeURI(`https://geocode.maps.co/search?q=${address}&api_key=${geocodingApiKey}`);
    const apiResponse = await fetch(url);

    // these are default values. i don't expect api call to fail for this hackathon
    let lat = -1;
    let lon = -1;
    if (apiResponse.ok) {
        const data = await apiResponse.json();
        console.log("This is the data: ", data);
        apiJson = data[0]
        lat = apiJson.lat ?? -1;
        lon = apiJson.lon ?? -1;
    }

    // parse address to street, city, state, and zip
    // NOTE: we must receive the address in this format, because we dont have
    // logic to work around errors

    // leave doc empty so firebase makes a uuid for business
    try {
        await db.collection("businesses").doc(userId).set({
            name: name,
            email: email,
            businessCategory: businessCategory,
            description: description,
            address: address,
            latitude: lat,
            longitude: lon,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }

    console.log(`New biz acc!  -> ${name} in ${businessCategory} is added`);
    console.log(`lat: ${lat}\nlon: ${lon}`);
    res.status(200).send();
})

// - business registration, adding the photos to the field
app.post('/signup/business/addphotos', async (req, res) => {
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
    // since this is for hackathon, wont handle api issues
    const { userId, pictureUrls } = req.body;

    if (!userId || !pictureUrls) {
        return res.status(400).send("userId and pictureUrls are required");
    }

    // leave doc empty so firebase makes a uuid for business
    try {
        await db.collection("businesses").doc(userId).set(
            { pictureUrls: pictureUrls },
            { merge: true }
        );
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }

    console.log(`added photos for ${userId}`);
    res.status(200).send();
})

app.post('/signup/user', async (req, res) => {
    const { name, email, categories_of_interest } = req.body;

    try {
        console.log(`New user acc! -> ${name} who likes ${categories_of_interest}`);
        await db.collection("users").doc().set({
            name: name,
            email: email,
            categories_of_interest: categories_of_interest,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

    res.status(200).send();
})

// - view all businesses, send relevant ones
//     GET{lat, lon} businesses/
app.get('/businesses', async (req, res) => {
  const MAX_DISTANCE_MILES = 5;
  const MAX_DISTANCE_METERS = MAX_DISTANCE_MILES * 1609.34;

  // Parse the user's latitude and longitude from the query parameters
  const userLat = parseFloat(req.query.lat);
  const userLon = parseFloat(req.query.lon);

  try {
    // Retrieve the collection snapshot from Firestore
    const snapshot = await db.collection("businesses").get();
    const businesses = [];

    // Loop over each document in the snapshot
    snapshot.forEach((doc) => {
      // Get business data from document
      const businessData = doc.data();

      // Convert stored latitude and longitude from strings to numbers
      const businessLat = parseFloat(businessData.latitude);
      const businessLon = parseFloat(businessData.longitude);

      // Calculate distance from the user location
      const distance = calculateDistBetweenTwoPoints(userLat, userLon, businessLat, businessLon);

      // Only include businesses within the maximum allowed distance
      if (distance <= MAX_DISTANCE_METERS) {
        // Add an id and distance to the business data for later use
        businesses.push({ id: doc.id, ...businessData, distance });
      }
    });

    // Send the filtered businesses back to the client
    res.status(200).send(businesses);
  } catch (err) {
    console.error("Error fetching businesses:", err);
    res.status(500).send({ error: "Error fetching businesses" });
  }
});




// listening port
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});