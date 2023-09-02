# News Explorer - Frontend

## Project Concept

Develop a web application where users can search for news articles from various sources and save them to their user profiles.

![Project Concept Image](image-link)

---

## Table of Contents

1. [Features](#features)
2. [Front-End Implementation](#front-end-implementation)
3. [Challenges](#challenges)
4. [Design](#design)

---

### Features

The application offers two main functionalities:

1. **Article Search:** Users can enter a keyword into a search bar. The application then sends a request to the News API, finds relevant articles published within the last week, and displays them as a list of cards.

2. **Saved Articles:** A specialized section displays articles that the user has saved, providing a convenient way to revisit them.

---

### Front-End Implementation

#### Pages:

1. **Main Page:** Contains a search box for news article lookup.

2. **Saved News:** Displays all articles that the user has saved or "liked."

#### Popup Windows:

1. **Registration Form:** Allows new users to sign up.

2. **Login Form:** Allows existing users to log in.

#### Reusable Components:

The frontend is built using React. We utilize reusable components and style them according to BEM specifications.

---

### Challenges

1. **Preloader:** Implement a preloader animation that displays while waiting for the News API to respond.

2. **Dynamic Header:** The website header should display differently based on whether the user is logged in or not.

---

### Design

The design mockups are available on Figma [here](https://www.figma.com/file/P64RFFkY2VbDhR51rbscAq/Diploma-WEB-v2.0-EN-US).

For those having trouble with Figma, you can download the `.fig` file [here](download-link).

---

