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
exports.Medication_BatchSchema = exports.Medication_Ingredient_ItemXSchema = exports.Medication_IngredientSchema = exports.Medication_StatusCodeSchema = exports.MedicationSchema = exports.file_proto_google_fhir_proto_r4_core_resources_medication = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/medication.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_medication = (0, codegenv1_1.fileDesc)("Cjpwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWRpY2F0aW9uLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIrAPCgpNZWRpY2F0aW9uEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchIyCgRjb2RlGAsgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSOgoGc3RhdHVzGAwgASgLMiouZ29vZ2xlLmZoaXIucjQuY29yZS5NZWRpY2F0aW9uLlN0YXR1c0NvZGUSSAoMbWFudWZhY3R1cmVyGA0gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhIyCgRmb3JtGA4gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSKgoGYW1vdW50GA8gASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYXRpbxI+CgppbmdyZWRpZW50GBAgAygLMiouZ29vZ2xlLmZoaXIucjQuY29yZS5NZWRpY2F0aW9uLkluZ3JlZGllbnQSNAoFYmF0Y2gYESABKAsyJS5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGljYXRpb24uQmF0Y2galgIKClN0YXR1c0NvZGUSPgoFdmFsdWUYASABKA4yLy5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGljYXRpb25TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bIr5g7IFLmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWVkaWNhdGlvbi1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRr/AwoKSW5ncmVkaWVudBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEkYKBGl0ZW0YBCABKAsyMC5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGljYXRpb24uSW5ncmVkaWVudC5JdGVtWEIG8NCH6wQBEi8KCWlzX2FjdGl2ZRgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIsCghzdHJlbmd0aBgGIAEoCzIaLmdvb2dsZS5maGlyLnI0LmNvcmUuUmF0aW8asQEKBUl0ZW1YEkAKEGNvZGVhYmxlX2NvbmNlcHQYASABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEgAElQKCXJlZmVyZW5jZRgCIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQh/y//zCBglTdWJzdGFuY2Xy//zCBgpNZWRpY2F0aW9uSAA6BqCDg+gGAUIICgZjaG9pY2UaiAIKBUJhdGNoEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SLwoKbG90X251bWJlchgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjYKD2V4cGlyYXRpb25fZGF0ZRgFIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWU6PsCf47YFA7L+5JcGMmh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9NZWRpY2F0aW9uSgQIBxAIQnoKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaV2dpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvbWVkaWNhdGlvbl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Medication.
 * Use `create(MedicationSchema)` to create a new message.
 */
exports.MedicationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication, 0);
/**
 * Describes the message google.fhir.r4.core.Medication.StatusCode.
 * Use `create(Medication_StatusCodeSchema)` to create a new message.
 */
exports.Medication_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Medication.Ingredient.
 * Use `create(Medication_IngredientSchema)` to create a new message.
 */
exports.Medication_IngredientSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Medication.Ingredient.ItemX.
 * Use `create(Medication_Ingredient_ItemXSchema)` to create a new message.
 */
exports.Medication_Ingredient_ItemXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication, 0, 1, 0);
/**
 * Describes the message google.fhir.r4.core.Medication.Batch.
 * Use `create(Medication_BatchSchema)` to create a new message.
 */
exports.Medication_BatchSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medication, 0, 2);
