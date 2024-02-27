const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.json([
    {
        name: "Bob",
        email: "bob@gmail.com"

    },
    {
        name: "Alice",
        email: "alice@hotmail.com"

    },
    {
        name: "John",
        email: "john@yahoo.com"

    },
    {
        name: "Maria",
        email: "maria@yahoo.com.uk"

    }
]));


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});