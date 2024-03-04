const reviews = [
  {
    id: 1,
    name: "Sam smith",
    job: "Web Developer",
    img: "https://www.course-api.com/images/people/person-11.jpeg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Joy johnson",
    job: "Web Designer",
    img: "https://www.course-api.com/images/people/person-8.jpeg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "The Boss",
    img: "https://www.course-api.com/images/people/person-9.jpeg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
  let name1=document.querySelector(".Auther");
  let job=document.querySelector(".job");
  let img=document.querySelector("#person_img");
  let info=document.querySelector(".Info");
  let prebtn=document.querySelector(".prebtn");
  let nebtn=document.querySelector(".nebtn");
  let surprise_btn=document.querySelector(".random_btn");
  let currentItem = 3;
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    name1.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    name1.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
nebtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prebtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
  surprise_btn.addEventListener("click", function () {
    // console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });


