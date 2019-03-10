### install python bits with:
    pip install -r requirements.txt

### build and run the docker container with:
    docker build -t web-app:latest .
    docker run -d -p 5000:5000 --name web-app web-app
