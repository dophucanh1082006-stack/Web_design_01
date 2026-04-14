let prices = document.getElementsByClassName("price");
let quantities = document.getElementsByClassName("quanty");
let totals = document.getElementsByClassName("total");
let cartTotal = 0; // Đưa ra ngoài để dùng chung

function updateCart() {
    cartTotal = 0; // Reset về 0 mỗi lần tính lại

    for (let i = 0; i < prices.length; i++) {
        let priceValue = parseFloat(prices[i].innerText.replace("đ", ""));
        let quantityValue = parseInt(quantities[i].value) || 0; // Thêm || 0 để tránh lỗi khi ô trống
        let subtotal = priceValue * quantityValue;
        
        totals[i].innerText = subtotal + "đ";
        cartTotal += subtotal;
    }
    
    // Gọi hàm hiển thị tiền ra màn hình
    renderTotal();
}

// Hàm này chuyên trách việc đưa con số lên giao diện HTML
function renderTotal() {
    document.querySelector("#subtotal table tr:nth-child(1) td:last-child").innerText = cartTotal+"đ";
    document.querySelector("#subtotal table tr:nth-child(3) td:last-child").innerText = cartTotal+"đ";
}

function applyCoupon() { // Đổi tên hàm để tránh trùng với tên biến // Lấy đúng thẻ input
    let couponValue = document.getElementById("gigia").value;// Lấy đúng thẻ input

    if (couponValue.includes("VN")) {
        alert("Bạn được giảm giá 30%");
        cartTotal = cartTotal * 0.7; // Giảm 30% là nhân với 0.7
        renderTotal(); // Cập nhật lại con số hiển thị sau khi giảm
    } else {
        alert("Bạn nhập sai mã giảm giá");
    }
}

function checkout() {
    let finalAmount = document.querySelector("#subtotal table tr:nth-child(3) td:last-child").innerText;
    alert("Tổng tiền của bạn là: " + finalAmount);
}

// Gắn sự kiện
for (let i = 0; i < quantities.length; i++) {
    quantities[i].addEventListener("input", updateCart);
}
function addToCartDirect(imgId, nameId, priceId) {
                const image = document.getElementById(imgId).src;
                const name = document.getElementById(nameId).innerText;
                const price = document.getElementById(priceId).innerText;
                const size = "Default"; // Trang chủ không chọn được size, đặt mặc định
                const qty = 1; // Nhấn vào icon ngoài trang chủ thì mặc định thêm 1 cái

                const productItem = {
                    name: name,
                    price: price,
                    size: size,
                    quantity: qty,
                    image: image
                };

                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                const existingProductIndex = cart.findIndex(item => item.name === name && item.size === size);

                if (existingProductIndex !== -1) {
                    cart[existingProductIndex].quantity += qty;
                } else {
                    cart.push(productItem);
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                alert('Đã thêm 1 sản phẩm ' + name + ' vào giỏ hàng!');
            }
