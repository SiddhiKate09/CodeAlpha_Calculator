let string = "";
let isDegree = false; 
let buttons = document.querySelectorAll('.button');

function toRadians(degrees) {
    return degrees * (Math.PI / 180); 
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
               
                string = string.replace(/sin/g, 'Math.sin')
                               .replace(/cos/g, 'Math.cos')
                               .replace(/tan/g, 'Math.tan')
                               .replace(/sinh/g, 'Math.sinh')
                               .replace(/cosh/g, 'Math.cosh')
                               .replace(/tanh/g, 'Math.tanh')
                               .replace(/ln/g, 'Math.log');
                
               
                if (isDegree) {
                    
                    string = string.replace(/Math\.(sin|cos|tan|sinh|cosh|tanh)\(([^)]+)\)/g, (match, p1, p2) => {
                        return `Math.${p1}(${toRadians(p2)})`; 
                    });
                }

                
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error"; 
            }
        } else if (e.target.innerHTML == 'C') {
            
            string = '';
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML.toLowerCase() == 'deg/rad') {
            
            isDegree = !isDegree;
            document.querySelector('input').value = isDegree ? "Degree Mode" : "Radian Mode";
        } else {
            
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
