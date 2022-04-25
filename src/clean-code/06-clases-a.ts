(() => {

  // No aplicando el principio de responsabilidad unica

  type Gender = 'M'|'F';

  class Person {
    // public name: string;
    // public gender: Gender;
    // public birthday: Date;

    // constructor(name: string, gender: Gender, birthday: Date) {
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthday = birthday;
    // }
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date,
    ){}
  }

  // const newPerson = new Person('Francisco Javier', 'M', new Date('1990-12-30'));

  class User extends Person {

    public lastAccess;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthday: Date,
    ) {
      super( name, gender, birthday );
      this.lastAccess = new Date();
    }

    checkCredentiasls() {
      return true;
    }

  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthday: Date,
    ) {
      super(email, role, name, gender, birthday)
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'email@avexyk.com',
    'Admin',
    'Francisco',
    'M',
    new Date('1990-12-31')
  )

  console.log( userSettings );

})();