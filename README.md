# SuomiPractice
start up application BYU CS 260
[Link to notes file](notes.md)

## Specification Deliverable

### Elevator Pitch

Retaining mission languages can be hard. Vocabulary is often the first thing to go. When time is short and life gets busy, quizlet and flashcards seem to be left behind. The Suomi Practice application is designed to help you retain your vocabulary in a time efficient manner. With a variety of different topics, you can review your Finnish vocabulary in a way that reviews the words you know less often and the ones you’re working on more often and saves your progress as you go!  

### Design

<img src="https://github.com/myriambyu/startup/assets/156371593/3dd8743f-ca35-4fd5-8ede-c13f23c5749f" width="600">
<img src="https://github.com/myriambyu/startup/assets/156371593/791083ef-4e36-4138-b44e-84dcb0150f6f" width="600">
<img src="https://github.com/myriambyu/startup/assets/156371593/ce0b3ea1-aacb-4832-8893-31dbe9439b8a" width="600">

### Key Features

- Login
- Display of Categories
- Ability to select which category to practice
- Display of vocab word
- Ability to see the answer in Finnish
- Ability to select “see more” or “see less”
- Results are stored and shuffled accordingly
- Display of next vocabulary word
- Display of total progress
- Display of progress in each category
- Display of total number of users who have mastered each category
- Ability to select categories to practice

### Technologies

Here are the ways I am going to use the required technologies:

- **HTML** - Uses 3 HTML pages with the correct HTML structure. The first page is for login, the second, for practicing vocab, and the third for viewing progress. Each page has a link to the other pages. 
- **CSS** - Styling that is balanced with a color theme that corresponds with the pictures used. Styling that fits different screen sizes and is consistent for each page.
- **JavaScript** - Provides login, displays the vocab categories, displays vocab answers, displays results, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - Login
  - Submitting category
  - Retrieving vocab words
  - Submitting word occurrence
  - Retrieving vocab words with new order
- **DB/Login** - Users, user credentials, categories, and vocabulary words are stored in the database.
- **WebSocket** - As users practice, they can view the total number of users who have mastered each category on the progress page.
- **React** - Porting from react, framework for program.

## HTML deliverable

➡️ I used HTML to structure my application

- **HTML pages** - 4 html pages for login, practice, flashcards, and progress.
- **HTML tags** - Each html page uses the tags for BODY, NAV, MAIN, HEADER, FOOTER.
- **Links** - All pages link to login, practice, and progress. Practice.html links to the flashcards page.
- **Textual content** - Finnish quote and vocabulary words.
- **3rd party service cells** - Placeholder for 3rd party service calls with login, retrieving vocab words, submitting word occurance.
- **Images** - Image on login page and images representing vocab categories on the practice page.
- **Login/User name display**  - Input box and submit button for login, placeholder for user name display.
- **Database** 10% - Placeholder for database data represented by vocabulary word flashcards on the flashcard page. 
- **WebSocket** - The count of total users mastered on the progress page.

## CSS deliverable

➡️ I used CSS to style my application

- **Header, footer, and main content body** - Used CSS to style these elements in each page of the application.
- **Navigation Elements** - Each page has a consistently styled navigation bar.
- **Window Resizing** - Flex is used to adjust the sizing of the content to match different window sizes. The header and footer dissapear and the sizing and layout of certain elements change to match smaller screens.
- **Elements** - Used consistent colors and a balance of space to content.
- **Text Content** -The font and basic layout is consistent.
- **Images** -The images are sized to match the layout of the application.

## JavaScript deliverable

➡️ I used JavaScript to add placeholders for future technology and for now the application works for a single user.

- [x] Prerequisite: Simon JavaScript deployed to your production environment
- [x] Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
- [x] Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. 
- [x] Prerequisite: At least 10 git commits spread consistently throughout the assignment period.
- **login** - When you press enter or the login button it takes you to the practice page.
- **database** - Displays the vocabulary words and their translations on the flashcards page. Currently this is stored and retrieved from local storage in an array, but it will be replaced with the database data later. The total progress is currently stored in a local storage file and is shown on the progress page.
- **WebSocket** - I used the setInterval function to periodically increase a random "total users mastered" count on the progress page. This will be replaced with WebSocket messages later.
- **application logic** - The flashcard flips when clicked on and displays the transltion. The next and previous buttons change the content of the flashcard. The progress bar and percentage corresponds to the number of flashcards the user has reached.

## Service deliverable

➡️ Below is an example of the information required for the Startup Service deliverable.

- [x] Prerequisite: Simon JavaScript deployed to your production environment
- [x] Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
- [x] Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. 
- [x] Prerequisite: At least 10 git commits spread consistently throughout the assignment period.
- **Service** - I created an HTTP service using Node.js and Express.
- **Middleware** - Frontend is served up using Express static middleware. 
- **Third Party Endpoints** - My frontend calls third party service endpoints on the progress page by displaying a user of the day. 
- **Backend Endpoints** - My backend provides service endpoints. It gets progress information from the flashcards page, sends it to the backend, and then returns the updated progress.
- **Frontend Endpoints** - My frontend calls my service endpoints using fetch and displays the result on the progress page.

## Login deliverable

-Below is the information required for the Login/Database deliverable.

- [x] Prerequisite: Simon JavaScript deployed to your production environment
- [x] Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
- [x] Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. 
- [x] Prerequisite: At least 10 git commits spread consistently throughout the assignment period.
- **Registration** - Supports new user registration.
- **Authentication** - Supports existing user authentication. 
- **DB Data** - Stores application data in MongoDB. Stores the user information and flashcard progress.
- **DB Credentials** - Stores and retrieves credentials in MongoDB. 
- **Restriction** - Restricts application functionality based upon authentication. 
 
