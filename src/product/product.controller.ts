import {Request, Response} from 'express'
import { ProductService } from './product.service'

class ProductController {

    async initTable(req: Request, res: Response) {
        const product = await new ProductService().initTable()
        return res.status(200).json(product)
    }

    async create(req: Request, res: Response) {
        const product = await new ProductService().create(req.body)
        return res.status(200).json(product)
    }

    async consulta1(req: Request, res: Response) {
        const product = await new ProductService().consulta1()
        return res.status(200).json(product)
    }
    async consulta2(req: Request, res: Response) {
        const product = await new ProductService().consulta2()
        return res.status(200).json(product)
    }
    async consulta3(req: Request, res: Response) {
        const product = await new ProductService().consulta3()
        return res.status(200).json(product)
    }
    async consulta4(req: Request, res: Response) {
        const product = await new ProductService().consulta4()
        return res.status(200).json(product)
    }

    async list(req: Request, res: Response) {
        
        const product = await new ProductService().list()
        return res.status(200).json(product)
    }

    async find(req: Request, res: Response) {
        const product = await new ProductService().find(req.params.id)
        return res.status(200).json(product)
    }

    async update(req: Request, res: Response) {
        const product = await new ProductService().update(req.params.id, req.body)
        return res.status(200).json(product)
    }

    async delete(req: Request, res: Response) {
       await new ProductService().delete(req.params.id)
        return res.status(200). json("Produto Deletado com sucesso")
    }
}

export default new ProductController()