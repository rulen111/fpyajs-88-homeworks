import { healthStatus, sortHeroesHealth } from '../app';

test.each([
  [{name: 'Маг', health: 90}, 'healthy'],
  [{name: 'Маг', health: 40}, 'wounded'],
  [{name: 'Маг', health: 10}, 'critical'],
])(
  ('check int to string mapping of health status'),
  (hero, expected) => {
    const status = healthStatus(hero);

    expect(status).toBe(expected);
});

test('check hero array sorting by health', () => {
  const expected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
  const inputArr = [
    {name: 'маг', health: 100},
    {name: 'мечник', health: 10},
    {name: 'лучник', health: 80},
  ];

  const result = sortHeroesHealth(inputArr);
  expect(result).toEqual(expected);
});
