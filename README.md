# SuomiPractice
start up application BYU CS 260
[Link to notes file](notes.md)

## Specification Deliverable

### Elevator Pitch

Retaining mission languages can be hard. Vocabulary is often the first thing to go. When time is short and life gets busy, quizlet and flashcards seem to be left behind. The Suomi Practice application is designed to help you retain your vocabulary in a time efficient manner. With a variety of different topics, you can review your Finnish vocabulary in a way that reviews the words you know less often and the ones you’re working on more often and saves your progress as you go!  

### Design

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
- 


