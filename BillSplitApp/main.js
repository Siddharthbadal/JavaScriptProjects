const billAmountInput = document.querySelector("#bill-amount")
const numberOfPeopleInput = document.querySelector(".number-of-people")
const customTipInput = document.querySelector(".custom-tip-input")

const eachPersonBillOutput= document.querySelector(".each-person-bill span")
const totalAmountOutput = document.querySelector(".total-amount span")
const tipAmountOutput= document.querySelector(".tip-amount span")

const generateBillBtn= document.querySelector(".generate-bill-btn")
const resetBtn= document.querySelector(".reset-btn")
const tipContainer = document.querySelector(".tip-container")

let tipPercentage=0;

// Validating input
function numberOfPeopleInputValidator(){
    if (numberOfPeopleInput.value && tipPercentage){
        generateBillBtn.disabled=false;
    }else{
        generateBillBtn.disabled=true;
    }
}

// tip buttons styles
tipContainer.addEventListener("click", (e)=>{
    if (tipContainer.classList.contains('disabled')) return
    if (e.target !== tipContainer){
        [...tipContainer.children].forEach((tip) => tip.classList.remove("selected"))
        e.target.classList.add("selected")
        tipPercentage= parseInt(e.target.innerText)
        console.log(tipPercentage)
        customTipInput.value="";
        numberOfPeopleInputValidator()       
        
    }

})

// custome tip input selection
customTipInput.addEventListener("input", ()=>{
    tipPercentage = parseInt(customTipInput.value);
    console.log(tipPercentage);
    [...tipContainer.children].forEach((tip) => tip.classList.remove("selected"));
    
    numberOfPeopleInputValidator()
})

function billAmountInputValidator(check){
    customTipInput.disabled= check
    numberOfPeopleInput.disabled=check;
    
}

// main function to generate the bill
generateBillBtn.addEventListener("click", ()=>{
       
    const billAmount = parseInt(billAmountInput.value)
    const numberOfPeople = parseInt(numberOfPeopleInput.value)
    
    // const customTipOutput = parseInt(customTipInput.value)
    const tipAmount = billAmount * (tipPercentage / 100)
    const totalBillAmount = Math.round(billAmount + tipAmount, 2)
    const eachPersonBill = Math.round(totalBillAmount / numberOfPeople, 2)


    totalAmountOutput.innerText= `₹${totalBillAmount}`
    eachPersonBillOutput.innerText = `₹${eachPersonBill}`
    tipAmountOutput.innerText = `₹${tipAmount}`

    console.log("bill generated")
    console.log("Amount: ", totalBillAmount)
    console.log("People", numberOfPeople)   
    
    resetBtn.disabled=false;
})


//  reset button setup
resetBtn.addEventListener("click", ()=>{
    tipPercentage=0;
     billAmountInput.value="";
     numberOfPeopleInput.value="";
     customTipInput.value="";

     tipAmountOutput.innerText="";
     eachPersonBillOutput.innerText="";
     totalAmountOutput.innerText="";

     [...tipContainer.children].forEach((tip) => tip.classList.remove("selected"))
     generateBillBtn.disabled=true;
     resetBtn.disabled=true;

})


// enabling ad disbaling inputs on the go
billAmountInput.addEventListener("input", ()=>{
    if(billAmountInput.value){
        tipContainer.classList.remove('disabled')
        billAmountInputValidator(false)
        
    }else{
        tipContainer.classList.add('disabled')
        billAmountInputValidator(true)
    }
})


numberOfPeopleInput.addEventListener("input", ()=>{
    numberOfPeopleInputValidator()
    
})