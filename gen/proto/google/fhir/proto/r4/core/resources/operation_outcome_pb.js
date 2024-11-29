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
exports.OperationOutcome_Issue_CodeTypeSchema = exports.OperationOutcome_Issue_SeverityCodeSchema = exports.OperationOutcome_IssueSchema = exports.OperationOutcomeSchema = exports.file_proto_google_fhir_proto_r4_core_resources_operation_outcome = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/operation_outcome.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_operation_outcome = (0, codegenv1_1.fileDesc)("CkFwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9vcGVyYXRpb25fb3V0Y29tZS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSK+DAoQT3BlcmF0aW9uT3V0Y29tZRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEkIKBWlzc3VlGAogAygLMisuZ29vZ2xlLmZoaXIucjQuY29yZS5PcGVyYXRpb25PdXRjb21lLklzc3VlQgbw0IfrBAEapggKBUlzc3VlEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SUgoIc2V2ZXJpdHkYBCABKAsyOC5nb29nbGUuZmhpci5yNC5jb3JlLk9wZXJhdGlvbk91dGNvbWUuSXNzdWUuU2V2ZXJpdHlDb2RlQgbw0IfrBAESSgoEY29kZRgFIAEoCzI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuT3BlcmF0aW9uT3V0Y29tZS5Jc3N1ZS5Db2RlVHlwZUIG8NCH6wQBEjUKB2RldGFpbHMYBiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIwCgtkaWFnbm9zdGljcxgHIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEi0KCGxvY2F0aW9uGAggAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSLwoKZXhwcmVzc2lvbhgJIAMoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGpICCgxTZXZlcml0eUNvZGUSOwoFdmFsdWUYASABKA4yLC5nb29nbGUuZmhpci5yNC5jb3JlLklzc3VlU2V2ZXJpdHlDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aYr5g7IFK2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvaXNzdWUtc2V2ZXJpdHnAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqGAgoIQ29kZVR5cGUSNwoFdmFsdWUYASABKA4yKC5nb29nbGUuZmhpci5yNC5jb3JlLklzc3VlVHlwZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjplivmDsgUnaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9pc3N1ZS10eXBlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGU6RMCf47YFA7L+5JcGOGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9PcGVyYXRpb25PdXRjb21lSgQIBxAIQoEBChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWl5naXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL29wZXJhdGlvbl9vdXRjb21lX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.OperationOutcome.
 * Use `create(OperationOutcomeSchema)` to create a new message.
 */
exports.OperationOutcomeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_operation_outcome, 0);
/**
 * Describes the message google.fhir.r4.core.OperationOutcome.Issue.
 * Use `create(OperationOutcome_IssueSchema)` to create a new message.
 */
exports.OperationOutcome_IssueSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_operation_outcome, 0, 0);
/**
 * Describes the message google.fhir.r4.core.OperationOutcome.Issue.SeverityCode.
 * Use `create(OperationOutcome_Issue_SeverityCodeSchema)` to create a new message.
 */
exports.OperationOutcome_Issue_SeverityCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_operation_outcome, 0, 0, 0);
/**
 * Describes the message google.fhir.r4.core.OperationOutcome.Issue.CodeType.
 * Use `create(OperationOutcome_Issue_CodeTypeSchema)` to create a new message.
 */
exports.OperationOutcome_Issue_CodeTypeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_operation_outcome, 0, 0, 1);
