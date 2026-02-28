/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = days * 40;

  if (days > 6) {
    total = total - 50;

    return total;
  }

  if (days > 2) {
    total = total - 20;

    return total;
  }

  return total;
}

module.exports = calculateRentalCost;
