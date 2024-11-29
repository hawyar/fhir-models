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
exports.PractitionerRole_NotAvailableSchema = exports.PractitionerRole_AvailableTime_DaysOfWeekCodeSchema = exports.PractitionerRole_AvailableTimeSchema = exports.PractitionerRoleSchema = exports.file_proto_google_fhir_proto_r4_core_resources_practitioner_role = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/practitioner_role.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_practitioner_role = (0, codegenv1_1.fileDesc)("CkFwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9wcmFjdGl0aW9uZXJfcm9sZS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKKEgoQUHJhY3RpdGlvbmVyUm9sZRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISLAoGYWN0aXZlGAsgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEisKBnBlcmlvZBgMIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kEkgKDHByYWN0aXRpb25lchgNIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxQcmFjdGl0aW9uZXISSAoMb3JnYW5pemF0aW9uGA4gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhIyCgRjb2RlGA8gAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNwoJc3BlY2lhbHR5GBAgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSQAoIbG9jYXRpb24YESADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYITG9jYXRpb24SUwoSaGVhbHRoY2FyZV9zZXJ2aWNlGBIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCF/L//MIGEUhlYWx0aGNhcmVTZXJ2aWNlEjIKB3RlbGVjb20YEyADKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3RQb2ludBJLCg5hdmFpbGFibGVfdGltZRgUIAMoCzIzLmdvb2dsZS5maGlyLnI0LmNvcmUuUHJhY3RpdGlvbmVyUm9sZS5BdmFpbGFibGVUaW1lEkkKDW5vdF9hdmFpbGFibGUYFSADKAsyMi5nb29nbGUuZmhpci5yNC5jb3JlLlByYWN0aXRpb25lclJvbGUuTm90QXZhaWxhYmxlEjwKF2F2YWlsYWJpbGl0eV9leGNlcHRpb25zGBYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSQAoIZW5kcG9pbnQYFyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIRW5kcG9pbnQasgUKDUF2YWlsYWJsZVRpbWUSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJYCgxkYXlzX29mX3dlZWsYBCADKAsyQi5nb29nbGUuZmhpci5yNC5jb3JlLlByYWN0aXRpb25lclJvbGUuQXZhaWxhYmxlVGltZS5EYXlzT2ZXZWVrQ29kZRItCgdhbGxfZGF5GAUgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEjcKFGF2YWlsYWJsZV9zdGFydF90aW1lGAYgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5UaW1lEjUKEmF2YWlsYWJsZV9lbmRfdGltZRgHIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuVGltZRqPAgoORGF5c09mV2Vla0NvZGUSOAoFdmFsdWUYASABKA4yKS5nb29nbGUuZmhpci5yNC5jb3JlLkRheXNPZldlZWtDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246Z4r5g7IFKWh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZGF5cy1vZi13ZWVrwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUajQIKDE5vdEF2YWlsYWJsZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjgKC2Rlc2NyaXB0aW9uGAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdCBvDQh+sEARIrCgZkdXJpbmcYBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZDpEwJ/jtgUDsv7klwY4aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1ByYWN0aXRpb25lclJvbGVKBAgHEAhCgQEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaXmdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvcHJhY3RpdGlvbmVyX3JvbGVfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.PractitionerRole.
 * Use `create(PractitionerRoleSchema)` to create a new message.
 */
exports.PractitionerRoleSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_practitioner_role, 0);
/**
 * Describes the message google.fhir.r4.core.PractitionerRole.AvailableTime.
 * Use `create(PractitionerRole_AvailableTimeSchema)` to create a new message.
 */
exports.PractitionerRole_AvailableTimeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_practitioner_role, 0, 0);
/**
 * Describes the message google.fhir.r4.core.PractitionerRole.AvailableTime.DaysOfWeekCode.
 * Use `create(PractitionerRole_AvailableTime_DaysOfWeekCodeSchema)` to create a new message.
 */
exports.PractitionerRole_AvailableTime_DaysOfWeekCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_practitioner_role, 0, 0, 0);
/**
 * Describes the message google.fhir.r4.core.PractitionerRole.NotAvailable.
 * Use `create(PractitionerRole_NotAvailableSchema)` to create a new message.
 */
exports.PractitionerRole_NotAvailableSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_practitioner_role, 0, 1);