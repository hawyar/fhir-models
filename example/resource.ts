import { Patient, PatientSchema } from "../gen/proto/google/fhir/proto/r4/core/resources/patient_pb";
import { ContainedResource, ContainedResourceSchema } from "../gen/proto/google/fhir/proto/r4/core/resources/bundle_and_contained_resource_pb";
import { HumanName, HumanNameSchema, StringSchema } from "../gen/proto/google/fhir/proto/r4/core/datatypes_pb";
import { create, toBinary, toJson } from "@bufbuild/protobuf";

const pat = create(PatientSchema, {
    name: [
        create(HumanNameSchema, {
            text: create(StringSchema, {
                value: "John Doe"
            })
        })]
})

const json = toJson(PatientSchema, pat);
console.log(JSON.stringify(json, null, 2));

// patient container

const bundle = create(ContainedResourceSchema, {
    oneofResource: {
        value: pat,
        case: "patient"
    }
})

const json2 = toJson(ContainedResourceSchema, bundle);
console.log(JSON.stringify(json2, null, 2));

// const binary = toBinary(ContainedResourceSchema, bundle);
// console.log(binary);