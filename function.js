const container = document.querySelector(".container");

//I need to create the submit button and input as js variables.
//2. I need to create an event listener for the submit button and have it have a function to append the number of divs to it as the input number.
//3. I need to add the hover effect so that it puts the color over each square and make it stay.
//4. I need to add functionality to have it reset on the submit button or maybe not

const input = document.querySelector(".input");
const submit = document.querySelector(".submit");

submit.addEventListener("click", ()=> {
    const inputValue = input.value;

    for (let i = 0; i < inputValue; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        
    }

});