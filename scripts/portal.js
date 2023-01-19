let currentdate = document.lastModified;
document.querySelector('#currentdate').innerHTML = `Last Updated: ${currentdate}`;
const date = new Date(document.lastModified);
let year = date.getFullYear;
document.querySelector('#year').innerHTML = year;