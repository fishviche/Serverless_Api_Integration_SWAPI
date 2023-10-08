npm install

To local
serverless dynamodb install


Start: serverless dynamodb start


# Example integration API SWAPI with serverless API

## Usage

### Deployment

1. Install dependencies with:

```
npm install
```

2. Then deploy:

```
serverless deploy
```

### Local development

1. Install dependencies with:

```
npm install
```

2. Install dynamodb local

```
sls dynamodb install
```

3. Run and start to test apis

```
sls offline start
```

## Features

- **DynamoDB**
- **Express**
- **Serverless**


## API Endpoints

List of available routes:

**People routes**:\
`GET /people/` - Get all peoples in DynamoDB\
`POST /people/` - Save person in DynamoDB\
`GET /people/:id` - Get specify people\

**SWAPI routes**:\
`GET /swapi/` - Get people of SWAPI\

**API-DOCS routes**:\
`GET /api-docs/` - Docs using Open API/Swagger\


### **API DEPLOYED IN AWS**

https://1o32viuk41.execute-api.us-east-1.amazonaws.com/