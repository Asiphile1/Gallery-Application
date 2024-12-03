import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('GalleryApp.db');

export const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        uri TEXT NOT NULL,
        latitude REAL,
        longitude REAL,
        timestamp TEXT
      );`
    );
  });
};

export const insertImage = (uri, latitude, longitude, timestamp) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO images (uri, latitude, longitude, timestamp) VALUES (?, ?, ?, ?)`,
      [uri, latitude, longitude, timestamp]
    );
  });
};

export const fetchImages = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM images`,
      [],
      (_, { rows }) => callback(rows._array)
    );
  });
};
