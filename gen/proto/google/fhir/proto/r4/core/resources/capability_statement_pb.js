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
exports.CapabilityStatement_Document_ModeCodeSchema = exports.CapabilityStatement_DocumentSchema = exports.CapabilityStatement_Messaging_SupportedMessage_ModeCodeSchema = exports.CapabilityStatement_Messaging_SupportedMessageSchema = exports.CapabilityStatement_Messaging_EndpointSchema = exports.CapabilityStatement_MessagingSchema = exports.CapabilityStatement_Rest_SystemInteraction_CodeTypeSchema = exports.CapabilityStatement_Rest_SystemInteractionSchema = exports.CapabilityStatement_Rest_Resource_OperationSchema = exports.CapabilityStatement_Rest_Resource_SearchParam_TypeCodeSchema = exports.CapabilityStatement_Rest_Resource_SearchParamSchema = exports.CapabilityStatement_Rest_Resource_ReferencePolicyCodeSchema = exports.CapabilityStatement_Rest_Resource_ConditionalDeleteCodeSchema = exports.CapabilityStatement_Rest_Resource_ConditionalReadCodeSchema = exports.CapabilityStatement_Rest_Resource_VersioningCodeSchema = exports.CapabilityStatement_Rest_Resource_ResourceInteraction_CodeTypeSchema = exports.CapabilityStatement_Rest_Resource_ResourceInteractionSchema = exports.CapabilityStatement_Rest_Resource_TypeCodeSchema = exports.CapabilityStatement_Rest_ResourceSchema = exports.CapabilityStatement_Rest_SecuritySchema = exports.CapabilityStatement_Rest_ModeCodeSchema = exports.CapabilityStatement_RestSchema = exports.CapabilityStatement_PatchFormatCodeSchema = exports.CapabilityStatement_FormatCodeSchema = exports.CapabilityStatement_FhirVersionCodeSchema = exports.CapabilityStatement_ImplementationSchema = exports.CapabilityStatement_SoftwareSchema = exports.CapabilityStatement_KindCodeSchema = exports.CapabilityStatement_StatusCodeSchema = exports.CapabilityStatementSchema = exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
var valuesets_pb_1 = require("../valuesets_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/capability_statement.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement = (0, codegenv1_1.fileDesc)("CkRwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jYXBhYmlsaXR5X3N0YXRlbWVudC5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSK9ZgoTQ2FwYWJpbGl0eVN0YXRlbWVudBIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEiUKA3VybBgKIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEiwKB3ZlcnNpb24YCyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIpCgRuYW1lGAwgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKgoFdGl0bGUYDSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJLCgZzdGF0dXMYDiABKAsyMy5nb29nbGUuZmhpci5yNC5jb3JlLkNhcGFiaWxpdHlTdGF0ZW1lbnQuU3RhdHVzQ29kZUIG8NCH6wQBEjIKDGV4cGVyaW1lbnRhbBgPIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIzCgRkYXRlGBAgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZUIG8NCH6wQBEi4KCXB1Ymxpc2hlchgRIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjMKB2NvbnRhY3QYEiADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSMgoLZGVzY3JpcHRpb24YEyABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEjYKC3VzZV9jb250ZXh0GBQgAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Vc2FnZUNvbnRleHQSOgoManVyaXNkaWN0aW9uGBUgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLgoHcHVycG9zZRgWIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuTWFya2Rvd24SMAoJY29weXJpZ2h0GBcgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhJHCgRraW5kGBggASgLMjEuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LktpbmRDb2RlQgbw0IfrBAESNAoMaW5zdGFudGlhdGVzGBkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5DYW5vbmljYWwSLwoHaW1wb3J0cxgaIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsEkMKCHNvZnR3YXJlGBsgASgLMjEuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LlNvZnR3YXJlEk8KDmltcGxlbWVudGF0aW9uGBwgASgLMjcuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LkltcGxlbWVudGF0aW9uElYKDGZoaXJfdmVyc2lvbhgdIAEoCzI4Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ2FwYWJpbGl0eVN0YXRlbWVudC5GaGlyVmVyc2lvbkNvZGVCBvDQh+sEARJLCgZmb3JtYXQYHiADKAsyMy5nb29nbGUuZmhpci5yNC5jb3JlLkNhcGFiaWxpdHlTdGF0ZW1lbnQuRm9ybWF0Q29kZUIG8NCH6wQBEk4KDHBhdGNoX2Zvcm1hdBgfIAMoCzI4Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ2FwYWJpbGl0eVN0YXRlbWVudC5QYXRjaEZvcm1hdENvZGUSPAoUaW1wbGVtZW50YXRpb25fZ3VpZGUYICADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkNhbm9uaWNhbBI7CgRyZXN0GCEgAygLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LlJlc3QSRQoJbWVzc2FnaW5nGCIgAygLMjIuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50Lk1lc3NhZ2luZxJDCghkb2N1bWVudBgjIAMoCzIxLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2FwYWJpbGl0eVN0YXRlbWVudC5Eb2N1bWVudBqYAgoKU3RhdHVzQ29kZRI/CgV2YWx1ZRgBIAEoDjIwLmdvb2dsZS5maGlyLnI0LmNvcmUuUHVibGljYXRpb25TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bYr5g7IFL2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcHVibGljYXRpb24tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUaowIKCEtpbmRDb2RlEkUKBXZhbHVlGAEgASgOMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50S2luZENvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjp0ivmDsgU2aHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jYXBhYmlsaXR5LXN0YXRlbWVudC1raW5kwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUauAIKCFNvZnR3YXJlEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMQoEbmFtZRgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nQgbw0IfrBAESLAoHdmVyc2lvbhgFIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjMKDHJlbGVhc2VfZGF0ZRgGIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUa0AIKDkltcGxlbWVudGF0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOAoLZGVzY3JpcHRpb24YBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0IG8NCH6wQBEiUKA3VybBgFIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJsEkUKCWN1c3RvZGlhbhgGIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24akQIKD0ZoaXJWZXJzaW9uQ29kZRI5CgV2YWx1ZRgBIAEoDjIqLmdvb2dsZS5maGlyLnI0LmNvcmUuRkhJUlZlcnNpb25Db2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246Z4r5g7IFKWh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvRkhJUi12ZXJzaW9uwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa4wEKCkZvcm1hdENvZGUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhINCgV2YWx1ZRgEIAEoCTpkivmDsgUmaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9taW1ldHlwZXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZUoECAEQAhroAQoPUGF0Y2hGb3JtYXRDb2RlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SDQoFdmFsdWUYBCABKAk6ZIr5g7IFJmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWltZXR5cGVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGVKBAgBEAIa5DMKBFJlc3QSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJMCgRtb2RlGAQgASgLMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LlJlc3QuTW9kZUNvZGVCBvDQh+sEARI0Cg1kb2N1bWVudGF0aW9uGAUgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhJICghzZWN1cml0eRgGIAEoCzI2Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ2FwYWJpbGl0eVN0YXRlbWVudC5SZXN0LlNlY3VyaXR5EkgKCHJlc291cmNlGAcgAygLMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LlJlc3QuUmVzb3VyY2USVAoLaW50ZXJhY3Rpb24YCCADKAsyPy5nb29nbGUuZmhpci5yNC5jb3JlLkNhcGFiaWxpdHlTdGF0ZW1lbnQuUmVzdC5TeXN0ZW1JbnRlcmFjdGlvbhJYCgxzZWFyY2hfcGFyYW0YCSADKAsyQi5nb29nbGUuZmhpci5yNC5jb3JlLkNhcGFiaWxpdHlTdGF0ZW1lbnQuUmVzdC5SZXNvdXJjZS5TZWFyY2hQYXJhbRJTCglvcGVyYXRpb24YCiADKAsyQC5nb29nbGUuZmhpci5yNC5jb3JlLkNhcGFiaWxpdHlTdGF0ZW1lbnQuUmVzdC5SZXNvdXJjZS5PcGVyYXRpb24SMwoLY29tcGFydG1lbnQYCyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkNhbm9uaWNhbBqfAgoITW9kZUNvZGUSQwoFdmFsdWUYASABKA4yNC5nb29nbGUuZmhpci5yNC5jb3JlLlJlc3RmdWxDYXBhYmlsaXR5TW9kZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpyivmDsgU0aHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZXN0ZnVsLWNhcGFiaWxpdHktbW9kZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGrkCCghTZWN1cml0eRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEioKBGNvcnMYBCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SNQoHc2VydmljZRgFIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjIKC2Rlc2NyaXB0aW9uGAYgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhr5IwoIUmVzb3VyY2USJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJVCgR0eXBlGAQgASgLMj8uZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LlJlc3QuUmVzb3VyY2UuVHlwZUNvZGVCBvDQh+sEARIvCgdwcm9maWxlGAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5DYW5vbmljYWwSOQoRc3VwcG9ydGVkX3Byb2ZpbGUYBiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkNhbm9uaWNhbBI0Cg1kb2N1bWVudGF0aW9uGAcgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhJfCgtpbnRlcmFjdGlvbhgIIAMoCzJKLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2FwYWJpbGl0eVN0YXRlbWVudC5SZXN0LlJlc291cmNlLlJlc291cmNlSW50ZXJhY3Rpb24SWQoKdmVyc2lvbmluZxgJIAEoCzJFLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2FwYWJpbGl0eVN0YXRlbWVudC5SZXN0LlJlc291cmNlLlZlcnNpb25pbmdDb2RlEjIKDHJlYWRfaGlzdG9yeRgKIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIzCg11cGRhdGVfY3JlYXRlGAsgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEjgKEmNvbmRpdGlvbmFsX2NyZWF0ZRgMIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhJkChBjb25kaXRpb25hbF9yZWFkGA0gASgLMkouZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LlJlc3QuUmVzb3VyY2UuQ29uZGl0aW9uYWxSZWFkQ29kZRI4ChJjb25kaXRpb25hbF91cGRhdGUYDiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SaAoSY29uZGl0aW9uYWxfZGVsZXRlGA8gASgLMkwuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LlJlc3QuUmVzb3VyY2UuQ29uZGl0aW9uYWxEZWxldGVDb2RlEmQKEHJlZmVyZW5jZV9wb2xpY3kYECADKAsySi5nb29nbGUuZmhpci5yNC5jb3JlLkNhcGFiaWxpdHlTdGF0ZW1lbnQuUmVzdC5SZXNvdXJjZS5SZWZlcmVuY2VQb2xpY3lDb2RlEjMKDnNlYXJjaF9pbmNsdWRlGBEgAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSNwoSc2VhcmNoX3Jldl9pbmNsdWRlGBIgAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSWAoMc2VhcmNoX3BhcmFtGBMgAygLMkIuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LlJlc3QuUmVzb3VyY2UuU2VhcmNoUGFyYW0SUwoJb3BlcmF0aW9uGBQgAygLMkAuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LlJlc3QuUmVzb3VyY2UuT3BlcmF0aW9uGo0CCghUeXBlQ29kZRI6CgV2YWx1ZRgBIAEoDjIrLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVzb3VyY2VUeXBlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmmK+YOyBStodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3Jlc291cmNlLXR5cGVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa9gQKE1Jlc291cmNlSW50ZXJhY3Rpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJpCgRjb2RlGAQgASgLMlMuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50LlJlc3QuUmVzb3VyY2UuUmVzb3VyY2VJbnRlcmFjdGlvbi5Db2RlVHlwZUIG8NCH6wQBEjQKDWRvY3VtZW50YXRpb24YBSABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duGqUCCghDb2RlVHlwZRJICgV2YWx1ZRgBIAEoDjI5Lmdvb2dsZS5maGlyLnI0LmNvcmUuVHlwZVJlc3RmdWxJbnRlcmFjdGlvblZhbHVlU2V0LlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246c4r5g7IFNWh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvdHlwZS1yZXN0ZnVsLWludGVyYWN0aW9uwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUanwIKDlZlcnNpb25pbmdDb2RlEkMKBXZhbHVlGAEgASgOMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5SZXNvdXJjZVZlcnNpb25Qb2xpY3lDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bIr5g7IFLmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvdmVyc2lvbmluZy1wb2xpY3nAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqqAgoTQ29uZGl0aW9uYWxSZWFkQ29kZRJDCgV2YWx1ZRgBIAEoDjI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ29uZGl0aW9uYWxSZWFkU3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnKK+YOyBTRodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbmRpdGlvbmFsLXJlYWQtc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUasAIKFUNvbmRpdGlvbmFsRGVsZXRlQ29kZRJFCgV2YWx1ZRgBIAEoDjI2Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ29uZGl0aW9uYWxEZWxldGVTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246dIr5g7IFNmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29uZGl0aW9uYWwtZGVsZXRlLXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGq4CChNSZWZlcmVuY2VQb2xpY3lDb2RlEkUKBXZhbHVlGAEgASgOMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VIYW5kbGluZ1BvbGljeUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjp0ivmDsgU2aHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZWZlcmVuY2UtaGFuZGxpbmctcG9saWN5wJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUauwUKC1NlYXJjaFBhcmFtEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMQoEbmFtZRgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nQgbw0IfrBAESMgoKZGVmaW5pdGlvbhgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsEmEKBHR5cGUYBiABKAsySy5nb29nbGUuZmhpci5yNC5jb3JlLkNhcGFiaWxpdHlTdGF0ZW1lbnQuUmVzdC5SZXNvdXJjZS5TZWFyY2hQYXJhbS5UeXBlQ29kZUIG8NCH6wQBEjQKDWRvY3VtZW50YXRpb24YByABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duGpMCCghUeXBlQ29kZRI9CgV2YWx1ZRgBIAEoDjIuLmdvb2dsZS5maGlyLnI0LmNvcmUuU2VhcmNoUGFyYW1UeXBlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmyK+YOyBS5odHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3NlYXJjaC1wYXJhbS10eXBlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUayAIKCU9wZXJhdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjEKBG5hbWUYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0IG8NCH6wQBEjoKCmRlZmluaXRpb24YBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkNhbm9uaWNhbEIG8NCH6wQBEjQKDWRvY3VtZW50YXRpb24YBiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duOiuahpOgCCVzZWFyY2hQYXJhbS5zZWxlY3QobmFtZSkuaXNEaXN0aW5jdCgpGu0EChFTeXN0ZW1JbnRlcmFjdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEl4KBGNvZGUYBCABKAsySC5nb29nbGUuZmhpci5yNC5jb3JlLkNhcGFiaWxpdHlTdGF0ZW1lbnQuUmVzdC5TeXN0ZW1JbnRlcmFjdGlvbi5Db2RlVHlwZUIG8NCH6wQBEjQKDWRvY3VtZW50YXRpb24YBSABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duGqkCCghDb2RlVHlwZRJKCgV2YWx1ZRgBIAEoDjI7Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3lzdGVtUmVzdGZ1bEludGVyYWN0aW9uVmFsdWVTZXQuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjp1ivmDsgU3aHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zeXN0ZW0tcmVzdGZ1bC1pbnRlcmFjdGlvbsCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlOiiahpOgCCJyZXNvdXJjZS5zZWxlY3QodHlwZSkuaXNEaXN0aW5jdCgpGrwKCglNZXNzYWdpbmcSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJNCghlbmRwb2ludBgEIAMoCzI7Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ2FwYWJpbGl0eVN0YXRlbWVudC5NZXNzYWdpbmcuRW5kcG9pbnQSOAoOcmVsaWFibGVfY2FjaGUYBSABKAsyIC5nb29nbGUuZmhpci5yNC5jb3JlLlVuc2lnbmVkSW50EjQKDWRvY3VtZW50YXRpb24YBiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEl4KEXN1cHBvcnRlZF9tZXNzYWdlGAcgAygLMkMuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50Lk1lc3NhZ2luZy5TdXBwb3J0ZWRNZXNzYWdlGowCCghFbmRwb2ludBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjUKCHByb3RvY29sGAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmdCBvDQh+sEARIxCgdhZGRyZXNzGAUgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmxCBvDQh+sEARroBAoQU3VwcG9ydGVkTWVzc2FnZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEmIKBG1vZGUYBCABKAsyTC5nb29nbGUuZmhpci5yNC5jb3JlLkNhcGFiaWxpdHlTdGF0ZW1lbnQuTWVzc2FnaW5nLlN1cHBvcnRlZE1lc3NhZ2UuTW9kZUNvZGVCBvDQh+sEARI6CgpkZWZpbml0aW9uGAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5DYW5vbmljYWxCBvDQh+sEARqbAgoITW9kZUNvZGUSQQoFdmFsdWUYASABKA4yMi5nb29nbGUuZmhpci5yNC5jb3JlLkV2ZW50Q2FwYWJpbGl0eU1vZGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cIr5g7IFMmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZXZlbnQtY2FwYWJpbGl0eS1tb2RlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa8gQKCERvY3VtZW50EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SUAoEbW9kZRgEIAEoCzI6Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ2FwYWJpbGl0eVN0YXRlbWVudC5Eb2N1bWVudC5Nb2RlQ29kZUIG8NCH6wQBEjQKDWRvY3VtZW50YXRpb24YBSABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEjcKB3Byb2ZpbGUYBiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkNhbm9uaWNhbEIG8NCH6wQBGowCCghNb2RlQ29kZRI6CgV2YWx1ZRgBIAEoDjIrLmdvb2dsZS5maGlyLnI0LmNvcmUuRG9jdW1lbnRNb2RlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmiK+YOyBSpodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2RvY3VtZW50LW1vZGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZTrKBMCf47YFA7L+5JcGO2h0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9DYXBhYmlsaXR5U3RhdGVtZW50moaToAg4cmVzdC5leGlzdHMoKSBvciBtZXNzYWdpbmcuZXhpc3RzKCkgb3IgZG9jdW1lbnQuZXhpc3RzKCmahpOgCEUoZGVzY3JpcHRpb24uY291bnQoKSArIHNvZnR3YXJlLmNvdW50KCkgKyBpbXBsZW1lbnRhdGlvbi5jb3VudCgpKSA+IDCahpOgCC9tZXNzYWdpbmcuZW5kcG9pbnQuZW1wdHkoKSBvciBraW5kID0gJ2luc3RhbmNlJ5qGk6AIKmRvY3VtZW50LnNlbGVjdChwcm9maWxlJm1vZGUpLmlzRGlzdGluY3QoKZqGk6AILyhraW5kICE9ICdpbnN0YW5jZScpIG9yIGltcGxlbWVudGF0aW9uLmV4aXN0cygpmoaToAhPKGtpbmQgIT0gJ2NhcGFiaWxpdHknKSBvciAoaW1wbGVtZW50YXRpb24uZXhpc3RzKCkubm90KCkgYW5kIHNvZnR3YXJlLmV4aXN0cygpKZqGk6AIVShraW5kIT0ncmVxdWlyZW1lbnRzJykgb3IgKGltcGxlbWVudGF0aW9uLmV4aXN0cygpLm5vdCgpIGFuZCBzb2Z0d2FyZS5leGlzdHMoKS5ub3QoKSmar66kCypuYW1lLm1hdGNoZXMoJ1tBLVpdKFtBLVphLXowLTlfXSl7MCwyNTR9JylKBAgHEAhChAEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaYWdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvY2FwYWJpbGl0eV9zdGF0ZW1lbnRfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes, valuesets_pb_1.file_proto_google_fhir_proto_r4_core_valuesets]);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.
 * Use `create(CapabilityStatementSchema)` to create a new message.
 */
