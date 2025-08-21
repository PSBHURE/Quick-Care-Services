#!/bin/bash

set -ex

sudo apt update -y

sudo apt-get install -y docker.io

sudo apt-get install -y docker-compose-v2

sudo usermod -aG docker ubuntu

sudo systemctl enable docker

sudo systemctl start docker

sudo docker --version

sudo docker compose version