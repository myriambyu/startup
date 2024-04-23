#CS 260 NOTES

##Service

#TCP/IC Layers
- Application	HTTPS	Functionality like web browsing
- Transport	TCP	Moving connection information packets
- Internet	IP	Establishing connections
- Link	Fiber, hardware	Physical connections

*URL ports*
- Scheme	(https)	The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.
- Domain name	(byu.edu)	The domain name that owns the resource represented by the URL.
- Port	(3000)	The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.
- Path	(/school/byu/user/8014)	The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.
- Parameters	(filter=names&highlight=intro,summary)	The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.
- Anchor	(summary)	The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.

  
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

*importing fonts*
~~~
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}
~~~
~~~
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
~~~
*animation*
~~~
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
~~~


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
When one device wants to talk to another it must have an IP address. For example, 128.187.16.184 is BYU's address. Usually, human users prefer a symbolic name over an IP address. The symbolic name is called a domain name. Domain names are converted to IP address by doing a lookup in the Domain Name System (DNS). You can look up the IP address for any domain name using the dig console utility.
You can determine the hops in a connection using the traceroute console utility.
The actual sending of data across the internet uses the TCP/IP model. This is a layered architecture that covers everything from the physical wires to the data that a web application sends. At the top of the TCP/IP protocol is the application layer. It represents user functionality, such as the web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC). Underneath that is the transport layer which breaks the application layer's information into small chunks and sends the data. The actual connection is made using the internet layer. This finds the device you want to talk to and keeps the connection alive. Finally, at the bottom of the model is the link layer which deals with the physical connections and hardware.

TCP/IP layers
Layer	Example	Purpose
Application	HTTPS	Functionality like web browsing
Transport	TCP	Moving connection information packets
Internet	IP	Establishing connections
Link	Fiber, hardware	Physical connections

Microservices
Web services that provide a single functional purpose are referred to as microservices. By partitioning functionality into small logical chunks, you can develop and manage them independently from other functionality in a larger system. They can also handle large fluctuations in user demand by simply running more and more stateless copies of the microservice from multiple virtual servers hosted in a dynamic cloud environment. For example, one microservice for generating your genealogical family tree might be able to handle 1,000 users concurrently. So in order to support 1 million users, you just deploy 1,000 instances of the service running on scalable virtual hardware.

Serverless
The idea of microservices naturally evolved into the world of serverless functionality where the server is conceptually removed from the architecture and you just write a function that speaks HTTP. That function is loaded through an gateway that maps a web request to the function. The gateway automatically scales the hardware needed to host the serverless function based on demand. This reduces what the web application developer needs to think about down to a single independent function.

In the instruction about the internet we showed how an IP address can be referenced by a domain name. You can get the IP address for any domain using the dig console utility. Notice that in the following example there are actually multiple IP addresses associated with the domain name amazon.com. This allows for redundancy in case one of the IP addresses fails to successfully resolve to a valid connection because the server listening at that IP address is not responding.

A domain name is simply a text string that follows a specific naming convention and is listed in a special database called the domain name registry.

Domain names are broken up into a root domain, with one or more possible subdomain prefixes. The root domain is represented by a secondary level domain and a top level domain. The top level domain (TLD) represent things like com, edu, or click. So a root domain would look something like byu.edu, google.com, or cs260.click. The possible list of TLDs is controlled by ICANN, one of the governing boards of the internet.

You can get information about a domain name from the domain name registry using the whois console utility.

DNS
Once a domain name is in the registry it can be listed with a domain name system (DNS) server and associated with an IP address. Of course you must also lease the IP address before you can use it to uniquely identify a device on the internet, but that is a topic for another time. Every DNS server in the world references a few special DNS servers that are considered the authoritative name servers for associating a domain name with an IP address.

The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. The main ones we are concerned with are the address (A) and the canonical name (CNAME) records. An A record is a straight mapping from a domain name to IP address. A CNAME record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map byu.com to the same IP address as byu.edu so that either one could be used.

When you enter a domain name into a browser, the browser first checks to see if it has the name already in its cache of names. If it does not, it contacts a DNS server and gets the IP address. The DNS server also keeps a cache of names. If the domain name is not in the cache, it will request the name from an authoritative name server. If the authority does not know the name then you get an unknown domain name error. If the process does resolve, then the browser makes the HTTP connection to the associated IP address.

As you can see, there is a lot of levels of name caching. This is done for performance reasons, but it also can be frustrating when you are trying to update the information associated with your domain name. This is where the time to live (TTL) setting for a domain record comes into play. You can set this to be something short like 5 minutes or as long as several days. The different caching layers should then honor the TTL and clear their cache after the requested period has passed.

