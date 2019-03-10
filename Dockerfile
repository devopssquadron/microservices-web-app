FROM python:3.6-alpine

MAINTAINER DevOpsSquadron

RUN adduser -D web-app

WORKDIR /home/web-app

COPY requirements.txt requirements.txt
RUN python -m venv venv
RUN venv/bin/pip install -r requirements.txt
RUN venv/bin/pip install gunicorn

COPY app app
COPY web-app.py boot.sh ./
RUN chmod +x boot.sh

ENV FLASK_APP web-app.py

RUN chown -R web-app:web-app ./
USER web-app

EXPOSE 5000
ENTRYPOINT [ "./boot.sh" ]
