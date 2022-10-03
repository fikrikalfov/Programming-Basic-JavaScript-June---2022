function trainTheTrainers(input) {

    let refersCount = Number(input[0]);
    let counter = 0;
    let index = 1;
    let title = input[index];
    index++;
    let avg = 0;

    while (title !== "Finish") {
        counter++;
        let sum = 0;
        let average = 0;
        for (let i = 1; i <= refersCount; i++) {
            sum += Number(input[index]);
            index++;
        }
        average = sum / refersCount;
        console.log(`${title} - ${average.toFixed(2)}.`);
        avg += average;
        title = input[index];
        index++;
    }
    avg = avg / counter;
    console.log(`Student's final assessment is ${avg.toFixed(2)}.`);

}

trainTheTrainers(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])