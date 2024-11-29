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
exports.List_EntrySchema = exports.List_ModeCodeSchema = exports.List_StatusCodeSchema = exports.ListSchema = exports.file_proto_google_fhir_proto_r4_core_resources_list = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/list.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_list = (0, codegenv1_1.fileDesc)("CjRwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9saXN0LnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIvQRCgRMaXN0EiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI8CgZzdGF0dXMYCyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkxpc3QuU3RhdHVzQ29kZUIG8NCH6wQBEjgKBG1vZGUYDCABKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkxpc3QuTW9kZUNvZGVCBvDQh+sEARIqCgV0aXRsZRgNIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjIKBGNvZGUYDiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJjCgdzdWJqZWN0GA8gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCMvL//MIGB1BhdGllbnTy//zCBgVHcm91cPL//MIGBkRldmljZfL//MIGCExvY2F0aW9uEkIKCWVuY291bnRlchgQIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg/y//zCBglFbmNvdW50ZXISKwoEZGF0ZRgRIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUScQoGc291cmNlGBIgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCQfL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgdQYXRpZW508v/8wgYGRGV2aWNlEjgKCm9yZGVyZWRfYnkYEyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBItCgRub3RlGBQgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5Bbm5vdGF0aW9uEi4KBWVudHJ5GBUgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5MaXN0LkVudHJ5EjoKDGVtcHR5X3JlYXNvbhgWIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0GooCCgpTdGF0dXNDb2RlEjgKBXZhbHVlGAEgASgOMikuZ29vZ2xlLmZoaXIucjQuY29yZS5MaXN0U3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmaK+YOyBShodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2xpc3Qtc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUahAIKCE1vZGVDb2RlEjYKBXZhbHVlGAEgASgOMicuZ29vZ2xlLmZoaXIucjQuY29yZS5MaXN0TW9kZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpkivmDsgUmaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9saXN0LW1vZGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrzAgoFRW50cnkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIyCgRmbGFnGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLQoHZGVsZXRlZBgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIrCgRkYXRlGAYgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRJCCgRpdGVtGAcgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCFPDQh+sEAfL//MIGCFJlc291cmNlOr0BwJ/jtgUDsv7klwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0xpc3SahpOgCCRlbXB0eVJlYXNvbi5lbXB0eSgpIG9yIGVudHJ5LmVtcHR5KCmahpOgCCltb2RlID0gJ2NoYW5nZXMnIG9yIGVudHJ5LmRlbGV0ZWQuZW1wdHkoKZqGk6AIJm1vZGUgPSAnd29ya2luZycgb3IgZW50cnkuZGF0ZS5lbXB0eSgpSgQIBxAIQnQKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaUWdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvbGlzdF9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.List.
 * Use `create(ListSchema)` to create a new message.
 */
exports.ListSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_list, 0);
/**
 * Describes the message google.fhir.r4.core.List.StatusCode.
 * Use `create(List_StatusCodeSchema)` to create a new message.
 */
exports.List_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_list, 0, 0);
/**
 * Describes the message google.fhir.r4.core.List.ModeCode.
 * Use `create(List_ModeCodeSchema)` to create a new message.
 */
exports.List_ModeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_list, 0, 1);
/**
 * Describes the message google.fhir.r4.core.List.Entry.
 * Use `create(List_EntrySchema)` to create a new message.
 */
exports.List_EntrySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_list, 0, 2);
