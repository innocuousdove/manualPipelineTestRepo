import {App, Stack, StackProps, CfnParameter} from 'aws-cdk-lib'


const cdkApp = new App();
// const appName: string = cdkApp.node.tryGetContext('appName');
// const componentName: string = cdkApp.node.tryGetContext('componentName');
// const featurePrefix: string = cdkApp.node.tryGetContext('featurePrefix')? cdkApp.node.tryGetContext('featurePrefix')+'-' : '';

export class BucketStack extends Stack {
    constructor(app: App, id: string, props: StackProps ) {
        super(app, id, props);

        const uploadBucketName = new CfnParameter(this, "uploadBucketName", {
            type: "String",
            description: "The name of the Amazon S3 bucket where uploaded files will be stored."});

    }
}

new BucketStack(cdkApp, `testBucketStack`, {});

