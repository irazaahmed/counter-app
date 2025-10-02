// create variables
let countValue = document.getElementById('counter-value');
let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');
let resetBtn = document.getElementById('reset-btn');

// set initial count 
let count = 0;

// function to update the display

function updateDisplay() {
    countValue.textContent = count;
}
updateDisplay();

// increment function
incrementBtn.addEventListener('click', function(){
    count++;
    updateDisplay();
})

// decrement function
decrementBtn.addEventListener('click', function(){
    if(count > 0){
        count--;
        updateDisplay();
    }else{
        alert("Count cannot go below zero.");
    }
})

// reset function
resetBtn.addEventListener('click', function(){
    count = 0;
    updateDisplay();
});


