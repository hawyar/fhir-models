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
exports.PaymentNotice_StatusCodeSchema = exports.PaymentNoticeSchema = exports.file_proto_google_fhir_proto_r4_core_resources_payment_notice = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/payment_notice.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_payment_notice = (0, codegenv1_1.fileDesc)("Cj5wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9wYXltZW50X25vdGljZS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSK3DAoNUGF5bWVudE5vdGljZRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISRQoGc3RhdHVzGAsgASgLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5QYXltZW50Tm90aWNlLlN0YXR1c0NvZGVCBvDQh+sEARI/CgdyZXF1ZXN0GAwgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFJlc291cmNlEkAKCHJlc3BvbnNlGA0gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFJlc291cmNlEjYKB2NyZWF0ZWQYDiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lQgbw0IfrBAESbAoIcHJvdmlkZXIYDyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUI68v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZfL//MIGDE9yZ2FuaXphdGlvbhJSCgdwYXltZW50GBAgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCIfDQh+sEAfL//MIGFVBheW1lbnRSZWNvbmNpbGlhdGlvbhIvCgxwYXltZW50X2RhdGUYESABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGUSaQoFcGF5ZWUYEiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUI68v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZfL//MIGDE9yZ2FuaXphdGlvbhJLCglyZWNpcGllbnQYEyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIY8NCH6wQB8v/8wgYMT3JnYW5pemF0aW9uEjIKBmFtb3VudBgUIAEoCzIaLmdvb2dsZS5maGlyLnI0LmNvcmUuTW9uZXlCBvDQh+sEARI8Cg5wYXltZW50X3N0YXR1cxgVIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0GpUCCgpTdGF0dXNDb2RlEkUKBXZhbHVlGAEgASgOMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5GaW5hbmNpYWxSZXNvdXJjZVN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpkivmDsgUmaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9mbS1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZTpBwJ/jtgUDsv7klwY1aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1BheW1lbnROb3RpY2VKBAgHEAhCfgoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpbZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9wYXltZW50X25vdGljZV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.PaymentNotice.
 * Use `create(PaymentNoticeSchema)` to create a new message.
 */
exports.PaymentNoticeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_payment_notice, 0);
/**
 * Describes the message google.fhir.r4.core.PaymentNotice.StatusCode.
 * Use `create(PaymentNotice_StatusCodeSchema)` to create a new message.
 */
exports.PaymentNotice_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_payment_notice, 0, 0);
