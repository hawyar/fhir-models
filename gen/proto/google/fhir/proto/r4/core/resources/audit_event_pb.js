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
exports.AuditEvent_Entity_Detail_ValueXSchema = exports.AuditEvent_Entity_DetailSchema = exports.AuditEvent_EntitySchema = exports.AuditEvent_SourceSchema = exports.AuditEvent_Agent_Network_TypeCodeSchema = exports.AuditEvent_Agent_NetworkSchema = exports.AuditEvent_AgentSchema = exports.AuditEvent_OutcomeCodeSchema = exports.AuditEvent_ActionCodeSchema = exports.AuditEventSchema = exports.file_proto_google_fhir_proto_r4_core_resources_audit_event = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/audit_event.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_audit_event = (0, codegenv1_1.fileDesc)("Cjtwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9hdWRpdF9ldmVudC5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLCIwoKQXVkaXRFdmVudBIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjEKBHR5cGUYCiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZ0IG8NCH6wQBEiwKB3N1YnR5cGUYCyADKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZxI6CgZhY3Rpb24YDCABKAsyKi5nb29nbGUuZmhpci5yNC5jb3JlLkF1ZGl0RXZlbnQuQWN0aW9uQ29kZRIrCgZwZXJpb2QYDSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBI2CghyZWNvcmRlZBgOIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW5zdGFudEIG8NCH6wQBEjwKB291dGNvbWUYDyABKAsyKy5nb29nbGUuZmhpci5yNC5jb3JlLkF1ZGl0RXZlbnQuT3V0Y29tZUNvZGUSMQoMb3V0Y29tZV9kZXNjGBAgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSPgoQcHVycG9zZV9vZl9ldmVudBgRIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjwKBWFnZW50GBIgAygLMiUuZ29vZ2xlLmZoaXIucjQuY29yZS5BdWRpdEV2ZW50LkFnZW50Qgbw0IfrBAESPgoGc291cmNlGBMgASgLMiYuZ29vZ2xlLmZoaXIucjQuY29yZS5BdWRpdEV2ZW50LlNvdXJjZUIG8NCH6wQBEjYKBmVudGl0eRgUIAMoCzImLmdvb2dsZS5maGlyLnI0LmNvcmUuQXVkaXRFdmVudC5FbnRpdHkalwIKCkFjdGlvbkNvZGUSPgoFdmFsdWUYASABKA4yLy5nb29nbGUuZmhpci5yNC5jb3JlLkF1ZGl0RXZlbnRBY3Rpb25Db2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bYr5g7IFL2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYXVkaXQtZXZlbnQtYWN0aW9uwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUamgIKC091dGNvbWVDb2RlEj8KBXZhbHVlGAEgASgOMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5BdWRpdEV2ZW50T3V0Y29tZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpuivmDsgUwaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hdWRpdC1ldmVudC1vdXRjb21lwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa+AoKBUFnZW50EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMgoEdHlwZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjIKBHJvbGUYBSADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBKTAQoDd2hvGAYgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCZvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxQcmFjdGl0aW9uZXLy//zCBgxPcmdhbml6YXRpb27y//zCBgZEZXZpY2Xy//zCBgdQYXRpZW508v/8wgYNUmVsYXRlZFBlcnNvbhIrCgZhbHRfaWQYByABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIpCgRuYW1lGAggASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSNwoJcmVxdWVzdG9yGAkgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuQgbw0IfrBAESQAoIbG9jYXRpb24YCiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYITG9jYXRpb24SKAoGcG9saWN5GAsgAygLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKgoFbWVkaWEYDCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZxI+CgduZXR3b3JrGA0gASgLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5BdWRpdEV2ZW50LkFnZW50Lk5ldHdvcmsSPAoOcHVycG9zZV9vZl91c2UYDiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBqxBAoHTmV0d29yaxInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEiwKB2FkZHJlc3MYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJECgR0eXBlGAUgASgLMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5BdWRpdEV2ZW50LkFnZW50Lk5ldHdvcmsuVHlwZUNvZGUamQIKCFR5cGVDb2RlEkgKBXZhbHVlGAEgASgOMjkuZ29vZ2xlLmZoaXIucjQuY29yZS5BdWRpdEV2ZW50QWdlbnROZXR3b3JrVHlwZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpnivmDsgUpaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9uZXR3b3JrLXR5cGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqXAwoGU291cmNlEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SKQoEc2l0ZRgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEp4BCghvYnNlcnZlchgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQmzw0IfrBAHy//zCBhBQcmFjdGl0aW9uZXJSb2xl8v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYMT3JnYW5pemF0aW9u8v/8wgYGRGV2aWNl8v/8wgYHUGF0aWVudPL//MIGDVJlbGF0ZWRQZXJzb24SKQoEdHlwZRgGIAMoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kaW5nGsUICgZFbnRpdHkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI8CgR3aGF0GAQgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFJlc291cmNlEikKBHR5cGUYBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZxIpCgRyb2xlGAYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmcSLgoJbGlmZWN5Y2xlGAcgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmcSMwoOc2VjdXJpdHlfbGFiZWwYCCADKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZxIpCgRuYW1lGAkgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMAoLZGVzY3JpcHRpb24YCiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIwCgVxdWVyeRgLIAEoCzIhLmdvb2dsZS5maGlyLnI0LmNvcmUuQmFzZTY0QmluYXJ5Ej0KBmRldGFpbBgMIAMoCzItLmdvb2dsZS5maGlyLnI0LmNvcmUuQXVkaXRFdmVudC5FbnRpdHkuRGV0YWlsGrYDCgZEZXRhaWwSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIxCgR0eXBlGAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdCBvDQh+sEARJLCgV2YWx1ZRgFIAEoCzI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuQXVkaXRFdmVudC5FbnRpdHkuRGV0YWlsLlZhbHVlWEIG8NCH6wQBGpMBCgZWYWx1ZVgSOwoMc3RyaW5nX3ZhbHVlGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdIAFIGc3RyaW5nEjoKDWJhc2U2NF9iaW5hcnkYAiABKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLkJhc2U2NEJpbmFyeUgAOgagg4PoBgFCCAoGY2hvaWNlOiOahpOgCB1uYW1lLmVtcHR5KCkgb3IgcXVlcnkuZW1wdHkoKTo+wJ/jtgUDsv7klwYyaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0F1ZGl0RXZlbnRKBAgHEAhCewoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpYZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9hdWRpdF9ldmVudF9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.AuditEvent.
 * Use `create(AuditEventSchema)` to create a new message.
 */
exports.AuditEventSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_audit_event, 0);
/**
 * Describes the message google.fhir.r4.core.AuditEvent.ActionCode.
 * Use `create(AuditEvent_ActionCodeSchema)` to create a new message.
 */
