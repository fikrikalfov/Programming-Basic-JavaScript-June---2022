function readBook(input) {

    let allSheet = Number(input[0]);
    let sheetPerHours = Number(input[1]);
    let days = Number(input[2]);
    let a = allSheet / sheetPerHours;
    let hoursPerDay = a / days;
    console.log(hoursPerDay);

}

readBook([432, 15, 4])