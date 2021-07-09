# usage

## Generate schema

     ./node_modules/.bin/ts-json-schema-generator --path ./index.ts > index.json
  

## Test

  npm test

## Expected Results

> request { template: '<% name %>', folderName: 'folder name' }

## Actual Results

> request { template: '<% name %>' }