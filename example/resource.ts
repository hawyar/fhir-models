import { PatientSchema, Patient } from "../fhir/r4/core/resources/patient_pb";
import { CapabilityStatement, CapabilityStatementSchema } from "../fhir/r4/core/resources/capability_statement_pb";
import { ContainedResourceSchema } from "../fhir/r4/core/resources/bundle_and_contained_resource_pb";
import { HumanNameSchema, StringSchema, MarkdownSchema, IdSchema, CodeSchema, HumanName } from "../fhir/r4/core/datatypes_pb";
import { create, fromJson, fromJsonString, toBinary, toJson } from "@bufbuild/protobuf";

const capabilityStatement = create(CapabilityStatementSchema, {
    id: create(IdSchema, {
        value: "v1.0"
    }),
    purpose: create(MarkdownSchema, {
        value: "### Experimental FHIR R4 Server \n > This is a test server"
    }),
    language: create(CodeSchema, {
        value: "en"
    }),
    publisher: create(StringSchema, {
        value: "Test Server"
    })
})

const pat = create(PatientSchema, {
    name: [
        create(HumanNameSchema, {
            text: create(StringSchema, {
                value: "John Doe"
            })
        })],
})


const json = toJson(PatientSchema, pat, {
    alwaysEmitImplicit: true,
    // alwaysEmitProtoName: true
});

// a resourceType = "Patient"
json["resourceType"] = "Patient";

console.log("Patient", JSON.stringify(json, null, 2));
console.log("--------------");

// const bundle = create(ContainedResourceSchema, {
//     oneofResource: {
//         value: pat,
//         case: "patient"
//     }
// })

// // Parse a JSON string into a message
// const jsonBytes = `{
//     "resourceType": "Patient",
//     "id": "example",
//     "active": true,
//     "name": [
//       {
//         "family": "Smith",
//         "given": ["John"]
//       }
//     ],
//     "gender": "male",
//     "birthDate": "1974-12-25"
//   }`;


// console.log(JSON.parse(jsonBytes));

// try {
//     // use create
//     const loadedPatient: Patient = create(PatientSchema, JSON.parse(jsonBytes));
//     console.log("JSON Parse", JSON.stringify(loadedPatient, null, 2));
// } catch (error) {
//     console.error("Error parsing Patient resource:", error);
// }

// // try {
// //     const loadedPatient: Patient = fromJson(PatientSchema, JSON.parse(jsonBytes));
// //     const patientName: HumanName = loadedPatient.name[0];
// //     console.log("Patient name:", patientName.text.value);
// // } catch (error) {
// //     console.error("Error parsing Patient resource:", error);
// // }
// // const binary = toBinary(ContainedResourceSchema, bundle);
// // console.log(binary);

// // Helper function to create messages
// function String(value: string) {
//     return create(StringSchema, {
//         value
//     })
// }

// function Id(value: string) {
//     return create(IdSchema, {
//         value
//     })
// }
