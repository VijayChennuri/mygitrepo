let catButton = document.getElementById('give-cat')
catButton.addEventListener("click", evt =>{
    let catDiv = document.getElementById('cat-pic')
    fetch('https://api.thecatapi.com/v1/images/search?')
    .then(res =>res.json())
    .then(cats =>{
        cats.forEach(cat => {
            catDiv.innerHTML = `<h3> Hello cats</h3>
            <img src = "${cat.url}" alt = "baby" />`
            
        });
    })
})
let dogButton = document.getElementById('give-dog')
dogButton.addEventListener("click", evt =>{
    let dogDiv = document.getElementById('dog-pic')
    fetch('https://api.thedogapi.com/v1/images/search?')
    .then(res =>res.json())
    .then(dogs =>{
        dogs.forEach(dog => {
            dogDiv.innerHTML = `<h3> Hello dogs</h3>
            <img src = "${dog.url}" alt = "Me" />`
            
        });
    })
})
