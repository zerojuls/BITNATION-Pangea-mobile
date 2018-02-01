import Colors from "../../../src/global/colorsResources";


test('Color const', () => {

  expect(Colors.BitnationColor).toBe('#4A90E2');

});


test('Color function with shade', () => {

  expect(Colors.shadeOfBitnationColor(0.2)).toBe('rgba(74,144,226,0.2)');

});