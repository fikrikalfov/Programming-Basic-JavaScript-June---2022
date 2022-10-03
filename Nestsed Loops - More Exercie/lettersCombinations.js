function lettersCombinations(input) {

    let first = input[0].charCodeAt();
    let second = input[1].charCodeAt();
    let third = input[2].charCodeAt();
    let result = "";
    let counter = 0;

    for (let firstLetter = first; firstLetter <= second; firstLetter++) {
        if (firstLetter === third) {
            continue;
        }
        let combination = "";
        for (let secondLeter = first; secondLeter <= second; secondLeter++) {
            if (secondLeter === third) {
                continue;
            }
            combination = String.fromCharCode(firstLetter);
            combination += String.fromCharCode(secondLeter);
            for (let thirdLetter = first; thirdLetter <= second; thirdLetter++) {
                if (thirdLetter === third) {
                    continue;
                }
                combination += String.fromCharCode(thirdLetter);                
                result += combination + " ";
                counter++;
                combination = String.fromCharCode(firstLetter) + String.fromCharCode(secondLeter);

            }
        }
    }
    console.log(`${result}${counter}`);

}
lettersCombinations(["a", "c", "b"]);