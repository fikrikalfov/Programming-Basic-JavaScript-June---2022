function numbersEndingIn7() {
    for (let i = 7; i <= 997; i++) {
        if (i < 100) {
            if (i % 10 === 7) {
                console.log(i);
            }
        } else {
            let num = i % 100;
            if (num % 10 === 7) {
                console.log(i);
            }
        }
    }
}
numbersEndingIn7()