Leasing a domain name
You can pay to lease an unused domain name for a specific period of time. Before the lease expires, you have the right to extend the lease for an additional amount of time. The cost to buy the domain varies from something like $3 to $200 a year. Buying, or sub-leasing, an existing domain name from a private party can be very expensive, and so you are better off buying something obscure like idigfor.gold (currently available for only $101). This is one reason why companies have such strange names these days.

Refer to the instruction on using Route 53 if you are interested in leasing a domain name.

~~~
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
~~~
Part	Example	Meaning
Scheme	https	The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.
Domain name	byu.edu	The domain name that owns the resource represented by the URL.
Port	3000	The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.
Path	/school/byu/user/8014	The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.
Parameters	filter=names&highlight=intro,summary	The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.
Anchor	summary	The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.
Technically you can also provide a user name and password before the domain name. This was used historically to authenticate access, but for security reasons this is deprecated. However, you will still see this convention for URLs that represent database connection strings.

URL, URN, and URI
You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be urn:isbn:10,0765350386. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL or a URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.

Port	Protocol
20	File Transfer Protocol (FTP) for data transfer
22	Secure Shell (SSH) for connecting to remote devices
25	Simple Mail Transfer Protocol (SMTP) for sending email
53	Domain Name System (DNS) for looking up IP addresses
80	Hypertext Transfer Protocol (HTTP) for web requests
110	Post Office Protocol (POP3) for retrieving email
123	Network Time Protocol (NTP) for managing time
161	Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
194	Internet Relay Chat (IRC) for chatting
443	HTTP Secure (HTTPS) for secure web requests

GET	Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.
POST	Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
PUT	Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.
DELETE	Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
OPTIONS	Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.

Code	Text	Meaning
100	Continue	The service is working on the request
200	Success	The requested resource was found and returned as appropriate.
201	Created	The request was successful and a new resource was created.
204	No Content	The request was successful but no resource is returned.
304	Not Modified	The cached version of the resource is still valid.
307	Permanent redirect	The resource is no longer at the requested location. The new location is specified in the response location header.
308	Temporary redirect	The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400	Bad request	The request was malformed or invalid.
401	Unauthorized	The request did not provide a valid authentication token.
403	Forbidden	The provided authentication token is not authorized for the resource.
404	Not found	An unknown resource was requested.
408	Request timeout	The request takes too long.
409	Conflict	The provided resource represents an out of date version of the resource.
418	I'm a teapot	The service refuses to brew coffee in a teapot.
429	Too many requests	The client is making too many requests in too short of a time period.
500	Internal server error	The server failed to properly process the request.
503	Service unavailable	The server is temporarily down. The client should try again with an exponential back off.

