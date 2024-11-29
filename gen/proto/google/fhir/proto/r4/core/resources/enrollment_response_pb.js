"use strict";
//    Copyright 2019 Google Inc.
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        https://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentResponse_OutcomeCodeSchema = exports.EnrollmentResponse_StatusCodeSchema = exports.EnrollmentResponseSchema = exports.file_proto_google_fhir_proto_r4_core_resources_enrollment_response = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/enrollment_response.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_enrollment_response = (0, codegenv1_1.fileDesc)("CkNwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9lbnJvbGxtZW50X3Jlc3BvbnNlLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIrIMChJFbnJvbGxtZW50UmVzcG9uc2USIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEkIKBnN0YXR1cxgLIAEoCzIyLmdvb2dsZS5maGlyLnI0LmNvcmUuRW5yb2xsbWVudFJlc3BvbnNlLlN0YXR1c0NvZGUSSAoHcmVxdWVzdBgMIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhfy//zCBhFFbnJvbGxtZW50UmVxdWVzdBJECgdvdXRjb21lGA0gASgLMjMuZ29vZ2xlLmZoaXIucjQuY29yZS5FbnJvbGxtZW50UmVzcG9uc2UuT3V0Y29tZUNvZGUSMAoLZGlzcG9zaXRpb24YDiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIuCgdjcmVhdGVkGA8gASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRJICgxvcmdhbml6YXRpb24YECABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEnQKEHJlcXVlc3RfcHJvdmlkZXIYESABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUI68v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZfL//MIGDE9yZ2FuaXphdGlvbhqVAgoKU3RhdHVzQ29kZRJFCgV2YWx1ZRgBIAEoDjI2Lmdvb2dsZS5maGlyLnI0LmNvcmUuRmluYW5jaWFsUmVzb3VyY2VTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246ZIr5g7IFJmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZm0tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUalwIKC091dGNvbWVDb2RlEj0KBXZhbHVlGAEgASgOMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5DbGFpbVByb2Nlc3NpbmdDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bYr5g7IFL2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVtaXR0YW5jZS1vdXRjb21lwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGU6RsCf47YFA7L+5JcGOmh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9FbnJvbGxtZW50UmVzcG9uc2VKBAgHEAhCgwEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaYGdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvZW5yb2xsbWVudF9yZXNwb25zZV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.EnrollmentResponse.
 * Use `create(EnrollmentResponseSchema)` to create a new message.
 */
exports.EnrollmentResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_enrollment_response, 0);
/**
 * Describes the message google.fhir.r4.core.EnrollmentResponse.StatusCode.
 * Use `create(EnrollmentResponse_StatusCodeSchema)` to create a new message.
 */
exports.EnrollmentResponse_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_enrollment_response, 0, 0);
/**
 * Describes the message google.fhir.r4.core.EnrollmentResponse.OutcomeCode.
 * Use `create(EnrollmentResponse_OutcomeCodeSchema)` to create a new message.
 */
exports.EnrollmentResponse_OutcomeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_enrollment_response, 0, 1);
