// TODO: write your code here
export function healthStatus(hero) {
    const hp = hero.health;
    let status;
  
    if (hp > 50) {
      status = 'healthy';
    } else if (hp >= 15) {
      status = 'wounded';
    } else {
      status = 'critical';
    };
  
    return status;
  };

  export function sortHeroesHealth(heroes) {
    return heroes.sort((a, b) => {
        const healthA = a.health;
        const healthB = b.health;

        if (healthA < healthB) {
            return 1;
        } else if (healthA > healthB) {
            return -1;
        } else {
            return 0;
        }
    });
  };
