
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
        case 'products/addProductItemToCart':
            const productId = state.cart.productId
            let newProductId = []

            if (productId.length === 0) {
                newProductId.push(action.payload.id)
            }
            else {
                newProductId = [...productId]
                const product = newProductId.find(item => item === action.payload.id)
                if (!product) {
                    newProductId.push(action.payload.id)
                }
            }

            return {
                ...state,
                cart: {
                    ...state.cart,
                    productId: newProductId
                }
            }
        case 'products/addProductToCart':
            return {
                ...state,
            }

        default:
            return state
    }
}

export default storeReducer