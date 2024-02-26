#CS 260 NOTES

**GitHub**
- If something has been modified on the same line and both are committed and pushed, it creates  merge conflict that needs to be resolved
- It's important to regularly commit your work

**Command Bar**
- echo - Output the parameters of the command
- cd - Change directory
- mkdir - Make directory
- rmdir - Remove directory
- rm - Remove file(s)
- mv - Move file(s)
- cp - Copy files
- ls - List files
- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- less - Interactively output the contents of a file
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- man - Look up a command in the manual

You can also chain the input and output of commands using special characters

- | - Take the output from the command on the left and pipe, or pass, it to the command on the right
- \> - Redirect output to a file. Overwrites the file if it exists
- \>> - Redirect output to a file. Appends if the file exists
  
For example, you can list the files in a directory, pipe it into grep to search for files created in Nov, and then pipe that into wc to count the number of files found with a date of Nov.

ls -l | grep ' Nov ' | wc -l

- CTRL-R - Use type ahead to find previous commands
- CTRL-C - Kill the currently running command

**Vi commands**
- :h	- help
- i	- enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode.
- u	- undo
- CTRL-r	- redo
- gg	- go to beginning of file
- G	- go to end of file
- /	- search for text that you type after /
- n	- next search match
- N	- previous search match
- v	- visually select text
- y	- yank or copy selected text to clipboard
- p	- paste clipboard
- CTRL-wv	- Split window vertically
- CTRL-ww	- Toggle windows
- CTRL-wq	- Close current window
- :e	- Open a file. Type ahead available. If you open a directory you can navigate it in the window
- :w	- write file (save)
- :q	- quit. Use :q! to exit without saving

**HTML Common Elements**
- html	- The page container
- head	- Header information
- title	- Title of the page
- meta	- Metadata for the page such as character set or viewport settings
- script	- JavaScript reference. Either a external reference, or inline
- include	- External content reference
- body	- The entire content body of the page
- header	- Header of the main content
- footer	- Footer of the main content
- nav	- Navigational inputs
- main	- Main content of the page
- section	- A section of the main content
- aside	- Aside content from the main content
- div	- A block division of content
- span	- An inline span of content
- h<1-9>	- Text heading. From h1, the highest level, down to h9, the lowest level
- p	- A paragraph of text
- b	- Bring attention
- table	- Table
- tr	- Table row
- th	- Table header
- td	- Table data
- ol,ul	- Ordered or unordered list
- li	- List item
- a	- Anchor the text to a hyperlink
- img	- Graphical image reference
- dialog	- Interactive component such as a confirmation
- form	- A collection of user input
- input	- User input field
- audio	- Audio content
- video	- Video content
- svg	- Scalable vector graphic content
- iframe	- Inline frame of another HTML page

~~~
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
~~~
*input elements:*
- text	Single line textual value
- password	Obscured password
- email	Email address
- tel	Telephone number
- url	URL address
- vnumber	Numerical value
- checkbox	Inclusive selection
- radio	Exclusive selection
- range	Range limited number
- date	Year, month, day
- datetime-local	Date and time
- month	Year, month
- week	Week of year
- color	Color
- file	Local file
- submit	button to trigger form submission
~~~
<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />
~~~

**Input Elements and Examples**
- form	- Input container and submission	\<form action="form.html" method="post">
- fieldset	- Labeled input grouping	\<fieldset> ... \</fieldset>
- input	- Multiple types of user input	\<input type="" />
- select	- Selection dropdown	\<select>\<option>1\</option>\</select>
- optgroup	- Grouped selection dropdown	\<optgroup>\<option>1\</option>\</optgroup>
- option	- Selection option	\<option selected>option2\</option>
- textarea	- Multiline text input	\<textarea>\</textarea>
- label	- Individual input label	\<label for="range">Range: \</label>
- output	- Output of input	\<output for="range">0\</output>
- meter	- Display value with a known range	\<meter min="0" max="100" value="50">\</meter>
- 

**ADDING IMAGES**
- Example: \<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />

