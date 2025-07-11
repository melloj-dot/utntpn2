# Michis🐈
## Summary
This website is an application focused on cats! On the home page, you'll always find a random cat fact and a beautiful random cat image. You can explore and search for various felines by tags, making it easy to find your favorite cat images.

## Steps to Deploy
Follow these steps to get the application up and running locally:

### Clone the repository:

```bash
git clone https://github.com/melloj-dot/utntpn2.git
```


### Install dependencies:
Navigate into the cloned repository directory and install the necessary packages:

```bash```
cd utntpn2
npm install or npm i

### Create an .env file:
In the root of the project, create a file named .env and add the following key:

```.env```
VITE_CAT_API_URL = 'https://cataas.com/'

### Run the application:
Start the development server with one of the following commands:

```npm run dev```

## Technologies Used
React JS + Vite: A modern JavaScript library for building user interfaces, bundled with Vite for a fast development experience.

Bootswatch: A collection of free themes for Bootstrap, used to style the application: https://bootswatch.com/

Cataas API: The API providing the cat images and tags, accessible at https://cataas.com/.
