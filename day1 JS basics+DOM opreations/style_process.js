var block = document.querySelector("#block");
//先选中标签，然后通过改标签的名字来更改它的样式（预设好的）
block.className = "chagestyle";

//文本处理
block.innerHTML = '<span class="bold-text">加粗的文本</span>';

//事件操作：onlcick
// block.onclick = function () {
//   alert("surprise");
// };

block.addEventListener("click", function () {
  alert("surprise");
});
block.addEventListener("click", function () {
  alert("surprise again");
});

var number = document.querySelector("#nummern");
//获取number里面的所有子标签
var items = number.children;
console.log(items);
//获取按钮
var prevBtn = document.querySelector("#prev");
var nextBtn = document.querySelector("#next");

var index = 0;
items[0].className = "active";
//next
nextBtn.addEventListener("click", function () {
  if (index < 3) {
    index++;
    items[index].className = "active";
    items[index - 1].className = "inactive";
  } else {
    index = 0;
    items[0].className = "active";
    items[3].className = "inactive";
  }
});
//previous
prevBtn.addEventListener("click", function () {
  if (index > 0) {
    index--;
    items[index].className = "active";
    items[index + 1].className = "inactive";
  } else {
      index = 3;
      items[3].className = "active";
      items[0].className = "inactive";
  }
});
