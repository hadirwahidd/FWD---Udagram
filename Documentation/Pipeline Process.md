# CI/CD PipeLine:

![Overview](/Documentation/Pipeline%20Process.png)

## Description:

Once the CI/CD Pipeline is triggered when code is pushed to the master branch, a simple yet long process takes place:

* `build-deploy-workflow` workflow invokes the `build-deploy` job, which includes the following steps in sequence:
  1. Installing node and setting up AWS CLI, also installing AWS EB CLI.
  1. Installing Node Packages for both the Frontend and the Backend.
  1. Formatting code of both the Frontend & the Backend using Prettier and ESLint.
  1. Running tests on the API.
  1. Building Frontend Application.
  1. Building Backend Application.
  1. Deploying Angular Frontend to S3 Bucket.
  1. Deploying API to Elastic Beanstalk:
     * This step includes the following:
       1. Initiating app.
       1. Creating Environment.
       1. Setting environment variables.
       1. Lastly deploying.