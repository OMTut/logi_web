import ExpandableSection from "./ExpandableSection";

const faqData = [
  {
    title: "Why did you make Logi?",
    content: "<p>Frankly, I need something to show potential employers CS skills, and this is a fun way to do it. Plus, I rarely press charges in SC so I don't look at the pop up. This let's me see who kilt me.</p>"
  },
  {
    title: "Is Logi persistent or have a backend?",
    content: "<p>No. You're not connected to anything. In the future, yes. I'll spin up and work on a proper database for it.</p>"
  },
  {
    title: "How does Logi work with Star Citizen?",
    content: "<p>Logi monitors your Star Citizen log files in real-time to detect and display combat events. It automatically starts when Star Citizen is running and provides an always-on-top overlay that won't interfere with your gameplay.</p>"
  },
  {
    title: "Is Logi safe to use?",
    content: "<p>Yes, Logi is safe. It only reads Star Citizen's generated log files - it doesn't modify game files or inject any code into the game process. It's a passive monitoring tool that operates entirely outside the game.</p>"
  },
  {
    title: "What information does Logi track?",
    content: "<p>Logi tracks actor death events in both PvP and PvE scenarios. This includes player kills, NPC eliminations, and other combat-related statistics.</p>"
  },
  {
    title: "Do I need to configure anything after installation?",
    content: "<p>The setup is minimal. After installation, you just need to point Logi to your Star Citizen directory. The app will automatically detect when Star Citizen is running and start monitoring your log files.</p>"
  },
  {
    title: "Does Logi impact game performance?",
    content: "<p>No, Logi is designed to be lightweight with minimal system impact. It uses approximately 60MB of disk space and runs efficiently in the background without affecting your Star Citizen gameplay experience.</p>"
  },
  {
    title: "How do I update Logi?",
    content: "<p>Logi includes a built-in automatic update system. When a new version is available, the app will notify you and handle the update process automatically, ensuring you always have the latest features and improvements.</p>"
  }
];

export default function FAQ() {
  return (
    <ExpandableSection
      id="faq"
      title="Frequently Asked Questions"
      items={faqData}
    />
  );
}
