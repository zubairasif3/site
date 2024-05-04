const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const captionText = document.getElementById("caption");
const imageGallery = document.querySelector(".image-gallery-section");

imageGallery.addEventListener("click", function (event) {
    const target = event.target;
    console.log(target);
    if (target.tagName === "IMG" && target.closest(".image-item")) {
        showModal(target);
    }
});

function showModal(img) {
  modal.style.visibility = "visible";
  modal.scrollTop = 0;
  requestAnimationFrame(() => {
    modal.style.opacity = "1";
  });

  modalImg.src = img.dataset.full;
  captionText.style.opacity = "0";
  captionText.style.visibility = "visible";
  setTimeout(() => {
    captionText.innerHTML = img.alt;
    captionText.style.opacity = "1";
  }, 1000);

  document.addEventListener("keydown", handleEscape, false);
}

function handleEscape(event) {
  if (event.key === "Escape" || event.key === "Esc") {
    closeModal();
  }
}

const span = document.querySelector(".close");

span.addEventListener("click", closeModal);
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.opacity = "0";
  modal.addEventListener(
    "transitionend",
    () => {
      modal.style.visibility = "hidden";
      captionText.style.visibility = "hidden";
      captionText.style.opacity = "0";
      captionText.innerHTML = "";
    },
    {
      once: true
    }
  );

  document.removeEventListener("keydown", handleEscape, false);
}
