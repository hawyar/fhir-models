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
exports.DetectedIssue_MitigationSchema = exports.DetectedIssue_EvidenceSchema = exports.DetectedIssue_IdentifiedXSchema = exports.DetectedIssue_SeverityCodeSchema = exports.DetectedIssue_StatusCodeSchema = exports.DetectedIssueSchema = exports.file_proto_google_fhir_proto_r4_core_resources_detected_issue = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/detected_issue.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_detected_issue = (0, codegenv1_1.fileDesc)("Cj5wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9kZXRlY3RlZF9pc3N1ZS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKSFAoNRGV0ZWN0ZWRJc3N1ZRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISRQoGc3RhdHVzGAsgASgLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5EZXRlY3RlZElzc3VlLlN0YXR1c0NvZGVCBvDQh+sEARIyCgRjb2RlGAwgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSQQoIc2V2ZXJpdHkYDSABKAsyLy5nb29nbGUuZmhpci5yNC5jb3JlLkRldGVjdGVkSXNzdWUuU2V2ZXJpdHlDb2RlEj4KB3BhdGllbnQYDiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIN8v/8wgYHUGF0aWVudBJCCgppZGVudGlmaWVkGA8gASgLMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5EZXRlY3RlZElzc3VlLklkZW50aWZpZWRYEmQKBmF1dGhvchgQIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQjTy//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xl8v/8wgYGRGV2aWNlEkIKCmltcGxpY2F0ZWQYESADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2USPQoIZXZpZGVuY2UYEiADKAsyKy5nb29nbGUuZmhpci5yNC5jb3JlLkRldGVjdGVkSXNzdWUuRXZpZGVuY2USKwoGZGV0YWlsGBMgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKwoJcmVmZXJlbmNlGBQgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSQQoKbWl0aWdhdGlvbhgVIAMoCzItLmdvb2dsZS5maGlyLnI0LmNvcmUuRGV0ZWN0ZWRJc3N1ZS5NaXRpZ2F0aW9uGpgCCgpTdGF0dXNDb2RlEj8KBXZhbHVlGAEgASgOMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5PYnNlcnZhdGlvblN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjptivmDsgUvaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9vYnNlcnZhdGlvbi1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqiAgoMU2V2ZXJpdHlDb2RlEkMKBXZhbHVlGAEgASgOMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXRlY3RlZElzc3VlU2V2ZXJpdHlDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cYr5g7IFM2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZGV0ZWN0ZWRpc3N1ZS1zZXZlcml0ecCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGoIBCgtJZGVudGlmaWVkWBIyCglkYXRlX3RpbWUYASABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lSAASLQoGcGVyaW9kGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2RIADoGoIOD6AYBQggKBmNob2ljZRqWAgoIRXZpZGVuY2USJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIyCgRjb2RlGAQgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSPgoGZGV0YWlsGAUgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFJlc291cmNlGukCCgpNaXRpZ2F0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SPAoGYWN0aW9uGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARIrCgRkYXRlGAUgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRJYCgZhdXRob3IYBiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIo8v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZTpBwJ/jtgUDsv7klwY1aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0RldGVjdGVkSXNzdWVKBAgHEAhCfgoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpbZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9kZXRlY3RlZF9pc3N1ZV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.DetectedIssue.
 * Use `create(DetectedIssueSchema)` to create a new message.
 */
exports.DetectedIssueSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_detected_issue, 0);
/**
 * Describes the message google.fhir.r4.core.DetectedIssue.StatusCode.
 * Use `create(DetectedIssue_StatusCodeSchema)` to create a new message.
 */
exports.DetectedIssue_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_detected_issue, 0, 0);
/**
 * Describes the message google.fhir.r4.core.DetectedIssue.SeverityCode.
 * Use `create(DetectedIssue_SeverityCodeSchema)` to create a new message.
 */
exports.DetectedIssue_SeverityCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_detected_issue, 0, 1);
/**
 * Describes the message google.fhir.r4.core.DetectedIssue.IdentifiedX.
 * Use `create(DetectedIssue_IdentifiedXSchema)` to create a new message.
 */
exports.DetectedIssue_IdentifiedXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_detected_issue, 0, 2);
/**
 * Describes the message google.fhir.r4.core.DetectedIssue.Evidence.
 * Use `create(DetectedIssue_EvidenceSchema)` to create a new message.
 */
exports.DetectedIssue_EvidenceSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_detected_issue, 0, 3);
/**
 * Describes the message google.fhir.r4.core.DetectedIssue.Mitigation.
 * Use `create(DetectedIssue_MitigationSchema)` to create a new message.
 */
exports.DetectedIssue_MitigationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_detected_issue, 0, 4);
