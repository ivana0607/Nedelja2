//za prvih 100 brojeva ispisati
//FizzBuzz ako je broj deljiva sa 3 i sa 5
//Fizz ako je broj deljiv samo sa 3
//Buzz ako je broj deljiv samo sa 5
//broj ako nije ni sa 3 ni sa 5

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }

}