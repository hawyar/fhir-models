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
exports.DeviceDefinition_MaterialSchema = exports.DeviceDefinition_PropertySchema = exports.DeviceDefinition_CapabilitySchema = exports.DeviceDefinition_SpecializationSchema = exports.DeviceDefinition_DeviceName_TypeCodeSchema = exports.DeviceDefinition_DeviceNameSchema = exports.DeviceDefinition_ManufacturerXSchema = exports.DeviceDefinition_UdiDeviceIdentifierSchema = exports.DeviceDefinitionSchema = exports.file_proto_google_fhir_proto_r4_core_resources_device_definition = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/device_definition.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_device_definition = (0, codegenv1_1.fileDesc)("CkFwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9kZXZpY2VfZGVmaW5pdGlvbi5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSK7IAoQRGV2aWNlRGVmaW5pdGlvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISWAoVdWRpX2RldmljZV9pZGVudGlmaWVyGAsgAygLMjkuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VEZWZpbml0aW9uLlVkaURldmljZUlkZW50aWZpZXISSQoMbWFudWZhY3R1cmVyGAwgASgLMjMuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VEZWZpbml0aW9uLk1hbnVmYWN0dXJlclgSRQoLZGV2aWNlX25hbWUYDSADKAsyMC5nb29nbGUuZmhpci5yNC5jb3JlLkRldmljZURlZmluaXRpb24uRGV2aWNlTmFtZRIxCgxtb2RlbF9udW1iZXIYDiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIyCgR0eXBlGA8gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSTAoOc3BlY2lhbGl6YXRpb24YECADKAsyNC5nb29nbGUuZmhpci5yNC5jb3JlLkRldmljZURlZmluaXRpb24uU3BlY2lhbGl6YXRpb24SLAoHdmVyc2lvbhgRIAMoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjQKBnNhZmV0eRgSIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkEKEnNoZWxmX2xpZmVfc3RvcmFnZRgTIAMoCzIlLmdvb2dsZS5maGlyLnI0LmNvcmUuUHJvZHVjdFNoZWxmTGlmZRJJChhwaHlzaWNhbF9jaGFyYWN0ZXJpc3RpY3MYFCABKAsyJy5nb29nbGUuZmhpci5yNC5jb3JlLlByb2RDaGFyYWN0ZXJpc3RpYxI7Cg1sYW5ndWFnZV9jb2RlGBUgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSRAoKY2FwYWJpbGl0eRgWIAMoCzIwLmdvb2dsZS5maGlyLnI0LmNvcmUuRGV2aWNlRGVmaW5pdGlvbi5DYXBhYmlsaXR5EkAKCHByb3BlcnR5GBcgAygLMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VEZWZpbml0aW9uLlByb3BlcnR5EkEKBW93bmVyGBggASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhIyCgdjb250YWN0GBkgAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0UG9pbnQSJQoDdXJsGBogASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSNAoSb25saW5lX2luZm9ybWF0aW9uGBsgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSLQoEbm90ZRgcIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQW5ub3RhdGlvbhIvCghxdWFudGl0eRgdIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuUXVhbnRpdHkSTQoNcGFyZW50X2RldmljZRgeIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhby//zCBhBEZXZpY2VEZWZpbml0aW9uEkAKCG1hdGVyaWFsGB8gAygLMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VEZWZpbml0aW9uLk1hdGVyaWFsGtcCChNVZGlEZXZpY2VJZGVudGlmaWVyEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SPgoRZGV2aWNlX2lkZW50aWZpZXIYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0IG8NCH6wQBEjAKBmlzc3VlchgFIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpQgbw0IfrBAESNgoManVyaXNkaWN0aW9uGAYgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmlCBvDQh+sEARqnAQoNTWFudWZhY3R1cmVyWBI7CgxzdHJpbmdfdmFsdWUYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0gAUgZzdHJpbmcSRwoJcmVmZXJlbmNlGAIgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbkgAOgagg4PoBgFCCAoGY2hvaWNlGrsECgpEZXZpY2VOYW1lEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMQoEbmFtZRgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nQgbw0IfrBAESTwoEdHlwZRgFIAEoCzI5Lmdvb2dsZS5maGlyLnI0LmNvcmUuRGV2aWNlRGVmaW5pdGlvbi5EZXZpY2VOYW1lLlR5cGVDb2RlQgbw0IfrBAEakAIKCFR5cGVDb2RlEjwKBXZhbHVlGAEgASgOMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2VOYW1lVHlwZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpqivmDsgUsaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9kZXZpY2UtbmFtZXR5cGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqQAgoOU3BlY2lhbGl6YXRpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI4CgtzeXN0ZW1fdHlwZRgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nQgbw0IfrBAESLAoHdmVyc2lvbhgFIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGpsCCgpDYXBhYmlsaXR5EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoEdHlwZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESOQoLZGVzY3JpcHRpb24YBSADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBrPAgoIUHJvcGVydHkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6CgR0eXBlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARI1Cg52YWx1ZV9xdWFudGl0eRgFIAMoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuUXVhbnRpdHkSOAoKdmFsdWVfY29kZRgGIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0GtACCghNYXRlcmlhbBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEj8KCXN1YnN0YW5jZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESLwoJYWx0ZXJuYXRlGAUgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEjoKFGFsbGVyZ2VuaWNfaW5kaWNhdG9yGAYgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuOkTAn+O2BQOy/uSXBjhodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vRGV2aWNlRGVmaW5pdGlvbkoECAcQCEKBAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpeZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9kZXZpY2VfZGVmaW5pdGlvbl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.DeviceDefinition.
 * Use `create(DeviceDefinitionSchema)` to create a new message.
 */
exports.DeviceDefinitionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_definition, 0);
/**
 * Describes the message google.fhir.r4.core.DeviceDefinition.UdiDeviceIdentifier.
 * Use `create(DeviceDefinition_UdiDeviceIdentifierSchema)` to create a new message.
 */
