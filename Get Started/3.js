"use strict";

/*
Define a slot machine with three reels that can individuallyspin(), and thendisplay()the current contents of all thereels.Thebasicbehaviorofasinglereelisdefinedinthereelobjectbelow. But the slot machine needs individual reelsâ€”objectsthat delegate toreel, and which each have apositionproperty.
*/

function randMax(max) {
  return Math.trunc(1E9*Math.random()) % max;
}

const reel={
  symbols:["X","Y","Z","W","$","*","<","@"],
  ensurePosition() {
    if(this.position==null) {
      this.position=randMax(this.symbols.length-1);
    }
  },
  spin() {
    this.ensurePosition()
    this.position=(this.position+100+randMax(100))%this.symbols.length;
  },
  getUpperSybmol() {
    this.ensurePosition()
    if (this.position === 0) {
      return this.symbols[this.symbols.length - 1];
    }
    return this.symbols[this.position - 1]
  },
  getCurrentSymbol() {
    this.ensurePosition()
    return this.symbols[this.position]
  },
  getLowerSybmol() {
    this.ensurePosition()
    if (this.position === this.symbols.length + 1) {
      return this.symbols[0];
    }
    return this.symbols[this.position + 1]
  }
};

const slotMachine={
  reels: Array.from({ length: 3 }).map(() => Object.create(reel)),
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    let res = ""
    res += this.reels.map(r => r.getUpperSybmol()).join(" | ") + "\n"
    res += this.reels.map(r => r.getCurrentSymbol()).join(" | ") + "\n"
    res += this.reels.map(r => r.getLowerSybmol()).join(" | ") + "\n"
    return res
  }
};

slotMachine.spin();
console.log(slotMachine.display());
// < | @ | *
// @ | X | <
// X | Y | @
slotMachine.spin();
console.log(slotMachine.display());
// Z | X | W
// W | Y | $
// $ | Z | *
