function sumPrimeNonPrime(input) {
    let sumPrime = 0;
    let sumNonPrime = 0;

    for (let index = 0; index < input.length; index++) {
        let digit = input[index];

        while (digit !== "stop") {
            let num = Number(digit);
            if (num < 0) {
                console.log("Number is negative.");
                break;
            }
            let counter = 0;
            for (let i = 1; i <= num; i++) {
                if (num % i === 0) {
                    counter += 1;
                }
            }
            if (counter === 2) {
                sumPrime += num;
            } else {
                sumNonPrime += num;
            }
            break;
        }
        if (digit === "stop") {
            break;
        }
        
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["30",

"83",

"33",

"-1",

"20",

"stop"])