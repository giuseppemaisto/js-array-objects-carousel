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
//inserisco immagini in container
const itemSlider = document.querySelector('.item-slider');
itemSlider.innerHTML += itemsContent; 

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

const circle = document.getElementsByClassName('circle');
circle[itemActive].classList.add('circle');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
   
   
    //verifico l'elemento attivo (itemActive)
   
    //incremento il suo valore di 1
   itemActive++;
   if(itemActive == imagesArray.length){
    itemActive = 0;
   }

   if(itemActive == 0){
    items[imagesArray.length-1].classList.remove('active');
    circle[imagesArray.length-1].classList.remove('active')
   }
   else{
    items[itemActive-1].classList.remove('active');
    circle[itemActive-1].classList.remove('active');
   }
   items[itemActive].classList.add('active')
   circle[itemActive].classList.add('active');
   
});




//BONUS 2
let autoPlay;
autoPlay = setInterval(auto, 3000);
//2.- definisco funzione che fa scorrere le immagini( uso codice già presente da vecchio esercizio )
function auto(){
    //verifico l'elemento attivo (itemActive)
 
  //incremento il suo valore di 1
 itemActive++;
 if(itemActive == imagesArray.length){
  itemActive = 0;
 }
//aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
  //stessa cosa per i cerchi
 if(itemActive == 0){
  items[imagesArray.length-1].classList.remove('active');
  circle[imagesArray.length-1].classList.remove('active')
 }
 else{
  items[itemActive-1].classList.remove('active');
  circle[itemActive-1].classList.remove('active');
 }
 items[itemActive].classList.add('active')
 circle[itemActive].classList.add('active');
 
 


}
//BONUS 3
document.getElementById('play').addEventListener('click', function(){
    autoPlay = setInterval(auto, 3000);

    
})
document.getElementById('stop').addEventListener('click', function(){
    clearInterval(autoPlay);

    
})
