 const surpriseBtn = document.getElementById('surprise-btn');
 const prevBtn = document.getElementById('previous-btn');
 const nextBtn = document.getElementById('next-btn');
 const name = document.getElementById('name');
 let role = document.getElementById('role');
 let text = document.getElementById('description');
 let img= document.getElementById('photo-el')
 const reviews= [
    {
    id: 1, 
    name: 'Priscilia Jones',
    role: 'Senior Engineer',
    img: './images/screenshot.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse, corporis velit expedita nam vitae quam molestias inventore nulla modi, voluptate. It is an incredible experience.'
    },

    {
    id: 2, 
    name: 'Mia Campbell',
    role: 'Lead Programmer',
    img: './images/sample.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse, corporis velit expedita nam vitae quam molestias inventore nulla modi, voluptate. It is an incredible experience.'
    },

    {
    id: 3, 
    name: 'Lisa Jacobs',
    role: 'Frontend Developer',
    img: './images/lisa.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse, corporis velit expedita nam vitae quam molestias inventore nulla modi, voluptate. It is an incredible experience.'
    }
 ]
 console.log(reviews)

 
let currentItem= 0;
 window.addEventListener('DOMContentLoaded', function() {
    showPerson();
 })
function showPerson() {
    const item = reviews[currentItem]; 
    img.src = item.img;
    name.textContent = item.name;
    role.textContent = item.role;
    text.textContent = item.description;
    console.log(img.src)
}
/*prev btn*/ 
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0){
        currentItem > reviews.length - 1;
    }
    showPerson();
    
});

/*next btn*/ 
nextBtn.addEventListener('click', function() {
        currentItem ++;
        if (currentItem > reviews.length - 1 ) {
            currentItem = 0;   
        }
         showPerson();
});

surpriseBtn.addEventListener('click', function() {
    currentItem= Math.floor(Math.random()*reviews.length)
    showPerson()
    } 
    
)