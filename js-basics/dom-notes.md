# DOM Notes

## What is the DOM?
- DOM = Document Object Model
- When browser loads HTML, it converts it into a tree of objects
- JavaScript can access and manipulate this tree
- Changes to DOM = changes on the page instantly

## Selecting Elements
```js
document.querySelector('.class')      // first match
document.querySelectorAll('.class')   // all matches (NodeList)
document.getElementById('id')         // by id
Reading & Changing Content
element.textContent = 'Hello'         // plain text, safer
element.innerHTML = '<b>Hello</b>'    // renders HTML, use carefully
element.value                         // for input fields
Changing Styles & Classes
element.style.color = 'red'           // inline style
element.classList.add('active')       // add class
element.classList.remove('active')    // remove class
element.classList.toggle('active')    // toggle class
Creating & Adding Elements
const div = document.createElement('div')
div.textContent = 'New element'
document.body.appendChild(div)        // adds at end
parent.insertBefore(newEl, targetEl)  // adds before target
Removing Elements
element.remove()                      // removes itself
parent.removeChild(child)             // removes child
Traversing the DOM
element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
