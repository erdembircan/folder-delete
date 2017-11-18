const deleteFolder = require('../index');

describe('delete-folder', () => {
  it('should export module correctly', () => {
    expect(typeof deleteFolder).toBe('function');
  });
});
