// const myAge = 7
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'

// console.log(message)

const myAge = 15
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}
const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

//______

const team = ['Tyler', 'Porter']
team.length <= 4 ? console.log(`Team size: ${team.length}`) : console.log(`Too many people on your team`)
