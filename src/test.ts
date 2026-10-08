import { processVisit } from './loyalty';

async function runTest() {
    const testPhone = "555-123-4567";
    console.log(`Testing processVisit for ${testPhone}...`);

    try {
        const result = await processVisit(testPhone);
        console.log("Success:", result);
    } catch (error) {
        console.error("Test failed:", error);
    }
}

runTest();