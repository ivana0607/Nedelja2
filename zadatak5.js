//sacuvati u promenljive cenu i precnik pice
//izracunati koja je cena pize po cm2 
//(pazite na to da se povrsina racuna sa poluprecnikom)
//ispisati taj rezultat u konzolu

let cena = 1300;
let precnik = 16;

let povrsina = (precnik / 2) ** 2 * Math.PI;

let cenacm = cena / povrsina;

console.log(povrsina, cenacm);
