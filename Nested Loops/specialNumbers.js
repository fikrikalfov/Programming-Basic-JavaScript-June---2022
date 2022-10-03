function specialNumbers(input) {

    let n = Number(input[0]);
    let result = "";

    for (let i = 1111; i <= 9999; i++) {
        let num = i.toString();
        let counter = 0;

        for (let z = 0; z < num.length; z++) {  
            let digit = Number(num[z]);
            if (n % digit === 0) {
                counter++;
            }
        }
        if (counter === num.length) {
            result += i + " ";
        }
    }
    console.log(result);

}

specialNumbers(["16"])