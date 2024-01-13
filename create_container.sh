#!/bin/bash

CONTAINER_NAME='random_quote_app'
IMAGE_NAME='samjgoes/random_quote_machine:v0.0.0'

docker create \
	--name $CONTAINER_NAME \
    -p 3000:3000 \
    -v /$HOME/random-quote-machine/src:/app/src \
    -v /$HOME/random-quote-machine/public:/app/public \
    -v /$HOME/random-quote-machine/package.json:/app/package.json \
    -v /$HOME/random-quote-machine/.eslintrc.json:/app/.eslintrc.json \
    -v /$HOME/random-quote-machine/.prettierrc:/app/.prettierrc \
    $IMAGE_NAME 
