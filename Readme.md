# A Graphql Project
Nodejs + GraphQL + Express + ElasticSearch + ReactJs  

### start json-server by running 
`npm run json:server`

> the data comes from db.json

make sure the server running 

`http://localhost:3000/users` 

`http://localhost:3000/users/23`

`http://localhost:3000/companies/2/users`
 
### start express 
`npm run start`

### start in dev mode with nodemon
`npm run dev` 

`http://localhost:4000`

### few sample queries 
```
{
  user(id: "23") {
    id
    firstName
  }
}
----
{
  user(id: "23") {
    id
    firstName
    company {
      id
      name
      description
    }
  }
}
----
{
  company(id: "1") {
    id
    description
  }
}
```

### label the results 
```$xslt
{
  apple: company(id: "1") {
    id
    name
    description,
    users {
      firstName
    }
  }
  google:company(id: "2") {
    id
    name
    description,
    users {
      firstName
    }
  }
}
```

### create fragments 
```$xslt
{
  apple: company(id: "1") {
    ...companyDetails
    users {
      firstName
    }
  }
  google: company(id: "2") {
   ...companyDetails
    description
    users {
      firstName
    }
  }
}

fragment companyDetails on Company {
  id
  name
  description
}
```