const unitValues = {
    "PENNY": 0.01 * 100,
    "NICKEL": 0.05 * 100,
    "DIME": 0.1 * 100,
    "QUARTER": 0.25 * 100,
    "ONE": 1 * 100,
    "FIVE": 5 * 100,
    "TEN": 10 * 100,
    "TWENTY": 20 * 100,
    "ONE HUNDRED": 100 * 100
};

function checkCashRegister(price, cash, cid) {
    let changeSumDue = cash * 100 - price * 100;
    let changeSumDueCheck = changeSumDue;
    let change = [];

    let cidFiltered = cid.reverse();    

    let cidFilteredTotal = 0;
    cidFiltered.forEach(cidItem => {
        let denomination = cidItem[0];
        let denominationAmount = cidItem[1] * 100;
        cidFilteredTotal += denominationAmount;
        let denominationTotal = 0;

        while (changeSumDue >= unitValues[denomination] && denominationAmount > 0) {
            changeSumDue -= unitValues[denomination];
            denominationTotal += unitValues[denomination];
            denominationAmount -= unitValues[denomination];
        }

        if (denominationTotal !== 0) {
            change.push([denomination, denominationTotal / 100]);
        }
    });


    let status = '';

    if (changeSumDue > 0) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
    } else if (changeSumDue === 0 && changeSumDueCheck === cidFilteredTotal) {
        status = "CLOSED";
        change = cid.reverse();
    } else {
        status = "OPEN";
    }

    return { 'status': status, 'change': change };
}


const myResult = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

console.log('myResult', myResult);

