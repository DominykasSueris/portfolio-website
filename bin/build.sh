#!/bin/sh

docker buildx build --platform linux/arm -t dominykassueris/portfolio-website . --push