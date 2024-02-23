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


