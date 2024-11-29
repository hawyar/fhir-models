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
exports.Substance_Ingredient_SubstanceXSchema = exports.Substance_IngredientSchema = exports.Substance_InstanceSchema = exports.Substance_StatusCodeSchema = exports.SubstanceSchema = exports.file_proto_google_fhir_proto_r4_core_resources_substance = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/substance.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_substance = (0, codegenv1_1.fileDesc)("Cjlwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzdGFuY2UucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUi/Q4KCVN1YnN0YW5jZRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISOQoGc3RhdHVzGAsgASgLMikuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2UuU3RhdHVzQ29kZRI2CghjYXRlZ29yeRgMIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjoKBGNvZGUYDSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEjAKC2Rlc2NyaXB0aW9uGA4gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSOQoIaW5zdGFuY2UYDyADKAsyJy5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZS5JbnN0YW5jZRI9CgppbmdyZWRpZW50GBAgAygLMikuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2UuSW5ncmVkaWVudBqYAgoKU3RhdHVzQ29kZRJBCgV2YWx1ZRgBIAEoDjIyLmdvb2dsZS5maGlyLnI0LmNvcmUuRkhJUlN1YnN0YW5jZVN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjprivmDsgUtaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zdWJzdGFuY2Utc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUavQIKCEluc3RhbmNlEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgEIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchItCgZleHBpcnkYBSABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEjUKCHF1YW50aXR5GAYgASgLMiMuZ29vZ2xlLmZoaXIucjQuY29yZS5TaW1wbGVRdWFudGl0eRrMAwoKSW5ncmVkaWVudBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEiwKCHF1YW50aXR5GAQgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYXRpbxJPCglzdWJzdGFuY2UYBSABKAsyNC5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZS5JbmdyZWRpZW50LlN1YnN0YW5jZVhCBvDQh+sEARqmAQoKU3Vic3RhbmNlWBJAChBjb2RlYWJsZV9jb25jZXB0GAEgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRIABJECglyZWZlcmVuY2UYAiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJU3Vic3RhbmNlSAA6BqCDg+gGAUIICgZjaG9pY2U6PcCf47YFA7L+5JcGMWh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9TdWJzdGFuY2VKBAgHEAhCeQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpWZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzdGFuY2VfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Substance.
 * Use `create(SubstanceSchema)` to create a new message.
 */
exports.SubstanceSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance, 0);
/**
 * Describes the message google.fhir.r4.core.Substance.StatusCode.
 * Use `create(Substance_StatusCodeSchema)` to create a new message.
 */
exports.Substance_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Substance.Instance.
 * Use `create(Substance_InstanceSchema)` to create a new message.
 */
exports.Substance_InstanceSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Substance.Ingredient.
 * Use `create(Substance_IngredientSchema)` to create a new message.
 */
exports.Substance_IngredientSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance, 0, 2);
/**
 * Describes the message google.fhir.r4.core.Substance.Ingredient.SubstanceX.
 * Use `create(Substance_Ingredient_SubstanceXSchema)` to create a new message.
 */
exports.Substance_Ingredient_SubstanceXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance, 0, 2, 0);
