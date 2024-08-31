function indexOfIgnoreCase(str, subStr) {
    // Convert both strings to lowercase
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();
    
    // Find and return the index of the first occurrence of the substring
    return lowerStr.indexOf(lowerSubStr);
}

// Example usage:
console.log(indexOfIgnoreCase("Hello World", "world")); // 6
console.log(indexOfIgnoreCase("apple", "Ple")); // 2
console.log(indexOfIgnoreCase("test", "aaa")); // -1
