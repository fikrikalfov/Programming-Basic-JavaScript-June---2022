function building(input) {

    let floor = Number(input[0]);
    let room = Number(input[1]);
    let roomNum = '';

    for (let f = floor; f >= 1; f--) {
        roomNum = '';
        for (let r = 0; r < room; r++) {
            if (f % 2 === 0){
                if ( f === floor) {
                    roomNum += "L" + f + r + " ";
                } else {
                    roomNum += "O" + f + r + " ";
                }
            } else {
                if ( f === floor) {
                    roomNum += "L" + f + r + " ";
                } else {
                    roomNum += "A" + f + r + " ";
                }
            }
            
        }
        console.log(roomNum);
    }
}

building(["6",

"4"])