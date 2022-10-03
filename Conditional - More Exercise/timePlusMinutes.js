function timePlusMinutes (input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let mins = hours * 60 + minutes + 15;
    let h = Math.floor(mins / 60);
    let m = mins % 60;

    if (h > 23) {
        h = 0;
    }

    if (m < 10) {
        console.log(`${h}:0${m}`); 
    } else {
        console.log(`${h}:${m}`);
    }

}

    

timePlusMinutes(["23", "59"])