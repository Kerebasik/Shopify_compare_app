export const getRefactorPrice = (price: number) => {
  const refactorPrice = price.toString().split("");
  refactorPrice.splice(refactorPrice.length - 2, 0, ".");
  refactorPrice.splice(refactorPrice.length - 6, 0, ",");
  return refactorPrice.join("");
};
