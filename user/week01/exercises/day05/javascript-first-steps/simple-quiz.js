// Prompt
let userInput = prompt(
  "Who created JavaScript?\n\nA) Brendan Eich\nB) Bill Gates\nC) Mark Zuckerberg\n\nPlease select A, B, or C:"
);

// Clean the input: remove spaces and make lowercase
let cleanedAnswer = userInput.trim().toLowerCase();

// Check the answer and show the appropriate message
if (cleanedAnswer === "a") {
  alert(
    "Correct! Not only did he create JS, the prototype of the language was ready in 10 days!"
  );
} else if (cleanedAnswer === "b") {
  alert("Nope. He led the development of the Windows Operating System.");
} else if (cleanedAnswer === "c") {
  alert("Nope. He just came up with the idea for a social network.");
} else {
  alert("Invalid option. Please choose A, B, or C.");
}
