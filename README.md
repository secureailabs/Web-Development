# README

## Update the IPAddresses in the client env
1. Open `client/.env`
2. Change `SNOWPACK_PUBLIC_API_URL_PROD=https://127.0.0.1:3000` to `SNOWPACK_PUBLIC_API_URL_PROD=https://<frontend_IP>:3000` where `frontend_IP` is the IP which will be used to access the WebApp

## Update the IP Addresses in the server
1. Open `server/.env`
2. Change `SAIL_API=https://40.76.22.246:6200` to `SAIL_API=https://<SAIL_RestApiPortal>:6200` where `SAIL_RestApiPortal` is the public facing IP of the SAIL RestApiPortal
3. Change `CLIENT=https://127.0.0.1:3000` to `CLIENT=https://<frontend_IP>:3000` where `frontend_IP` is the IP which will be used to access the WebApp

## Build the docker image
```
docker build . -t frontend:latest
```

## Run the docker image
```
docker run -it --name SailWebApp -p 3000:3000 -v $(pwd):/app frontend:latest
```

## Open the WebApp in the browser
Use the link if hosted on 127.0.0.1: https://127.0.0.1:3000/login
This won't work if localhost is used instead of 127.0.0.1

## Stop the container
```
docker stop SailWebApp
docker rm SailWebApp
```