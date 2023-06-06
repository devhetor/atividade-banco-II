import { model, Schema } from 'mongoose'

const ProductSchema = new Schema({
    productName: {
        required: true,
        type: String,
    },
    productQuantity: {
        required: true,
        type: Number,
    },
    productPrice: {
        required: true,
        type: Number,
    },
    productDesc: {
        type: String
    }
}, {
    timestamps: true
})

export default model('Product', ProductSchema)