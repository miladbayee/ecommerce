
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
        default:
            return state
    }
}

export default storeReducer