export function passwordValidator(password) {
  if (!password) return "Mật khẩu không được để trống!"
  if (password.length < 5) return 'Mật khẩu phải dài hơn 5 ký tự!'
  return ''
}
