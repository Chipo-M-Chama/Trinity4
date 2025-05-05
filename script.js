// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".content-section, .hidden-section");
  
    // Helper to hide all sections
    const hideAllSections = () => {
      sections.forEach(section => {
        section.classList.add("hidden");
      });
    };
  
    // Show a specific section by ID
    window.showSection = (sectionId) => {
      hideAllSections();
  
      const target = document.getElementById(`${sectionId}`);
      if (target) {
        target.classList.remove("hidden");
        // Scroll to the section
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  
    // Allow dropdown toggling if needed (for mobile)
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        const dropdown = toggle.nextElementSibling;
        if (dropdown && dropdown.classList.contains("dropdown-content")) {
          dropdown.classList.toggle("show-dropdown");
        }
      });
    });
  
    // Optional: Close dropdowns when clicking elsewhere
    document.addEventListener("click", (e) => {
      dropdownToggles.forEach(toggle => {
        const dropdown = toggle.nextElementSibling;
        if (dropdown && dropdown.classList.contains("dropdown-content")) {
          if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove("show-dropdown");
          }
        }
      });
    });
  
    // Optional: Automatically scroll to section if URL has a hash
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      showSection(hash);
    }
  });
  