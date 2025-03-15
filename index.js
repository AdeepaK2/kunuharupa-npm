let unicodeProfanityList = [];
let singlishProfanityList = [];

// Dynamic import for JSON files
async function loadProfanityData() {
  if (!unicodeProfanityList.length || !singlishProfanityList.length) {
    const unicodeData = await import('./unicode-list.json');
    const singlishData = await import('./profanity-list-singlish.json');
    
    unicodeProfanityList = unicodeData.words;
    singlishProfanityList = singlishData.words;
  }
}

// Function to detect profanity in the text
export async function detectProfanity(text) {
  await loadProfanityData();  // Ensure profanity data is loaded

  const words = text.split(/\s+/);
  let count = 0;

  const detectedProfanities = words.filter(word => {
    if (unicodeProfanityList.includes(word)) {
      count++;
      return true;
    }
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
export async function filterProfanity(text) {
  await loadProfanityData();  // Ensure profanity data is loaded

  const words = text.split(/\s+/);
  const filteredText = words.map(word => {
    if (unicodeProfanityList.includes(word)) {
      return '*'.repeat(word.length);  // Replace profanity with asterisks
    }
    if (singlishProfanityList.includes(word.toLowerCase())) {
      return '*'.repeat(word.length);  // Replace profanity with asterisks
    }
    return word;  // If not profane, keep the word as it is
  }).join(' ');

  return filteredText;
}
