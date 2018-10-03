export const mockExample = `const myMock = jest.fn();
console.log(myMock());  //> undefined

//Inyecta valores de retorno
myMock.mockReturnValue('Hola');
console.log(myMock());    //> "Hola"
myMock
.mockReturnValueOnce(2).mockReturnValueOnce(5)
console.log(myMock(), myMock());       //> 2, 5`;
