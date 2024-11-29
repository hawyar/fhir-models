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
exports.EffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchema = exports.EffectEvidenceSynthesis_CertaintySchema = exports.EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchema = exports.EffectEvidenceSynthesis_EffectEstimateSchema = exports.EffectEvidenceSynthesis_ResultsByExposure_ExposureStateCodeSchema = exports.EffectEvidenceSynthesis_ResultsByExposureSchema = exports.EffectEvidenceSynthesis_SampleSizeSchema = exports.EffectEvidenceSynthesis_StatusCodeSchema = exports.EffectEvidenceSynthesisSchema = exports.file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/effect_evidence_synthesis.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis = (0, codegenv1_1.fileDesc)("Cklwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9lZmZlY3RfZXZpZGVuY2Vfc3ludGhlc2lzLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIpIrChdFZmZlY3RFdmlkZW5jZVN5bnRoZXNpcxIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEiUKA3VybBgKIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEjMKCmlkZW50aWZpZXIYCyADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISLAoHdmVyc2lvbhgMIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEikKBG5hbWUYDSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIqCgV0aXRsZRgOIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEk8KBnN0YXR1cxgPIAEoCzI3Lmdvb2dsZS5maGlyLnI0LmNvcmUuRWZmZWN0RXZpZGVuY2VTeW50aGVzaXMuU3RhdHVzQ29kZUIG8NCH6wQBEisKBGRhdGUYECABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEi4KCXB1Ymxpc2hlchgRIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjMKB2NvbnRhY3QYEiADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSMgoLZGVzY3JpcHRpb24YEyABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEi0KBG5vdGUYFCADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkFubm90YXRpb24SNgoLdXNlX2NvbnRleHQYFSADKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLlVzYWdlQ29udGV4dBI6CgxqdXJpc2RpY3Rpb24YFiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIwCgljb3B5cmlnaHQYFyABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEjAKDWFwcHJvdmFsX2RhdGUYGCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGUSMwoQbGFzdF9yZXZpZXdfZGF0ZRgZIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZRI1ChBlZmZlY3RpdmVfcGVyaW9kGBogASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2QSMwoFdG9waWMYGyADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIyCgZhdXRob3IYHCADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSMgoGZWRpdG9yGB0gAygLMiIuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0RGV0YWlsEjQKCHJldmlld2VyGB4gAygLMiIuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0RGV0YWlsEjQKCGVuZG9yc2VyGB8gAygLMiIuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0RGV0YWlsEj4KEHJlbGF0ZWRfYXJ0aWZhY3QYICADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLlJlbGF0ZWRBcnRpZmFjdBI8Cg5zeW50aGVzaXNfdHlwZRghIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjgKCnN0dWR5X3R5cGUYIiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJQCgpwb3B1bGF0aW9uGCMgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCHPDQh+sEAfL//MIGEEV2aWRlbmNlVmFyaWFibGUSTgoIZXhwb3N1cmUYJCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIc8NCH6wQB8v/8wgYQRXZpZGVuY2VWYXJpYWJsZRJaChRleHBvc3VyZV9hbHRlcm5hdGl2ZRglIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhzw0IfrBAHy//zCBhBFdmlkZW5jZVZhcmlhYmxlEk0KB291dGNvbWUYJiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIc8NCH6wQB8v/8wgYQRXZpZGVuY2VWYXJpYWJsZRJMCgtzYW1wbGVfc2l6ZRgnIAEoCzI3Lmdvb2dsZS5maGlyLnI0LmNvcmUuRWZmZWN0RXZpZGVuY2VTeW50aGVzaXMuU2FtcGxlU2l6ZRJbChNyZXN1bHRzX2J5X2V4cG9zdXJlGCggAygLMj4uZ29vZ2xlLmZoaXIucjQuY29yZS5FZmZlY3RFdmlkZW5jZVN5bnRoZXNpcy5SZXN1bHRzQnlFeHBvc3VyZRJUCg9lZmZlY3RfZXN0aW1hdGUYKSADKAsyOy5nb29nbGUuZmhpci5yNC5jb3JlLkVmZmVjdEV2aWRlbmNlU3ludGhlc2lzLkVmZmVjdEVzdGltYXRlEkkKCWNlcnRhaW50eRgqIAMoCzI2Lmdvb2dsZS5maGlyLnI0LmNvcmUuRWZmZWN0RXZpZGVuY2VTeW50aGVzaXMuQ2VydGFpbnR5GpgCCgpTdGF0dXNDb2RlEj8KBXZhbHVlGAEgASgOMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5QdWJsaWNhdGlvblN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjptivmDsgUvaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9wdWJsaWNhdGlvbi1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrNAgoKU2FtcGxlU2l6ZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjAKC2Rlc2NyaXB0aW9uGAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSNwoRbnVtYmVyX29mX3N0dWRpZXMYBSABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXISPAoWbnVtYmVyX29mX3BhcnRpY2lwYW50cxgGIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlchqCBgoRUmVzdWx0c0J5RXhwb3N1cmUSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIwCgtkZXNjcmlwdGlvbhgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEmgKDmV4cG9zdXJlX3N0YXRlGAUgASgLMlAuZ29vZ2xlLmZoaXIucjQuY29yZS5FZmZlY3RFdmlkZW5jZVN5bnRoZXNpcy5SZXN1bHRzQnlFeHBvc3VyZS5FeHBvc3VyZVN0YXRlQ29kZRI7Cg12YXJpYW50X3N0YXRlGAYgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSYgoXcmlza19ldmlkZW5jZV9zeW50aGVzaXMYByABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIh8NCH6wQB8v/8wgYVUmlza0V2aWRlbmNlU3ludGhlc2lzGpcCChFFeHBvc3VyZVN0YXRlQ29kZRI7CgV2YWx1ZRgBIAEoDjIsLmdvb2dsZS5maGlyLnI0LmNvcmUuRXhwb3N1cmVTdGF0ZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjppivmDsgUraHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9leHBvc3VyZS1zdGF0ZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGocHCg5FZmZlY3RFc3RpbWF0ZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjAKC2Rlc2NyaXB0aW9uGAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMgoEdHlwZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjsKDXZhcmlhbnRfc3RhdGUYBiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIrCgV2YWx1ZRgHIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbBI9Cg91bml0X29mX21lYXN1cmUYCCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJpChJwcmVjaXNpb25fZXN0aW1hdGUYCSADKAsyTS5nb29nbGUuZmhpci5yNC5jb3JlLkVmZmVjdEV2aWRlbmNlU3ludGhlc2lzLkVmZmVjdEVzdGltYXRlLlByZWNpc2lvbkVzdGltYXRlGuICChFQcmVjaXNpb25Fc3RpbWF0ZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBHR5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIrCgVsZXZlbBgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbBIqCgRmcm9tGAYgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsEigKAnRvGAcgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsGsEFCglDZXJ0YWludHkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI0CgZyYXRpbmcYBCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBItCgRub3RlGAUgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5Bbm5vdGF0aW9uEmwKFmNlcnRhaW50eV9zdWJjb21wb25lbnQYBiADKAsyTC5nb29nbGUuZmhpci5yNC5jb3JlLkVmZmVjdEV2aWRlbmNlU3ludGhlc2lzLkNlcnRhaW50eS5DZXJ0YWludHlTdWJjb21wb25lbnQayAIKFUNlcnRhaW50eVN1YmNvbXBvbmVudBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBHR5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI0CgZyYXRpbmcYBSADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBItCgRub3RlGAYgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5Bbm5vdGF0aW9uOnvAn+O2BQOy/uSXBj9odHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vRWZmZWN0RXZpZGVuY2VTeW50aGVzaXOar66kCypuYW1lLm1hdGNoZXMoJ1tBLVpdKFtBLVphLXowLTlfXSl7MCwyNTR9JylKBAgHEAhCiQEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaZmdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvZWZmZWN0X2V2aWRlbmNlX3N5bnRoZXNpc19nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.
 * Use `create(EffectEvidenceSynthesisSchema)` to create a new message.
 */
exports.EffectEvidenceSynthesisSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0);
/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.StatusCode.
 * Use `create(EffectEvidenceSynthesis_StatusCodeSchema)` to create a new message.
 */