**ADDING AUDIO**
  - Example: (also you can loop it) \<audio controls src="testAudio.mp3">\</audio>

**ADDING VIDEOS**
- Example: \<video controls width="300" crossorigin="anonymous">
  \<source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
\</video>

**ADDING INTERNAL MEDIA (svg and canvas)**
- SVG: \<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  \<circle cx="150" cy="100" r="50" />
\</svg>

- canvas: \<canvas id="canvasDemo" width="300" height="200" style="border: 1px solid #000000">\</canvas>
\<script>
  const ctx = document.getElementById('canvasDemo').getContext('2d');
  ctx.beginPath();
  ctx.arc(150, 100, 50, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'red';
  ctx.fill();
  ctx.stroke();
\</script>

*reminder to commit to vs code*

refer to this link: https://www.w3schools.com/howto/howto_css_images_side_by_side.asp
use this for previous and next buttons: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_next_prev
**CSS**
*selectors*
- class selector:
~~~
p.summary {
  font-weight: bold;
}
~~~
- ID selector:
~~~
#physics {
  border-left: solid 1em purple;
}
~~~
attribute selector:
~~~
p[class='summary'] {
  color: red;
}
~~~
pseudo selector:
~~~
section:hover {
  border-left: solid 1em purple;
}
~~~
*declarations*
- background-color	color	red	Fill the background color
- border	color width style	#fad solid medium	Sets the border using shorthand where any or all of the values may be provided
- border-radius	unit	50%	The size of the border radius
- box-shadow	x-offset y-offset blu-radius color	2px 2px 2px gray	Creates a shadow
- columns	number	3	Number of textual columns
- column-rule	color width style	solid thin black	Sets the border used between columns using border shorthand
- color	color	rgb(128, 0, 0)	Sets the text color
- cursor	type	grab	Sets the cursor to display when hovering over the element
- display	type	none	Defines how to display the element and its children
- filter	filter-function	grayscale(30%)	Applies a visual filter
- float	direction	right	Places the element to the left or right in the flow
- flex			Flex layout. Used for responsive design
- font	family size style	Arial 1.2em bold	Defines the text font using shorthand
- grid			Grid layout. Used for responsive design
- height	unit	.25em	Sets the height of the box
- margin	unit	5px 5px 0 0	Sets the margin spacing
- max-[width/height]	unit	20%	Restricts the width or height to no more than the unit
- min-[width/height]	unit	10vh	Restricts the width or height to no less than the unit
- opacity	number	.9	Sets how opaque the element is
- overflow	[visible/hidden/scroll/auto]	scroll	Defines what happens when the content does not fix in its box
- position	[static/relative/absolute/sticky]	absolute	Defines how the element is positioned in the document
- padding	unit	1em 2em	Sets the padding spacing
- left	unit	10rem	The horizontal value of a positioned element
- text-align	[start/end/center/justify]	end	Defines how the text is aligned in the element
- top	unit	50px	The vertical value of a positioned element
- transform	transform-function	rotate(0.5turn)	Applies a transformation to the element
- width	unit	25vmin	Sets the width of the box
- z-index	number	100	Controls the positioning of the element on the z axis
**Javascript**
- ```console.log('Hello' + ' ' + 'world');```
- ```function join(a, b)``` ```{
  return a + ' ' + b;
}```
```console.log(join('Hello', 'world'));```
- ```console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');```
-If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEnd calls.```console.time('demo time');``` or ```console.timeEnd('demo time');```
- use \<script> or src to add java to html. here's an example of one click ```<button onclick="let i=1;i++;console.log(i)">press me</button>```
~~~
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
~~~
- declaring variables
~~~
let x = 1;

const y = 2;
~~~
**variable types**
- Null	- The type of a variable that has not been assigned a value.
- Undefined	- The type of a variable that has not been defined.
- Boolean	- true or false.
- Number	- A 64-bit signed number.
- BigInt	- A number of arbitrary magnitude.
- String	- A textual sequence of characters.
- Symbol	- A unique value.

**object types:**

