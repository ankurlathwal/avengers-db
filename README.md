# AvengersDB

AvengersDB is a simple application built using Next.js that allows you to search and view details about Marvel characters. 

## Live Demo

A live demo of this app is hosted at: [https://avengers-db.vercel.app/](https://avengers-db.vercel.app/)

## Instructions to run locally

Make sure you have Node.js installed. 
Clone the repository and install all dependencies

```bash
npm install
```

Get your public and private keys from [Marvel Developer API site](https://developer.marvel.com/)

Create a environment file to securely store the keys. Create ```.env.development``` and put these key values

```
MARVEL_PRIVATE_KEY=YourPrivateKey
MARVEL_PUBLIC_KEY=YourPublicKey
```

Run the following command
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Credits

Credits to the Marvel Developer API.
Thanks to all the open-source libraries used in this project, including:

- ReactJS
- Next.js
- swr
- Bootstrap
- jQuery
- dotenv