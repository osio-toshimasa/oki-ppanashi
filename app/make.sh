set -eu

NAME=$1

opal --verbose --no-method-missing --compile ./app/"${NAME}".rb > ./docs/js/"${NAME}".js

