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
exports.ResearchSubject_StatusCodeSchema = exports.ResearchSubjectSchema = exports.file_proto_google_fhir_proto_r4_core_resources_research_subject = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/research_subject.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_research_subject = (0, codegenv1_1.fileDesc)("CkBwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9yZXNlYXJjaF9zdWJqZWN0LnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlItUJCg9SZXNlYXJjaFN1YmplY3QSIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEkcKBnN0YXR1cxgLIAEoCzIvLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVzZWFyY2hTdWJqZWN0LlN0YXR1c0NvZGVCBvDQh+sEARIrCgZwZXJpb2QYDCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBJICgVzdHVkeRgNIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhnw0IfrBAHy//zCBg1SZXNlYXJjaFN0dWR5EkcKCmluZGl2aWR1YWwYDiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIT8NCH6wQB8v/8wgYHUGF0aWVudBIxCgxhc3NpZ25lZF9hcm0YDyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIvCgphY3R1YWxfYXJtGBAgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSPgoHY29uc2VudBgRIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg3y//zCBgdDb25zZW50GqECCgpTdGF0dXNDb2RlEkMKBXZhbHVlGAEgASgOMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5SZXNlYXJjaFN1YmplY3RTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cor5g7IFNGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVzZWFyY2gtc3ViamVjdC1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZTpDwJ/jtgUDsv7klwY3aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1Jlc2VhcmNoU3ViamVjdEoECAcQCEKAAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpdZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9yZXNlYXJjaF9zdWJqZWN0X2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.ResearchSubject.
 * Use `create(ResearchSubjectSchema)` to create a new message.
 */
exports.ResearchSubjectSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_research_subject, 0);
/**
 * Describes the message google.fhir.r4.core.ResearchSubject.StatusCode.
 * Use `create(ResearchSubject_StatusCodeSchema)` to create a new message.
 */
exports.ResearchSubject_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_research_subject, 0, 0);
