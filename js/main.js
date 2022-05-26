

document.addEventListener("click", function handleClick(event) {
  const gradient = document.querySelectorAll(".gradient");
  Array.from(gradient).map((ele) => {
    ele.style.width = "0px";
    setTimeout(() => {
      ele.classList.add("onclick-gradient");
    }, 100)

    setTimeout(() => {
      ele.style.width = "100%";
      ele.classList.remove("onclick-gradient");
    }, 800);
  });
});


function loader() {
  let loader_wrapper = document.querySelector('.custom-progress-bar--wrapper');
  let bars = document.querySelectorAll('.custom-progress-bar--wrapper .bar');

  if(bars.length >= 8) {
    Array.from(bars).map(ele => ele.remove());
  }else {
    let bar = document.createElement('div');
    bar.setAttribute('class', 'bar');
    loader_wrapper.appendChild(bar);
  }
}

setInterval(() => {
  loader()
}, 500)