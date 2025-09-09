//Challenge 3
function calculateMonthlyPAYE(grossSalary){
    const taxableIncome = grossSalary
    const taxBands = [
        {limit:24000, rate:10/100},
        {limit:8333, rate:25/100},
        {limit:467667, rate:30/100},
        {limit:300000, rate:32.5/100},
        {limit:Infinity, rate:35/100}
//tax bands provided with there limits
    ];

    let totalTax =0;
    let remainingTaxable = taxableIncome;

    for (const band of taxBands)
//loop through each band
        {
        if (remainingTaxable <=0) break ;
//breaks if taxable income is less than or equal to zero because all taxable income has been processed
//otherwise it calculates teh applicable amount for that band limit by taking the minimum of the remaining taxable

        const applicableAmount = Math.min(remainingTaxable, band.limit);
        totalTax = totalTax + applicableAmount * band.rate
//calculated for the next band
        remainingTaxable = remainingTaxable - applicableAmount
//remaining taxable income is now reduced for the next band
    }
    const fringeBenefitTax = grossSalary * 8/100;

   const totalRelief = fringeBenefitTax;
//fringe benefit tax is payed by the employer on a loan of the employee

   const PAYE = Math.max(0, totalTax- totalRelief)
//math.max is use to return the greater value
  return PAYE;

}



function calculateNetSalary(basicSalary, benefits){
    const grossSalary = basicSalary + benefits;
//calculate gross salary
    
    const NHIFDeductions = grossSalary * 2.75/100;

    const NSSFDeductions = basicSalary * 6/100;

    const houseLevy = grossSalary * 1.5/100;

    const totalDeductions = NHIFDeductions + NSSFDeductions + houseLevy + NSSFDeductions + PAYE
//individual deductions are added
    const NetSalary = grossSalary - totalDeductions
    
    const PAYE = calculateMonthlyPAYE(grossSalary);
    return PAYE

}

let grossSalary = 400000
const PAYE = calculateMonthlyPAYE(grossSalary)
console.log(PAYE)
