import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as InterviewDevopsCdk from '../lib/interview-devops-cdk-stack';

test('Lambda Function Created', () => {
  const app = new cdk.App();
    // WHEN
  const stack = new InterviewDevopsCdk.InterviewDevopsCdkStack(app, 'MyTestStack');
    // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    FunctionName: "CustomersLambda"
  });
});
