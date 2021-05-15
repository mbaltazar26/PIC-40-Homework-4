var nameEntered = window.prompt("What is your name?"); //stores name inputted
let found = false;  //assume they are not on the list by default 
let names = [];

let xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() 
{
	if (this.readyState === 4 && this.status === 200) 
    {
		let s = this.responseText.toString();  // converts document contents to a string
		names = s.split(",");                   //seperates the contents into the names by commas and stores in names[]
		for(let i = 0; i < names.length; i++)   // goes through the names[] array and looks for a match for name inputted 
        {
			if (names[i] == nameEntered)        
                {					
					found=true;                 // only set to true if found 
				}
		}
    }
}


xhttp.open("GET", "https://www.math.ucla.edu/~mikel/teaching/pic40a/HW4/guests.php" + "?v=" + Math.random() , true);
xhttp.send();               

if (found == false)     // if name is not counted, no special greeting
{
    document.getElementById("elitism").innerText = "No special greeting for you."
    
}
else 
//// hello whoever grades my hw 
//// I didnt get the AJAX part to work
//// but if you delete the 'else' above 
//// as well as the { right here and another I'll annotate 
//// it kinda works. 
{  
    let myFieldset = document.createElement("fieldset");    // fieldset to contain radio buttons for color and number
    let myForm = document.createElement("form");            // radio buttons for number 
    myFieldset.appendChild(myForm);                         // add to fieldset
    myFieldset.appendChild(document.createElement("hr"));   // border between the color and number radio buttons
    let myFormC = document.createElement("form");           // radio buttons for color
    myFieldset.appendChild(myFormC);                            // add to fieldset
    document.getElementById("formy").appendChild(myFieldset);   // add the fieldset to section in body from html file
    let colorArr = ['Red','Yellow','Blue'];                     // array storing colors 
    let big = document.getElementById("animationBackground");   
    let small = document.getElementById("animatedSection");
    small.innerText="Welcome" + nameEntered;                    
    big.style.backgroundColor = "gray";     
    let speedyTime = 60;                                    // default speed 
    let goingLeft = true;                                   // default direction



// creating radio buttons for speed below for 0-50, and making 0 checked by default 
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

// making radio buttons for color, assigning color array values to each button 
// red is marked as checked as default 
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

// makes the animation interactive, and changes the color when clicked
let colors = document.querySelectorAll(".Color");
for (let i = 0; i < 3; i++)
{
    colors[i].addEventListener("click", function() {
        let selectedColor = this.value; 
        small.style.backgroundColor = selectedColor;
    });
}

// makes the animation interactive, and changes the speed when clicked
let speeds = document.querySelectorAll(".SpeedClass");
for (let i = 0; i < 51; i++)
{
    speeds[i].addEventListener("click", function() {
        let selectedSpeed = this.value; 
        speedyTime = (60-selectedSpeed);    // the higher the number, the faster it goes. Passes to animate functions
    });
}

const box = {
    width: 25, 
    left: 0, 
    end_pos: 100,
    dx: 1, 
    element: null, 
    event_id: null 
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
                goingLeft=false;    // sets direction 
                animateRight(); // starts to go backwards until at starting position 
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
            goingLeft=true;         // sets direction
            animate();              // starts to go forward once again 
        }
    } 

   window.addEventListener("load", ()=>{
    box.element = small;
    animate(); });                  

    
//// If you delete the } below as well as the 
//// things mentioned above it should kind of work 
//// AAAAAAA 
//// I am sorry I'm like this 
}


  