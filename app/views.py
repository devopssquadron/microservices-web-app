from flask import Flask, render_template, request, session, jsonify, abort
from app import app


@app.route("/", methods=["GET"])
def index():
    return render_template('index.html')
