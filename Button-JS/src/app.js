const btn = document.querySelector("button")

   let number = 1;

const addElement = () => {
    const circle = document.createElement('circle') // koło
 document.body.appendChild(circle); 
    const div = document.createElement('div') // kwadrat


div.textContent = number; // dodanie numerowania 

if(number % 5 == 0){

div.classList.add("circle")
}

     document.body.appendChild(div); // dodawanie 
     //dodawanie obiektu do window
number++;
//     circle.textContent = number;
// number++;

console.log(number);
}


 btn.addEventListener("click", addElement)