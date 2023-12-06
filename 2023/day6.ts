'========================================================'
'=======================INPUTS==========================='
'========================================================'
const inputProper: string = 
`Time:        42     68     69     85
Distance:   284   1005   1122   1341`

const inputOneExample: string =
`Time:      7  15   30
Distance:  9  40  200`

const inputTwoExample: string = 
`Time:      71530
Distance:  940200`

'========================================================'
'======================PART ONE=========================='
'========================================================'

const input1: string[][] = inputProper.split("\n").map(elem => elem.split(/\s+/g))

const races1: number[][] = []
for (let i = 1; i < input1[0].length; i++) {
  const time: number = parseInt(input1[0][i])
  const distance: number = parseInt(input1[1][i])
  const item = [time, distance]
  races1.push(item)
}

const raceCanBeWon = (distance: number, record: number) : boolean => {
  return distance > record
}

const possibilities: number[] = []
races1.forEach(race => {
  let amountOfPossibilities: number = 0
  const time: number = race[0]
  const record: number = race[1]
  for (let chargeTime = 0; chargeTime<=time; chargeTime++) {
    const distance = (time - chargeTime) * chargeTime
    if (raceCanBeWon(distance, record)) amountOfPossibilities++
  }
  possibilities.push(amountOfPossibilities)
})

const result1 = possibilities.reduce((acc, val) => acc * val, 1)

console.log(result1)

'========================================================'
'======================PART TWO=========================='
'========================================================'

const input2: number[] = inputProper.split("\n").map(elem => parseInt(elem.replace(/\s+|\D+/g, "")))

const time: number = input2[0]
const record: number = input2[1]
let result2: number = 0

for (let chargeTime = 0; chargeTime<=time; chargeTime++) {
  const distance = (time - chargeTime) * chargeTime
  if (raceCanBeWon(distance, record)) result2++
}

console.log(result2)

'========================================================'

//just to shut up TS about "Cannot redeclare block-scoped variable" 
export {}