- Object	- A collection of properties represented by name-value pairs. Values can be of any type.	```{a:3, b:'fish'}```
- Function	- An object that has the ability to be called.	```function a() {}```
- Date	- Calendar dates and times.	```new Date('1995-12-17')```
- Array	- An ordered sequence of any type.	```[3, 'fish']```
- Map	- A collection of key-value pairs that support efficient lookups.	```new Map()```
- JSON	- A lightweight data-interchange format used to share information across programs.	```{"a":3, "b":"fish"}```

*conditionals*
~~~
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
~~~
```a === 1 ? console.log(1) : console.log('not 1');```

*loops*
~~~
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
~~~
~~~
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
~~~
~~~
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
~~~
~~~
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
~~~
~~~
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
~~~
~~~
let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1
~~~
**strings**
~~~
const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
~~~
string functions:
- length	- The number of characters in the string
- indexOf()	- The starting index of a given substring
- split()	- Split the string into an array on the given delimiter string
- startsWith()	- True if the string has a given prefix
- endsWith()	- True if the string has a given suffix
- toLowerCase()	- Converts all characters to lowercase
~~~
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글
~~~

**functions**
~~~
function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world
~~~
~~~
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
~~~
- anonymous functions
~~~
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
~~~
- inner functions
~~~
function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish
~~~
* arrow function*
~~~
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
~~~
- Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.
- debounce:
~~~
window.addEventListener(
  'scroll',
  debounce(500, () => {
    console.log('Executed an expensive calculation');
  })
);
~~~
**Array**
~~~
const a = [1, 2, 3];
console.log(a[1]);
// OUTPUT: 2

console.log(a.length);
// OUTPUT: 3
~~~
array object funtions:
- push	- Add an item to the end of the array	```a.push(4)```
- pop	- Remove an item from the end of the array	```x = a.pop()```
- slice	- Return a sub-array	```a.slice(1,-1)```
- sort	- Run a function to sort an array in place	```a.sort((a,b) => b-a)```
- values	- Creates an iterator for use with a for of loop	```for (i of a.values()) {...}```
- find	- Find the first item satisfied by a test function	```a.find(i => i < 2)```
- forEach	- Run a function on each array item	```a.forEach(console.log)```
- reduce	- Run a function to reduce each array item to a single item	```a.reduce((a, c) => a + c)```
- map	- Run a function to map an array to a new array	```a.map(i => i+i)```
- filter	- Run a function to remove items	```a.filter(i => i%2)```
- every	Run a function to test if all items match	```a.every(i => i < 3)```
- some	Run a function to test if any items match	```a.some(i => 1 < 1)```
~~~
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4
~~~

*JSON*

JSON document data types:
- string	```"crockford"```
- number	```42```
- boolean	```true```
- array	```[null,42,"crockford"]```
- object	```{"a":1,"b":"crockford"}```
- null	```null```

- a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.
~~~
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
~~~
**Objects**
~~~
const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
~~~
*object funtions:*

- entries	- Returns an array of key value pairs
- keys	- Returns an array of keys
- values	- Returns an array of values

~~~
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
~~~
Any function that returns an object is considered a constructor and can be invoked with the new operator.
~~~
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
~~~
clases:
~~~
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
~~~
~~~
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
~~~
inheritance using extends and super:
~~~
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
~~~
*regular expressions*
- The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.
~~~
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
~~~
rest: 
~~~
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
~~~
spread:
~~~
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
~~~
Exceptions:
~~~
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
~~~
~~~
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
~~~
- fallback
~~~
function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
~~~
**Destructuring**
- destructuring arrays:
~~~
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
~~~
- using rest:
~~~
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
~~~
~~~
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
~~~
~~~
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
~~~
~~~
let a = 22;

[a] = [1, 2, 3];

console.log(a);
// OUTPUT: 1
~~~
**SCOPE**
- Global - Visible to all code
- Module - Visible to all code running in a module
- Function - Visible within a function
- Block - Visible within a block of code delimited by curly braces

