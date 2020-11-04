export const CalculatecubicWeight = (size) => {
  const multipy = (size.length * size.width * size.height) / 1000000;
  const cubicWeight = multipy * 250;
  return cubicWeight;
};

export const CalculateAverageCubicWeight = (arr) => {
  return arr.reduce((a, b) => a + b) / arr.length;
};
