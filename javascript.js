document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if(form){
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Your message has been sent successfully!");
    });
  }
});
