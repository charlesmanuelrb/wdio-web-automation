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

  //Alerts Handlers
  public async signupSuccesfulAlert() {
    const textAlert = (await browser.getAlertText()); 
     expect(textAlert).toBe('Sign up successful.');
  }

  public async signupExistUsrAlert() {
    const textAlert = (await browser.getAlertText()); 
     expect(textAlert).toBe('This user already exist.');
  }
    
  
}
// Exporta la clase Users para que pueda ser utilizada en otros archivos
export default Users;
