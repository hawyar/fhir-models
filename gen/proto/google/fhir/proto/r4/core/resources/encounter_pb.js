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
exports.Encounter_Location_StatusCodeSchema = exports.Encounter_LocationSchema = exports.Encounter_HospitalizationSchema = exports.Encounter_DiagnosisSchema = exports.Encounter_ParticipantSchema = exports.Encounter_ClassHistorySchema = exports.Encounter_StatusHistory_StatusCodeSchema = exports.Encounter_StatusHistorySchema = exports.Encounter_StatusCodeSchema = exports.EncounterSchema = exports.file_proto_google_fhir_proto_r4_core_resources_encounter = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/encounter.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_encounter = (0, codegenv1_1.fileDesc)("Cjlwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9lbmNvdW50ZXIucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUi/ykKCUVuY291bnRlchIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISQQoGc3RhdHVzGAsgASgLMikuZ29vZ2xlLmZoaXIucjQuY29yZS5FbmNvdW50ZXIuU3RhdHVzQ29kZUIG8NCH6wQBEkQKDnN0YXR1c19oaXN0b3J5GAwgAygLMiwuZ29vZ2xlLmZoaXIucjQuY29yZS5FbmNvdW50ZXIuU3RhdHVzSGlzdG9yeRI/CgtjbGFzc192YWx1ZRgNIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kaW5nQgbw0IfrBAFSBWNsYXNzEkIKDWNsYXNzX2hpc3RvcnkYDiADKAsyKy5nb29nbGUuZmhpci5yNC5jb3JlLkVuY291bnRlci5DbGFzc0hpc3RvcnkSMgoEdHlwZRgPIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjoKDHNlcnZpY2VfdHlwZRgQIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjYKCHByaW9yaXR5GBEgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSSQoHc3ViamVjdBgSIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhjy//zCBgdQYXRpZW508v/8wgYFR3JvdXASTAoPZXBpc29kZV9vZl9jYXJlGBMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCE/L//MIGDUVwaXNvZGVPZkNhcmUSRgoIYmFzZWRfb24YFCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIU8v/8wgYOU2VydmljZVJlcXVlc3QSPwoLcGFydGljaXBhbnQYFSADKAsyKi5nb29nbGUuZmhpci5yNC5jb3JlLkVuY291bnRlci5QYXJ0aWNpcGFudBJGCgthcHBvaW50bWVudBgWIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhHy//zCBgtBcHBvaW50bWVudBIrCgZwZXJpb2QYFyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBItCgZsZW5ndGgYGCABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkR1cmF0aW9uEjkKC3JlYXNvbl9jb2RlGBkgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSiQEKEHJlYXNvbl9yZWZlcmVuY2UYGiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJP8v/8wgYJQ29uZGl0aW9u8v/8wgYJUHJvY2VkdXJl8v/8wgYLT2JzZXJ2YXRpb27y//zCBhpJbW11bml6YXRpb25SZWNvbW1lbmRhdGlvbhI7CglkaWFnbm9zaXMYGyADKAsyKC5nb29nbGUuZmhpci5yNC5jb3JlLkVuY291bnRlci5EaWFnbm9zaXMSPgoHYWNjb3VudBgcIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg3y//zCBgdBY2NvdW50EkcKD2hvc3BpdGFsaXphdGlvbhgdIAEoCzIuLmdvb2dsZS5maGlyLnI0LmNvcmUuRW5jb3VudGVyLkhvc3BpdGFsaXphdGlvbhI5Cghsb2NhdGlvbhgeIAMoCzInLmdvb2dsZS5maGlyLnI0LmNvcmUuRW5jb3VudGVyLkxvY2F0aW9uEkwKEHNlcnZpY2VfcHJvdmlkZXIYHyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEkAKB3BhcnRfb2YYICABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJRW5jb3VudGVyGpQCCgpTdGF0dXNDb2RlEj0KBXZhbHVlGAEgASgOMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5FbmNvdW50ZXJTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246a4r5g7IFLWh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZW5jb3VudGVyLXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGsQECg1TdGF0dXNIaXN0b3J5EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24STwoGc3RhdHVzGAQgASgLMjcuZ29vZ2xlLmZoaXIucjQuY29yZS5FbmNvdW50ZXIuU3RhdHVzSGlzdG9yeS5TdGF0dXNDb2RlQgbw0IfrBAESMwoGcGVyaW9kGAUgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2RCBvDQh+sEARqUAgoKU3RhdHVzQ29kZRI9CgV2YWx1ZRgBIAEoDjIuLmdvb2dsZS5maGlyLnI0LmNvcmUuRW5jb3VudGVyU3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmuK+YOyBS1odHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2VuY291bnRlci1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqcAgoMQ2xhc3NIaXN0b3J5EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SPwoLY2xhc3NfdmFsdWUYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZ0IG8NCH6wQBUgVjbGFzcxIzCgZwZXJpb2QYBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZEIG8NCH6wQBGvcCCgtQYXJ0aWNpcGFudBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBHR5cGUYBCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIrCgZwZXJpb2QYBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBJvCgppbmRpdmlkdWFsGAYgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCO/L//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBg1SZWxhdGVkUGVyc29uGt8CCglEaWFnbm9zaXMSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJXCgljb25kaXRpb24YBCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIk8NCH6wQB8v/8wgYJQ29uZGl0aW9u8v/8wgYJUHJvY2VkdXJlEjEKA3VzZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ei4KBHJhbmsYBiABKAsyIC5nb29nbGUuZmhpci5yNC5jb3JlLlBvc2l0aXZlSW50GpQGCg9Ib3NwaXRhbGl6YXRpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJBChhwcmVfYWRtaXNzaW9uX2lkZW50aWZpZXIYBCABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISUAoGb3JpZ2luGAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCIPL//MIGCExvY2F0aW9u8v/8wgYMT3JnYW5pemF0aW9uEjoKDGFkbWl0X3NvdXJjZRgGIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjoKDHJlX2FkbWlzc2lvbhgHIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ej0KD2RpZXRfcHJlZmVyZW5jZRgIIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ej4KEHNwZWNpYWxfY291cnRlc3kYCSADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJBChNzcGVjaWFsX2FycmFuZ2VtZW50GAogAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSVQoLZGVzdGluYXRpb24YCyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIg8v/8wgYITG9jYXRpb27y//zCBgxPcmdhbml6YXRpb24SQwoVZGlzY2hhcmdlX2Rpc3Bvc2l0aW9uGAwgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQawAUKCExvY2F0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SRgoIbG9jYXRpb24YBCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIU8NCH6wQB8v/8wgYITG9jYXRpb24SQgoGc3RhdHVzGAUgASgLMjIuZ29vZ2xlLmZoaXIucjQuY29yZS5FbmNvdW50ZXIuTG9jYXRpb24uU3RhdHVzQ29kZRI7Cg1waHlzaWNhbF90eXBlGAYgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSKwoGcGVyaW9kGAcgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2QapQIKClN0YXR1c0NvZGUSRQoFdmFsdWUYASABKA4yNi5nb29nbGUuZmhpci5yNC5jb3JlLkVuY291bnRlckxvY2F0aW9uU3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnSK+YOyBTZodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2VuY291bnRlci1sb2NhdGlvbi1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZTo9wJ/jtgUDsv7klwYxaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0VuY291bnRlckoECAcQCEJ5Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlZnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2VuY291bnRlcl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Encounter.
 * Use `create(EncounterSchema)` to create a new message.
 */
exports.EncounterSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_encounter, 0);
/**
 * Describes the message google.fhir.r4.core.Encounter.StatusCode.
 * Use `create(Encounter_StatusCodeSchema)` to create a new message.
 */
