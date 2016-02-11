"use strict";

let counter = document.querySelector("#counter");

console.log('counter', counter.innerHTML);

let params = {
  startFrom:     0,
  endIn:         12568,
  symbolsPerTic: 213,
  counterEl:     counter,
  tic:           20
}

startCounter(params);

function startCounter(params) {
  let diff = params.endIn - params.startFrom;
  let currentCounterValue = params.startFrom;
  let timer = window.setInterval(() => {
    currentCounterValue = currentCounterValue + params.symbolsPerTic <= params.endIn ? currentCounterValue + params.symbolsPerTic : params.endIn;
    params.counterEl.innerHTML = currentCounterValue;
    if(currentCounterValue === params.endIn) {
      clearInterval(timer);
    }
  }, params.tic);
}
