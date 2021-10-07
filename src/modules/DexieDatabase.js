import Dexie from "dexie";
/* Initialize a new Database named KeykoDatabase */
const db = new Dexie("KeykoDatabase");

/* Create a table called contacts in the database and define its columns */
db.version(1).stores({
    contacts: "++id, name, phone, email, gender, age, avatar, occupation"
});

/* Catch the database connection errors if they are present */
db.open().catch((err) => {
    console.log(err)
})

/* Creating a constant that selects the database contacts table and exporting it for preventing the call repetition */
const DexieDatabase = db.contacts;

export default DexieDatabase;