exports.CapabilityStatementSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.StatusCode.
 * Use `create(CapabilityStatement_StatusCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 0);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.KindCode.
 * Use `create(CapabilityStatement_KindCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_KindCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 1);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Software.
 * Use `create(CapabilityStatement_SoftwareSchema)` to create a new message.
 */
exports.CapabilityStatement_SoftwareSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 2);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Implementation.
 * Use `create(CapabilityStatement_ImplementationSchema)` to create a new message.
 */
exports.CapabilityStatement_ImplementationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 3);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.FhirVersionCode.
 * Use `create(CapabilityStatement_FhirVersionCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_FhirVersionCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 4);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.FormatCode.
 * Use `create(CapabilityStatement_FormatCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_FormatCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 5);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.PatchFormatCode.
 * Use `create(CapabilityStatement_PatchFormatCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_PatchFormatCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 6);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.
 * Use `create(CapabilityStatement_RestSchema)` to create a new message.
 */
exports.CapabilityStatement_RestSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.ModeCode.
 * Use `create(CapabilityStatement_Rest_ModeCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_ModeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 0);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Security.
 * Use `create(CapabilityStatement_Rest_SecuritySchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_SecuritySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 1);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Resource.
 * Use `create(CapabilityStatement_Rest_ResourceSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_ResourceSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 2);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Resource.TypeCode.
 * Use `create(CapabilityStatement_Rest_Resource_TypeCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_Resource_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 2, 0);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Resource.ResourceInteraction.
 * Use `create(CapabilityStatement_Rest_Resource_ResourceInteractionSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_Resource_ResourceInteractionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 2, 1);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Resource.ResourceInteraction.CodeType.
 * Use `create(CapabilityStatement_Rest_Resource_ResourceInteraction_CodeTypeSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_Resource_ResourceInteraction_CodeTypeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 2, 1, 0);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Resource.VersioningCode.
 * Use `create(CapabilityStatement_Rest_Resource_VersioningCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_Resource_VersioningCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 2, 2);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Resource.ConditionalReadCode.
 * Use `create(CapabilityStatement_Rest_Resource_ConditionalReadCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_Resource_ConditionalReadCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 2, 3);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Resource.ConditionalDeleteCode.
 * Use `create(CapabilityStatement_Rest_Resource_ConditionalDeleteCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_Resource_ConditionalDeleteCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 2, 4);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Resource.ReferencePolicyCode.
 * Use `create(CapabilityStatement_Rest_Resource_ReferencePolicyCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_Resource_ReferencePolicyCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 2, 5);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Resource.SearchParam.
 * Use `create(CapabilityStatement_Rest_Resource_SearchParamSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_Resource_SearchParamSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 2, 6);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Resource.SearchParam.TypeCode.
 * Use `create(CapabilityStatement_Rest_Resource_SearchParam_TypeCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_Resource_SearchParam_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 2, 6, 0);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.Resource.Operation.
 * Use `create(CapabilityStatement_Rest_Resource_OperationSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_Resource_OperationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 2, 7);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.SystemInteraction.
 * Use `create(CapabilityStatement_Rest_SystemInteractionSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_SystemInteractionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 3);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Rest.SystemInteraction.CodeType.
 * Use `create(CapabilityStatement_Rest_SystemInteraction_CodeTypeSchema)` to create a new message.
 */
exports.CapabilityStatement_Rest_SystemInteraction_CodeTypeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 7, 3, 0);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Messaging.
 * Use `create(CapabilityStatement_MessagingSchema)` to create a new message.
 */
exports.CapabilityStatement_MessagingSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 8);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Messaging.Endpoint.
 * Use `create(CapabilityStatement_Messaging_EndpointSchema)` to create a new message.
 */
exports.CapabilityStatement_Messaging_EndpointSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 8, 0);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Messaging.SupportedMessage.
 * Use `create(CapabilityStatement_Messaging_SupportedMessageSchema)` to create a new message.
 */
exports.CapabilityStatement_Messaging_SupportedMessageSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 8, 1);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Messaging.SupportedMessage.ModeCode.
 * Use `create(CapabilityStatement_Messaging_SupportedMessage_ModeCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_Messaging_SupportedMessage_ModeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 8, 1, 0);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Document.
 * Use `create(CapabilityStatement_DocumentSchema)` to create a new message.
 */
exports.CapabilityStatement_DocumentSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 9);
/**
 * Describes the message google.fhir.r4.core.CapabilityStatement.Document.ModeCode.
 * Use `create(CapabilityStatement_Document_ModeCodeSchema)` to create a new message.
 */
exports.CapabilityStatement_Document_ModeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_capability_statement, 0, 9, 0);