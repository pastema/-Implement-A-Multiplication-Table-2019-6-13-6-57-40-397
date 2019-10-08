const MIN_RANGE = 1;
const MAX_RANGE = 1000;

function checkNumbersAreNull (left, right) {
    if(left == null || right == null)
    {
        return "Null is not an integer";
    }
    else
    {
        return "All are valid integers";
    }
}

function checkNumbersAreNegative (left, right) {
    if(left < 0 || right < 0)
    {
        return "Must have no negative value is not an integer";
    }
    else
    {
        return "No negative values found";
    }
}

function checkSecondNumberGreaterThanOrEqualFirstNumber (left, right) {
    if(left > right )
    {
        return "Given numbers are out of rangeMust have no negative value is not an integer";
    }
    else
    {
        return "Second numbers is greater than first number";
    }
}

function checkNumbersInRange (left, right) {
    if((left < MIN_RANGE || left > MAX_RANGE)||(right < MIN_RANGE || right > MAX_RANGE))
    {
        return "Given numbers are out of given range";
    }
    else
    {
        return "Given numbers are in range";
    }
}

function MultiplyAndAlignOutput (left, right) { //left = 2, right = 4
   let value = left; //2
   let secondvalue = left; //2
   let thirdValue = left; //2
   let concatOutput = '';
   for(value-3;value-3<=right;value++)
   {
        if(thirdValue != secondvalue)
        {
            concatOutput = concatOutput+""+secondvalue+"*"+thirdValue+""+"="+secondvalue*thirdValue+" ";
            secondvalue++;   
        }
        else if(secondvalue == right)
        {
            concatOutput = concatOutput+""+secondvalue+"*"+thirdValue+""+"="+secondvalue*thirdValue;
        }
        else
        {
            concatOutput = concatOutput+""+secondvalue+"*"+thirdValue+""+"="+secondvalue*thirdValue+"\n";
            secondvalue = left;
            thirdValue++;
        }
   }
   return concatOutput;
}



module.exports = {
    checkNumbersAreNull: checkNumbersAreNull,
    checkNumbersAreNegative: checkNumbersAreNegative,
    checkSecondNumberGreaterThanOrEqualFirstNumber: checkSecondNumberGreaterThanOrEqualFirstNumber,
    checkNumbersInRange: checkNumbersInRange,
    MultiplyAndAlignOutput: MultiplyAndAlignOutput
};