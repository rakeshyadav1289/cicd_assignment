pipeline {
    agent any

    stages {
        stage('Pull Flask Code') {
            steps {
                git branch: 'main', url: 'https://github.com/rakeshyadav1289/cicd_assignment.git'
            }
        }

        stage('Install Flask Dependencies') {
            steps {
                sh 'pip install -r requirements.txt'
            }
        }

        stage('Restart Flask App') {
            steps {
                sh 'pm2 restart flask-app || pm2 start app.py --name flask-app'
            }
        }

        stage('Pull Express Code') {
            steps {
                git branch: 'main', url: 'https://github.com/rakeshyadav1289/cicd_assignment.git'
            }
        }

        stage('Install Express Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Restart Express App') {
            steps {
                sh 'pm2 restart express-app || pm2 start server.js --name express-app'
            }
        }
    }

    triggers {
        githubPush()
    }
}
