import menuArray from './data.js'

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
                    <p>${item.ingredients}</p>
                    <p>${item.price}</p>
                </div>
                <div class="add-to-order">
                    <button class="add-to-order-btn">+</button>
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