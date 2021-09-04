
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
            const { productId } = state.cart
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
        case 'products/addProductListToCart':
            const { id, title, price, image, counter } = action.payload
            let newProductList = {};
            const { productsList } = state.cart
            if (!productsList[id]) {
                newProductList = { ...state.cart.productsList, [id]: { id, title, price, image, counter } }
            }
            if (productsList[id]) {
                newProductList = { ...state.cart.productsList, [id]: { ...state.cart.productsList[id], counter: productsList[id].counter + 1 } }
            }

            return {
                ...state,
                cart: {
                    ...state.cart,
                    productsList: newProductList
                }
            }

        default:
            return state
    }
}

export default storeReducer