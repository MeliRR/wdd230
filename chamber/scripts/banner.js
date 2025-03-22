function isBannerDay() {
    const today = new Date().getDay();
    return [1, 2, 5].includes(today);
  }
  
  function closeBanner() {
    const banner = document.getElementById("announcementBanner");
    banner.style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    if (isBannerDay()) {
      const banner = document.getElementById("announcementBanner");
      banner.style.display = "flex";
    }
  });