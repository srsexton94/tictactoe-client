// SUMMARIZED PROJECT INSTRUCTION - not final ReadMe
// commit notes:
# TicTacToe

## Objectives:

## Goals
Web app from scratch (individually, to someone else's spec), dynamic game with game logic mapped out & Readme.md - communicates with provided backend to store game states

## Requirements
* ~~Deploy online, on public GitHub page; work shared on GitHub repo~~ with frequent, cohesive commits
  - ~~pin as a GitHub 'Popular Repository'~~
  - Meaningful description field ~~(w/live URL github image)~~
  - List tech used, doc planning, dev process, problem solving, unsolved problems, wireframes/user stories (tell story!)
* Technical Specifications:
  - Custom game Engine, SPA - renders game board in browser, switch turns b/w tokens, visually display results
  - Support playing multiple games, one at a time
  - Use event handlers (jQuery/DOM) & AJAX for API interaction
* API Specifications:
  - CREATE new games on server, UPDATE game by storing new moves, & READ (index) game stats (ie total wins)
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
