const { admin, db } = require('./firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send('Backend is running!');
}).post('/', async (req, res) => {
    try {
        await db.collection("users").doc("testdoc").set({
            name: "any string"
        });
    } catch (err) {
        res.send(err)
    }
    res.send("Firebase is running");
})

// routes (in order of importance):
// - business registration
//     POST{name, email, category, desc, latitude, longitude, profile picture(s)}
//     /signup/business
//     use firebase createUserWithEmailAndPassword func to handle the user's pass
app.post('/signup/business', async (req, res) => {
    const { name, email, businessCategory, description, latitude, longitude, pictureUrls } = req.body;
    // leave doc empty so firebase makes a uuid for business
    try {
        console.log(`New biz acc!  -> ${name} in ${businessCategory} is added`);
        await db.collection("businesses").doc().set({
            name: name,
            email: email,
            businessCategory: businessCategory,
            description: description,
            latitude: latitude,
            longitude: longitude,
            pictureUrls: pictureUrls,
        });
    } catch (err) {
        console.log('there was an error. i died. no puedo agregar a firebase');
        res.status(500).send(err);
    }
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
        res.status(500).send(err);
    }
    res.status(200).send();
})

// - user/business login
//     POST{email,name} /login
app.post('/login', (req, res) => {
    // TODO(implement)
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
