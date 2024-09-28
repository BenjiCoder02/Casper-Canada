export const capitalize = (string) => {
  if (!string) return '';

  const firstChar = string.charAt(0).toUpperCase();
  const remaineder = string.slice(1);

  return firstChar + remaineder;
}
