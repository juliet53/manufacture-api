const { Remise } = require('../src/remise');

test('25 % de remise sur 200 euros donnent 150 euros', () => {
  expect(Remise(200, 25)).toBe(150);
});

test('10 % de remise sur 100 euros donnent 90 euros', () => {
  expect(Remise(100, 10)).toBe(90);
});

test('une remise de plus de 100 % est refusee', () => {
  expect(() => Remise(200, 120)).toThrow('Attention erreur de remise');
});