let request;
let db;
let version = 1;

export const Stores = {
  Journal: "journal",
};

const initDB = () => {
  return new Promise((resolve) => {
    // open the connection
    request = indexedDB.open("myDB");

    request.onupgradeneeded = () => {
      db = request.result;

      // if the data object store doesn't exist, create it
      if (!db.objectStoreNames.contains(Stores.Journal)) {
        console.log(`Creating ${Stores.Journal} store`);
        db.createObjectStore(Stores.Journal, { keyPath: "id" });
      }
      // no need to resolve here
    };

    request.onsuccess = () => {
      db = request.result;
      version = db.version;
      console.log("request.onsuccess - initDB", version);
      resolve(true);
    };

    request.onerror = () => {
      resolve(false);
    };
  });
};

export default initDB;

// Reference https://dev.to/esponges/indexeddb-your-offline-and-serverless-db-in-your-browser-with-react-3hm7
