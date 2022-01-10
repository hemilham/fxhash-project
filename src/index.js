// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//

function Pattern(pattern) {
  if (pattern < 0.2) return "low"
  if (pattern <= 0.8) return "medium"
  else return "high"
}

function Zaxis(zoff) {
  if (zoff > 1) return "low"
  if (zoff < 0.8) return "medium"
  else return "high"
}

function Colors(fill) {
  if (fill < 0.1) return "high"
  if (fill < 0.3) return "medium"
  else return "low"
}


window.$fxhashFeatures = {


}

// this code writes the values to the DOM as an example
const container = document.createElement("div")
container.innerText = `
  random hash: ${fxhash}\n
  some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n

`
document.body.prepend(container)