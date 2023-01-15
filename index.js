 const surpriseBtn = document.getElementById('surprise-btn');
 const prevBtn = document.getElementById('previous-btn')
 const nextBtn = document.getElementById('next-btn')
let card1= document.getElementsByClassName('card');
let card2= document.getElementsByClassName('card-2');
let card3= document.getElementsByClassName('card-3');
let cards = [card1, card2,card3]
console.log(cards)

function getRandomNumber() {
    let randomCard= (Math.floor(Math.randomNumber)*3)+1 
    console.log(randomCard)
}
getRandomNumber()
prevBtn.addEventListener('click', function() {
    
})

nextBtn.addEventListener('click', function() {
        cards ++
    }
)   
surpriseBtn.addEventListener('click', function() {
    for (let i = 0; i < array.length; i++) {

    }
        
    }
)