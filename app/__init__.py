from flask import Flask, render_template, request

app = Flask(__name__)
app.config.from_pyfile('config.py')

from app import views
