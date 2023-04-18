import {CfnParameter} from 'aws-cdk-lib'


const uploadBucketName = new CfnParameter(this, "uploadBucketName", {
    type: "String",
    description: "The name of the Amazon S3 bucket where uploaded files will be stored."});