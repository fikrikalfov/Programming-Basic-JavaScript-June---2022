function deposit(input) {

    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let yearsProcent = Number(input[2]);
    let total = deposit + period * ((deposit * yearsProcent / 100) / 12);
    console.log(total);

}

deposit([2350, 6, 7]);