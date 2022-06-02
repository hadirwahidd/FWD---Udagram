# Udagram Infrastructure

![Diagram](/Documentation/App%20Infrastructure.jpeg)

## Description:

Udagram Application is hosted on AWS Cloud, it uses three main AWS Services:
  1. S3 Bucket for hosting the Front-End files.
  1. Elastic Beanstalk Environment to host the API, also uses S3 Bucket for hosting Back-End Files.
  1. RDS Postgres Database Instance.

## Deployment:
The Building and Deployment of this application to AWS is automated using a CircleCI (CI/CD) Pipeline which is triggered everytime code is pushed to the master branch of the github repo. For any information about the Pipeline Process: [PipelineProcess](/Documentation/Pipeline%20Process.md)