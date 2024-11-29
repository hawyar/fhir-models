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
exports.ImmunizationEvaluation_SeriesDosesXSchema = exports.ImmunizationEvaluation_DoseNumberXSchema = exports.ImmunizationEvaluation_StatusCodeSchema = exports.ImmunizationEvaluationSchema = exports.file_proto_google_fhir_proto_r4_core_resources_immunization_evaluation = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var datatypes_pb_1 = require("../datatypes_pb");
var valuesets_pb_1 = require("../valuesets_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/immunization_evaluation.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_immunization_evaluation = (0, codegenv1_1.fileDesc)("Ckdwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9pbW11bml6YXRpb25fZXZhbHVhdGlvbi5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKoDwoWSW1tdW5pemF0aW9uRXZhbHVhdGlvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISTgoGc3RhdHVzGAsgASgLMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5JbW11bml6YXRpb25FdmFsdWF0aW9uLlN0YXR1c0NvZGVCBvDQh+sEARJECgdwYXRpZW50GAwgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCE/DQh+sEAfL//MIGB1BhdGllbnQSKwoEZGF0ZRgNIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSRQoJYXV0aG9yaXR5GA4gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhJECg50YXJnZXRfZGlzZWFzZRgPIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESVAoSaW1tdW5pemF0aW9uX2V2ZW50GBAgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCGPDQh+sEAfL//MIGDEltbXVuaXphdGlvbhJBCgtkb3NlX3N0YXR1cxgRIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESQAoSZG9zZV9zdGF0dXNfcmVhc29uGBIgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSMAoLZGVzY3JpcHRpb24YEyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIrCgZzZXJpZXMYFCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJMCgtkb3NlX251bWJlchgVIAEoCzI3Lmdvb2dsZS5maGlyLnI0LmNvcmUuSW1tdW5pemF0aW9uRXZhbHVhdGlvbi5Eb3NlTnVtYmVyWBJOCgxzZXJpZXNfZG9zZXMYFiABKAsyOC5nb29nbGUuZmhpci5yNC5jb3JlLkltbXVuaXphdGlvbkV2YWx1YXRpb24uU2VyaWVzRG9zZXNYGrgCCgpTdGF0dXNDb2RlElMKBXZhbHVlGAEgASgOMkQuZ29vZ2xlLmZoaXIucjQuY29yZS5JbW11bml6YXRpb25FdmFsdWF0aW9uU3RhdHVzQ29kZXNWYWx1ZVNldC5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnmK+YOyBTtodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2ltbXVuaXphdGlvbi1ldmFsdWF0aW9uLXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGpYBCgtEb3NlTnVtYmVyWBI4Cgxwb3NpdGl2ZV9pbnQYASABKAsyIC5nb29nbGUuZmhpci5yNC5jb3JlLlBvc2l0aXZlSW50SAASOwoMc3RyaW5nX3ZhbHVlGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdIAFIGc3RyaW5nOgagg4PoBgFCCAoGY2hvaWNlGpcBCgxTZXJpZXNEb3Nlc1gSOAoMcG9zaXRpdmVfaW50GAEgASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5Qb3NpdGl2ZUludEgAEjsKDHN0cmluZ192YWx1ZRgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZzoGoIOD6AYBQggKBmNob2ljZTpKwJ/jtgUDsv7klwY+aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0ltbXVuaXphdGlvbkV2YWx1YXRpb25KBAgHEAhChwEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaZGdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvaW1tdW5pemF0aW9uX2V2YWx1YXRpb25fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes, valuesets_pb_1.file_proto_google_fhir_proto_r4_core_valuesets]);
/**
 * Describes the message google.fhir.r4.core.ImmunizationEvaluation.
 * Use `create(ImmunizationEvaluationSchema)` to create a new message.
 */
exports.ImmunizationEvaluationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization_evaluation, 0);
/**
 * Describes the message google.fhir.r4.core.ImmunizationEvaluation.StatusCode.
 * Use `create(ImmunizationEvaluation_StatusCodeSchema)` to create a new message.
 */
exports.ImmunizationEvaluation_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization_evaluation, 0, 0);
/**
 * Describes the message google.fhir.r4.core.ImmunizationEvaluation.DoseNumberX.
 * Use `create(ImmunizationEvaluation_DoseNumberXSchema)` to create a new message.
 */
exports.ImmunizationEvaluation_DoseNumberXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization_evaluation, 0, 1);
/**
 * Describes the message google.fhir.r4.core.ImmunizationEvaluation.SeriesDosesX.
 * Use `create(ImmunizationEvaluation_SeriesDosesXSchema)` to create a new message.
 */
exports.ImmunizationEvaluation_SeriesDosesXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization_evaluation, 0, 2);