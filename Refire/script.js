var loading = document.querySelector(".loading");
var growth = document.querySelector(".loader-page h1");
var topNavBar = document.querySelector(".page1-nav")
var follow = document.querySelector("#follow");
var followContent = document.querySelector("#follow p");
var xValue = document.querySelector(".page1-nav2-subnav2 h6");
var yValue = document.querySelector(".page1-nav2-subnav2 h5");
var video = document.getElementById("myVideo");
var page4VideoBlock = document.querySelector(".page4-videoblock-poster")
var page4VideoBlockBlur = document.querySelector(".page4-videoblock-blur")
var page4VideoContainer = document.querySelector(".page4-video-container")
var page4video = document.querySelector("#page4-video")
var closePage4Video = document.querySelector(".page4-video-close-tag-container p")
var page5CenterAnimatedLineElement = document.querySelector(".page5-center-animated-line-element")
var page5CenterNavContainer = document.querySelector(".page5-center-nav-container")
var page6Card1 = document.querySelector(".page6-card1")
var page6Card2 = document.querySelector(".page6-card2")
var page6Card3 = document.querySelector(".page6-card3")



document.addEventListener("click", function () {
    video.muted = false;
});




document.addEventListener("mousemove", function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var followX = mouseX - (follow.offsetWidth / 2);
    var followY = mouseY - (follow.offsetHeight / 2);
    gsap.to("#follow", {
        left: followX,
        top: followY,
        skew:true
    })
    xValue.textContent = "X . " + mouseX;
    yValue.textContent = "Y . " + mouseY;
});

var grow = 0;
gsap.to(".loading", {
    width: "97%",
    duration: 4,
    delay: 1
});
gsap.to(".blur", {
    left: "5%",
    duration: 2,
    repeat: 1,
});
gsap.to(".loader-page h1", {
    duration: 1.9,
    filter: "blur(0px)"
});
gsap.to(".loader-page h1", {
    left: "91%",
    duration: 4,
    delay: 1.0001,
});

var int = setInterval(function () {
    if (grow <= 100) {
        var num = grow++;
        growth.innerHTML = num + "%";
    }
}, 44);

gsap.to(".loader-page", {
    transform: "translateY(-100%)",
    // display:"none",
    delay: 4.7,

})


//                                   *PAGE 1 ANIMATION WORK STARTED*


var tl = gsap.timeline()

tl.from(".page1-bottom-right-container h2", {
    delay: 6,
    y: 10,
    opacity: 0,
    duration: 2,
    stagger: .2,
})



var page1BottomCenterTextContainer = document.querySelector(".page1-bottom-center-text-container p").textContent
var clutter = ""

var page1BottomCenterTextContainerSplitedText = page1BottomCenterTextContainer.split(" ")

page1BottomCenterTextContainerSplitedText.forEach(function (elem, index, array) {
    clutter += `<span>${elem}</span>`
    if (index !== array.length - 1) {
        clutter += " "
    }
});

var page1BottomCenterTextContainerP = document.querySelector(".page1-bottom-center-text-container p").innerHTML = clutter

gsap.from(".page1-bottom-center-text-container p span", {
    delay: 6.2,
    y:20,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
})
gsap.from(".page1-bottom-right-container p", {
    delay: 6.2,
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
})

gsap.from(".page1-sound-text-cantain p", {
    delay: 6.1,
    x: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
})
gsap.from(".page1-bottom-right-blur-text-container", {
    delay: 6.1,
    x: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
})
gsap.from(".page1-nav2-subnav2", {
    delay: 6.16,
    y: 3,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
})
gsap.from(".page1-nav2-subnav1", {
    delay: 6.16,
    y: 3,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
})


//                                                 *PAGE 1 ANIMATION COMPLETED*

//                                                 *PAGE 2 ANIMATION STARTED*

var page2LeftParagraphContentContainer = document.querySelector(".page2-left-paragraph-content-container p").textContent;

var clutter2 = "";

var page2LeftParagraphContentContainerSplitedText = page2LeftParagraphContentContainer.split(" ");

page2LeftParagraphContentContainerSplitedText.forEach(function (dets, index, array) {
    clutter2 += `<span>${dets}</span>`;
    if (index !== array.length - 1) {
        clutter2 += " ";
    }
});

var page2LeftParagraphContentContainerSplitedTextH2 = document.querySelector(".page2-left-paragraph-content-container p").innerHTML = clutter2;

