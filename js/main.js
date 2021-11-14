const menuBtn = document.querySelector('.toggler');
const menu = document.querySelector('.nav');
const closeBtn = document.querySelector('.closeBtn')

menuBtn.addEventListener('click',() =>{
    menu.classList.add('active');
    menuBtn.classList.add('hide');
    closeBtn.classList.add('active');
})

closeBtn.addEventListener('click', () =>{
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
    closeBtn.classList.remove('active');
})


// owl carousel

const owlCarousel = document.querySelector('.owlCarousel');
const items = document.querySelectorAll('.item')

let length = items.length;
const clones = [];

while(length > 0){
    length = length -1;
    clones.push(items[length].cloneNode(true));
}

let clonesLength = clones.length;

console.log(owlCarousel.append(clones[clonesLength-1])); 

// while(clonesLength > 0){
//     clonesLength = clonesLength -1;
//     console.log(owlCarousel.append(clones[clonesLength]));   
// }

// while(clonesLength > 0){
//     clonesLength = clonesLength -1;
//     console.log(owlCarousel.prepend(clones[clonesLength]));  
// }