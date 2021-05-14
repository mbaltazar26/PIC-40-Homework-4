var name = window.prompt("What is your name?");

let myFieldset = document.createElement("fieldset");
let myForm = document.createElement("form");
myFieldset.appendChild(myForm);
myFieldset.appendChild(document.createElement("hr"));
let myFormC = document.createElement("form");
myFieldset.appendChild(myFormC);
document.getElementById("formy").appendChild(myFieldset);
let colorArr = ['Red','Yellow','Blue'];

let big = document.getElementById("animationBackground");
let small = document.getElementById("animatedSection");
big.style.backgroundColor = "gray";

for (let i = 0; i < 51; i++)
{
    let button = document.createElement("input");
    button.type="radio"
    button.name="Speed";
    button.value=i;
    button.id=i;
    let lab = document.createElement("label");
    let buttonText = document.createTextNode("Speed: " + i);
    lab.setAttribute("for", "Speed");
    lab.appendChild(buttonText);
    myForm.appendChild(lab);
    myForm.appendChild(button);
    if (i==0)
    {
        button.checked = "checked";
    }
}

for (let i = 0; i < 3; i++)
{
    let buttonC = document.createElement("input");
    buttonC.type="radio"
    buttonC.name="Color";
    buttonC.className = "Color";
    buttonC.value=colorArr[i];
    buttonC.id=colorArr[i];
    let labC = document.createElement("label");
    let buttonTextC = document.createTextNode(colorArr[i]);
    labC.setAttribute("for", "Color");
    labC.appendChild(buttonTextC);
    myFormC.appendChild(labC);
    myFormC.appendChild(buttonC);
    if (i==0)
    {
        buttonC.checked = "checked";
        small.style.backgroundColor = buttonC.value;
    }
}

let colors = document.querySelectorAll(".Color");
for (let i = 0; i < 3; i++)
{
    colors[i].addEventListener("click", function() {
        let selectedColor = this.value; 
        small.style.backgroundColor = selectedColor;
    });
}



