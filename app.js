const scrollTopButton = document.getElementById('scrollTopButton');

scrollTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
};



// for floating effect on all cards
document.addEventListener("DOMContentLoaded", function () {
    const cardElements = document.querySelectorAll(".card");
  
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  
    const cardObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a delay for each card animation
          setTimeout(() => {
            entry.target.classList.add("animate");
          }, entry.target.dataset.delay);
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    cardElements.forEach((card, index) => {
      // Set a data attribute for the delay (adjust the delay value as needed)
      card.dataset.delay = `${index * 150}`;
      cardObserver.observe(card);
    });
  });

  // Function to add the 'swoop-in' class to the logo after a delay
function addSwoopInClass() {
    const logo = document.querySelector(".swoop-in");
    logo.classList.add("swoop-in");
  }
  // Delay the animation by 2 seconds (adjust as needed)
  setTimeout(addSwoopInClass, 2000);

// auto carousel for testimonals

  document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonials-col");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial) => {
            testimonial.classList.remove("active");
        });
    
        testimonials[index].classList.add("active");
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function autoRotate() {
        nextTestimonial();
        setTimeout(autoRotate, 5000); // Change testimonial every 5 seconds (adjust the interval as needed)
    }

    showTestimonial(currentIndex);
    setTimeout(autoRotate, 5000); // Start auto-rotation after 5 seconds

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    prevBtn.addEventListener("click", prevTestimonial);
    nextBtn.addEventListener("click", nextTestimonial);
});




  
  
// Alt card animation - Not Used at this time

// document.addEventListener("DOMContentLoaded", function () {
//   const cardElements = document.querySelectorAll(".card-animation");

//   const options = {
//     root: null, // Use the viewport as the root
//     rootMargin: "0px",
//     threshold: 0.2, // Trigger when 20% of the element is in the viewport
//   };

//   const cardObserver = new IntersectionObserver(function (entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("animate-card"); 
//         // Stop observing the element once it's animated
//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);

//   cardElements.forEach((card) => {
//     cardObserver.observe(card);
//   });
// });



