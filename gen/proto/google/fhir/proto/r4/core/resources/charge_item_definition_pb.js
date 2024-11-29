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
exports.ChargeItemDefinition_PropertyGroup_PriceComponent_TypeCodeSchema = exports.ChargeItemDefinition_PropertyGroup_PriceComponentSchema = exports.ChargeItemDefinition_PropertyGroupSchema = exports.ChargeItemDefinition_ApplicabilitySchema = exports.ChargeItemDefinition_StatusCodeSchema = exports.ChargeItemDefinitionSchema = exports.file_proto_google_fhir_proto_r4_core_resources_charge_item_definition = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/charge_item_definition.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_charge_item_definition = (0, codegenv1_1.fileDesc)("CkZwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jaGFyZ2VfaXRlbV9kZWZpbml0aW9uLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIpkbChRDaGFyZ2VJdGVtRGVmaW5pdGlvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEi0KA3VybBgKIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpQgbw0IfrBAESMwoKaWRlbnRpZmllchgLIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchIsCgd2ZXJzaW9uGAwgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKgoFdGl0bGUYDSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIyChBkZXJpdmVkX2Zyb21fdXJpGA4gAygLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSLwoHcGFydF9vZhgPIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsEjAKCHJlcGxhY2VzGBAgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5DYW5vbmljYWwSTAoGc3RhdHVzGBEgASgLMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5DaGFyZ2VJdGVtRGVmaW5pdGlvbi5TdGF0dXNDb2RlQgbw0IfrBAESMgoMZXhwZXJpbWVudGFsGBIgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEisKBGRhdGUYEyABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEi4KCXB1Ymxpc2hlchgUIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjMKB2NvbnRhY3QYFSADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSMgoLZGVzY3JpcHRpb24YFiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEjYKC3VzZV9jb250ZXh0GBcgAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Vc2FnZUNvbnRleHQSOgoManVyaXNkaWN0aW9uGBggAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSMAoJY29weXJpZ2h0GBkgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhIwCg1hcHByb3ZhbF9kYXRlGBogASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlEjMKEGxhc3RfcmV2aWV3X2RhdGUYGyABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGUSNQoQZWZmZWN0aXZlX3BlcmlvZBgcIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kEjIKBGNvZGUYHSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJdCghpbnN0YW5jZRgeIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQivy//zCBgpNZWRpY2F0aW9u8v/8wgYJU3Vic3RhbmNl8v/8wgYGRGV2aWNlEk4KDWFwcGxpY2FiaWxpdHkYHyADKAsyNy5nb29nbGUuZmhpci5yNC5jb3JlLkNoYXJnZUl0ZW1EZWZpbml0aW9uLkFwcGxpY2FiaWxpdHkSTwoOcHJvcGVydHlfZ3JvdXAYICADKAsyNy5nb29nbGUuZmhpci5yNC5jb3JlLkNoYXJnZUl0ZW1EZWZpbml0aW9uLlByb3BlcnR5R3JvdXAamAIKClN0YXR1c0NvZGUSPwoFdmFsdWUYASABKA4yMC5nb29nbGUuZmhpci5yNC5jb3JlLlB1YmxpY2F0aW9uU3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOm2K+YOyBS9odHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3B1YmxpY2F0aW9uLXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGrkCCg1BcHBsaWNhYmlsaXR5EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMAoLZGVzY3JpcHRpb24YBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxItCghsYW5ndWFnZRgFIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEi8KCmV4cHJlc3Npb24YBiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxqhCAoNUHJvcGVydHlHcm91cBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEk4KDWFwcGxpY2FiaWxpdHkYBCADKAsyNy5nb29nbGUuZmhpci5yNC5jb3JlLkNoYXJnZUl0ZW1EZWZpbml0aW9uLkFwcGxpY2FiaWxpdHkSXwoPcHJpY2VfY29tcG9uZW50GAUgAygLMkYuZ29vZ2xlLmZoaXIucjQuY29yZS5DaGFyZ2VJdGVtRGVmaW5pdGlvbi5Qcm9wZXJ0eUdyb3VwLlByaWNlQ29tcG9uZW50GsYFCg5QcmljZUNvbXBvbmVudBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEmUKBHR5cGUYBCABKAsyTy5nb29nbGUuZmhpci5yNC5jb3JlLkNoYXJnZUl0ZW1EZWZpbml0aW9uLlByb3BlcnR5R3JvdXAuUHJpY2VDb21wb25lbnQuVHlwZUNvZGVCBvDQh+sEARIyCgRjb2RlGAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLAoGZmFjdG9yGAYgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsEioKBmFtb3VudBgHIAEoCzIaLmdvb2dsZS5maGlyLnI0LmNvcmUuTW9uZXkapgIKCFR5cGVDb2RlEkcKBXZhbHVlGAEgASgOMjguZ29vZ2xlLmZoaXIucjQuY29yZS5JbnZvaWNlUHJpY2VDb21wb25lbnRUeXBlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnWK+YOyBTdodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2ludm9pY2UtcHJpY2VDb21wb25lbnRUeXBlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGU6eMCf47YFA7L+5JcGPGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9DaGFyZ2VJdGVtRGVmaW5pdGlvbpqvrqQLKm5hbWUubWF0Y2hlcygnW0EtWl0oW0EtWmEtejAtOV9dKXswLDI1NH0nKUoECAcQCEKGAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpjZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jaGFyZ2VfaXRlbV9kZWZpbml0aW9uX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.ChargeItemDefinition.
 * Use `create(ChargeItemDefinitionSchema)` to create a new message.
 */
exports.ChargeItemDefinitionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_charge_item_definition, 0);
/**
 * Describes the message google.fhir.r4.core.ChargeItemDefinition.StatusCode.
 * Use `create(ChargeItemDefinition_StatusCodeSchema)` to create a new message.
 */
exports.ChargeItemDefinition_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_charge_item_definition, 0, 0);
/**
 * Describes the message google.fhir.r4.core.ChargeItemDefinition.Applicability.
 * Use `create(ChargeItemDefinition_ApplicabilitySchema)` to create a new message.
 */
exports.ChargeItemDefinition_ApplicabilitySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_charge_item_definition, 0, 1);
/**
 * Describes the message google.fhir.r4.core.ChargeItemDefinition.PropertyGroup.
 * Use `create(ChargeItemDefinition_PropertyGroupSchema)` to create a new message.
 */
exports.ChargeItemDefinition_PropertyGroupSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_charge_item_definition, 0, 2);
/**
 * Describes the message google.fhir.r4.core.ChargeItemDefinition.PropertyGroup.PriceComponent.
 * Use `create(ChargeItemDefinition_PropertyGroup_PriceComponentSchema)` to create a new message.
 */
exports.ChargeItemDefinition_PropertyGroup_PriceComponentSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_charge_item_definition, 0, 2, 0);
/**
 * Describes the message google.fhir.r4.core.ChargeItemDefinition.PropertyGroup.PriceComponent.TypeCode.
 * Use `create(ChargeItemDefinition_PropertyGroup_PriceComponent_TypeCodeSchema)` to create a new message.
 */
exports.ChargeItemDefinition_PropertyGroup_PriceComponent_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_charge_item_definition, 0, 2, 0, 0);
