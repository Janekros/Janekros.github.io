/*function addJsonOnScrollBottom() {
    var windowHeight = window.outerHeight;
    var actualScrollPos = 
};*/

window.addEventListener('scroll', function () {
    doKonsoli();
});

function doKonsoli() {
    if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight) {
        ajax('GET', 'https://jsonplaceholder.typicode.com/users');
    }
}