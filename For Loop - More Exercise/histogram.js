function histogram(input) {
    let count = Number(input[0]);
    let under200 = 0;
    let under399 = 0;
    let under599 = 0;
    let under799 = 0;
    let over800 = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i] < 200) {
            under200 += 1;
        } else if (input[i] >= 200 && input[i] <= 399) {
            under399 += 1;
        } else if (input[i] >= 400 && input[i] <= 599) {
            under599 += 1;
        } else if (input[i] >= 600 && input[i] <= 799) {
            under799 += 1;
        } else {
            over800 += 1;
        }
    }
    console.log(`${(under200 / count * 100).toFixed(2)}%`);
    console.log(`${(under399 / count * 100).toFixed(2)}%`);
    console.log(`${(under599 / count * 100).toFixed(2)}%`);
    console.log(`${(under799 / count * 100).toFixed(2)}%`);
    console.log(`${(over800 / count * 100).toFixed(2)}%`);
}

histogram(["3",
"1",
"2",
"999"])
