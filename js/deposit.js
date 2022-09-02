document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInputField = document.getElementById('deposit-input-field');
    const newDepositAmountString = depositInputField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositInputField.value = '';
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTota = parseFloat(previousDepositTotalString);
    
    const newTotalDepositAmount = previousDepositTota + newDepositAmount;
    depositTotalElement.innerText = newTotalDepositAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalBalanceString);

    const totalCurentBalance = previousTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = totalCurentBalance;
})