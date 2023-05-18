const addtask = require('./additem')
// const localStorage = require('./additem')

// localStorage.setItem = jest.fn();
// jest.mock('./additem', () => {
//     const originalLocalStorageMock = jest.requireActual('./additem');
//     const mockSetItem = jest.fn();
//     return {
//       ...originalLocalStorageMock,
//       setItem: mockSetItem,
//     };
// });
  

// test('should and description, status with boolean value and index with string value', () => {
//     expect(addtask()).toStrictEqual({description : 'hello', index : 1, status : false});
//     expect(localStorage.setItem).toHaveBeenCalledTimes(1);
// })
describe('add item',()=>{
    test('add an item',()=>{
        expect(addtask('title')).toEqual([{description:'title',
        status:false,index:1}])
    })
    
})