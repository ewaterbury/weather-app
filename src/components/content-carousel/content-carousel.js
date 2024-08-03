import "./content-carousel.css";
export class ContentCarousel {
  constructor(parent) {
    this.parent = parent;
    this.slideIndex = 1;
  }

  build(ContentArr) {
    //Carousel Container
    const div = document.createElement("div");
    div.classList.add("content_carousel");
    //Carousel Slides
    ((parent) => {
      let i = 1;
      for (const item of ContentArr) {
        const div = document.createElement("div");
        div.classList.add("carousel_slide");
        //Carousel Slide Counter
        ((parent) => {
          const div = document.createElement("div");
          div.classList.add("carousel_slide_counter");
          div.textContent = `${i} / ${ContentArr.length}`;
          parent.append(div);
        })(div);
        ((parent) => {
          item.classList.add("carousel_slide_content");
          parent.append(item);
        })(div);
        i++;
        parent.append(div);
      }
      //Prev and Next Arrows
      const arrows = [
        ["prev", "&#10094;"],
        ["next", "&#10095;"],
      ];
      for (const item of arrows) {
        ((parent) => {
          const a = document.createElement("a");
          a.classList.add(item[0]);
          a.innerHTML = item[1];
          parent.append(a);
        })(div);
      }
      //Navigation Dots
      ((parent) => {
        const div = document.createElement("div");
        div.classList.add("dot_container");
        for (let i = 0; i < ContentArr.length; i++) {
          const span = document.createElement("span");
          span.classList.add("dot");
          div.append(span);
        }
        parent.append(div);
      })(div);
    })(div);
    this.parent.append(div);
  }

  displaySlide(n) {
    let slides = document.getElementsByClassName("carousel_slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  shiftSlide(n) {
    this.displaySlide((this.slideIndex += n));
  }

  currentSlide(n) {
    this.displaySlide((this.slideIndex = n));
  }

  addNavigationListeners() {
    document
      .querySelector(".content_carousel > .prev")
      .addEventListener("click", () => {
        this.shiftSlide(-1);
      });
    document
      .querySelector(".content_carousel > .next")
      .addEventListener("click", () => {
        this.shiftSlide(1);
      });
    const dots = document.getElementsByClassName("dot");
    let i = 1;
    for (const dot of dots) {
      const index = i;
      dot.addEventListener("click", () => {
        this.currentSlide(index);
      });
      i++;
    }
  }
}
