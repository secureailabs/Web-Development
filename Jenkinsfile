pipeline {
    agent {
        docker { image 'node:14.16' }
    }
    stages {
        stage('Test') {
            steps {
                echo 'Testing Express Server...'
                // test express server
                echo 'Testing React App...'
                // test react app
            }
        }
        stage('Build') {
            steps {
                echo 'Building Express Server...'
                dir ('./VincentQuirion/WebApp/server') {
                    sh 'npm install'
                    sh 'npm run build'
                }
                echo 'Building React App...'
                dir ('./VincentQuirion/WebApp/client') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // deploy
            }
        }
    }
}
