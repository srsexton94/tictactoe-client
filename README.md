// SUMMARIZED PROJECT INSTRUCTION - not final ReadMe

// commit notes:
// adds bootstrap classes to html #game-board to set up layout for basic Tic Tac Toe
// removes form options from #game-start that were for possible stretch goals, leaves comment to add back later if there's time
// makes some HTML edits to get rid of linter errors
// creates an 'auth' subdirectory with api.js events.js and ui.js for code related to authentication
// adds correct filepath to authEvents and drafts out two gameEvents event handlers (onStartGame and onSelectSquare) in app.js
// removes template comments from app.js.
// adds require scripts to events.js with placeholder in getFormFields
// Adds requrie scripts and exports; and drafts onSignUp, onSignIn, onChangePassword, and onSignOut function logic, based on classwork examples, in events.js.
// cleans up events.js comments for readability
// drafts signUp, signIn, changePassword, and signOut in api.js based on classwork - adds comments to each to better remember purpose, and to note questions for later
// Adds require scripts and exports; and drafts out onSignUpSuccess/failure, onSignInSuccess/Failure, onChangePasswordSuccess/Failure, and onSignOutSuccess/failure in ui.js based off of classwork examples
// in ui.js, adds form reset option to failure cases, expands commenting for clarity, comments out some classwork code that may be useful later

# TicTacToe

## Objectives:

## Goals
Web app from scratch (individually, to someone else's spec), dynamic game with game logic mapped out & Readme.md - communicates with provided backend to store game states

## Requirements
* Deploy online, on public GitHub page - work shared on GitHub repo with frequent, cohesive commits
  - pin as a GitHub 'Popular Repository'
  - Meaningful description field (w/live URL github image)
  - List tech used, doc planning, dev process, problem solving, unsolved problems, wireframes/user stories (tell story!)
* Technical Specifications:
  - Custom game Engine, SPA - renders game board in browser, switch turns b/w tokens, visually display results
  - Support playing multiple games, one at a time
  - Use event handlers (jQuery/DOM) & AJAX for API interaction
* API Specifications:
  - CREATE new games on server, UPDATE game by storing new moves, & READ (show) game stats (ie total wins)
* Auth Specifications:
  - SignUP/IN/OUT & Change PW, display only when appropriate
  - Include success/failure feedback & clear forms after submit
* **DO NOT**
  - delete your repo, rely on refresh, have any bugs/non-functional buttons
  - show non-sensical actions
  - leave postulated forms after submit
  - continue play after win/tie, allow invalid moves, change player after invalid move
  - Use alerts(No!) or log *anything* to the console

## Evaluation Guidelines
* Completes user stories/wireframes? Creates schedule? Uses source control?
* App meets tech reqs? Runs? (How'd you break up functionality? problem solve?)
* Follows best practices? (Spacing, semantic names, etc..) Comments Code?
* Personal spin/creative element? Product of value & functional?

## Possible Schedule
* Planning (game-project-scope-study), Set Up (Browser Template, GitHub repo/deploy)
* Game UI: Design game board, add click handler, X/O markers, refuse if invalid
* Game Engine: Represent board in JS, track current player, add player to game board, rotate XO markers, refuse invalid choice, check board for winner
* Game UI: Update game engine w/game board update, add messaging (for 'next turn', invalid choice, 'game over'), disallow play after game end
* Authentication (api-token-auth): Sign UP/IN/OUT & Change PW (curl then webapp), success/failure messages
* Game API (jquery-ajax-crud): Create game, start new, update, play, & get games (curl then webapp)
* Final Touches (ReadMe, Troubleshoot/debug, style)

## Tips
* KISS and DRY, break into components, Whiteboards! Dev Tools!
* Review inclass lessons, ask Qs, Read documentation (esp jQuery)
* Commit & test early & often (& be adventurous! break the thing!)
* Go slow, be methodical
