export const spiesExample = `const myMock = jest.fn();
myMock(10);

//Número de llamadas
console.log(myMock.mock.calls.length)   //> 1

//Asserts de llamadas
expect(myMock).toHaveBeenCalled();        //true
expect(myMock).toHaveBeenCalledTimes(1);  //true
expect(myMock).toHaveBeenCalledTimes(2);  //false
expect(myMock).toHaveBeenCalledWith(20);  //false
expect(myMock).toHaveBeenCalledWith(10);  //true`;
