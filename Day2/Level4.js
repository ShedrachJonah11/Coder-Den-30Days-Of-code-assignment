const text = 'He earns 5000 euro from salary per\ month, 10000 euro annual bonus, 15000 euro\ online courses per month.';

const arr  = text.match(/\d+/g);

const totalAnnualIncome = (+arr[0] + +arr[2]) * 12 + +arr[1];

console.log(totalAnnualIncome);