import { orderByProps, getSpecialAttacks } from '../func';

test('ordering with arg', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const order = ["name", "level"];
  const expected = [
    {key: "name", value: "мечник"},
    {key: "level", value: 2},
    {key: "attack", value: 80},
    {key: "defence", value: 40},
    {key: "health", value: 10}
  ];

  const result = orderByProps(obj, order);
  expect(result).toEqual(expected);
});

test('ordering without arg', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const expected = [
    {key: "attack", value: 80},
    {key: "defence", value: 40},
    {key: "health", value: 10},
    {key: "level", value: 2},
    {key: "name", value: "мечник"}
  ];

  const result = orderByProps(obj);
  expect(result).toEqual(expected);
});

test('get specials with args', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ];

  const result = getSpecialAttacks(character);
  expect(result).toEqual(expected);
});

test('get specials with no args', () => {
  const expected = [];

  const result = getSpecialAttacks({});
  expect(result).toEqual(expected);
});
