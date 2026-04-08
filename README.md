# 🛒 eCommerce Dashboard

A TypeScript application that simulates API requests for a product catalog, user reviews, and sales reports, with Promise-based async handling and custom error classes.

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Reflections](#reflections)

## Overview
This project simulates an API-driven e-commerce dashboard that fetches product catalogs, user reviews, and sales reports asynchronously using TypeScript Promises. The application implements chained Promise calls to manage sequential data retrieval, custom error classes to handle network and data failures, and a retry mechanism to recover from failed API requests gracefully. 

## Features
- Simulated API calls for product catalog, reviews, and sales reports
- Promise chaining for sequential data retrieval
- Custom error classes for network and data errors
- Error handling with `.catch()` and `.finally()`
- Retry mechanism for failed API requests

## Technologies
- TypeScript
- Node.js

## Setup

### Prerequisites
- Node.js
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zstem001hz-droid/ecommerce-dashboard.git
cd ecommerce-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Compile TypeScript:
```bash
npx tsc
```

4. Run the application:
```bash
node dist/index.js
```

### Notes
- No API key required - all API calls are simulated
- Uses custom `NetworkError` and `DataError` classes for error identification
- `Math.random()` simulates real-world API failures - run multiple times to see different scenarios

## AI Collaboration
- Claude: console.log() suggestions to improve Node.js output in the terminal.

## Author
Zac White

## Acknowledgments
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise): Promise Documentation

## Reflections
This lab was an introduction to asynchronous programming with TypeScript Promises, but I found myself becoming frustrated with how Node.js displays data in the terminal - raw brackets, braces, object notation that looks nothing like what an individual would see in the real world. Due to this, I spent a lot of time playing with console logging to make that display prettier, formatting the output manually with template literals. 

Implementing custom error classes, `NetworkError` and `DataError` was fun. Rather than relying on generic error messages, those custom classes make it immediately clear (if this was a real-world eCommerce scenario) what type of failure occurred, which makes it invaluable. 

I did enjoy learning about promise chains, and finding that `.finally()` fires off before the review loops complete was surprising - coming from synchronous code's linear flow, you'd expect everything to finish in order. Even JavaScript's event loop doesn't work that way, and wrapping my head around that was one of the more interesting moments of the lab. You have to see it behaving unexpectedly in the terminal to fully appreciate it.  