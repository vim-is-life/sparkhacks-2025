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


// routes (in order of importance):
// - business registration
//     POST{name, email, category, desc, latitude, longitude, profile picture(s)}
//     /signup/business
//     use firebase createUserWithEmailAndPassword func to handle the user's pass
app.post('/signup/business', async (req, res) => {
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
    // since this is for hackathon, wont handle api issues
    // const { name, email, businessCategory, description, address, pictureUrls } = req.body;
    const { userId, name, email, businessCategory, description, address } = req.body;

    const url = encodeURI(`https://geocode.maps.co/search?q=${address}&api_key=${geocodingApiKey}`);
    const apiResponse = await fetch(url);

    // these are default values. i don't expect api call to fail for this hackathon
    let lat = -1;
    let lon = -1;
    if (apiResponse.ok) {
        const data = await apiResponse.json();
        apiJson = data[0]
        lat = apiJson.lat;
        lon = apiJson.lon;
    }

    // leave doc empty so firebase makes a uuid for business
    try {
        // await db.collection("businesses").doc().set({
        //     name: name,
        //     email: email,
        //     businessCategory: businessCategory,
        //     description: description,
        //     address: address,
        //     latitude: lat,
        //     longitude: lon,
        //     pictureUrls: pictureUrls,
        // });
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

// - user resgistration
//     POST{name, email, categories_of_interest}
//     /signup/user
//     use firebase createUserWithEmailAndPassword func to handle the user's pass
app.post('/signup/user', async (req, res) => {
    const {name, email, categories_of_interest } = req.body;
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
app.post('/businesses', (req, res) => {
    // TODO(implement)
})

// time permitting
// - user profile page
// - user profile page
//     GET /accountinfo
// - business profile page


// listening port
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
