**Group 3: Alexandra Anthony, Sara Gaber, Ahmad Shah, Neeti Mistry, & Sohan Chatterjee**


# Health Monitoring App
- Every group opting for this project will be provided with a Fitbit Inspire 2.
- Develop a system that seamlessly incorporates health data from smart hardware into a web app through an API.
  - Emphasize the integration of hardware, with a reduced emphasis on UI functions, maintaining the essence of a web app.
- Generate interactive charts and graphs for visualizing health data, including:
  - Bar plots illustrating steps taken for each hour of the day.
  - Comparison of Heart Rate (BPM) and Zone Minutes during intense workouts.
- Create profile for the user.
- Conduct trend analysis based on the insights derived from the interactive charts.
  
# Break down of our group's React application setup and of Firebase and React Router:

Background:
- The front-end utilized a React and next.js framework
    - It was written in TypeScript and Tailwind CSS
- We also used plugins like daisyUI for more complex design elements
- The back-end was mostly done in JavaScript

1. **Firebase Integration**:
   - **Initialization**: The Firebase app is initialized using configurations imported from `firebaseConfig`. This initialization links the React app with the Firebase backend, enabling various services like authentication and database functionalities.
   - **Configuration Management**: Storing Firebase configuration settings in a separate file (`./backend/firebaseConfig`) helps maintain security and organization, making it easier to manage keys and endpoints centrally.

2. **React Router Setup**:
   - **BrowserRouter**: Utilized as the router component wrapping the entire route configuration. It uses the HTML5 history API to keep the UI in sync with the URL.
   - **Routes and Navigation**: Defined specific routes for different application pages (`/healthdata`, `/register`, `/login`, and `/`). A catch-all route redirects users to the `/login` page if they attempt to access a non-existent route, preventing navigation errors.

3. **Component Structure**:
   - **Route Configuration**: Each route is linked to a specific component, controlling which component renders based on the URL path. For example, `<HealthData />` for health-related data display and `<Register />` for user registration.
   - **Default Route**: The default route (`"/"`) directs users straight to the `<HealthData />` component.

4. **Styling and File Organization**:
   - **CSS Import**: The application imports a central CSS file (`./App.css`), a styling approach that applies across all components for consistency.

5. **Security and Redirection**:
   - **Secure Redirect**: The route with path `"*"` serves as a fallback, redirecting to the login page. This ensures that any unhandled routes do not expose sensitive parts of the application, securing the user flow within known and controlled paths.

# Function Checklist
- Establish authentication and integration with the Fitbit API
  - Clarification: API stands for Application Programming Interface, facilitating communication between different programs
- Develop and implement user profile setup and editing features.
- Develop interactive tools for visualizing data.
- Create options for metric and time view customization.
- Build a system for establishing and tracking health goals.
- Enable manual input of health data, such as food intake.

# Milestone 1
- Complete Paper Prototyping
- Complete Usability Testing (afte paper prototyping is done)
  - 2 to 3 Participants (can't be from our class)
  - Create video (Record the process with the consent of the participants)
  - Use project specific roles to gather insights
  - Members of your team should take the 3 roles:
      - one facilitator
      - one human-computer to simulate participant's intention with the interface
      - one or two observers
   
# Milestone 2
- Create UML diagrams for the project
- Before starting, we recommend your group flesh out a set of requirements, and then use those requirements when creating your diagrams
- Create 3 UML diagrams:
  1. Use case diagram
  2. Activity diagram
  3. Class diagram
- These diagrams should be created with digital apps, not hand-drawn
- You should follow the standard symbols and notations of each diagram
- Please submit your diagrams in PDF format
- For the health tracking app, consider the users: health coach and participant
- Then create and submit slides for your milestone 2:
    - Introduction
    - Use case diagram
    - Activity diagram
    - Class diagram
    - Summary

# Milestone 3
- Create Interface, Implement API
- Project Summary: your task is to implement the functions of the application. The following system requirements must be met.
  - Functions
    - baseline of the frontend and backend: user login, FitBit oauth, displaying user FitBit data, navigation, and basic user interface
- Demo and Presentation
  - A brief intro to your team work, in terms of language, platform, team member responsibilities, effort estimation (hours, lines of code, number of commits). You can use screen shot from Github as supporting materials. Please include the URL of your Github project in the slides.
  - A demo of the required functions
  - A summary of challenges and strength in your team work.
  - Any iterative changes you have made to your UML diagrams, as a result of your implementation.  (Remember, good design means that your UML diagrams always reflect your code exactly.)
  - Please submit your slides in the pdf format to this assignment on Canvas.

# Milestone 4
- Project Summary: your task is to implement the functions of the application. The following system requirements must be met:
- Clean up and implement remaining features, such as setting goals, graphical displays, and more
- Interactive Graphs of Health Trends
  - Bar plot of steps taken for each hour of the day
  - Heart rate (BPM) vs Zone Minutes (during an intense workout)
- Being able to interact with the app as a user and coach


   

