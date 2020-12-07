## Make a Scene

### What is this app about?

[Check out the website here](https://make-a-scene.netlify.app/)

Make a Scene is a platform where you can create scripted conversations and turn them into an animated scene. Once you've created your scene it is listed on the platform so other users can watch it and share their comments 

### App demo

![App demo](https://github.com/TdWa/make-a-scene-frontend/blob/development/readme-assets/Make%20a%20Scene%20demo.gif)

### Used technologies and concepts

- NodeJS

#### Frontend
- TypeScript
- React
- Redux
- Axios
- Styled-Components

#### Backend
- Express REST API
- JWT & Bcrypt Authentication
- Postgress database
- Sequelize ORM

### Goals for this project

- demonstrate the main skills I've learned at the Codaisseur Academy. 
- build a full-stack web app from a first idea into a working version within a two-week sprint
- practice planning with user-stories, wireframes, datamodels, a kanban projectboard and git version control
- extend my coding knowledge and try out new technologies. I chose to use this opportunity to learn TypeScript and Styled-Components. 

### User stories

- As a user I can sign up to make an account and login. This way I can save my data and share my work with other users.
- As a user I can build a script and play it as a scene.
  - I can add a description to my scene
  - I can choose between one or two actors
  - I can customize the color and names of my scene and my actors
  - I can add phrases to my script
  - I can edit my choices
 - As a user I have a profile page where
  - I see an overview of the scenes I made
  - I can delete scenes
  - I can navigate to edit my scenes or view their public page
  - I can set an about-text to describe myself or my projects to other users
 - As a user I can visit a page to discover all the existing scenes
  - From there I can navigate to the page of an individual scene or of an author
 - As a user I can navigate to an author page to
   - Read the about-text of the author (if there is one)
   - See a list of the scenes of this author
  - As a user I can go to the view-page of an individual scene and
   - Play the scene
   - See a description of the scene (if there is one)
   - comment on the scene
   - delete my comments
   
### Project Board

See the [Github projects kanban board](https://github.com/TdWa/make-a-scene-frontend/projects/1)
 
### Wireframe

See the [original wireframes at figma.com](https://www.figma.com/file/OqPtvtb1gbiiSsMcDMCJrv/Make-a-Scene?node-id=0%3A1)
These are the wireframes I made at the beginning of the project. I stuck with them for the most part, but also ended up adding one additional page.
I added a "new-scene" page before the "scenebuilder-page" to first create the scene in the database and then navigate to the builder page with the given ID.

### Datamodel

See the [database model at dbdiagram.io](https://dbdiagram.io/d/5fbbc5eb3a78976d7b7d10ac)

### Backend server repo

[See make-a-scene-backend on GitHub](https://github.com/TdWa/make-a-scene-backend)

### Plans to extend project

On my project board I have added a list of features I have in mind to add to the project. Many of these features were already considered in the design of the project but I did not have time to add everything within two weeks. For example regarding the animation of the actors:

- The actor animations are not simple images, but consist of about 20 individual parts (so far) which could be easily manipulated (for example to make the characters walk, wave, tap their foot, etc.) 
- The faces of the actors are made up of text characters (usually rotated 90deg) which are stored in an object passed down through props. These can be easily changed to make any kind of plain text smiley face you can imagine.
- The ability to easily manipulate the actors is one of the reasons why I chose to use Styled-Components. They make it very convenient to make and change CSS rules with JavasSript logic and variables.
