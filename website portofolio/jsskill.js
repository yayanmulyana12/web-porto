document.addEventListener("DOMContentLoaded", () => {
  const percentages = document.querySelectorAll(".percentage");

  percentages.forEach((percentElem) => {
    const targetPercent = parseInt(
      percentElem.getAttribute("data-percent"),
      10
    );
    let currentPercent = 0;

    const increment = Math.ceil(targetPercent / 50);
    const interval = setInterval(() => {
      currentPercent += increment;
      if (currentPercent >= targetPercent) {
        currentPercent = targetPercent;
        clearInterval(interval);
      }
      percentElem.textContent = `${currentPercent}%`;
    }, 30);
  });
});
