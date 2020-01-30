#!/bin/bash
# what was this^ again? is it necessary?

# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

# is this the correct url? (production vs development?)

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "username": "'"${USERNAME}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