exports.EffectEvidenceSynthesis_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 0);
/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.SampleSize.
 * Use `create(EffectEvidenceSynthesis_SampleSizeSchema)` to create a new message.
 */
exports.EffectEvidenceSynthesis_SampleSizeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 1);
/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.ResultsByExposure.
 * Use `create(EffectEvidenceSynthesis_ResultsByExposureSchema)` to create a new message.
 */
exports.EffectEvidenceSynthesis_ResultsByExposureSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 2);
/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.ResultsByExposure.ExposureStateCode.
 * Use `create(EffectEvidenceSynthesis_ResultsByExposure_ExposureStateCodeSchema)` to create a new message.
 */
exports.EffectEvidenceSynthesis_ResultsByExposure_ExposureStateCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 2, 0);
/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.EffectEstimate.
 * Use `create(EffectEvidenceSynthesis_EffectEstimateSchema)` to create a new message.
 */
exports.EffectEvidenceSynthesis_EffectEstimateSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 3);
/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate.
 * Use `create(EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchema)` to create a new message.
 */
exports.EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 3, 0);
/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.Certainty.
 * Use `create(EffectEvidenceSynthesis_CertaintySchema)` to create a new message.
 */
exports.EffectEvidenceSynthesis_CertaintySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 4);
/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.Certainty.CertaintySubcomponent.
 * Use `create(EffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchema)` to create a new message.
 */
exports.EffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 4, 0);
