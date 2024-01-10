// Variable 

// const accordion = document.getElementsByClassName('content-container');

// for( i = 0; i < accordion.length; i++) {

//     accordion[i].addEventListener('click', function () {
//         this.classList.toggle('active');
//     })

// };



let qns = document.querySelectorAll('.content-container');
for (let i=0; i<qns.length; i++){
    qns[i].addEventListener('click', function(e){
        this.classList.toggle('active');
    })
}