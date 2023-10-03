const fs = require('fs');

function findEmailsAndIPs(input: string): {emails: string[], ips: string[]} {
    // const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
    // const ipPattern = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g;

    const emails: string[] = [];
    const ips: string[] = [];

    let match;

    while ((match = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g.exec(input)) !== null) {
        emails.push(match[0]);
    }

    while ((match = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g.exec(input)) !== null) {
        ips.push(match[0]);
    }

    return {emails, ips};
}

const input = `Here are some emails john.doe@example.com, jane_doe@example.co.uk and IP addresses 192.168.1.1, 10.0.0.1 within a string.`;
const result = findEmailsAndIPs(input);

// Construct the output string
let output = 'Found Emails:\n';
output += result.emails.join('\n');

output += '\n\nFound IPs:\n';
output += result.ips.join('\n');

// Write to a file
fs.writeFile('extractedData.txt', output, (err:any) => {
    if (err) throw err;
    console.log('Data has been written to extractedData.txt');
});
