// --- CONFIGURATION --- //

const PROJECTS = [
  { name: "mdshare", url: "https://mdshare.anlaki.dev/" },
  // { name: "rokaru", url: "https://rokaru.anlaki.dev" } // Example of commented out project
];

const SOCIALS = [
  { name: "github", url: "https://github.com/anlaki-py" },
  { name: "huggingface", url: "https://huggingface.co/anlaki" },
  { name: "instagram", url: "https://instagram.com/anlaki.dev" },
  { name: "carrd", url: "https://unluky.carrd.co" }
];

// --- MAIN LOGIC --- //

document.addEventListener("DOMContentLoaded", () => {
  // 1. Render Projects
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    projectsContainer.innerHTML = PROJECTS.map(project => `
      <a href="${project.url}" class="project-link" target="_blank" rel="noopener noreferrer">
        <span class="link-text">${project.name}</span>
        <i data-lucide="external-link"></i>
      </a>
    `).join('');
  }

  // 2. Render Socials
  const socialsContainer = document.getElementById('socials-container');
  if (socialsContainer) {
    socialsContainer.innerHTML = SOCIALS.map(social => `
      <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="social-link">
        ${social.name}
      </a>
    `).join('');
  }

  // 3. Initialize Lucide Icons (Must happen AFTER content injection)
  lucide.createIcons();
  
  // 4. Cinematic Decrypt Logic
  const title = document.getElementById('title');
  const originalText = "anlaki"; 
  const chars = '<>-_\\[]{}—=+*^?#_01';
  let scrambleInterval;

  const triggerScramble = () => {
    let iterations = 0;
    clearInterval(scrambleInterval); // Reset if already running

    scrambleInterval = setInterval(() => {
      title.innerText = originalText.split('').map((char, index) => {
        if (index < iterations) return originalText[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      
      if (iterations >= originalText.length) {
        clearInterval(scrambleInterval);
        title.innerText = originalText; // Failsafe ensure correct text
      }
      iterations += 1/4; // Speed of decryption
    }, 30);
  };

  // Handle click to re-trigger
  title.addEventListener('click', triggerScramble);

  // 5. Initial Load Sequence
  const reveals = document.querySelectorAll('.reveal');

  setTimeout(() => {
    // Scramble Title
    triggerScramble();
    
    // Staggered blur reveal for rest of content
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('active');
      }, (i * 150) + 400); // 400ms delay after scramble starts
    });
  }, 150);
});
