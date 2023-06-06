import { Request, Response } from 'express'
import { ProductService } from './product.service'

class productController {

    async create(req: Request, res: Response) {
        const product = await new ProductService().create(req.body)

        return res.status(200).json(product)
    }

    async list(req: Request, res: Response) {
        const products = await new ProductService().list()

        return res.status(200).json(products)
    }

    async find(req: Request, res: Response) {
        const product = await new ProductService().find(req.params.id)

        return res.status(200).json(product)
    }

    async search(req: Request, res: Response) {
        try {
            const products = await new ProductService().search({
                $or: [
                    { price: { $gt: 1000 } },     // Preço maior que 5
                    { quantity: { $gt: 2 } }  // Quantidade maior que 50
                ]
            });

            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({ error: "Erro na busca" });
        }
    }

    async update(req: Request, res: Response) {
        const product = await new ProductService().update(req.params.id, req.body)

        return res.status(200).json(product)
    }

    async delete(req: Request, res: Response) {
        await new ProductService().delete(req.params.id)

        return res.status(200).json("Successfully deleted product!")
    }


}

export default new productController()