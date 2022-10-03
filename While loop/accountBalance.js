function accountBalance (input) {

    let index = 0;
    let installment = input[index];
    let sum = 0;

    while (installment !== "NoMoreMoney") {
        let num = Number(installment);
        if (num >= 0) {
            sum += num;
            console.log(`Increase: ${num.toFixed(2)}`);
        } else {
            console.log('Invalid operation!');
            break;
        }
        index++;
        installment = input[index];
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"])