export const HERO_TYPE = {
  BOWMAN: 'Bowman',
  SWORDSMAN: 'Swordsman',
  MAGICIAN: 'Magician',
  DAEMON: 'Daemon',
  UNDEAD: 'Undead',
  ZOMBIE: 'Zombie',
};

function heroTypeStats(type) {
  switch(type) {
    case HERO_TYPE.BOWMAN:
      return {attack: 25, defense: 25};
    case HERO_TYPE.SWORDSMAN:
      return {attack: 40, defense: 10};
    case HERO_TYPE.MAGICIAN:
      return {attack: 10, defense: 40};
    case HERO_TYPE.DAEMON:
      return {attack: 10, defense: 40};
    case HERO_TYPE.UNDEAD:
      return {attack: 25, defense: 25};
    case HERO_TYPE.ZOMBIE:
      return {attack: 40, defense: 10};
  }
}

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

    const stats = heroTypeStats(this.type);
    this.attack = stats.attack;
    this.defense = stats.defense;
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

export class Bowman extends Character {
  constructor(name) {
    super(name, HERO_TYPE.BOWMAN);
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, HERO_TYPE.SWORDSMAN);
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, HERO_TYPE.MAGICIAN);
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, HERO_TYPE.DAEMON);
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, HERO_TYPE.UNDEAD);
  }
}

export class Zombie  extends Character {
  constructor(name) {
    super(name, HERO_TYPE.ZOMBIE);
  }
}
