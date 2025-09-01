// Daily affirmations
const affirmations = [
  "🌟 I am worthy of healing and growth.",
  "💪 My past does not define me.",
  "🌱 Every day I grow stronger and wiser.",
  "💙 I release what no longer serves me.",
  "☀️ I am walking into my purpose."
];

function showAffirmation() {
  let random = Math.floor(Math.random() * affirmations.length);
  document.getElementById("affirmationBox").innerText = affirmations[random];
}

// Save journal entry
function saveJournal() {
  let entry = document.getElementById("journal").value;
  if (entry.trim() === "") {
    document.getElementById("journalMsg").innerText = "❌ Please write something before saving.";
    return;
  }
  localStorage.setItem("journalEntry", entry);
  document.getElementById("journalMsg").innerText = "✅ Your entry has been saved locally.";
}

// Scroll to tools when CTA clicked
function scrollToTools() {
  document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
}
