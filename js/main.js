// for loader in game section
document.addEventListener("click", function handleClick(event) {
  const gradient = document.querySelectorAll(".gradient");
  Array.from(gradient).map((ele) => {
    ele.style.width = "0px";
    setTimeout(() => {
      ele.classList.add("onclick-gradient");
    }, 100);

    setTimeout(() => {
      ele.style.width = "100%";
      ele.classList.remove("onclick-gradient");
    }, 800);
  });
});

function loader() {
  let loader_wrapper = document.querySelector(".custom-progress-bar--wrapper");
  let bars = document.querySelectorAll(".custom-progress-bar--wrapper .bar");

  if (bars.length >= 8) {
    Array.from(bars).map((ele) => ele.remove());
  } else {
    let bar = document.createElement("div");
    bar.setAttribute("class", "bar");
    loader_wrapper.appendChild(bar);
  }
}

setInterval(() => {
  loader();
}, 500);

// for card on team seaction
const firstMember = document.querySelector("#member1-card");
const member_cards = document.querySelectorAll(".member_card");
Array.from(member_cards).map((card) => {
  const member = card?.querySelector?.("#member");
  const member_conent = card.querySelector("#member-content");
  card.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 1024) {
      member.classList.add("d-none");
      member_conent.classList.remove("d-none");
    }
  });
  card.addEventListener("mouseleave", () => {
    if (window.innerWidth >= 1024) {
      member.classList.remove("d-none");
      member_conent.classList.add("d-none");
    }
  });
});

// for model in mobile section 

const member_cards1 = document.querySelectorAll(".member_card");

Array.from(member_cards1).map((item, index) => {
  var modal = item.querySelector("#myModal");
  var closeModalBtn = modal?.querySelector("#close-modal");
  if (item)
    item.addEventListener("click", function () {
      if (window.innerWidth < 1024) {
        if (modal?.classList?.contains("d-none")) {
          modal.style.display = "block";
          modal.classList.remove("d-none");
        }
      }
    });

  closeModalBtn?.addEventListener("click", function (e) {
    if (window.innerWidth < 1024) {
      e.stopPropagation();
      modal.classList.add("d-none");
      modal.style.display = "none";
    }
  });
});

