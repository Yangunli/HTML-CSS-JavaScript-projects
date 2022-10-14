const calenderContainer= document.querySelector(".calender-container")
const monthNameEl = document.getElementById("month-name")
const dayNameEl = document.getElementById("day-name")
const dayhNumberEl = document.getElementById("day-number")
const yearEl = document.getElementById("year")

const date = new Date()
// const month = date.getMonth()
monthNameEl.innerText =date.toLocaleString("zh", {
    month:"long"
})
dayNameEl.innerText=date.toLocaleString("zh",{weekday:"long"}
)

dayhNumberEl.innerText=date.getDate()
yearEl.innerText=date.getFullYear()



