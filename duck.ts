// Structural typing / Duck typing

interface ICredentials {
  username: string;
  password: string;
  isadmin: boolean;
}
interface IAuth {
  username: string;
  password: string;
  isadmin: boolean;
  login(username: string, password: string): void;
}

function login(credential: ICredentials): boolean {
  console.log(credential);
  return true;
}
const user: ICredentials = {
  username: "rishabh21g",
  password: "123456",
  isadmin: true,
};

login(user); // automatic catches the type of user

const auth = {
  username: "rishabh21g",
  password: "123",
  isadmin: true,
  login(username: string, password: string): void {
    console.log(username);
  },
};

let id = 125  

