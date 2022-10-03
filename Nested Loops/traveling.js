function traveling(input) {
    
    let index = 0;
    let comand = input[index];
    index++;
    

    while (comand !== "End") {
        let destination = comand;
        let travelPrice = Number(input[index]);
        index++;
        let sum = 0;
        while (sum <= travelPrice) {
            sum += Number(input[index]);
            index++;
        }
        console.log(`Going to ${destination}!`);
        comand = input[index];
        index++;
    }

}

traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])