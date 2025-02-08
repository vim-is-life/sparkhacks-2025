const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

// routes (in order of importance):
// - business registration
//     POST{name, email, category, desc, addr, profile picture(s)}
//     /signup/business
//     use firebase createUserWithEmailAndPassword func to handle the user's pass
// - user resgistration
//     POST{name, email, categories_of_interest}
//     /signup/user
//     use firebase createUserWithEmailAndPassword func to handle the user's pass
// - user/business login
//     POST{email,name} /login
// - view all businesses, send relevant ones
//     GET{lat, lon} businesses/
//
// time permitting
// - user profile page
// - user profile page
//     GET /accountinfo
// - business profile page


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));



app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// listing port
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
