import React from "react";
import styles from "./Tags.module.css";

interface TagsProps {
  items: string[];
}

export default function Tags({ items }: TagsProps) {
  return (
    <div className={styles.tags}>
      {items.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
}
