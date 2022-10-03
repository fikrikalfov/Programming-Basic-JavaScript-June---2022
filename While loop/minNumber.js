function minNumber (input) {

    let index = 0;
    let firstInput = input[index];
    let min = Number.MAX_SAFE_INTEGER;

    while (firstInput !== 'Stop') {
        let num = Number(firstInput);
        if (num < min) {
            min = num;
        }
        index++;
        firstInput = input[index];
    }
    console.log(min);
}