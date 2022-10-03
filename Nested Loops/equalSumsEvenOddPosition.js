function equalSumsEvenOddPosition(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let result = "";
    let flag = false;

    for (let num = firstNum; num <= secondNum; num++) {
        let evenSum = 0;
        let oddSum = 0;
        
        let n = num.toString();
        for (let i = 0; i < n.length; i++) {
            if (i % 2 === 0) {
                evenSum += Number(n[i]);
            } else {
                oddSum += Number(n[i]);
            }
        }
        if (evenSum === oddSum) {
            flag = true;
            result += num + " ";            
        }
    }

    if (flag) {
        console.log(result);
    }
    
}

equalSumsEvenOddPosition(["100000",

"100050"])