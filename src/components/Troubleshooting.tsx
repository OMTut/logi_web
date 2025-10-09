import ExpandableSection from "./ExpandableSection";

const troubleshootingData = [
  {
    title: "Logi doesn't detect Star Citizen running",
    content: `
    <p>Logi looks for the Star Citizen game process, not the launcher.</p>  
    <p><strong>Possible Solutions:</strong></p>
      <ul>
        <li>Make sure Star Citizen is fully loaded (not just the launcher)</li>
        <li>Verify the Star Citizen directory path in Logi settings</li>
      </ul>
    `
  },
  {
    title: "No kill data showing in overlay",
    content: `
      <p>Currently, SC needs to be running first. When SC starts, it creates a log for that session. If the log is already created, Logi starts reading. If Logi is running and doesn't see a file, I haven't made it so that it keeps checking for a new one. That will come in the future.</p>
      <p><strong>Check these:</strong></p>
      <ul>
        <li>Have SC running before launching Logi</li>
        <li>Verify Logi is pointed to the right directory in settings.</li>
        <li>Make sure you're in an area with combat activity</li>
      </ul>
    `
  },
  {
    title: "Overlay appears behind other windows",
    content: `
      <p>Sometimes if the game is in full screen mode and Logi was running already, it may be behind SC. Alt-Tab out, click Logi and jump back into game.</p>
    `
  }
];

export default function Troubleshooting() {
  return (
    <ExpandableSection
      id="troubleshooting"
      title="Known Issues & Troubleshooting"
      items={troubleshootingData}
    />
  );
}