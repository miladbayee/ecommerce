
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

export const addProductItemToCartdAction = (id) => {
    return {
        type: 'products/addProductItemToCart',
        payload: {
            id
        }
    }
}

export const addProductListToCartdAction = (id, title,price,image) => {
    return {
        type: 'products/addProductListToCart',
        payload: {
            id,
            title,
            price,
            image,
            counter:1
        }
    }
}