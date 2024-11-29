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
exports.StructureMap_Group_Rule_DependentSchema = exports.StructureMap_Group_Rule_Target_Parameter_ValueXSchema = exports.StructureMap_Group_Rule_Target_ParameterSchema = exports.StructureMap_Group_Rule_Target_TransformCodeSchema = exports.StructureMap_Group_Rule_Target_ListModeCodeSchema = exports.StructureMap_Group_Rule_Target_ContextTypeCodeSchema = exports.StructureMap_Group_Rule_TargetSchema = exports.StructureMap_Group_Rule_Source_ListModeCodeSchema = exports.StructureMap_Group_Rule_Source_DefaultValueXSchema = exports.StructureMap_Group_Rule_SourceSchema = exports.StructureMap_Group_RuleSchema = exports.StructureMap_Group_Input_ModeCodeSchema = exports.StructureMap_Group_InputSchema = exports.StructureMap_Group_TypeModeCodeSchema = exports.StructureMap_GroupSchema = exports.StructureMap_Structure_ModeCodeSchema = exports.StructureMap_StructureSchema = exports.StructureMap_StatusCodeSchema = exports.StructureMapSchema = exports.file_proto_google_fhir_proto_r4_core_resources_structure_map = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/structure_map.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_structure_map = (0, codegenv1_1.fileDesc)("Cj1wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdHJ1Y3R1cmVfbWFwLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIsdSCgxTdHJ1Y3R1cmVNYXASIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhItCgN1cmwYCiABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaUIG8NCH6wQBEjMKCmlkZW50aWZpZXIYCyADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISLAoHdmVyc2lvbhgMIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKBG5hbWUYDSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0IG8NCH6wQBEioKBXRpdGxlGA4gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSRAoGc3RhdHVzGA8gASgLMiwuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJ1Y3R1cmVNYXAuU3RhdHVzQ29kZUIG8NCH6wQBEjIKDGV4cGVyaW1lbnRhbBgQIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIrCgRkYXRlGBEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRIuCglwdWJsaXNoZXIYEiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIzCgdjb250YWN0GBMgAygLMiIuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0RGV0YWlsEjIKC2Rlc2NyaXB0aW9uGBQgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhI2Cgt1c2VfY29udGV4dBgVIAMoCzIhLmdvb2dsZS5maGlyLnI0LmNvcmUuVXNhZ2VDb250ZXh0EjoKDGp1cmlzZGljdGlvbhgWIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ei4KB3B1cnBvc2UYFyABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEjAKCWNvcHlyaWdodBgYIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuTWFya2Rvd24SPgoJc3RydWN0dXJlGBkgAygLMisuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJ1Y3R1cmVNYXAuU3RydWN0dXJlEi4KBmltcG9ydBgaIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsEj4KBWdyb3VwGBsgAygLMicuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJ1Y3R1cmVNYXAuR3JvdXBCBvDQh+sEARqYAgoKU3RhdHVzQ29kZRI/CgV2YWx1ZRgBIAEoDjIwLmdvb2dsZS5maGlyLnI0LmNvcmUuUHVibGljYXRpb25TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bYr5g7IFL2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcHVibGljYXRpb24tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUanQUKCVN0cnVjdHVyZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKA3VybBgEIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsQgbw0IfrBAESSgoEbW9kZRgFIAEoCzI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwLlN0cnVjdHVyZS5Nb2RlQ29kZUIG8NCH6wQBEioKBWFsaWFzGAYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMgoNZG9jdW1lbnRhdGlvbhgHIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGpYCCghNb2RlQ29kZRJDCgV2YWx1ZRgBIAEoDjI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwTW9kZWxNb2RlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmmK+YOyBStodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21hcC1tb2RlbC1tb2RlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa2T8KBUdyb3VwEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SLQoEbmFtZRgEIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRCBvDQh+sEARIoCgdleHRlbmRzGAUgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBJPCgl0eXBlX21vZGUYBiABKAsyNC5nb29nbGUuZmhpci5yNC5jb3JlLlN0cnVjdHVyZU1hcC5Hcm91cC5UeXBlTW9kZUNvZGVCBvDQh+sEARIyCg1kb2N1bWVudGF0aW9uGAcgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSRAoFaW5wdXQYCCADKAsyLS5nb29nbGUuZmhpci5yNC5jb3JlLlN0cnVjdHVyZU1hcC5Hcm91cC5JbnB1dEIG8NCH6wQBEkIKBHJ1bGUYCSADKAsyLC5nb29nbGUuZmhpci5yNC5jb3JlLlN0cnVjdHVyZU1hcC5Hcm91cC5SdWxlQgbw0IfrBAEaowIKDFR5cGVNb2RlQ29kZRJHCgV2YWx1ZRgBIAEoDjI4Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwR3JvdXBUeXBlTW9kZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpuivmDsgUwaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tYXAtZ3JvdXAtdHlwZS1tb2RlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUalAUKBUlucHV0EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SLQoEbmFtZRgEIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRCBvDQh+sEARIpCgR0eXBlGAUgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSTAoEbW9kZRgGIAEoCzI2Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwLkdyb3VwLklucHV0Lk1vZGVDb2RlQgbw0IfrBAESMgoNZG9jdW1lbnRhdGlvbhgHIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGpYCCghNb2RlQ29kZRJDCgV2YWx1ZRgBIAEoDjI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwSW5wdXRNb2RlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmmK+YOyBStodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21hcC1pbnB1dC1tb2RlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUakjQKBFJ1bGUSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhItCgRuYW1lGAQgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZEIG8NCH6wQBEksKBnNvdXJjZRgFIAMoCzIzLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwLkdyb3VwLlJ1bGUuU291cmNlQgbw0IfrBAESQwoGdGFyZ2V0GAYgAygLMjMuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJ1Y3R1cmVNYXAuR3JvdXAuUnVsZS5UYXJnZXQSOgoEcnVsZRgHIAMoCzIsLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwLkdyb3VwLlJ1bGUSSQoJZGVwZW5kZW50GAggAygLMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJ1Y3R1cmVNYXAuR3JvdXAuUnVsZS5EZXBlbmRlbnQSMgoNZG9jdW1lbnRhdGlvbhgJIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGtgcCgZTb3VyY2USJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIwCgdjb250ZXh0GAQgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZEIG8NCH6wQBEikKA21pbhgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlchIoCgNtYXgYBiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIpCgR0eXBlGAcgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSWAoNZGVmYXVsdF92YWx1ZRgIIAEoCzJBLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwLkdyb3VwLlJ1bGUuU291cmNlLkRlZmF1bHRWYWx1ZVgSLAoHZWxlbWVudBgJIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nElMKCWxpc3RfbW9kZRgKIAEoCzJALmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwLkdyb3VwLlJ1bGUuU291cmNlLkxpc3RNb2RlQ29kZRIpCgh2YXJpYWJsZRgLIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSLgoJY29uZGl0aW9uGAwgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKgoFY2hlY2sYDSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIwCgtsb2dfbWVzc2FnZRgOIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGsUUCg1EZWZhdWx0VmFsdWVYEjoKDWJhc2U2NF9iaW5hcnkYASABKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLkJhc2U2NEJpbmFyeUgAEi8KB2Jvb2xlYW4YAiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW5IABIzCgljYW5vbmljYWwYAyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkNhbm9uaWNhbEgAEikKBGNvZGUYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVIABIpCgRkYXRlGAUgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlSAASMgoJZGF0ZV90aW1lGAYgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZUgAEi8KB2RlY2ltYWwYByABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkRlY2ltYWxIABIlCgJpZBgIIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRIABIvCgdpbnN0YW50GAkgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnN0YW50SAASLwoHaW50ZWdlchgKIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlckgAEjEKCG1hcmtkb3duGAsgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bkgAEicKA29pZBgMIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuT2lkSAASOAoMcG9zaXRpdmVfaW50GA0gASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5Qb3NpdGl2ZUludEgAEjsKDHN0cmluZ192YWx1ZRgOIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZxIpCgR0aW1lGA8gASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5UaW1lSAASOAoMdW5zaWduZWRfaW50GBAgASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5VbnNpZ25lZEludEgAEicKA3VyaRgRIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpSAASJwoDdXJsGBIgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmxIABIpCgR1dWlkGBMgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5VdWlkSAASLwoHYWRkcmVzcxgUIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQWRkcmVzc0gAEicKA2FnZRgVIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuQWdlSAASNQoKYW5ub3RhdGlvbhgWIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQW5ub3RhdGlvbkgAEjUKCmF0dGFjaG1lbnQYFyABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkF0dGFjaG1lbnRIABJAChBjb2RlYWJsZV9jb25jZXB0GBggASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRIABItCgZjb2RpbmcYGSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZ0gAEjoKDWNvbnRhY3RfcG9pbnQYGiABKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3RQb2ludEgAEisKBWNvdW50GBsgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5Db3VudEgAEjEKCGRpc3RhbmNlGBwgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EaXN0YW5jZUgAEjEKCGR1cmF0aW9uGB0gASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EdXJhdGlvbkgAEjQKCmh1bWFuX25hbWUYHiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkh1bWFuTmFtZUgAEjUKCmlkZW50aWZpZXIYHyABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXJIABIrCgVtb25leRggIAEoCzIaLmdvb2dsZS5maGlyLnI0LmNvcmUuTW9uZXlIABItCgZwZXJpb2QYISABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZEgAEjEKCHF1YW50aXR5GCIgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eUgAEisKBXJhbmdlGCMgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYW5nZUgAEisKBXJhdGlvGCQgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYXRpb0gAEjMKCXJlZmVyZW5jZRglIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlSAASOAoMc2FtcGxlZF9kYXRhGCYgASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5TYW1wbGVkRGF0YUgAEjMKCXNpZ25hdHVyZRgnIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuU2lnbmF0dXJlSAASLQoGdGltaW5nGCggASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5UaW1pbmdIABI8Cg5jb250YWN0X2RldGFpbBgpIAEoCzIiLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29udGFjdERldGFpbEgAEjcKC2NvbnRyaWJ1dG9yGCogASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250cmlidXRvckgAEkAKEGRhdGFfcmVxdWlyZW1lbnQYKyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGFSZXF1aXJlbWVudEgAEjUKCmV4cHJlc3Npb24YLCABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkV4cHJlc3Npb25IABJIChRwYXJhbWV0ZXJfZGVmaW5pdGlvbhgtIAEoCzIoLmdvb2dsZS5maGlyLnI0LmNvcmUuUGFyYW1ldGVyRGVmaW5pdGlvbkgAEkAKEHJlbGF0ZWRfYXJ0aWZhY3QYLiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLlJlbGF0ZWRBcnRpZmFjdEgAEkQKEnRyaWdnZXJfZGVmaW5pdGlvbhgvIAEoCzImLmdvb2dsZS5maGlyLnI0LmNvcmUuVHJpZ2dlckRlZmluaXRpb25IABI6Cg11c2FnZV9jb250ZXh0GDAgASgLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Vc2FnZUNvbnRleHRIABItCgZkb3NhZ2UYMSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkRvc2FnZUgAEikKBG1ldGEYMiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGFIADoGoIOD6AYBQggKBmNob2ljZRqlAgoMTGlzdE1vZGVDb2RlEkgKBXZhbHVlGAEgASgOMjkuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJ1Y3R1cmVNYXBTb3VyY2VMaXN0TW9kZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpvivmDsgUxaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tYXAtc291cmNlLWxpc3QtbW9kZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGo4RCgZUYXJnZXQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIoCgdjb250ZXh0GAQgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBJZCgxjb250ZXh0X3R5cGUYBSABKAsyQy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cnVjdHVyZU1hcC5Hcm91cC5SdWxlLlRhcmdldC5Db250ZXh0VHlwZUNvZGUSLAoHZWxlbWVudBgGIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEikKCHZhcmlhYmxlGAcgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBJTCglsaXN0X21vZGUYCCADKAsyQC5nb29nbGUuZmhpci5yNC5jb3JlLlN0cnVjdHVyZU1hcC5Hcm91cC5SdWxlLlRhcmdldC5MaXN0TW9kZUNvZGUSLQoMbGlzdF9ydWxlX2lkGAkgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBJUCgl0cmFuc2Zvcm0YCiABKAsyQS5nb29nbGUuZmhpci5yNC5jb3JlLlN0cnVjdHVyZU1hcC5Hcm91cC5SdWxlLlRhcmdldC5UcmFuc2Zvcm1Db2RlElAKCXBhcmFtZXRlchgLIAMoCzI9Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwLkdyb3VwLlJ1bGUuVGFyZ2V0LlBhcmFtZXRlchqhAgoPQ29udGV4dFR5cGVDb2RlEkUKBXZhbHVlGAEgASgOMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJ1Y3R1cmVNYXBDb250ZXh0VHlwZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjprivmDsgUtaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tYXAtY29udGV4dC10eXBlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUapQIKDExpc3RNb2RlQ29kZRJICgV2YWx1ZRgBIAEoDjI5Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwVGFyZ2V0TGlzdE1vZGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246b4r5g7IFMWh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWFwLXRhcmdldC1saXN0LW1vZGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqaAgoNVHJhbnNmb3JtQ29kZRJDCgV2YWx1ZRgBIAEoDjI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3RydWN0dXJlTWFwVHJhbnNmb3JtQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmiK+YOyBSpodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21hcC10cmFuc2Zvcm3An+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqUBAoJUGFyYW1ldGVyEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SWwoFdmFsdWUYBCABKAsyRC5nb29nbGUuZmhpci5yNC5jb3JlLlN0cnVjdHVyZU1hcC5Hcm91cC5SdWxlLlRhcmdldC5QYXJhbWV0ZXIuVmFsdWVYQgbw0IfrBAEakQIKBlZhbHVlWBIlCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRIABI7CgxzdHJpbmdfdmFsdWUYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0gAUgZzdHJpbmcSLwoHYm9vbGVhbhgDIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbkgAEi8KB2ludGVnZXIYBCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXJIABIvCgdkZWNpbWFsGAUgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsSAA6BqCDg+gGAUIICgZjaG9pY2U6YpqGk6AIKWVsZW1lbnQuZXhpc3RzKCkgaW1wbGllcyBjb250ZXh0LmV4aXN0cygpmoaToAgtY29udGV4dC5leGlzdHMoKSBpbXBsaWVzIGNvbnRleHRUeXBlLmV4aXN0cygpGokCCglEZXBlbmRlbnQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhItCgRuYW1lGAQgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZEIG8NCH6wQBEjUKCHZhcmlhYmxlGAUgAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdCBvDQh+sEATpwwJ/jtgUDsv7klwY0aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1N0cnVjdHVyZU1hcJqvrqQLKm5hbWUubWF0Y2hlcygnW0EtWl0oW0EtWmEtejAtOV9dKXswLDI1NH0nKUoECAcQCEJ9Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlpnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL3N0cnVjdHVyZV9tYXBfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.StructureMap.
 * Use `create(StructureMapSchema)` to create a new message.
 */
exports.StructureMapSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0);
/**
 * Describes the message google.fhir.r4.core.StructureMap.StatusCode.
 * Use `create(StructureMap_StatusCodeSchema)` to create a new message.
 */
