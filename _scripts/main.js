
const $ = selector => document.querySelectorAll(selector);
const _ = iterable => Array.prototype.slice.call(iterable) || [];

_( $('div') ).forEach(div => console.log(div));