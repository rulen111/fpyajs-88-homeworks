import { HERO_TYPE, Character } from "./Character";

export class Zombie extends Character {
    constructor(name) {
        super(name, HERO_TYPE.ZOMBIE);
        this.attack = 40;
        this.defense = 10;
    }
}
  