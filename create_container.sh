#!/bin/bash

CONTAINER_NAME='random_quote_app'
IMAGE_NAME='automni/automni_config_web:v0.0.0'

docker create \
	--name $CONTAINER_NAME \
    --net=host\
    -v /$HOME/random_quote_machine/src:/automni_config_web/src \
    -v /$HOME/random_quote_machine/public:/automni_config_web/public \
    $IMAGE_NAME 
