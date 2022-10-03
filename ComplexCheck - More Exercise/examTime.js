function examTime(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);
    let e = examHour * 60 + examMin;
    let a = arrivalHour * 60 + arrivalMin;
    let diff = Math.abs(e - a);

    if (e > a) {
        if (diff >= 1 && diff <= 30) {
            console.log(`On Time`);
            console.log(`${diff} minutes before the start`);
        } else if (diff > 30 && diff < 60) {
            console.log(`Early`);
            console.log(`${diff} minutes before the start`);
        } else if (diff >= 60) {
            console.log(`Early`);
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m >=0 && m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        }
    } else if (a > e) {
        if (diff > 0 && diff < 60) {
            console.log(`Late`);
            console.log(`${diff} minutes after the start`);
        } else if (diff >= 60) {
            console.log(`Late`);
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m >=0 && m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        }
    } else {
        console.log(`On Time`);
    }

}

examTime(["11",
"30",
"12",
"29"])






