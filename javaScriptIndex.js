var nameEntered = window.prompt("What is your name?");
let found = false;
let names = [];

let xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() 
{
	if (this.readyState === 4 && this.status === 200) 
    {
		names = (this.responseText.toString());
		names = names.split(",");
		for(let i = 0; i < names.length; i++)
        {
			if (names[i]===nameEntered) 
                {					
					found=true;
				}
		}
    }
}


// set GET request to read from the file, doing it 'asynchronously'
xhttp.open("GET", "https://www.math.ucla.edu/~mikel/teaching/pic40a/HW4/guests.php" + "?v=" + Math.random() , true);
xhttp.send(); // do it!


if (found == false) 
{
    document.getElementById("elitism").innerText = "No special greeting for you."
    
}
else 
{
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
    small.innerText="Special Greeting";
    big.style.backgroundColor = "gray";
    let speedyTime = 60;
    let goingLeft = true;



for (let i = 0; i < 51; i++)
{
    let button = document.createElement("input");
    button.type="radio"
    button.name="Speed";
    button.className = "SpeedClass";
    button.value=i;
    button.id=(i.toString());
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

let speeds = document.querySelectorAll(".SpeedClass");
for (let i = 0; i < 51; i++)
{
    speeds[i].addEventListener("click", function() {
        let selectedSpeed = this.value; 
        speedyTime = (60-selectedSpeed);
    });
}

const box = {
    width: 25, // %
    left: 0, // %
    end_pos: 100, // %
    dx: 1, // % move by element: null, // the div 
    event_id: null // event id
    };

    function animate()
    {
        if(box.left + box.width <= box.end_pos)
        { 
            box.element.style.left = box.left + "%"; // display
            box.left += box.dx;
            box.event_id = setTimeout( animate, speedyTime);
        }
       if (box.left + box.width > box.end_pos)
            {
                goingLeft=false;
                animateRight();
            }
    }

    function animateRight()
    {
        if(box.left + box.width > 25)
        { 

            box.element.style.left = box.left - "%"; // display
            box.left -= box.dx;
            box.event_id = setTimeout( animateRight, speedyTime);
        }
        if (box.left + box.width == 25)
        {
            goingLeft=true;
            animate();
        }
    } 

   window.addEventListener("load", ()=>{
    box.element = small;
    animate(); });
}


  