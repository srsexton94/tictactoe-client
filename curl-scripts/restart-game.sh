# can add optional [?over=BOOLEAN] to url to specify games that are over
# or games that are not --> should use here??

curl "https://tic-tac-toe-wdi.herokuapp.com/games${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \

echo
