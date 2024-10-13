# Problem 3: Advanced College Ranking System

## Problem Statement

You are tasked with developing a program to rank a list of colleges based on user preferences. Each college has a name, location, fees, and a current ranking. The user can specify a preferred location, a maximum fee they are willing to pay, and an important weight for both ranking and fees.

### Input

1. A list of colleges represented as objects with the following attributes:
   - `name` (string)
   - `location` (string)
   - `fees` (integer)
   - `ranking` (integer)
2. Four additional inputs:
   - `preferred_location` (string)
   - `max_fees` (integer)
   - `ranking_weight` (integer)
   - `fees_weight` (integer)

### Output

A list of colleges that match the user’s preferences, sorted by their score in non-decreasing order (lower scores are better).

### Example

**Colleges Table**:

| Name      | Location   | Fees  | Ranking |
| --------- | ---------- | ----- | ------- |
| College A | New York   | 20000 | 1       |
| College B | California | 15000 | 2       |
| College C | New York   | 25000 | 3       |
| College D | New York   | 10000 | 4       |

**Input**:  
`preferredLocation = "New York"`  
`maxFees = 20000`  
`rankingWeight = 2`  
`feesWeight = 1`

**Output**:  

---

### Explanation

1. **Filter Colleges by Location and Fees**:  
   Filter the colleges to only include those in the preferred location and with fees less than or equal to the maximum fees specified by the user.

2. **Calculate the Score**:  
   The score for each college is calculated as:
   \[
   \text{Score} = (\text{Ranking} \times \text{rankingWeight}) + \left(\frac{\text{Fees}}{\text{maxFees}} \times \text{feesWeight}\right)
   \]

3. **Sort by Score**:  
   Sort the filtered colleges by their scores in non-decreasing order (lower scores are better).

4. **Output**:  
   Output the list of colleges that meet the user's preferences, along with their calculated scores.

---

```

### [Back to Main Documentation](../../README.md)

