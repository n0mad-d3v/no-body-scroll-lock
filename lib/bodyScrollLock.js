(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.bodyScrollLock = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var disableBodyScroll = exports.disableBodyScroll = function disableBodyScroll(targetElement, options) {
    console.log('disableBodyScroll has been disabled');
    alert('disableBodyScroll has been disabled');
  };
  // Adopted and modified solution from Bohdan Didukh (2017)
  // https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

  var clearAllBodyScrollLocks = exports.clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
    console.log('clearAllBodyScrollLocks has been disabled');
    alert('clearAllBodyScrollLocks has been disabled');
  };

  var enableBodyScroll = exports.enableBodyScroll = function enableBodyScroll(targetElement) {
    console.log('enableBodyScroll has been disabled');
    alert('enableBodyScroll has been disabled');
  };
});

