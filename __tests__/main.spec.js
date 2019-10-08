const myFunction = require('../main');

it('Check numbers if it has Null Value', () => {
    const result = myFunction.checkNumbersAreNull(2, 4);
    expect(result).toBe("All are valid integers");
});


it('Check numbers if it has Negative Value', () => {
    const result = myFunction.checkNumbersAreNegative(2, 4);
    expect(result).toBe("No negative values found");
});

it('Check Second number if it is greater than or equal to equal first number', () => {
    const result = myFunction.checkSecondNumberGreaterThanOrEqualFirstNumber(2, 4);
    expect(result).toBe("Second numbers is greater than first number");
});

it('Check given numbers are in range', () => {
    const result = myFunction.checkNumbersInRange(1, 4);
    expect(result).toBe("Given numbers are in range");
});

it('Multiply and Align Output', () => {
    const result = myFunction.MultiplyAndAlignOutput(2, 4);
    expect(result).toBe("2*2=4"+ 
"2*3=6  3*3=9"+ 
"2*4=8  3*4=12  4*4=16");
});