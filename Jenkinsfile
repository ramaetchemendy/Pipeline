pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente1"
                    }
                    steps {
                        git url: 'https://github.com/ramaetchemendy/Pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 86c2c7dc-b23d-4141-be6e-f5e51fd27882  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agente2"
                    }
                    steps {
                        git url: 'https://github.com/ramaetchemendy/Pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 86c2c7dc-b23d-4141-be6e-f5e51fd27882  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agente3"
                    }
                    steps {
                        git url: 'https://github.com/ramaetchemendy/Pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 86c2c7dc-b23d-4141-be6e-f5e51fd27882  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agente4"
                    }
                    steps {
                        git url: 'https://github.com/ramaetchemendy/Pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 86c2c7dc-b23d-4141-be6e-f5e51fd27882  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}