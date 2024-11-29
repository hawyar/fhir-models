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
exports.Linkage_Item_TypeCodeSchema = exports.Linkage_ItemSchema = exports.LinkageSchema = exports.file_proto_google_fhir_proto_r4_core_resources_linkage = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/linkage.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_linkage = (0, codegenv1_1.fileDesc)("Cjdwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9saW5rYWdlLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIt4JCgdMaW5rYWdlEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SLAoGYWN0aXZlGAogASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEmoKBmF1dGhvchgLIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQjry//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xl8v/8wgYMT3JnYW5pemF0aW9uEjcKBGl0ZW0YDCADKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLkxpbmthZ2UuSXRlbUIG8NCH6wQBGrUECgRJdGVtEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SQAoEdHlwZRgEIAEoCzIqLmdvb2dsZS5maGlyLnI0LmNvcmUuTGlua2FnZS5JdGVtLlR5cGVDb2RlQgbw0IfrBAESRgoIcmVzb3VyY2UYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIU8NCH6wQB8v/8wgYIUmVzb3VyY2UaigIKCFR5cGVDb2RlEjkKBXZhbHVlGAEgASgOMiouZ29vZ2xlLmZoaXIucjQuY29yZS5MaW5rYWdlVHlwZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpnivmDsgUpaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9saW5rYWdlLXR5cGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZTpPwJ/jtgUDsv7klwYvaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0xpbmthZ2WahpOgCA5pdGVtLmNvdW50KCk+MUoECAcQCEJ3Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlRnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2xpbmthZ2VfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Linkage.
 * Use `create(LinkageSchema)` to create a new message.
 */
exports.LinkageSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_linkage, 0);
/**
 * Describes the message google.fhir.r4.core.Linkage.Item.
 * Use `create(Linkage_ItemSchema)` to create a new message.
 */
exports.Linkage_ItemSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_linkage, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Linkage.Item.TypeCode.
 * Use `create(Linkage_Item_TypeCodeSchema)` to create a new message.
 */
exports.Linkage_Item_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_linkage, 0, 0, 0);
