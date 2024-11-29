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
exports.Practitioner_QualificationSchema = exports.Practitioner_GenderCodeSchema = exports.PractitionerSchema = exports.file_proto_google_fhir_proto_r4_core_resources_practitioner = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/practitioner.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_practitioner = (0, codegenv1_1.fileDesc)("Cjxwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9wcmFjdGl0aW9uZXIucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUijA0KDFByYWN0aXRpb25lchIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISLAoGYWN0aXZlGAsgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEiwKBG5hbWUYDCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkh1bWFuTmFtZRIyCgd0ZWxlY29tGA0gAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0UG9pbnQSLQoHYWRkcmVzcxgOIAMoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQWRkcmVzcxI8CgZnZW5kZXIYDyABKAsyLC5nb29nbGUuZmhpci5yNC5jb3JlLlByYWN0aXRpb25lci5HZW5kZXJDb2RlEi0KCmJpcnRoX2RhdGUYECABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGUSLgoFcGhvdG8YESADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkF0dGFjaG1lbnQSRgoNcXVhbGlmaWNhdGlvbhgSIAMoCzIvLmdvb2dsZS5maGlyLnI0LmNvcmUuUHJhY3RpdGlvbmVyLlF1YWxpZmljYXRpb24SOwoNY29tbXVuaWNhdGlvbhgTIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Gp4CCgpHZW5kZXJDb2RlEkIKBXZhbHVlGAEgASgOMjMuZ29vZ2xlLmZoaXIucjQuY29yZS5BZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpwivmDsgUyaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hZG1pbmlzdHJhdGl2ZS1nZW5kZXLAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqJAwoNUXVhbGlmaWNhdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYBCADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISOgoEY29kZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESKwoGcGVyaW9kGAYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2QSQgoGaXNzdWVyGAcgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbjpAwJ/jtgUDsv7klwY0aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1ByYWN0aXRpb25lckoECAcQCEJ8Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWllnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL3ByYWN0aXRpb25lcl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Practitioner.
 * Use `create(PractitionerSchema)` to create a new message.
 */
exports.PractitionerSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_practitioner, 0);
/**
 * Describes the message google.fhir.r4.core.Practitioner.GenderCode.
 * Use `create(Practitioner_GenderCodeSchema)` to create a new message.
 */
exports.Practitioner_GenderCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_practitioner, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Practitioner.Qualification.
 * Use `create(Practitioner_QualificationSchema)` to create a new message.
 */
exports.Practitioner_QualificationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_practitioner, 0, 1);
