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
exports.RelatedPerson_CommunicationSchema = exports.RelatedPerson_GenderCodeSchema = exports.RelatedPersonSchema = exports.file_proto_google_fhir_proto_r4_core_resources_related_person = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/related_person.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_related_person = (0, codegenv1_1.fileDesc)("Cj5wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9yZWxhdGVkX3BlcnNvbi5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKRDQoNUmVsYXRlZFBlcnNvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISLAoGYWN0aXZlGAsgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEkQKB3BhdGllbnQYDCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIT8NCH6wQB8v/8wgYHUGF0aWVudBI6CgxyZWxhdGlvbnNoaXAYDSADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIsCgRuYW1lGA4gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5IdW1hbk5hbWUSMgoHdGVsZWNvbRgPIAMoCzIhLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29udGFjdFBvaW50Ej0KBmdlbmRlchgQIAEoCzItLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVsYXRlZFBlcnNvbi5HZW5kZXJDb2RlEi0KCmJpcnRoX2RhdGUYESABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGUSLQoHYWRkcmVzcxgSIAMoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQWRkcmVzcxIuCgVwaG90bxgTIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQXR0YWNobWVudBIrCgZwZXJpb2QYFCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBJHCg1jb21tdW5pY2F0aW9uGBUgAygLMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5SZWxhdGVkUGVyc29uLkNvbW11bmljYXRpb24angIKCkdlbmRlckNvZGUSQgoFdmFsdWUYASABKA4yMy5nb29nbGUuZmhpci5yNC5jb3JlLkFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnCK+YOyBTJodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2FkbWluaXN0cmF0aXZlLWdlbmRlcsCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGpgCCg1Db21tdW5pY2F0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SPgoIbGFuZ3VhZ2UYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEi8KCXByZWZlcnJlZBgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbjpBwJ/jtgUDsv7klwY1aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1JlbGF0ZWRQZXJzb25KBAgHEAhCfgoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpbZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9yZWxhdGVkX3BlcnNvbl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.RelatedPerson.
 * Use `create(RelatedPersonSchema)` to create a new message.
 */
exports.RelatedPersonSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_related_person, 0);
/**
 * Describes the message google.fhir.r4.core.RelatedPerson.GenderCode.
 * Use `create(RelatedPerson_GenderCodeSchema)` to create a new message.
 */
exports.RelatedPerson_GenderCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_related_person, 0, 0);
/**
 * Describes the message google.fhir.r4.core.RelatedPerson.Communication.
 * Use `create(RelatedPerson_CommunicationSchema)` to create a new message.
 */
exports.RelatedPerson_CommunicationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_related_person, 0, 1);
