
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositAmount = getElementValueById('deposit-total');
    const newDepositTotal = newDepositAmount + previousDepositAmount;
    setElementValueById('deposit-total', newDepositTotal);

    const previousBalanceAmount = getElementValueById('balance-total');
    const newBalanceTotal = newDepositAmount + previousBalanceAmount;
    setElementValueById('balance-total', newBalanceTotal);

})