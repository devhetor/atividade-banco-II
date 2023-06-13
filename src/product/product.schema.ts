import { model, Schema } from 'mongoose'

const ProductSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    quantity: {
        required: true,
        type: Number,
    },
    price: {
        required: true,
        type: Number,
    },
    brand: {
        required: true,
        type: String,
    }
})

export default model('Product', ProductSchema)