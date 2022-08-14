import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { Bucket } from 'aws-cdk-lib/aws-s3'
import * as amp from '@aws-cdk/aws-amplify-alpha'
import { SecretValue } from 'aws-cdk-lib'

// import * as codecommit from 'aws-cdk-lib/aws-codecommit'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MyWebsiteCdkStack extends cdk.Stack {
  constructor (scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const websiteBucket = new Bucket(this, 'VasuperDotCoSiteBucket', {
      bucketName: 'vasuperdotcositebucket'
    }
    )

    const sourceCode = new amp.GitHubSourceCodeProvider({
      owner: 'vasuper',
      repository: 'VasuperCoWebsiteCDK',
      oauthToken: SecretValue.secretsManager('gh-access-token-secret')
    })

    const siteApp = new amp.App(this, 'VasuperCoSiteApp', {
      sourceCodeProvider: sourceCode,
      appName: 'VasuperCoHugoSite'
    })
  }
}
