#!/bin/bash
https://tic-tac-toe-wdi.herokuapp.com/games

curl --include --request PATCH https://tic-tac-toe-wdi.herokuapp.com/games/${ID} \
  --header "Content-type: application/json" \
  --data '{

  }'

echo
