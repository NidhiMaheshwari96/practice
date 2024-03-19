const data = "nidhi maheshwari";

const result = window.btoa(data);
console.log(result, "1");

const result1 = window.atob(result);
console.log(result1, "2");

// Base64 Encoding
// const encodedData = Buffer.from(data).toString('base64');
// console.log(encodedData, "1");

// // Base64 Decoding
// const decodedData = Buffer.from(encodedData, 'base64').toString();
// console.log(decodedData, "2");
