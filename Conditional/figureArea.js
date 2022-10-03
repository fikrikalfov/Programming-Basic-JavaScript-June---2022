function figureArea(input) {

    let figure = input[0];
    let area = 0;
    if (figure === "square") {
        let side = Number(input[1]);
        area = (side * side).toFixed(3);
        console.log(area);
    } else if (figure === "rectangle") {
        let side1 = Number(input[1]);
        let side2 = Number(input[2]);
        area = (side1 * side2).toFixed(3);
        console.log(area);
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        area = (Math.PI * radius * radius).toFixed(3);
        console.log(area);
    } else if (figure === "triangle") {
        let side = Number(input[1]);
        let height = Number(input[2]);
        area = (side * height / 2).toFixed(3);
        console.log(area);
    }

}

figureArea(["triangle", 4.5, 20]);