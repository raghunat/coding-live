var Viewer = {
  ToggleSelectable: function(selectable) {
    if (selectable) {
      document.querySelector('.viewer').style.pointerEvents = "auto";
    } else {
      document.querySelector('.viewer').style.pointerEvents = "none";
    }
  }
}
