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
exports.Organization_ContactSchema = exports.OrganizationSchema = exports.file_proto_google_fhir_proto_r4_core_resources_organization = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/organization.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_organization = (0, codegenv1_1.fileDesc)("Cjxwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9vcmdhbml6YXRpb24ucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUivAsKDE9yZ2FuaXphdGlvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISLAoGYWN0aXZlGAsgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEjIKBHR5cGUYDCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIpCgRuYW1lGA0gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKgoFYWxpYXMYDiADKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJVCgd0ZWxlY29tGA8gAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0UG9pbnRCIfK+wKQHG3doZXJlKHVzZSA9ICdob21lJykuZW1wdHkoKRJQCgdhZGRyZXNzGBAgAygLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5BZGRyZXNzQiHyvsCkBxt3aGVyZSh1c2UgPSAnaG9tZScpLmVtcHR5KCkSQwoHcGFydF9vZhgRIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24SOgoHY29udGFjdBgSIAMoCzIpLmdvb2dsZS5maGlyLnI0LmNvcmUuT3JnYW5pemF0aW9uLkNvbnRhY3QSQAoIZW5kcG9pbnQYEyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIRW5kcG9pbnQa6QIKB0NvbnRhY3QSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI1CgdwdXJwb3NlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLAoEbmFtZRgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuSHVtYW5OYW1lEjIKB3RlbGVjb20YBiADKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3RQb2ludBItCgdhZGRyZXNzGAcgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5BZGRyZXNzOm3An+O2BQOy/uSXBjRodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vT3JnYW5pemF0aW9umoaToAgnKGlkZW50aWZpZXIuY291bnQoKSArIG5hbWUuY291bnQoKSkgPiAwSgQIBxAIQnwKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaWWdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvb3JnYW5pemF0aW9uX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Organization.
 * Use `create(OrganizationSchema)` to create a new message.
 */
exports.OrganizationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_organization, 0);
/**
 * Describes the message google.fhir.r4.core.Organization.Contact.
 * Use `create(Organization_ContactSchema)` to create a new message.
 */
exports.Organization_ContactSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_organization, 0, 0);
