const images = () => {
  const imgPopup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImage = document.createElement("img");

  imgPopup.classList.add("popup");
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";

  imgPopup.appendChild(bigImage);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    console.log(e);

    if (target && target.classList.contains("preview")) {
      document.body.classList.add("modal-open");
      imgPopup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
      bigImage.style.cssText = "max-height: 100vh; max-width: 100%; padding-top: 26px";
    }

    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
};
export default images;
