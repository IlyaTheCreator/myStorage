let events = []

let filter = {
    event: '',
    date: ''
}

let div = document.querySelector('#container')

const addEvent = function (array, filter) {
    array.push({ event: filter.event, date: filter.date })
    div.innerHTML = " "
    array.forEach(function (item) {
        const eventTitle = document.createElement('h3')
        const eventDate = document.createElement('p')
        eventTitle.textContent = item.event
        eventDate.textContent = item.date
        div.appendChild(eventTitle)
        div.appendChild(eventDate)
    })
}

addEvent(events, filter)

const removeAll = function (array, filter) {
    div.innerHTML = " "
    array = array.forEach(function (item) {
        item.event = ''
        item.date = ''
    })
    filter = []
}

document.querySelector('#getWhole').addEventListener('submit', function (e) {
    e.preventDefault()
    filter.event = e.target.elements.getEvent.value
    filter.date = e.target.elements.getDate.value
    addEvent(events, filter)
})

document.querySelector('#deleteAll').addEventListener('click', function () {
    removeAll(events, filter)
})
