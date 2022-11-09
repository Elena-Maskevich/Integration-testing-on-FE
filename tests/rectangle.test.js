import {getRectanglePerimeter} from '../js/rectangle';
import {getRectangleArea} from '../js/rectangle';
import {getRectangleInfo} from '../js/rectangle';

test('RectanglePerimeter', () => {
    const perimeter = getRectanglePerimeter(2, 7);
    expect(perimeter).toBe(18);
});

test('RectangleArea', () => {
    const area = getRectangleArea(2, 7);
    expect(area).toBe(14);
});

test('RectangleInfo', () => {
    const perimeter = getRectanglePerimeter(2, 7);
    const area = getRectangleArea(2, 7);
    const info = `The perimeter of a rectangle is ${perimeter} and the area is ${area}`;
    expect(info).toBe(`The perimeter of a rectangle is 18 and the area is 14`);
});