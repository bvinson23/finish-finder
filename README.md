# Finish Finder

Finish Finder is a React App that lets the user make finish boards without having to go to several different websites. A user is able to view, create, edit, and delete finish boards using the database of paints, vinyl bases, and carpets.

## Installation

Run the following commands in the terminal:

```bash
git clone git@github.com:bvinson23/finish-finder.git
cd finish-finder
npm install
npm start
```

The final command will run the app at localhost:3000.
## Usage

### Register a new user

When a user first opens the app, they will be prompted to log in or register for an account. Once registered, they will be redirected to the homepage, which shows any boards they've created and a button to create a new board.

![Homepage image](/src/images/homepage.png)

### Creating a board

Once the user is authenticated, the user will be given the opportunity to create a new board by clicking the 'Create a Board' button. This will bring the user to the board creation page.

![Boardform](/src/images/boardform.png)

From here, the user will start by filtering the paints by color by using the dropdown of colors. Once the user has selected a color, all paints with a matching color are displayed.

![Color Selection](/src/images/colorselection.png)

When the user clicks the 'Add Paint' button, the paint will appear in the selections area on the right side of the page. The user will then do the same actions for the other finishes, until they have selected one finish of each. The user can then name their board.

![Selection Preview](/src/images/selectionpreview.png)