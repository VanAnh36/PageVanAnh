// var gallery = document.querySelector('#gallery');
// var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
// var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
// var resizeAll = function () {
//     var altura = getVal(gallery, 'grid-auto-rows');
//     var gap = getVal(gallery, 'grid-row-gap');
//     gallery.querySelectorAll('.gallery-item').forEach(function (item) {
//         var el = item;
//         el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
//     });
// };
// gallery.querySelectorAll('img').forEach(function (item) {
//     item.classList.add('byebye');
//     if (item.complete) {
//         console.log(item.src);
//     }
//     else {
//         item.addEventListener('load', function () {
//             var altura = getVal(gallery, 'grid-auto-rows');
//             var gap = getVal(gallery, 'grid-row-gap');
//             var gitem = item.parentElement.parentElement;
//             gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
//             item.classList.remove('byebye');
//         });
//     }
// });
// window.addEventListener('resize', resizeAll);
// gallery.querySelectorAll('.gallery-item').forEach(function (item) {
//     item.addEventListener('click', function () {        
//         item.classList.toggle('full');        
//     });
// });
// // Khai báo mảng lưu trữ ảnh
// var imageArray = [];

// // Lưu trạng thái của các ảnh vào mảng
// gallery.querySelectorAll('img').forEach(function (item) {
//   imageArray.push(item.src);
// });

// // Lưu mảng vào localStorage
// localStorage.setItem('imageArray', JSON.stringify(imageArray));
// var gallery = document.querySelector('#gallery');
// var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
// var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
// var resizeAll = function () {
//     var altura = getVal(gallery, 'grid-auto-rows');
//     var gap = getVal(gallery, 'grid-row-gap');
//     gallery.querySelectorAll('.gallery-item').forEach(function (item) {
//         var el = item;
//         el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
//     });
// };

// // Function to save image state
// var saveImageState = function () {
//     var imageStates = {};
//     gallery.querySelectorAll('.gallery-item').forEach(function (item, index) {
//         imageStates[index] = item.classList.contains('full');
//     });
//     localStorage.setItem('imageStates', JSON.stringify(imageStates));
// };

// // Function to restore image state
// var restoreImageState = function () {
//     var imageStates = JSON.parse(localStorage.getItem('imageStates'));
//     if (imageStates) {
//         gallery.querySelectorAll('.gallery-item').forEach(function (item, index) {
//             if (imageStates[index]) {
//                 item.classList.add('full');
//             } else {
//                 item.classList.remove('full');
//             }
//         });
//     }
// };

// gallery.querySelectorAll('img').forEach(function (item) {
//     item.classList.add('byebye');
//     if (item.complete) {
//         console.log(item.src);
//     } else {
//         item.addEventListener('load', function () {
//             var altura = getVal(gallery, 'grid-auto-rows');
//             var gap = getVal(gallery, 'grid-row-gap');
//             var gitem = item.parentElement.parentElement;
//             gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
//             item.classList.remove('byebye');
//             saveImageState(); // Save image state after image load
//         });
//     }
// });

// window.addEventListener('resize', resizeAll);

// // Click event to toggle full class and save state
// gallery.querySelectorAll('.gallery-item').forEach(function (item) {
//     item.addEventListener('click', function () {
//         item.classList.toggle('full');
//         saveImageState(); // Save image state after click
//     });
// });

// // Restore image states on page load
// document.addEventListener('DOMContentLoaded', function () {
//     restoreImageState();
//     resizeAll(); // Recalculate grid layout after restoring image states
// });
var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};

// Function to save image state
var saveImageState = function () {
    var imageStates = {};
    gallery.querySelectorAll('.gallery-item').forEach(function (item, index) {
        imageStates[index] = item.classList.contains('full');
    });
    localStorage.setItem('imageStates', JSON.stringify(imageStates));
};

// Function to restore image state
var restoreImageState = function () {
var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};

// Function to save image state
var saveImageState = function () {
    var imageStates = {};
    gallery.querySelectorAll('.gallery-item').forEach(function (item, index) {
        imageStates[index] = item.classList.contains('full');
    });
    localStorage.setItem('imageStates', JSON.stringify(imageStates));
};

// Function to restore image state
var restoreImageState = function () {
    var imageStates = JSON.parse(localStorage.getItem('imageStates'));
    if (imageStates) {
        gallery.querySelectorAll('.gallery-item').forEach(function (item, index) {
            if (imageStates[index]) {
                item.classList.add('full');
            } else {
                item.classList.remove('full');
            }
        });
    }
};

// Click event to toggle full class and save state
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('full');
        saveImageState(); // Save image state after click
    });
});

// Restore image states on page load
window.addEventListener('load', function () {
    restoreImageState();
    resizeAll(); // Recalculate grid layout after restoring image states
});

// Resize event to recalculate grid layout
window.addEventListener('resize', resizeAll);