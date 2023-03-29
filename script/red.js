const card = {
  p12334114: {
    name: "Basic Custom Illustration",
    url: "#",
    image: "../images/samurai_champloo_JIN_pose_Wallpaper_rrn252.jpg",
    price: 133,
  },
  p12444114: {
    name: "BasicLineIllustration",
    url: "#",
    image: "../images/samurai_champloo_JIN_pose_Wallpaper_rrn252.jpg",
    price: 123,
  },
  p22334154: {
    name: "BusinessIllustration",
    url: "#",
    image: "../images/samurai_champloo_JIN_pose_Wallpaper_rrn252.jpg",
    price: 123,
  },
  p123345514: {
    name: "BusinessProductIllustration",
    url: "#",
    image: "../images/samurai_champloo_JIN_pose_Wallpaper_rrn252.jpg",
    price: 123,
  },
  p12352114: {
    name: "ColouredLineIllustration",
    url: "#",
    image: "../images/samurai_champloo_JIN_pose_Wallpaper_rrn252.jpg",
    price: 123,
  },
  p12334166: {
    name: "DetailedCustomIllustration",
    url: "#",
    image: "../images/samurai_champloo_JIN_pose_Wallpaper_rrn252.jpg",
    price: 123,
  },
  p15374114: {
    name: "PetIllustration",
    url: "#",
    image: "../images/samurai_champloo_JIN_pose_Wallpaper_rrn252.jpg",
    price: 123,
  },
  p12431114: {
    name: "RushFee",
    url: "#",
    image: "../images/samurai_champloo_JIN_pose_Wallpaper_rrn252.jpg",
    price: 123,
  },
};
const data = {};
document.querySelector(".product__submit").addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.classList.contains("product__submit")) {
    let articul = evt.target.dataset["articul"];
    if (data[articul] !== undefined) {
      data[articul]["count"]++;
    } else {
      data[articul] = card[articul];
      data[articul]["count"] = 1;
    }

    localStorage.setItem("cart", JSON.stringify(data));
  }
});
