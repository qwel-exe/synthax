const countdown = () => {
    const eventDate = new Date("2025-11-02T00:00:00");
  
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;
  
      if (diff <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Event Started!";
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      document.getElementById("days").textContent = String(days).padStart(2, '0');
      document.getElementById("hours").textContent = String(hours).padStart(2, '0');
      document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
      document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }, 1000);
  };
  
  window.onload = countdown;
  