gsap.from(".page2-left-paragraph-content-container p span", {
    y: 20,
    opacity: 0,
    duration: 2,
    stagger: 0.01,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        // markers:true,
        start: "top 30%",
        end: "top 30%",
        // scrub:2,
        pin: true,
    }
})

//                                                           *PAGE2 ANIMATION COMPLETED*


gsap.to(".page3-top-line .page3-top-line-element ", {
    width: "100%",
    duration: 1,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        // markers:true,
        start: "top 30%",
        end: "top 30%",
        scrub: 5,
        // pin:true,
    }
})


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.page3-number-container',
        scroller:'body',
        start:'top 15%',
        end:  'top -130%',
        // markers:true,
        scrub:3,
        pin:".page3-number-container",
      }
})

tl2.to("#page3-changing-number-2",{
    bottom:"10%",
    // dealy:2,    
})

tl2.to("#page3-changing-number-3",{
    bottom:"10%",
    // dealy:20
})




//                                                                      *.page3-1st-subpage STARTED*


gsap.to(".page3-1st-subpage-top-line .page3-1st-subpage-top-line-element", {
    width: "100%",
    duration: 1,
    scrollTrigger: {
        trigger: ".page3-1st-subpage",
        scroller: "body",
        // markers:true,
        start: "top 30%",
        end: "top 30%",
        scrub: 5,
        // pin:true,
    }
})


//                                                                      *.page3-2nd-subpage STARTED*

gsap.to(".page3-2nd-subpage-top-line .page3-2nd-subpage-top-line-element", {
    width: "100%",
    duration: 1,
    scrollTrigger: {
        trigger: ".page3-2nd-subpage",
        scroller: "body",
        // markers:true,
        start: "top 30%",
        end: "top 30%",
        scrub: 5,
        // pin:true,
    }
})

//                                                                         *PAGE3-2ND-SUBPAGE COMPLETED*

//                                                                      *PAGE4 VIDEO WORK START*

page4VideoBlock.addEventListener("mouseenter", function(){
    page4VideoBlockBlur.style.scale = 0.9
    follow.style.height = "3vh"
    follow.style.width = "3vh"

})
page4VideoBlock.addEventListener("mouseleave", function(){
    page4VideoBlockBlur.style.scale = 1
    follow.style.height = "5vh"
    follow.style.width = "5vh"


})

page4VideoBlock.addEventListener("click", function(){
    page4VideoContainer.style.zIndex = 2
    page4video.Autoplay = true
    topNavBar.style.zIndex = 0
    page4VideoContainer.style.position = "fixed"
    
})
page4video.addEventListener("mouseenter", function(){
    follow.style.scale = 2
    
})

closePage4Video.addEventListener("click", function(){
    page4VideoContainer.style.zIndex = -2
    page4video.Autoplay = false
    topNavBar.style.zIndex = 9999999
    page4VideoContainer.style.position = "absolute"
    follow.style.scale = 1


})

closePage4Video.addEventListener("mouseenter", function(){
    follow.style.scale = 0.5
})
//                                                                      *PAGE4 VIDEO WORK COMPLETED*
//                                                                         *PAGE4 WORK COMPLETED*
//                                                                          *PAGE5 WORK STARTED*

gsap.to(".page5-sliding-top-nav h1, .page5-sliding-top-nav i",{
    transform:"translateX(-100%)",
    duration:10,
    repeat:-1,
    ease:"linear",
    scrollTrigger:{
        scroller:"body",
        trigger:".page4",
        // markers:true,
        start:"30%",
        end:"30%"
    }
})


gsap.to(".page5-center-animated-line-element",{
    width:"100%",
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:".page4-bottom-nav",
        // markers:true,
        start:"top 0%",
        end:"0%"
    }

})

gsap.from(".page5-center-nav-container p",{
    y:20,
    opacity: 0,
    overflow: "hidden",
    // duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:".page4-bottom-nav",
        // markers:true,
        start:"top 10%",
        end:"top 10%"
    }

})

