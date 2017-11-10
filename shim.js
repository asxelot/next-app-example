import { Promise } from 'es6-promise'

global.requestAnimationFrame = cb => setTimeout(cb, 0)
global.Promise = Promise
