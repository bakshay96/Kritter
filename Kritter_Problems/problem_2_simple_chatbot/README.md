# Problem 2: Simple Chatbot

## Problem Statement

Create a simple chatbot program that can answer questions based on a predefined list of question-answer pairs. The chatbot should take in a user's question and try to find the closest matching question from the predefined questions by comparing words.

### Input

1. A list of question-answer pairs.
2. A user’s input question (string).

### Output

Return the answer corresponding to the closest matching question.

### Example

**Question-Answer Pairs**:
| Question                    | Answer                                    |
| ---------------------------- | ----------------------------------------- |
| What is your name?            | My name is Chatbot.                       |
| How can I help you?           | I can assist you with your queries.       |
| What is the weather today?    | The weather is sunny.                    |

**Input**:  
`"What's the weather like today?"`

**Output**:  
`"The weather is sunny"`

---

### Explanation

1. **Predefined Question-Answer Pairs**:  
   A list of question-answer pairs is stored for the chatbot to refer to.

2. **Closest Matching Question**:  
   The chatbot compares the words in the user's input to those in the predefined questions to find the closest match.

3. **Return the Corresponding Answer**:  
   Once the closest matching question is found, the corresponding answer is returned as the chatbot's response.

---
```

### [Back to Main Documentation](../../README.md)
