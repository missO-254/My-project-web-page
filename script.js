document.addEventListener('DOMContentLoaded', () => {

  // Get elements for the "Your Guided Journey" section
  const startJourneyBtn = document.getElementById('startJourney');
  const guidedJourneySection = document.getElementById('guided-journey');
  
  // Get elements for Step 1
  const feelingInput = document.getElementById('feelingInput');
  const gratitudeInput = document.getElementById('gratitudeInput');
  const saveFeelingBtn = document.getElementById('saveFeelingBtn');
  const saveGratitudeBtn = document.getElementById('saveGratitudeBtn');
  const moodButtons = document.querySelectorAll('.mood');
  const feelingMsg = document.getElementById('feelingMsg');
  const gratitudeMsg = document.getElementById('gratitudeMsg');

  // Get elements for Step 2
  const affirmBtn = document.getElementById('affirmBtn');
  const affirmationBox = document.getElementById('affirmationBox');
  const journalInput = document.getElementById('journalInput');
  const saveJournalBtn = document.getElementById('saveJournalBtn');
  const journalMsg = document.getElementById('journalMsg');
  
  // Array of affirmations
  const affirmations = [
    "I am worthy of peace and joy.",
    "My feelings are valid, and I am safe to express them.",
    "I am capable of healing and growth.",
    "I am courageous and resilient.",
    "I release what no longer serves me.",
    "I am creating a life I love.",
    "I am learning and growing every day."
  ];

  // Event Listeners

  // Scroll to "Your Guided Journey"
  startJourneyBtn.addEventListener('click', () => {
    guidedJourneySection.scrollIntoView({ behavior: 'smooth' });
  });

  // Handle Mood Buttons
  moodButtons.forEach(button => {
    button.addEventListener('click', () => {
      feelingInput.value = button.dataset.mood;
    });
  });

  // Save Feelings
  saveFeelingBtn.addEventListener('click', () => {
    if (feelingInput.value.trim() !== '') {
      // In a real app, you would save this to a database or local storage
      feelingMsg.textContent = 'Feeling saved! Take a deep breath.';
      feelingInput.value = '';
    } else {
      feelingMsg.textContent = 'Please enter a feeling or select a mood.';
    }
  });

  // Save Gratitude
  saveGratitudeBtn.addEventListener('click', () => {
    if (gratitudeInput.value.trim() !== '') {
      gratitudeMsg.textContent = 'Gratitude saved! You are loved.';
      gratitudeInput.value = '';
    } else {
      gratitudeMsg.textContent = 'Please enter something you are grateful for.';
    }
  });

  // Show a random affirmation
  affirmBtn.addEventListener('click', () => {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    affirmationBox.textContent = randomAffirmation;
  });

  // Save Journal Entry
  saveJournalBtn.addEventListener('click', () => {
    if (journalInput.value.trim() !== '') {
      journalMsg.textContent = 'Journal entry saved! You are on your way.';
      journalInput.value = '';
    } else {
      journalMsg.textContent = 'Please write something before saving.';
    }
  });
});
