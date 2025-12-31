pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rakeshyadav1289/cicd_assignment.git'
            }
        }

        stage('Build & Deploy') {
            steps {
                script {
                    // Stop old containers
                    sh 'docker-compose down || true'
                    // Build new images
                  //  sh 'docker-compose build'
                    // Start containers
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    triggers {
        githubPush()
    }
}
