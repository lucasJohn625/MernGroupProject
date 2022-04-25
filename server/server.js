const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);


require("./config/mongoose.config");
require("./routes/blog.routes")(app);


app.listen(8000, () => {
    console.log(`Listening on port 8000`);
});
