(() => {

  type Gender = 'M'|'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthday: Date;
  }

  class Person {
    public birthday: Date;
    public gender: Gender;
    public name:string;

    constructor({ name, gender, birthday }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthday = birthday;
    }
  }

  interface UserProps {
    birthday: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {

    public lastAccess;
    public email;
    public role;

    constructor({ birthday, email, gender, name, role }: UserProps) {
      super({ name, gender, birthday });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentiasls() {
      return true;
    }

  }

  interface UserSettingsProps {
    workingDirectory: string,
    lastOpenFolder: string,
    email: string,
    role: string,
    name: string,
    gender: Gender,
    birthday: Date,
  }

  class UserSettings extends User {

    public workingDirectory;
    public lastOpenFolder;

    constructor({workingDirectory, lastOpenFolder, email, role, name, gender, birthday}: UserSettingsProps) {
      super({email, role, name, gender, birthday})
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    birthday: new Date('1990-12-31'),
    email: 'email@avexyk.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Francisco',
    role: 'Admin',
    workingDirectory: '/usr/home',
  })

  console.log( userSettings );

})();