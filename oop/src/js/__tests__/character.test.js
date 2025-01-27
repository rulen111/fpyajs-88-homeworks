import { Character } from '../class/Character';
import { Bowman } from '../class/Bowman';
import { Swordsman } from '../class/Swordsman';
import { Magician } from '../class/Magician';
import { Daemon } from '../class/Daemon';
import { Undead } from '../class/Undead';
import { Zombie } from '../class/Zombie';

test('character name validation', () => {
  const tf = () => {
    new Bowman('a');
  };
  expect(tf).toThrow(TypeError);
});

test('character type validation', () => {
  const tf = () => {
    new Character('aawdaad', 'Bowerman');
  };
  expect(tf).toThrow(TypeError);
});

test('level up test', () => {
  const input_char = new Swordsman('test');
  const expected = new Swordsman('test');
  expected.level += 1;
  expected.attack *= 1.2;
  expected.defense *= 1.2;

  input_char.levelUp();
  expect(input_char).toEqual(expected);
});

test('level up error', () => {
  const input_char = new Magician('test');
  input_char.health = 0;

  const tf = () => {
    input_char.levelUp();
  };
  expect(tf).toThrow(Error);
});

test('damage test', () => {
  const input_char = new Daemon('test');
  const expected = new Daemon('test');
  const points = 10;
  expected.health -= points * (1 - expected.defense / 100);

  input_char.damage(points);
  expect(input_char).toEqual(expected);
});

test('damage test error', () => {
  const input_char = new Undead('test');
  input_char.health = 0;

  const tf = () => {
    input_char.damage(1);
  };
  expect(tf).toThrow(Error);
});

test('character costructors', () => {
  const hero1 = new Bowman('test');
  const hero2 = new Zombie('test');
  expect(hero1).toBeInstanceOf(Character);
  expect(hero2).toBeInstanceOf(Character);
});
