!function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=15)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(6),n=i(2),r=Math.acos,o=function(){function t(t,e,i){this.x=0,this.y=0,this.z=0,this.x=t,this.y=e,this.z=i}return t.prototype.set=function(t,e,i){return this.x=t,this.y=e,this.z=i,this},Object.defineProperty(t.prototype,"magnitude",{get:function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"normalized",{get:function(){return new t(this.x,this.y,this.z).normalize()},enumerable:!0,configurable:!0}),t.lerp=function(t,e,i){return e.subtract(t).multiply(i).add(t)},t.prototype.angle=function(t){var e=this.magnitude*t.magnitude;return 0==e?0:r(n.clamp(this.dot(t)/e,-1,1))/Math.PI*180},t.prototype.equal=function(t){return n.equalf(this.x,t.x)&&n.equalf(this.y,t.y)&&n.equalf(this.z,t.z)},t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)},t.prototype.multiply=function(e){return new t(this.x*e,this.y*e,this.z*e)},t.prototype.divide=function(e){s.default(0!=e,"Vector3 divide n must not be 0");var i=1/e;return new t(this.x*i,this.y*i,this.z*i)},t.prototype.addSelf=function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this},t.prototype.subtractSelf=function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this},t.prototype.multiplySelf=function(t){return this.x*=t,this.y*=t,this.z*=t,this},t.prototype.divideSelf=function(t){s.default(0!=t,"Vector3 divide n must not be 0");var e=1/t;return this.x*=e,this.y*=e,this.z*=e,this},t.prototype.oppsite=function(){return this.multiply(-1)},t.prototype.normalize=function(){var t=this.magnitude;if(0==t)return this;var e=1/t;return this.x*=e,this.y*=e,this.z*=e,this},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},t.prototype.cross=function(e){return new t(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)},t.prototype.distance=function(t){var e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return Math.sqrt(Math.pow(e,2)+Math.pow(i,2)+Math.pow(s,2))},t.prototype.scale=function(e){return new t(this.x*e.x,this.y*e.y,this.z*e.z)},t.prototype.zero=function(){return this.x=0,this.y=0,this.z=0,this},t.back=new t(0,0,-1),t.down=new t(0,-1,0),t.forward=new t(0,0,1),t.left=new t(-1,0,0),t.one=new t(1,1,1),t.right=new t(1,0,0),t.up=new t(0,1,0),t.zero=new t(0,0,0),t}();e.default=o},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(5),r=i(0),o=i(4),h=i(10),a=i(3),u=i(6),m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.aspect=0,e.farClipPlane=0,e.nearClipPlane=0,e.pixelWidth=0,e.pixelHeight=0,e.fieldOfView=60,e}return s(e,t),e.prototype.render=function(){var t=new r.default(0,0,-1).normalize(),e=new r.default(0,1,0),i=t.cross(e);this.worldToCameraMatrix=new h.default(i.x,i.y,i.z,0,e.x,e.y,e.z,0,t.x,t.y,t.z,0,0,0,0,1).multiplyMatrix(h.default.fromQuaternion(this.transform.rotation)).multiplyMatrix(h.default.TRS(this.transform.position.multiply(-1),a.default.identity,r.default.one)),this.projectionMatrix=h.default.perspective(this.fieldOfView,this.aspect,this.nearClipPlane,this.farClipPlane),this.worldToViewportMatrix=this.projectionMatrix.multiplyMatrix(this.worldToCameraMatrix),this.viewportToScreenMatrix=new h.default(this.pixelWidth/2,0,0,this.transform.position.x,0,this.pixelHeight/2,0,this.transform.position.y,0,0,1,.5,0,0,0,1),this.screenToViewportMatrix=this.viewportToScreenMatrix.inverse(),this.viewportToWorldMatrix=this.worldToViewportMatrix.inverse()},e.prototype.screenToViewPoint=function(t){return this.screenToViewportMatrix.multiplyPoint(new r.default(t.x-this.pixelWidth/2,t.y-this.pixelHeight/2,t.z))},e.prototype.screenToWorldPoint=function(t){return this.viewportToWorldPoint(this.screenToViewPoint(t))},e.prototype.viewportToWorldPoint=function(t){var e=this.viewportToWorldMatrix.multiplyVector4(new o.default(t.x*t.z,t.y*t.z,-this.projectionMatrix.m33*t.z+this.projectionMatrix.m34,t.z));return new r.default(e.x,e.y,e.z)},e.prototype.worldToClipSpaceCoordinate=function(t){return this.worldToViewportMatrix.multiplyVector4(new o.default(t.x,t.y,t.z,1))},e.prototype.clipSpaceToWorldPoint=function(t){var e=this.viewportToWorldMatrix.multiplyVector4(t);return new r.default(e.x,e.y,e.z)},e.prototype.worldToViewportPoint=function(t){var e=this.worldToClipSpaceCoordinate(t);return new r.default(e.x/e.w,e.y/e.w,e.z)},e.prototype.viewportToScreenPoint=function(t){var e=this.viewportToScreenMatrix.multiplyPoint(t);return e.set(Math.round(this.pixelWidth/2+e.x),Math.round(this.pixelHeight/2+e.y),e.z)},e.prototype.worldToScreenPoint=function(t){return u.default(void 0!==this.worldToCameraMatrix,"worldToCameraMatrix is undefined"),this.viewportToScreenPoint(this.worldToViewportPoint(t))},e.main=new e,e}(n.default);e.default=m},function(t,e,i){"use strict";function s(t,e){return a(t-e)<=.01}function n(t,e,i){return t<e?e:t>i?i:t}function r(t,e,i){return t+(e-t)*i}function o(t,e){var i=t<=e?e-t:t-e;return Array(i).fill(0).map(function(t,e){return e})}function h(t,e){for(var i=[],s=Math.ceil(t.length/e),n=0;n<s;n++)i.push(t.slice(n*e,(n+1)*e));return i}Object.defineProperty(e,"__esModule",{value:!0});var a=Math.abs;e.equalf=s,e.clamp=n,e.lerp=r,e.range=o,e.chunk=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),n=Math.cos,r=Math.sin,o=Math.abs,h=Math.atan2,a=Math.PI,u=Math.asin,m=function(){function t(t,e,i,s){this.x=t,this.y=e,this.z=i,this.w=s}return Object.defineProperty(t.prototype,"eulerAngles",{get:function(){var t=-2*(this.y*this.z-this.w*this.x);return o(t)>.9999?new s.default(1.570796*t/a*180,h(-this.x*this.z-this.w*this.y,.5-Math.pow(this.y,2)-Math.pow(this.z,2))/a*180,0):new s.default(u(t)/a*180,h(this.x*this.z+this.w*this.y,.5-Math.pow(this.x,2)-Math.pow(this.y,2))/a*180,h(this.x*this.y+this.w*this.z,.5-Math.pow(this.x,2)-Math.pow(this.z,2))/a*180)},enumerable:!0,configurable:!0}),t.prototype.dot=function(t){return this.w*t.w+this.x*t.x+this.y*t.y+this.z*t.z},t.prototype.cross=function(e){return new t(this.w*e.x+this.x*e.w+this.y*e.z-this.z*e.y,this.w*e.y+this.y*e.w+this.z*e.x-this.x*e.z,this.w*e.z+this.z*e.w+this.x*e.y-this.y*e.x,this.w*e.w-this.x*e.x-this.y*e.y-this.z*e.z)},t.prototype.inverse=function(){return new t(-this.x,-this.y,-this.z,this.w)},t.euler=function(e,i,s){var o=e/2/180*a,h=i/2/180*a,u=s/2/180*a;return new t(n(h)*r(o)*n(u)+r(h)*n(o)*r(u),r(h)*n(o)*n(u)-n(h)*r(o)*r(u),n(h)*n(o)*r(u)-r(h)*r(o)*n(u),n(h)*n(o)*n(u)+r(h)*r(o)*r(u))},t.identity=new t(0,0,0,1),t}();e.default=m},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),n=function(){function t(t,e,i,s){this.x=t,this.y=e,this.z=i,this.w=s}return t.prototype.set=function(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this},t.prototype.equal=function(t){return s.equalf(this.x,t.x)&&s.equalf(this.y,t.y)&&s.equalf(this.z,t.z)&&s.equalf(this.w,t.w)},t.lerp=function(t,e,i){return e.subtract(t).multiply(i).add(t)},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z,this.w-e.w)},t.prototype.multiply=function(e){return new t(this.x*e,this.y*e,this.z*e,this.w*e)},t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z,this.w+e.w)},t}();e.default=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(8),n=i(17),r=i(18),o=function(){function t(){this.transform=new s.default,this.meshFilter=new n.default,this.meshRenderer=new r.default}return t.prototype.submit=function(){return[]},t}();e.default=o},function(t,e,i){"use strict";function s(t,e){if(!t)throw new Error(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){this.x=t,this.y=e}return t.prototype.set=function(t,e){return this.x=t,this.y=e,this},t.lerp=function(t,e,i){return e.subtract(t).multiply(i).add(t)},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y)},t.prototype.multiply=function(e){return new t(this.x*e,this.y*e)},t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)},t}();e.default=s},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=i(3),o=i(9),h=i(10),a=Math.cos,u=Math.sin,m=Math.PI,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.position=n.default.zero,e.rotation=r.default.identity,e.scale=n.default.one,e}return s(e,t),e.prototype.rotate=function(t){this.rotation=this.rotation.cross(r.default.euler(t.x,t.y,t.z))},e.prototype.rotateAround=function(t,e,i){var s=e.normalized,n=a(i/180*m),o=u(i/180*m);this.position=new h.default(Math.pow(s.x,2)*(1-n)+n,s.x*s.y*(1-n)+s.z*o,s.x*s.z*(1-n)+s.y*o,0,s.x*s.y*(1-n)+s.z*o,Math.pow(s.y,2)*(1-n)+n,s.y*s.z*(1-n)-s.x*o,0,s.x*s.z*(1-n)-s.y*o,s.y*s.z*(1-n)+s.x*o,Math.pow(s.z,2)*(1-n)+n,0,0,0,0,1).multiplyPoint(this.position.subtract(t)).add(t),this.rotation=this.rotation.cross(r.default.euler(s.x*i,s.y*i,s.z*i))},e.prototype.translate=function(t){this.position=h.default.TRS(t,r.default.identity,n.default.one).multiplyPoint(this.position)},Object.defineProperty(e.prototype,"localToWorldMatrix",{get:function(){return h.default.TRS(this.position,this.rotation,this.scale)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"worldToLocalMatrix",{get:function(){return this.localToWorldMatrix.inverse()},enumerable:!0,configurable:!0}),e}(o.default);e.default=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(){}return t}();e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),n=i(4),r=i(6),o=Math.tan,h=Math.PI,a=function(){function t(t,e,i,s,n,r,o,h,a,u,m,l,f,c,d,p){this.m11=t,this.m12=e,this.m13=i,this.m14=s,this.m21=n,this.m22=r,this.m23=o,this.m24=h,this.m31=a,this.m32=u,this.m33=m,this.m34=l,this.m41=f,this.m42=c,this.m43=d,this.m44=p}return Object.defineProperty(t.prototype,"transpose",{get:function(){return new t(this.m11,this.m21,this.m31,this.m41,this.m12,this.m22,this.m32,this.m42,this.m13,this.m23,this.m33,this.m43,this.m14,this.m24,this.m34,this.m44)},enumerable:!0,configurable:!0}),t.prototype.multiplyNumber=function(e){return new t(this.m11*e,this.m12*e,this.m13*e,this.m14*e,this.m21*e,this.m22*e,this.m23*e,this.m24*e,this.m31*e,this.m32*e,this.m33*e,this.m34*e,this.m41*e,this.m42*e,this.m43*e,this.m44*e)},t.prototype.multiplyMatrix=function(e){return new t(this.m11*e.m11+this.m12*e.m21+this.m13*e.m31+this.m14*e.m41,this.m11*e.m12+this.m12*e.m22+this.m13*e.m32+this.m14*e.m42,this.m11*e.m13+this.m12*e.m23+this.m13*e.m33+this.m14*e.m43,this.m11*e.m14+this.m12*e.m24+this.m13*e.m34+this.m14*e.m44,this.m21*e.m11+this.m22*e.m21+this.m23*e.m31+this.m24*e.m41,this.m21*e.m12+this.m22*e.m22+this.m23*e.m32+this.m24*e.m42,this.m21*e.m13+this.m22*e.m23+this.m23*e.m33+this.m24*e.m43,this.m21*e.m14+this.m22*e.m24+this.m23*e.m34+this.m24*e.m44,this.m31*e.m11+this.m32*e.m21+this.m33*e.m31+this.m34*e.m41,this.m31*e.m12+this.m32*e.m22+this.m33*e.m32+this.m34*e.m42,this.m31*e.m13+this.m32*e.m23+this.m33*e.m33+this.m34*e.m43,this.m31*e.m14+this.m32*e.m24+this.m33*e.m34+this.m34*e.m44,this.m41*e.m11+this.m42*e.m21+this.m43*e.m31+this.m44*e.m41,this.m41*e.m12+this.m42*e.m22+this.m43*e.m32+this.m44*e.m42,this.m41*e.m13+this.m42*e.m23+this.m43*e.m33+this.m44*e.m43,this.m41*e.m14+this.m42*e.m24+this.m43*e.m34+this.m44*e.m44)},t.prototype.multiplyVector4=function(t){return new n.default(t.x*this.m11+t.y*this.m12+t.z*this.m13+t.w*this.m14,t.x*this.m21+t.y*this.m22+t.z*this.m23+t.w*this.m24,t.x*this.m31+t.y*this.m32+t.z*this.m33+t.w*this.m34,t.x*this.m41+t.y*this.m42+t.z*this.m43+t.w*this.m44)},t.prototype.multiplyPoint=function(t){var e=this.multiplyVector4(new n.default(t.x,t.y,t.z,1));return new s.default(e.x,e.y,e.z)},t.TRS=function(e,i,s){var n=t.fromQuaternion(i);return new t(n.m11*s.x,n.m21,n.m31,e.x,n.m12,n.m22*s.y,n.m32,e.y,n.m13,n.m23,n.m33*s.z,e.z,0,0,0,1)},t.fromQuaternion=function(e){return new t(1-2*Math.pow(e.y,2)-2*Math.pow(e.z,2),2*e.x*e.y+2*e.w*e.z,2*e.x*e.z-2*e.w*e.y,0,2*e.x*e.y-2*e.w*e.z,1-2*Math.pow(e.x,2)-2*Math.pow(e.z,2),2*e.y*e.z+2*e.w*e.x,0,2*e.x*e.z+2*e.w*e.y,2*e.y*e.z-2*e.w*e.x,1-2*Math.pow(e.x,2)-2*Math.pow(e.y,2),0,0,0,0,1)},t.perspective=function(e,i,s,n){var r=1/o(e/2/180*h);return new t(r/i,0,0,0,0,r,0,0,0,0,(s+n)/(s-n),2*s*n/(s-n),0,0,-1,0)},t.prototype.inverse=function(){var e=this.m11*(+this.m22*this.m33*this.m44+this.m23*this.m34*this.m42+this.m24*this.m32*this.m43-this.m24*this.m33*this.m42-this.m23*this.m32*this.m44-this.m22*this.m34*this.m43)+this.m12*(+this.m21*this.m33*this.m44+this.m23*this.m34*this.m41+this.m24*this.m31*this.m43-this.m24*this.m33*this.m41-this.m23*this.m31*this.m44-this.m21*this.m34*this.m43)+this.m13*(+this.m21*this.m32*this.m44+this.m22*this.m34*this.m41+this.m24*this.m31*this.m42-this.m24*this.m32*this.m41-this.m22*this.m31*this.m44-this.m21*this.m34*this.m42)+this.m14*(+this.m21*this.m32*this.m43+this.m22*this.m33*this.m41+this.m23*this.m31*this.m42-this.m23*this.m32*this.m41-this.m22*this.m31*this.m43-this.m21*this.m33*this.m42);return r.default(0!=e,"the matrix can not be inversed"),new t(+this.m22*this.m33*this.m44+this.m23*this.m34*this.m42+this.m24*this.m32*this.m43-this.m24*this.m33*this.m42-this.m23*this.m32*this.m44-this.m22*this.m34*this.m43,-1*(+this.m21*this.m33*this.m44+this.m23*this.m34*this.m41+this.m24*this.m31*this.m43-this.m24*this.m33*this.m41-this.m23*this.m31*this.m44-this.m21*this.m34*this.m43),+this.m21*this.m32*this.m44+this.m22*this.m34*this.m41+this.m24*this.m31*this.m42-this.m24*this.m32*this.m41-this.m22*this.m31*this.m44-this.m21*this.m34*this.m42,-1*(+this.m21*this.m32*this.m43+this.m22*this.m33*this.m41+this.m23*this.m31*this.m42-this.m23*this.m32*this.m41-this.m22*this.m31*this.m43-this.m21*this.m33*this.m42),-1*(+this.m12*this.m33*this.m44+this.m13*this.m34*this.m42+this.m14*this.m32*this.m43-this.m14*this.m33*this.m42-this.m13*this.m32*this.m44-this.m12*this.m34*this.m43),+this.m11*this.m33*this.m44+this.m13*this.m34*this.m41+this.m14*this.m31*this.m43-this.m14*this.m33*this.m41-this.m13*this.m31*this.m44-this.m11*this.m34*this.m43,-1*(+this.m11*this.m32*this.m44+this.m12*this.m34*this.m41+this.m14*this.m31*this.m42-this.m14*this.m32*this.m41-this.m12*this.m21*this.m34-this.m11*this.m34*this.m42),+this.m11*this.m32*this.m43+this.m12*this.m33*this.m41+this.m13*this.m31*this.m42-this.m13*this.m32*this.m41-this.m12*this.m31*this.m43-this.m11*this.m33*this.m42,+this.m12*this.m23*this.m44+this.m13*this.m24*this.m42+this.m14*this.m22*this.m43-this.m14*this.m23*this.m42-this.m13*this.m22*this.m44-this.m12*this.m24*this.m43,-1*(+this.m11*this.m23*this.m44+this.m13*this.m24*this.m41+this.m14*this.m21*this.m43-this.m14*this.m23*this.m41-this.m13*this.m21*this.m44-this.m11*this.m24*this.m43),+this.m11*this.m22*this.m44+this.m12*this.m24*this.m41*this.m14*this.m21*this.m42-this.m14*this.m22*this.m41-this.m12*this.m21*this.m44-this.m11*this.m24*this.m42,-1*(+this.m11*this.m22*this.m43+this.m12*this.m23*this.m41+this.m13*this.m21*this.m42-this.m13*this.m22*this.m41-this.m12*this.m21*this.m43-this.m11*this.m23*this.m42),-1*(+this.m12*this.m23*this.m34+this.m13*this.m24*this.m32+this.m14*this.m22*this.m33-this.m14*this.m23*this.m32-this.m13*this.m22*this.m34-this.m12*this.m24*this.m33),+this.m11*this.m23*this.m34+this.m13*this.m24*this.m31+this.m14*this.m21*this.m33-this.m14*this.m23*this.m31-this.m13*this.m21*this.m34-this.m11*this.m24*this.m33,-1*(+this.m11*this.m22*this.m34+this.m12*this.m24*this.m31+this.m14*this.m21*this.m32-this.m14*this.m22*this.m31-this.m12*this.m21*this.m34-this.m11*this.m24*this.m32),+this.m11*this.m22*this.m33+this.m12*this.m23*this.m31+this.m13*this.m21*this.m32-this.m13*this.m22*this.m31-this.m12*this.m21*this.m33-this.m11*this.m23*this.m32).transpose.multiplyNumber(1/e)},t.identity=new t(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),t.zero=new t(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),t}();e.default=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(8),n=i(12),r=i(0),o=function(){function t(){this.transform=new s.default,this.intensity=1,this.color=new n.default(1,1,1,1)}return Object.defineProperty(t.prototype,"lightDirection",{get:function(){return this.transform.localToWorldMatrix.multiplyPoint(r.default.zero).normalize()},enumerable:!0,configurable:!0}),t.main=new t,t}();e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e,i,s){this.r=t,this.g=e,this.b=i,this.a=s}return t.prototype.set=function(t,e,i,s){return this.r=t,this.g=e,this.b=i,this.a=s,this},t}();e.default=s},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),r=i(0),o=i(2),h=Math.acos,a=Math.sin,u=Math.PI,m=(Math.asin,function(){function t(){}return t}());e.Mesh=m;var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.vertices=[new r.default(-.5,.5,-.5),new r.default(-.5,-.5,-.5),new r.default(.5,.5,-.5),new r.default(.5,-.5,-.5),new r.default(.5,.5,-.5),new r.default(.5,-.5,-.5),new r.default(.5,.5,.5),new r.default(.5,-.5,.5),new r.default(.5,.5,.5),new r.default(.5,-.5,.5),new r.default(-.5,.5,.5),new r.default(-.5,-.5,.5),new r.default(-.5,.5,.5),new r.default(-.5,-.5,.5),new r.default(-.5,.5,-.5),new r.default(-.5,-.5,-.5),new r.default(-.5,.5,.5),new r.default(-.5,.5,-.5),new r.default(.5,.5,.5),new r.default(.5,.5,-.5),new r.default(-.5,-.5,-.5),new r.default(-.5,-.5,.5),new r.default(.5,-.5,-.5),new r.default(.5,-.5,.5)],e.uv=[new n.default(0,1),new n.default(0,0),new n.default(1,1),new n.default(1,0),new n.default(0,1),new n.default(0,0),new n.default(1,1),new n.default(1,0),new n.default(0,1),new n.default(0,0),new n.default(1,1),new n.default(1,0),new n.default(0,1),new n.default(0,0),new n.default(1,1),new n.default(1,0),new n.default(0,1),new n.default(0,0),new n.default(1,1),new n.default(1,0),new n.default(0,1),new n.default(0,0),new n.default(1,1),new n.default(1,0)],e.uv2=[new n.default(0,0),new n.default(0,.5),new n.default(.33333333,0),new n.default(.33333333,.5),new n.default(.33333333,0),new n.default(.33333333,.5),new n.default(.66666666,0),new n.default(.66666666,.5),new n.default(.66666666,0),new n.default(.66666666,.5),new n.default(1,0),new n.default(1,.5),new n.default(0,.5),new n.default(0,1),new n.default(.33333333,.5),new n.default(.33333333,1),new n.default(.33333333,.5),new n.default(.33333333,1),new n.default(.66666666,.5),new n.default(.66666666,1),new n.default(.66666666,.5),new n.default(.66666666,1),new n.default(1,.5),new n.default(1,1)],e.triangles=[2,1,0,1,2,3,6,5,4,5,6,7,10,9,8,9,10,11,14,13,12,13,14,15,18,17,16,17,18,19,22,21,20,21,22,23],e}return s(e,t),e}(m);e.CubeMesh=l;var f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.vertices=[new r.default(-.5,.5,0),new r.default(-.5,-.5,0),new r.default(.5,.5,0),new r.default(.5,-.5,0)],e.uv=[new n.default(0,1),new n.default(0,0),new n.default(1,1),new n.default(1,0)],e.triangles=[2,1,0,1,2,3],e}return s(e,t),e}(m);e.QuadMesh=f;var c=function(t){function e(){var e=t.call(this)||this;return e.vertices=e.subdivision([r.default.up,r.default.forward,r.default.right],0).concat(e.subdivision([r.default.up,r.default.right,r.default.back],0),e.subdivision([r.default.up,r.default.back,r.default.left],0),e.subdivision([r.default.up,r.default.left,r.default.forward],0),e.subdivision([r.default.down,r.default.right,r.default.forward],0),e.subdivision([r.default.down,r.default.forward,r.default.left],0),e.subdivision([r.default.down,r.default.left,r.default.back],0),e.subdivision([r.default.down,r.default.back,r.default.right],0)),e.triangles=o.range(0,e.vertices.length),e.uv=e.vertices.map(function(t,e,i){var s=h(t.y);if(0==s)return new n.default(0,t.y>0?1:0);if(0==t.z&&t.x>0)return t.y>=0?i[e+1].z>0?new n.default(0,(u-s)/u):new n.default(1,(u-s)/u):i[e+1].z>=0?new n.default(0,(u-s)/u):new n.default(1,(u-s)/u);var r=t.z>0?o.clamp(h(o.clamp(t.x/a(s),-1,1)),0,u):2*u-o.clamp(h(o.clamp(t.x/a(s),-1,1)),0,u);return new n.default(r/(2*u),(u-s)/u)}),e}return s(e,t),e.prototype.subdivision=function(t,e,i){if(void 0===i&&(i=3),e>i)return t;e+=1;var s=t[0],n=t[1],o=t[2],h=r.default.lerp(s,n,.5).normalize(),a=r.default.lerp(s,o,.5).normalize(),u=r.default.lerp(n,o,.5).normalize();return this.subdivision([s,h,a],e).concat(this.subdivision([h,n,u],e),this.subdivision([a,u,o],e),this.subdivision([h,u,a],e))},e}(m);e.SphereMesh=c},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),n=i(12),r=i(1),o=i(11),h=Math.max,a=void 0,u=document.createElement("canvas"),m=u.getContext("2d"),l=new Image;l.src="/earth.jpg",l.onload=function(){u.width=l.naturalWidth,u.height=l.naturalHeight,m.drawImage(l,0,0,l.naturalWidth,l.naturalHeight),a=m.getImageData(0,0,l.naturalWidth,l.naturalHeight).data};var f=new n.default(0,0,0,0),c=o.default.main.lightDirection,d=c.add(r.default.main.transform.localToWorldMatrix.multiplyPoint(new s.default(0,0,-1))).normalize(),p=new s.default(.1,.1,.1),y=function(){function t(){}return t.prototype.vertexProgram=function(t){return{position:this.uniform.MVPMatrix.multiplyVector4(t.position),mvPosition:this.uniform.MVMatrix.multiplyVector4(t.position),texcoord:t.texcoord,normal:t.normal}},t.prototype.surfaceProgram=function(t){var e=h(0,t.normal.dot(c)),i=h(0,t.normal.dot(d));i=0==e?0:Math.pow(i,.5);var n=4*(Math.round((1-t.texcoord.y)*(l.naturalHeight-1))*l.naturalWidth+Math.round(t.texcoord.x*(l.naturalWidth-1))),r=new s.default(a[n]/255,a[n+1]/255,a[n+2]/255).scale(p.add(s.default.one.multiply(e*o.default.main.intensity))).add(s.default.one.multiply(.2*i));return f.set(r.x,r.y,r.z,a[n+3]/255)},t.main=new t,t}();e.default=y},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(16),i(19)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(1),n=i(3),r=i(0),o=i(11);s.default.main.fieldOfView=60,s.default.main.pixelWidth=800,s.default.main.pixelHeight=600,s.default.main.aspect=s.default.main.pixelWidth/s.default.main.pixelHeight,s.default.main.nearClipPlane=.3,s.default.main.farClipPlane=1e3,s.default.main.transform.rotation=n.default.euler(20,0,0),s.default.main.transform.position=new r.default(0,2,-6),s.default.main.render(),o.default.main.transform.position=new r.default(0,1,-1),o.default.main.intensity=1},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),r=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e}(n.default);e.default=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(){}return t}();e.default=s},function(t,e,i){"use strict";function s(t,e){return t.reduce(function(t,i){return t.concat(e(i))},[])}function n(){console.time("t"),j=(new Date).getTime(),P.forEach(function(t){1!=t.transform.position.y&&-1!=t.transform.position.y||t.transform.rotateAround(h.default.zero,h.default.up,90*l.default.deltaTime),0==t.transform.position.y&&t.transform.rotateAround(h.default.zero,h.default.down,90*l.default.deltaTime)}),O.transform.rotateAround(h.default.zero,h.default.up,45*l.default.deltaTime),O.transform.rotate(new h.default(0,90*l.default.deltaTime,0)),M.render(g),console.timeEnd("t"),x.innerHTML="FPS: "+Math.round(1e3/((new Date).getTime()-j))}function r(){l.default.realTimeSinceStartup+=l.default.deltaTime,requestAnimationFrame(n),o(),T=setTimeout(r,30)}function o(){clearTimeout(T)}Object.defineProperty(e,"__esModule",{value:!0});var h=i(0),a=i(3),u=i(20),m=i(21),l=i(22),f=i(23),c=i(27),d=document.createElement("canvas");d.width=800,d.height=600,d.style.display="block",document.body.insertBefore(d,document.body.children[0]);var p=document.createElement("button");p.textContent="start",p.addEventListener("click",r),document.body.insertBefore(p,d);var y=document.createElement("button");y.textContent="stop",y.addEventListener("click",o),document.body.insertBefore(y,d);var w=document.createElement("input");w.type="range",w.value="0",w.addEventListener("change",function(t){O.transform.rotation=a.default.euler(0,-t.target.value/100*90,0),n()}),document.body.insertBefore(w,d);var x=document.createElement("span");document.body.insertBefore(x,d);var v=document.createElement("button");v.textContent="cube",v.addEventListener("click",function(){g.clearAllGameObjects(),P.forEach(function(t){return g.addGameObject(t)})}),document.body.insertBefore(v,d);var z=document.createElement("button");z.textContent="earch",z.addEventListener("click",function(){g.clearAllGameObjects(),g.addGameObject(O)}),document.body.insertBefore(z,d);var b=d.getContext("2d"),M=new f.default(b),g=new c.default,_=[-1,0,1],P=s(_,function(t){return s(_,function(e){return s(_,function(i){var s=new u.default;return s.transform.translate(new h.default(t,e,i)),[s]})})}),O=new m.default;g.addGameObject(O),O.transform.translate(new h.default(3,0,0));var j,T=null},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(5),r=i(13),o=function(t){function e(){var e=t.call(this)||this;return e.meshFilter.gameObject=e,e.meshFilter.mesh=new r.CubeMesh,e.meshRenderer.gameObject=e,e}return s(e,t),e.prototype.submit=function(){for(var t=[],e=this.transform.localToWorldMatrix,i=0;i<this.meshFilter.mesh.triangles.length;i+=3){var s=e.multiplyPoint(this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i]]),n=e.multiplyPoint(this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i+1]]),r=e.multiplyPoint(this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i+2]]),o=n.subtract(s).cross(r.subtract(n)).normalize();t.push({a:{position:this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i]],normal:o,texcoord:this.meshFilter.mesh.uv2[this.meshFilter.mesh.triangles[i]]},b:{position:this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i+1]],normal:o,texcoord:this.meshFilter.mesh.uv2[this.meshFilter.mesh.triangles[i+1]]},c:{position:this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i+2]],normal:o,texcoord:this.meshFilter.mesh.uv2[this.meshFilter.mesh.triangles[i+2]]}})}return t},e}(n.default);e.default=o},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var n=i(5),r=i(13),o=function(t){function e(){var e=t.call(this)||this;return e.meshFilter.gameObject=e,e.meshFilter.mesh=new r.SphereMesh,e.meshRenderer.gameObject=e,e}return s(e,t),e.prototype.submit=function(){for(var t=[],e=this.transform.localToWorldMatrix,i=0;i<this.meshFilter.mesh.triangles.length;i+=3){var s=e.multiplyPoint(this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i]]),n=e.multiplyPoint(this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i+1]]),r=e.multiplyPoint(this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i+2]]),o=n.subtract(s).cross(r.subtract(n)).normalize();t.push({a:{position:this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i]],normal:o,texcoord:this.meshFilter.mesh.uv[this.meshFilter.mesh.triangles[i]]},b:{position:this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i+1]],normal:o,texcoord:this.meshFilter.mesh.uv[this.meshFilter.mesh.triangles[i+1]]},c:{position:this.meshFilter.mesh.vertices[this.meshFilter.mesh.triangles[i+2]],normal:o,texcoord:this.meshFilter.mesh.uv[this.meshFilter.mesh.triangles[i+2]]}})}return t},e}(n.default);e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(){}return t.deltaTime=.03,t}();e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(24),n=i(25),r=i(26),o=i(1),h=i(14),a=i(4),u=function(){function t(t){this.rasterizer=new s.default,this.clipper=new n.default,this.imageContext=t;var e=this.imageContext.canvas.width,i=this.imageContext.canvas.height;this.zBuffer=new Array(2*e*i*2),this.frame=this.imageContext.createImageData(e,i),this.frameBuffer=this.frame.data,this.msaaColorBuffer=this.imageContext.createImageData(2*e,2*i).data,this.rasterizer.zBuffer=this.zBuffer,this.rasterizer.frameBuffer=this.frameBuffer,this.rasterizer.msaaColorBuffer=this.msaaColorBuffer}return t.prototype.submit=function(t){var e=this,i=t.submit(),s=t.transform.localToWorldMatrix;h.default.main.uniform={MVMatrix:o.default.main.worldToCameraMatrix.multiplyMatrix(s),MVPMatrix:o.default.main.worldToViewportMatrix.multiplyMatrix(s)},r.flatMap(i,function(t){return e.clipper.clip([h.default.main.vertexProgram({position:new a.default(t.a.position.x,t.a.position.y,t.a.position.z,1),texcoord:t.a.texcoord,normal:t.a.normal}),h.default.main.vertexProgram({position:new a.default(t.b.position.x,t.b.position.y,t.b.position.z,1),texcoord:t.b.texcoord,normal:t.b.normal}),h.default.main.vertexProgram({position:new a.default(t.c.position.x,t.c.position.y,t.c.position.z,1),texcoord:t.c.texcoord,normal:t.c.normal})])}).forEach(function(t){return e.rasterizer.lerp(t)})},t.prototype.render=function(t){var e=this;this.rasterizer.zBuffer.fill(o.default.main.farClipPlane),this.rasterizer.frameBuffer.fill(0),t.gameObjects.forEach(function(t){return e.submit(t)}),this.imageContext.putImageData(this.frame,0,0)},t}();e.default=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),n=i(7),r=i(2),o=i(1),h=i(14),a=Math.abs,u=Math.round,m=function(){function t(){}return t.prototype.lerp=function(t){var e=t.map(function(t){return{screenPoint:o.default.main.viewportToScreenPoint(new s.default(t.position.x/t.position.w,t.position.y/t.position.w,t.position.w)),vertex:t}}),i=e.slice().sort(function(t,e){return t.screenPoint.y<=e.screenPoint.y?-1:1}),m=i[0].screenPoint,l=i[1].screenPoint,f=i[2].screenPoint,c=i[0].vertex.texcoord,d=i[1].vertex.texcoord,p=i[2].vertex.texcoord,y=(l.y-m.y)/(l.x-m.x),w=(f.y-l.y)/(f.x-l.x),x=(f.y-m.y)/(f.x-m.x);if(!(e[0].screenPoint.subtract(e[1].screenPoint).cross(e[2].screenPoint.subtract(e[1].screenPoint)).normalize().z<0))for(var v,z,b,M,g,_,P,O,j,T,F=l.subtract(m).cross(f.subtract(l)).normalize(),C=0,V=0,B=m.y;B<f.y;B++){B<l.y?(V=m.x+(a(y)==1/0?0:1/y)*(B-m.y),b=1/r.lerp(1/m.z,1/l.z,(B-m.y)/(l.y-m.y)),v=n.default.lerp(c.multiply(1/m.z),d.multiply(1/l.z),(B-m.y)/(l.y-m.y)).multiply(b)):(V=l.x+(a(w)==1/0?0:1/w)*(B-l.y),b=1/r.lerp(1/l.z,1/f.z,(B-l.y)/(f.y-l.y)),v=n.default.lerp(d.multiply(1/l.z),p.multiply(1/f.z),(B-l.y)/(f.y-l.y)).multiply(b)),C=m.x+(a(x)==1/0?0:1/x)*(B-m.y),M=1/r.lerp(1/m.z,1/f.z,(B-m.y)/(f.y-m.y)),z=n.default.lerp(c.multiply(1/m.z),p.multiply(1/f.z),(B-m.y)/(f.y-m.y)).multiply(M),j=u(C),T=u(V),j>T&&(j=T+j,T=j-T,j-=T);for(var W=j;W<=T;W++)if(P=F.z<0?(W-j)/(T-j):1-(W-j)/(T-j),O=1/r.lerp(1/b,1/M,P),this.zBuffer[4*(B*o.default.main.pixelWidth+W)]>O){this.zBuffer[4*(B*o.default.main.pixelWidth+W)]=O,g=n.default.lerp(v.multiply(1/b),z.multiply(1/M),P).multiply(O),g.x=r.clamp(g.x,0,1),g.y=r.clamp(g.y,0,1),_=h.default.main.surfaceProgram({normal:e[0].vertex.normal,texcoord:g});var S=4*(u(599*(1-B/600))*o.default.main.pixelWidth+u(W/800*799));this.frameBuffer[S]=255*_.r,this.frameBuffer[S+1]=255*_.g,this.frameBuffer[S+2]=255*_.b,this.frameBuffer[S+3]=255*_.a}}},t}();e.default=m},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(7),n=i(4),r=function(){function t(){}return t.prototype.clip=function(t){var e=this,i=function(t,s){if(64==s)return t;for(var n=[],r=0;r<t.length;r++)n=n.concat(e.getVertexsByEndpoints(t[r],t[r].position,t[(r+1)%t.length],t[(r+1)%t.length].position,s));return i(n,s<<1)},s=i(t,1);return this.getTrianglesByVertexs(s)},t.prototype.getTrianglesByVertexs=function(t){for(var e=[],i=0;i<t.length-2;i++)e.push([t[0],t[i+1],t[i+2]]);return e},t.prototype.getVertexsByEndpoints=function(t,e,i,r,o){var h=this.getAreaCode(e),a=this.getAreaCode(r);if(0==(h&o|a&o))return[i];if((h&o&a&o)==o)return[];var u=void 0;(h&o|a&o)==o&&(1==o&&(u=(e.x+e.w)/(e.w-r.w+e.x-r.x)),2==o&&(u=(e.x-e.w)/(r.w-e.w+e.x-r.x)),4==o&&(u=(e.y+e.w)/(e.w-r.w+e.y-r.y)),8==o&&(u=(e.y-e.w)/(r.w-e.w+e.y-r.y)),16==o&&(u=(e.z+e.w)/(e.w-r.w+e.z-r.z)),32==o&&(u=(e.z-e.w)/(r.w-e.w+e.z-r.z)));var m=n.default.lerp(e,r,u),l={color:t.color,position:m,normal:t.normal,texcoord:s.default.lerp(t.texcoord,i.texcoord,u)};return 0==(h&o)?[l]:0==(a&o)?[l,i]:void 0},t.prototype.getAreaCode=function(t){var e=0;return t.w+t.x<0&&(e|=1),t.w-t.x<0&&(e|=2),t.w+t.y<0&&(e|=4),t.w-t.y<0&&(e|=8),t.w+t.z<0&&(e|=16),t.w-t.z<0&&(e|=32),e},t}();e.default=r},function(t,e,i){"use strict";function s(t,e){return t.reduce(function(t,i){return t.concat(e(i))},[])}Object.defineProperty(e,"__esModule",{value:!0}),e.flatMap=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(){this.gameObjects=[]}return t.prototype.addGameObject=function(t){this.gameObjects.push(t)},t.prototype.removeGameObject=function(t){this.gameObjects=this.gameObjects.filter(function(e){return e!=t})},t.prototype.clearAllGameObjects=function(){this.gameObjects=[]},t}();e.default=s}]);