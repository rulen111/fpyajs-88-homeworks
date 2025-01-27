import * as characters from '../characters';

test('character name validation', () => {
  const tf = () => {
    new characters.Bowman('a');
  };
  expect(tf).toThrow(TypeError);
});

test('character type validation', () => {
  const tf = () => {
    new characters.Character('aawdaad', 'Bowerman');
  };
  expect(tf).toThrow(TypeError);
});

test('level up test', () => {
  const input_char = new characters.Swordsman('test');
  const expected = new characters.Swordsman('test');
  expected.level += 1;
  expected.attack *= 1.2;
  expected.defense *= 1.2;

  input_char.levelUp();
  expect(input_char).toEqual(expected);
});

test('level up error', () => {
  const input_char = new characters.Magician('test');
  input_char.health = 0;

  const tf = () => {
    input_char.levelUp();
  };
  expect(tf).toThrow(Error);
});

test('damage test', () => {
  const input_char = new characters.Daemon('test');
  const expected = new characters.Daemon('test');
  const points = 10;
  expected.health -= points * (1 - expected.defense / 100);

  input_char.damage(points);
  expect(input_char).toEqual(expected);
});

test('damage test error', () => {
  const input_char = new characters.Undead('test');
  input_char.health = 0;

  const tf = () => {
    input_char.damage(1);
  };
  expect(tf).toThrow(Error);
});

test('character costructors', () => {
  const hero1 = new characters.Bowman('test');
  const hero2 = new characters.Zombie('test');
  expect(hero1).toBeInstanceOf(characters.Character);
  expect(hero2).toBeInstanceOf(characters.Character);
});
