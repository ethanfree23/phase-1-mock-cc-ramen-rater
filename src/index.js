// write your code here
// "http://localhost:3000/ramens"
// "http://localhost:3000/ramens/:id"



document.addEventListener("DOMContentLoaded", function(){
    fetchAllRamen();
})

function fetchAllRamen(){
    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(data => {
        data.forEach(object => {
            addToMenu(object);
        }) 
    })
}

function addToMenu(object){
    const {name, restaurant, image, rating, comment} = object;
    const img = document.createElement("img");
    img.src = image;
    img.addEventListener("click", (e) => {
        document.querySelector(".name").innerHTML = name;
        document.querySelector(".restaurant").innerHTML = restaurant;
        document.querySelector(".detail-image").src = image;
        document.querySelector("#rating-display").innerHTML = rating;
        document.querySelector("#comment-display").innerHTML = comment;
    })
    document.querySelector("#ramen-menu").appendChild(img)
}

// function addToMenu(object){
//     const {name, restaurant, image, rating, comment} = object;
//     const img = document.createElement("img");
//     img.src = image;
//     img.addEventListener("click", (e) => {
//         document.querySelector(".name").innerHTML = name;
//         document.querySelector(".restaurant").innerHTML = restaurant;
//         document.querySelector(".detail-image").src = image;
//         document.querySelector("#rating-display").innerHTML = rating;
//         document.querySelector("#comment-display").innerHTML = comment;
//     })
//     document.querySelector("#ramen-menu").appendChild(img);
// }

document.querySelector("#new-ramen").addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = e.target.name.value;
    const restaurantInput = e.target.restaurant.value;
    const imageInput = e.target.image.value;
    const ratingInput = e.target.rating.value;
    const commentInput = e.target["new-comment"].value;
    const newRamen = {
        name: nameInput, 
        restaurant: restaurantInput,
        image: imageInput,
        rating: ratingInput, 
        comment: commentInput
    }
    addToMenu(newRamen);
})

// document.querySelector("#new-ramen").addEventListener("submit", (e) => {
//     e.preventDefault();
//     const nameInput = e.target.name.value;
//     const restaurantInput = e.target.restaurant.value;
//     const imageInput = e.target.image.value;
//     const ratingInput = e.target.rating.value;
//     const commentInput = e.target["new-comment"].value;
//     const newRamen = {
//         name: nameInput,
//         restaurant: restaurantInput,
//         image: imageInput,
//         rating: ratingInput,
//         comment: commentInput,
//     }
//     addToMenu(newRamen);
// })





// document.addEventListener("DOMContentLoaded", function(){
//     fetchAllRamen();
// })
// function fetchAllRamen() {
//     fetch("http://localhost:3000/ramens")
//     .then(resp => resp.json())
//     .then(data => {
//         // console.log(data);
//         data.forEach(object => {
//             addToMenu(object);
//         })
//     })
// }
// function addToMenu(object){
//     const {name, restaurant, image, rating, comment} = object;
//     const img = document.createElement("img");
//     img.src = image;
//     img.addEventListener("click", (event) => {
//         document.querySelector(".name").innerHTML = name;
//         document.querySelector(".restaurant").innerHTML = restaurant;
//         document.querySelector(".detail-image").src = image;
//         document.querySelector("#rating-display").innerHTML = rating;
//         document.querySelector("#comment-display").innerHTML = comment;
//     })
//     document.querySelector("#ramen-menu").append(img);
// }
// document.querySelector("#new-ramen").addEventListener("submit", (e) => {
//     e.preventDefault();
//     const nameInput = e.target.name.value;
//     const restaurantInput = e.target.restaurant.value;
//     const imageInput = e.target.image.value;
//     const ratingInput = e.target.rating.value;
//     const commentInput = e.target["new-comment"].value;
//     const newRamen = {
//         name: nameInput, 
//         restaurant: restaurantInput, 
//         image: imageInput, 
//         rating:ratingInput,
//         comment: commentInput,
//     }
//     addToMenu(newRamen);
// })



// PART 3:

/** Create
 * <form> #new-ramen
 * new-name
 * new-restaurant
 * new-image
 * new-rating
 * new-comment
 */





// PART 2:
// create li for comment, and set innerHTML to object.comment
// create li for Rating, and set innerHTML to object.rating
// append both to #ramen-details




// PART 1:
// need to create img tag under div with #ramen-menu
// then create a forEach()
// then assign the src to be the data.src


