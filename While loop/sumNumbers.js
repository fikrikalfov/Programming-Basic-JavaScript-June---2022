function sumNumbers(input) {

    let num = Number(input[0]);
    let index = 1;
    let digit = Number(input[index]);
    let sum = 0;

    while (sum < num) {
        sum += digit;
        index++;
        digit = Number(input[index]);
    }
    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"])