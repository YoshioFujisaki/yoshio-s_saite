'use strict';
{

  const intSec = document.querySelector(".title")

  const contSec = [...document.querySelectorAll("section")];

  const setItemActive = (entries) => {
    // console.log(entries);
    entries.forEach((entry) => {
      // console.log(entry);
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add("active");
        }else {
          entry.target.classList.remove("active");
        }
      });
    });
  };

  const options = {};

  const observer = new IntersectionObserver(setItemActive, options);
  observer.observe(intSec);


  contSec.forEach((item, index) => {
    console.log(item, index);
    // if(index % 2 == 0) {
    //   item.classList.add("slid-from-left");
    // }else {
    //   item.classList.add("slid-form-right");
    // }
    observer.observe(item);
  });

}