exports.Encounter_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_encounter, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Encounter.StatusHistory.
 * Use `create(Encounter_StatusHistorySchema)` to create a new message.
 */
exports.Encounter_StatusHistorySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_encounter, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Encounter.StatusHistory.StatusCode.
 * Use `create(Encounter_StatusHistory_StatusCodeSchema)` to create a new message.
 */
exports.Encounter_StatusHistory_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_encounter, 0, 1, 0);
/**
 * Describes the message google.fhir.r4.core.Encounter.ClassHistory.
 * Use `create(Encounter_ClassHistorySchema)` to create a new message.
 */
exports.Encounter_ClassHistorySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_encounter, 0, 2);
/**
 * Describes the message google.fhir.r4.core.Encounter.Participant.
 * Use `create(Encounter_ParticipantSchema)` to create a new message.
 */
exports.Encounter_ParticipantSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_encounter, 0, 3);
/**
 * Describes the message google.fhir.r4.core.Encounter.Diagnosis.
 * Use `create(Encounter_DiagnosisSchema)` to create a new message.
 */
exports.Encounter_DiagnosisSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_encounter, 0, 4);
/**
 * Describes the message google.fhir.r4.core.Encounter.Hospitalization.
 * Use `create(Encounter_HospitalizationSchema)` to create a new message.
 */
exports.Encounter_HospitalizationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_encounter, 0, 5);
/**
 * Describes the message google.fhir.r4.core.Encounter.Location.
 * Use `create(Encounter_LocationSchema)` to create a new message.
 */
exports.Encounter_LocationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_encounter, 0, 6);
/**
 * Describes the message google.fhir.r4.core.Encounter.Location.StatusCode.
 * Use `create(Encounter_Location_StatusCodeSchema)` to create a new message.
 */
exports.Encounter_Location_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_encounter, 0, 6, 0);
