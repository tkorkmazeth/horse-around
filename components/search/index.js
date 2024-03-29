import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Search() {
  const [inputText,setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }
  return (
    <div className={styles.searchBox}>
      <h2 className={styles.searchBoxTitle}>Buy or Sell Horses in Metaverse</h2>
      <span className={styles.searchBoxSpan}>Connect, Collect, Sale</span>
      <div className="relative">
        <input
          className={styles.searchBoxInput}
          placeholder="I’m looking for..."
          onChange={inputHandler}
        />
        <Link href={`/search?q=${inputText}`}><button className={styles.searchBoxButton}>Find</button></Link>
      </div>
      <span className="text-white text-large mt-5 block font-semibold">
        Categories: NFT Horses For Sale, Foals, For the rider
      </span>
    </div>
  );
}
