let randomOneNumber = (max, min) => {
  return Math.random() * (max-min) + min
}

let hitungCost = (x1, x2) => {
  return (
    ( 4 - (2.1 * Math.pow(x1, 2)) + (Math.pow(x1, 4)/3) ) * Math.pow(x1, 2) + x1*x2 + (-4 + (4 * Math.pow(x2, 2))) * Math.pow(x2, 2)
  )
}

let randomNeighbor = (max, min) => {
  return (Math.random() * (max - min )) + min
}

let acceptanceProbability = (oldcost, newcost, t) => {
  return Math.exp((oldcost - newcost)/t)
}

let initx1 = randomOneNumber(10, -10)
let initx2 = randomOneNumber(10, -10)
let x1 = randomOneNumber(10, -10)
let x2 = randomOneNumber(10, -10)

let newx1, newx2, newcost

let oldcost = hitungCost(x1, x2)
let TempMax = 1.0
let TempMin = 0.0000001
let alpha = 0.8
let loopCount = 100
while (TempMax > TempMin) {
  let i = 1
  while (i <= loopCount) {
    newx1 = x1 + randomNeighbor(1, -1)
    newx2 = x2 + randomNeighbor(1, -1)
    newcost = hitungCost(newx1, newx2)
    let ap = acceptanceProbability(oldcost, newcost, TempMax)
    if (ap > Math.random()) {
      x1 = newx1
      x2 = newx2
      oldcost = newcost
    }
    i++
  }
  TempMax = TempMax * alpha
}

let akurasi = () => {
  let FR = -1.03163
  // let FR = 1.5
  return (1 - ((oldcost - FR)/FR))* 100
}

console.log(JSON.stringify({
  hitungcost : hitungCost(2,2),
  initx1, initx2,
  x1, x2,
  newx1, newx2,
  oldcost,
  newcost,
  akurasi: akurasi(),
}, null, 2))
