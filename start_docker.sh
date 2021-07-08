#!/bin/bash

docker run -it --rm -v $(pwd):/project -p 4000:4000 node:latest /bin/bash

