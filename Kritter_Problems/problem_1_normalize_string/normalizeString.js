// normalizeString.js
function makeNormalizeString(input) {
    
    let normalized = input.trim();   // remove spaces
    
  
    normalized = normalized.replace(/[^a-zA-Z0-9\s]/g, '');  // removing special characters
    
   
    normalized = normalized.replace(/\s+/g, ' ');
    
    
    normalized = normalized.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    
    return normalized;
}

// Example usage:
const inputString = "  Hello! World@ This is a Test!.  ";
console.log(makeNormalizeString(inputString)); 

// Output: "Hello World This Is A Test"
