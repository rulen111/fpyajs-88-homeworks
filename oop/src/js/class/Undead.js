import { HERO_TYPE, Character } from "./Character";

export class Undead extends Character {
    constructor(name) {
        super(name, HERO_TYPE.UNDEAD);
        this.attack = 25;
        this.defense = 25;
    }
}
