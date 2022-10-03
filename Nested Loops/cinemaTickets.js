function cinemaTickets(input) {
    
    let index = 0;
    let movieName = input[index];
    index++;
    let freePlaces = Number(input[index]);
    index++;
    let ticketType = input[index];
    index++;
    let ticketCounter = 0;
    let studentTicketCounter = 0;
    let standardTicketCounter = 0;
    let kidsTicketCounter = 0;

    while (movieName !== "Finish") {
        
        let tickets = 0;
        while (ticketType !== "End") {
            ticketCounter++;
            tickets++;          
            switch (ticketType) {
                case "standard" :
                    standardTicketCounter++;
                    break;
                case "student" :
                    studentTicketCounter++;
                    break;
                case "kid" :
                    kidsTicketCounter++;
                    break;
                default:
                    break;
            }
            if (tickets === freePlaces) {
                break;
            }
            ticketType = input[index];
            index++;
        }
        let percent = tickets / freePlaces * 100;
        console.log(`${movieName} - ${percent.toFixed(2)}% full.`);
        movieName = input[index];
        index++;
        freePlaces = Number(input[index]);
        index++;
        ticketType = input[index];
        index++;
    }
    let studentPercent = studentTicketCounter / ticketCounter * 100;
    let standardPercent = standardTicketCounter / ticketCounter * 100;
    let kidsPercent = kidsTicketCounter / ticketCounter * 100;
    console.log(`Total tickets: ${ticketCounter}`);
    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPercent.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
"10", 
"standard", 
"kid", 
"student", 
"student", 
"standard", 
"standard", 
"End", 
"Scary Movie", 
"6", 
"student", 
"student", 
"student", 
"student", 
"student", 
"student", 
"Finish"])