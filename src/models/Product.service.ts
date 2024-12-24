import ProductModel from "../schema/Product.model"; //? ProductModel qnaday paydo bo'lib qolyapti

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }
}

export default ProductService;
