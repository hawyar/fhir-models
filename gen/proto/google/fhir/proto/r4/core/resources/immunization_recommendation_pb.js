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
exports.ImmunizationRecommendation_Recommendation_SeriesDosesXSchema = exports.ImmunizationRecommendation_Recommendation_DoseNumberXSchema = exports.ImmunizationRecommendation_Recommendation_DateCriterionSchema = exports.ImmunizationRecommendation_RecommendationSchema = exports.ImmunizationRecommendationSchema = exports.file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/immunization_recommendation.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation = (0, codegenv1_1.fileDesc)("Cktwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9pbW11bml6YXRpb25fcmVjb21tZW5kYXRpb24ucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUiihQKGkltbXVuaXphdGlvblJlY29tbWVuZGF0aW9uEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchJECgdwYXRpZW50GAsgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCE/DQh+sEAfL//MIGB1BhdGllbnQSMwoEZGF0ZRgMIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWVCBvDQh+sEARJFCglhdXRob3JpdHkYDSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEl4KDnJlY29tbWVuZGF0aW9uGA4gAygLMj4uZ29vZ2xlLmZoaXIucjQuY29yZS5JbW11bml6YXRpb25SZWNvbW1lbmRhdGlvbi5SZWNvbW1lbmRhdGlvbkIG8NCH6wQBGssNCg5SZWNvbW1lbmRhdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKDHZhY2NpbmVfY29kZRgEIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjwKDnRhcmdldF9kaXNlYXNlGAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSSgocY29udHJhaW5kaWNhdGVkX3ZhY2NpbmVfY29kZRgGIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkUKD2ZvcmVjYXN0X3N0YXR1cxgHIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESPQoPZm9yZWNhc3RfcmVhc29uGAggAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSZAoOZGF0ZV9jcml0ZXJpb24YCSADKAsyTC5nb29nbGUuZmhpci5yNC5jb3JlLkltbXVuaXphdGlvblJlY29tbWVuZGF0aW9uLlJlY29tbWVuZGF0aW9uLkRhdGVDcml0ZXJpb24SMAoLZGVzY3JpcHRpb24YCiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIrCgZzZXJpZXMYCyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJfCgtkb3NlX251bWJlchgMIAEoCzJKLmdvb2dsZS5maGlyLnI0LmNvcmUuSW1tdW5pemF0aW9uUmVjb21tZW5kYXRpb24uUmVjb21tZW5kYXRpb24uRG9zZU51bWJlclgSYQoMc2VyaWVzX2Rvc2VzGA0gASgLMksuZ29vZ2xlLmZoaXIucjQuY29yZS5JbW11bml6YXRpb25SZWNvbW1lbmRhdGlvbi5SZWNvbW1lbmRhdGlvbi5TZXJpZXNEb3Nlc1gSbwoXc3VwcG9ydGluZ19pbW11bml6YXRpb24YDiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIu8v/8wgYMSW1tdW5pemF0aW9u8v/8wgYWSW1tdW5pemF0aW9uRXZhbHVhdGlvbhJWCh5zdXBwb3J0aW5nX3BhdGllbnRfaW5mb3JtYXRpb24YDyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2UamQIKDURhdGVDcml0ZXJpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6CgRjb2RlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARI0CgV2YWx1ZRgFIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWVCBvDQh+sEARqWAQoLRG9zZU51bWJlclgSOAoMcG9zaXRpdmVfaW50GAEgASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5Qb3NpdGl2ZUludEgAEjsKDHN0cmluZ192YWx1ZRgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZzoGoIOD6AYBQggKBmNob2ljZRqXAQoMU2VyaWVzRG9zZXNYEjgKDHBvc2l0aXZlX2ludBgBIAEoCzIgLmdvb2dsZS5maGlyLnI0LmNvcmUuUG9zaXRpdmVJbnRIABI7CgxzdHJpbmdfdmFsdWUYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0gAUgZzdHJpbmc6BqCDg+gGAUIICgZjaG9pY2U6NJqGk6AILnZhY2NpbmVDb2RlLmV4aXN0cygpIG9yIHRhcmdldERpc2Vhc2UuZXhpc3RzKCk6TsCf47YFA7L+5JcGQmh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9JbW11bml6YXRpb25SZWNvbW1lbmRhdGlvbkoECAcQCEKLAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpoZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9pbW11bml6YXRpb25fcmVjb21tZW5kYXRpb25fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.ImmunizationRecommendation.
 * Use `create(ImmunizationRecommendationSchema)` to create a new message.
 */
exports.ImmunizationRecommendationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation, 0);
/**
 * Describes the message google.fhir.r4.core.ImmunizationRecommendation.Recommendation.
 * Use `create(ImmunizationRecommendation_RecommendationSchema)` to create a new message.
 */
exports.ImmunizationRecommendation_RecommendationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation, 0, 0);
/**
 * Describes the message google.fhir.r4.core.ImmunizationRecommendation.Recommendation.DateCriterion.
 * Use `create(ImmunizationRecommendation_Recommendation_DateCriterionSchema)` to create a new message.
 */
exports.ImmunizationRecommendation_Recommendation_DateCriterionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation, 0, 0, 0);
/**
 * Describes the message google.fhir.r4.core.ImmunizationRecommendation.Recommendation.DoseNumberX.
 * Use `create(ImmunizationRecommendation_Recommendation_DoseNumberXSchema)` to create a new message.
 */
exports.ImmunizationRecommendation_Recommendation_DoseNumberXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation, 0, 0, 1);
/**
 * Describes the message google.fhir.r4.core.ImmunizationRecommendation.Recommendation.SeriesDosesX.
 * Use `create(ImmunizationRecommendation_Recommendation_SeriesDosesXSchema)` to create a new message.
 */
exports.ImmunizationRecommendation_Recommendation_SeriesDosesXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation, 0, 0, 2);