exports.StructureMap_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 0);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Structure.
 * Use `create(StructureMap_StructureSchema)` to create a new message.
 */
exports.StructureMap_StructureSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 1);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Structure.ModeCode.
 * Use `create(StructureMap_Structure_ModeCodeSchema)` to create a new message.
 */
exports.StructureMap_Structure_ModeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 1, 0);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.
 * Use `create(StructureMap_GroupSchema)` to create a new message.
 */
exports.StructureMap_GroupSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.TypeModeCode.
 * Use `create(StructureMap_Group_TypeModeCodeSchema)` to create a new message.
 */
exports.StructureMap_Group_TypeModeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 0);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Input.
 * Use `create(StructureMap_Group_InputSchema)` to create a new message.
 */
exports.StructureMap_Group_InputSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 1);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Input.ModeCode.
 * Use `create(StructureMap_Group_Input_ModeCodeSchema)` to create a new message.
 */
exports.StructureMap_Group_Input_ModeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 1, 0);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Rule.
 * Use `create(StructureMap_Group_RuleSchema)` to create a new message.
 */
exports.StructureMap_Group_RuleSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 2);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Rule.Source.
 * Use `create(StructureMap_Group_Rule_SourceSchema)` to create a new message.
 */
exports.StructureMap_Group_Rule_SourceSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 2, 0);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Rule.Source.DefaultValueX.
 * Use `create(StructureMap_Group_Rule_Source_DefaultValueXSchema)` to create a new message.
 */
