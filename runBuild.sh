#!bin/bash
docker build -t l3043y/nestjs-iot-server . 
docker run -dp 8080:8080 l3043y/nestjs-iot-server