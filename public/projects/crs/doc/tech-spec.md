## Setup

To setup this project, you need to install the following prerequisite software:

- Docker
- Docker Compose
- Python
- PIP
- NodeJS
- Yarn
- Anaconda

Then, follow the following steps to setup the project:

1. Clone this repo
```bash
git clone --recursive https://github.com/redfrogsss/CRS
```

2. To run the fronend, start a new terminal and run the following commands:
```bash
cd frontend && yarn && yarn start
```

3. To run the backend, start a new terminal and run the following commands:
```bash
cd backend && pipenv install && pipenv run python app.py
```

4. To run the MySQL database, start a new terminal and run the following commands:
```bash
cd mysql && docker-compose up
```

5. To run the conversational recommender module, follow [CRSLab's readme instruction](https://github.com/redfrogsss/CRSLab) inside the `CRSLab` folder.

## Learn More
This project was built by [Jacky FAN](https://jacky.fan) for the Final Year Project during 2022 and 2023.

The following tech is used in this project: 
- [ReactJS](https://react.dev/) - Frontend framework of this project
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework for styling
- [Flowbite](https://flowbite.com/) - UI components library based on TailwindCSS
- [Python Flask](https://flask.palletsprojects.com/en/2.3.x/) - Backend framework of this project
- [MySQL](https://www.mysql.com/) - Database of this project
- [Docker](https://www.docker.com/) - Container platform for running MySQL
- [CRSLab](https://github.com/RUCAIBox/CRSLab) - Open-source toolkit for building Conversational Recommender System
- [Google Search API](https://developers.google.com/custom-search/) - Google Search for searching movie poster
