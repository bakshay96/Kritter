
---

### Individual Problem Statement 

#### Example: `problem_1_normalize_string/README.md`

```markdown
# Problem 1: Normalize an Input String

## Problem Statement

Write a program that normalizes a given input string. Normalization includes the following steps:

1. Remove any extra spaces from the beginning and end of the string.
2. Remove any special characters and punctuation, leaving only alphanumeric characters and spaces.
3. Replace multiple spaces between words with a single space.
4. Convert the cleaned string to camel case (i.e., the first letter of each word is capitalized, and all other letters are in lowercase).

### Input

A single string that may contain uppercase letters, extra spaces, and special characters.

### Output

A single normalized string in camel case.

### Example

**Input**:  
`" Hello! World@ This is a Test!. "`  
**Output**:  
`"Hello World This Is A Test"`

---

### Explanation

1. **Trim the String**:  
   The `trim()` method removes extra spaces from both ends of the string.

2. **Remove Special Characters**:  
   The regular expression `/[^a-zA-Z0-9\s]/g` is used to remove any character that is not a letter, number, or space.

3. **Replace Multiple Spaces**:  
   The regular expression `\s+` is used to match one or more whitespace characters, and `.replace()` is used to convert them into a single space.

4. **Convert to Camel Case**:  
   The `split(' ')` method splits the string into words by spaces. Then, `map()` is used to capitalize the first letter of each word, and the remaining letters are converted to lowercase. Finally, the words are joined back together using `join(' ')`.

---
```


### [Back to Main Documentation](../README.md)
