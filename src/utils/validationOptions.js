export const validateInput = (field, value, required) => {
  const errors = [];

  if (required && !value.trim()) {
    errors.push("Заполните поле");
  }

  switch (field) {
    case "login":
      if (value.length < 3) {
        errors.push("Минимум 5 символов");
      }
      if (value.length > 20) {
        errors.push("Максимум 20 символов");
      }
      if (/[^A-Za-z0-9]/.test(value)) {
        errors.push("Только латинские буквы и цифры");
      }
      break;
    case "password":
      if (value.length < 6) {
        errors.push("Минимум 5 символов");
      }
      if (value.length > 20) {
        errors.push("Максимум 20 символов");
      }
      if (/[0-9][!@#$%^&*][a-z][A-Z]/.test(value)) {
        errors.push("Только латинские буквы, цифры и спецсимволы");
      }
      break;
    default:
      break;
  }

  return errors;
};
