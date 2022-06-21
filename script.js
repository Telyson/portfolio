var typed = new Typed('.typing', {
    strings:['Web Designer','Web Developer','Graphics Designer'],
    typeSpeed: 100,
    BackSpeed:60,
    loop:true
})


const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for (let i = 0; i < totalNavList; i++) {

        const a = navList[i].querySelector('a');

        a.addEventListener("click", function() {

            for(let i = 0; i < totalSection; i++) {
                allSection[i].classList.remove("back-section");
            }

            for(let j = 0; j<totalNavList; j++) {
                if(navList[j].querySelector("a").classList.contains("active")) {
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);

            if(window.innerWidth < 1200) {
                asideSectionToggleBtn();
            }
        })
            
    }

    function showSection(element) {
        for(let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }

    // document.querySelector(".hire-me").addEventListener("click", ()=> {
    //     showSection(this);
    //     update
    // })

    const navToggleBtn = document.querySelector(".nav-toggle"),
        aside = document.querySelector(".aside");

        navToggleBtn.addEventListener("click", () => {
            asideSectionToggleBtn();
        })

        function asideSectionToggleBtn() {
            aside.classList.toggle("open");
            navToggleBtn.classList.toggle("open");

            for(let i = 0; i<totalSection; i++) {
                allSection[i].classList.toggle("open")
            }
        }