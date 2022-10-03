function password(input) {
    
    let name = input[0];
    let password = input[1];
    let index = 2;
    let pass = input[index];

    while (index < input.length) {
        if (pass === password) {
            console.log(`Welcome ${name}!`);
            break;
        } else {
            index++;
            pass = input[index];
            }
    }
}

password(["Nakov",

        "1234",

        "Pass",

        "1234",

        "1334"])