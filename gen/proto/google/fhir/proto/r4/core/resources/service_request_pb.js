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
exports.ServiceRequest_AsNeededXSchema = exports.ServiceRequest_OccurrenceXSchema = exports.ServiceRequest_QuantityXSchema = exports.ServiceRequest_PriorityCodeSchema = exports.ServiceRequest_IntentCodeSchema = exports.ServiceRequest_StatusCodeSchema = exports.ServiceRequestSchema = exports.file_proto_google_fhir_proto_r4_core_resources_service_request = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/service_request.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_service_request = (0, codegenv1_1.fileDesc)("Cj9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zZXJ2aWNlX3JlcXVlc3QucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUi1CEKDlNlcnZpY2VSZXF1ZXN0EiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI+ChZpbnN0YW50aWF0ZXNfY2Fub25pY2FsGAsgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5DYW5vbmljYWwSMgoQaW5zdGFudGlhdGVzX3VyaRgMIAMoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEmsKCGJhc2VkX29uGA0gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCOfL//MIGCENhcmVQbGFu8v/8wgYOU2VydmljZVJlcXVlc3Ty//zCBhFNZWRpY2F0aW9uUmVxdWVzdBJGCghyZXBsYWNlcxgOIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhTy//zCBg5TZXJ2aWNlUmVxdWVzdBI0CgtyZXF1aXNpdGlvbhgPIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchJGCgZzdGF0dXMYECABKAsyLi5nb29nbGUuZmhpci5yNC5jb3JlLlNlcnZpY2VSZXF1ZXN0LlN0YXR1c0NvZGVCBvDQh+sEARJGCgZpbnRlbnQYESABKAsyLi5nb29nbGUuZmhpci5yNC5jb3JlLlNlcnZpY2VSZXF1ZXN0LkludGVudENvZGVCBvDQh+sEARI2CghjYXRlZ29yeRgSIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkIKCHByaW9yaXR5GBMgASgLMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5TZXJ2aWNlUmVxdWVzdC5Qcmlvcml0eUNvZGUSNAoOZG9fbm90X3BlcmZvcm0YFCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SMgoEY29kZRgVIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjoKDG9yZGVyX2RldGFpbBgWIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ej8KCHF1YW50aXR5GBcgASgLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5TZXJ2aWNlUmVxdWVzdC5RdWFudGl0eVgSaQoHc3ViamVjdBgYIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQjjw0IfrBAHy//zCBgdQYXRpZW508v/8wgYFR3JvdXDy//zCBghMb2NhdGlvbvL//MIGBkRldmljZRJCCgllbmNvdW50ZXIYGSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJRW5jb3VudGVyEkMKCm9jY3VycmVuY2UYGiABKAsyLy5nb29nbGUuZmhpci5yNC5jb3JlLlNlcnZpY2VSZXF1ZXN0Lk9jY3VycmVuY2VYEkAKCWFzX25lZWRlZBgbIAEoCzItLmdvb2dsZS5maGlyLnI0LmNvcmUuU2VydmljZVJlcXVlc3QuQXNOZWVkZWRYEjIKC2F1dGhvcmVkX29uGBwgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRKZAQoJcmVxdWVzdGVyGB0gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCZvL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb27y//zCBgdQYXRpZW508v/8wgYNUmVsYXRlZFBlcnNvbvL//MIGBkRldmljZRI8Cg5wZXJmb3JtZXJfdHlwZRgeIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Er8BCglwZXJmb3JtZXIYHyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUKLAfL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb27y//zCBghDYXJlVGVhbfL//MIGEUhlYWx0aGNhcmVTZXJ2aWNl8v/8wgYHUGF0aWVudPL//MIGBkRldmljZfL//MIGDVJlbGF0ZWRQZXJzb24SOwoNbG9jYXRpb25fY29kZRggIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkoKEmxvY2F0aW9uX3JlZmVyZW5jZRghIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghMb2NhdGlvbhI5CgtyZWFzb25fY29kZRgiIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EocBChByZWFzb25fcmVmZXJlbmNlGCMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCTfL//MIGCUNvbmRpdGlvbvL//MIGC09ic2VydmF0aW9u8v/8wgYQRGlhZ25vc3RpY1JlcG9ydPL//MIGEURvY3VtZW50UmVmZXJlbmNlElQKCWluc3VyYW5jZRgkIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQiHy//zCBghDb3ZlcmFnZfL//MIGDUNsYWltUmVzcG9uc2USRwoPc3VwcG9ydGluZ19pbmZvGCUgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFJlc291cmNlEkAKCHNwZWNpbWVuGCYgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFNwZWNpbWVuEjcKCWJvZHlfc2l0ZRgnIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ei0KBG5vdGUYKCADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkFubm90YXRpb24SOAoTcGF0aWVudF9pbnN0cnVjdGlvbhgpIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEkoKEHJlbGV2YW50X2hpc3RvcnkYKiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIQ8v/8wgYKUHJvdmVuYW5jZRqQAgoKU3RhdHVzQ29kZRI7CgV2YWx1ZRgBIAEoDjIsLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVxdWVzdFN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjppivmDsgUraHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZXF1ZXN0LXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGpACCgpJbnRlbnRDb2RlEjsKBXZhbHVlGAEgASgOMiwuZ29vZ2xlLmZoaXIucjQuY29yZS5SZXF1ZXN0SW50ZW50Q29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmmK+YOyBStodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3JlcXVlc3QtaW50ZW50wJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUalgIKDFByaW9yaXR5Q29kZRI9CgV2YWx1ZRgBIAEoDjIuLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVxdWVzdFByaW9yaXR5Q29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmuK+YOyBS1odHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3JlcXVlc3QtcHJpb3JpdHnAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqqAQoJUXVhbnRpdHlYEjEKCHF1YW50aXR5GAEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eUgAEisKBXJhdGlvGAIgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYXRpb0gAEisKBXJhbmdlGAMgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYW5nZUgAOgagg4PoBgFCCAoGY2hvaWNlGrEBCgtPY2N1cnJlbmNlWBIyCglkYXRlX3RpbWUYASABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lSAASLQoGcGVyaW9kGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2RIABItCgZ0aW1pbmcYAyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlRpbWluZ0gAOgagg4PoBgFCCAoGY2hvaWNlGpABCglBc05lZWRlZFgSLwoHYm9vbGVhbhgBIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbkgAEkAKEGNvZGVhYmxlX2NvbmNlcHQYAiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEgAOgagg4PoBgFCCAoGY2hvaWNlOmzAn+O2BQOy/uSXBjZodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vU2VydmljZVJlcXVlc3SahpOgCCRvcmRlckRldGFpbC5lbXB0eSgpIG9yIGNvZGUuZXhpc3RzKClKBAgHEAhCfwoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpcZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zZXJ2aWNlX3JlcXVlc3RfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.ServiceRequest.
 * Use `create(ServiceRequestSchema)` to create a new message.
 */
exports.ServiceRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_service_request, 0);
/**
 * Describes the message google.fhir.r4.core.ServiceRequest.StatusCode.
 * Use `create(ServiceRequest_StatusCodeSchema)` to create a new message.
 */
exports.ServiceRequest_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 0);
/**
 * Describes the message google.fhir.r4.core.ServiceRequest.IntentCode.
 * Use `create(ServiceRequest_IntentCodeSchema)` to create a new message.
 */
exports.ServiceRequest_IntentCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 1);
/**
 * Describes the message google.fhir.r4.core.ServiceRequest.PriorityCode.
 * Use `create(ServiceRequest_PriorityCodeSchema)` to create a new message.
 */
exports.ServiceRequest_PriorityCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 2);
/**
 * Describes the message google.fhir.r4.core.ServiceRequest.QuantityX.
 * Use `create(ServiceRequest_QuantityXSchema)` to create a new message.
 */
exports.ServiceRequest_QuantityXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 3);
/**
 * Describes the message google.fhir.r4.core.ServiceRequest.OccurrenceX.
 * Use `create(ServiceRequest_OccurrenceXSchema)` to create a new message.
 */
exports.ServiceRequest_OccurrenceXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 4);
/**
 * Describes the message google.fhir.r4.core.ServiceRequest.AsNeededX.
 * Use `create(ServiceRequest_AsNeededXSchema)` to create a new message.
 */
exports.ServiceRequest_AsNeededXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 5);
