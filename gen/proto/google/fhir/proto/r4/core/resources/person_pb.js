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
exports.Person_Link_AssuranceCodeSchema = exports.Person_LinkSchema = exports.Person_GenderCodeSchema = exports.PersonSchema = exports.file_proto_google_fhir_proto_r4_core_resources_person = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/person.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_person = (0, codegenv1_1.fileDesc)("CjZwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9wZXJzb24ucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUi7g4KBlBlcnNvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISLAoEbmFtZRgLIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuSHVtYW5OYW1lEjIKB3RlbGVjb20YDCADKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3RQb2ludBI2CgZnZW5kZXIYDSABKAsyJi5nb29nbGUuZmhpci5yNC5jb3JlLlBlcnNvbi5HZW5kZXJDb2RlEi0KCmJpcnRoX2RhdGUYDiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGUSLQoHYWRkcmVzcxgPIAMoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQWRkcmVzcxIuCgVwaG90bxgQIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQXR0YWNobWVudBJRChVtYW5hZ2luZ19vcmdhbml6YXRpb24YESABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEiwKBmFjdGl2ZRgSIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIuCgRsaW5rGBMgAygLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJzb24uTGluaxqeAgoKR2VuZGVyQ29kZRJCCgV2YWx1ZRgBIAEoDjIzLmdvb2dsZS5maGlyLnI0LmNvcmUuQWRtaW5pc3RyYXRpdmVHZW5kZXJDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cIr5g7IFMmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYWRtaW5pc3RyYXRpdmUtZ2VuZGVywJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa/wQKBExpbmsSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJ0CgZ0YXJnZXQYBCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJE8NCH6wQB8v/8wgYHUGF0aWVudPL//MIGDFByYWN0aXRpb25lcvL//MIGDVJlbGF0ZWRQZXJzb27y//zCBgZQZXJzb24SQQoJYXNzdXJhbmNlGAUgASgLMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJzb24uTGluay5Bc3N1cmFuY2VDb2RlGqUCCg1Bc3N1cmFuY2VDb2RlEkQKBXZhbHVlGAEgASgOMjUuZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGl0eUFzc3VyYW5jZUxldmVsQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnKK+YOyBTRodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2lkZW50aXR5LWFzc3VyYW5jZUxldmVswJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGU6OsCf47YFA7L+5JcGLmh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9QZXJzb25KBAgHEAhCdgoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpTZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9wZXJzb25fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Person.
 * Use `create(PersonSchema)` to create a new message.
 */
exports.PersonSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_person, 0);
/**
 * Describes the message google.fhir.r4.core.Person.GenderCode.
 * Use `create(Person_GenderCodeSchema)` to create a new message.
 */
exports.Person_GenderCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_person, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Person.Link.
 * Use `create(Person_LinkSchema)` to create a new message.
 */
exports.Person_LinkSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_person, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Person.Link.AssuranceCode.
 * Use `create(Person_Link_AssuranceCodeSchema)` to create a new message.
 */
exports.Person_Link_AssuranceCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_person, 0, 1, 0);
