import { nanoid } from 'nanoid';

// Define la interfaz User con propiedades para los datos del usuario

// Crea una clase Users que contiene los usuarios parametrizados como propiedades estáticas
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
    username: nanoid(15), // Genera un usuario con datos aleatorios
    password: 'password'
  }

  
}

export default Users;
