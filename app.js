const express = require("express");
const app = express();
const product = require("./db/products-data");
const fs = require("fs");
const { dirname } = require("path");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/product", (req, res) => {

    res.send(product);
})

app.get("/Product/:id", (req, res) => {

    const userId = req.params.id;
    const products = product.find(x => x.id == userId);

    if (!products) {
        return res.status(404).send("Not Found!");
    };



    return res.send(products);





app.post("create-product", (req, res) => {
    const newProduct = {
        "id": req.body.id,
        "title": req.body.title,
        "price": req.body.price,
        "rating": req.body.rating,
        "stock": req.body.stock,
        "brand": req.body.brand,
        "category": req.body.category,
    }

    product.push(newProduct);

    try {
        fs.writeFileSync(path.join(__dirname, "./db/products-data.json").JSON.stringfy(product))
    } catch (err) {
        return res.status(404).send("Not Found!");
    }
    res.json(newProduct);
});

app.put("update-product", (req, res) => {
    const userId = req.params.id;
    const products = product.find(x => x.id == userId);

    product.rating = req.body.rating;
    product.stock = req.body.stock;

    try {
        fs.writeFileSync(path.join(__dirname, "./db/products-data.json").JSON.stringfy(product))
    } catch (err) {
        return res.status(404).send("Not Found!");
    }

    res.send("edite product");

})





app.listen(8080);