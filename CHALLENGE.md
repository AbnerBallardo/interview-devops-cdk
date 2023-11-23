# DevOps Challenge: AWS Lambda and API Gateway Integration

## Background:
You are provided with an empty AWS Cloud Development Kit (CDK) project. Your task is to demonstrate your skills in AWS services, particularly focusing on AWS Lambda and API Gateway.

## Objective:
Your challenge is to set up and configure an AWS Lambda function and an API Gateway, ensuring seamless integration between the two. The goal is to create a simple yet functional backend that responds to a specific HTTP request.

## Tasks:

### Create an AWS Lambda Function:
Develop a Lambda function using your preferred runtime (e.g., Python, Node.js).
Ensure that this function can process HTTP requests and send responses.

### Set Up an API Gateway:
Create an API Gateway in AWS.
Configure the API Gateway to route all incoming requests to the AWS Lambda function created in the previous step.
Make sure the API Gateway is publicly accessible.

### Integration and Testing:
Integrate the API Gateway with the Lambda function.
Test the setup to ensure that when the API Gateway receives a GET request to /samples, it forwards this request to the Lambda function.
The Lambda function should then process this request and return an HTTP 200 status code as a response.

### Documentation:
Document the steps you followed, including any AWS CDK code, Lambda function code, and configuration settings for the API Gateway.
Explain any assumptions or decisions made during the implementation.

### Bonus (Optional):
Implement error handling in the Lambda function to gracefully handle and respond to erroneous requests.
Enhance the response of the Lambda function to return a simple JSON object along with the HTTP 200 status.
