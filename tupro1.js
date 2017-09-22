console.time('Running Time');

let randomOneNumber = (max, min) => Math.random() * (max-min) + min

let hitungCost = (x1, x2) => (
    ( 4 - (2.1 * Math.pow(x1, 2)) + (Math.pow(x1, 4)/3) )
    * Math.pow(x1, 2) + x1*x2 + (-4 + (4 * Math.pow(x2, 2))) * Math.pow(x2, 2)
  )

let randomNeighbor = (max, min) => (Math.random() * (max - min )) + min

let acceptanceProbability = (cost, newcost, t) => Math.exp((cost - newcost)/t)

let x1 = randomOneNumber(10, -10)
let x2 = randomOneNumber(10, -10)

let newx1, newx2, newcost

let cost = hitungCost(x1, x2)
let TempMax = 1.0
let TempMin = 0.000001
let alpha = 0.99
let loopCount = 1000 //makin besar iterasi makin optimal pencarian nilai minimumnya
while (TempMax > TempMin) {
  let i = 1
  while (i <= loopCount) {
    newx1 = x1 + randomNeighbor(10, -10)
    newx2 = x2 + randomNeighbor(10, -10)
    newcost = hitungCost(newx1, newx2)
    let ap = acceptanceProbability(cost, newcost, TempMax)
    if (ap > Math.random()) {
      x1 = newx1
      x2 = newx2
      cost = newcost
    }
    i++
  }
  TempMax = TempMax * alpha
}
console.timeEnd('Running Time')

// cost = -2
let akurasi = () => {
  let FR = -1.03163
  // let FR = -0.99
  return (1 - ((cost - FR)/FR))* 100
}

console.log(JSON.stringify({
  cekHitunCost : hitungCost(2,2),
  x1, x2,
  newx1, newx2,
  newcost,
  cost,
  akurasi: akurasi(),
}, null, 2))
