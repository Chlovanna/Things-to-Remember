const path = require('path');
const express = require("express");
const apiRoutes = require("./Routes/apiRoutes");
const hmtlRoutes = require("./Routes/htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", hmtlRoutes);

// Sart the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: http://localhost:${PORT}`));
