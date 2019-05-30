// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = (score, totalScore) => {
  // dealing with errors //
  if(typeof score !== 'number' || typeof totalScore == 'number') {
    throw Error('Please provide numbers only')
  } 
  // dealing with errors //
    const percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}


// dealing with errors //
try {
  const result = gradeCalc('test', 20)
  console.log(result)
} catch (e) {
  console.log(e.message)
}
// dealing with errors //