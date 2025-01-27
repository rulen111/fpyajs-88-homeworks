import { HERO_TYPE, Character } from "./Character";

export class Swordsman extends Character {
    constructor(name) {
        super(name, HERO_TYPE.SWORDSMAN);
        this.attack = 40;
        this.defense = 10;
    }
}
  