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
exports.DeviceMetric_Calibration_StateCodeSchema = exports.DeviceMetric_Calibration_TypeCodeSchema = exports.DeviceMetric_CalibrationSchema = exports.DeviceMetric_CategoryCodeSchema = exports.DeviceMetric_ColorCodeSchema = exports.DeviceMetric_OperationalStatusCodeSchema = exports.DeviceMetricSchema = exports.file_proto_google_fhir_proto_r4_core_resources_device_metric = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/device_metric.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_device_metric = (0, codegenv1_1.fileDesc)("Cj1wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9kZXZpY2VfbWV0cmljLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIuEWCgxEZXZpY2VNZXRyaWMSIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEjoKBHR5cGUYCyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEjIKBHVuaXQYDCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI8CgZzb3VyY2UYDSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIM8v/8wgYGRGV2aWNlEjwKBnBhcmVudBgOIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQgzy//zCBgZEZXZpY2USUwoSb3BlcmF0aW9uYWxfc3RhdHVzGA8gASgLMjcuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VNZXRyaWMuT3BlcmF0aW9uYWxTdGF0dXNDb2RlEjoKBWNvbG9yGBAgASgLMisuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VNZXRyaWMuQ29sb3JDb2RlEkgKCGNhdGVnb3J5GBEgASgLMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VNZXRyaWMuQ2F0ZWdvcnlDb2RlQgbw0IfrBAESNwoSbWVhc3VyZW1lbnRfcGVyaW9kGBIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5UaW1pbmcSQgoLY2FsaWJyYXRpb24YEyADKAsyLS5nb29nbGUuZmhpci5yNC5jb3JlLkRldmljZU1ldHJpYy5DYWxpYnJhdGlvbhq2AgoVT3BlcmF0aW9uYWxTdGF0dXNDb2RlEksKBXZhbHVlGAEgASgOMjwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VNZXRyaWNPcGVyYXRpb25hbFN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjp0ivmDsgU2aHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZXRyaWMtb3BlcmF0aW9uYWwtc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUakQIKCUNvbG9yQ29kZRI/CgV2YWx1ZRgBIAEoDjIwLmdvb2dsZS5maGlyLnI0LmNvcmUuRGV2aWNlTWV0cmljQ29sb3JDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246Z4r5g7IFKWh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWV0cmljLWNvbG9ywJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUamgIKDENhdGVnb3J5Q29kZRJCCgV2YWx1ZRgBIAEoDjIzLmdvb2dsZS5maGlyLnI0LmNvcmUuRGV2aWNlTWV0cmljQ2F0ZWdvcnlDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aor5g7IFLGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWV0cmljLWNhdGVnb3J5wJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUasgcKC0NhbGlicmF0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SRAoEdHlwZRgEIAEoCzI2Lmdvb2dsZS5maGlyLnI0LmNvcmUuRGV2aWNlTWV0cmljLkNhbGlicmF0aW9uLlR5cGVDb2RlEkYKBXN0YXRlGAUgASgLMjcuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VNZXRyaWMuQ2FsaWJyYXRpb24uU3RhdGVDb2RlEioKBHRpbWUYBiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkluc3RhbnQapQIKCFR5cGVDb2RlEkkKBXZhbHVlGAEgASgOMjouZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VNZXRyaWNDYWxpYnJhdGlvblR5cGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cor5g7IFNGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWV0cmljLWNhbGlicmF0aW9uLXR5cGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqoAgoJU3RhdGVDb2RlEkoKBXZhbHVlGAEgASgOMjsuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VNZXRyaWNDYWxpYnJhdGlvblN0YXRlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnOK+YOyBTVodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21ldHJpYy1jYWxpYnJhdGlvbi1zdGF0ZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlOkDAn+O2BQOy/uSXBjRodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vRGV2aWNlTWV0cmljSgQIBxAIQn0KF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaWmdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvZGV2aWNlX21ldHJpY19nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.DeviceMetric.
 * Use `create(DeviceMetricSchema)` to create a new message.
 */
exports.DeviceMetricSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_metric, 0);
/**
 * Describes the message google.fhir.r4.core.DeviceMetric.OperationalStatusCode.
 * Use `create(DeviceMetric_OperationalStatusCodeSchema)` to create a new message.
 */
exports.DeviceMetric_OperationalStatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_metric, 0, 0);
/**
 * Describes the message google.fhir.r4.core.DeviceMetric.ColorCode.
 * Use `create(DeviceMetric_ColorCodeSchema)` to create a new message.
 */
exports.DeviceMetric_ColorCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_metric, 0, 1);
/**
 * Describes the message google.fhir.r4.core.DeviceMetric.CategoryCode.
 * Use `create(DeviceMetric_CategoryCodeSchema)` to create a new message.
 */
exports.DeviceMetric_CategoryCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_metric, 0, 2);
/**
 * Describes the message google.fhir.r4.core.DeviceMetric.Calibration.
 * Use `create(DeviceMetric_CalibrationSchema)` to create a new message.
 */
exports.DeviceMetric_CalibrationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_metric, 0, 3);
/**
 * Describes the message google.fhir.r4.core.DeviceMetric.Calibration.TypeCode.
 * Use `create(DeviceMetric_Calibration_TypeCodeSchema)` to create a new message.
 */
exports.DeviceMetric_Calibration_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_metric, 0, 3, 0);
/**
 * Describes the message google.fhir.r4.core.DeviceMetric.Calibration.StateCode.
 * Use `create(DeviceMetric_Calibration_StateCodeSchema)` to create a new message.
 */
exports.DeviceMetric_Calibration_StateCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_metric, 0, 3, 1);