"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patient_pb_1 = require("../gen/proto/google/fhir/proto/r4/core/resources/patient_pb");
var bundle_and_contained_resource_pb_1 = require("../gen/proto/google/fhir/proto/r4/core/resources/bundle_and_contained_resource_pb");
var datatypes_pb_1 = require("../gen/proto/google/fhir/proto/r4/core/datatypes_pb");
var protobuf_1 = require("@bufbuild/protobuf");
var pat = (0, protobuf_1.create)(patient_pb_1.PatientSchema, {
    name: [
        (0, protobuf_1.create)(datatypes_pb_1.HumanNameSchema, {
            text: (0, protobuf_1.create)(datatypes_pb_1.StringSchema, {
                value: "John Doe"
            })
        })
    ]
});
var json = (0, protobuf_1.toJson)(patient_pb_1.PatientSchema, pat);
console.log(JSON.stringify(json, null, 2));
// patient container
var bundle = (0, protobuf_1.create)(bundle_and_contained_resource_pb_1.ContainedResourceSchema, {
    oneofResource: {
        value: pat,
        case: "patient"
    }
});
var json2 = (0, protobuf_1.toJson)(bundle_and_contained_resource_pb_1.ContainedResourceSchema, bundle);
console.log(JSON.stringify(json2, null, 2));
// const binary = toBinary(ContainedResourceSchema, bundle);
// console.log(binary);
