// Async/Await & Fetch API Notes

// 1. The Problem — JS is single threaded
// Slow tasks (network requests, timers) would freeze the page if JS waited
// So JS handles them asynchronously — starts task, moves on, comes back when done

// 2. Promises
// A promise represents a future value — pending, fulfilled, or rejected
// async/await is cleaner syntax for handling promises

// 3. async/await pattern
async function getData() {
    try {
        const response = await fetch("URL"); // wait for response
        const data = await response.json();  // wait for data extraction
        console.log(data);
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}

// 4. Key concepts
// async — marks function as asynchronous, allows use of await
// await — pauses function execution until promise resolves, then unwraps value
// fetch — returns a promise (the box)
// .json() — opens the box, returns actual JS object (also a promise)
// try/catch — handles errors gracefully

// 5. Inside vs Outside async function
// Inside — behaves synchronously, each await waits for previous
// Outside — asynchronous, rest of program doesn't wait for async function

// 6. Callback Hell → Promises → async/await
// Each solved the readability problems of the previous
// async/await is the current standard
