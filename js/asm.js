var allImg = [
  "img/banner1.png",
  "img/banner2.png",
  "img/banner3.png",
  "img/banner4.png",
];
var i = 0;
// run để dành riêng cho việc dừng
var run;

function Next() {
  i++;
  // cộng không được quá số lượng ảnh trong mảng
  if (i == allImg.length) {
    i = 0;
  }
  if (i < allImg.length) {
    document.getElementById("slide").src = allImg[i];
  }
}
function Back() {
  // trừ đi sẽ âm nên cho điều kiện để quay về ảnh cuối !
  if (i == 0) {
    i = 4;
  }
  i--;
  if (i <= allImg.length) {
    document.getElementById("slide").src = allImg[i];
  }
}
// cho chạy
function Start() {
  document.getElementById("slide").src = allImg[i];
  i++;
  if (i == allImg.length) {
    i = 0;
  }
  run = setTimeout("Start()", 1200);
}

// cho dừng
function Stop() {
    clearTimeout(run);
}

