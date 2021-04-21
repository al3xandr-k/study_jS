'use strict'

import modalCallBackForm from './modules/modalCallBackForm'
import topSliderScroll from './modules/topSliderScroll'
import carousel from './modules/sliderCarousel'
import serviceCarousel from './modules/serviceCarousel'
import buttonServicesModal from './modules/buttonServicesModal'
import accorion from './modules/accorion'
import buttonScrollTop from './modules/buttonScrollTop'
import regularExpression from './modules/regularExpression'
import sendForm from './modules/sendForm'

//Modal for button call back
modalCallBackForm()

//Header section Slider top-slider
topSliderScroll()

//Service section Carousel
serviceCarousel()

//Slider Carousel
carousel.init()

//Button services section modal
buttonServicesModal()

//Accardion faq section
accorion()

//Button Scroll Top
buttonScrollTop()

//Validation Form
regularExpression()

//Send form
sendForm()