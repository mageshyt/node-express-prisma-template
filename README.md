# Node Express Prisma Template

## Project Description
This is a template project for building Node.js applications using Express and Prisma with TypeScript for enhanced code readability and type safety. The project follows a modular approach, separating the application setup, routing configuration, and database interactions into different classes. It enables developers to quickly kickstart their projects with the essential configurations in place.

## Prerequisites
- Node.js
- Express
- Prisma
- TypeScript

## Installation Steps
1. Clone the repository from the project's GitHub repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

## Configuration Instructions
1. Create a `.env` file in the root directory of the project.
2. Set the necessary environment variables, such as the database URL, in the `.env` file.

## Database Setup Details
1. After configuring the database URL in the `.env` file, run the following commands to set up the database and access Prisma Studio:
   - `npx prisma db pull`
   - `npx prisma studio`

## How to Run the Project Locally
1. Once the database setup is complete, run the project using the following command:
   - `npm run start`

## Folder Structure of the Project
- src
  - @types
    - typings.d.ts
  - controllers
    - testController.ts
  - middleware
    - limiter.ts
  - routes
    - index.ts
    - test.route.ts
  - service
    - Prisma.service.ts
    - user.service.ts
  - utils
    - hashPassword.ts
    - jwt.utils.ts
  - index.ts
- .env
- tsconfig.json
- package.json


## Contribution Guidelines
Contributions to this project are welcome. Before making any changes or additions, please create a new branch and submit a pull request for review.

## License Information
This project is open-source and available under the [LICENSE_NAME] license. Please refer to the LICENSE file for more details.

## Acknowledgments
We would like to acknowledge the contributions of the community and the developers who have contributed to this project. Your support and feedback have been invaluable in shaping this template. Thank you!
