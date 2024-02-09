

console.log('Basic Calculator');

function Calculator(a,b,operator){ // function to perform the operation

    switch(operator){
        case "add":
            return a+b;
        case "sub":
            return a-b;
        case "mult":
            return a*b;
        case "div":
            return a/b;
        case "rem":
            return a%b;
        default:
            return "Invalid Operator";                  
    }
}

let calculate = true;

// to check if user want to continue or exit
while(calculate){
    console.log("Type exit to exit the calculator");
    let operation = prompt('Enter the operation you want to perform: continue/exit(anything else)');

    if(operation === 'continue'){  // taking the input from the user
        let a = parseInt(prompt('Enter the first number: '));
        let b = parseInt(prompt('Enter the second number: '));
        let operator = prompt('Enter the operator: (add/sub/mult/div/rem) ');
        console.log("Your desired operator is:"+operator+" and the result is= "+Calculator(a,b,operator)); // function calling and showing output
    }

    else{  // anything without continue will exit the calculator
        calculate = false;
        console.log('Goodbye');
        break;
    }  
    

}




