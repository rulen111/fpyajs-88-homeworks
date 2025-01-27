import { HERO_TYPE, Character } from "./Character";

export class Bowman extends Character {
    constructor(name) {
        super(name, HERO_TYPE.BOWMAN);
        this.attack = 25;
        this.defense = 25;
    }
}
