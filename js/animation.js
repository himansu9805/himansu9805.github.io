window.onload = () => {
  setInterval(
    (function () {
      updateUI();
      return arguments.callee;
    })(),
    1000
  );
  ScrollReveal({ reset: true });
  ScrollReveal().reveal('#seq-1');
  ScrollReveal().reveal('#seq-2', { delay: 100 });
  ScrollReveal().reveal('#seq-3', { delay: 150 });
  ScrollReveal().reveal('#progress-bar', { delay: 200 });
  ScrollReveal().reveal('#progress-text', { delay: 250 });
  ScrollReveal().reveal('#go-to-top');
  ScrollReveal().reveal('#explore', { delay: 200 });
  ScrollReveal().reveal('#list-item', { delay: 100, interval: 200 });
  ScrollReveal().reveal('#project-item', { delay: 100, interval: 100 });
  ScrollReveal().reveal('#social-item', { delay: 100, interval: 100 });
};