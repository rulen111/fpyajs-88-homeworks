import { HERO_TYPE, Character } from "./Character";

export class Daemon extends Character {
    constructor(name) {
        super(name, HERO_TYPE.DAEMON);
        this.attack = 10;
        this.defense = 40;
    }
}
  