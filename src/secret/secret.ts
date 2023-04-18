import {App, Stack, StackProps, aws_secretsmanager as sm} from 'aws-cdk-lib';
  
const cdkApp = new App();
// const appName: string = cdkApp.node.tryGetContext('appName');
// const componentName: string = cdkApp.node.tryGetContext('componentName');
// const featurePrefix: string = cdkApp.node.tryGetContext('featurePrefix')? cdkApp.node.tryGetContext('featurePrefix')+'-' : '';

export class SecretStack extends Stack {
    constructor(app: App, id: string, props: StackProps ) {
        super(app, id, props);

        // Define the name of the secret to retrieve
        const secretName = 'user/liam/nexusAuthToken';
        const secret = sm.Secret.fromSecretNameV2(this, 'nexusAuthToken', secretName);

        // //function retrieve secret
        // async function getSecret(): Promise<string> {
        //     const secretValue = await secret.secretValue;
        //     return secretValue.toString();
        // }

        // // Call the function to retrieve the secret
        // getSecret()
        // .then((secretValue) => {
        //     console.log(`Secret value for ${secretName}: ${secretValue}`);
        // })
        // .catch((error) => {
        //     console.error(`Error retrieving secret ${secretName}: ${error}`);
        // });

    }
}

//new SecretStack(cdkApp, `${appName}-${componentName}-${featurePrefix}`, {});
new SecretStack(cdkApp, `testSecretStack`, {});