exports.DeviceDefinition_UdiDeviceIdentifierSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_definition, 0, 0);
/**
 * Describes the message google.fhir.r4.core.DeviceDefinition.ManufacturerX.
 * Use `create(DeviceDefinition_ManufacturerXSchema)` to create a new message.
 */
exports.DeviceDefinition_ManufacturerXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_definition, 0, 1);
/**
 * Describes the message google.fhir.r4.core.DeviceDefinition.DeviceName.
 * Use `create(DeviceDefinition_DeviceNameSchema)` to create a new message.
 */
exports.DeviceDefinition_DeviceNameSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_definition, 0, 2);
/**
 * Describes the message google.fhir.r4.core.DeviceDefinition.DeviceName.TypeCode.
 * Use `create(DeviceDefinition_DeviceName_TypeCodeSchema)` to create a new message.
 */
exports.DeviceDefinition_DeviceName_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_definition, 0, 2, 0);
/**
 * Describes the message google.fhir.r4.core.DeviceDefinition.Specialization.
 * Use `create(DeviceDefinition_SpecializationSchema)` to create a new message.
 */
exports.DeviceDefinition_SpecializationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_definition, 0, 3);
/**
 * Describes the message google.fhir.r4.core.DeviceDefinition.Capability.
 * Use `create(DeviceDefinition_CapabilitySchema)` to create a new message.
 */
exports.DeviceDefinition_CapabilitySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_definition, 0, 4);
/**
 * Describes the message google.fhir.r4.core.DeviceDefinition.Property.
 * Use `create(DeviceDefinition_PropertySchema)` to create a new message.
 */
exports.DeviceDefinition_PropertySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_definition, 0, 5);
/**
 * Describes the message google.fhir.r4.core.DeviceDefinition.Material.
 * Use `create(DeviceDefinition_MaterialSchema)` to create a new message.
 */
exports.DeviceDefinition_MaterialSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_device_definition, 0, 6);