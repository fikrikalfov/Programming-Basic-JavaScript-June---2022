function weddingSeats(input) {
    let section = input[0];
    let row = Number(input[1]);
    let seatNum = Number(input[2]);
    let num = section.charCodeAt();
    let seat = "";
    let counter = 0;

    for (let i = 65; i <= num; i++) {
        seat += String.fromCharCode(i);
        for (let x = 1; x <= row; x++) {
            seat += x;
            let num1 = "a".charCodeAt();
            if (x % 2 !== 0) {
                for (let y = num1; y <= (num1 + seatNum -1); y++) {
                    seat += String.fromCharCode(y);
                    console.log(seat);
                    counter++;
                    seat = String.fromCharCode(i) + x;
                }
            } else {
                for (let y = num1; y <= (num1 + seatNum -1 +2); y++) {
                    seat += String.fromCharCode(y);
                    console.log(seat);
                    counter++;
                    seat = String.fromCharCode(i) + x;
                }
            }
            seat = String.fromCharCode(i);
        }
        seat = "";
        row += 1;
    }
    console.log(counter);
}

weddingSeats(["B", "3", "2"])