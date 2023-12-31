import { initializeApp } from "firebase/app";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { Pembeli } from "../Pembeli/entity";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCMkbts9TUfOOdlYJEH0Rxu-eZhFWRpJk",
  authDomain: "canteenbuzz.firebaseapp.com",
  projectId: "canteenbuzz",
  storageBucket: "canteenbuzz.appspot.com",
  messagingSenderId: "217486325376",
  appId: "1:217486325376:web:abf6a86816772eb7b5d865",
  measurementId: "G-XBZVX84M5D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export type TPenjual = {
  id?: String;
  kantinId?: String;
  kios?: String;
  username?: String;
  password?: String;
  pesanan?: Pembeli[];
};
export class Penjual implements TPenjual {
  id?: String;
  kantinId?: String;
  kios?: String;
  username?: String;
  password?: String;
  pesanan?: Pembeli[];

  constructor(
    id?: String,
    kantinId?: String,
    kios?: String,
    username?: String,
    password?: String,
    pesanan?: Pembeli[]
  ) {
    this.id = id;
    this.kantinId = kantinId;
    this.kios = kios ? kios : undefined;
    this.username = username;
    this.password = password;
    this.pesanan = pesanan ? pesanan : [];
  }

  setId(id: String): void {
    this.id = id;
  }

  setKantinId(kantinId: String): void {
    this.kantinId = kantinId;
  }

  setKios(kios: String) {
    this.kios = kios;
    setDoc(
      doc(db, "penjual", this.id as string),
      { kios: kios },
      { merge: true }
    );
  }

  setUsername(username: String): void {
    this.username = username;
  }

  setPassword(password: String): void {
    this.password = password;
  }

  setPesanan(pesanan: Pembeli[]): void {
    this.pesanan = pesanan;
  }

  getId(): String {
    return this.id || "";
  }
  getKios(): String {
    return this.kios || "";
  }

  getUsername(): String {
    return this.username || "";
  }

  getPassword(): String {
    return this.password || "";
  }

  getPesanan(): Pembeli[] {
    return this.pesanan || [];
  }
  // getPesanan(): Pembeli[] {
  //   //theres something to do with this
  //   const fetchedPembeli: Pembeli[] = [];
  //   this.pesanan?.forEach((pembeli) => {
  //     const tempTimestamp = pembeli.waktu as unknown as Timestamp;
  //     pembeli.getWaktu()
  //       ? fetchedPembeli.push(pembeli)
  //       : fetchedPembeli.push(
  //           new Pembeli({
  //             ...pembeli,
  //             waktu: tempTimestamp.toDate(),
  //           } as Pembeli)
  //         );
  //   });
  //   return fetchedPembeli;
  // }
}
