function payWithPayPal() {
    const form = document.getElementById('subscription-form');
    const subscription = document.getElementById('subscription').value.split('|');
    const amount = subscription[0];
    const period = subscription[1];

    // Create a form and submit it to PayPal
    const paypalForm = document.createElement('form');
    paypalForm.setAttribute('action', 'https://www.paypal.com/cgi-bin/webscr');
    paypalForm.setAttribute('method', 'post');
    paypalForm.style.display = 'none';

    const cmd = document.createElement('input');
    cmd.setAttribute('type', 'hidden');
    cmd.setAttribute('name', 'cmd');
    cmd.setAttribute('value', '_xclick');
    paypalForm.appendChild(cmd);

    const business = document.createElement('input');
    business.setAttribute('type', 'hidden');
    business.setAttribute('name', 'business');
    business.setAttribute('value', 'paypal.me/manojkumarlahre');
    paypalForm.appendChild(business);

    const itemName = document.createElement('input');
    itemName.setAttribute('type', 'hidden');
    itemName.setAttribute('name', 'item_name');
    itemName.setAttribute('value', `Telegram Channel Subscription - ${period}`);
    paypalForm.appendChild(itemName);

    const amountInput = document.createElement('input');
    amountInput.setAttribute('type', 'hidden');
    amountInput.setAttribute('name', 'amount');
    amountInput.setAttribute('value', amount);
    paypalForm.appendChild(amountInput);

    const currencyCode = document.createElement('input');
    currencyCode.setAttribute('type', 'hidden');
    currencyCode.setAttribute('name', 'currency_code');
    currencyCode.setAttribute('value', 'INR');
    paypalForm.appendChild(currencyCode);

    document.body.appendChild(paypalForm);
    paypalForm.submit();
}
