![Package Logo](./assets/l.png)

# Kunuharupa - Sinhala Profanity Filter

A Node.js package to detect and filter profanity in both Sinhala Unicode and Singlish text.

## Installation

```bash
npm install kunuharupa
```

## Usage

```javascript
const { detectProfanity, filterProfanity } = require('kunuharupa');
else
import { detectProfanity, filterProfanity } from "kunuharupa"

// Detect profanity
const text = "Your text here with Sinhala/Singlish content";
const result = detectProfanity(text);
console.log(result.profanities); // Array of detected profane words
console.log(result.count); // Number of profanities found

// Filter profanity
const filteredText = filterProfanity(text);
console.log(filteredText); // Text with profanities replaced by asterisks
```

## Features

- Detects profanity in both Sinhala Unicode and Singlish text
- Returns count and list of detected profane words
- Filters profanity by replacing with asterisks
- Easy to integrate with any Node.js application

## License

MIT
