const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'baraon',
      room: 'node course'
    },{
      id: '2',
      name: 'baraon2',
      room: 'node course'
    },{
      id: '3',
      name: 'baraon3',
      room: 'react course'
    },];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '1',
      name:'Baraon',
      room:'Testing'
    }

    users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('node course');

    expect(userList).toEqual(['baraon', 'baraon2']);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('react course');

    expect(userList).toEqual(['baraon3']);
  });
});
