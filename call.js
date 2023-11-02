const {cjsMinus, cjsPlus }= require('./cjsMod.js')

let a = cjsPlus(2,3);
let b = cjsMinus(2,3);

import { emsMinus, emsPlus } from './emsMod.mjs';
let c = emsPlus(2,3)
let d = emsMinus(2,3)


console.log(a,b,c,d)