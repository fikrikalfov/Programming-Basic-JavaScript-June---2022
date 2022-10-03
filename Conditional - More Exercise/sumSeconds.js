function sumSeconds(input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
    let allTime = firstTime + secondTime + thirdTime;
    let min = Math.floor(allTime / 60);
    let sec = allTime % 60;

    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    } else {
        console.log(`${min}:${sec}`);
    }

}

sumSeconds(["22", "7", 
"34"])


