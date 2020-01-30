#!/bin/bash

# are these supposed to have quotes around the URL?!?
# (my jquery auth lesson has them, but my crud doesn't)
curl --include "https://tic-tac-toe-wdi.herokuapp.com/games"

echo
