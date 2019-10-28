const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const request = require('request')
const cors= require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist', 'Restaurants-near-me')))

// const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e06f5b3da2be4501af757078cf03a985`
const googlePLacesQueryUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Albany&key=AIzaSyBMh4S3Es4U2U7AAelpPXCyg0XyHCKc_7Y"
//Check
app.get('/api/hello', (req, res) => res.send('Hello World!'))

app.get('/api/places', (req, res) => {
    request.get(googlePLacesQueryUrl)
    .pipe(res);
    console.log(res);
});

app.get('/api/search/places', (req, res) => {
    var googleSearchPLaces = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+"+req.query.searchValue+"&key=AIzaSyBMh4S3Es4U2U7AAelpPXCyg0XyHCKc_7Y"
    request.get(googleSearchPLaces)
    .pipe(res);
});

// app.get('/api/places/:searchValue', (req, res) => {
//     request.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+"+searchValue+"&key=AIzaSyBMh4S3Es4U2U7AAelpPXCyg0XyHCKc_7Y")
//     .pipe(res);
//     console.log(res);
// });

// app.get('/api/places/id', (req, res) => {
//     // request.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+"+id+"&key=AIzaSyBMh4S3Es4U2U7AAelpPXCyg0XyHCKc_7Y")
//     // .pipe(res);
//     console.log("Congratulations", res);
//     var id = req.query.id;
//     console.log("From server.js id", id);
// });

app.get('/api/places/id', (req, res) => {
    var googlePLacesQueryId = "https://maps.googleapis.com/maps/api/place/details/json?place_id="+req.query.id+"&fields=name,rating,formatted_phone_number,photos&key=AIzaSyBMh4S3Es4U2U7AAelpPXCyg0XyHCKc_7Y";
    request.get(googlePLacesQueryId)
    .pipe(res);
});

// app.get('/api/places/photo', (req, res) => {
//     var googlePLacesQueryPhoto = "https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBMh4S3Es4U2U7AAelpPXCyg0XyHCKc_7Y&maxwidth=400&photoreference="+req.query.photoReference;
//     request.get(googlePLacesQueryPhoto)
//     .pipe(res);
//     console.log(res);
    
// });

// app.get('/api/places/photo', (req, res) => {
//     var googlePLacesQueryPhoto = "https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyBMh4S3Es4U2U7AAelpPXCyg0XyHCKc_7Y&maxwidth=400&photoreference="+req.query.photoReference;
//     return googlePLacesQueryPhoto;
    
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))