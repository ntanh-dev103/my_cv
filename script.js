document.addEventListener('DOMContentLoaded', () => {
  const printBtn = document.querySelector('.btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
});