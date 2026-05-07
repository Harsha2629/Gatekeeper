export function calculateRisk(data) {
  let score = 0;
  let reasons = [];

  if (!data.dns) {
    score += 30;
    reasons.push("dns_fail");
  }

  if (data.redirects > 3) {
    score += 25;
    reasons.push("redirect_chain");
  }

  // NOTE: full scoring logic not included in public version

  return {
    score,
    reasons
  };
}
