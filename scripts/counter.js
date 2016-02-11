"use strict";

let counter = document.querySelector("#counter");

//examble of timer params object
let params = {
  startsFrom:      3000, //timer starting position
  endsIn:          12251, //timer end position
  symbolsPerTick: 513, //number of symbols added per one tick
  counterEl:      counter, //counter element node
  tick:           45, //length of the timer tick
  mode:           "N" //type of counter animation
}

startCounter(params);

//call this function to start timer
function startCounter(params) {
  let currentCounterValue = params.startsFrom;
  let numOfTicks  = (params.endsIn - params.startsFrom) / params.symbolsPerTick;
  let tickCounter = 0;
  let timer = window.setInterval(() => {
    // let innerTimerTickInterval = params.tick;
    // switch(tickCounter) {
    //   case tickCounter < numOfTicks / 3:
    //     innerTimerTickInterval
    // }
    // let innerTimer window.setInterval(() => {
    //
    // }, innerTimerTickInterval)
    currentCounterValue = currentCounterValue + params.symbolsPerTick <= params.endsIn ? currentCounterValue + params.symbolsPerTick : params.endsIn;
    params.counterEl.innerHTML = currentCounterValue;
    if(currentCounterValue === params.endsIn) {
      clearInterval(timer);
    }
    tickCounter++;
  }, params.tick);
}
/*
  TYPES OF COUNTER ANIMATIONS
  ___________________________

  N - Normal
  SFS - Slow-Fast-Slow
  FFS - Fast-Fast-Slow
  SFFF - Slow-Fast-Faster
*/
