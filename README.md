# BE1010 - Backend Entry Task 1

### Install dependencies

```
npm install
```

### Start server

```
npm start
```

By default, server runs on port 5000.

### Usage

- Get current timestamp:

```shell
curl -X GET "localhost:5000/timestamp"
```

- Log message:

```shell
curl -H "Content-Type: application/json" \
     -d '{"level":"info","message":"Testing message"}' \
     -X POST "localhost:5000/logs"
```

- Get last 2 logs:

```shell
curl -X GET "localhost:5000/logs?limit=2"
```
