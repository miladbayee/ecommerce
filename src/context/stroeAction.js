
export const getAllProductsSuccessAction = (products) => {
    return {
        type: 'products/getAllProductsSuccess',
        payload: products
    }
}
export const getAllProductsFailedAction = () => {
    return {
        type: 'products/getAllProductsFailed',
        payload: []
    }
}

export const addProductToCartdAction = (id) => {
    return {
        type: 'products/addProductToCart',
        payload: {
            id
        }
    }
}