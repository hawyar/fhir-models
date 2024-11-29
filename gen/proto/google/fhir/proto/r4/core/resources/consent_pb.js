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
exports.Consent_Provision_ProvisionData_MeaningCodeSchema = exports.Consent_Provision_ProvisionDataSchema = exports.Consent_Provision_ProvisionActorSchema = exports.Consent_Provision_TypeCodeSchema = exports.Consent_ProvisionSchema = exports.Consent_VerificationSchema = exports.Consent_PolicySchema = exports.Consent_SourceXSchema = exports.Consent_StatusCodeSchema = exports.ConsentSchema = exports.file_proto_google_fhir_proto_r4_core_resources_consent = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/consent.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_consent = (0, codegenv1_1.fileDesc)("Cjdwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jb25zZW50LnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIvcmCgdDb25zZW50EiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI/CgZzdGF0dXMYCyABKAsyJy5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnNlbnQuU3RhdHVzQ29kZUIG8NCH6wQBEjsKBXNjb3BlGAwgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARI+CghjYXRlZ29yeRgNIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESPgoHcGF0aWVudBgOIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg3y//zCBgdQYXRpZW50EjAKCWRhdGVfdGltZRgPIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSjQEKCXBlcmZvcm1lchgQIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQlry//zCBgxPcmdhbml6YXRpb27y//zCBgdQYXRpZW508v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYNUmVsYXRlZFBlcnNvbvL//MIGEFByYWN0aXRpb25lclJvbGUSSAoMb3JnYW5pemF0aW9uGBEgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhI0CgZzb3VyY2UYEiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnNlbnQuU291cmNlWBIzCgZwb2xpY3kYEyADKAsyIy5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnNlbnQuUG9saWN5EjkKC3BvbGljeV9ydWxlGBQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSPwoMdmVyaWZpY2F0aW9uGBUgAygLMikuZ29vZ2xlLmZoaXIucjQuY29yZS5Db25zZW50LlZlcmlmaWNhdGlvbhI5Cglwcm92aXNpb24YFiABKAsyJi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnNlbnQuUHJvdmlzaW9uGpQCCgpTdGF0dXNDb2RlEjoKBXZhbHVlGAEgASgOMisuZ29vZ2xlLmZoaXIucjQuY29yZS5Db25zZW50U3RhdGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bor5g7IFMGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29uc2VudC1zdGF0ZS1jb2Rlc8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGtcBCgdTb3VyY2VYEjUKCmF0dGFjaG1lbnQYASABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkF0dGFjaG1lbnRIABKCAQoJcmVmZXJlbmNlGAIgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCTfL//MIGB0NvbnNlbnTy//zCBhFEb2N1bWVudFJlZmVyZW5jZfL//MIGCENvbnRyYWN08v/8wgYVUXVlc3Rpb25uYWlyZVJlc3BvbnNlSAA6BqCDg+gGAUIICgZjaG9pY2Ua9AEKBlBvbGljeRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEisKCWF1dGhvcml0eRgEIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEiUKA3VyaRgFIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpGvECCgxWZXJpZmljYXRpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI2Cgh2ZXJpZmllZBgEIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbkIG8NCH6wQBElcKDXZlcmlmaWVkX3dpdGgYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIg8v/8wgYHUGF0aWVudPL//MIGDVJlbGF0ZWRQZXJzb24SOAoRdmVyaWZpY2F0aW9uX2RhdGUYBiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lGrwQCglQcm92aXNpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI9CgR0eXBlGAQgASgLMi8uZ29vZ2xlLmZoaXIucjQuY29yZS5Db25zZW50LlByb3Zpc2lvbi5UeXBlQ29kZRIrCgZwZXJpb2QYBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBJECgVhY3RvchgGIAMoCzI1Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ29uc2VudC5Qcm92aXNpb24uUHJvdmlzaW9uQWN0b3ISNAoGYWN0aW9uGAcgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSMwoOc2VjdXJpdHlfbGFiZWwYCCADKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZxIsCgdwdXJwb3NlGAkgAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmcSNwoLY2xhc3NfdmFsdWUYCiADKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZ1IFY2xhc3MSMgoEY29kZRgLIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjAKC2RhdGFfcGVyaW9kGAwgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2QSQgoEZGF0YRgNIAMoCzI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ29uc2VudC5Qcm92aXNpb24uUHJvdmlzaW9uRGF0YRI5Cglwcm92aXNpb24YDiADKAsyJi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnNlbnQuUHJvdmlzaW9uGp0CCghUeXBlQ29kZRJCCgV2YWx1ZRgBIAEoDjIzLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29uc2VudFByb3Zpc2lvblR5cGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cYr5g7IFM2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29uc2VudC1wcm92aXNpb24tdHlwZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGqADCg5Qcm92aXNpb25BY3RvchInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKBHJvbGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBErkBCglyZWZlcmVuY2UYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUKFAfDQh+sEAfL//MIGBkRldmljZfL//MIGBUdyb3Vw8v/8wgYIQ2FyZVRlYW3y//zCBgxPcmdhbml6YXRpb27y//zCBgdQYXRpZW508v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYNUmVsYXRlZFBlcnNvbvL//MIGEFByYWN0aXRpb25lclJvbGUa6gQKDVByb3Zpc2lvbkRhdGESJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJZCgdtZWFuaW5nGAQgASgLMkAuZ29vZ2xlLmZoaXIucjQuY29yZS5Db25zZW50LlByb3Zpc2lvbi5Qcm92aXNpb25EYXRhLk1lYW5pbmdDb2RlQgbw0IfrBAESRwoJcmVmZXJlbmNlGAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCFPDQh+sEAfL//MIGCFJlc291cmNlGpwCCgtNZWFuaW5nQ29kZRJACgV2YWx1ZRgBIAEoDjIxLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29uc2VudERhdGFNZWFuaW5nQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOm+K+YOyBTFodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbnNlbnQtZGF0YS1tZWFuaW5nwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGU69gPAn+O2BQOy/uSXBi9odHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vQ29uc2VudJqGk6AIJnBvbGljeS5leGlzdHMoKSBvciBwb2xpY3lSdWxlLmV4aXN0cygpmoaToAhkcGF0aWVudC5leGlzdHMoKSBvciBzY29wZS5jb2Rpbmcud2hlcmUoc3lzdGVtPSdzb21ldGhpbmcnIGFuZCBjb2RlPSdwYXRpZW50LXByaXZhY3knKS5leGlzdHMoKS5ub3QoKZqGk6AIXXBhdGllbnQuZXhpc3RzKCkgb3Igc2NvcGUuY29kaW5nLndoZXJlKHN5c3RlbT0nc29tZXRoaW5nJyBhbmQgY29kZT0ncmVzZWFyY2gnKS5leGlzdHMoKS5ub3QoKZqGk6AIWHBhdGllbnQuZXhpc3RzKCkgb3Igc2NvcGUuY29kaW5nLndoZXJlKHN5c3RlbT0nc29tZXRoaW5nJyBhbmQgY29kZT0nYWRyJykuZXhpc3RzKCkubm90KCmahpOgCF5wYXRpZW50LmV4aXN0cygpIG9yIHNjb3BlLmNvZGluZy53aGVyZShzeXN0ZW09J3NvbWV0aGluZycgYW5kIGNvZGU9J3RyZWF0bWVudCcpLmV4aXN0cygpLm5vdCgpSgQIBxAIQncKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaVGdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvY29uc2VudF9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Consent.
 * Use `create(ConsentSchema)` to create a new message.
 */
exports.ConsentSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_consent, 0);
/**
 * Describes the message google.fhir.r4.core.Consent.StatusCode.
 * Use `create(Consent_StatusCodeSchema)` to create a new message.
 */
