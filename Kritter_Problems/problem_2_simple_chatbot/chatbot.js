// chatbot.js

const questionsPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
];


function preprocessString(str) {
    return str.toLowerCase().replace(/[^a-zA-Z\s]/g, '').split(' ');
}


function findQuestion(userQuestion) {
    const userWords = preprocessString(userQuestion);

    let bestMatch = { question: "", matches: 0 };
    
    
    questionsPairs.forEach(pair => {
        const predefinedWords = preprocessString(pair.question);
        let matchCount = 0;

        // Count how many words match between user input and predefined question
        userWords.forEach(word => {
            if (predefinedWords.includes(word)) {
                matchCount++;
            }
        });

        if (matchCount > bestMatch.matches) {
            bestMatch = { question: pair.question, matches: matchCount, answer: pair.answer };
        }
    });

    return bestMatch.matches > 0 ? bestMatch.answer : "Sorry, I don't understand the question.";
}

// Example usage:
const userQuestion = "What's the weather like today?";
console.log(findQuestion(userQuestion)); // Output: "The weather is sunny."
