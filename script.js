let container=document.querySelector(".code-container");
let lastValue=null

for(let i=0;i<=5;i++)
{
let cell=container.children[i];
cell.addEventListener("input", inputFocus);    
cell.addEventListener("keyup", onkey);
}

function inputFocus(eventObject) {
   
    const targetCell=eventObject.target;

    if(targetCell.value)
    {
        lastValue=targetCell;
        targetCell.nextElementSibling && targetCell.nextElementSibling.focus();
    } 
}

function onBackspace(eveObj) {
    let currentCell=eveObj.target;
    currentCell.value="";
    currentCell.previousElementSibling && currentCell.previousElementSibling.focus();
}
 
function onEnter(eveObj) {
    let currentCell=eveObj.target;
    if(currentCell.value)
    {
        currentCell.nextElementSibling && currentCell.nextElementSibling.focus();
    }
}

function onkey(eKey) {
    if(eKey.key === "Backspace")
    {
        onBackspace(eKey);
    }
    else if(eKey.key === "Enter")
    {
        onEnter(eKey);
    }
}
