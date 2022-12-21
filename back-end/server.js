// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
let {PORT} = require("../back-end/constant/index")


PORT = process.env.PORT || 5000;

// LISTEN
app.listen(PORT, () => {
  console.log(`🎧 Listening on port ${PORT} 🎧 `);
});

