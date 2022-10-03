function theSongOfTheWheels(input) {
    let controlValue = Number(input[0]);
    let pass = "";
    let result = "";
    let counter = 0;

    for (let i = 1; i <= 9; i++) {
        for (let x = 1; x <= 9; x++) {
            for (let y = 1; y <= 9; y++) {
                for (let z = 1; z <= 9; z++) {
                    let check = "" + i + x + y + z;
                    if ((i * x + y * z) === controlValue) {
                        if (i < x && y > z) {
                            counter++;
                            result += check + " ";
                            if (counter === 4) {
                                pass = check;
                            }
                        }
                    }
                    
                }
            }
        }   
    }
    if (result.length > 3) {
        console.log(result);
    }

    if (counter >= 4) {
        console.log(`Password: ${pass}`);
    } else {
        console.log("No!");
    }
}

theSongOfTheWheels(["139"])