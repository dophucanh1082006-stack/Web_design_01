// Lấy các phần tử từ HTML thông qua ID
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Xử lý sự kiện khi bấm vào nút Hamburger menu (Mở menu)
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

// Xử lý sự kiện khi bấm vào nút X (Đóng menu)
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
// Tính năng Image Gallery (Đổi ảnh sản phẩm)
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

// Gắn sự kiện click cho từng ảnh nhỏ
if (MainImg) {
    smallimg[0].onclick = function() {
        MainImg.src = smallimg[0].src;
    }
    smallimg[1].onclick = function() {
        MainImg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function() {
        MainImg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function() {
        MainImg.src = smallimg[3].src;
    }
}

// Khi bấm vào nút 3 gạch -> Trượt menu ra
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

// Khi bấm vào nút X -> Đóng menu lại
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}