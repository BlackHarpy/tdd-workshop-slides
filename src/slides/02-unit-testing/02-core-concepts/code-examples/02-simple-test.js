export const simpleModule = `export default function sum(a, b) {
    return a + b;
}`;

export const simpleTest = `test('Should add 1 + 2 to equal 3', () => {
    import { sum } from './sum';    //Arrange
    const result = sum(1,2);        //Act
    expect(result).toBe(3);         //Assert
});`;
