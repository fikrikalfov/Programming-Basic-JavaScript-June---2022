function passwordGenerator(input) {

    let firstBorder = Number(input[0]);
    let secondBorder = Number(input[1]);
    let password = "";
    let allPasswords = "";
    let num = "a".charCodeAt();
    let letter = "";
    let letterTwo = "";

    for (let firstPosition = 1; firstPosition <= firstBorder; firstPosition++) {
        password += firstPosition;
        for (let secondPosition = 1; secondPosition <= firstBorder; secondPosition++) {
            password += secondPosition;
            for (let thirdPosition = num; thirdPosition < (num + secondBorder); thirdPosition++) {
                letter = String.fromCharCode(thirdPosition);
                password += letter;
                for (let fourthPosition = num; fourthPosition < (num + secondBorder); fourthPosition++) {
                    letterTwo = String.fromCharCode(fourthPosition);
                    password += letterTwo;
                    for (let fifthPosition = 1; fifthPosition <= firstBorder; fifthPosition++) {
                        if (fifthPosition > firstPosition && fifthPosition > secondPosition) {
                        password += fifthPosition;
                        allPasswords += password + " ";
                        } else {
                            continue;
                        }
                        password = "" + firstPosition + secondPosition + letter + letterTwo;
                    }
                    password = "" + firstPosition + secondPosition + letter;
                }
                password = "" + firstPosition + secondPosition;
            }
            password = "" + firstPosition;
        }
        password = "";
    }

    console.log(allPasswords);
}

passwordGenerator(["2", "4"])