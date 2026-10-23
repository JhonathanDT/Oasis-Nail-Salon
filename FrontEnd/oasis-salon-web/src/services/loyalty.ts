import Parse from 'parse/node';

// 1. Initialize Back4App connection
Parse.initialize("CbRfjNpV0k4WXYuV6916ZPCPseDxPQiJOCK7HOdz", "6SoXtMQ0RXvRXIubPo2SvD3fgJC4MYvCi5FdZRwD", "BUt78Xfw2XRHbxNCrJYdNDOXTArYzISFzit5zltF");
Parse.serverURL = 'https://parseapi.back4app.com/';

export async function processVisit(phoneNumber: string): Promise<string> {
    // Fix: Pass the string directly into Parse.Query
    const query = new Parse.Query("Customer");
    query.equalTo("phoneNumber", phoneNumber);

    try {
        // Add { useMasterKey: true } to the query
        let customer = await query.first({ useMasterKey: true });

        if (!customer) {
            customer = new Parse.Object("Customer");
            customer.set("phoneNumber", phoneNumber);
            customer.set("punchCount", 1);
            customer.set("totalVisits", 1);

            // Pass null for data, and { useMasterKey: true } for options
            await customer.save(null, { useMasterKey: true });
            return "New customer account created. 1 punch added.";
        }

        let currentPunches = customer.get("punchCount") || 0;
        let totalVisits = customer.get("totalVisits") || 0;

        currentPunches += 1;
        customer.set("totalVisits", totalVisits + 1);

        if (currentPunches >= 8) {
            customer.set("punchCount", 0);
            await customer.save(null, { useMasterKey: true });
            return "🎉 8th Visit! Apply a 40% Discount.";
        } else {
            customer.set("punchCount", currentPunches);
            await customer.save(null, { useMasterKey: true });
            return `Punch added. They are now at ${currentPunches}/8 visits.`;
        }
    } catch (error) {
        console.error("Error processing visit:", error);
        throw error;
    }
}