// create variables
let countValue = document.getElementById('counter-value');
let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');
let resetBtn = document.getElementById('reset-btn');

let count = 0;

function updateDisplay() {
    countValue.textContent = count;
}
updateDisplay();

incrementBtn.addEventListener('click', function(){
    count++;
    updateDisplay();
})

decrementBtn.addEventListener('click', function(){
    if(count > 0){
        count--;
        updateDisplay();
    }else{
        alert("Count cannot go below zero.");
    }
})

resetBtn.addEventListener('click', function(){
    count = 0;
    updateDisplay();
});


