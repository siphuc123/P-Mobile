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

// Thời gian ở footer
var TG;
function time() {
  var now = new Date();
  document.getElementById("time").innerHTML = now.toLocaleString();
  TG = setInterval("time()", 1000);
}

// Nút lên top đầu trang
window.onscroll = function () {
  var pageOffset = document.documentElement.scrollTop;
  if (pageOffset >= 333) {
    document.getElementById("TOP").style.visibility = "visible";
  } else {
    document.getElementById("TOP").style.visibility = "hidden";
  }
};

// Cart (Mua hàng)
var NF = Intl.NumberFormat();
// var arr_SP = document.getElementsByClassName('sanPham');

// Tạo mảng
function Items(hinh, ten, gia, loai) {
  this.hinh = hinh;
  this.ten = ten;
  this.gia = gia;
  this.loai = loai;
  this.soLuong = 1;
  this.TongGia = this.gia * this.soLuong;
}
// Đặt tổng tiền
var TongTien = 0;

var ItemsArr = new Array();

function themMatHang(hinh, ten, gia, loai) {
  var check = true;
  var count = 0;
  // Kiểm tra đã có hàng trong giỏ hàng chưa
  for (var i = 0; i < ItemsArr.length; i++) {
    if (loai == ItemsArr[i].loai) check = false;
  }
  // Nếu có thì thêm mặt hàng vào giỏ hàng
  if (check == true) {
    ItemsArr.push(new Items(hinh, ten, gia, loai));
    document.querySelector(".count").innerHTML++;
  } else {
    // thông báo bình thường
    //  alert("Đã có trong giỏ hàng rồi !")
    document.querySelector(".modal").style.visibility = "visible";
    document.querySelector(".modal").style.animation =
      "fade_right 0.6s alternate ease-in";

    // Ở dưới là trường hợp bấm vào mua hàng số lượng sẽ tăng
    // for (var i = 0; i < ItemsArr.length; i++) {
    //   if (loai == ItemsArr[i].loai) {
    //     if (ItemsArr[i].soLuong < 99) {
    //       ItemsArr[i].soLuong++;
    //       ItemsArr[i].TongGia = parseInt(ItemsArr[i].gia) * ItemsArr[i].soLuong;
    //     }
    //   }
    // }
  }

  document.getElementById("shopping_cart_buying").innerHTML = "";

  // Xuất
  for (var i = 0; i < ItemsArr.length; i++) {
    document.getElementById("shopping_cart_buying").innerHTML +=
      '<table><tr><td><img src="' +
      ItemsArr[i].hinh +
      '" width="80px" height="80px"></td><td>' +
      ItemsArr[i].ten +
      "</td><td><span><b>" +
      NF.format(ItemsArr[i].TongGia) +
      ' ₫</b></span></td><td class="soLuong"><button class="Giam" onclick="soLuongGiam(\'' +
      ItemsArr[i].loai +
      '\')"><i class="bx bx-chevron-left"></i></button><div class="HienSo">' +
      ItemsArr[i].soLuong +
      '</div><button class="Tang" onclick="soLuongTang(\'' +
      ItemsArr[i].loai +
      '\')"><i class="bx bx-chevron-right"></i></button></td><td><i class="bx bx-trash bx-tada-hover Xoa" onclick="Xoa(\'' +
      ItemsArr[i].ten +
      "')\"></i></td></tr></table>";
  }
  // Xuất
  for (var i = 0; i < ItemsArr.length; i++) {
    TongTien += Number(ItemsArr[i].TongGia);
  }
  document.getElementById("shopping_cart_total").innerHTML = NF.format(
    parseInt(TongTien)
  );

  // Reset Tổng tiền về 0
  TongTien = 0;
}

// Tăng số lượng 1 mặt hàng trong giỏ hàng
function soLuongTang(items) {
  for (var i = 0; i < ItemsArr.length; i++) {
    if (items == ItemsArr[i].loai) {
      if (ItemsArr[i].soLuong < 99) {
        ItemsArr[i].soLuong++;
        ItemsArr[i].TongGia = parseInt(ItemsArr[i].gia) * ItemsArr[i].soLuong;
      }
    }
  }

  document.getElementById("shopping_cart_buying").innerHTML = "";
  document.getElementById("shopping_cart_total").innerHTML = "Tổng tiền : 0 ₫";
  for (var i = 0; i < ItemsArr.length; i++) {
    document.getElementById("shopping_cart_buying").innerHTML +=
      '<table><tr><td><img src="' +
      ItemsArr[i].hinh +
      '" width="80px" height="80px"></td><td>' +
      ItemsArr[i].ten +
      "</td><td><span><b>" +
      NF.format(ItemsArr[i].TongGia) +
      ' ₫</b></span></td><td class="soLuong"><button class="Giam" onclick="soLuongGiam(\'' +
      ItemsArr[i].loai +
      '\')"><i class="bx bx-chevron-left"></i></button><div class="HienSo">' +
      ItemsArr[i].soLuong +
      '</div><button class="Tang" onclick="soLuongTang(\'' +
      ItemsArr[i].loai +
      '\')"><i class="bx bx-chevron-right"></i></button></td><td><i class="bx bx-trash bx-tada-hover Xoa" onclick="Xoa(\'' +
      ItemsArr[i].ten +
      "')\"></i></td></tr></table>";
  }
  for (var i = 0; i < ItemsArr.length; i++) {
    TongTien += Number(ItemsArr[i].TongGia);
  }
  document.getElementById("shopping_cart_total").innerHTML = NF.format(
    parseInt(TongTien)
  );

  TongTien = 0;
}

