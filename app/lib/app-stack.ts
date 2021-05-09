import * as cdk from "@aws-cdk/core";
import { Vpc } from "@aws-cdk/aws-ec2";

export class AppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new Vpc(this, "AppVpc");
  }
}
