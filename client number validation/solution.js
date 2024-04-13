export function validateClientNumber(clientNumber) {
  const containsOnlyDigits = /^\d+$/.test(clientNumber);
  if (!containsOnlyDigits) return false;

  const hasExactlyTenDigits = clientNumber.toString().length === 10;
  if (!hasExactlyTenDigits) return false;

  const parityBitCheckSumIsEven =
    parseInt(clientNumber).toString(2).replaceAll("0", "").length % 2 === 0;
  if (!parityBitCheckSumIsEven) return false;

  return true;
}
