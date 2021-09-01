
const storeReducer = (state, action) => {
    switch (action.type) {
        case 'products/getAllProductsSuccess':
            return {
                ...state,
                status: 'success',
                products: action.payload
            }
        case 'products/getAllProductsFailed':
            return {
                ...state,
                status: 'fail',
                products: action.payload
            }
        case 'products/addProductToCart':
            const productId = state.cart.productId

            let newProductId = []

            if (productId.length === 0) {
                newProductId.push(action.payload.id)
            }
            else {
                newProductId = [...productId]
                const product = productId.filter(item => item === action.payload.id)
                console.log(product)
                if (product.length===0) {
                    newProductId.push(action.payload.id)
                }
            }

            return {
                ...state,
                cart: {
                    ...state.card,
                    productId: newProductId
                }
            }

        default:
            return state
    }
}

export default storeReducer