const fs = require('fs');
const path = require('path');

// Load the list of profanities
const unicodeProfanityList = require(path.join(__dirname, 'unicode-list.json')).words;
const singlishProfanityList = require(path.join(__dirname, 'profanity-list-singlish.json')).words;

// Function to detect profanity in the text
function detectProfanity(text) {
  // Split the input text by spaces or punctuation to handle different word boundaries
  const words = text.split(/\s+/);
  let count = 0;

  // Detect profanities in both Unicode and Singlish
  const detectedProfanities = words.filter(word => {
    // Check if the word is in the Sinhala Unicode profanity list
    if (unicodeProfanityList.includes(word)) {
      count++;
      return true;
    }

    // Check if the word is in the Singlish profanity list
    if (singlishProfanityList.includes(word.toLowerCase())) {
      count++;
      return true;
    }

    return false;
  });

  return {
    profanities: detectedProfanities,
    count: count
  };
}

// Function to filter profanity in the text
function filterProfanity(text) {
    const words = text.split(/\s+/);

    const filteredText = words.map(word => {
        // Check for profanity in Unicode list
        if (unicodeProfanityList.includes(word)) {
            return '*'.repeat(word.length); // Replace the word with asterisks
        }

        // Check for profanity in Singlish list
        if (singlishProfanityList.includes(word.toLowerCase())) {
            return '*'.repeat(word.length); // Replace the word with asterisks
        }

        return word; // If not profane, keep the word as it is
    }).join(' ');

    return filteredText;
}

module.exports = {
    detectProfanity,
    filterProfanity
};