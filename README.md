
# Blog Application

## Author
Utsab Gyawali (20279192)

## Repository Links
- Backend (Laravel): [https://github.com/utsabg/blog/tree/feature/api](https://github.com/utsabg/blog/tree/feature/api)
- Frontend (React with TypeScript): [https://github.com/utsabg/reactjs-blog-app](https://github.com/utsabg/reactjs-blog-app)

## Description
This project is a blog application with a Laravel backend API and a React frontend. It allows users to view a list of blog posts and read individual post details.

## Setup Instructions

### Backend (Laravel)

1. Clone the repository:
   ```
   git clone https://github.com/utsabg/blog.git
   cd blog
   git checkout feature/api
   ```

2. Follow the README instructions in the Laravel zip file for detailed setup.

3. Install dependencies:
   ```
   composer install
   ```

4. Set up your `.env` file with appropriate database credentials.

5. Run migrations:
   ```
   php artisan migrate
   ```

6. Start the Laravel development server:
   ```
   php artisan serve
   ```

7. Test the API endpoints using Postman or any API testing tool.

### Frontend (React with TypeScript)

1. Clone the repository:
   ```
   git clone https://github.com/utsabg/reactjs-blog-app.git
   cd reactjs-blog-app
   ```

2. Install dependencies:
   ```
   npm install

   npm install react-router-dom axios 

   ```

3. Update the API base URL:
   - Open `src/services/api.ts`
   - Change `const API_BASE_URL = 'http://blog.test/api';` to the Laravel application path

4. Start the React development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Important Note
Make sure to update the API base URL in the React app (`reactjs-blog-app/src/services/api.ts`) to match the Laravel application path before running the frontend.

## Technologies Used
- Backend: Laravel, PHP, MongoDB
- Frontend: React, TypeScript
- API: Laravel Sanctum


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
