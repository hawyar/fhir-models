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
exports.EnrollmentRequest_StatusCodeSchema = exports.EnrollmentRequestSchema = exports.file_proto_google_fhir_proto_r4_core_resources_enrollment_request = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/enrollment_request.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_enrollment_request = (0, codegenv1_1.fileDesc)("CkJwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9lbnJvbGxtZW50X3JlcXVlc3QucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUiygkKEUVucm9sbG1lbnRSZXF1ZXN0EiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchJBCgZzdGF0dXMYCyABKAsyMS5nb29nbGUuZmhpci5yNC5jb3JlLkVucm9sbG1lbnRSZXF1ZXN0LlN0YXR1c0NvZGUSLgoHY3JlYXRlZBgMIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSQwoHaW5zdXJlchgNIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24SbAoIcHJvdmlkZXIYDiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUI68v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZfL//MIGDE9yZ2FuaXphdGlvbhJACgljYW5kaWRhdGUYDyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIN8v/8wgYHUGF0aWVudBJACghjb3ZlcmFnZRgQIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghDb3ZlcmFnZRqVAgoKU3RhdHVzQ29kZRJFCgV2YWx1ZRgBIAEoDjI2Lmdvb2dsZS5maGlyLnI0LmNvcmUuRmluYW5jaWFsUmVzb3VyY2VTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246ZIr5g7IFJmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZm0tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGU6RcCf47YFA7L+5JcGOWh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9FbnJvbGxtZW50UmVxdWVzdEoECAcQCEKCAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpfZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9lbnJvbGxtZW50X3JlcXVlc3RfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.EnrollmentRequest.
 * Use `create(EnrollmentRequestSchema)` to create a new message.
 */
exports.EnrollmentRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_enrollment_request, 0);
/**
 * Describes the message google.fhir.r4.core.EnrollmentRequest.StatusCode.
 * Use `create(EnrollmentRequest_StatusCodeSchema)` to create a new message.
 */
exports.EnrollmentRequest_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_enrollment_request, 0, 0);
