function toggleMenu() {
    var items = document.querySelectorAll('#menu-container .menu');
    items.forEach(function(item) {
      item.classList.toggle('active');
    });
}

document.addEventListener('click', function(event) {
    var menuContainer = document.getElementById('menu-container');
    var targetElement = event.target;
    var isClickInsideMenu = menuContainer.contains(targetElement);
    if (!isClickInsideMenu) {
      var activeMenus = document.querySelectorAll('#menu-container .menu.active');
      if (activeMenus.length > 0) {
        toggleMenu();
      }
    }
});
var video = document.getElementById('video-background');
video.addEventListener('ended', function() {
    video.play();
});
video.play();