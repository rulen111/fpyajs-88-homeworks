import { HERO_TYPE, Character } from "./Character";

export class Magician extends Character {
    constructor(name) {
        super(name, HERO_TYPE.MAGICIAN);
        this.attack = 10;
        this.defense = 40;
    }
}
