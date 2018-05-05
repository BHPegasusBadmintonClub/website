var link = document.querySelector('link[rel="import"]');

// Clone the <template> in the import.
var template = link.import.querySelector('template');
var clone = document.importNode(template.content, true);
var placeholder = document.querySelector('#menu');
placeholder.appendChild(clone);
const menuLink = document.querySelector('.' + placeholder.dataset.active);
menuLink.className = menuLink.className + ' active';
