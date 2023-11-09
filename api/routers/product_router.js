// This module consists of the route(path) of each data model. This serves as a manager that redirects http requests to their designated CRUD operations in controller

//access router functionalities
const router = require("express").Router();

//import CRUD operations from controller
const {
    create_product,
    update_product,
    delete_product,
    get_one_product,
    get_all_products
} = require("../controllers/product_controller");



//Router for creating a new product
router.post("/", create_product);

//Router for updating a new product
router.put("/:id", update_product);

//Router for deleting a new product
router.delete("/:id", delete_product);

//Router for searchin a certain product
router.get("/:id", get_one_product);

//Router for searchin a certain product
router.get("/", get_all_products);


module.exports = router;