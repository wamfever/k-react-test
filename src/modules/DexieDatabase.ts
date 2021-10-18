import Dexie from "dexie";

/* Initialize a new Database named KeykoDatabase */

type DatabaseProps = {
  id?: number;
  name: string;
  phone: string;
  email: string;
  gender: string;
  age: string;
  avatar: any;
  occupation: string;
};

class KeykoDatabase extends Dexie {
  /* Declare implicit table properties. */
  contacts: Dexie.Table<
    DatabaseProps,
    number
  >; /* number = type of the primkey */

  constructor() {
    super("KeykoDatabase");
    this.version(1).stores({
      contacts: "++id, name, phone, email, gender, age, avatar, occupation",
    });

    this.contacts = this.table("contacts");
  }
}

const DexieDatabase = new KeykoDatabase();

export default DexieDatabase;
