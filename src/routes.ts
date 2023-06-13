import { Router } from 'express'
import productController from './product/product.controller'

const routes = Router()
routes.post('/product', productController.create)
routes.get('/products', productController.initTable)
routes.get('/products/:id', productController.find)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.delete)

export default routes