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
exports.Endpoint_PayloadMimeTypeCodeSchema = exports.Endpoint_StatusCodeSchema = exports.EndpointSchema = exports.file_proto_google_fhir_proto_r4_core_resources_endpoint = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/endpoint.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_endpoint = (0, codegenv1_1.fileDesc)("Cjhwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9lbmRwb2ludC5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLLDAoIRW5kcG9pbnQSIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEkAKBnN0YXR1cxgLIAEoCzIoLmdvb2dsZS5maGlyLnI0LmNvcmUuRW5kcG9pbnQuU3RhdHVzQ29kZUIG8NCH6wQBEjwKD2Nvbm5lY3Rpb25fdHlwZRgMIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kaW5nQgbw0IfrBAESKQoEbmFtZRgNIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nElEKFW1hbmFnaW5nX29yZ2FuaXphdGlvbhgOIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24SMgoHY29udGFjdBgPIAMoCzIhLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29udGFjdFBvaW50EisKBnBlcmlvZBgQIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kEkIKDHBheWxvYWRfdHlwZRgRIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESTAoRcGF5bG9hZF9taW1lX3R5cGUYEiADKAsyMS5nb29nbGUuZmhpci5yNC5jb3JlLkVuZHBvaW50LlBheWxvYWRNaW1lVHlwZUNvZGUSMQoHYWRkcmVzcxgTIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJsQgbw0IfrBAESKwoGaGVhZGVyGBQgAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcakgIKClN0YXR1c0NvZGUSPAoFdmFsdWUYASABKA4yLS5nb29nbGUuZmhpci5yNC5jb3JlLkVuZHBvaW50U3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmqK+YOyBSxodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2VuZHBvaW50LXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGuwBChNQYXlsb2FkTWltZVR5cGVDb2RlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SDQoFdmFsdWUYBCABKAk6ZIr5g7IFJmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWltZXR5cGVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGVKBAgBEAI6PMCf47YFA7L+5JcGMGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9FbmRwb2ludEoECAcQCEJ4Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlVnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2VuZHBvaW50X2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Endpoint.
 * Use `create(EndpointSchema)` to create a new message.
 */
exports.EndpointSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_endpoint, 0);
/**
 * Describes the message google.fhir.r4.core.Endpoint.StatusCode.
 * Use `create(Endpoint_StatusCodeSchema)` to create a new message.
 */
exports.Endpoint_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_endpoint, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Endpoint.PayloadMimeTypeCode.
 * Use `create(Endpoint_PayloadMimeTypeCodeSchema)` to create a new message.
 */
exports.Endpoint_PayloadMimeTypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_endpoint, 0, 1);
