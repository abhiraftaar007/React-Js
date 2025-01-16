const message = () => {
    const name = "Abhi";
    const age = 90;
    return name + ' is ' + age + ' years old.';  
}

export default message;

// You can import modules into a file in two ways, based on if they are named exports or default exports.
// Named exports must be destructured using curly braces. Default exports do not.
// refer to App.js to see both the imports