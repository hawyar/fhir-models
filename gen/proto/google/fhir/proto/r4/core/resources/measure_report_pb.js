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
exports.MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulationSchema = exports.MeasureReport_Group_Stratifier_StratifierGroup_ComponentSchema = exports.MeasureReport_Group_Stratifier_StratifierGroupSchema = exports.MeasureReport_Group_StratifierSchema = exports.MeasureReport_Group_PopulationSchema = exports.MeasureReport_GroupSchema = exports.MeasureReport_TypeCodeSchema = exports.MeasureReport_StatusCodeSchema = exports.MeasureReportSchema = exports.file_proto_google_fhir_proto_r4_core_resources_measure_report = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/measure_report.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_measure_report = (0, codegenv1_1.fileDesc)("Cj5wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWFzdXJlX3JlcG9ydC5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLLIAoNTWVhc3VyZVJlcG9ydBIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISRQoGc3RhdHVzGAsgASgLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5NZWFzdXJlUmVwb3J0LlN0YXR1c0NvZGVCBvDQh+sEARJBCgR0eXBlGAwgASgLMisuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWFzdXJlUmVwb3J0LlR5cGVDb2RlQgbw0IfrBAESNwoHbWVhc3VyZRgNIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsQgbw0IfrBAESngEKB3N1YmplY3QYDiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJt8v/8wgYHUGF0aWVudPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBghMb2NhdGlvbvL//MIGBkRldmljZfL//MIGDVJlbGF0ZWRQZXJzb27y//zCBgVHcm91cBIrCgRkYXRlGA8gASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRJ6CghyZXBvcnRlchgQIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQkjy//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xl8v/8wgYITG9jYXRpb27y//zCBgxPcmdhbml6YXRpb24SMwoGcGVyaW9kGBEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2RCBvDQh+sEARJCChRpbXByb3ZlbWVudF9ub3RhdGlvbhgSIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjcKBWdyb3VwGBMgAygLMiguZ29vZ2xlLmZoaXIucjQuY29yZS5NZWFzdXJlUmVwb3J0Lkdyb3VwEkoKEmV2YWx1YXRlZF9yZXNvdXJjZRgUIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghSZXNvdXJjZRqdAgoKU3RhdHVzQ29kZRJBCgV2YWx1ZRgBIAEoDjIyLmdvb2dsZS5maGlyLnI0LmNvcmUuTWVhc3VyZVJlcG9ydFN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpwivmDsgUyaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZWFzdXJlLXJlcG9ydC1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqXAgoIVHlwZUNvZGUSPwoFdmFsdWUYASABKA4yMC5nb29nbGUuZmhpci5yNC5jb3JlLk1lYXN1cmVSZXBvcnRUeXBlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOm6K+YOyBTBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21lYXN1cmUtcmVwb3J0LXR5cGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqAEQoFR3JvdXASJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIyCgRjb2RlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSRwoKcG9wdWxhdGlvbhgFIAMoCzIzLmdvb2dsZS5maGlyLnI0LmNvcmUuTWVhc3VyZVJlcG9ydC5Hcm91cC5Qb3B1bGF0aW9uEjQKDW1lYXN1cmVfc2NvcmUYBiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLlF1YW50aXR5EkcKCnN0cmF0aWZpZXIYByADKAsyMy5nb29nbGUuZmhpci5yNC5jb3JlLk1lYXN1cmVSZXBvcnQuR3JvdXAuU3RyYXRpZmllchrKAgoKUG9wdWxhdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBGNvZGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIrCgVjb3VudBgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlchJDCg9zdWJqZWN0X3Jlc3VsdHMYBiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIK8v/8wgYETGlzdBqVCwoKU3RyYXRpZmllchInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBGNvZGUYBCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJUCgdzdHJhdHVtGAUgAygLMkMuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWFzdXJlUmVwb3J0Lkdyb3VwLlN0cmF0aWZpZXIuU3RyYXRpZmllckdyb3VwGuQICg9TdHJhdGlmaWVyR3JvdXASJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgV2YWx1ZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EmAKCWNvbXBvbmVudBgFIAMoCzJNLmdvb2dsZS5maGlyLnI0LmNvcmUuTWVhc3VyZVJlcG9ydC5Hcm91cC5TdHJhdGlmaWVyLlN0cmF0aWZpZXJHcm91cC5Db21wb25lbnQScQoKcG9wdWxhdGlvbhgGIAMoCzJdLmdvb2dsZS5maGlyLnI0LmNvcmUuTWVhc3VyZVJlcG9ydC5Hcm91cC5TdHJhdGlmaWVyLlN0cmF0aWZpZXJHcm91cC5TdHJhdGlmaWVyR3JvdXBQb3B1bGF0aW9uEjQKDW1lYXN1cmVfc2NvcmUYByABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLlF1YW50aXR5GpwCCglDb21wb25lbnQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6CgRjb2RlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARI7CgV2YWx1ZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAEa2QIKGVN0cmF0aWZpZXJHcm91cFBvcHVsYXRpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIyCgRjb2RlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSKwoFY291bnQYBSABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXISQwoPc3ViamVjdF9yZXN1bHRzGAYgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCCvL//MIGBExpc3Q6wwHAn+O2BQOy/uSXBjVodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vTWVhc3VyZVJlcG9ydJqGk6AIMyh0eXBlICE9ICdkYXRhLWNvbGxlY3Rpb24nKSBvciBncm91cC5leGlzdHMoKS5ub3QoKZqGk6AIQ2dyb3VwLnN0cmF0aWZpZXIuc3RyYXR1bS5hbGwodmFsdWUuZXhpc3RzKCkgeG9yIGNvbXBvbmVudC5leGlzdHMoKSlKBAgHEAhCfgoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpbZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWFzdXJlX3JlcG9ydF9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.MeasureReport.
 * Use `create(MeasureReportSchema)` to create a new message.
 */
exports.MeasureReportSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_measure_report, 0);
/**
 * Describes the message google.fhir.r4.core.MeasureReport.StatusCode.
 * Use `create(MeasureReport_StatusCodeSchema)` to create a new message.
 */
exports.MeasureReport_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 0);
/**
 * Describes the message google.fhir.r4.core.MeasureReport.TypeCode.
 * Use `create(MeasureReport_TypeCodeSchema)` to create a new message.
 */
exports.MeasureReport_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 1);
/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.
 * Use `create(MeasureReport_GroupSchema)` to create a new message.
 */
exports.MeasureReport_GroupSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2);
/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.Population.
 * Use `create(MeasureReport_Group_PopulationSchema)` to create a new message.
 */
exports.MeasureReport_Group_PopulationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2, 0);
/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.Stratifier.
 * Use `create(MeasureReport_Group_StratifierSchema)` to create a new message.
 */
exports.MeasureReport_Group_StratifierSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2, 1);
/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.
 * Use `create(MeasureReport_Group_Stratifier_StratifierGroupSchema)` to create a new message.
 */
exports.MeasureReport_Group_Stratifier_StratifierGroupSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2, 1, 0);
/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.Component.
 * Use `create(MeasureReport_Group_Stratifier_StratifierGroup_ComponentSchema)` to create a new message.
 */
exports.MeasureReport_Group_Stratifier_StratifierGroup_ComponentSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2, 1, 0, 0);
/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation.
 * Use `create(MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulationSchema)` to create a new message.
 */
exports.MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2, 1, 0, 1);
