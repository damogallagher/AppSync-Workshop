// Import dependencies
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

// Setup a static expiration date for the API KEY
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
const WORKSHOP_DATE = new Date(); // date of this workshop
const KEY_EXPIRATION_DATE = new Date(WORKSHOP_DATE.getTime() + SEVEN_DAYS);

export class AnyCompanyReadsBackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Configure the User Pool & Client

    // Define the AppSync API

    // Define the DynamoDB table with partition key and additional DDB indexes

    // Define the custom auth Lambda function

    // Set up table as a data source

    // Set up custom auth lambda function as a data source

    // Define AppSync functions for Pipeline resolvers

    // Define resolvers

    // Stack outputs

  }
}
