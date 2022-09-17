
let container = document.getElementById("box-container")
let count=1;
function addbox(){
    container.innerHTML= container.innerHTML + `
    <div class="box" onclick="removeElement(this)"><span>X</span>${count}</div>
    `
    count++;
}
function removeElement(elem){
    elem.remove();
}


 
    
   