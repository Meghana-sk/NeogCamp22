//Q. Given cost price and selling price, write a program to claculate profit or loss

const calculateProfitLoss = (costPrice, sellingPrice) => {
    const profitLoss = sellingPrice - costPrice;
    if (profitLoss > 0) {
        return `${profitLoss} Profit`;
    } else {
        return `${-1 * profitLoss} Loss`;
    }
}

console.log(calculateProfitLoss(5000,2000))