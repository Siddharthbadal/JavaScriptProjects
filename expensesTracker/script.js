// import {deleteAlert} from "./alerts.js";

//  Global variables
const transcationForm = document.querySelector(".transcation--form");
let formInput = transcationForm.querySelectorAll("input");
let selectEl = transcationForm.querySelector("select");
let formButton = transcationForm.querySelectorAll("button");
let btnClose = document.querySelector(".btn-close");
let balanceEl = document.querySelector(".balance");
let incomeEl = document.querySelector(".income");
let expenseEl = document.querySelector(".expense");
let transcationList = document.querySelector(".transcation--list");
let updateModalBtn = document.querySelector(".update--transcation_modal")
let allTranscations = []

//  local storage
if(localStorage.getItem('transcations') !== null) {

    allTranscations = JSON.parse(localStorage.getItem('transcations'))
}
console.log(allTranscations);

// date format for table
const formatDate = (d) =>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday","Saturday"]

    let date = new Date(d);
    let yy = date.getFullYear();
    let mm = monthNames[date.getMonth()].substring(0,4);
    let dd = date.getDate();
    let day = dayNames[date.getDay()];
    
    let time = date.toLocaleTimeString();
    return `${day}, ${mm} ${dd} ${yy}`

}



//  Add transcation 
transcationForm.onsubmit = (e)=>{
    e.preventDefault();
    let t_obj={
        title : formInput[0].value,
        amount: formInput[1].value,
        transcation: selectEl.value ,
        date: new Date()  
    };
    allTranscations.push(t_obj)
    console.log(allTranscations);
    localStorage.setItem("transcations", JSON.stringify(allTranscations))
    swal("Success", `Transcation updated to your ${t_obj.transcation} list.`, 'success')
    btnClose.click()
    transcationForm.reset("");
    document.onsubmit(window.location.reload())
}

// delete transcation
const deleteTranscation = ()=>{
    let deleteBtn = transcationList.querySelectorAll(".btn-delete")
    deleteBtn.forEach((btn, index)=>{
        btn.onclick =()=>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            allTranscations.splice(index, 1)
            localStorage.setItem("transcations", JSON.stringify(allTranscations))
            transcationForm.onsubmit(window.location.reload())
            
            
          swal("Transcation deleted! `${allTranscations[index].title}`", {
            icon: "success",
          });
        } else{

        }
      });
  
        }
    })
}

// update Transcation
const updateTranscation = ()=>{
    const updateBtn = document.querySelectorAll(".btn-update")
    updateBtn.forEach((btn, index)=>{
        btn.onclick = ()=>{
            updateModalBtn.click()
            let title = btn.getAttribute("title")
            let amount = btn.getAttribute("amount")
            let trans = btn.getAttribute("trans")
            selectEl.value = trans;
            formInput[0].value = title;
            formInput[1].value = amount

            formButton[0].classList.add("d-none")
            formButton[1].classList.remove("d-none")
            formButton[1].onclick = ()=>{
                let t_obj={
                    title : formInput[0].value,
                    amount: formInput[1].value,
                    transcation: selectEl.value ,
                    date: new Date()  
                };
                allTranscations[index]=t_obj
                // console.log(allTranscations);
                localStorage.setItem("transcations", JSON.stringify(allTranscations))
                swal("Success", `Transcation updated to your ${t_obj.transcation} list.`, 'success')
                btnClose.click()
                transcationForm.reset("");
                document.onsubmit(window.location.reload())
            }
        }   
    })
}



// show transcations 
const showTranscations = ()=>{
    allTranscations.forEach((item, index)=>{
        transcationList.innerHTML +=`
        <tr>
            <td class="text-nowrap">${item.title[0].toUpperCase()+item.title.substring(1)}</td>
            <td class="text-nowrap">${item.amount}</td>
            <td class="text-nowrap">${item.transcation[0].toUpperCase()+ item.transcation.substring(1)}</td>
            <td class="text-nowrap">${formatDate(item.date)}</td>
            <td class="text-nowrap">
                <button title="${item.title}" amount="${item.amount}" trans="${item.transcation}" 
                class="btn text-success btn-update">
                    <i class="fa fa-pen"></i>
                </button>
                <button class="btn text-info">
                    <i class="fa fa-trash btn-delete"></i>
                </button>
            </td>
        </tr>
        `
        
    })
}
showTranscations();

//  calculate transcations
const calculateTranscations = ()=>{
    let totalIncome = 0;
    let totalExpense = 0;

    let filterIncomes = allTranscations.filter((item)=>item.transcation == 'income')
    for(let incObj of filterIncomes){
        totalIncome += Number(incObj.amount)
    }
    console.log(filterIncomes)
    console.log(totalIncome)

    let filterExpenses = allTranscations.filter((item)=>item.transcation !== 'income')
    for(let expObj of filterExpenses){
        totalExpense += Number(expObj.amount)
    }
    console.log(filterExpenses);
    console.log(totalExpense);

    incomeEl.innerText = `$${totalIncome}`
    expenseEl.innerText = `$${totalExpense}`

    Number(totalIncome - totalExpense) < 0 ? balanceEl.style.color='red':balanceEl.style.color='green'
    balanceEl.innerText = `$${Number(totalIncome - totalExpense)}`

    deleteTranscation()
    updateTranscation()
    
}

calculateTranscations();


