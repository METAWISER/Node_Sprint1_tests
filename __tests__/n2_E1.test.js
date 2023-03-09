jest.useFakeTimers()
jest.spyOn(global, 'setTimeout');

test('waits 2 second before ending', () => {
  const {funcionAsicrona ,funcionQueRetornaPormesa} = require('../archivosProbar/n2_E1')
   funcionAsicrona(funcionQueRetornaPormesa).then(resultado => resultado)
   
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});

