// Angular
app = angular.module("asm", []);
app.controller("ctr", work);
function work($scope) {}
// Jquery
$("#submit").click(function () {
  var name = $("#fullname").val();
  var SDT = $("#call").val();
  var NoiDung = $("#note").val();
  var Email = $("#email").val();
  var test = document.getElementsByName("call");
  alert(test);
  if (name == "" || SDT == "" || NoiDung == "" || Email == "") {
    // alert("Hãy điền đầy đủ thông tin !");
    swal({
      title: "Chưa nhập đúng !!",
      text: "Mời kiểm tra lại xem đã nhập đủ chưa !!",
      icon: "warning",
      button: "Ok",
    });
  } else {
    document.getElementById("alert").style.display = "block";
    // alert('Chúc mừng bạn đã nhập đúng yêu cầu ! tôi là Trọng Phúc , chúc bạn một ngày tốt lành.')
  }
});

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
