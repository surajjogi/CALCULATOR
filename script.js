const display = document.getElementById('display');
const button = document.querySelectorAll('button');


const arr = Array.from(button);
let string =" ";
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
       if (e.target.id == "=") {
        string = eval(string)
        display.value = string;
       }
        else if (e.target.id == "C") {
            string = '0';
            display.value = '0';
        }
        else{
            string +=e.target.id; 
            display.value = string;
        }
        
       
    })
})