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
exports.Group_MemberSchema = exports.Group_Characteristic_ValueXSchema = exports.Group_CharacteristicSchema = exports.Group_TypeCodeSchema = exports.GroupSchema = exports.file_proto_google_fhir_proto_r4_core_resources_group = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/group.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_group = (0, codegenv1_1.fileDesc)("CjVwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9ncm91cC5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKuEwoFR3JvdXASIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEiwKBmFjdGl2ZRgLIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhI5CgR0eXBlGAwgASgLMiMuZ29vZ2xlLmZoaXIucjQuY29yZS5Hcm91cC5UeXBlQ29kZUIG8NCH6wQBEjQKBmFjdHVhbBgNIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbkIG8NCH6wQBEjIKBGNvZGUYDiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIpCgRuYW1lGA8gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMgoIcXVhbnRpdHkYECABKAsyIC5nb29nbGUuZmhpci5yNC5jb3JlLlVuc2lnbmVkSW50EoYBCg9tYW5hZ2luZ19lbnRpdHkYESABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJN8v/8wgYMT3JnYW5pemF0aW9u8v/8wgYNUmVsYXRlZFBlcnNvbvL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGUSQQoOY2hhcmFjdGVyaXN0aWMYEiADKAsyKS5nb29nbGUuZmhpci5yNC5jb3JlLkdyb3VwLkNoYXJhY3RlcmlzdGljEjEKBm1lbWJlchgTIAMoCzIhLmdvb2dsZS5maGlyLnI0LmNvcmUuR3JvdXAuTWVtYmVyGoYCCghUeXBlQ29kZRI3CgV2YWx1ZRgBIAEoDjIoLmdvb2dsZS5maGlyLnI0LmNvcmUuR3JvdXBUeXBlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmWK+YOyBSdodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2dyb3VwLXR5cGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRq2BQoOQ2hhcmFjdGVyaXN0aWMSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6CgRjb2RlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARJHCgV2YWx1ZRgFIAEoCzIwLmdvb2dsZS5maGlyLnI0LmNvcmUuR3JvdXAuQ2hhcmFjdGVyaXN0aWMuVmFsdWVYQgbw0IfrBAESNQoHZXhjbHVkZRgGIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbkIG8NCH6wQBEisKBnBlcmlvZBgHIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kGqICCgZWYWx1ZVgSQAoQY29kZWFibGVfY29uY2VwdBgBIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0SAASLwoHYm9vbGVhbhgCIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbkgAEjEKCHF1YW50aXR5GAMgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eUgAEisKBXJhbmdlGAQgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYW5nZUgAEjMKCXJlZmVyZW5jZRgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlSAA6BqCDg+gGAUIICgZjaG9pY2UaoQMKBk1lbWJlchInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEqEBCgZlbnRpdHkYBCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJx8NCH6wQB8v/8wgYHUGF0aWVudPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgZEZXZpY2Xy//zCBgpNZWRpY2F0aW9u8v/8wgYJU3Vic3RhbmNl8v/8wgYFR3JvdXASKwoGcGVyaW9kGAUgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2QSLgoIaW5hY3RpdmUYBiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW46YMCf47YFA7L+5JcGLWh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9Hcm91cJqGk6AIIW1lbWJlci5lbXB0eSgpIG9yIChhY3R1YWwgPSB0cnVlKUoECAcQCEJ1Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlJnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2dyb3VwX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Group.
 * Use `create(GroupSchema)` to create a new message.
 */
exports.GroupSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_group, 0);
/**
 * Describes the message google.fhir.r4.core.Group.TypeCode.
 * Use `create(Group_TypeCodeSchema)` to create a new message.
 */
exports.Group_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_group, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Group.Characteristic.
 * Use `create(Group_CharacteristicSchema)` to create a new message.
 */
exports.Group_CharacteristicSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_group, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Group.Characteristic.ValueX.
 * Use `create(Group_Characteristic_ValueXSchema)` to create a new message.
 */
exports.Group_Characteristic_ValueXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_group, 0, 1, 0);
/**
 * Describes the message google.fhir.r4.core.Group.Member.
 * Use `create(Group_MemberSchema)` to create a new message.
 */
exports.Group_MemberSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_group, 0, 2);