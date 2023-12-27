import { nanoid } from 'nanoid';

// Contains the users parameterized as static properties
interface User {
  username: string;
  password: string;
}

class Users {
  public static registeredUsr: User = {
    username: 'BaufestUsr',
    password: 'psw1234'
  }

  public static wrongPwdUsr: User = {
    username: 'BaufestUsr',
    password: 'wrongpsw'
  }

  public static unregisteredUsr: User = {
    username: nanoid(15), //Generate a user with random data
    password: 'password'
  }

  
}

export default Users;
