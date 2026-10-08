// Use 'parse/node' for backend testing, or 'parse' when moving to the browser frontend
import Parse from 'parse/node';

// 1. Initialize Back4App connection
Parse.initialize("CbRfjNpV0k4WXYuV6916ZPCPseDxPQiJOCK7HOdz", "6SoXtMQ0RXvRXIubPo2SvD3fgJC4MYvCi5FdZRwD");
Parse.serverURL = 'https://parseapi.back4app.com/';

export async function processVisit(phoneNumber: string): Promise<string> {
    const Customer = Parse.Object.extend("Customer");
    const query = new Parse.Query(Customer);
    query.equalTo("phoneNumber", phoneNumber);

    try {
        let customer = await query.first();

        // 2. If new customer, create their profile
        if (!customer) {
            customer = new Customer();
            customer.set("phoneNumber", phoneNumber);
            customer.set("punchCount", 1);
            customer.set("totalVisits", 1);
            await customer.save();
            return "New customer account created. 1 punch added.";
        }

        // 3. Update existing customer
        let currentPunches = customer.get("punchCount") || 0;
        let totalVisits = customer.get("totalVisits") || 0;

        currentPunches += 1;
        customer.set("totalVisits", totalVisits + 1);

        // 4. Trigger the Reward
        if (currentPunches >= 8) {
            customer.set("punchCount", 0); // Reset for the next cycle
            await customer.save();
            return "🎉 8th Visit! Apply a 40% Discount.";
        } else {
            customer.set("punchCount", currentPunches);
            await customer.save();
            return `Punch added. They are now at ${currentPunches}/8 visits.`;
        }
    } catch (error) {
        console.error("Error processing visit:", error);
        throw error;
    }
}