
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    setElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceAmount = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    setElementValueById('balance-total', newBalanceTotal);

})