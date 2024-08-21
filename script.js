let products = [
    {id: 1, name: 'Mouse', price: 100, img: 'img/product-image.png'},
    {id: 2, name: 'Teclado', price: 150, img: 'img/product-image.png'},
    {id: 3, name: 'Monitor', price: 200, img: 'img/product-image.png'},
    {id: 4, name: 'Mousepad', price: 250, img: 'img/product-image.png'},
]

let cart = []

const renderProducts = () => {
    let productsList = document.querySelector('#productsList')
    productsList.innerHTML = ''

    products.forEach((product) => {
        let productDiv = document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>R$${product.price.toFixed(2)}</p>
            <button>Adicionar ao carrinho</button>
        `

        productDiv.querySelector('button').addEventListener('click', () =>{
            addToCart(product.id)
        })
        productsList.appendChild(productDiv)
    })
}

const addToCart = (productId) => {
    let product = products.find((product) => product.id === productId)
    cart.push(product)
    renderCart()
}

const renderCart = () => {
    let cartList = document.querySelector('#cartList tbody')
    cartList.innerHTML = ''

    cart.forEach((product) => {
        let cartItem = document.createElement('tr')
        cartItem.classList.add('cart-item')
        cartItem.innerHTML = `
            <td>${product.name}</td>
            <td>${product.id}</td>
            <td>R$${product.price.toFixed(2)}</td>
        `
        cartList.appendChild(cartItem)
    })
    updateTotal()
}

const updateTotal = () => {
    let total = cart.reduce((acc, product) => {
        return acc + product.price
    }, 0)
    document.getElementById('totalPrice').textContent = `R$${total.toFixed(2)}`
}

document.getElementById('buttonPay').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio! adicione algum produto!')
    } else {
        alert('Parebéns! Sua compra foi realizada com sucesso!')
    }
    cart = []
    renderCart()
})

renderProducts()