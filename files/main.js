document.addEventListener("DOMContentLoaded" , () => {
    const sections = document.querySelectorAll("section");
    const footers = document.querySelectorAll("footer");

    const options = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((elements , watcher) => {
        elements.forEach((element)=> {
            if(element.isIntersecting){
                const sectionelements = element.target.querySelectorAll("article , img , div , button");
                sectionelements.forEach((el) => {
                    el.classList.add("visible");
                });
                observer.unobserve(element.target);
            }
        });
    }, options);

    sections.forEach((section)=> observer.observe(section));
    footers.forEach((footer) => observer.observe(footer));

})
