let nav = document.querySelector('.menu-mb');
let btnmenu = document.getElementById('btnmenu')
let slider = document.getElementById('slider');
let homepage = document.querySelector('.homepage');
let heightSlider = slider.clientHeight;
let height = document.querySelector('header').offsetHeight;
btnmenu.onclick = function () {

    nav.classList.toggle('active');
    this.classList.toggle('change');
    homepage.classList.toggle('active');

}
// header 
let header = document.querySelector('header');

let totop = document.querySelector('.top');

document.addEventListener('scroll', function (e) {

    let scrollY = window.pageYOffset;
    let window1 = window.innerHeight;

    if (scrollY >= heightSlider - height) {

        header.classList.add('active')
    }
    else {
        header.classList.remove('active')
    }
    if (scrollY > window1) {
        totop.classList.add('active')
    }
    else {
        totop.classList.remove('active')
    }
})
// let listSlider = document.querySelectorAll('.slider__item');
// let currentSlider = 0;
// let number = document.querySelector(' .slider__bottom-paging .number');
// let doot = document.querySelectorAll('.slider__bottom-paging .doted ul li ')
// listSlider.forEach(function (itemSlider, index) {
//     if (itemSlider.classList.contains('active')) {
//         currentSlider = index;

//     }
// })
// let btn_next = document.querySelector('.next');
// function showNumber(index) {
//     number.innerHTML = (index).toString().padStart(2, '0');
// }
// showNumber(currentSlider + 1);
// btn_next.addEventListener('click', function () {
//     if (currentSlider < listSlider.length - 1) {
//         // listSlider[currentSlider].classList.remove('active');
//         // listSlider[currentSlider+1].classList.add('active');
//         // currentSlider++;
//         goto(currentSlider + 1);
//     }
//     else {
//         // listSlider[currentSlider].classList.remove('active');
//         // listSlider[0].classList.add('active');
//         // currentSlider=0;
//         goto(0);
//     }

// })

// let btn_prev = document.querySelector('.prev');
// btn_prev.addEventListener('click', function () {
//     if (currentSlider > 0) {
//         // listSlider[currentSlider].classList.remove('active');
//         // listSlider[currentSlider -1].classList.add('active');
//         // currentSlider--;
//         goto(currentSlider - 1);

//     }
//     else {
//         // listSlider[currentSlider].classList.remove('active');
//         // listSlider[listSlider.length -1].classList.add('active');
//         // currentSlider=listSlider.length - 1;
//         goto(listSlider.length - 1);
//     }

// })



// doot[currentSlider].classList.add('active');



// function goto(index) {
//     listSlider[currentSlider].classList.remove('active');
//     listSlider[index].classList.add('active');
//     doot[currentSlider].classList.remove('active');
//     doot[index].classList.add('active');
//     currentSlider = index;
//     showNumber(currentSlider + 1);


// }
// doot.forEach(function (li, index) {
//     li.addEventListener('click', function () {
//         goto(index);
//     })
// })



///// menu 
let menu = document.querySelectorAll('header .menu li a ');

let sections = [];
function removeActiveMenu() {
    menu.forEach(function (menu_active, menu_index) {
        menu_active.classList.remove('active')
    })

}
menu.forEach(function (element, index) {
    let href = element.getAttribute('href');
    let className = href.replace('#', '');
    let section = document.querySelector('.' + className);
    console.log(section)
    sections.push(section);
    element.addEventListener('click', function (e) {
        e.preventDefault();

        let positisonSection = section.offsetTop;
        window.scrollTo({
            top: positisonSection - height,
            behavior: 'smooth'
        })
        removeActiveMenu()
        element.classList.add('active')
    })

})


///// back to top
let backToTop = document.querySelector('.backtotop');
let positionProduct = document.querySelector('.products').offsetTop;
backToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
window.addEventListener('scroll', function (e) {
    let positionScroll = window.pageYOffset;

    sections.forEach(function (section, index) {
        let positisonSections = section.offsetTop;
        if (positionScroll > positisonSections - height) {

            removeActiveMenu();
            menu[index].classList.add('active')

        }
        else {
            menu[index].classList.remove('active')
        }
    })
    if (positionScroll > positionProduct) {
        backToTop.style.display = 'block'
    }
    else {
        backToTop.style.display = 'none'
    }
})
//// video
let btn_play = document.querySelectorAll('.video__item-img');
let popup_video = document.querySelector('.popup_video');
let close_popup = document.querySelector('.close');
let iframe = document.querySelector('iframe');
btn_play.forEach(function (button, index) {
    button.addEventListener('click', function () {
        let id_video = button.getAttribute('data-id-video');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + id_video + '?autoplay=1')
        popup_video.style.display = 'flex';
    })
})
close_popup.addEventListener('click', function () {
    iframe.setAttribute('src', '')
    popup_video.style.display = 'none'
})
///// 7TE5T5KC92A 4CCGI83vOVo 3w5sepozKig
//////tag 
let tags = document.querySelectorAll('.tag');
let tag_list = document.querySelectorAll('.news-tags__list ')
tags.forEach(function (tag, index) {
    tag.addEventListener('click', function (e) {
        let dataId = tag.getAttribute('data-id');
        tag_list.forEach(function (tags_list, index) {
            tags_list.classList.remove('active')
        })


        let tag_active = document.getElementById(dataId);
        tag_active.classList.add('active');
        tags.forEach(function (item, index) {
            item.classList.remove('active');
        })

        this.classList.add('active');

    })
})

window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
        nav.classList.remove('active')
        btnmenu.classList.remove('change');
        homepage.classList.remove('active');
    }

});
$(document).ready(function () {
    let $carousel = $('.slider__item-wrap');
    $carousel.flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        draggable: true,
        on: {
            ready: function () {
                let dotted = $('.flickity-page-dots');
                paging = $('.slider__bottom-paging .dotted');
                dotted.appendTo(paging);
            },
            change: function (index) {
                let number = $('.slider__bottom-paging .number');
                let indexPage = index + 1;
                number.text(indexPage.toString().padStart(2, 0));
            }
        }
    })
    $('.slider__bottom-control .prev').click(function (e) {
        e.preventDefault();
        $carousel.flickity('previous')
    });
    $('.slider__bottom-control .next').click(function (e) {
        e.preventDefault();
        $carousel.flickity('next')
    });

    let $carousel1 = $('.main-carousel');
    $carousel1.flickity({
        prevNextButtons: false,
        wrapAround: true,
        pageDots: false,
        autoPlay: 1500,
        pauseAutoPlayOnHover: false,
        fullscreen: true
    })


});


//photo swipe 
var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function (index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

initPhotoSwipeFromDOM('.carousel-img');
