// Variables

// let openBtn = document.getElementById('open-btn');
// let modalContainer = document.getElementById('modal-container');
// let closeBtn = document.getElementById('close-btn');

// Event Listeners 

// openBtn.addEventListener('click', function(){

//     modalContainer.style.display = 'block';
// });

// closeBtn.addEventListener('click', function() {

//     modalContainer.style.display = 'none';
// });

// window.addEventListener('click', function(e) {

//     if (e.target === modalContainer) {
//         modalContainer.style.display = 'none';
//     }
// });




const openBtn = document.querySelector('#open-btn');
const modal = document.querySelector('#modal-container');
const closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', function(e){
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', function(e){
    modal.style.display = 'none';
})

window.addEventListener('click', function(e){
    console.log(e.target)
    if (e.target === modal){
        modal.style.display = 'none';
    }
})