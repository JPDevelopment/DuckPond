# duckPond

This is a small Node.js command line application that simulates ducks swimming around in a pond. The pond is represented by a grid, and a duck occupies one square on the grid.

## Installing and Running duckPond

Navigate to the duckPond directory and use `npm install` to install the necessary Node modules. To run the program, use `node pond.js`.

## User Input

Create and deploy ducks in 4 easy steps!

The first prompt will ask the user: `Enter the Pond's Upper-Right Coordinates`. Use two integers separated by a single space to determine the maximum size of the pond. For example, `5 10` would generate a pond that is 5 horizontal spaces and 10 vertical spaces on a grid.

The second prompt asks the user `Would you like to make a new duck? Y/N` to which you can reply `Y` or `N`. This will create a new instance of the Duck class.

The third prompt is `Enter Duck's Position and Facing`. This expects the user to enter two integers and a single letter representing the cardinal direction the duck will start facing (`N`, `E`, `S`, or `W`). For example, to start the duck at 2, 3 and facing north a user would input `2 3 N'

The fourth prompt is `Enter Duck's Movement Commands` and expects a string of movement directions. There are three options:
- `F` commands the duck to move forward one space
- `P` commands the duck to rotate 90 degrees to the left (port side)
- `S` commands the duck to rotate 90 degrees to the right (starboard side)

For example, the input `FSFFP` would tell the duck to go forward one space, rotate 90 degrees to the right, move forward two spaces, and then rotate 90 degrees to the left.

Once that is done, the user is asked if they'd like to make another duck. The user can repeat this as many times as is desired. Once `N` is selected, the final coordinates and facing of each duck will be printed to the console.
