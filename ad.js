const items = [
  {
    img: "https://0800webdev.github.io/UBGdir/logo.png",
    link: "https://0800webdev.github.io/UBGdir/"
  },
  {
    img: "https://i.postimg.cc/V6zNPQXW/7ad210998816426cb8bd123081203109-free.png",
    link: "https://pgis.x10.mx/"
  },
   {
    img: "https://i.postimg.cc/5Ng9k1mx/28470cf859534f4da1071c04d2f2ee6b-free.png",
    link: "https://github.com/0800WebDev"
  }
];

function getDomain(url) {
  return new URL(url).hostname.replace("www.", "");
}

function showRandom() {
  const currentDomain = location.hostname.replace("www.", "");

  const validItems = items.filter(item => {
    const itemDomain = getDomain(item.link);
    return itemDomain !== currentDomain;
  });

  if (validItems.length === 0) return;

  const randomItem = validItems[Math.floor(Math.random() * validItems.length)];

  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "10px";
  container.style.right = "10px";
  container.style.zIndex = "9999";

  const a = document.createElement("a");
  a.href = randomItem.link;

  const img = document.createElement("img");
  img.src = randomItem.img;
  img.style.maxWidth = "150px";
  img.style.cursor = "pointer";

  a.appendChild(img);
  container.appendChild(a);
  document.body.appendChild(container);
}

window.addEventListener("load", showRandom);
