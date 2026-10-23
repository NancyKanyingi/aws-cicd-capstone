# AWS CI/CD Capstone Project

## Project Overview

This project demonstrates an automated Continuous Integration and Continuous Deployment (CI/CD) pipeline for deploying a containerized web application on Amazon Web Services (AWS).

The pipeline builds and stores a Docker image, requires manual approval before deployment, and deploys the application to Amazon ECS using a blue/green deployment strategy with AWS CodeDeploy.

## Architecture

The project uses the following AWS services:

- **AWS CodePipeline:** Orchestrates the source, build, manual approval, and deployment stages.
- **AWS CodeBuild:** Builds the application container image.
- **Amazon ECR:** Stores the Docker container image.
- **Amazon ECS with AWS Fargate:** Runs the containerized web application.
- **AWS CodeDeploy:** Manages blue/green deployments.
- **Application Load Balancer:** Routes user traffic to the application.
- **Amazon CloudWatch:** Monitors application infrastructure and build metrics.
- **Amazon SNS:** Sends email notifications for configured alerts and approval workflows.

## CI/CD Pipeline

The pipeline consists of four stages:

1. **Source:** Retrieves the application source code from the configured source repository.
2. **Build:** Uses CodeBuild to build the Docker image and publish it to Amazon ECR.
3. **Manual approval:** Requires approval before deployment proceeds.
4. **Deploy:** Uses CodeDeploy to deploy the application to Amazon ECS using blue/green deployment.

## Deployment Strategy

The project uses blue/green deployment to reduce deployment risk. A replacement task set is deployed alongside the original task set. After successful validation and traffic shifting, the replacement task set becomes primary and receives application traffic.

## Monitoring and Notifications

Amazon CloudWatch is used to monitor selected ECS and CodeBuild metrics through a custom dashboard.

A CloudWatch alarm monitors failed CodeBuild builds and is configured to publish notifications through an Amazon SNS topic. The pipeline also uses a manual approval stage before deployment.

## Deployment Verification

The deployment was verified in the AWS Console. The CodePipeline stages completed successfully, and the corresponding CodeDeploy deployment reached **Succeeded** status.

The ECS service reported a steady state, and the replacement task set became primary.

## Project Evidence

Screenshots documenting the implementation should be added to the repository. Recommended evidence includes:

- Successful CodePipeline execution.
- Successful CodeDeploy deployment.
- Running web application.
- Amazon ECR image.
- CloudWatch dashboard.
- CloudWatch alarm and SNS email subscription.
- Manual approval stage.

## AWS Region

`eu-west-1` (Europe — Ireland)

## Conclusion

This project demonstrates how AWS managed services can be combined to automate application builds, introduce a manual deployment approval gate, deploy containerized applications using blue/green deployment, and monitor infrastructure health.
