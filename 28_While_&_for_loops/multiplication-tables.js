//  2. Multiplication tables

for (let i = 1; i <= 10; i++) {
    let multiply = (i * 9);
    console.log(i + " x 9 = " + multiply);
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + "x" + j + "=" + (i * j));
    }
}