*this*
1. Global - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
2. Function - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running in JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
3. Object - When this is referenced in an object it refers to the object.
~~~
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}

new ScopeTest().objectFunc();
~~~
ooutputs to: 
~~~
global: Window
globalThis: Window
globalFunctionThis: undefined
objectThis: ScopeTest
objectFunctionThis: ScopeTest
~~~
this in action, what is returned when:
~~~globalThis.x = 'global';

const obj = {
  x: 'object',
  f: function () {
    console.log(this.x);
  },
};

obj.f();
// OUTPUT: object
~~~
~~~
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global
~~~
~~~
globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object
~~~
*moduels*
alert.js
~~~
export function alertDisplay(msg) {
  alert(msg);
}
~~~
main.js
~~~
import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
~~~
index.html
~~~
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
~~~
~~~
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
~~~
**Document Object Model**
~~~
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
~~~
~~~
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
~~~
- insert/append child:
~~~
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
~~~
- delete element/remove child
~~~
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
~~~
- injecting html
~~~
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
~~~
- event listners
~~~
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
~~~
- Clipboard: Cut, copied, pasted
- Focus:	An element gets focus
- Keyboard:	Keys are pressed
- Mouse:	Click events
- Text selection:	When text is selected

```<button onclick='alert("clicked")'>click me</button>```
*Local storage*

Local storage items: 
- setItem(name, value) - Sets a named item's value into local storage
- getItem(name)	- Gets a named item's value from local storage
- removeItem(name)	- Removes a named item from local storage
- clear()	- Clears all items in local storage

- A local storage value must be of type string, number, or boolean. If you want to store a JavaScript object or array, then you must first convert it to a JSON string with JSON.stringify() on insertion, and parse it back to JavaScript with JSON.parse() when retrieved.
~~~
let user = 'Alice';

let myObject = {
  name: 'Bob',
  info: {
    favoriteClass: 'CS 260',
    likesCS: true,
  },
};

let myArray = [1, 'One', true];

