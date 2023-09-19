
let balance = document.getElementById("balance")
let details = document.getElementById("details")
let amount = document.getElementById("amount")
let income = document.getElementById("income")
let expense = document.getElementById("expense")
let addTransBtn = document.getElementById("add-transaction")
let transForm = document.getElementById("transaction-form")
let homeBtn = document.getElementById("home")
let transactionHistory = document.getElementById("history-data")
let transactionHistoryArr = []

balance.textContent = `Rp ${parseInt(localStorage.getItem("income")) + parseInt(localStorage.getItem("expense"))}`
expense.textContent = `Rp${localStorage.getItem("expense")}`
income.textContent = `Rp${localStorage.getItem("income")}`

if(JSON.parse(localStorage.getItem("transaction-history")) != null) {
    transactionHistoryArr = JSON.parse(localStorage.getItem("transaction-history"))
    transactionHistoryArr.forEach((data) => {
        creatingHistoryData(data.details, data.amount, data.color)
    })
}

homeBtn.addEventListener("click", (e) => {
    localStorage.setItem("expense", 0)
    localStorage.setItem("income", 0)
    localStorage.setItem("balance", 0)
    localStorage.setItem("transaction-history", JSON.stringify([]))
})


transForm.addEventListener("submit",(e) => {
    e.preventDefault()

    let amountVal = parseInt(amount.value)
    let colorIndicator = ""
    let newVal = 0

    if(amountVal.toString().includes("-")) {
        colorIndicator = "border-r-red-500"
        newVal = parseInt(localStorage.getItem("expense")) + amountVal
        localStorage.setItem("expense", newVal)
        expense.textContent = `Rp${newVal}`
    }else{
        colorIndicator = "border-r-green-500"
        newVal = parseInt(localStorage.getItem("income")) + amountVal
        localStorage.setItem("income", newVal)
        income.textContent = `Rp${newVal}`
        amountVal = `+${amountVal}`
    }

    calculateNewBalance()

    // Creating Element
    creatingHistoryData(details.value, amountVal, colorIndicator)
    
    transactionHistoryArr.push({
        details: details.value,
        amount: amountVal,
        color: colorIndicator
    })
    localStorage.setItem("transaction-history", JSON.stringify(transactionHistoryArr))
    details.value = ""
    amount.value = ""
})


function creatingHistoryData(details, amount, colorIndicator) {
    let div1 = document.createElement("div")
    div1.id = `data-${transactionHistoryArr.length + 1}`
    div1.classList.add("p-2",colorIndicator,"border-r-4", "hover:bg-red-200", "transition-colors")
    div1.addEventListener("click", (e) => {
        e.preventDefault()

        if(!confirm("Are you sure to delete this data?")) return
        
        let currVal = e.currentTarget.firstChild.childNodes[1].textContent
        if(currVal.toString().includes("-")) {
            let newVal = parseInt(localStorage.getItem("expense")) - currVal
            localStorage.setItem("expense", newVal)
            expense.textContent = `Rp${newVal}`
        }else{
            let newVal = parseInt(localStorage.getItem("income")) - currVal
            localStorage.setItem("income", newVal)
            income.textContent = `Rp${newVal}`
        }

        calculateNewBalance()
        transactionHistory.removeChild(e.currentTarget)
        transactionHistoryArr = transactionHistoryArr.filter((data) => {
            return data.details != e.currentTarget.firstChild.childNodes[0].textContent
        })
        localStorage.setItem("transaction-history", JSON.stringify(transactionHistoryArr))
    })

    let div2 = document.createElement("div")
    div2.classList.add("flex","justify-between","text-sm")

    let p2_1 = document.createElement("p")
    p2_1.textContent = details
    let p2_2 = document.createElement("p")
    p2_2.textContent = amount

    div2.appendChild(p2_1)
    div2.appendChild(p2_2)

    div1.appendChild(div2)
    
    transactionHistory.appendChild(div1)
}

function calculateNewBalance() {
    let newBal = parseInt(localStorage.getItem("income")) + parseInt(localStorage.getItem("expense"))
    localStorage.setItem("balance", newBal)
    balance.textContent =`Rp${newBal}`
}