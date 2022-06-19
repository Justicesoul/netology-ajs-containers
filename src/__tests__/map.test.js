import ErrorRepository, { newMap } from '../js/map';
newMap.set(400, 'Failed to add');

test('show add new error ant read description', () => {
  const newError = new ErrorRepository(500, 'wtf?!');
  const result = 'wtf?!';
  expect(newError).toEqual({});
  expect(ErrorRepository.translate(500)).toEqual(result);
});

test('show not error by code ', () => {
  const result = 'Unknown error';
  expect(ErrorRepository.translate(100)).toEqual(result);
});
