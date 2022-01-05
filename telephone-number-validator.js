

function telephoneCheck(usNumberToTest) {
    let usRegExpOne = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    let result = usRegExpOne.test(usNumberToTest);
    if (result) {
        return result;
    } else {
        let usRegExpTwo = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        let resultTwo = usRegExpTwo.test(usNumberToTest);
        if (resultTwo) {
            return resultTwo;
        } else {
            let usRegExpThree = /^[0-9]{3} [0-9]{3} [0-9]{4}$/;
            let resultThree = usRegExpThree.test(usNumberToTest);
            if (resultThree) {
                return resultThree;
            } else {
                let usRegExpFour = /^1 [0-9]{3} [0-9]{3} [0-9]{4}$/;
                let usRegExpFourUs2 = /^1 (\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
                let usRegExpFourUs3 = /^1(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

                if (usRegExpFour.test(usNumberToTest) || usRegExpFourUs2.test(usNumberToTest) || usRegExpFourUs3.test(usNumberToTest)) {
                    return true;
                } else {
                    let usRegExpFive = /^[0-9]{3}[0-9]{3}[0-9]{4}$/;
                    let resultFive = usRegExpFive.test(usNumberToTest);
                    if (resultFive) {
                        return resultFive;
                    } else {
                        return false;
                    }
                }
            }
        }
    }
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));