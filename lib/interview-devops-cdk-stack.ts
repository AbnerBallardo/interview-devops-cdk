import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apiGateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class InterviewDevopsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = this.createLambda('Customers');
    const api = this.createApiGateway();
    this.configureGetCustomers({ api, lambda });
  }

  private createLambda(microservice: string) {
    return new lambda.Function(this, `${microservice}Lambda`, {
      functionName: `${microservice}Lambda`,
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: `dist/handlers/customers.customersHandler`,
      code: lambda.Code.fromInline(
        'exports.handler = function(event, context) { console.log(event); return event; }',
      ),
    });
  }

  private createApiGateway() {
    return new apiGateway.RestApi(this, `RestApi`, {
      restApiName: `Api`,
      description: 'One API to rule them all',
      deployOptions: {
        stageName: 'v1',
      },
    });
  }

  private configureGetCustomers({
    api,
    lambda,
  }: {
    api: apiGateway.RestApi;
    lambda: lambda.Function;
  }) {
    api.root // /
      .resourceForPath('customers') // /customers
      .addMethod('GET', new apiGateway.LambdaIntegration(lambda));
  }
}