localStorage.setItem('user', user);
localStorage.setItem('object', JSON.stringify(myObject));
localStorage.setItem('array', JSON.stringify(myArray));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('object')));
console.log(JSON.parse(localStorage.getItem('array')));
~~~
output:
~~~
Alice
{name: 'Bob', info: {favoriteClass: 'CS 260', likesCS: true}
[1, 'One', true]
~~~
**Promises**

Promise stages:
1. pending - Currently running asynchronously
2. fulfilled - Completed successfully
3. rejected - Failed to complete

~~~
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
~~~
~~~
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
~~~
- output displays pending first and after a few seconds displayes fulfulled
- then, catch, finally:
~~~
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
~~~

*Async/await*
- version of the above coinToss:
~~~
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
~~~
**MY HTML**
~~~
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset "UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SuomiPractice HTML</title>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <header>
      <div class="top-bar">
        <h1>Suomi Practice</h1>
        <nav>
            <menu>
              <li><a href="index.html">Login</a></li>
              <li><a href="practice.html">Practice</a></li>
              <li><a href="progress.html">Progress</a></li>
            </menu>
        </nav>
      </div>
      <hr />
    </header>
    <main>
      <div class="container">
        <img src="https://media.architecturaldigest.com/photos/58f62c148bfbf566da78abef/16:9/w_2240,c_limit/Finland.jpg" width="100%">
        <div class="text-block">
          <h2>Login Here</h2>
          <div class="login">
            <form method="get" action="practice.html">
              <label for="name">Name:</label>
              <input type="text" class="placeholder" id="name" placeholder="Enter your name" />
              <button type="submit" class="button">Login</button>
            </form>
          </div>
        </div> 
      </div>
    </main>
    <footer>
      <hr />
      <div class="footer-nav">   
        <p>Author's name: Myriam Anderson</p>
        <a href="https://github.com/myriambyu/startup.git">GitHub</a>
      </div>
    </footer>
  </body>
</html>
~~~
**MY CSS**
~~~
body {
  display: flex;
  flex-direction:column;
  background-color: #CC7A56;
  color: white;
  min-width: 300px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
header {
  flex: 0, 75px;
}
main {
  flex: 1 calc(90vh - 110px);
  display: flex;
  flex-direction: column;
}
footer {
  flex: 0, 50px;
}
.footer-nav a {
  text-decoration: none;
  color:#3f5a36;
  font-size: 1.5vw;
}
.top-bar {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}
menu {
  padding-left: 80px;
  flex: 1;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  gap: 3.5em;
  font-size: 1.5vw;
  justify-content: center;
}
.row {
    display: flex;
    background-color: white;
    color: black;
    padding: 10px;
    border-radius: 10px;
  }
  
  .column {
    flex: 33.33%;
    padding: 10px;
    text-align: center;
    font-size: 30px;
    color: black;
  }
  nav a {
    text-decoration: none;
    color: #3f5a36;
  }
  img {
    border-radius: 10px;
  }
  .users {
    text-align: right;
    font-size: 1.2vw;
    display: flex;
    position: absolute;
    right: 1%;
  }
  h1 {
    font-size: 3vw;
  }
  .quote {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    padding-bottom: 20px;
    padding-top: 10px;
  }
  h3 {
    font-size: 1.5vw;
  }
  p {
    font-size: 1.4vw;
  }
  .footer-nav {
    display: flex;
    flex-direction: row;
    gap: 3em;
    justify-content: center;
    align-items: center;
  
  }
  .button {
  background-color:#3f5a36;
  color: white;
  border-radius: 5px;
  border-style: none;
  height: 40px;
  padding: 0px 15px 3px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size:large;
  }
  .button:hover {
    border: 1px solid white;
  }
  .placeholder {
    height: 39px;
    padding: 0px;
    border-radius: 5px;
    border-style: none;
    font-family:Georgia, 'Times New Roman', Times, serif;
    padding-left: 5px;
    margin-left: 5px;
    margin-right: 10px;
    
  }
  .container {
    align-items: center;

  }
  .login {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h2 {
    font-size: 2vw;
  }
  .total {
    height: 30px;
    width: 30px;
    padding: 0px;
    border-radius: 5px;
    border-style: none;
    font-family:Georgia, 'Times New Roman', Times, serif;
    margin-left: 5px;
    margin-right: 10px;
    justify-content: center;
    text-align: center;
  }
  .practice {
    text-decoration: none;
    background-color:#3f5a36;
    color: white;
    border-radius: 5px;
    border-style: none;
    height: 40px;
    padding: 0px 15px 3px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size:large;
  }
  .practice:hover {
    border: 1px solid white;
  }
  .practice a {
    text-decoration: none;
    color: white;
  }
  .column a {
    text-decoration: none;
    color:#3f5a36;
  }
 progress {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
 }
 
 table {
  width: 99%;
  border: 1px solid;
  margin: auto;
  justify-content: center;
  align-items: center;

 }
 table, td {
  padding: 25px;
  align-items: center;
  justify-content: center;
  text-align: center;
 }
 .progress {
  padding: 10px;
 }
 td {
  width: 30%;
 }
 tr {
  width: 30%;
 }
 .round {
  background-color:#3f5a36;
  color: white;
  border-radius: 50%;
  text-align: center;
  height: 20px;
  justify-content: center;
 }
 main a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
 }
 .flash-content {
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 90%;
  height: 80%;
  gap: 1em;
  justify-content: center;
  align-items: center;
 }
 .card {
  padding: 200px;
  background-color: white;
  color:#3f5a36;
  text-align: center;
  font-size: 3vw;
  margin-bottom: 10px;
 }
 .flashcard {
  text-align: center;
 }
 .see {
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
  cursor: pointer;
	outline: inherit;
 }
 @media (max-height: 600px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
  main {
    flex: 1 100vh;
  }
  
}
@media (max-width: 900px) {
  .card {
    padding:100px;
  }
  table {
    width: 100px;
  }
  .row {
    flex-direction: column;
    align-items: center;
  }
  .column {
    width: 400px;
  }
}
~~~


