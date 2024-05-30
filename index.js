import menuArray from './data.js'

let orderArr = [] //create orderArray!

///////// Event Listeners /////////

document.addEventListener('click', function(e){
    if(e.target.dataset.id) {
        handleAddButtonClick(e.target.dataset.id) //only clicks that come from these buttons! Because of the data attibute!! 
    } 
})

///////// Click Function /////////

function handleAddButtonClick(e) {
    let selectedItem = (e)
    orderArr.push(selectedItem) //Push it to the array
    //console.log(orderArr) //log the array! It's working!!! YAY!!!

    //iterate over the array to turn it into a string!
    const buildOrder = orderArr.map(function(orderItem){
        return `${orderItem}` //assign a value
    } )
    console.log(`Build order: ${buildOrder}`)
    document.getElementById("build-order").style.display = "flex"
    renderOrder() //is this hoisting bad?
}

// Now make the order items show up on the page! With the name!!

function renderOrder() {
    let orderHtml = ""

    orderArr.forEach((orderItem) => {
        orderHtml+=`
            <div class="order">
                <p class="order-item">order item: ${orderItem}</p>
            </div>`
        })

    //return orderHtml
    //console.log(`order HTML: ${orderHtml}`)
    document.getElementById("build-order").innerHTML = orderHtml
}


///////// Build the feed! /////////

function getFeedHtml() {

    let menuHtml = ''

    menuArray.forEach(function(item) {                                         
        
        menuHtml+=`
            <div class="single-menu-item">
                <div class="menu-item-image">
                    ${item.emoji}
                </div>
                <div class="menu-item-details">
                    <h3>${item.name}</h3>
                    <p class="ingredients-text">${item.ingredients.join(', ')}</p>
                    <p class="price-text">$${item.price}</p>
                </div>
                <div class="add-to-order">
                    <button class="add-to-order-btn" data-id="${item.id}">+</button>
                </div>
            </div>
        `
    })

    return menuHtml
    
}

function renderMenu() {
    document.getElementById("item-list").innerHTML = getFeedHtml()
}

renderMenu()

// TO DO
// It's better! 
// Now, orderArr never has the NAMES from menuArray