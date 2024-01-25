let yearE1 = document.getElementById("year")
let monthE1 = document.getElementById("month")
let dateE1 = document.getElementById("date")
let btnE1 = document.getElementById("btnId")
let paraE1 = document.getElementById("paraId")

btnE1.onclick = function() {
    let yearE1Value = yearE1.value
    let monthValue = monthE1.value
    let dateValue = dateE1.value
    if ((yearE1Value === '' || monthValue === "" || dateValue === "")) {
        alert("Please enter Value")
        return
    }
    let currentData = new Date()
    let currentYear = currentData.getFullYear()
    let currentMonth = currentData.getMonth() + 1
    let currentDatee = currentData.getDate()
    if (yearE1Value > currentYear) {
        alert("Invalid Year")
        return
    }
    console.log(currentYear, currentMonth, currentDatee)
    console.log(yearE1Value, monthValue, dateValue)
    let subYear = parseInt(currentYear) - parseInt(yearE1Value)
    let subMonth = parseInt(currentMonth) - parseInt(monthValue)
    let sunDate = parseInt(currentDatee) - parseInt(dateValue)
    console.log(subYear, subMonth, sunDate)
    paraE1.textContent = `${subYear} Years ${subMonth} months ${sunDate} days`
}