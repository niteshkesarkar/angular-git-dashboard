import { writeFile } from 'fs';
const colors = require('colors');

// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';

// Load node modules
require('dotenv').config();

// `environment.ts` file structure
const envConfigFile = `export const environment = {
    production: ${process.env.PRODUCTION},
    githubToken: '${process.env.GITHUB_TOKEN}',
    githubOrgName: '${process.env.GITHUB_ORG_NAME}',
    githubApiUrl: '${process.env.GITHUB_API_URL}',
    pageSize: ${process.env.PAGE_SIZE},
};
`;

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));

console.log(colors.grey(envConfigFile));

fs.writeFile(targetPath, envConfigFile, (err) => {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});
