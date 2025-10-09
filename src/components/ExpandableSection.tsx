"use client";

import { useState } from "react";
import styles from "./ExpandableSection.module.css";

interface ExpandableItemProps {
  title: string;
  content: string;
}

function ExpandableItem({ title, content }: ExpandableItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.expandableItem}>
      <button 
        className={styles.expandableTitle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={`${styles.expandableIcon} ${isOpen ? styles.expandableIconOpen : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className={styles.expandableContent}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
}

interface ExpandableSectionProps {
  id?: string;
  title: string;
  items: Array<{
    title: string;
    content: string;
  }>;
  className?: string;
}

export default function ExpandableSection({ 
  id, 
  title, 
  items, 
  className = "" 
}: ExpandableSectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.itemsList}>
          {items.map((item, index) => (
            <ExpandableItem 
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}