import { ProductType } from "./types/product.types";
import ProductModel from './product.schema'

export class ProductService {


    async create(product: ProductType) {
        const createdProduct = await ProductModel.create(product)

        return createdProduct
    }

    async list() {
        const listedProducts = await ProductModel.find()

        return listedProducts
    }

    async find(id) {
        const findedProduct = await ProductModel.findById(id)

        return findedProduct
    }

    async search(filter: any): Promise<any[]> {
        try {
            const products: any[] = await ProductModel.find(filter).exec();
            return products;
        } catch (error) {
            throw new Error("Erro na busca dos produtos");
        }
    }

    async update(id, dataToUpdate: ProductType) {
        const updatedProduct = await ProductModel.findOneAndUpdate({ _id: id }, {
            productName: dataToUpdate.productName,
            productQuantity: dataToUpdate.productQuantity,
            productPrice: dataToUpdate.productPrice,
            productDesc: dataToUpdate.productDesc
        }, { new: true })

        return updatedProduct
    }

    async delete(id) {
        return await ProductModel.findOneAndDelete({ _id: id })
    }
}