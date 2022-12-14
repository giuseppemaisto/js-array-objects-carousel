const imagesArray = [
    {   image:"01.webp",
        titolo:"Marvel\'s Spiderman Miles Morales",
        descrizione:"Experience the rise of Miles Morales as the new hero masters inncredible, explosive new powers to become his own spiderman",
       
    },
    {
        image:"02.webp",
        titolo:"Rachet & Clark: rift apart",
        descrizione:"Experience the rise of Miles Morales as the new hero masters inncredible, explosive new powers to become his own spiderman",
    },
    {
        image:"03.webp",
        titolo:"Fortnite",
        descrizione:"Experience the rise of Miles Morales as the new hero masters inncredible, explosive new powers to become his own spiderman",
    },
    {
        image:"04.webp",
        titolo:"Stray",
        descrizione:"Experience the rise of Miles Morales as the new hero masters inncredible, explosive new powers to become his own spiderman",
    },
    {
        image:"05.webp",
        titolo:"Avengers",
        descrizione:"Experience the rise of Miles Morales as the new hero masters inncredible, explosive new powers to become his own spiderman",
    },

]

//milestone 0
//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i<imagesArray.length; i++){
    itemsContent += `<div class="item">
    <img src="./img/${imagesArray[i].image}">
    <div>
    <h3>${imagesArray[i].titolo}</h3>
    <p>${imagesArray[i].descrizione}</p>
    </div>
    </div>`

    
}

const itemSlider = document.querySelector('.item-slider');
itemSlider.innerHTML += itemsContent; 

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

const circle = document.getElementsByClassName('circle');
circle[itemActive].classList.add('circle');