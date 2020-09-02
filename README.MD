## Produce and Consume messages using Kafka Local

#### Create environment file

Create .env file in root folder by using `.env.sample` as a template

#### Run Kafka Locally


```
docker-compose up
```

Check Status

```
docker-compose ps
 ```

If status is not up

```
docker-compose up -d
```

Open confluent page on 

```
http://localhost:9021/
```

## Create topic

1. Open Local host `http://localhost:9021/`
2. Go to clusters
3. Click on Topics
4. Add topic
5. Add the same name of topic in .env file

## Installation and Usage

### Installation

To install the dependencies for the project:

```
npm install
```

### Building

To build the project:

```
npm run build
```

## Publish Message on topic

```
npm run start-producer
```

## Consume Message from topic

```
npm run start-consume
```


## Run Unit Tests

Tests are executed using kafka mocks which are created under

`/src/__mocks/kafka-node/index.ts`

Execute tests by

`npm test`
