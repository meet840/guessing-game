//prompting user for entering a maximum number.
let maximum = parseInt(prompt("PLZ ENTER THE MAXIMUM NUMBER"));
//cheacking that the entered number is valid or not. if not then prompt the user to enter a valid number.
while (!maximum){
    maximum = parseInt(prompt("PLZ ENTER THE VALID NUMBER"));
}
//generating the random number with user input.
const targetNum = Math.floor(Math.random() * maximum) + 1;

//prompting user to guess the number.
let guess = prompt("ENTER YOUR FIRST GUESS.(TYPE 'q' TO QUIT)");

let attempt = 1;

//guess is not equal to targetNum or q then break
while (parseInt(guess) !== targetNum){
    if (guess === "q" ) break;
    //guess is made parseInt to make it an integer
    guess = parseInt(guess);
    if (guess > targetNum){
        guess = prompt("YOUR GUESS IS HIGH. ENTER LOWER GUESS");
        attempt++;
    } else if (guess < targetNum){
        guess = prompt("YOUR GUESS IS LOW. ENTER HIGHER GUESS");
        attempt++;
    } else {
        guess = prompt("YOUR GUESS IS INVALID.");
    }
}


if (guess === "q") {
    console.log("OK YOU QUIT");
} else {
    console.log("CONGRATES YOU WIN");
    console.log(`YOU GOT IT. IT TOOK YOU ${attempt} GUESS`);
}