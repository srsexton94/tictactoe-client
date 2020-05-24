# TicTacToe

![]('./public/new_gameboard.png')

## Objective:
Individually write a dynamic web app game, which communicates to a provided backend, to someone else's specifications:

## Specifications:
* Deploy your project online, on a public GitHub page which demonstrates frequent & cohesive commits
* A custom game engine displayed on a Single Page Application which does not utilize alerts, display information to the console, or rely on a page refresh for any functionality
* Supports playing multiple games, one at a time
* Actions on the webpage are displayed/accessible only when appropriate/sensible

### Technology Utilized:
* HTML5
* CSS3
* JavaScript (ES6)
* SASS
* Bootstrap
* jQuery
* AJAX
* Git/GitHub

### Planning and Development Process:
The planning process for this project began with detailing user stories and a wireframe.  From there, the use of a number of other organizational tools proved immensly helpful and are included below for reference.
![]('./public/wireframes.png')
* This project's [Wireframe](https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A1d93b5e2-73e1-4324-a0fe-a2ca2060ac76) helped in visualizing a possible end product. Articulating the visual wireframe in a [handwritten description](https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A9bdd5213-bd20-4aa0-9a6d-ed952558c257) helped detail necessary components of each view. (For legibility, the wireframe description has been transcribed below)
    - **View 1: Title Page** visible while unauthenticated
      - Main Title/header
      - Instructions/welcome paragraph
      - Initial Nav Bar
        - Sign Up link *(navigation)*
        - Sign In link *(navigation)*
      - About Us/Contact link *(navigation)*
    - **View 2: SignUp Form** visible while unauthenticated
      - Name, username, email, password, password confirmation
      - Submit button *(event)*
    - **View 3: SignIn Form** visible while unauthenticated
      - Username & password
      - Submit button *(event)*
    - **View 4: GameBoard (pregame)** visible while authenticated
      - Secondary title/header
      - Main Nav Bar
        - Instructions *(popup -> event?)*
        - About Us/Contact link *(navigation)*
        - Change Password link *(navigation)*
        - Sign Out link *(event - ALERT color? message?)*
      - Start Menu (make form if adding extra options)
        - Header, Start Game Button *(event)*
        - Possibly add 'pick symbol', 'play options' (ie alone, computer bot, multiplayer), 'size/difficulty', etc... *(all events)*
    - **View 5: GameBoard (during game)** visible while authenticated
      - Secondary title/header
      - Disable/hide main nav bar while playing
      - Player Boxes Display...
        - Username in place of "Player 1/2"
        - Chosen symbol (X or O, or emoji?? xD)
        - Total game tally
        - Current game score
        - Also indicate/focus on 'Active Player'
      - Game Board
        - Playspace grid (3x3 to start, maybe 5x5 for 'big'? 9x9 for suduko style?)
          - selectable squares *(event)*
      - Gameplay Link Bar
        - New Game
        - Pause Game
        - Quit Game
    - **View 6: Change Password Form** visible while authenticated
      - Username? Old password, new password
      - Submit button *(event)*
    - **View 7: Admin Page** visible in any state
      - "About Us" section: paragraph description, social media/github links?, photo?
      - "Contact Us" section:
        - Name, email, message section
        - Submit button *(send email - event?)*
* The *User Stories* for this project proved to be drawn somewhat too large in scope for the project's purposes; however, they still proved to be a useful thought exercise in approaching this project.
  1. As a game player, I want to play Tictactoe so that I have fun (or relieve boredom).
  1. As a unfamiliar player, I want to play so that I get acquainted with how the game works.
  1. As a competitive player, I want try and beat my friend so that prove my Tictactoe superiority! (ie will aim for complex/unexpected moves?)
  1. As a (fellow) developing programer, I want to play this game so that I can get some ideas on how a project like this may look/function.
  1. As a fellow programmer, I want to play alongside examining your code (such as through developer tools or github) so that I can get ideas or find solutions for a similar project or make suggestions/help improve yours.
  1. As a class instructor or other professional, I want to examine your code and end product so that I can assess how well you met the project requirements and understand your development as a coder.

![]('./public/flowchart.png')
* From there a [flow chart](https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A8568f70c-70b5-4084-b8cf-f0fb55046fe7) of each possible user action (detailing which events, and their types) offered a more explicit plan of attack and more assurance of completion.

![]('./public/eventfunclist.png')
* The [Event Function List](https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A9387f259-761c-4d90-9695-31e103683d16) further expounds on what actions/events are needed in order to successfully complete a user action, whether or not they involve API requests, and to which planned view they belong.

![]('./public/outline.png')
* Lastly, a rough [Project Outline](https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A03c9067c-2eaf-46d3-a03c-a66724837c32) helped categorize each of these component tasks into concrete categories, and organized each of the task categories into a logical order of completion.

### Problem Solving:
Problem solving proved essential for this project's completion.  A particular few of the API requests and the Game Logic prompted the most barriers to project development.

A review of this project's git commits, and related descriptions, clearly illustrates prominent issues within the main game logic.  The function gameEngine, which provided the logic for the brunt of the game's functionality, was originally approached with a radically different base structure.  The approach of converting the current game's cells array into a multidimensional array of coordinate pairs was originally intended to offer more reusability of the base code.  The theory followed that the coordinates could be broken into segments based on a provided gameboard size, and therefore be reused for a possble stretch goal of multiple game board sizes.

The contained issues with API requests, both through the game and authentication sections of the provided backend, can likely largely be attributed simply to the developers lack of familiarity with this medium.  However, through thorough research and methodically troubleshooting a number of discrete attempts, a viable product was ultimately produced; and it is this developer's belief that it meets all product specifications as outlined in the project instruction materials.

### Goals for Future Development:
When expanding this project for future development is is suggested that developers consider adding one or more of the following yet usolved problems:
* Improving web app visual design for improved user experience
* Improving styling to offer a more mobile-friendly user experience
* Adding an option for users to play, at least a round or two, as a "guest" - ie not needing to authenticate an account before playing.
* Adding a computer bot opponent that randomly assigns space selections to the second player
* Adding a choice to play on a number of differing boardsizes/difficulty
* Adding an automatic sign in (upon signing up)
* Adding a functional contact form for users or potential users (ie accesible regardless of authentication status) can contact the developer(s)

### UI Improvements
As the very first development project for this developer's Software Engineering career, the initial rendition left some to be desired especially in terms of UI and overall design.  At the programs culmination, this project was revisited to improve such.  These photos demonstrate the improvements made in this round of edits.
![]('./public/old_title.png')
![]('./public/old_gameboard.png')
![]('./public/new_title.png')
![]('./public/new_gameboard.png')
