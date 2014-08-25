var Presenter = {
  _selectable: false,
  ToggleSelectable: function() {
    if (this._selectable) {
      this._selectable = false;
      return false;
    } else {
      this._selectable = true;
      return true;
    }
  }
}
