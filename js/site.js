//========Mortgage Calculator Takes in Three Parameters/Inputs====================

//The amount of money loaned in dollars(Balance)
function loanAmount(){
    return document.getElementById("loanAmount").value
}

//The time over which the loan will be repaid, in months (term)
function termLength(){
    return document.getElementById("termLength").value
}

//The percentage rate at which interest will accrue on loan (rate)
function interestRate(){
   return document.getElementById("interestRate").value
}

//=================================The Outputs====================================


//1) The month (1 corresponding to the 1st month of payment, through the total number of months)
function totalMonthlyPayment(numOfMonths, rate, amountLoaned){
    return (amountLoaned) * (rate/1200) / (1 - (1 + rate/1200)(-numOfMonths) );
}

//3) The principal paid this month
function principal(totalMonthlyPayment, interestPayment){
    return totalMonthlyPayment - interestPayment;
}

//4) The interest paid this month
function paidInterest(){
    
}

//5) The total interest paid to date
function interestTotal(){

}

//6) The remaining loan balance at the end of the month
function loanBalance(){
//At end each month, Remaining Balance = Previous Remaining Balance - principal payments


}

//custom display function
function displayData(fbArray) {

    let x = principal(5, 4, 2)

    //loop over the array and create a tablerow for each item - add all rows into table
    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        //grab only the columns in the template
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
       
        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];
       
        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];
       
        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];
       
        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4];
        
 
        tableBody.appendChild(tableRow);
    }
}