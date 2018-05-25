export const ten = (input) => {
  if (!input) return;
  return Math.ceil(parseInt(input) / 10000) + "万"
}
