// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return `${this.strength}`
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
      return ` A Saxon has received ${damageReceived} points of damage`
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
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    let randomDamage = this.randomSaxon.receiveDamage(this.randomViking.strength)
    if (this.randomSaxon.health < 0) {
      this.saxonArmy.splice(randomSaxon.indexOf(randomSaxon), 1)
    }
    return randomDamage
  }
  saxonAttack() {
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    let randomDamage = this.randomViking.receiveDamage(this.randomSaxon.strength)
    if (this.randomViking.health < 0) {
      this.saxonArmy.splice(randomSaxon.indexOf(randomSaxon), 1)
    }
    return randomDamage
  }

  randomAttack() {
    Math.round(Math.random())
    if (this.randomAttack === 0) {
      let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
      let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
      let randomDamage = this.randomSaxon.receiveDamage(this.randomViking.strength)
      if (this.randomSaxon.health < 0) {
        this.saxonArmy.splice(randomSaxon.indexOf(randomSaxon), 1)
      }
      return randomDamage
    }
    else if (this.randomAttack === 1) {
      let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
      let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
      let randomDamage = this.randomViking.receiveDamage(this.randomSaxon.strength)
      if (this.randomViking.health < 0) {
        this.saxonArmy.splice(randomSaxon.indexOf(randomSaxon), 1)
      }
      return randomDamage
    }

  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century'
    }
    else if (this.vikingArmy.length === 0) {
      return 'Saxons have won the war of the century'
    }
    return 'Vikings and Saxons are still in the trick of battle'
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
