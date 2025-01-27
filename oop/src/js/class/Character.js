export const HERO_TYPE = {
    BOWMAN: 'Bowman',
    SWORDSMAN: 'Swordsman',
    MAGICIAN: 'Magician',
    DAEMON: 'Daemon',
    UNDEAD: 'Undead',
    ZOMBIE: 'Zombie',
  };

export class Character {
    constructor(name, type) {
      if ((typeof name !== 'string') || (name.length < 2 || name.length > 10)) {
        throw new TypeError("Character's name must be a string between 2 to 10 characters");
      } else {
        this.name = name;
      }
      if (!Object.values(HERO_TYPE).includes(type)) {
        throw new TypeError("Inappropriate value for Character Type");
      } else {
        this.type = type;
      }
  
      this.health = 100;
      this.level = 1;
  
      this.attack = undefined;
      this.defense = undefined;
    }
  
    levelUp() {
      if (this.health <= 0) {
        throw new Error('Can not level up a dead character');
      }
  
      this.level += 1;
      this.attack *= 1.2;
      this.defense *= 1.2;
      this.health = 100;
    }
  
    damage(points) {
      if (this.health <= 0) {
        throw new Error('Character already dead');
      }
  
     this.health -= points * (1 - this.defense / 100);
    }
  }
