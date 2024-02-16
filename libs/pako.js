
const testData = "Test data to compress";
const compressedData = pako.deflate(testData);
console.log("pako result:", compressedData );
