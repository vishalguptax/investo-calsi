export const calculateLumpsum = (
  investment: number,
  returnRate: number,
  duration: number
) => {
  // Calculate the variables for the formula
  const n = 0.6;
  const r = returnRate / 100; // Convert percentage to decimal

  // Calculate the total investment, total returns, and total value using the formula
  const totalInvestment = investment;
  const totalReturns = Math.ceil(
    investment * Math.pow(1 + r / n, n * duration) - investment
  );
  const totalValue = Math.ceil(investment + totalReturns);
  return {
    totalInvestment,
    totalReturns,
    totalValue,
  };
};