var tlpage5 = gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".page5-sliding-top-nav",
        // markers:true,
        start:"top 10%",
        end:"top 10%"
    }
})
tlpage5.from(".page5-bottom-container-element1 h1",{
    y:80,
    ease:1,
    opacity: 0,
    overflow: "hidden",
    duration:1,
},"page5")
tlpage5.from(".page5-bottom-container-element1-icon i",{
    x:-20,
    ease:1,
    opacity: 0,
    overflow: "hidden",
    duration:1,    
    delay:0.5
},"page5")
tlpage5.from(".page5-bottom-container-element2",{
    y:30,
    ease:1,
    opacity: 0,
    overflow: "hidden",
    duration:1,    
    stagger:10,
    delay:1
},"page5")
//                                                                          *PAGE5 WORK COMPLETED*
//                                                                           *PAGE6 WORK STARTED *

gsap.from(".page6-card-container",{
    scaleY: 0,
    opacity:0,
    duration:1,
    transformOrigin:"bottom",
    scrollTrigger:{
        scroller:"body", 
        trigger:".page5-center-animated-line",
        start:"top 10%",
        end:"top 10%"
    }
})

gsap.to(".page6-card-animated-line-element",{
    width:"100%",
    duration:1,
    scrollTrigger:{
        scroller:"body", 
        trigger:".page6",
        start:"top top",
        end:"top 0%",
        // markers:true
    }
})

page6Card1.addEventListener("mouseenter", function(){
    this.style.borderRadius = "20px";
    page6Card2.style.filter = "blur(1.5px)"
    page6Card3.style.filter = "blur(1.5px)"
})
page6Card1.addEventListener("mouseleave", function(){
    this.style.borderRadius = "0px"
    page6Card2.style.filter = "blur(0px)"
    page6Card3.style.filter = "blur(0px)"
})

page6Card2.addEventListener("mouseenter", function(){
    this.style.borderRadius = "20px"
    page6Card1.style.filter = "blur(1.5px)"
    page6Card3.style.filter = "blur(1.5px)"
})
page6Card2.addEventListener("mouseleave", function(){
    this.style.borderRadius = "0px"
    page6Card1.style.filter = "blur(0px)"
    page6Card3.style.filter = "blur(0px)"
})
page6Card3.addEventListener("mouseenter", function(){
    this.style.borderRadius = "20px"
    page6Card1.style.filter = "blur(1.5px)"
    page6Card2.style.filter = "blur(1.5px)"
})
page6Card3.addEventListener("mouseleave", function(){
    this.style.borderRadius = "0px"
    page6Card1.style.filter = "blur(0px)"
    page6Card2.style.filter = "blur(0px)"
})
//                                                                          *PAGE6 WORK COMPLETED*
//                                                                           *PAGE7 WORK STARTED *
gsap.to(".page7 img",{
    width:"100%",
    duration:1,
    scrollTrigger:{
        scroller:"body", 
        trigger:".page7",
        start:"top 70%",
        end:"top -35%",
        // markers:true,
        scrub:1
    }
})
//                                                                          *PAGE7 WORK COMPLETED*
//                                                                           *PAGE8 WORK STARTED *

gsap.to(".page8-sliding-paragraph-container h1, .page8-sliding-paragraph-container i",{
    transform:"translateX(-100%)",
    duration:10,
    repeat:-1,
    ease:"linear",
    scrollTrigger:{
        scroller:"body",
        trigger:".page8",
        // markers:true,
        start:"0%",
        end:"0%"
    }
})
//                                                                          *PAGE8 WORK COMPLETED*
//                                                                           *PAGE9 WORK STARTED *
gsap.from(".page9-right-img-container",{
    scaleY: 0,
    opacity:0,
    duration:1,
    transformOrigin:"bottom",
    scrollTrigger:{
        scroller:"body", 
        trigger:".page8-animation-line-down-element-container",
        // markers:true,
        start:"top 0%",
        end:"top 0%"
    }
})

var page9LeftHeadingContainer = document.querySelector(".page9-left-paragraph-heading-container h2").textContent
var clutterPage9 = ""

var page9LeftHeadingContainerSplitedText = page9LeftHeadingContainer.split(" ")

page9LeftHeadingContainerSplitedText.forEach(function (elem, index, array) {
    clutterPage9 += `<span>${elem}</span>`
    if (index !== array.length - 1) {
        clutterPage9 += " "
    }
});

var page9LeftHeadingContainerH2 = document.querySelector(".page9-left-paragraph-heading-container h2").innerHTML = clutterPage9

gsap.from(".page9-left-paragraph-heading-container h2 span",{
    y:30,
    opacity: 0,
    duration:1,    
    stagger:0.01,
    delay:1,
    scrollTrigger:{
        scroller:"body", 
        trigger:".page8-sliding-paragraph-container",
        // markers:true,
        start:"top 10%",
        end:"top 10%"
    }
})

