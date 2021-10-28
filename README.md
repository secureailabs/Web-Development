# SAIL Web App
## _CI/CD with Jenkins_
## Setting up Jenkins

- Install Docker and Docker Compose.
- Run ```docker-compose up -d <path to docker-compose.yaml>```
_(the docker-compose file is in ScratchPad/VincentQuirion/WebApp/docker-compose.yaml)_
- Run ```docker exec jenkins_jenkins_1 cat /var/jenkins_home/secrets/initialAdminPassword```
- Open Jenkins on <your ip>:8083
- Paste the output from the previous command in the password field.

## Jenkinsfile
The Jenkinsfile is located at ```ScratchPad/VincentQuirion/WebApp/Jenkinsfile```.
For now, running it will only test building the client and the server. Testing and deployment will be implemented soon.
