export class Account {
  id !: number;
  name!: string;
  userName!: string;
  passWord!: string;
  role_User!: number;

  constructor(id: number, name: string, userName: string, passWord: string, role_User: number) {
    this.id = id;
    this.name = name;
    this.userName = userName;
    this.passWord = passWord;
    this.role_User = role_User;
  }
}
