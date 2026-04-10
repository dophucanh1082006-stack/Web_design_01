const username = document.getElementById("name");
const email = document.getElementById("email");
const form = document.querySelector("form");

// 1. QUAN TRỌNG: Xóa lỗi ngay khi người dùng bắt đầu gõ lại
// Nếu không có dòng này, trình duyệt sẽ "nhớ" lỗi mãi mãi
username.addEventListener("input", () => username.setCustomValidity(""));
email.addEventListener("input", () => email.setCustomValidity(""));

form.addEventListener("submit", function(event) {
    // 2. Reset lại trạng thái hợp lệ trước mỗi lần kiểm tra
    username.setCustomValidity("");
    email.setCustomValidity("");

    // 3. Kiểm tra logic Tên
    if (username.value.trim().length < 5) {
        username.setCustomValidity("Tên người dùng phải có ít nhất 5 ký tự.");
    }

    // 4. Kiểm tra logic Email (Đúng định dạng và không trống)
    if (email.validity.valueMissing) {
        email.setCustomValidity("Vui lòng nhập Email.");
    } else if (email.validity.typeMismatch) {
        email.setCustomValidity("Email không đúng định dạng");
    }

    // 5. Kiểm tra và hiển thị bong bóng lỗi
    if (!form.checkValidity()) {
        event.preventDefault(); // Ngăn gửi form
        form.reportValidity();  // Hiện lỗi tại ô sai đầu tiên
        return; 
    }

    // Nếu mọi thứ OK
    event.preventDefault();
    const user = {
        name: username.value,
        email: email.value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    const jsonData = JSON.stringify(user);
    localStorage.setItem("message", jsonData);
    alert("Gửi thành công!\n" + jsonData);
    form.reset();
});