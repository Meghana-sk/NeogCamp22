//Q2. Write a  program to calculate simple interest
// S.I = (P * T * R) / 100
// P = Principa amount
// T = Time
// R = Rate

const simpleInterest = (principal, time, rate) => (principal * time * rate) / 100

console.log(simpleInterest(100,6,2))