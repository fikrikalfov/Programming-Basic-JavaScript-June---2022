function graduation(input) {

    let name = input[0];
    let index = 1;
    let grade = Number(input[index]);
    let sum = 0;

    while (grade >= 4) {
        sum += grade;
        if (index === 12) {
            let averageGrade = sum / index;
            console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
            break;
        }
        index++;
        grade = Number(input[index]);
    }
    if (index < 12) {
        console.log(`${name} has been excluded at ${index} grade`);
    }

}

graduation(["Mimi", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "", "6", "6", "5.43", "5"])