function maxNumber(input) {

    let index = 0;
    let num = input[index];
    let max = Number(num);

    while (num !== 'Stop') {
        if (max < Number(num)) {
            max = Number(num);
        }
        index++;
        num = input[index];
    }
    console.log(max)
}

maxNumber(['-45',
'-20',
'-7',
'-99',
'Stop'])