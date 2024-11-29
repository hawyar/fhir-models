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
exports.EpisodeOfCare_DiagnosisSchema = exports.EpisodeOfCare_StatusHistory_StatusCodeSchema = exports.EpisodeOfCare_StatusHistorySchema = exports.EpisodeOfCare_StatusCodeSchema = exports.EpisodeOfCareSchema = exports.file_proto_google_fhir_proto_r4_core_resources_episode_of_care = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/episode_of_care.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_episode_of_care = (0, codegenv1_1.fileDesc)("Cj9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9lcGlzb2RlX29mX2NhcmUucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUixBMKDUVwaXNvZGVPZkNhcmUSIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEkUKBnN0YXR1cxgLIAEoCzItLmdvb2dsZS5maGlyLnI0LmNvcmUuRXBpc29kZU9mQ2FyZS5TdGF0dXNDb2RlQgbw0IfrBAESSAoOc3RhdHVzX2hpc3RvcnkYDCADKAsyMC5nb29nbGUuZmhpci5yNC5jb3JlLkVwaXNvZGVPZkNhcmUuU3RhdHVzSGlzdG9yeRIyCgR0eXBlGA0gAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSPwoJZGlhZ25vc2lzGA4gAygLMiwuZ29vZ2xlLmZoaXIucjQuY29yZS5FcGlzb2RlT2ZDYXJlLkRpYWdub3NpcxJECgdwYXRpZW50GA8gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCE/DQh+sEAfL//MIGB1BhdGllbnQSUQoVbWFuYWdpbmdfb3JnYW5pemF0aW9uGBAgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhIrCgZwZXJpb2QYESABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBJOChByZWZlcnJhbF9yZXF1ZXN0GBIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCFPL//MIGDlNlcnZpY2VSZXF1ZXN0El4KDGNhcmVfbWFuYWdlchgTIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQijy//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xlEjwKBHRlYW0YFCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIQ2FyZVRlYW0SPgoHYWNjb3VudBgVIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg3y//zCBgdBY2NvdW50Gp4CCgpTdGF0dXNDb2RlEkEKBXZhbHVlGAEgASgOMjIuZ29vZ2xlLmZoaXIucjQuY29yZS5FcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnGK+YOyBTNodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2VwaXNvZGUtb2YtY2FyZS1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrSBAoNU3RhdHVzSGlzdG9yeRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uElMKBnN0YXR1cxgEIAEoCzI7Lmdvb2dsZS5maGlyLnI0LmNvcmUuRXBpc29kZU9mQ2FyZS5TdGF0dXNIaXN0b3J5LlN0YXR1c0NvZGVCBvDQh+sEARIzCgZwZXJpb2QYBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZEIG8NCH6wQBGp4CCgpTdGF0dXNDb2RlEkEKBXZhbHVlGAEgASgOMjIuZ29vZ2xlLmZoaXIucjQuY29yZS5FcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnGK+YOyBTNodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2VwaXNvZGUtb2YtY2FyZS1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrRAgoJRGlhZ25vc2lzEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SSAoJY29uZGl0aW9uGAQgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCFfDQh+sEAfL//MIGCUNvbmRpdGlvbhIyCgRyb2xlGAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLgoEcmFuaxgGIAEoCzIgLmdvb2dsZS5maGlyLnI0LmNvcmUuUG9zaXRpdmVJbnQ6QcCf47YFA7L+5JcGNWh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9FcGlzb2RlT2ZDYXJlSgQIBxAIQn8KF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaXGdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvZXBpc29kZV9vZl9jYXJlX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.EpisodeOfCare.
 * Use `create(EpisodeOfCareSchema)` to create a new message.
 */
exports.EpisodeOfCareSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_episode_of_care, 0);
/**
 * Describes the message google.fhir.r4.core.EpisodeOfCare.StatusCode.
 * Use `create(EpisodeOfCare_StatusCodeSchema)` to create a new message.
 */
exports.EpisodeOfCare_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_episode_of_care, 0, 0);
/**
 * Describes the message google.fhir.r4.core.EpisodeOfCare.StatusHistory.
 * Use `create(EpisodeOfCare_StatusHistorySchema)` to create a new message.
 */
exports.EpisodeOfCare_StatusHistorySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_episode_of_care, 0, 1);
/**
 * Describes the message google.fhir.r4.core.EpisodeOfCare.StatusHistory.StatusCode.
 * Use `create(EpisodeOfCare_StatusHistory_StatusCodeSchema)` to create a new message.
 */
exports.EpisodeOfCare_StatusHistory_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_episode_of_care, 0, 1, 0);
/**
 * Describes the message google.fhir.r4.core.EpisodeOfCare.Diagnosis.
 * Use `create(EpisodeOfCare_DiagnosisSchema)` to create a new message.
 */
exports.EpisodeOfCare_DiagnosisSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_episode_of_care, 0, 2);