exports.Consent_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_consent, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Consent.SourceX.
 * Use `create(Consent_SourceXSchema)` to create a new message.
 */
exports.Consent_SourceXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_consent, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Consent.Policy.
 * Use `create(Consent_PolicySchema)` to create a new message.
 */
exports.Consent_PolicySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_consent, 0, 2);
/**
 * Describes the message google.fhir.r4.core.Consent.Verification.
 * Use `create(Consent_VerificationSchema)` to create a new message.
 */
exports.Consent_VerificationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_consent, 0, 3);
/**
 * Describes the message google.fhir.r4.core.Consent.Provision.
 * Use `create(Consent_ProvisionSchema)` to create a new message.
 */
exports.Consent_ProvisionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_consent, 0, 4);
/**
 * Describes the message google.fhir.r4.core.Consent.Provision.TypeCode.
 * Use `create(Consent_Provision_TypeCodeSchema)` to create a new message.
 */
exports.Consent_Provision_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_consent, 0, 4, 0);
/**
 * Describes the message google.fhir.r4.core.Consent.Provision.ProvisionActor.
 * Use `create(Consent_Provision_ProvisionActorSchema)` to create a new message.
 */
exports.Consent_Provision_ProvisionActorSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_consent, 0, 4, 1);
/**
 * Describes the message google.fhir.r4.core.Consent.Provision.ProvisionData.
 * Use `create(Consent_Provision_ProvisionDataSchema)` to create a new message.
 */
exports.Consent_Provision_ProvisionDataSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_consent, 0, 4, 2);
/**
 * Describes the message google.fhir.r4.core.Consent.Provision.ProvisionData.MeaningCode.
 * Use `create(Consent_Provision_ProvisionData_MeaningCodeSchema)` to create a new message.
 */
exports.Consent_Provision_ProvisionData_MeaningCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_consent, 0, 4, 2, 0);