Header	Example	Meaning
Authorization	Bearer bGciOiJIUzI1NiIsI	A token that authorized the user making the request.
Accept	image/*	The format the client accepts. This may include wildcards.
Content-Type	text/html; charset=utf-8	The format of the content being sent. These are described using standard MIME types.
Cookie	SessionID=39s8cgj34; csrftoken=9dck2	Key value pairs that are generated by the server and stored on the client.
Host	info.cern.ch	The domain name of the server. This is required in all requests.
Origin	cs260.click	Identifies the origin that caused the request. A host may only allow requests from specific origins.
Access-Control-Allow-Origin	https://cs260.click	Server response of what origins can make a request. This may include a wildcard.
Content-Length	368	The number of bytes contained in the response.
Cache-Control	public, max-age=604800	Tells the client how it can cache the response.
User-Agent	Mozilla/5.0 (Macintosh)	The client application making the request.

Body
The format of the body of an HTTP request or response is defined by the Content-Type header. For example, it may be HTML text (text/html), a binary image format (image/png), JSON (application/json), or JavaScript (text/javascript). A client may specify what formats it accepts using the accept header.

In the previous instruction you saw how to use Node.js to create a simple web server. This works great for little projects where you are trying to quickly serve up some web content, but to build a production-ready application you need a framework with a bit more functionality for easily implementing a full web service. This is where the Node package Express come in. Express provides support for:

Routing requests for service endpoints
Manipulating HTTP requests with JSON body content
Generating HTTP responses
Using middleware to add functionality

HTTP endpoints are implemented in Express by defining routes that call a function based upon an HTTP path. The Express app object supports all of the HTTP verbs as functions on the object. For example, if you want to have a route function that handles an HTTP GET request for the URL path /store/provo you would call the get method on the app.

app.get('/store/provo', (req, res, next) => {
  res.send({name: 'provo'});
});
The get function takes two parameters, a URL path matching pattern, and a callback function that is invoked when the pattern matches. The path matching parameter is used to match against the URL path of an incoming HTTP request.

The callback function has three parameters that represent the HTTP request object (req), the HTTP response object (res), and the next routing function that Express expects to be called if this routing function wants another function to generate a response.

The Express app compares the routing function patterns in the order that they are added to the Express app object. So if you have two routing functions with patterns that both match, the first one that was added will be called and given the next matching function in the next parameter.

In our example above we hard coded the store name to be provo. A real store endpoint would allow any store name to be provided as a parameter in the path. Express supports path parameters by prefixing the parameter name with a colon (:). Express creates a map of path parameters and populates it with the matching values found in the URL path. You then reference the parameters using the req.params object. Using this pattern you can rewrite our getStore endpoint as follows.

Backend code
In order to build storage support into our server, we first install the Multer NPM package to our project. There are other NPM packages that we can chose from, but Multer is commonly used. From your project directory, run the following console command.

npm install multer
Multer handles reading the file from the HTTP request, enforcing the size limit of the upload, and storing the file in the uploads directory. Additionally our service code does the following:

Handles requests for static files so that we can serve up our frontend code.
Handles errors such as when the 64k file limit is violated.
Provides a GET endpoint to serve up a file from the uploads directory.

Storage Services AWS S3

Authorization services
If your application is going to remember a user's data then it will need a way to uniquely associate the data with a particular credential. That usually means that you authenticate a user by asking for information, such as an email address and password. You then remember, for some period of time, that the user has authenticated by storing an authentication token on the user's device. Often that token is stored in a cookie that is passed back to your web service on each request. The service can now associate data that the user supplies with a unique identifier that corresponds to their authorization token.

GetMe endpoint
This uses the authentication token stored in the cookie to look up and return information about the authenticated user. If the token or user do not exist it returns a 401 (unauthorized) status code.

When you run a program from the console, the program will automatically terminate when you close the console or if the computer restarts. In order to keep programs running after a shutdown you need to register it as a daemon. The term daemon comes from the idea of something that is always there working in the background. Hopefully you only have good daemons running in your background.

We want our web services to continue running as a daemon. We would also like an easy way to start and stop our services. That is what Process Manager 2 (PM2) does.

Command	Purpose
pm2 ls	List all of the hosted node processes
pm2 monit	Visual monitor
pm2 start index.js -n simon	Add a new process with an explicit name
pm2 start index.js -n startup -- 4000	Add a new process with an explicit name and port parameter
pm2 stop simon	Stop a process
pm2 restart simon	Restart a process
pm2 delete simon	Delete a process from being hosted
pm2 delete all	Delete all processes
pm2 save	Save the current processes across reboot
pm2 restart all	Reload all of the processes
pm2 restart simon --update-env	Reload process and update the node version to the current environment definition
pm2 update	Reload pm2
pm2 start env.js --watch --ignore-watch="node_modules"	Automatically reload service when index.js changes
pm2 describe simon	Describe detailed process information
pm2 startup	Displays the command to run to keep PM2 running after a reboot.
pm2 logs simon	Display process logs
pm2 env 0	Display environment variables for process. Use pm2 ls to get the process ID


Creating a WebSocket conversation
JavaScript running on a browser can initiate a WebSocket connection with the browser's WebSocket API. First you create a WebSocket object by specifying the port you want to communicate on.

You can then send messages with the send function, and register a callback using the onmessage function to receive messages.
~~~
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
~~~
The server uses the ws package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer, you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a connection: Upgrade header.

When a connection is detected it calls the server's on connection callback. The server can then send messages with the send function, and register a callback using the on message function to receive messages.

react
~~~
const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);
~~~
~~~
const i = 3;
const list = React.createElement(
  'ol',
  { class: 'big' },
  React.createElement('li', null, 'Item ', i),
  React.createElement('li', null, 'Item ', 3 + i)
);

~~~
The render function
One of the primary purposes of a component is to generate the user interface. This is done with the component's render function. Whatever is returned from the render function is inserted into the component HTML element.

As a simple example, a JSX file containing a React component element named Demo would cause React to load the Demo component, call the render function, and insert the result into the place of the Demo element.
~~~
<div>
  Component: <Demo />
</div>
~~~
~~~
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
~~~
In addition to properties, a component can have internal state. Component state is created by calling the React.useState hook function. The useState function returns a variable that contains the current state and a function to update the state. The following example creates a state variable called clicked and toggles the click state in the updateClicked function that gets called when the paragraph text is clicked.

~~~
const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
~~~
Toolchains
As web programming becomes more and more complex it became necessary to abstract away some of that complexity with a series of tools. Some common functional pieces in a web application tool chain include:

Code repository - Stores code in a shared, versioned location.
Linter - Removes, or warns of, non-idiomatic code usage.
Prettier - Formats code according to a shared standard.
Transpiler - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
Polyfill - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
Bundler - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
Minifier - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
Testing - Automated tests at multiple levels to ensure correctness.
Deployment - Automated packaging and delivery of code from the development environment to the production environment.

vite

Directory	File	Purpose
./		
index.html	Primary page for the application. This is the starting point to load all of the JSX components beginning with main.jsx.
package.json	NPM definition for package dependencies and script commands. This is what maps npm run dev to actually start up Vite.
package-lock.json	Version constraints for included packages (do not edit this).
vite.config.js	Configuration setting for Vite. Specifically this sets up React for development.
./public		
vite.svg	Vite logo for use as favicon and for display in the app.
./src		
main.jsx	Entry point for code execution. This simply loads the App component found in App.jsx.
index.css	CSS for the entire application.
App.jsx	JSX for top level application component. This displays the logs and implements the click counter.
App.css	CSS for the top level application component.
./src/assets		
react.svg	React logo for display in the app.

JSX vs JS
The Vite CLI uses the .jsx extension for JSX files instead of the JavaScript .js extension. The Babel transpiler will work with either one, but some editor tools will work differently based upon the extension. For this reason, you should prefer .jsx for files that contain JSX. The developers at AirBNB had an interesting conversation on this topic that you might browse if you would like to consider the differing opinions on this subject.

Building a production release
When you execute npm run dev you are bundling the code to a temporary directory that the Vite debug HTTP server loads from. When you want to bundle your application so that you can deploy to a production environment you need to run npm run build. This executes the build script found in your package.json and invokes the Vite CLI. vite build transpiles, minifies, injects the proper JavaScript, and then outputs everything to a deployment-ready version contained in a distribution subdirectory named dist.

router
A web framework router provides essential functionality for single-page applications. With a multiple-webpage application the headers, footers, navigation, and common components must be either duplicated in each HTML page, or injected before the server sends the page to the browser. With a single page application, the browser only loads one HTML page and then JavaScript is used to manipulate the DOM and give it the appearance of multiple pages. The router defines the routes a user can take through the application, and automatically manipulates the DOM to display the appropriate framework components.

React does not have a standard router package, and there are many that you can choose from. We will use react-router-dom Version 6. The simplified routing functionality of React-router-dom derives from the project react-router for its core functionality. Do not confuse the two, or versions of react-router-dom before version 6, when reading tutorials and documentation.

A basic implementation of the router consists of a BrowserRouter component that encapsulates the entire application and controls the routing action. The Link, or NavLink, component captures user navigation events and modifies what is rendered by the Routes component by matching up the to and path attributes.
~~~
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
~~~
reactivity

Making the UI react to changes in user input or data, is one of the architectural foundations of React. React enables reactivity with three major pieces of a React component: props, state, and render.

When a component's JSX is rendered, React parses the JSX and creates a list of any references to the component's state or prop objects. React then monitors those objects and if it detects that they have changed it will call the component's render function so that the impact of the change is visualized.

The following example contains two components: a parent <Survey/> component and a child <Question/> component. The Survey has a state named color. The Question has a property named answer. The Survey passes its color state to the Question as a property. This means that any change to the Survey's color will also be reflected in the Question's color. This is a powerful means for a parent to control a child's functionality.

Be careful about your assumptions of when state is updated. Just because you called updateState does not mean that you can access the updated state on the next line of code. The update happens asynchronously, and therefore you never really know when it is going to happen. You only know that it will eventually happen.

~~~
const Survey = () => {
  const [color, updateColor] = React.useState('#737AB0');

  // When the color changes update the state
  const onChange = (e) => {
    updateColor(e.target.value);
  };

  return (
    <div>
      <h1>Survey</h1>

      {/* Pass the Survey color  as a parameter to the Question.
          When the color changes the Question parameter will also be updated and rendered. */}
      <Question answer={color} />

      <p>
        <span>Pick a color: </span>
        {/* Set the Survey color state as a the value of the color picker.
            When the color changes, the value will also be updated and rendered. */}
        <input type='color' onChange={(e) => onChange(e)} value={color} />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ answer }) => {
  return (
    <div>
      {/* Answer rerendered whenever the parameter changes */}
      <p>Your answer: {answer}</p>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById('root'));
~~~
react hooks

React hooks allow React function style components to be able to do everything that a class style component can do and more. Additionally, as new features are added to React they are including them as hooks. This makes function style components the preferred way of doing things in React. You have already seen one use of hooks to declare and update state in a function component with the useState hook.

~~~
function Clicker({initialCount}) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

ReactDOM.render(<Clicker initialCount={3} />, document.getElementById('root'));
~~~
The useEffect hook allows you to represent lifecycle events. For example, if you want to run a function every time the component completes rendering, you could do the following.
~~~
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
~~~
~~~
function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
~~~
Hook dependencies
You can control what triggers a useEffect hook by specifying its dependencies. In the following example we have two state variables, but we only want the useEffect hook to be called when the component is initially called and when the first variable is clicked. To accomplish this you pass an array of dependencies as a second parameter to the useEffect call.
~~~
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
~~~
