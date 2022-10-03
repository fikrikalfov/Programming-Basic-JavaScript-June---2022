function exam(input) {

    let studentCount = Number(input[0]);
    let sum = 0;
    let bestStudentsCounter = 0;
    let evaluatinBetween4and5Counter = 0;
    let evaluationBetween3and4Counter = 0;
    let badGradeCounter = 0;
    let average = 0;

    for (let i = 1; i < input.length; i++) {
        let evaluation = Number(input[i]);
        sum += evaluation;
        if (evaluation < 3.00) {
            badGradeCounter++
        } else if (evaluation >= 3.00 && evaluation < 4.00) {
            evaluationBetween3and4Counter++;
        } else if (evaluation >= 4.00 && evaluation < 5.00) {
            evaluatinBetween4and5Counter++;
        } else if (evaluation >= 5.00) {
            bestStudentsCounter++;
        }
    }
    average = sum / studentCount;
    console.log(`Top students: ${(bestStudentsCounter / studentCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(evaluatinBetween4and5Counter / studentCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(evaluationBetween3and4Counter / studentCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(badGradeCounter / studentCount * 100).toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`)

}

exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"
    ])