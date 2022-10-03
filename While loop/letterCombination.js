function letterCombination(input) {
    let index = 0;
    let letter = input[index];
    index++;
    let combination = "";
    let isC = false;
    let isO = false;
    let isN = false;
    let counter = 0;

    while (letter !== "End") {
        let num = letter.charCodeAt();

        switch (letter) {
            case "c":
                if (isC) {
                    combination += letter;
                } else {
                    counter++;
                }
                isC = true;
                break;
            case "o":
                if (isO) {
                    combination += letter;
                } else {
                    counter++;
                }
                isO = true;
                break;
            case "n":
                if (isN) {
                    combination += letter;
                } else {
                    counter++;
                }
                isN = true;
                break;
            default:
                
                    if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
                    combination += letter;
                }
                break;             

        }
        if (counter === 3) {
            combination += " ";
            isC = false;
            isO = false;
            isN = false;
            counter = 0;
        }
        if (index === input.length) {
            break;
        }
        letter = input[index];
        index++
        
    }
    console.log(combination);
}

letterCombination(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "i", "n"])