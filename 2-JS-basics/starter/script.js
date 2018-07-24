



/*for (var i = 0; i < 10; i++) {
  console.log(i);
}

var john = ['john', 'smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

var i = 0
while (i < john.length) {
  console.log(john[i]);
  i++
}

//looping backwards

for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}


/*var mark = {
  name: 'Mark',
  mass: 190,
  height: 1.9,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

var john = {
  name: 'John',
  mass: 90,
  height: 1.8,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

mark.calcBMI();
console.log(mark);

john.calcBMI();
console.log(john);

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.name + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.name + ' has a higher BMI of ' + mark.bmi);
} else {
  console.log('They have the same BMI');
}*/

/*var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

if (markBmi > johnBmi) {
  console.log('Mark\'s BMI is higher than John\'s ');
}
else {
  console.log('John\'s BMI is higher than Mark\'s ');
}


console.log(markBmi, johnBmi);

var highBmi = markBmi >= johnBmi;
console.log('Is Mark\'s BMI higher than John\'s? True or False?' + ' ' + highBmi);
*/



/*function customTip(bill) {
  var percentage;
  if (bill < 50){
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill
}

var bills = [124, 48, 268];
var tips = [
  customTip(bills[0]),
  customTip(bills[1]),
  customTip(bills[2])
];

var finalValues = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
]

console.log(tips, finalValues);
*/


/*var johnAv, mikeAv, maryAv;
johnAv = (110 + 120 + 103) / 3;
mikeAv = (116 + 94 + 123) / 3;
maryAv = (97 + 134 + 105) / 3;

if (johnAv >= mikeAv && johnAv >= maryAv) {
  console.log('John\'s team average is ' + johnAv + ', and is higher than Mike\'s and Mary\'s team.');
} else if (mikeAv >= johnAv && mikeAv >= maryAv) {
  console.log('Mike\'s team average is ' + mikeAv + ', and is higher than John\'s and Mary\'s team.');
} else if (maryAv >= johnAv && maryAv >= mikeAv) {
  console.log('Mary\'s team average is ' + maryAv + ', and is higher than John\'s and Mike\'s team.');
} else {
  console.log('No one wins');
}
*/












/*var markHeight, markMass, johnHeight, johnMass;
markHeight = 1.9;
markMass = 80;
johnHeight = 1.8;
johnMass = 75;

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

if (markBmi > johnBmi) {
  console.log('Mark\'s BMI is higher than John\'s ');
}
else {
  console.log('John\'s BMI is higher than Mark\'s ');
}
*/

/*console.log(markBmi, johnBmi);

var highBmi = markBmi >= johnBmi;
console.log('Is Mark\'s BMI higher than John\'s? True or False?' + ' ' + highBmi);
*/
