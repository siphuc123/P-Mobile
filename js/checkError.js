function show() {
  document.getElementById("alert").style.display = "block";
  // alert('Chúc mừng bạn đã nhập đúng yêu cầu ! tôi là Trọng Phúc , chúc bạn một ngày tốt lành.')
  document.getElementById("content").style.display = "block";
}

function hide() {
  document.getElementById("alert").style.display = "none";
}
function hide_label() {
  document.getElementById("content").style.display = "none";
}

// check form cách đơn giản
function submit() {
  var hoten = document.getElementById("fullname").value.trim();
  var sdt = document.getElementById("call").value.trim();
  var email = document.getElementById("email").value;
  alert(hoten);
  if (hoten == "") {
    alert("Bạn chưa nhập Họ và tên *");
    return;
  } else if (isNaN(hoten) == false) {
    alert("Họ tên không nhập số !");
    return;
  }

  //Check sdt
  if (sdt == "") {
    alert("Vui lòng nhập SĐT");
    return;
  } else if (sdt.length == 10 || sdt.length == 11 || sdt.length == 9) {
  } else {
    alert("Số điện thoại không hợp lệ !");
    return false;
  }

  // regex check
  if (email == "") {
    alert("Bạn chưa nhập email");
    return;
  }
  var result = function () {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
}
