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
exports.AppointmentResponse_ParticipantStatusCodeSchema = exports.AppointmentResponseSchema = exports.file_proto_google_fhir_proto_r4_core_resources_appointment_response = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/appointment_response.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_appointment_response = (0, codegenv1_1.fileDesc)("CkRwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9hcHBvaW50bWVudF9yZXNwb25zZS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKICwoTQXBwb2ludG1lbnRSZXNwb25zZRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISTAoLYXBwb2ludG1lbnQYCyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIX8NCH6wQB8v/8wgYLQXBwb2ludG1lbnQSKwoFc3RhcnQYDCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkluc3RhbnQSKQoDZW5kGA0gASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnN0YW50Ej4KEHBhcnRpY2lwYW50X3R5cGUYDiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBKoAQoFYWN0b3IYDyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJ58v/8wgYHUGF0aWVudPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBg1SZWxhdGVkUGVyc29u8v/8wgYGRGV2aWNl8v/8wgYRSGVhbHRoY2FyZVNlcnZpY2Xy//zCBghMb2NhdGlvbhJiChJwYXJ0aWNpcGFudF9zdGF0dXMYECABKAsyPi5nb29nbGUuZmhpci5yNC5jb3JlLkFwcG9pbnRtZW50UmVzcG9uc2UuUGFydGljaXBhbnRTdGF0dXNDb2RlQgbw0IfrBAESLAoHY29tbWVudBgRIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGqYCChVQYXJ0aWNpcGFudFN0YXR1c0NvZGUSQQoFdmFsdWUYASABKA4yMi5nb29nbGUuZmhpci5yNC5jb3JlLlBhcnRpY2lwYXRpb25TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bor5g7IFMGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcGFydGljaXBhdGlvbnN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlOnfAn+O2BQOy/uSXBjtodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vQXBwb2ludG1lbnRSZXNwb25zZZqGk6AIKnBhcnRpY2lwYW50VHlwZS5leGlzdHMoKSBvciBhY3Rvci5leGlzdHMoKUoECAcQCEKEAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVphZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9hcHBvaW50bWVudF9yZXNwb25zZV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.AppointmentResponse.
 * Use `create(AppointmentResponseSchema)` to create a new message.
 */
exports.AppointmentResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_appointment_response, 0);
/**
 * Describes the message google.fhir.r4.core.AppointmentResponse.ParticipantStatusCode.
 * Use `create(AppointmentResponse_ParticipantStatusCodeSchema)` to create a new message.
 */
exports.AppointmentResponse_ParticipantStatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_appointment_response, 0, 0);
