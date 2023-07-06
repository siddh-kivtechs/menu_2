const apps = document.querySelectorAll(".app");
const length = apps.length;

apps.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    // Resize the hovered app
    apps[index].style.height = '150px';
    apps[index].style.width = '150px';
    
    // Resize the neighboring apps
    if (index > 0) {
      apps[index - 1].style.height = '125px';
      apps[index - 1].style.width = '125px';
    }
    if (index < length - 1) {
      apps[index + 1].style.height = '125px';
      apps[index + 1].style.width = '125px';
    }
    
    // Resize the outer neighboring apps
    if (index > 1) {
      apps[index - 2].style.height = '110px';
      apps[index - 2].style.width = '110px';
    }
    if (index < length - 2) {
      apps[index + 2].style.height = '110px';
      apps[index + 2].style.width = '110px';
    }
  });

  item.addEventListener("mouseleave", () => {
    // Reset the size of all apps
    apps.forEach(app => {
      app.style.height = '100px';
      app.style.width = '100px';
    });
  });
});