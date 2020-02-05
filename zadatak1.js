//За два броја (а и б) исписати њихов: 
//Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)

let br1 = 321;
let br2 = 123;

let x = '%';

switch(x){
    case '+':
        console.log(br1+br2);
        break;
    case '-':
        console.log(br1-br2);
        break;
    case '*':
        console.log(br1*br2);
        break;
    case '/':
        console.log(br1/br2);
        break;
    case '%':
        console.log(br1%br2);
        break;
    case '**':
        console.log(br1**2);
        console.log(br2**2);
        break;
    default:
        console.log('Nema vrednosti');
}