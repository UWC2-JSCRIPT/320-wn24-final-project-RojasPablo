[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14083119&assignment_repo_type=AssignmentRepo)

# 320-Final-Project

Project requirements:

- Application is functional and provides an experience to the user
  - Your app runs and a user can interact with it to do something. Very open ended what this will be like. Use your creativity to make something fun!
- Application uses routes
  - App must include at least two routes, ideally one that takes params to call API data, but at minimum loads two or more routes in your Single Page Application. React Router strongly encouraged.
- Fetches external API
  - Whether an api you have created (like a firebase collection, or similar), or a published API, but it must pull data from an external source. **Must use the native fetch api.** No external libraries for data fetching (like axios or react-query). **EXCEPTION**: Can use Firebase SDK if you are using a Firebase App
- Application is deployed
  - Deployed and visible to the public. GitHub Pages, Vercel, Firebase, etc
- Submitted to GitHub properly
  - All work done on a feature branch and merged into the main branch
- Utilizes reusable components
  - As needed components will be flexible and reusable
- Uses prop-types
  - All components that take in props must use prop-types, no generic proptypes, they must be specific. For example, if it takes an array of data, it must be detailed to what that array of data looks like, not just a general array
- README updated
  - README updated to include:
  - the public facing url
  - a brief summary of your project
  - The answers to the following questions Fill out each of these with a few sentences (50 characters minimum):
  - What worked well in this project (what was easy/straightforward)?
  - What didn't work well (what was difficult to understand or parse)?
  - What changes would you make to this project now that it's deployed?
  - What would you improve and/or add to this project now that it's deployed?"
- Incorporates unit testing
  - At least one unit test must be included and working. Components reliant on api calls will not need to be unit tested, but anything that just relies on props will be easy to test. Must document how to run tests
- Utilzes Modern JavaScript
  - Utilizes modern methods of writing JS, no var keyword. Uses arrow functions where appropriate and uses modern methods (for example .map())
- App has styling and is polished
- Incorporate custom CSS to your project. Outside CSS libraries are allowed (Bootstrap, Tailwind, etc), Remove `console.log` statements once you're finished with development. Check for and remove Check for any React errors in the console. Fix linting issues

- ## JavaScript 320B - PetFinder App Final Project Notes
- ## Donna Quach, Kyle Lemons, Pablo Rojas

- Public Facing URL: https://js-320-app-deployment.vercel.app/
- Brief Summary: Our PetFinder App provides information on dogs and/or cats that are adoptable. It lists the pet's breed, age, gender, and pictures. At the same time, anyone who is interested in adopting a pet can reach out to the owner at the phone and/or email within the pet listing. Our app also has a fun gallery of dogs associated with an HTTP status.
- Questions (answers MUST be 50 characters minimum):

  - What worked well in this project (what was easy/straightforward)?
    - We had the opportunity to plan out our project in advance which included dividing up the work. It was helpful to have a timeline with milestones because it allowed us to keep track of our own to-do items, and it kept our project going.
  - What didn't work well (what was difficult to understand or parse)?
    - We found working with GitHub a little tricky at times. For instance, we were not sure how to undo changes/pushes to the repo that were accepted when we meant to request revisions. But with guidance, we were able to continue with updating our repo without any of our code going haywire.
  - What changes would you make to this project now that it's deployed?
    - We would have liked to implement a dynamic nav bar. One that when hovering over the Adopt route, it would display a drop down list of different pet types, such as dog, cat, bunny etc. That would then direct the user to pets of that type.
    - In addition, more routes that worked with our gallery. So implementing a button that would direct the user to a full size image of the http error, and then allowing the user to return to the gallery.
  - What would you improve and/or add to this project now that it's deployed?
    - We would have liked to add a feature where you can filter the results returned from the API based on a toggle. For instance, if the user toggles to "dog" and clicks "Search", then there should be a list of dogs. And the same goes for toggling to "cat." We also looked at adding a donation page.
    - Also featuring other animals besides dogs in the gallery.
    - The Adopt page could have used a query search, but due to time constraints and the complexity of this feature, it would have taken a while to implement.

- ## Unit Testing Notes/Instructions:
- There is unit testing for the StatusDogs.jsx component (that runs the Gallery.)
- The testing files are located in a folder called tests (src/tests.) That folder has 2 files: setup.js and StatusDogs.test.jsx.
- StatusDogs.test.jsx will test to see if the StatusDogs JSX component renders properly with props passed in (i.e. the pet image URL, HTTP Status Code, HTTP Status Code Description.)
- Sample data is provided within the StatusDogs.test.jsx to mimic the HTTPStatusDogs.JSON file used to populate the Gallery section within our app.
- To run the test:
  1. Open up a new terminal within Visual Studio Code.
  2. Make sure that your file path shown in the terminal below is at the project folder level.
     (PS C:\Users\Your User Name\320-wn24-final-project-RojasPablo)
  3. Type in the command npm run test. Then press Enter.
  4. It will run the "should render Gallery component" test within the StatusDogs.test.jsx file
  5. Expected result - 1 test that passes and displays sample data in the following order:
     (Top to bottom) Image URL, HTTP Response Status Code - 100, Continues
