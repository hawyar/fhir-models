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
exports.AdverseEvent_SuspectEntity_CausalitySchema = exports.AdverseEvent_SuspectEntitySchema = exports.AdverseEvent_ActualityCodeSchema = exports.AdverseEventSchema = exports.file_proto_google_fhir_proto_r4_core_resources_adverse_event = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/adverse_event.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_adverse_event = (0, codegenv1_1.fileDesc)("Cj1wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9hZHZlcnNlX2V2ZW50LnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIukYCgxBZHZlcnNlRXZlbnQSIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogASgLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEkoKCWFjdHVhbGl0eRgLIAEoCzIvLmdvb2dsZS5maGlyLnI0LmNvcmUuQWR2ZXJzZUV2ZW50LkFjdHVhbGl0eUNvZGVCBvDQh+sEARI2CghjYXRlZ29yeRgMIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjMKBWV2ZW50GA0gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSdAoHc3ViamVjdBgOIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQkPw0IfrBAHy//zCBgdQYXRpZW508v/8wgYFR3JvdXDy//zCBgxQcmFjdGl0aW9uZXLy//zCBg1SZWxhdGVkUGVyc29uEkIKCWVuY291bnRlchgPIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg/y//zCBglFbmNvdW50ZXISKwoEZGF0ZRgQIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSLwoIZGV0ZWN0ZWQYESABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEjQKDXJlY29yZGVkX2RhdGUYEiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEkwKE3Jlc3VsdGluZ19jb25kaXRpb24YEyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJQ29uZGl0aW9uEkAKCGxvY2F0aW9uGBQgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCExvY2F0aW9uEjkKC3NlcmlvdXNuZXNzGBUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNgoIc2V2ZXJpdHkYFiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI1CgdvdXRjb21lGBcgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSegoIcmVjb3JkZXIYGCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJI8v/8wgYHUGF0aWVudPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBg1SZWxhdGVkUGVyc29uEmkKC2NvbnRyaWJ1dG9yGBkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCNPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgZEZXZpY2USRwoOc3VzcGVjdF9lbnRpdHkYGiADKAsyLy5nb29nbGUuZmhpci5yNC5jb3JlLkFkdmVyc2VFdmVudC5TdXNwZWN0RW50aXR5EtYBChdzdWJqZWN0X21lZGljYWxfaGlzdG9yeRgbIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQpQB8v/8wgYJQ29uZGl0aW9u8v/8wgYLT2JzZXJ2YXRpb27y//zCBhJBbGxlcmd5SW50b2xlcmFuY2Xy//zCBhNGYW1pbHlNZW1iZXJIaXN0b3J58v/8wgYMSW1tdW5pemF0aW9u8v/8wgYJUHJvY2VkdXJl8v/8wgYFTWVkaWHy//zCBhFEb2N1bWVudFJlZmVyZW5jZRJTChJyZWZlcmVuY2VfZG9jdW1lbnQYHCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIX8v/8wgYRRG9jdW1lbnRSZWZlcmVuY2USQgoFc3R1ZHkYHSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIT8v/8wgYNUmVzZWFyY2hTdHVkeRqkAgoNQWN0dWFsaXR5Q29kZRJDCgV2YWx1ZRgBIAEoDjI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuQWR2ZXJzZUV2ZW50QWN0dWFsaXR5Q29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnKK+YOyBTRodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2FkdmVyc2UtZXZlbnQtYWN0dWFsaXR5wJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa3gYKDVN1c3BlY3RFbnRpdHkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhK8AQoIaW5zdGFuY2UYBCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUKJAfDQh+sEAfL//MIGDEltbXVuaXphdGlvbvL//MIGCVByb2NlZHVyZfL//MIGCVN1YnN0YW5jZfL//MIGCk1lZGljYXRpb27y//zCBhhNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb27y//zCBhNNZWRpY2F0aW9uU3RhdGVtZW508v/8wgYGRGV2aWNlEkwKCWNhdXNhbGl0eRgFIAMoCzI5Lmdvb2dsZS5maGlyLnI0LmNvcmUuQWR2ZXJzZUV2ZW50LlN1c3BlY3RFbnRpdHkuQ2F1c2FsaXR5GqcDCglDYXVzYWxpdHkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI4Cgphc3Nlc3NtZW50GAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSOAoTcHJvZHVjdF9yZWxhdGVkbmVzcxgFIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nElgKBmF1dGhvchgGIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQijy//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xlEjQKBm1ldGhvZBgHIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0OkDAn+O2BQOy/uSXBjRodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vQWR2ZXJzZUV2ZW50SgQIBxAIQn0KF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaWmdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvYWR2ZXJzZV9ldmVudF9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.AdverseEvent.
 * Use `create(AdverseEventSchema)` to create a new message.
 */
exports.AdverseEventSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_adverse_event, 0);
/**
 * Describes the message google.fhir.r4.core.AdverseEvent.ActualityCode.
 * Use `create(AdverseEvent_ActualityCodeSchema)` to create a new message.
 */
exports.AdverseEvent_ActualityCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_adverse_event, 0, 0);
/**
 * Describes the message google.fhir.r4.core.AdverseEvent.SuspectEntity.
 * Use `create(AdverseEvent_SuspectEntitySchema)` to create a new message.
 */
exports.AdverseEvent_SuspectEntitySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_adverse_event, 0, 1);
/**
 * Describes the message google.fhir.r4.core.AdverseEvent.SuspectEntity.Causality.
 * Use `create(AdverseEvent_SuspectEntity_CausalitySchema)` to create a new message.
 */
exports.AdverseEvent_SuspectEntity_CausalitySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_adverse_event, 0, 1, 0);