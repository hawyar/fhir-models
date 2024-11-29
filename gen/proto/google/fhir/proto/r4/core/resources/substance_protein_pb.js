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
exports.SubstanceProtein_SubunitSchema = exports.SubstanceProteinSchema = exports.file_proto_google_fhir_proto_r4_core_resources_substance_protein = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/substance_protein.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_substance_protein = (0, codegenv1_1.fileDesc)("CkFwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzdGFuY2VfcHJvdGVpbi5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSK0CgoQU3Vic3RhbmNlUHJvdGVpbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjsKDXNlcXVlbmNlX3R5cGUYCiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI4ChJudW1iZXJfb2Zfc3VidW5pdHMYCyABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXISNgoRZGlzdWxmaWRlX2xpbmthZ2UYDCADKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxI+CgdzdWJ1bml0GA0gAygLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VQcm90ZWluLlN1YnVuaXQa8QQKB1N1YnVuaXQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhItCgdzdWJ1bml0GAQgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VyEi0KCHNlcXVlbmNlGAUgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSLAoGbGVuZ3RoGAYgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VyEjwKE3NlcXVlbmNlX2F0dGFjaG1lbnQYByABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkF0dGFjaG1lbnQSQwoabl90ZXJtaW5hbF9tb2RpZmljYXRpb25faWQYCCABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISPAoXbl90ZXJtaW5hbF9tb2RpZmljYXRpb24YCSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJDChpjX3Rlcm1pbmFsX21vZGlmaWNhdGlvbl9pZBgKIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI8ChdjX3Rlcm1pbmFsX21vZGlmaWNhdGlvbhgLIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nOkTAn+O2BQOy/uSXBjhodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vU3Vic3RhbmNlUHJvdGVpbkoECAcQCEKBAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpeZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzdGFuY2VfcHJvdGVpbl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.SubstanceProtein.
 * Use `create(SubstanceProteinSchema)` to create a new message.
 */
exports.SubstanceProteinSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_protein, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceProtein.Subunit.
 * Use `create(SubstanceProtein_SubunitSchema)` to create a new message.
 */
exports.SubstanceProtein_SubunitSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_protein, 0, 0);
