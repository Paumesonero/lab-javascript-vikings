// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  }
  receiveDamage(damageReceived) {
    this.health = this.health - damageReceived
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name


  }
  receiveDamage(damageReceived) {
    this.health = this.health - damageReceived
    if (this.health > 0) {
      return `${this.name} has received ${damageReceived} points of damage`
    }
    else if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damageReceived) {
    this.health = this.health - damageReceived
    if (this.health > 0) {
      return `A Saxon has received ${damageReceived} points of damage`
    }
    else if (this.health <= 0) {
      return 'A Saxon has died in combat'
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikinObj) {
    this.vikingArmy.push(vikinObj)

  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj)

  }


  vikingAttack() {
    const saxonTargetIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[saxonTargetIndex];
    const vikingTargetIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[vikingTargetIndex];
    let damageToSaxon = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(saxonTargetIndex, 1)
    }

    return damageToSaxon;
  }
  saxonAttack() {
    const saxonTargetIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const randomSaxon = this.saxonArmy[saxonTargetIndex];
    const vikingTargetIndex = Math.floor(Math.random() * this.vikingArmy.length)
    const randomViking = this.vikingArmy[vikingTargetIndex];
    let damageToViking = randomViking.receiveDamage(randomSaxon.strength)

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(vikingTargetIndex, 1)
    }

    return damageToViking;

  }

  randomAttack() {
    Math.round(Math.random())
    if (this.randomAttack === 0) {
      const saxonTargetIndex = Math.floor(Math.random() * this.saxonArmy.length)
      const randomSaxon = this.saxonArmy[saxonTargetIndex];
      const vikingTargetIndex = Math.floor(Math.random() * this.vikingArmy.length)
      const randomViking = this.vikingArmy[vikingTargetIndex];
      let damageToSaxon = randomSaxon.receiveDamage(randomViking.strength)

      if (this.randomSaxon.health <= 0) {
        this.saxonArmy.splice(saxonTargetIndex, 1)
      }

      return damageToSaxon;
    }
    else if (this.randomAttack === 1) {
      const saxonTargetIndex = Math.floor(Math.random() * this.saxonArmy.length)
      const randomSaxon = this.saxonArmy[saxonTargetIndex];
      const vikingTargetIndex = Math.floor(Math.random() * this.vikingArmy.length)
      const randomViking = this.vikingArmy[vikingTargetIndex];
      let damageToViking = randomViking.receiveDamage(randomSaxon.strength)

      if (this.randomViking.health <= 0) {
        this.vikingArmy.splice(vikingTargetIndex, 1)
      }

      return damageToViking;
    }

  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    }
    else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...'
    }
    return 'Vikings and Saxons are still in the thick of battle.'
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
