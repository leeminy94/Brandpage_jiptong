function openNav() {
  document.getElementById("sortable-list").style.width = "200px";
  document.getElementById("sortable-list").style.display = "block";
  document.getElementById("open_btn").style.display = "none";
  document.getElementById("close_btn").style.display = "block";
}

function closeNav() {
  document.getElementById("sortable-list").style.width = "0";
  document.getElementById("mySidenav").style.marginLeft= "0";
  document.getElementById("close_btn").style.display = "none";
  document.getElementById("open_btn").style.display = "block";
}

function openNav2() {
  document.getElementById("sortable-list2").style.width = "300px";
  document.getElementById("sortable-list2").style.display = "block";
  document.getElementById("open_btn2").style.display = "none";
  document.getElementById("close_btn2").style.display = "block";
}

function closeNav2() {
  document.getElementById("sortable-list2").style.width = "0";
  document.getElementById("mySidenav4").style.marginLeft= "0"; //230712 ID명 수정 :: 사이드 메뉴 오류 
  document.getElementById("close_btn2").style.display = "none";
  document.getElementById("open_btn2").style.display = "block";
}




