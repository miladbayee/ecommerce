
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