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
exports.VerificationResult_ValidatorSchema = exports.VerificationResult_AttestationSchema = exports.VerificationResult_PrimarySourceSchema = exports.VerificationResult_StatusCodeSchema = exports.VerificationResultSchema = exports.file_proto_google_fhir_proto_r4_core_resources_verification_result = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/verification_result.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_verification_result = (0, codegenv1_1.fileDesc)("CkNwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy92ZXJpZmljYXRpb25fcmVzdWx0LnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIqsaChJWZXJpZmljYXRpb25SZXN1bHQSIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI+CgZ0YXJnZXQYCiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2USNAoPdGFyZ2V0X2xvY2F0aW9uGAsgAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMgoEbmVlZBgMIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkoKBnN0YXR1cxgNIAEoCzIyLmdvb2dsZS5maGlyLnI0LmNvcmUuVmVyaWZpY2F0aW9uUmVzdWx0LlN0YXR1c0NvZGVCBvDQh+sEARIyCgtzdGF0dXNfZGF0ZRgOIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSPQoPdmFsaWRhdGlvbl90eXBlGA8gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSQAoSdmFsaWRhdGlvbl9wcm9jZXNzGBAgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLgoJZnJlcXVlbmN5GBEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5UaW1pbmcSNQoObGFzdF9wZXJmb3JtZWQYEiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEjEKDm5leHRfc2NoZWR1bGVkGBMgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlEjwKDmZhaWx1cmVfYWN0aW9uGBQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSTQoOcHJpbWFyeV9zb3VyY2UYFSADKAsyNS5nb29nbGUuZmhpci5yNC5jb3JlLlZlcmlmaWNhdGlvblJlc3VsdC5QcmltYXJ5U291cmNlEkgKC2F0dGVzdGF0aW9uGBYgASgLMjMuZ29vZ2xlLmZoaXIucjQuY29yZS5WZXJpZmljYXRpb25SZXN1bHQuQXR0ZXN0YXRpb24SRAoJdmFsaWRhdG9yGBcgAygLMjEuZ29vZ2xlLmZoaXIucjQuY29yZS5WZXJpZmljYXRpb25SZXN1bHQuVmFsaWRhdG9yGpQCCgpTdGF0dXNDb2RlEjQKBXZhbHVlGAEgASgOMiUuZ29vZ2xlLmZoaXIucjQuY29yZS5TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246dIr5g7IFNmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvdmVyaWZpY2F0aW9ucmVzdWx0LXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGoQFCg1QcmltYXJ5U291cmNlEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SZwoDd2hvGAQgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCOvL//MIGDE9yZ2FuaXphdGlvbvL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGUSMgoEdHlwZRgFIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkIKFGNvbW11bmljYXRpb25fbWV0aG9kGAYgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSPwoRdmFsaWRhdGlvbl9zdGF0dXMYByABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI2Cg92YWxpZGF0aW9uX2RhdGUYCCABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEj4KEGNhbl9wdXNoX3VwZGF0ZXMYCSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJBChNwdXNoX3R5cGVfYXZhaWxhYmxlGAogAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQa4wUKC0F0dGVzdGF0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SZwoDd2hvGAQgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCOvL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb24ScAoMb25fYmVoYWxmX29mGAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCOvL//MIGDE9yZ2FuaXphdGlvbvL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGUSQgoUY29tbXVuaWNhdGlvbl9tZXRob2QYBiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBInCgRkYXRlGAcgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlEkAKG3NvdXJjZV9pZGVudGl0eV9jZXJ0aWZpY2F0ZRgIIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEj8KGnByb3h5X2lkZW50aXR5X2NlcnRpZmljYXRlGAkgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSNwoPcHJveHlfc2lnbmF0dXJlGAogASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5TaWduYXR1cmUSOAoQc291cmNlX3NpZ25hdHVyZRgLIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuU2lnbmF0dXJlGu0CCglWYWxpZGF0b3ISJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJOCgxvcmdhbml6YXRpb24YBCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIY8NCH6wQB8v/8wgYMT3JnYW5pemF0aW9uEjkKFGlkZW50aXR5X2NlcnRpZmljYXRlGAUgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSPQoVYXR0ZXN0YXRpb25fc2lnbmF0dXJlGAYgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5TaWduYXR1cmU6RsCf47YFA7L+5JcGOmh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9WZXJpZmljYXRpb25SZXN1bHRKBAgHEAhCgwEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaYGdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvdmVyaWZpY2F0aW9uX3Jlc3VsdF9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.VerificationResult.
 * Use `create(VerificationResultSchema)` to create a new message.
 */
exports.VerificationResultSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_verification_result, 0);
/**
 * Describes the message google.fhir.r4.core.VerificationResult.StatusCode.
 * Use `create(VerificationResult_StatusCodeSchema)` to create a new message.
 */
exports.VerificationResult_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_verification_result, 0, 0);
/**
 * Describes the message google.fhir.r4.core.VerificationResult.PrimarySource.
 * Use `create(VerificationResult_PrimarySourceSchema)` to create a new message.
 */
exports.VerificationResult_PrimarySourceSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_verification_result, 0, 1);
/**
 * Describes the message google.fhir.r4.core.VerificationResult.Attestation.
 * Use `create(VerificationResult_AttestationSchema)` to create a new message.
 */
exports.VerificationResult_AttestationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_verification_result, 0, 2);
/**
 * Describes the message google.fhir.r4.core.VerificationResult.Validator.
 * Use `create(VerificationResult_ValidatorSchema)` to create a new message.
 */
exports.VerificationResult_ValidatorSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_verification_result, 0, 3);