import menuArray from './data.js'

let orderArr = [] //create orderArray!

///////// Event Listeners /////////

document.addEventListener('click', function(e){
    //console.log('clicky')
    //console.log(e.target.dataset.id)
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
        console.log(orderItem) 
        // ok this works! The function should find the name of each item id!
        return `${orderItem.name}` //maybe? hahaha
    } )
    console.log(buildOrder)

    // Now make those show up on the page! With the name!!
}

///////// Build the feed! /////////

function getFeedHtml() {

    let menuHtml = ''

    menuArray.forEach(function(item) {   
        //console.log(item)                                         
        
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

//to do!
// get the content to show up again! Anything from the menuHTML!
// get the image from the array on line 11! Connect it to the array in the other file!
    // it's connected but displaying the javascript on the page instead of excuting it! haha
    // YAY! I was returning getFeedHTML on line 22 instead of menuItem! YAY!!!!
// get the images to display!