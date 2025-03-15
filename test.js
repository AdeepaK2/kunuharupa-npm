// Import the functions from your package (index.js)
const { detectProfanity, filterProfanity } = require('./index');

// Sample input text 
const inputText = "This is a kariya and also a කැරියා";

try {
    // Detect profanities
    const result = detectProfanity(inputText);
    console.log("Detected Profanities:", result.profanities);
    console.log("Number of profanities found:", result.count);

    // Filter profanities (replace them with asterisks)
    const filteredText = filterProfanity(inputText);
    console.log("Filtered Text:", filteredText);
} catch (error) {
    console.error("Error processing text:", error.message);
}
