'use strict';


var cookie = Object.fromEntries(document.cookie.split(/; */).map(c => {
    const [ key, ...v ] = c.split('=');
    return [ key, decodeURIComponent(v.join('=')) ];
}));


console.log('Cookie from the site:', cookie);
console.log('Site:', window.location);