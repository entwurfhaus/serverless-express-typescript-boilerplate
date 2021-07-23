# serverless-express-typescript-boilerplate
A `serverless` boilerplate project, it is bundled together including:
1. `express`
2. `typescript`
3. `serverless.yml` template, for AWS Lambda provider.
4. Packaged with commonly-used packages, such as `moment`, `axios` and a few more - remove them in `package.json` if not needed.

> This boilerplate is set to `yarn` use ONLY. See **Customization** section, for more information.

## Installation

1. Login into `serverless` account, with `serverless login` command - follow the prompts. 
2. Next, run `yarn` to install project dependencies.
3. Deploy with `npm run deploy`, to AWS Lambda for the first time.
3. Done!

## Customization
Before you begin development, prepare your `serverless` boilerplate, with your configurations and settings set for your needs. A checklist is prepared for you below:

1. Configure `serverless.yml` file, to suit AWS account details and Lambda configurations.
2. Customize your `.gitignore` and "lock" files (`package-lock.json` or `yarn.lock`), choose either `yarn` or `npm`. The boilerplate default is set to `yarn` usage - see `serverless.yml` file too, under `serverless-bundle`.
2. Modify `package.json` file, its properties and the list of packages if needed.
3. There is an example file called `/controllers/demo.ts`, modify / change this section and its contents. Or, you may modify the rest of the `src` folder and its contents.
4. 