import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { Bucket } from 'aws-cdk-lib/aws-s3'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MyWebsiteCdkStack extends cdk.Stack {
  constructor (scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const websiteBucket = new Bucket(this, 'VasuperDotCoSiteBucket', {
      bucketName: 'vasuperdotcositebucket'
    }
    )
  }
}
