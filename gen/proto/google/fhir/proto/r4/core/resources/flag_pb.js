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
exports.Flag_StatusCodeSchema = exports.FlagSchema = exports.file_proto_google_fhir_proto_r4_core_resources_flag = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/flag.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_flag = (0, codegenv1_1.fileDesc)("CjRwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9mbGFnLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlItwKCgRGbGFnEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI8CgZzdGF0dXMYCyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkZsYWcuU3RhdHVzQ29kZUIG8NCH6wQBEjYKCGNhdGVnb3J5GAwgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSOgoEY29kZRgNIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAEStQEKB3N1YmplY3QYDiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUKDAfDQh+sEAfL//MIGB1BhdGllbnTy//zCBghMb2NhdGlvbvL//MIGBUdyb3Vw8v/8wgYMT3JnYW5pemF0aW9u8v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYOUGxhbkRlZmluaXRpb27y//zCBgpNZWRpY2F0aW9u8v/8wgYJUHJvY2VkdXJlEisKBnBlcmlvZBgPIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kEkIKCWVuY291bnRlchgQIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg/y//zCBglFbmNvdW50ZXISgwEKBmF1dGhvchgRIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQlPy//zCBgZEZXZpY2Xy//zCBgxPcmdhbml6YXRpb27y//zCBgdQYXRpZW508v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZRqKAgoKU3RhdHVzQ29kZRI4CgV2YWx1ZRgBIAEoDjIpLmdvb2dsZS5maGlyLnI0LmNvcmUuRmxhZ1N0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpmivmDsgUoaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9mbGFnLXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlOjjAn+O2BQOy/uSXBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vRmxhZ0oECAcQCEJ0Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlFnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2ZsYWdfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Flag.
 * Use `create(FlagSchema)` to create a new message.
 */
exports.FlagSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_flag, 0);
/**
 * Describes the message google.fhir.r4.core.Flag.StatusCode.
 * Use `create(Flag_StatusCodeSchema)` to create a new message.
 */
exports.Flag_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_flag, 0, 0);
