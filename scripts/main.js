// Bootstrap import
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Other import
import loaderFullWhAnim from "../scss/components/loader/loader-full-wh-anim/loader-full-wh-anim.js";
import addCHScaleEvents from '../scss/components/cursor/cursor-hover-scale/cursor-hover-scale.js';
import scrollToTopBTNAnimEvents from "../scss/components/go-to-top/scroll-to-top-btn-anim/scroll-to-top-btn-anim.js";
import addStickyHeaderTopEvents from "../scss/components/sticky/sticky-header-top-anim/sticky-header-top-anim.js";
import addNavbarRMCEvents from '../scss/components/navigation/navbar-responsive-menu-center/navbar-responsive-menu-center.js';
import addRollingTextEvents from "../scss/components/text/rolling-text/rolling-text.js";
// Animations import starts
import animYUp from "../scss/components/animation/anim-y-up/anim-y-up.js";
import animYUpDelayed from "../scss/components/animation/anim-y-up-delayed/anim-y-up-delayed.js";
import animOpacityYUpDelayed from "../scss/components/animation/anim-opacity-y-up-delayed/anim-opacity-y-up-delayed.js";
import animOpacityYUp from "../scss/components/animation/anim-opacity-y-up/anim-opacity-y-up.js";
import animOpacity from "../scss/components/animation/anim-opacity/anim-opacity.js";
import animScaleRotateX from "../scss/components/animation/anim-scale-rotate-x/anim-scale-rotate-x.js";
import animSwipInTB from "../scss/components/animation/anim-swipe-in-tb/anim-swipe-in-tb.js";
// Animation import ends
import addBannerRFWEvents from "../scss/components/banner/banner-roll-full-width/banner-roll-full-width.js";
import addBrandsISEvents from "../scss/blocks/brand/brands-img-swiper/brands-img-swiper.js";
import addTMSliderStatEvents from "../scss/blocks/testimonial/tm-slider-stat/tm-slider-stat.js";
import addFormSearchAnimEvents from "../scss/components/form/form-search-anim/_form-search-anim.js";
import addHeroLIAEvents from "../scss/blocks/hero/hero-lead-img-anim/hero-lead-img-anim.js";
import addProjectCSEvents from "../scss/blocks/project/projects-cards-scrollable/projects-cards-scrollable.js";
import addBannerRCCEvents from "../scss/components/banner/banner-roll-color-change/banner-roll-color-change.js";

gsap.registerPlugin(ScrollTrigger);

loaderFullWhAnim();
addStickyHeaderTopEvents();
scrollToTopBTNAnimEvents();
addCHScaleEvents();
addNavbarRMCEvents();
addRollingTextEvents();
// Animations starts
animYUp();
animYUpDelayed();
animOpacityYUp();
animOpacityYUpDelayed();
animOpacity();
animScaleRotateX();
animSwipInTB();
// Animations ends
addBannerRFWEvents();
addBrandsISEvents();
addTMSliderStatEvents();
addFormSearchAnimEvents();
addHeroLIAEvents();
addProjectCSEvents();
addBannerRCCEvents();