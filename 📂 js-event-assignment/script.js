// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("You clicked the button! 🎉");
  });
  
  document.getElementById("dblClickBtn").addEventListener("dblclick", () => {
    alert("Double-click detected! 🕵️‍♂️ Secret action triggered.");
  });
  
  // Keypress detection
  document.getElementById("keyInput").addEventListener("keydown", (e) => {
    console.log("You pressed:", e.key);
  });
  
  // 2. Image Gallery using Pexels images
  const images = [
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1604141/pexels-photo-1604141.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/305974/pexels-photo-305974.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  
  let currentImage = 0;
  const galleryImage = document.getElementById("galleryImage");
  galleryImage.src = images[currentImage];
  
  document.getElementById("nextImage").addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    galleryImage.src = images[currentImage];
  });
  
  // 3. Tabs
  const tabButtons = document.querySelectorAll(".tabBtn");
  const tabContents = document.querySelectorAll(".tab-content");
  
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabContents.forEach(content => content.classList.add("hidden"));
      document.getElementById(button.dataset.tab).classList.remove("hidden");
    });
  });
  
  // 4. Form Validation
  const form = document.getElementById("signupForm");
  const feedback = document.getElementById("feedback");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    if (!name || !email || !password) {
      feedback.textContent = "Please fill out all fields.";
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      feedback.textContent = "Please enter a valid email.";
      return;
    }
  
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      return;
    }
  
    feedback.style.color = "green";
    feedback.textContent = "Form submitted successfully!";
  });
  
  // Real-time password validation
  document.getElementById("password").addEventListener("input", (e) => {
    feedback.textContent = e.target.value.length < 8 
      ? "Password must be at least 8 characters." 
      : "";
  });
  