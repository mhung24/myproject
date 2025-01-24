const { DataUsers } = require("../../model");

const validatePassword = (password) => {
  const minLength = 8;
  const uppercasePattern = /[A-Z]/; // Kiểm tra ký tự viết hoa
  const numberPattern = /[0-9]/; // Kiểm tra số
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/; // Kiểm tra ký tự đặc biệt

  if (password.length < minLength) {
    return { valid: false, message: "Mật khẩu phải có ít nhất 8 ký tự." };
  }
  if (!uppercasePattern.test(password)) {
    return {
      valid: false,
      message: "Mật khẩu phải có ít nhất 1 ký tự viết hoa.",
    };
  }
  if (!numberPattern.test(password)) {
    return { valid: false, message: "Mật khẩu phải có ít nhất 1 số." };
  }
  if (!specialCharPattern.test(password)) {
    return {
      valid: false,
      message: "Mật khẩu phải có ít nhất 1 ký tự đặc biệt.",
    };
  }

  return { valid: true, message: "Mật khẩu hợp lệ." };
};

//

module.exports = {
  validatePassword,
};
