const notes = document.querySelector('.notes')
const week = document.querySelector('.week')
const weekday = document.querySelector(".weekday")

week.addEventListener("input", event => {
    const day = week.value + weekday.value
    notes.value = localStorage.getItem(day)
})

weekday.addEventListener("input", event => {
    const day = week.value + weekday.value
    notes.value = localStorage.getItem(day)
})

notes.addEventListener("keyup", event => {
    const day = week.value + weekday.value
    localStorage.setItem(day, notes.value)
})
