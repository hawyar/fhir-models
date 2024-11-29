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
exports.SubstanceSourceMaterial_PartDescriptionSchema = exports.SubstanceSourceMaterial_Organism_OrganismGeneralSchema = exports.SubstanceSourceMaterial_Organism_HybridSchema = exports.SubstanceSourceMaterial_Organism_AuthorSchema = exports.SubstanceSourceMaterial_OrganismSchema = exports.SubstanceSourceMaterial_FractionDescriptionSchema = exports.SubstanceSourceMaterialSchema = exports.file_proto_google_fhir_proto_r4_core_resources_substance_source_material = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/substance_source_material.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_substance_source_material = (0, codegenv1_1.fileDesc)("Cklwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzdGFuY2Vfc291cmNlX21hdGVyaWFsLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIsQdChdTdWJzdGFuY2VTb3VyY2VNYXRlcmlhbBIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEkMKFXNvdXJjZV9tYXRlcmlhbF9jbGFzcxgKIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkIKFHNvdXJjZV9tYXRlcmlhbF90eXBlGAsgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSQwoVc291cmNlX21hdGVyaWFsX3N0YXRlGAwgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNAoLb3JnYW5pc21faWQYDSABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISMgoNb3JnYW5pc21fbmFtZRgOIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjwKE3BhcmVudF9zdWJzdGFuY2VfaWQYDyADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISOgoVcGFyZW50X3N1YnN0YW5jZV9uYW1lGBAgAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSPwoRY291bnRyeV9vZl9vcmlnaW4YESADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI6ChVnZW9ncmFwaGljYWxfbG9jYXRpb24YEiADKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxI/ChFkZXZlbG9wbWVudF9zdGFnZRgTIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0El4KFGZyYWN0aW9uX2Rlc2NyaXB0aW9uGBQgAygLMkAuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VTb3VyY2VNYXRlcmlhbC5GcmFjdGlvbkRlc2NyaXB0aW9uEkcKCG9yZ2FuaXNtGBUgASgLMjUuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VTb3VyY2VNYXRlcmlhbC5PcmdhbmlzbRJWChBwYXJ0X2Rlc2NyaXB0aW9uGBYgAygLMjwuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VTb3VyY2VNYXRlcmlhbC5QYXJ0RGVzY3JpcHRpb24amQIKE0ZyYWN0aW9uRGVzY3JpcHRpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhItCghmcmFjdGlvbhgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjsKDW1hdGVyaWFsX3R5cGUYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBq4DgoIT3JnYW5pc20SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI0CgZmYW1pbHkYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIzCgVnZW51cxgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjUKB3NwZWNpZXMYBiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJAChJpbnRyYXNwZWNpZmljX3R5cGUYByABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI+ChlpbnRyYXNwZWNpZmljX2Rlc2NyaXB0aW9uGAggASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSTAoGYXV0aG9yGAkgAygLMjwuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VTb3VyY2VNYXRlcmlhbC5PcmdhbmlzbS5BdXRob3ISTAoGaHlicmlkGAogASgLMjwuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VTb3VyY2VNYXRlcmlhbC5PcmdhbmlzbS5IeWJyaWQSXwoQb3JnYW5pc21fZ2VuZXJhbBgLIAEoCzJFLmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlU291cmNlTWF0ZXJpYWwuT3JnYW5pc20uT3JnYW5pc21HZW5lcmFsGpQCCgZBdXRob3ISJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI5CgthdXRob3JfdHlwZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjcKEmF1dGhvcl9kZXNjcmlwdGlvbhgFIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGssDCgZIeWJyaWQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI5ChRtYXRlcm5hbF9vcmdhbmlzbV9pZBgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjsKFm1hdGVybmFsX29yZ2FuaXNtX25hbWUYBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxI5ChRwYXRlcm5hbF9vcmdhbmlzbV9pZBgGIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjsKFnBhdGVybmFsX29yZ2FuaXNtX25hbWUYByABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxI5CgtoeWJyaWRfdHlwZRgIIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Go0DCg9PcmdhbmlzbUdlbmVyYWwSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI1CgdraW5nZG9tGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNAoGcGh5bHVtGAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSQAoLY2xhc3NfdmFsdWUYBiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdFIFY2xhc3MSMwoFb3JkZXIYByABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBqaAgoPUGFydERlc2NyaXB0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMgoEcGFydBgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjsKDXBhcnRfbG9jYXRpb24YBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdDpLwJ/jtgUDsv7klwY/aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1N1YnN0YW5jZVNvdXJjZU1hdGVyaWFsSgQIBxAIQokBChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWmZnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL3N1YnN0YW5jZV9zb3VyY2VfbWF0ZXJpYWxfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.SubstanceSourceMaterial.
 * Use `create(SubstanceSourceMaterialSchema)` to create a new message.
 */
exports.SubstanceSourceMaterialSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_source_material, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceSourceMaterial.FractionDescription.
 * Use `create(SubstanceSourceMaterial_FractionDescriptionSchema)` to create a new message.
 */
exports.SubstanceSourceMaterial_FractionDescriptionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_source_material, 0, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceSourceMaterial.Organism.
 * Use `create(SubstanceSourceMaterial_OrganismSchema)` to create a new message.
 */
exports.SubstanceSourceMaterial_OrganismSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_source_material, 0, 1);
/**
 * Describes the message google.fhir.r4.core.SubstanceSourceMaterial.Organism.Author.
 * Use `create(SubstanceSourceMaterial_Organism_AuthorSchema)` to create a new message.
 */
exports.SubstanceSourceMaterial_Organism_AuthorSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_source_material, 0, 1, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceSourceMaterial.Organism.Hybrid.
 * Use `create(SubstanceSourceMaterial_Organism_HybridSchema)` to create a new message.
 */
exports.SubstanceSourceMaterial_Organism_HybridSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_source_material, 0, 1, 1);
/**
 * Describes the message google.fhir.r4.core.SubstanceSourceMaterial.Organism.OrganismGeneral.
 * Use `create(SubstanceSourceMaterial_Organism_OrganismGeneralSchema)` to create a new message.
 */
exports.SubstanceSourceMaterial_Organism_OrganismGeneralSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_source_material, 0, 1, 2);
/**
 * Describes the message google.fhir.r4.core.SubstanceSourceMaterial.PartDescription.
 * Use `create(SubstanceSourceMaterial_PartDescriptionSchema)` to create a new message.
 */
exports.SubstanceSourceMaterial_PartDescriptionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_source_material, 0, 2);
