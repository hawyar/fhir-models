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
exports.Slot_StatusCodeSchema = exports.SlotSchema = exports.file_proto_google_fhir_proto_r4_core_resources_slot = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/slot.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_slot = (0, codegenv1_1.fileDesc)("CjRwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zbG90LnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIr0KCgRTbG90EiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI+ChBzZXJ2aWNlX2NhdGVnb3J5GAsgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSOgoMc2VydmljZV90eXBlGAwgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNwoJc3BlY2lhbHR5GA0gAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSPgoQYXBwb2ludG1lbnRfdHlwZRgOIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkYKCHNjaGVkdWxlGA8gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCFPDQh+sEAfL//MIGCFNjaGVkdWxlEjwKBnN0YXR1cxgQIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuU2xvdC5TdGF0dXNDb2RlQgbw0IfrBAESMwoFc3RhcnQYESABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkluc3RhbnRCBvDQh+sEARIxCgNlbmQYEiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkluc3RhbnRCBvDQh+sEARIwCgpvdmVyYm9va2VkGBMgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEiwKB2NvbW1lbnQYFCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxqJAgoKU3RhdHVzQ29kZRI4CgV2YWx1ZRgBIAEoDjIpLmdvb2dsZS5maGlyLnI0LmNvcmUuU2xvdFN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjplivmDsgUnaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zbG90c3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGU6OMCf47YFA7L+5JcGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9TbG90SgQIBxAIQnQKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaUWdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvc2xvdF9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Slot.
 * Use `create(SlotSchema)` to create a new message.
 */
exports.SlotSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_slot, 0);
/**
 * Describes the message google.fhir.r4.core.Slot.StatusCode.
 * Use `create(Slot_StatusCodeSchema)` to create a new message.
 */
exports.Slot_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_slot, 0, 0);
