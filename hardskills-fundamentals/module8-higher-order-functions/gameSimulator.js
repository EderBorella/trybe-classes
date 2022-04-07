const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => Math.ceil((Math.random() * (dragon.strength - 15)) + 15);
const warriorDmg = () => Math.ceil(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
const mageDmg = () => {
  if(mage.mana < 15){
     return 'Não possui mana suficiente'
    }
  mage.mana - 15;
  return Math.ceil(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
}

const warriorTurn = (dano) => { return warrior.damage = dano(), dragon.healthPoints -= warrior.damage};
const mageTurn = (dano) => { return mage.damage = dano(), dragon.healthPoints -= mage.damage, mage.mana -= 15};
const dragonTurn = (dano) => {return dragon.damage = dano(), mage.healthPoints -= dragon.damage, warrior.healthPoints -= dragon.damage}

const gameActions = {
  turn1: warriorTurn(warriorDmg),
  turn2: mageTurn(mageDmg),
  turn3: dragonTurn(dragonDmg),
  final: () => {return battleMembers},
}

  console.log(gameActions.final())