// @flow
// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

export interface BodyScrollOptions {
  reserveScrollBarGap?: boolean;
  allowTouchMove?: (el: any) => boolean;
}

export const disableBodyScroll = (targetElement: any, options?: BodyScrollOptions): void => {
  console.log('disableBodyScroll has been disabled');
  alert('disableBodyScroll has been disabled');
};

export const clearAllBodyScrollLocks = (): void => {
  console.log('clearAllBodyScrollLocks has been disabled');
  alert('clearAllBodyScrollLocks has been disabled');
};

export const enableBodyScroll = (targetElement: any): void => {
  console.log('enableBodyScroll has been disabled');
  alert('enableBodyScroll has been disabled');
};
