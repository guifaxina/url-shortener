# What is the project?
This project is a RESTful API for an url shortener.

# Installation Guide

These instructions will get you a copy of the project up and running on your local machine.
The installation guide assumes that you have Docker and Docker Compose installed. Make sure that you have it and you are good to go!

1. Clone the project:
```sh
$ git clone "https://github.com/guifaxina/url-shortener.git" <optional:folder>
```
2. Open the folder that you specified
```sh
$ cd <folder>
```
3. Build the image and run a Docker container:
```sh
$ docker compose up && docker compose run -d 
```
The server will now be running on "http://localhost:3000"
### API Endpoints

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET    | /health-check | Retrieve server status. |
| GET    | /get-urls | Retrieve all shortened URLs. |
| GET    | /:id     | Redirects to original URL. |
| POST   | /short | Shortens the URL. |

### Built with
* TypeScript
* Node.js
  * Express
* PostgreSQL
* Redis
* Docker

### Author
* [Guilherme Faxina](https://www.linkedin.com/in/guifaxina/)

