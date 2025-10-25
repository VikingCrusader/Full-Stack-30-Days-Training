init.onclick = function () {
  this.innerText = "我是新的样式";
  this.className = "after";
  this.id = "after";
};

var num = 10;
var myAge = 18;
console.log(myAge);
myAge = null;
console.log(myAge);
myAge = undefined;
console.log(myAge);

var str1 = "I am";
var str2 = "A string";
var str3 = str1 + str2;
console.log(str3);

if (12 === 12) {
  console.log(true);
}

function add(a, b) {
  return a + b;
}

var c = add(2, 3);
console.log(c);

var myArr = [1, 2, 3, 4, 5];
myArr.push(6);
console.log(myArr);

for (var v in myArr) {
  console.log(myArr[v]);
}

for (var i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

var newArr_length = myArr.unshift(100, 200, 300);
console.log(newArr_length);
for (var v in myArr) {
  console.log(myArr[v]);
}

myArr.forEach(function (item, index) {
  console.log(item, index);
});

var obj = {
  name: "Yiwen Zhang",
  age: 18,
  sayHello: function () {
    console.log("Hello!");
  },
};

console.log(obj.age);

for (var key in obj) {
  console.log(key, obj[key]);
}

obj.sayHello();