exports.StructureMap_Group_Rule_Source_DefaultValueXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 2, 0, 0);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Rule.Source.ListModeCode.
 * Use `create(StructureMap_Group_Rule_Source_ListModeCodeSchema)` to create a new message.
 */
exports.StructureMap_Group_Rule_Source_ListModeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 2, 0, 1);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Rule.Target.
 * Use `create(StructureMap_Group_Rule_TargetSchema)` to create a new message.
 */
exports.StructureMap_Group_Rule_TargetSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 2, 1);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Rule.Target.ContextTypeCode.
 * Use `create(StructureMap_Group_Rule_Target_ContextTypeCodeSchema)` to create a new message.
 */
exports.StructureMap_Group_Rule_Target_ContextTypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 2, 1, 0);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Rule.Target.ListModeCode.
 * Use `create(StructureMap_Group_Rule_Target_ListModeCodeSchema)` to create a new message.
 */
exports.StructureMap_Group_Rule_Target_ListModeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 2, 1, 1);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Rule.Target.TransformCode.
 * Use `create(StructureMap_Group_Rule_Target_TransformCodeSchema)` to create a new message.
 */
exports.StructureMap_Group_Rule_Target_TransformCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 2, 1, 2);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Rule.Target.Parameter.
 * Use `create(StructureMap_Group_Rule_Target_ParameterSchema)` to create a new message.
 */
exports.StructureMap_Group_Rule_Target_ParameterSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 2, 1, 3);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Rule.Target.Parameter.ValueX.
 * Use `create(StructureMap_Group_Rule_Target_Parameter_ValueXSchema)` to create a new message.
 */
exports.StructureMap_Group_Rule_Target_Parameter_ValueXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 2, 1, 3, 0);
/**
 * Describes the message google.fhir.r4.core.StructureMap.Group.Rule.Dependent.
 * Use `create(StructureMap_Group_Rule_DependentSchema)` to create a new message.
 */
exports.StructureMap_Group_Rule_DependentSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_structure_map, 0, 2, 2, 2);
