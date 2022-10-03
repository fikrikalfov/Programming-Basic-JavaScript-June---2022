function everest(input) {

    let index = 0;
    let rest = input[index];
    index++;
    let days = 1;
    let altitude = 5364;

    while (rest !== "END") {
        let meters = Number(input[index]);
        index++;     
        altitude += meters;   

        switch (rest) {
            case "Yes" :
                daysWithoutBrake = 0;
                days += 1;
                
                break;
            case "No" :
                
                break;
            default:
                break;
        }
        if (days <= 5 && altitude >= 8848) {
            console.log(`Goal reached for ${days} days!`);
            break;
        } else if (days >= 5 && altitude < 8848) {
            console.log("Failed!");
            console.log(`${altitude}`);
            break;
        }
        rest = input[index];
        index++;

        if (rest === undefined) {
            break;
        }


    }

if (rest === "END" || rest === undefined) {
    console.log("Failed!");
    console.log(`${altitude}`);
}


}

everest(["No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"No",
"10",
"Yes",
"10",
"Yes",
"10",
"Yes",
"10",
"Yes",
"3044"])

