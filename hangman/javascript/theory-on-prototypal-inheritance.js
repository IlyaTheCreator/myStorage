// Primitive values(values that do not have properties): 
// string, number, boolean, null, undefined
//     ^      ^       ^ |      ^   ^
//       have object    |  truly primitive values
//         wrapper      |                   

    // Prototype chains
// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null