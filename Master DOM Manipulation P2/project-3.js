// Variable 

// const accordion = document.getElementsByClassName('content-container');

// for( i = 0; i < accordion.length; i++) {

//     accordion[i].addEventListener('click', function () {
//         this.classList.toggle('active');
//     })

// };


let accordions = document.querySelectorAll('.content-container');
for (let i=0; i<accordions.length; i++){
    accordions[i].addEventListener('click', function(e){
        this.classList.toggle('active');
    })
}