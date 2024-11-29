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
exports.GuidanceResponse_StatusCodeSchema = exports.GuidanceResponse_ModuleXSchema = exports.GuidanceResponseSchema = exports.file_proto_google_fhir_proto_r4_core_resources_guidance_response = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/guidance_response.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_guidance_response = (0, codegenv1_1.fileDesc)("CkFwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9ndWlkYW5jZV9yZXNwb25zZS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLsDwoQR3VpZGFuY2VSZXNwb25zZRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjsKEnJlcXVlc3RfaWRlbnRpZmllchgKIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchIzCgppZGVudGlmaWVyGAsgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEkUKBm1vZHVsZRgMIAEoCzItLmdvb2dsZS5maGlyLnI0LmNvcmUuR3VpZGFuY2VSZXNwb25zZS5Nb2R1bGVYQgbw0IfrBAESSAoGc3RhdHVzGA0gASgLMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5HdWlkYW5jZVJlc3BvbnNlLlN0YXR1c0NvZGVCBvDQh+sEARJJCgdzdWJqZWN0GA4gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCGPL//MIGB1BhdGllbnTy//zCBgVHcm91cBJCCgllbmNvdW50ZXIYDyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJRW5jb3VudGVyEjsKFG9jY3VycmVuY2VfZGF0ZV90aW1lGBAgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRI/CglwZXJmb3JtZXIYESABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIM8v/8wgYGRGV2aWNlEjkKC3JlYXNvbl9jb2RlGBIgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQShwEKEHJlYXNvbl9yZWZlcmVuY2UYEyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJN8v/8wgYJQ29uZGl0aW9u8v/8wgYLT2JzZXJ2YXRpb27y//zCBhBEaWFnbm9zdGljUmVwb3J08v/8wgYRRG9jdW1lbnRSZWZlcmVuY2USLQoEbm90ZRgUIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQW5ub3RhdGlvbhJSChJldmFsdWF0aW9uX21lc3NhZ2UYFSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIW8v/8wgYQT3BlcmF0aW9uT3V0Y29tZRJLChFvdXRwdXRfcGFyYW1ldGVycxgWIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhDy//zCBgpQYXJhbWV0ZXJzElAKBnJlc3VsdBgXIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQiDy//zCBghDYXJlUGxhbvL//MIGDFJlcXVlc3RHcm91cBI+ChBkYXRhX3JlcXVpcmVtZW50GBggAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRhUmVxdWlyZW1lbnQauwEKB01vZHVsZVgSJwoDdXJpGAEgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmlIABIzCgljYW5vbmljYWwYAiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkNhbm9uaWNhbEgAEkAKEGNvZGVhYmxlX2NvbmNlcHQYAyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEgAOgagg4PoBgFCCAoGY2hvaWNlGqMCCgpTdGF0dXNDb2RlEkQKBXZhbHVlGAEgASgOMjUuZ29vZ2xlLmZoaXIucjQuY29yZS5HdWlkYW5jZVJlc3BvbnNlU3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnOK+YOyBTVodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2d1aWRhbmNlLXJlc3BvbnNlLXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlOkTAn+O2BQOy/uSXBjhodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vR3VpZGFuY2VSZXNwb25zZUoECAcQCEKBAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpeZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9ndWlkYW5jZV9yZXNwb25zZV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.GuidanceResponse.
 * Use `create(GuidanceResponseSchema)` to create a new message.
 */
exports.GuidanceResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_guidance_response, 0);
/**
 * Describes the message google.fhir.r4.core.GuidanceResponse.ModuleX.
 * Use `create(GuidanceResponse_ModuleXSchema)` to create a new message.
 */
exports.GuidanceResponse_ModuleXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_guidance_response, 0, 0);
/**
 * Describes the message google.fhir.r4.core.GuidanceResponse.StatusCode.
 * Use `create(GuidanceResponse_StatusCodeSchema)` to create a new message.
 */
exports.GuidanceResponse_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_guidance_response, 0, 1);
