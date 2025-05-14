#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { InterviewDevopsCdkStack } from '../lib/interview-devops-cdk-stack';

const app = new cdk.App();
new InterviewDevopsCdkStack(app, 'InterviewDevopsCdkStack', {
  env: { account: '151146595904', region: 'us-east-1' },
});