// Giảm số lượng 1 mặt hàng trong giỏ hàng
function soLuongGiam(items) {
  for (var i = 0; i < ItemsArr.length; i++) {
    if (items == ItemsArr[i].loai) {
      if (ItemsArr[i].soLuong > 1) {
        ItemsArr[i].soLuong--;
        ItemsArr[i].TongGia = parseInt(ItemsArr[i].gia) * ItemsArr[i].soLuong;
      }
    }
  }
  document.getElementById("shopping_cart_buying").innerHTML = "";

  for (var i = 0; i < ItemsArr.length; i++) {
    document.getElementById("shopping_cart_buying").innerHTML +=
      '<table><tr><td><img src="' +
      ItemsArr[i].hinh +
      '" width="80px" height="80px"></td><td>' +
      ItemsArr[i].ten +
      "</td><td><span><b>" +
      NF.format(ItemsArr[i].TongGia) +
      ' ₫</b></span></td><td class="soLuong"><button class="Giam" onclick="soLuongGiam(\'' +
      ItemsArr[i].loai +
      '\')"><i class="bx bx-chevron-left"></i></button><div class="HienSo">' +
      ItemsArr[i].soLuong +
      '</div><button class="Tang" onclick="soLuongTang(\'' +
      ItemsArr[i].loai +
      '\')"><i class="bx bx-chevron-right"></i></button></td><td><i class="bx bx-trash bx-tada-hover Xoa" onclick="Xoa(\'' +
      ItemsArr[i].ten +
      "')\"></i></td></tr></table>";
  }
  for (var i = 0; i < ItemsArr.length; i++) {
    TongTien += Number(ItemsArr[i].TongGia);
  }
  document.getElementById("shopping_cart_total").innerHTML = NF.format(
    parseInt(TongTien)
  );

  TongTien = 0;
}

// Xóa 1 Mặt hàng
function Xoa(obj) {
  for (var i = 0; i < ItemsArr.length; i++) {
    if (obj == ItemsArr[i].ten) {
      document.querySelector(".count").innerHTML--;
      ItemsArr.splice(i, 1); // Xóa 1 phần tử trong mảng
    }
  }

  document.getElementById("shopping_cart_buying").innerHTML = "";

  for (var i = 0; i < ItemsArr.length; i++) {
    document.getElementById("shopping_cart_buying").innerHTML +=
      '<table><tr><td><img src="' +
      ItemsArr[i].hinh +
      '" width="80px" height="80px"></td><td>' +
      ItemsArr[i].ten +
      "</td><td><span><b>" +
      NF.format(ItemsArr[i].TongGia) +
      ' ₫</b></span></td><td class="soLuong"><button class="Giam" onclick="soLuongGiam(\'' +
      ItemsArr[i].loai +
      '\')"><i class="bx bx-chevron-left"></i></button><div class="HienSo">' +
      ItemsArr[i].soLuong +
      '</div><button class="Tang" onclick="soLuongTang(\'' +
      ItemsArr[i].loai +
      '\')"><i class="bx bx-chevron-right"></i></button></td><td><i class="bx bx-trash bx-tada-hover Xoa" onclick="Xoa(\'' +
      ItemsArr[i].ten +
      "')\"></i></td></tr></table>";
  }

  for (var i = 0; i < ItemsArr.length; i++) {
    TongTien += Number(ItemsArr[i].TongGia);
  }
  document.getElementById("shopping_cart_total").innerHTML = NF.format(
    parseInt(TongTien)
  );
  TongTien = 0;
  if(ItemsArr.length === 0) {
    document.getElementById("shopping_cart_buying").innerHTML =
    "Có vẻ như bạn chưa mua gì ... 🤷🏻‍♂️";
  }
}

// Nút Clear tất cả
function Clear() {
  for (var i = 0; i < ItemsArr.length; i++) {
    ItemsArr.splice(i);
  }
  document.querySelector(".count").innerHTML = 0;
  document.getElementById("shopping_cart_buying").innerHTML =
    "Có vẻ như bạn chưa mua gì ... 🤷🏻‍♂️";
  document.getElementById("shopping_cart_total").innerHTML = 0;
}

// Tắt thông báo

function dongCuaSo() {
  document.querySelector(".modal").style.visibility = "hidden";
  document.querySelector(".modal").style.animation =
  "close 1s alternate ease-out";
  // document.querySelector(".modal").style.display = "none";
}
