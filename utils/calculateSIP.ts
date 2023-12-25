export default function calculateSIP(
  monthlyInvestment: number,
  returnRate: number,
  duration: number
) {
  const P = monthlyInvestment;
  const Y = duration;
  const R = returnRate;
  const n = Y * 12;
  const i = R / 100 / 12;

  let M = (P * ((1 + i) ** n - 1) * (1 + i)) / i;

  M = Math.ceil(M);

  const totalInvestment = P * n;
  const totalReturns = M - totalInvestment;
  const totalValue = M;

  return {
    totalInvestment,
    totalReturns,
    totalValue,
  };
}
