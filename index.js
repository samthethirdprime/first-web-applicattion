//document.getElementById("count-el").innerText = 5

//let firstBatch = 5
//let secondBatch = 7

//let count = firstBatch + secondBatch

//console.log(count)

//let myAge = 30
//let humanDogRatio = 7

//let myDogAge = humanDogRatio * myAge
//myDogAge = 2000



//console.log(myDogAge)

//let bonusPoints = 50
//console.log(bonusPoints)

//bonusPoints = bonusPoints + 50
//console.log(bonusPoints)

//bonusPoints = bonusPoints - 75
//console.log(bonusPoints)

//bonusPoints = bonusPoints + 45


//console.log(bonusPoints)
//function countdown() {

        //console.log(5)
        //console.log(4)
        //console.log(3)
        //console.log(2)
        //console.log(1)


//}
//countdown()



//countdown()


//function log() {
    //console.log(42)
//}
//log()

let count = 0

let countEl = document.getElementById("count-el")
console.log(countEl)

function increment() {
    console.log("The button was clicked")
    count += 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save() {
    let saveSrt = count + " - "
    saveEl.textContent += saveSrt
    console.log(saveEl.textContent)
    countEl.textContent = 0
    count = 0

}

console.log(saveEl.textContent)