
# Youtube Clone - aktube

This project is a YouTube clone built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to replicate core functionalities of YouTube, allowing users to view, upload, share, and interact with videos.


## Installation

Clone the repository:

```bash
  $ git clone https://github.com/Dark-Knight-Avi/aktube.git
```
Install dependencies in both the frontend and backend folders:

```bash
  $ npm install
```
Set up environment variables for MongoDB connection and JWT secret.
Start the frontend and backend servers: 

```bash
  $ npm start
```
in both folders.

## Generate a strong random 64 bit ASCII string:

This script will generate a random 64 bit ASCII string, e.g. that can be used for encrypting JWT tokens/access tokens/refresh tokens:

Run this script on the terminal:

```bash
  $ node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Let’s explain the magic:

1. node -e tells Node.js to evaluate a script, in this case, a Javascript string
2. crypto is the cryptographic module forming part of Node.js core. It is already installed as part of Node.js, no extra npm package is involved.
3. randomBytes() is a function that generates cryptographically strong pseudo-random data. It will return a Buffer object.
4. toString() is a method of the Buffer class that decodes the object to a string according to the specified character encoding, which, in this case, is hex, viz. hexadecimal.

Each of the 64 characters can be:

1. A numbers from 0 to 9
2. A character: A, B, C, D, E and F

There are codes in the ASCII table that will not be used, but the random results are perfect for JWT tokens nevertheless.

## Plugins/Hooks/Key packages used in Backend:

### 1. mongoose-aggregate-paginate-v2 (Plugin):

  This plugin allows you to paginate your Mongoose queries with aggregations.

```bash
  videoSchema.plugin(mongooseAggregatePaginate)
```

### 2. pre (Hook):

  This hook is executed before an operation occurs. In our schema we use it to hash passwords before saving them into the database.

```bash
  userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
  })
```

### 3. methods (Hook):

  Methods are added to schema by adding to schema.method or schema.statics.

```bash
  userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
  }
```

### 4. bcrypt (Package):

  Used for hashing passwords before saving them into database.

  #### Usage:

  `bcrypt.hash()` is used when creating new password and `bcrypt.compare()` is used while checking entered password.

  #### Installation:

```bash
  $ npm i bcrypt
```
  #### Example:

```bash
  userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
  })

  userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
  }
```

### 5. jsonwebtoken (Package):

  Used for generating JSON Web Tokens that can be used for authentication.
  
  JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

  #### Installation:

```bash
  $ npm i jsonwebtoken
```