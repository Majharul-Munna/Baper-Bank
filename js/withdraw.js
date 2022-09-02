document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const withdrawInputValueString = withdrawInputField.value;
    const withdrawInputValue = parseFloat(withdrawInputValueString);
    withdrawInputField.value = '';
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawPreviousTotalString = withdrawTotalElement.innerText;
    const withdrawPreviousTotal = parseFloat(withdrawPreviousTotalString);

    const newTotalWithdrawAmount = withdrawPreviousTotal + withdrawInputValue;
    withdrawTotalElement.innerText = newTotalWithdrawAmount;

    const totalBalance = document.getElementById('balance-total');
    const totalBalanceString = totalBalance.innerText;
    const totalPreviousBalance = parseFloat(totalBalanceString);

    const newTotalBalanceAmount = totalPreviousBalance - withdrawInputValue;
    totalBalance.innerText = newTotalBalanceAmount;
})