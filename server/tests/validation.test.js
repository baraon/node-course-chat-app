var expect = require('expect');

var {isRealString} = require('../utils/validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('     ');
    expect(res).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    var str = 'My name is what'
    var length = str.length;
    var res = isRealString(str);
    expect(res).toBe(true);
    expect(str.length).toBe(length);
  });


});
