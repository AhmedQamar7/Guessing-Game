import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10"
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, `Ans`);
if (userGuess === systemGeneratedNo) {
    console.log("Yeaaaahhh..!! your answer is correct \n You Win!");
}
else {
    console.log(" Your answer is incorrect \n Please try again \n better luck for next time.");
}
4;
