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
exports.Procedure_FocalDeviceSchema = exports.Procedure_PerformerSchema = exports.Procedure_PerformedXSchema = exports.Procedure_StatusCodeSchema = exports.ProcedureSchema = exports.file_proto_google_fhir_proto_r4_core_resources_procedure = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/procedure.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_procedure = (0, codegenv1_1.fileDesc)("Cjlwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9wcm9jZWR1cmUucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUigh4KCVByb2NlZHVyZRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISPgoWaW5zdGFudGlhdGVzX2Nhbm9uaWNhbBgLIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsEjIKEGluc3RhbnRpYXRlc191cmkYDCADKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRJUCghiYXNlZF9vbhgNIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQiLy//zCBghDYXJlUGxhbvL//MIGDlNlcnZpY2VSZXF1ZXN0Em8KB3BhcnRfb2YYDiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUI+8v/8wgYJUHJvY2VkdXJl8v/8wgYLT2JzZXJ2YXRpb27y//zCBhhNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24SQQoGc3RhdHVzGA8gASgLMikuZ29vZ2xlLmZoaXIucjQuY29yZS5Qcm9jZWR1cmUuU3RhdHVzQ29kZUIG8NCH6wQBEjsKDXN0YXR1c19yZWFzb24YECABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI2CghjYXRlZ29yeRgRIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjIKBGNvZGUYEiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJPCgdzdWJqZWN0GBMgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCHvDQh+sEAfL//MIGB1BhdGllbnTy//zCBgVHcm91cBJCCgllbmNvdW50ZXIYFCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJRW5jb3VudGVyEjwKCXBlcmZvcm1lZBgVIAEoCzIpLmdvb2dsZS5maGlyLnI0LmNvcmUuUHJvY2VkdXJlLlBlcmZvcm1lZFgSegoIcmVjb3JkZXIYFiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJI8v/8wgYHUGF0aWVudPL//MIGDVJlbGF0ZWRQZXJzb27y//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xlEnoKCGFzc2VydGVyGBcgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCSPL//MIGB1BhdGllbnTy//zCBg1SZWxhdGVkUGVyc29u8v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZRI7CglwZXJmb3JtZXIYGCADKAsyKC5nb29nbGUuZmhpci5yNC5jb3JlLlByb2NlZHVyZS5QZXJmb3JtZXISQAoIbG9jYXRpb24YGSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYITG9jYXRpb24SOQoLcmVhc29uX2NvZGUYGiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBKWAQoQcmVhc29uX3JlZmVyZW5jZRgbIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQlzy//zCBglDb25kaXRpb27y//zCBgtPYnNlcnZhdGlvbvL//MIGCVByb2NlZHVyZfL//MIGEERpYWdub3N0aWNSZXBvcnTy//zCBhFEb2N1bWVudFJlZmVyZW5jZRI3Cglib2R5X3NpdGUYHCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI1CgdvdXRjb21lGB0gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSbgoGcmVwb3J0GB4gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCPvL//MIGEERpYWdub3N0aWNSZXBvcnTy//zCBhFEb2N1bWVudFJlZmVyZW5jZfL//MIGC0NvbXBvc2l0aW9uEjoKDGNvbXBsaWNhdGlvbhgfIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkwKE2NvbXBsaWNhdGlvbl9kZXRhaWwYICADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJQ29uZGl0aW9uEjcKCWZvbGxvd191cBghIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ei0KBG5vdGUYIiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkFubm90YXRpb24SQAoMZm9jYWxfZGV2aWNlGCMgAygLMiouZ29vZ2xlLmZoaXIucjQuY29yZS5Qcm9jZWR1cmUuRm9jYWxEZXZpY2USYwoOdXNlZF9yZWZlcmVuY2UYJCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIr8v/8wgYGRGV2aWNl8v/8wgYKTWVkaWNhdGlvbvL//MIGCVN1YnN0YW5jZRI3Cgl1c2VkX2NvZGUYJSADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBqMAgoKU3RhdHVzQ29kZRI5CgV2YWx1ZRgBIAEoDjIqLmdvb2dsZS5maGlyLnI0LmNvcmUuRXZlbnRTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246Z4r5g7IFKWh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZXZlbnQtc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUalAIKClBlcmZvcm1lZFgSMgoJZGF0ZV90aW1lGAEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZUgAEi0KBnBlcmlvZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kSAASOwoMc3RyaW5nX3ZhbHVlGAMgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdIAFIGc3RyaW5nEicKA2FnZRgEIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuQWdlSAASKwoFcmFuZ2UYBSABKAsyGi5nb29nbGUuZmhpci5yNC5jb3JlLlJhbmdlSAA6BqCDg+gGAUIICgZjaG9pY2UawwMKCVBlcmZvcm1lchInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjYKCGZ1bmN0aW9uGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSmwEKBWFjdG9yGAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCbPDQh+sEAfL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb27y//zCBgdQYXRpZW508v/8wgYNUmVsYXRlZFBlcnNvbvL//MIGBkRldmljZRJICgxvbl9iZWhhbGZfb2YYBiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uGqQCCgtGb2NhbERldmljZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjQKBmFjdGlvbhgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkcKC21hbmlwdWxhdGVkGAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvDQh+sEAfL//MIGBkRldmljZTo9wJ/jtgUDsv7klwYxaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1Byb2NlZHVyZUoECAcQCEJ5Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlZnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL3Byb2NlZHVyZV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Procedure.
 * Use `create(ProcedureSchema)` to create a new message.
 */
exports.ProcedureSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_procedure, 0);
/**
 * Describes the message google.fhir.r4.core.Procedure.StatusCode.
 * Use `create(Procedure_StatusCodeSchema)` to create a new message.
 */
exports.Procedure_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_procedure, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Procedure.PerformedX.
 * Use `create(Procedure_PerformedXSchema)` to create a new message.
 */
exports.Procedure_PerformedXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_procedure, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Procedure.Performer.
 * Use `create(Procedure_PerformerSchema)` to create a new message.
 */
exports.Procedure_PerformerSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_procedure, 0, 2);
/**
 * Describes the message google.fhir.r4.core.Procedure.FocalDevice.
 * Use `create(Procedure_FocalDeviceSchema)` to create a new message.
 */
exports.Procedure_FocalDeviceSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_procedure, 0, 3);