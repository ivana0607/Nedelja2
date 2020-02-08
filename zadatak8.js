//ispisati Mario piramidu odredjene visine
// n = 5
//     #
//    ##
//   ###
//  ####
// #####
let n = 5;
let x = '';
for (let i = 1; i <= n; i++) {
    x += ' '.repeat(n - i) + '#'.repeat(i) + '\n';
}
console.log(x);