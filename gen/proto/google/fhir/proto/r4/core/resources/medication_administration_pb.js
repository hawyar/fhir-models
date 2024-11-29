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
exports.MedicationAdministration_Dosage_RateXSchema = exports.MedicationAdministration_DosageSchema = exports.MedicationAdministration_PerformerSchema = exports.MedicationAdministration_EffectiveXSchema = exports.MedicationAdministration_MedicationXSchema = exports.MedicationAdministration_StatusCodeSchema = exports.MedicationAdministrationSchema = exports.file_proto_google_fhir_proto_r4_core_resources_medication_administration = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/medication_administration.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_medication_administration = (0, codegenv1_1.fileDesc)("Cklwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWRpY2F0aW9uX2FkbWluaXN0cmF0aW9uLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIqUbChhNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24SIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEi4KDGluc3RhbnRpYXRlcxgLIAMoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEl4KB3BhcnRfb2YYDCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIt8v/8wgYYTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9u8v/8wgYJUHJvY2VkdXJlElAKBnN0YXR1cxgNIAEoCzI4Lmdvb2dsZS5maGlyLnI0LmNvcmUuTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uLlN0YXR1c0NvZGVCBvDQh+sEARI7Cg1zdGF0dXNfcmVhc29uGA4gAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNgoIY2F0ZWdvcnkYDyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJVCgptZWRpY2F0aW9uGBAgASgLMjkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24uTWVkaWNhdGlvblhCBvDQh+sEARJPCgdzdWJqZWN0GBEgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCHvDQh+sEAfL//MIGB1BhdGllbnTy//zCBgVHcm91cBJTCgdjb250ZXh0GBIgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCIvL//MIGCUVuY291bnRlcvL//MIGDUVwaXNvZGVPZkNhcmUSTgoWc3VwcG9ydGluZ19pbmZvcm1hdGlvbhgTIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghSZXNvdXJjZRJTCgllZmZlY3RpdmUYFCABKAsyOC5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGljYXRpb25BZG1pbmlzdHJhdGlvbi5FZmZlY3RpdmVYQgbw0IfrBAESSgoJcGVyZm9ybWVyGBUgAygLMjcuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24uUGVyZm9ybWVyEjkKC3JlYXNvbl9jb2RlGBYgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQScAoQcmVhc29uX3JlZmVyZW5jZRgXIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQjby//zCBglDb25kaXRpb27y//zCBgtPYnNlcnZhdGlvbvL//MIGEERpYWdub3N0aWNSZXBvcnQSSAoHcmVxdWVzdBgYIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhfy//zCBhFNZWRpY2F0aW9uUmVxdWVzdBI8CgZkZXZpY2UYGSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIM8v/8wgYGRGV2aWNlEi0KBG5vdGUYGiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkFubm90YXRpb24SRAoGZG9zYWdlGBsgASgLMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24uRG9zYWdlEkcKDWV2ZW50X2hpc3RvcnkYHCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIQ8v/8wgYKUHJvdmVuYW5jZRqqAgoKU3RhdHVzQ29kZRJMCgV2YWx1ZRgBIAEoDjI9Lmdvb2dsZS5maGlyLnI0LmNvcmUuTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uU3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnKK+YOyBTRodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21lZGljYXRpb24tYWRtaW4tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUaqAEKC01lZGljYXRpb25YEkAKEGNvZGVhYmxlX2NvbmNlcHQYASABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEgAEkUKCXJlZmVyZW5jZRgCIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhDy//zCBgpNZWRpY2F0aW9uSAA6BqCDg+gGAUIICgZjaG9pY2UagQEKCkVmZmVjdGl2ZVgSMgoJZGF0ZV90aW1lGAEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZUgAEi0KBnBlcmlvZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kSAA6BqCDg+gGAUIICgZjaG9pY2Ua5wIKCVBlcmZvcm1lchInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjYKCGZ1bmN0aW9uGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSiQEKBWFjdG9yGAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCWvDQh+sEAfL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgdQYXRpZW508v/8wgYNUmVsYXRlZFBlcnNvbvL//MIGBkRldmljZRqOBQoGRG9zYWdlEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SKQoEdGV4dBgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjIKBHNpdGUYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIzCgVyb3V0ZRgGIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjQKBm1ldGhvZBgHIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjEKBGRvc2UYCCABKAsyIy5nb29nbGUuZmhpci5yNC5jb3JlLlNpbXBsZVF1YW50aXR5EkgKBHJhdGUYCSABKAsyOi5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGljYXRpb25BZG1pbmlzdHJhdGlvbi5Eb3NhZ2UuUmF0ZVgafwoFUmF0ZVgSKwoFcmF0aW8YASABKAsyGi5nb29nbGUuZmhpci5yNC5jb3JlLlJhdGlvSAASNwoIcXVhbnRpdHkYAiABKAsyIy5nb29nbGUuZmhpci5yNC5jb3JlLlNpbXBsZVF1YW50aXR5SAA6BqCDg+gGAUIICgZjaG9pY2U6JJqGk6AIHmRvc2UuZXhpc3RzKCkgb3IgcmF0ZS5leGlzdHMoKTpMwJ/jtgUDsv7klwZAaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL01lZGljYXRpb25BZG1pbmlzdHJhdGlvbkoECAcQCEKJAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpmZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWRpY2F0aW9uX2FkbWluaXN0cmF0aW9uX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.MedicationAdministration.
 * Use `create(MedicationAdministrationSchema)` to create a new message.
 */
exports.MedicationAdministrationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication_administration, 0);
/**
 * Describes the message google.fhir.r4.core.MedicationAdministration.StatusCode.
 * Use `create(MedicationAdministration_StatusCodeSchema)` to create a new message.
 */
exports.MedicationAdministration_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication_administration, 0, 0);
/**
 * Describes the message google.fhir.r4.core.MedicationAdministration.MedicationX.
 * Use `create(MedicationAdministration_MedicationXSchema)` to create a new message.
 */
exports.MedicationAdministration_MedicationXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication_administration, 0, 1);
/**
 * Describes the message google.fhir.r4.core.MedicationAdministration.EffectiveX.
 * Use `create(MedicationAdministration_EffectiveXSchema)` to create a new message.
 */
exports.MedicationAdministration_EffectiveXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication_administration, 0, 2);
/**
 * Describes the message google.fhir.r4.core.MedicationAdministration.Performer.
 * Use `create(MedicationAdministration_PerformerSchema)` to create a new message.
 */
exports.MedicationAdministration_PerformerSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication_administration, 0, 3);
/**
 * Describes the message google.fhir.r4.core.MedicationAdministration.Dosage.
 * Use `create(MedicationAdministration_DosageSchema)` to create a new message.
 */
exports.MedicationAdministration_DosageSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication_administration, 0, 4);
/**
 * Describes the message google.fhir.r4.core.MedicationAdministration.Dosage.RateX.
 * Use `create(MedicationAdministration_Dosage_RateXSchema)` to create a new message.
 */
exports.MedicationAdministration_Dosage_RateXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication_administration, 0, 4, 0);