const getRandomProduct = (products, count) => {
    const max = products.length - count
    const start = Math.floor(Math.random() * max)
    return products.slice(start, (start + count))

}

export default getRandomProduct