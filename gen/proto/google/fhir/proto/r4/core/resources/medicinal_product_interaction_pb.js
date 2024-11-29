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
exports.MedicinalProductInteraction_Interactant_ItemXSchema = exports.MedicinalProductInteraction_InteractantSchema = exports.MedicinalProductInteractionSchema = exports.file_proto_google_fhir_proto_r4_core_resources_medicinal_product_interaction = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/medicinal_product_interaction.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_medicinal_product_interaction = (0, codegenv1_1.fileDesc)("Ck1wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWRpY2luYWxfcHJvZHVjdF9pbnRlcmFjdGlvbi5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKZCwobTWVkaWNpbmFsUHJvZHVjdEludGVyYWN0aW9uEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SZgoHc3ViamVjdBgKIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQjXy//zCBhBNZWRpY2luYWxQcm9kdWN08v/8wgYKTWVkaWNhdGlvbvL//MIGCVN1YnN0YW5jZRIwCgtkZXNjcmlwdGlvbhgLIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nElEKC2ludGVyYWN0YW50GAwgAygLMjwuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWRpY2luYWxQcm9kdWN0SW50ZXJhY3Rpb24uSW50ZXJhY3RhbnQSMgoEdHlwZRgNIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjQKBmVmZmVjdBgOIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjcKCWluY2lkZW5jZRgPIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjgKCm1hbmFnZW1lbnQYECABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBrlAwoLSW50ZXJhY3RhbnQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJYCgRpdGVtGAQgASgLMkIuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWRpY2luYWxQcm9kdWN0SW50ZXJhY3Rpb24uSW50ZXJhY3RhbnQuSXRlbVhCBvDQh+sEARrjAQoFSXRlbVgShQEKCXJlZmVyZW5jZRgBIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQlDy//zCBhBNZWRpY2luYWxQcm9kdWN08v/8wgYKTWVkaWNhdGlvbvL//MIGCVN1YnN0YW5jZfL//MIGFU9ic2VydmF0aW9uRGVmaW5pdGlvbkgAEkAKEGNvZGVhYmxlX2NvbmNlcHQYAiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEgAOgagg4PoBgFCCAoGY2hvaWNlOk/An+O2BQOy/uSXBkNodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vTWVkaWNpbmFsUHJvZHVjdEludGVyYWN0aW9uSgQIBxAIQo0BChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWmpnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL21lZGljaW5hbF9wcm9kdWN0X2ludGVyYWN0aW9uX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.MedicinalProductInteraction.
 * Use `create(MedicinalProductInteractionSchema)` to create a new message.
 */
exports.MedicinalProductInteractionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medicinal_product_interaction, 0);
/**
 * Describes the message google.fhir.r4.core.MedicinalProductInteraction.Interactant.
 * Use `create(MedicinalProductInteraction_InteractantSchema)` to create a new message.
 */
exports.MedicinalProductInteraction_InteractantSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medicinal_product_interaction, 0, 0);
/**
 * Describes the message google.fhir.r4.core.MedicinalProductInteraction.Interactant.ItemX.
 * Use `create(MedicinalProductInteraction_Interactant_ItemXSchema)` to create a new message.
 */
exports.MedicinalProductInteraction_Interactant_ItemXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_medicinal_product_interaction, 0, 0, 0);
