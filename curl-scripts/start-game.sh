#!/bin/bash

# Double check API data format when on internet!!!
curl --include --request POST https://tic-tac-toe-wdi.herokuapp.com/games \
--header "Content-type: application/json" \
--data '{

  }
}'

echo
