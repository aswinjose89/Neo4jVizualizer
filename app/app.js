/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const dotenv = require('dotenv');

var nmApp = require('./index.js');
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8666";
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/static', express.static(__dirname + '/assets'));

/**
 * Routes Definitions
 */
app.get('/', async (req, res) => {
    const neo4jReader = new nmApp.neo4jReaderService();
    let test= await neo4jReader.ReadConnLog();
    res.render('base.ejs', { test:test }); // load the pricing.ejs file
});

app.get('/neo4j', async (req, res) => {
    res.render('visualizers/neovis.ejs'); // load the pricing.ejs file
});

app.get('/testapi', async (req, res) => {
    res.send({"status": "success"});
});


/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
