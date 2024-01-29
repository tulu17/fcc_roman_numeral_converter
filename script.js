document.getElementById('convert-btn').addEventListener('click', function () {
  convertToRoman();
});

document.getElementById('number').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    convertToRoman();
  }
});

function convertToRoman() {
    const inputElement = document.getElementById('number');
    const outputContainer = document.getElementById('output-container');
    const outputElement = document.getElementById('output');
    const inputValue = parseInt(inputElement.value);

    if (isNaN(inputValue) || inputValue < 1) {
        outputElement.textContent = inputValue < 1 ? "Please enter a number greater than or equal to 1" : "Please enter a valid number";
        outputContainer.classList.add('active');
    } else if (inputValue >= 4000) {
        outputElement.textContent = "Please enter a number less than or equal to 3999";
        outputContainer.classList.add('active');
    } else {
        outputElement.textContent = getRomanNumeral(inputValue);
        outputContainer.classList.add('active');
    }
}

function getRomanNumeral(num) {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let result = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }

  return result;
}
