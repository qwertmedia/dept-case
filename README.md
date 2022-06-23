Dept Front end case by Jarmo van der Heul

Instructions to run the code:

Zip file: Right click on the zip file. Click Extract All. A new window will appear. Here you can use 'Browse' to determine where on the computer the extracted folder will be saved. By default this is the same place where the zip file is located. Click Extract.

Download the application from https://code.visualstudio.com/download and install it on your computer.

Via GitHub

You can clone the Git repository to a local Map

Open Visual Studio Code Go to Top Menu -> Files -> Open Folder. Select the folder where you want to download the cloned project Go to Main Menu -> View -> Integrated Terminal

Run the 'git clone' command with the path to the repository you want to clone in the integrated terminal.

git clone https://github.com/qwertmedia/dept-case.git

Open the folder in Visual Studio Code Make sure you have Node.js installed. No Node? Go to Node.js and follow the instructions to install Node on your device. Open a new terminal In the terminal run the following commands: npm install, then: npm start

The app opens. Open http://localhost:3000 to view in the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
