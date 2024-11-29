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
exports.Immunization_ProtocolApplied_SeriesDosesXSchema = exports.Immunization_ProtocolApplied_DoseNumberXSchema = exports.Immunization_ProtocolAppliedSchema = exports.Immunization_ReactionSchema = exports.Immunization_EducationSchema = exports.Immunization_PerformerSchema = exports.Immunization_OccurrenceXSchema = exports.Immunization_StatusCodeSchema = exports.ImmunizationSchema = exports.file_proto_google_fhir_proto_r4_core_resources_immunization = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var datatypes_pb_1 = require("../datatypes_pb");
var valuesets_pb_1 = require("../valuesets_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/immunization.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_immunization = (0, codegenv1_1.fileDesc)("Cjxwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9pbW11bml6YXRpb24ucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUi7SMKDEltbXVuaXphdGlvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISRAoGc3RhdHVzGAsgASgLMiwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbW11bml6YXRpb24uU3RhdHVzQ29kZUIG8NCH6wQBEjsKDXN0YXR1c19yZWFzb24YDCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJCCgx2YWNjaW5lX2NvZGUYDSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEkQKB3BhdGllbnQYDiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIT8NCH6wQB8v/8wgYHUGF0aWVudBJCCgllbmNvdW50ZXIYDyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJRW5jb3VudGVyEkkKCm9jY3VycmVuY2UYECABKAsyLS5nb29nbGUuZmhpci5yNC5jb3JlLkltbXVuaXphdGlvbi5PY2N1cnJlbmNlWEIG8NCH6wQBEi8KCHJlY29yZGVkGBEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRI0Cg5wcmltYXJ5X3NvdXJjZRgSIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhI7Cg1yZXBvcnRfb3JpZ2luGBMgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSQAoIbG9jYXRpb24YFCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYITG9jYXRpb24SSAoMbWFudWZhY3R1cmVyGBUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhIvCgpsb3RfbnVtYmVyGBYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMgoPZXhwaXJhdGlvbl9kYXRlGBcgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlEjIKBHNpdGUYGCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIzCgVyb3V0ZRgZIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjoKDWRvc2VfcXVhbnRpdHkYGiABKAsyIy5nb29nbGUuZmhpci5yNC5jb3JlLlNpbXBsZVF1YW50aXR5Ej4KCXBlcmZvcm1lchgbIAMoCzIrLmdvb2dsZS5maGlyLnI0LmNvcmUuSW1tdW5pemF0aW9uLlBlcmZvcm1lchItCgRub3RlGBwgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5Bbm5vdGF0aW9uEjkKC3JlYXNvbl9jb2RlGB0gAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQScAoQcmVhc29uX3JlZmVyZW5jZRgeIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQjby//zCBglDb25kaXRpb27y//zCBgtPYnNlcnZhdGlvbvL//MIGEERpYWdub3N0aWNSZXBvcnQSMgoMaXNfc3VicG90ZW50GB8gASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEj4KEHN1YnBvdGVudF9yZWFzb24YICADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI+CgllZHVjYXRpb24YISADKAsyKy5nb29nbGUuZmhpci5yNC5jb3JlLkltbXVuaXphdGlvbi5FZHVjYXRpb24SQQoTcHJvZ3JhbV9lbGlnaWJpbGl0eRgiIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjwKDmZ1bmRpbmdfc291cmNlGCMgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSPAoIcmVhY3Rpb24YJCADKAsyKi5nb29nbGUuZmhpci5yNC5jb3JlLkltbXVuaXphdGlvbi5SZWFjdGlvbhJLChBwcm90b2NvbF9hcHBsaWVkGCUgAygLMjEuZ29vZ2xlLmZoaXIucjQuY29yZS5JbW11bml6YXRpb24uUHJvdG9jb2xBcHBsaWVkGqMCCgpTdGF0dXNDb2RlEkkKBXZhbHVlGAEgASgOMjouZ29vZ2xlLmZoaXIucjQuY29yZS5JbW11bml6YXRpb25TdGF0dXNDb2Rlc1ZhbHVlU2V0LlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bor5g7IFMGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvaW1tdW5pemF0aW9uLXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGpABCgtPY2N1cnJlbmNlWBIyCglkYXRlX3RpbWUYASABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lSAASOwoMc3RyaW5nX3ZhbHVlGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdIAFIGc3RyaW5nOgagg4PoBgFCCAoGY2hvaWNlGswCCglQZXJmb3JtZXISJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI2CghmdW5jdGlvbhgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Em8KBWFjdG9yGAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCQPDQh+sEAfL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb24aqgMKCUVkdWNhdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKDWRvY3VtZW50X3R5cGUYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIrCglyZWZlcmVuY2UYBSABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRI3ChBwdWJsaWNhdGlvbl9kYXRlGAYgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRI4ChFwcmVzZW50YXRpb25fZGF0ZRgHIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWU6MZqGk6AIK2RvY3VtZW50VHlwZS5leGlzdHMoKSBvciByZWZlcmVuY2UuZXhpc3RzKCkawgIKCFJlYWN0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SKwoEZGF0ZRgEIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSQQoGZGV0YWlsGAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEfL//MIGC09ic2VydmF0aW9uEi4KCHJlcG9ydGVkGAYgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuGsAGCg9Qcm90b2NvbEFwcGxpZWQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIrCgZzZXJpZXMYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJFCglhdXRob3JpdHkYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEjwKDnRhcmdldF9kaXNlYXNlGAYgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSWgoLZG9zZV9udW1iZXIYByABKAsyPS5nb29nbGUuZmhpci5yNC5jb3JlLkltbXVuaXphdGlvbi5Qcm90b2NvbEFwcGxpZWQuRG9zZU51bWJlclhCBvDQh+sEARJUCgxzZXJpZXNfZG9zZXMYCCABKAsyPi5nb29nbGUuZmhpci5yNC5jb3JlLkltbXVuaXphdGlvbi5Qcm90b2NvbEFwcGxpZWQuU2VyaWVzRG9zZXNYGpYBCgtEb3NlTnVtYmVyWBI4Cgxwb3NpdGl2ZV9pbnQYASABKAsyIC5nb29nbGUuZmhpci5yNC5jb3JlLlBvc2l0aXZlSW50SAASOwoMc3RyaW5nX3ZhbHVlGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdIAFIGc3RyaW5nOgagg4PoBgFCCAoGY2hvaWNlGpcBCgxTZXJpZXNEb3Nlc1gSOAoMcG9zaXRpdmVfaW50GAEgASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5Qb3NpdGl2ZUludEgAEjsKDHN0cmluZ192YWx1ZRgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZzoGoIOD6AYBQggKBmNob2ljZTpAwJ/jtgUDsv7klwY0aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0ltbXVuaXphdGlvbkoECAcQCEJ8Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWllnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2ltbXVuaXphdGlvbl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes, valuesets_pb_1.file_proto_google_fhir_proto_r4_core_valuesets]);
/**
 * Describes the message google.fhir.r4.core.Immunization.
 * Use `create(ImmunizationSchema)` to create a new message.
 */
exports.ImmunizationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization, 0);
/**
 * Describes the message google.fhir.r4.core.Immunization.StatusCode.
 * Use `create(Immunization_StatusCodeSchema)` to create a new message.
 */
