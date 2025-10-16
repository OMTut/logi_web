"use client";

import Image from "next/image";
import { useLatestRelease } from "@/hooks/useLatestRelease";
import FAQ from "@/components/FAQ";
import Troubleshooting from "@/components/Troubleshooting";
import styles from "./page.module.css";

export default function Home() {
  const { version, downloadUrl, isLoading } = useLatestRelease({
    owner: "OMTut",
    repo: "Logi",
  });
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image
              src="/Logo_Logi_v1_desktop.png"
              alt="Logi - Star Citizen Kill Tracker"
              width={200}
              height={60}
              className={styles.logoImage}
              priority
            />
            <h1 className={styles.logoText}>Logi</h1>
          </div>
          <nav className={styles.nav}>
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
            <a href="#troubleshooting">Troubleshooting</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h2>Real-time Kill Tracker for Star Citizen</h2>
              <p>
                Monitor PvP and PvE combat events with Logi's always-on-top overlay. 
                Track actor deaths, combat statistics, and enhance your Star Citizen gameplay experience.
              </p>
              <div className={styles.heroButtons}>
                <a 
                  href={downloadUrl}
                  className={styles.downloadBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isLoading ? "Loading..." : `Download ${version}`}
                </a>
                <a 
                  href="https://github.com/OMTut/Logi/releases"
                  className={styles.secondaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Releases
                </a>
              </div>
              <p className={styles.requirements}>Windows 10/11 • ~60MB • Free</p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/app_sshot_01.jpg"
                alt="Logi overlay interface showing kill tracking in Star Citizen"
                width={600}
                height={400}
                className={styles.screenshot}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.container}>
          <h2>Key Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <h3>Real-time Log Monitoring</h3>
              <p>Automatically detects and parses Star Citizen log files for instant combat tracking.</p>
            </div>
            <div className={styles.feature}>
              <h3>Actor Death Tracking</h3>
              <p>Monitor and display actor death events in real-time during PvP and PvE encounters.</p>
            </div>
            <div className={styles.feature}>
              <h3>Mostly-on-top Overlay</h3>
              <p>Transparent overlay interface that stays visible during gameplay without interruption.</p>
            </div>
            <div className={styles.feature}>
              <h3>Game Process Detection</h3>
              <p>Automatically starts monitoring when Star Citizen is running - no manual activation needed.</p>
            </div>
            <div className={styles.feature}>
              <h3>Automatic Updates</h3>
              <p>Built-in update system keeps you current with the latest features and improvements.</p>
            </div>
            <div className={styles.feature}>
              <h3>Lightweight & Fast</h3>
              <p>Minimal system impact with approximately 60MB disk space requirement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Troubleshooting Section */}
      <Troubleshooting />

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2>Get in Touch</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactText}>
              <p>Questions, feedback, or need support? Reach out to us!</p>
              <div className={styles.contactLinks}>
                <a 
                  href="https://github.com/OMTut/Logi/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  🐛 Report Issues
                </a>
                <a 
                  href="https://github.com/OMTut/Logi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  💻 View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