gsap.from(".page9-left-paragraph-text-container p",{
    y:30,
    opacity: 0,
    duration:1,    
    stagger:0.01,
    delay:1,
    scrollTrigger:{
        scroller:"body", 
        trigger:".page9",
        start:"top 30%",
        end:"top 30%"
    }
})
gsap.from(".page9-left-paragraph-bottom-text-container a",{
    y:30,
    opacity: 0,
    duration:1,    
    stagger:0.01,
    delay:1,
    scrollTrigger:{
        scroller:"body", 
        trigger:".page9",
        start:"top -8%",
        end:"top -8%"
    }
})
//                                                                          *PAGE9 WORK COMPLETED*
//                                                                          *PAGE10 WORK STARTED *
gsap.to(".page10-top-container-animation-line-element",{
    width:"100%",
    ease:"in-out",
    scrollTrigger:{
        scroller:"body", 
        trigger:".page10",
        start:"top 65%",
        end:"top 65%"
    }
})


gsap.fromTo(
    ".page10-card1-bottom-container-subcontainer2-element1 h4 , #page10-card3-animation-text2 , #page10-card3-animation-text3",
    {
      transform: "translateY(150%)",
      // opacity:0,
    },
    {
      transform: "translateY(-100%)",
      duration: 0.1,
      repeat: 4,
      ease: "linear",
      delay: 0.8,
      scrollTrigger:{
        scroller:"body", 
        trigger:".page10-card3",
        start:"top 40%",
        end:"top 40%",
        // markers:true
      }
    }
  );

   
gsap.to(".page10-card1-bottom-container-subcontainer2-element1 h4 , #page10-card3-animation-text2 , #page10-card3-animation-text3",{
    transform:"translateY(0%)",
    delay:1.9,
    scrollTrigger:{
        scroller:"body", 
        trigger:".page10-card3",
        start:"top 40%",
        end:"top 40%",
        // markers:true
      }
})

gsap.from(".page10-card1-bottom-container-subcontainer2-element2 h4 , #page10-card3-animation-text4",{
    transform:"translateY(100%)",
    duration:1,
    delay:2.2,
    scrollTrigger:{
        scroller:"body", 
        trigger:".page10-card3",
        start:"top 40%",
        end:"top 40%",
        // markers:true
      }
})

gsap.from(".page10-card1-bottom-container-subcontainer2-element3 h4",{
    transform:"translateY(100%)",
    duration:1,
    delay:2.6,
    scrollTrigger:{
        scroller:"body", 
        trigger:".page10-card3",
        start:"top 40%",
        end:"top 40%",
        // markers:true
      }
})

//                                                                          *PAGE10 WORK COMPLETED*
//                                                                           *PAGE11 WORK STARTED *

gsap.from(".page11-left-container p , a",{
    transform:"translateY(100%)",
    opacity: 0,
    duration:1,    
    // stagger:0.01,
    scrollTrigger:{
        scroller:"body", 
        trigger:".page11",
        start:"top 60%",
        end:"top 30%",
        // markers:true
    }
})

var page11RightContainer = document.querySelector(".page11-right-container p").textContent
var clutterPage11 = ""

var page11RightContainerSplitedText = page11RightContainer.split(" ")

page11RightContainerSplitedText.forEach(function (elem, index, array) {
    clutterPage11 += `<span>${elem}</span>`
    if (index !== array.length - 1) {
        clutterPage11 += " "
    }
});

var page11RightContainerParagraph = document.querySelector(".page11-right-container p").innerHTML = clutterPage11

gsap.from(".page11-right-container p span",{
    y:30,
    opacity: 0,
    duration:2,    
    stagger:0.06,
    scrollTrigger:{
        scroller:"body", 
        trigger:".page11",
        start:"top 60%",
        end:"top 30%",
    }
})
//                                                                          *PAGE11 WORK COMPLETED*
//                                                                           *PAGE12 WORK STARTED *


