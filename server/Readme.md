# Blog with Express and TTD

### Routes

## User routes:
```
http://localhost:3000/users

```

### end-point:
1. **SIGNUP**
```
METHOD: "POST" 

/register
```
**expected request**= {
    name: String,
    email: String,
    password: String
}


**expected response** = {
    _id: String,
    name: String,
    email: String,
    password: String
}

**Error Handle** = if email is not unique, status 400

2.  **LOGIN**
```
METHOD: "POST"

/login
```
**expected request** ={
    email: String, password: String
}

**expected response** = {
    token= String
}

**error handle** = if username/password wrong, status 400

## Article routes
```
http://localhost:3000/article
```
### end-point

1. **ADD ARTICLE** (Auth required)
```
METHOD: "POST"

/add
```
**expected request** = {
    token: USER_TOKEN,
    title: String,
    body: String,
    picture: link
}

**expected response** = {
    status: 200,
    title: String,
    body: String,
    picture: link
}

2. **READ ALL ARTICLES**
```
METHOD: "GET"

/get-all-articles
```
**expected request** = {
}

**expected response** = {
    data: [array of object ]
}

3. **READ OWN DATA** (Auth required)
```
METHOD: "POST"

/get-articles
```

**expected request** = {
    token: USER_TOKEN
}
**expected output** = {
    data: [array of object]
}

4. **DELETE ARTICLE** (Auth required)
```
METHOD: "DELETE"

/article
```
**expected request** = {
    token: USER_TOKEN,
    id: ID_ARTICLE
}

**espexted output** = {
    status: 200,
    data: [array of object]
}


5. **UPDATE ARTICLE** (Auth required)
```
METHOD: "PUT"

/article
```
**expected request** = {
    token: USER_TOKEN,
    id: ID_ARTICLE
}

**espexted output** = {
    status: 200,
    data: [array of object]
}

## Comment Routes

```
http://localhost:3000/comment
```
### end-point

1. **ADD COMMENT** (Auth required)

```
METHOD: "POST"

/add
```
**expected request** = {
    token: USER_TOKEN,
    idArticle: ID_ARTICLE,
    idUser: ID_USER_ORIGIN_ARTICLE ,
    words: String
}

**espexted output** = {
    status: 200,
    data: [array of object]
}

2. **DELETE COMMENT** (Auth required)

```
METHOD: DELETE"

/delete
```
**expected request** = {
    token: USER_TOKEN,
    idArticle: ID_ARTICLE,
    idUser: ID_USER_ORIGIN_ARTICLE 
}

**espexted output** = {
    status: 200,
    data: [array of object]
}

3. **READ COMMENT** 

```
METHOD: "POST"

/
```
**expected request** = {
    token: USER_TOKEN,
    idArticle: ID_ARTICLE
}

**espexted output** = {
    status: 200,
    data: [array of object]
}

