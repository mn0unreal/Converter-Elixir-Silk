function convert() {
    const elixirAmount = document.getElementById('elixirAmount').value;
    const silkAmount = document.getElementById('silkAmount').value;
    const amountToConvert = document.getElementById('amountToConvert').value;
    const conversionDirection = document.getElementById('conversionDirection').value;
    const errorElement = document.getElementById('error');
    let result;

    // Clear previous error message
    errorElement.innerText = '';

    // Validate inputs
    if (!elixirAmount || !silkAmount || !amountToConvert || elixirAmount <= 0 || silkAmount <= 0 || amountToConvert <= 0) {
        errorElement.innerText = 'Please enter valid positive numbers for all fields.';
        return;
    }

    if (conversionDirection === 'elixirToSilk') {
        result = (amountToConvert * silkAmount) / elixirAmount;
        document.getElementById('result').innerText = `${amountToConvert} elixir is approximately ${result.toFixed(2)} silk.`;
    } else {
        result = (amountToConvert * elixirAmount) / silkAmount;
        document.getElementById('result').innerText = `${amountToConvert} silk is approximately ${result.toFixed(2)} elixir.`;
    }
}

function clearFields() {
    document.getElementById('elixirAmount').value = '';
    document.getElementById('silkAmount').value = '';
    document.getElementById('amountToConvert').value = '';
    document.getElementById('conversionDirection').value = 'elixirToSilk';
    document.getElementById('result').innerText = '';
    document.getElementById('error').innerText = '';
}
