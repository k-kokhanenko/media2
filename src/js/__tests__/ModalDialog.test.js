import ModalDialog from '../ModalDialog';

test('check coordinates values 1', () => {  
  const modal = new ModalDialog();
  const result = modal.checkCoordinates('51.50851, 0.12572');
  expect(result).toEqual({ lat: '51.50851', long: '0.12572' });
});

test('check coordinates values 2', () => {  
  const modal = new ModalDialog();
  const result = modal.checkCoordinates('[51.50851,0.12572]');
  expect(result).toEqual({ lat: '51.50851', long: '0.12572' });
});

test('check coordinates values 3', () => {  
  const modal = new ModalDialog();
  expect(() => {
    modal.checkCoordinates('[12.345]');
  }).toThrow('Incorrect input value.');
});

test('check coordinates values 4', () => {  
  expect(() => {
   myClass.checkCoordinates('12.345, 67.890, 89.012');
  }).toThrow('Incorrect input value.');
});