Capture the Fugitive Game
This is a simple React application for playing the "Capture the Fugitive" game. The game involves selecting a city, choosing a vehicle, and determining if the fugitive has been successfully captured.

How to Play
City Selection:

Each player (cop) independently chooses one city from the available options.
Cities are presented with their unique descriptions, allowing players to make an informed decision.
Vehicle Selection:

Based on the chosen city's distance, each player selects an electric vehicle with suitable range and availability.
Vehicles are categorized by type and range, allowing players to strategize their approach.
Result:

The system determines if any player successfully finds and captures the fugitive (simulated).
If successful, the game displays the name of the player who made the successful capture.
Gameplay Instructions
The game follows a simple set of instructions to ensure fair gameplay and an enjoyable experience. Detailed instructions are provided on the landing page, including steps for city selection, vehicle selection, and understanding the game result.

Components
The application consists of the following components:

GameDescription: Provides an introduction to the game and instructions for gameplay.
CitySelection: Allows players to choose a city from a list of available options.
VehicleSelection: Allows players to choose a vehicle based on the selected city's distance.
ResultPage: Displays the result of the game, indicating whether the capture was successful or not.
Running the Application
To run the application locally:

Clone this repository to your local machine.
Navigate to the project directory and install dependencies using npm install.
Start the development server using npm start.
Open your browser and visit http://localhost:5173 to play the game.
Technologies Used
React: For building the user interface and managing state.
CSS: For styling the components and providing an engaging visual experience.
