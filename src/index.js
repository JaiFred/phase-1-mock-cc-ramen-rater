// write your code here
// We want to place ramen images at the top of our webpage under 
const baseURL = 'http://localhost:3000'

//document.addEventListener('DOMContentLoaded', () => {
    const ramenMenu = document.getElementById('ramen-menu')
    const newRamenItem = document.getElementById('new-ramen')

//connects code to the JSON 
    fetch(`${baseURL}/ramens`)
    .then(res => res.json())
    .then(ramenItems => {
// ramenObjects is an array of objects
        ramenItems.forEach(ramen => renderRamen(ramen))
    })

//appends a new ramen image 
     function renderRamen(ramen) {
        const newImg = document.createElement('img')
        newImg.src = ramen.image

        newImg.addEventListener("click", () => chooseRamen(ramen))

        ramenMenu.append(newImg)
    }

     function chooseRamen(ramen) {
         // grab the div we want to add our image to
         const ramenInfoDiv = document.getElementById('ramen-detail');
          
         // grab the image tag inside that div
         const img = ramenInfoDiv.querySelector('img');
         img.src = ramen.image

         // target the h2 for the ramen name
         const h2 = ramenInfoDiv.querySelector('h2');
         h2.innerText = ramen.name

         // target the h3 for the restaraunt name
         const h3 = ramenInfoDiv.querySelector('h3')
         h3.innerText = ramen.restaurant

         // rating
         const rating = document.getElementById('rating-display')
         rating.innerText = ramen.rating
         
         // comment
         const comment = document.getElementById('comment-display')
         comment.innerText = ramen.comment
    }

    // TODO Handle form submission
    newRamenItem.addEventListener('submit', (e) => handleformSubmit(e))

    function handleformSubmit(e) {
        // Remember to stop the form from reloading the page
        e.preventDefault()

        const newAddedObject = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target['new-comment'].value
        }

         // Make sure to actually display the new object
         renderRamen(newAddedObject);

         // Clear the form inputs
         newRamenItem.reset()
        
    }
    
//})


