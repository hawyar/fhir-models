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
exports.Provenance_Entity_RoleCodeSchema = exports.Provenance_EntitySchema = exports.Provenance_AgentSchema = exports.Provenance_OccurredXSchema = exports.ProvenanceSchema = exports.file_proto_google_fhir_proto_r4_core_resources_provenance = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/provenance.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_provenance = (0, codegenv1_1.fileDesc)("Cjpwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9wcm92ZW5hbmNlLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIs8SCgpQcm92ZW5hbmNlEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SRAoGdGFyZ2V0GAogAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCFPDQh+sEAfL//MIGCFJlc291cmNlEjsKCG9jY3VycmVkGAsgASgLMikuZ29vZ2xlLmZoaXIucjQuY29yZS5Qcm92ZW5hbmNlLk9jY3VycmVkWBI2CghyZWNvcmRlZBgMIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW5zdGFudEIG8NCH6wQBEigKBnBvbGljeRgNIAMoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEkAKCGxvY2F0aW9uGA4gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCExvY2F0aW9uEjQKBnJlYXNvbhgPIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjYKCGFjdGl2aXR5GBAgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSPAoFYWdlbnQYESADKAsyJS5nb29nbGUuZmhpci5yNC5jb3JlLlByb3ZlbmFuY2UuQWdlbnRCBvDQh+sEARI2CgZlbnRpdHkYEiADKAsyJi5nb29nbGUuZmhpci5yNC5jb3JlLlByb3ZlbmFuY2UuRW50aXR5EjEKCXNpZ25hdHVyZRgTIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuU2lnbmF0dXJlGoABCglPY2N1cnJlZFgSLQoGcGVyaW9kGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2RIABIyCglkYXRlX3RpbWUYAiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lSAA6BqCDg+gGAUIICgZjaG9pY2UawgQKBUFnZW50EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMgoEdHlwZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjIKBHJvbGUYBSADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBKZAQoDd2hvGAYgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCbPDQh+sEAfL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBg1SZWxhdGVkUGVyc29u8v/8wgYHUGF0aWVudPL//MIGBkRldmljZfL//MIGDE9yZ2FuaXphdGlvbhKcAQoMb25fYmVoYWxmX29mGAcgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCZvL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBg1SZWxhdGVkUGVyc29u8v/8wgYHUGF0aWVudPL//MIGBkRldmljZfL//MIGDE9yZ2FuaXphdGlvbhqBBQoGRW50aXR5EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SRQoEcm9sZRgEIAEoCzIvLmdvb2dsZS5maGlyLnI0LmNvcmUuUHJvdmVuYW5jZS5FbnRpdHkuUm9sZUNvZGVCBvDQh+sEARJCCgR3aGF0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCFPDQh+sEAfL//MIGCFJlc291cmNlEjQKBWFnZW50GAYgAygLMiUuZ29vZ2xlLmZoaXIucjQuY29yZS5Qcm92ZW5hbmNlLkFnZW50Gp0CCghSb2xlQ29kZRJCCgV2YWx1ZRgBIAEoDjIzLmdvb2dsZS5maGlyLnI0LmNvcmUuUHJvdmVuYW5jZUVudGl0eVJvbGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cYr5g7IFM2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcHJvdmVuYW5jZS1lbnRpdHktcm9sZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlOj7An+O2BQOy/uSXBjJodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vUHJvdmVuYW5jZUoECAcQCEJ6Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWldnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL3Byb3ZlbmFuY2VfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Provenance.
 * Use `create(ProvenanceSchema)` to create a new message.
 */
exports.ProvenanceSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_provenance, 0);
/**
 * Describes the message google.fhir.r4.core.Provenance.OccurredX.
 * Use `create(Provenance_OccurredXSchema)` to create a new message.
 */
exports.Provenance_OccurredXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_provenance, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Provenance.Agent.
 * Use `create(Provenance_AgentSchema)` to create a new message.
 */
exports.Provenance_AgentSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_provenance, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Provenance.Entity.
 * Use `create(Provenance_EntitySchema)` to create a new message.
 */
exports.Provenance_EntitySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_provenance, 0, 2);
/**
 * Describes the message google.fhir.r4.core.Provenance.Entity.RoleCode.
 * Use `create(Provenance_Entity_RoleCodeSchema)` to create a new message.
 */
exports.Provenance_Entity_RoleCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_provenance, 0, 2, 0);