exports.Immunization_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Immunization.OccurrenceX.
 * Use `create(Immunization_OccurrenceXSchema)` to create a new message.
 */
exports.Immunization_OccurrenceXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Immunization.Performer.
 * Use `create(Immunization_PerformerSchema)` to create a new message.
 */
exports.Immunization_PerformerSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization, 0, 2);
/**
 * Describes the message google.fhir.r4.core.Immunization.Education.
 * Use `create(Immunization_EducationSchema)` to create a new message.
 */
exports.Immunization_EducationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization, 0, 3);
/**
 * Describes the message google.fhir.r4.core.Immunization.Reaction.
 * Use `create(Immunization_ReactionSchema)` to create a new message.
 */
exports.Immunization_ReactionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization, 0, 4);
/**
 * Describes the message google.fhir.r4.core.Immunization.ProtocolApplied.
 * Use `create(Immunization_ProtocolAppliedSchema)` to create a new message.
 */
exports.Immunization_ProtocolAppliedSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization, 0, 5);
/**
 * Describes the message google.fhir.r4.core.Immunization.ProtocolApplied.DoseNumberX.
 * Use `create(Immunization_ProtocolApplied_DoseNumberXSchema)` to create a new message.
 */
exports.Immunization_ProtocolApplied_DoseNumberXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization, 0, 5, 0);
/**
 * Describes the message google.fhir.r4.core.Immunization.ProtocolApplied.SeriesDosesX.
 * Use `create(Immunization_ProtocolApplied_SeriesDosesXSchema)` to create a new message.
 */
exports.Immunization_ProtocolApplied_SeriesDosesXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization, 0, 5, 1);