var page12Nav = document.querySelector(".page12-nav")
var page12NavP = document.getElementById("page12-p-tag")
var page12NavElementContainer = document.querySelector(".page12-nav-center-element-container")
var page12NavCenterElement2I = document.querySelector(".page12-nav-center-element-2 i")
var page12Nav1 = document.querySelector("#page12-nav1")
var page12Nav2 = document.querySelector("#page12-nav2")
var page12Nav3 = document.querySelector("#page12-nav3")
var page12Nav4 = document.querySelector("#page12-nav4")
var page12Nav5 = document.querySelector("#page12-nav5")
var page12Nav6 = document.querySelector("#page12-nav6")
var page12Nav7 = document.querySelector("#page12-nav7")
var page12NavImg = document.querySelector(".page12-nav1-img")
var page12NavImg1 = document.querySelector("#img1-container")
var page12NavImg2 = document.querySelector("#img2-container")
var page12NavImg3 = document.querySelector("#img3-container")
var page12NavImg4 = document.querySelector("#img4-container")
var page12NavImg5 = document.querySelector("#img5-container")
var page12NavImg6 = document.querySelector("#img6-container")
var page12NavImg7 = document.querySelector("#img7-container")

var page12page12Nav2ElementContainer = document.querySelector("#page12-nav2-center-element-container")
var page12page12Nav2ElementContainerparagraph = document.querySelector("#page12-nav2-center-element-container p")
var page12page12Nav2ElementContainericon = document.querySelector("#page12-nav2-center-element-container i")

var page12page12Nav3ElementContainer = document.querySelector("#page12-nav3-center-element-container")
var page12page12Nav3ElementContainerparagraph = document.querySelector("#page12-nav3-center-element-container p")
var page12page12Nav3ElementContainericon = document.querySelector("#page12-nav3-center-element-container i")

var page12page12Nav4ElementContainer = document.querySelector("#page12-nav4-center-element-container")
var page12page12Nav4ElementContainerparagraph = document.querySelector("#page12-nav4-center-element-container p")
var page12page12Nav4ElementContainericon = document.querySelector("#page12-nav4-center-element-container i")

var page12page12Nav5ElementContainer = document.querySelector("#page12-nav5-center-element-container")
var page12page12Nav5ElementContainerparagraph = document.querySelector("#page12-nav5-center-element-container p")
var page12page12Nav5ElementContainericon = document.querySelector("#page12-nav5-center-element-container i")

var page12page12Nav6ElementContainer = document.querySelector("#page12-nav6-center-element-container")
var page12page12Nav6ElementContainerparagraph = document.querySelector("#page12-nav6-center-element-container p")
var page12page12Nav6ElementContainericon = document.querySelector("#page12-nav6-center-element-container i")

var page12page12Nav7ElementContainer = document.querySelector("#page12-nav7-center-element-container")
var page12page12Nav7ElementContainerparagraph = document.querySelector("#page12-nav7-center-element-container p")
var page12page12Nav7ElementContainericon = document.querySelector("#page12-nav7-center-element-container i")



gsap.to(".page12-animation-line-element",{
    width:"100%",
    duration:1,
    ease:"in-out",
    scrollTrigger:{
        scroller:"body", 
        trigger:".page12",
        start:"top 65%",
        end:"top 65%",
        // markers:true
    }
})



var page12Navs = document.querySelectorAll(".page12-nav");

function mouseMove(event) {
    var extra = this.getBoundingClientRect();

    var mouseX = event.clientX;
    var mouseY = event.clientY - extra;
    var imgWidth = this.querySelector('.page12-nav1-img').offsetWidth;
    var imgX = mouseX - (imgWidth / 2);
    var imgY = mouseY - 180;

    var container = this.querySelector('.page12-nav-center-element-container');
    var paragraph = container.querySelector('p');
    var icon = container.querySelector('i');
    this.querySelector(".page12-nav1-img").style.pointerEvents = "none"

    this.querySelector('.page12-nav1-img').style.opacity = "1";
    container.style.backgroundColor = "black";
    paragraph.style.color = "white";
    icon.style.color = "white";
    icon.style.rotate = "-40deg";

    gsap.to(this.querySelector('.page12-nav1-img'), {
        left: imgX,
        top: mouseY,
        transition: "all ease 0.2s",
    });
}

function mouseLeave() {
    this.querySelector('.page12-nav1-img').style.opacity = "0";
    this.querySelector('.page12-nav-center-element-container').style.backgroundColor = "white";
    this.querySelector('p').style.color = "black";
    this.querySelector('i').style.color = "black";
    this.querySelector('i').style.rotate = "0deg";
}

page12Navs.forEach(function(navElement) {
    navElement.addEventListener("mousemove", mouseMove);
    navElement.addEventListener("mouseleave", mouseLeave);
});













    