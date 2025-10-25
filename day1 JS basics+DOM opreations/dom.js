var block = document.getElementById("block"); //获取标签根据ID,存在block这个变量里面
console.log(block);
block.textContent = "JS设置的文本";

var arr1 = document.getElementsByTagName("p");
console.log(arr1[0].textContent);

for (var i = 0; i < arr1.length; i++) {
  arr1[i].textContent = "第" + (i + 1) + "个";
}

var textArr = [
  "Valorant",
  "Counter Strike",
  "League of Legends",
  "Call of Duty",
];

//把textArr里面的第n项对应地赋值给arr1
for (var i = 0; i < textArr.length; i++) {
  arr1[i].textContent = textArr[i];
}

for (var i = 0; i < arr1.length; i++) {
  console.log(arr1[i].textContent);
}

var contents = document.querySelectorAll(".text");
console.log(contents);

var contents = document.querySelectorAll("#container p");

var secondItem = document.querySelector(".item");
secondItem.textContent = "第二个标签";

thirdItem = document.querySelector('.one');
console.log(secondItem.previousElementSibling.textContent);
console.log(thirdItem.parentNode);

var container = thirdItem.parentNode;

//选择其子类

var childs = container.children;
console.log(childs);