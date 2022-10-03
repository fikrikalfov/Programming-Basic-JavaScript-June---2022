function challengeTheWedding(input) {

    let menCount = Number(input[0]);
    let womenCount = Number(input[1]);
    let tableCount = Number(input[2]);
    let meet = "";
    let result = "";


    for (let i = 1; i <= menCount; i++) {
        meet += "(" + i + " " + "<->" + " ";
        for (let x = 1; x <= womenCount; x++) {
            meet += x + ")";
            result += meet + " ";
            tableCount--;

            if (tableCount === 0) {
                break;
            }
            meet = "(" + i + " " + "<->" + " ";
        }
        if (tableCount === 0) {
            break;
        }
        meet = "";
    }

    console.log(result);

}

challengeTheWedding(["2", "2", "3"])