exports.AuditEvent_ActionCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_audit_event, 0, 0);
/**
 * Describes the message google.fhir.r4.core.AuditEvent.OutcomeCode.
 * Use `create(AuditEvent_OutcomeCodeSchema)` to create a new message.
 */
exports.AuditEvent_OutcomeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_audit_event, 0, 1);
/**
 * Describes the message google.fhir.r4.core.AuditEvent.Agent.
 * Use `create(AuditEvent_AgentSchema)` to create a new message.
 */
exports.AuditEvent_AgentSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_audit_event, 0, 2);
/**
 * Describes the message google.fhir.r4.core.AuditEvent.Agent.Network.
 * Use `create(AuditEvent_Agent_NetworkSchema)` to create a new message.
 */
exports.AuditEvent_Agent_NetworkSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_audit_event, 0, 2, 0);
/**
 * Describes the message google.fhir.r4.core.AuditEvent.Agent.Network.TypeCode.
 * Use `create(AuditEvent_Agent_Network_TypeCodeSchema)` to create a new message.
 */
exports.AuditEvent_Agent_Network_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_audit_event, 0, 2, 0, 0);
/**
 * Describes the message google.fhir.r4.core.AuditEvent.Source.
 * Use `create(AuditEvent_SourceSchema)` to create a new message.
 */
exports.AuditEvent_SourceSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_audit_event, 0, 3);
/**
 * Describes the message google.fhir.r4.core.AuditEvent.Entity.
 * Use `create(AuditEvent_EntitySchema)` to create a new message.
 */
exports.AuditEvent_EntitySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_audit_event, 0, 4);
/**
 * Describes the message google.fhir.r4.core.AuditEvent.Entity.Detail.
 * Use `create(AuditEvent_Entity_DetailSchema)` to create a new message.
 */
exports.AuditEvent_Entity_DetailSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_audit_event, 0, 4, 0);
/**
 * Describes the message google.fhir.r4.core.AuditEvent.Entity.Detail.ValueX.
 * Use `create(AuditEvent_Entity_Detail_ValueXSchema)` to create a new message.
 */
exports.AuditEvent_Entity_Detail_ValueXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_audit_event, 0, 4, 0, 0);