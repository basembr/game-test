window.popup=function(o){if(o.dom){var t=o.dom;o.width&&(t.querySelector(".popup_container").style.width=o.width),o.height&&(t.querySelector(".popup_container").style.height=o.height),o.minWidth&&(t.querySelector(".popup_container").style.minWidth=o.minWidth),o.minHeight&&(t.querySelector(".popup_container").style.minHeight=o.minHeight),o.maxWidth&&(t.querySelector(".popup_container").style.maxWidth=o.maxWidth),o.maxHeight&&(t.querySelector(".popup_container").style.maxHeight=o.maxHeight),t.addEventListener("mousedown",function(e){i(o.dosomethingClose)}),t.querySelector(".popup_container").addEventListener("mousedown",function(e){e.stopPropagation()}),t.querySelector(".popup_close")&&t.querySelector(".popup_close").addEventListener("click",function(){i(o.dosomethingClose)}),this.show=function(e,o){e&&e(t),t.classList.remove("popup_hide"),document.body.classList.add("popup_show"),t.childNodes,t.querySelector(".popup_close")&&t.querySelector(".popup_close").addEventListener("click",function(){i(o)})},this.hide=i}else console.error("popup: hide function not set dom object");function i(e){e&&e(t),t.classList.add("popup_hide"),document.body.classList.remove("popup_show")}};

var popupDialog = new popup({
  dom: document.querySelector('#aiuto-1'),
  width: '320px',
  height: '480px'
});

var popupDialog_1 = new popup({
  dom: document.querySelector('#aiuto-2'),
  width: '320px',
  height: '480px'
});

document.querySelector('#aiuto-2-button').addEventListener('click', function () {
  popupDialog_1.show();
});

var popupDialog_2 = new popup({
  dom: document.querySelector('#soluzione'),
  width: '320px',
  height: '480px'
});

document.querySelector('#soluzione-button').addEventListener('click', function () {
  popupDialog_2.show();
});


