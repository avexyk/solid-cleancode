(() => {

  // Principio de responsabilidad unica -  Priorizar la composicion a la herencia

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
    email: string;
    role: string;
  }

  class User {

    public email;
    public lastAccess;
    public role;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentiasls() {
      return true;
    }

  }

  interface SettingsProps {
    workingDirectory: string,
    lastOpenFolder: string,
  }

  class Settings {

    public workingDirectory;
    public lastOpenFolder;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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

  class UserSettings {

    public person: Person;
    public user: User;
    public settings: Settings;

    constructor( {
      name, gender, birthday,
      email, role,
      workingDirectory, lastOpenFolder,
    }: UserSettingsProps) {

      this.person = new Person({ name, gender, birthday });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });

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
  console.log( userSettings.user.checkCredentiasls() );

})();