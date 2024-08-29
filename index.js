import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "What file extension is used for TypeScript files?",
        choices: [".js", ".jsx", ".ts", ".tsc"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Which command is used to compile a TypeScript file?",
        choices: ["tsc filename.ts", "ts filename.ts", "compile filename.ts", "js filename.ts"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Which of the following is used to define an interface in TypeScript?",
        choices: ["interface", "class", "struct", "type"]
    },
    {
        name: "question_4",
        type: "list",
        message: "How do you define an optional property in a TypeScript interface?",
        choices: ["property?: type;", "property!: type;", "property?: any;", "property: type?;"]
    },
    {
        name: "question_5",
        type: "list",
        message: "What is the TypeScript syntax for defining a function that returns a string?",
        choices: ["function greet(): string {}", "function greet: string {}", "function greet: () => string {}", "function greet() string {}"]
    }
]);
//making a variable whose value is initially zero
let score = 0;
switch (quiz.question_1) {
    case ".ts":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "tsc filename.ts":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "interface":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case "property?: type;":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "function greet(): string {}":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(`Score: ${score}`);
