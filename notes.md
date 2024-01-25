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
- Example codeing: \<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />

