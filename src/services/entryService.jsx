let db;
let version = 1;
let dbReadyPromise;

const Stores = {
  Journal: "journal",
};

const initDB = () => {
  if (dbReadyPromise) return dbReadyPromise; // return existing promise if init already started

  dbReadyPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(Stores.Journal, version);

    request.onupgradeneeded = () => {
      db = request.result;
      if (!db.objectStoreNames.contains(Stores.Journal)) {
        const store = db.createObjectStore(Stores.Journal, { keyPath: "id" });
        store.createIndex("date_db", ["dateFormatted"], { unique: false });
      }
    };

    request.onsuccess = () => {
      db = request.result;
      version = db.version;
      resolve(true);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });

  return dbReadyPromise;
};

const getEntries = async () => {
  await initDB(); // Ensure DB ready

  return new Promise((resolve, reject) => {
    if (!db) {
      reject("DB is not initialized");
      return;
    }

    const tx = db.transaction(Stores.Journal, "readonly");
    const store = tx.objectStore(Stores.Journal);
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

const getEntriesByDate = async (date) => {
  await initDB(); // Ensure DB ready

  return new Promise((resolve, reject) => {
    if (!db) {
      reject("DB is not initialized");
      return;
    }

    const tx = db.transaction(Stores.Journal, "readwrite");
    const store = tx.objectStore(Stores.Journal);
    const dateIndex = store.index("date_db");
    const request = dateIndex.getAll([date]);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

const addEntry = async (data) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("DB is not initialized");
      return;
    }

    const tx = db.transaction(Stores.Journal, "readwrite");
    const store = tx.objectStore(Stores.Journal);
    const request = store.add(data);

    request.onsuccess = () => {
      resolve(data);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

const updateEntry = async (key, data) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("DB is not initialized");
      return;
    }

    const tx = db.transaction(Stores.Journal, "readwrite");
    const store = tx.objectStore(Stores.Journal);
    const getRequest = store.get(key);

    getRequest.onsuccess = () => {
      const newData = { ...getRequest.result, ...data };
      const putRequest = store.put(newData);

      putRequest.onsuccess = () => {
        resolve(newData);
      };

      putRequest.onerror = () => {
        reject(putRequest.error);
      };
    };

    getRequest.onerror = () => {
      reject(getRequest.error);
    };
  });
};

const deleteEntry = async (key) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("DB is not initialized");
      return;
    }

    const tx = db.transaction(Stores.Journal, "readwrite");
    const store = tx.objectStore(Stores.Journal);
    const request = store.delete(key);

    request.onsuccess = () => {
      resolve(true);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

const entryService = {
  initDB,
  getEntries,
  getEntriesByDate,
  addEntry,
  updateEntry,
  deleteEntry,
};

export default entryService;
