import { ProductType } from "./types/product.types";
import ProductModel from './product.schema'

export class ProductService {

    async initTable() {
        const exist = await ProductModel.count()

        if(exist) 
            return await ProductModel.find()

        const produto = await ProductModel.insertMany([
            {name: "Caneta", brand: "Bic", price: 3.99, quantity: 250},
            {name: "Borracha", brand: "Faber-Castell", price: 6, quantity: 134},
            {name: "Impressora", brand: "HP", price: 499.99, quantity: 12},
            {name: "Lapiseira", brand: "Bic", price: 7.99, quantity: 148},
            {name: "Lapis", brand: "Faber-Castell", price: 2.25, quantity: 360},
            {name: "Grafite", brand: "Faber-Castell", price: 9.99, quantity: 215},
            {name: "Caderno", brand: "Tilibra", price: 12, quantity: 125},
            {name: "Calendario", brand: "Tilibra", price: 16, quantity: 85},
            {name: "Papel A4", brand: "Report", price: 29, quantity: 194},
            {name: "Mouse", brand: "HP", price: 67, quantity: 31},
            {name: "Teclado", brand: "HP", price: 79.99, quantity: 24},
            {name: "Carregador", brand: "Samsung", price: 60, quantity: 17},
            {name: "Fone de Ouvido", brand: "Samsung", price: 99.99, quantity: 28},
            {name: "Bateria AA", brand: "Duracell", price: 15, quantity: 56},
            {name: "Tesoura", brand: "Faber-Castell", price: 10, quantity: 109},
        ])
        return produto
    }

    async create(product: ProductType) {
        const produto = await ProductModel.create(product)
        return produto
    }

    //quantidade é <= 100
    async consulta1() {
        const produto = await ProductModel.find(
            { quantity: { $lte: 100 } },
            { name: 1, brand: 1, quantity: 1, price: 1 }
        )
        
        return produto
    }

    //preço é >= 5 E a marca é da Faber-Castell
    async consulta2() {
        const produto = await ProductModel.find(
            { $and: [{ price: { $gte: 5 }}, 
                              { brand: "Faber-Castell"}]
            },
            { name: 1, brand: 1, quantity: 1, price: 1 }
        )   
        
        return produto
    }

    //a marca é Bic ou HP
    async consulta3() {
        const produto = await ProductModel.find(
            { $or: [{ brand: "Bic"}, 
                          { brand: "HP"}]
            },
            { name: 1, brand: 1, quantity: 1, price: 1 }
        )   
        
        return produto
    }

    //o preço e a quantidade são menores que 100
    async consulta4() {
        const produto = await ProductModel.find(
            { $and: [{ price: { $lte: 100 }}, 
                              { quantity: { $lte: 100 }}]
            },
            { name: 1, brand: 1, quantity: 1, price: 1 }
        )   
        
        return produto
    }

    async list() {
        const produto = await ProductModel.find()
        return produto
    }

    async find(id) {
        const produto = await ProductModel.findById(id)
        return produto
    }

    async update(id, product: ProductType){
        const produto = await ProductModel.updateOne(
            {'_id ': id}, 
            { $set: {name: product.name,
            quantity: product.quantity,
            price: product.price,
            brand: product.brand}
            },{new: true}
        )

        return produto
    }

    async delete(id){
        await ProductModel.deleteOne({'_id ': id})
        return 
    }
}