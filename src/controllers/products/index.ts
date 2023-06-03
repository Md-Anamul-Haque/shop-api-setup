import addProduct from "./product.add";
import productFind from "./product.find";
import productFindOne from "./product.findOne";

const productHandlers={
    add:addProduct,
    find:productFind,
    findOne:productFindOne,
    // update:update
}
export default productHandlers