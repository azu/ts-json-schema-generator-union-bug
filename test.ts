import Ajv from "ajv"
import { RequestBody } from "."
import schema from "./index.json"
const ajv = new Ajv({ removeAdditional: true })
const request: RequestBody = {
  template: "<% name %>",
  folderName: "folder name",
}
const valid = ajv.validate(schema, request)
if (!valid) console.log(ajv.errors)
console.log("request",request)