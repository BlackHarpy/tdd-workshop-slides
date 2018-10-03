export const simpleModule = `export default function sum(a, b) {
    return a + b;
}`;

export const simpleTest = `import { sum } from './sum'; 
test('Should add 1 + 2 to equal 3', () => {
    const a = 1; const b = 2;       //Arrange
    const result = sum(a, b);       //Act
    expect(result).toBe(3);         //Assert
});`;
