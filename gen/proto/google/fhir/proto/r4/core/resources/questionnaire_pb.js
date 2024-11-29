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
exports.Questionnaire_Item_Initial_ValueXSchema = exports.Questionnaire_Item_InitialSchema = exports.Questionnaire_Item_AnswerOption_ValueXSchema = exports.Questionnaire_Item_AnswerOptionSchema = exports.Questionnaire_Item_EnableBehaviorCodeSchema = exports.Questionnaire_Item_EnableWhen_AnswerXSchema = exports.Questionnaire_Item_EnableWhen_OperatorCodeSchema = exports.Questionnaire_Item_EnableWhenSchema = exports.Questionnaire_Item_TypeCodeSchema = exports.Questionnaire_ItemSchema = exports.Questionnaire_SubjectTypeCodeSchema = exports.Questionnaire_StatusCodeSchema = exports.QuestionnaireSchema = exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/questionnaire.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire = (0, codegenv1_1.fileDesc)("Cj1wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9xdWVzdGlvbm5haXJlLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIrU7Cg1RdWVzdGlvbm5haXJlEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SJQoDdXJsGAogASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSMwoKaWRlbnRpZmllchgLIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchIsCgd2ZXJzaW9uGAwgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKQoEbmFtZRgNIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEioKBXRpdGxlGA4gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSNAoMZGVyaXZlZF9mcm9tGA8gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5DYW5vbmljYWwSRQoGc3RhdHVzGBAgASgLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLlN0YXR1c0NvZGVCBvDQh+sEARIyCgxleHBlcmltZW50YWwYESABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SSAoMc3ViamVjdF90eXBlGBIgAygLMjIuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLlN1YmplY3RUeXBlQ29kZRIrCgRkYXRlGBMgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRIuCglwdWJsaXNoZXIYFCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIzCgdjb250YWN0GBUgAygLMiIuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0RGV0YWlsEjIKC2Rlc2NyaXB0aW9uGBYgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhI2Cgt1c2VfY29udGV4dBgXIAMoCzIhLmdvb2dsZS5maGlyLnI0LmNvcmUuVXNhZ2VDb250ZXh0EjoKDGp1cmlzZGljdGlvbhgYIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ei4KB3B1cnBvc2UYGSABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEjAKCWNvcHlyaWdodBgaIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuTWFya2Rvd24SMAoNYXBwcm92YWxfZGF0ZRgbIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZRIzChBsYXN0X3Jldmlld19kYXRlGBwgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlEjUKEGVmZmVjdGl2ZV9wZXJpb2QYHSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBIpCgRjb2RlGB4gAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmcSNQoEaXRlbRgfIAMoCzInLmdvb2dsZS5maGlyLnI0LmNvcmUuUXVlc3Rpb25uYWlyZS5JdGVtGpgCCgpTdGF0dXNDb2RlEj8KBXZhbHVlGAEgASgOMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5QdWJsaWNhdGlvblN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjptivmDsgUvaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9wdWJsaWNhdGlvbi1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqUAgoPU3ViamVjdFR5cGVDb2RlEjoKBXZhbHVlGAEgASgOMisuZ29vZ2xlLmZoaXIucjQuY29yZS5SZXNvdXJjZVR5cGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aYr5g7IFK2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVzb3VyY2UtdHlwZXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrlKQoESXRlbRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjQKB2xpbmtfaWQYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0IG8NCH6wQBEiwKCmRlZmluaXRpb24YBSABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIpCgRjb2RlGAYgAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmcSKwoGcHJlZml4GAcgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKQoEdGV4dBgIIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEkYKBHR5cGUYCSABKAsyMC5nb29nbGUuZmhpci5yNC5jb3JlLlF1ZXN0aW9ubmFpcmUuSXRlbS5UeXBlQ29kZUIG8NCH6wQBEkcKC2VuYWJsZV93aGVuGAogAygLMjIuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLkl0ZW0uRW5hYmxlV2hlbhJTCg9lbmFibGVfYmVoYXZpb3IYCyABKAsyOi5nb29nbGUuZmhpci5yNC5jb3JlLlF1ZXN0aW9ubmFpcmUuSXRlbS5FbmFibGVCZWhhdmlvckNvZGUSLgoIcmVxdWlyZWQYDCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SLQoHcmVwZWF0cxgNIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIvCglyZWFkX29ubHkYDiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SMAoKbWF4X2xlbmd0aBgPIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlchI4ChBhbnN3ZXJfdmFsdWVfc2V0GBAgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5DYW5vbmljYWwSSwoNYW5zd2VyX29wdGlvbhgRIAMoCzI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuUXVlc3Rpb25uYWlyZS5JdGVtLkFuc3dlck9wdGlvbhJACgdpbml0aWFsGBIgAygLMi8uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLkl0ZW0uSW5pdGlhbBI1CgRpdGVtGBMgAygLMicuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLkl0ZW0akQIKCFR5cGVDb2RlEkMKBXZhbHVlGAEgASgOMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlSXRlbVR5cGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246ZIr5g7IFJmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvaXRlbS10eXBlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUakAoKCkVuYWJsZVdoZW4SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI1CghxdWVzdGlvbhgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nQgbw0IfrBAESWQoIb3BlcmF0b3IYBSABKAsyPy5nb29nbGUuZmhpci5yNC5jb3JlLlF1ZXN0aW9ubmFpcmUuSXRlbS5FbmFibGVXaGVuLk9wZXJhdG9yQ29kZUIG8NCH6wQBElIKBmFuc3dlchgGIAEoCzI6Lmdvb2dsZS5maGlyLnI0LmNvcmUuUXVlc3Rpb25uYWlyZS5JdGVtLkVuYWJsZVdoZW4uQW5zd2VyWEIG8NCH6wQBGq0CCgxPcGVyYXRvckNvZGUSRwoFdmFsdWUYASABKA4yOC5nb29nbGUuZmhpci5yNC5jb3JlLlF1ZXN0aW9ubmFpcmVJdGVtT3BlcmF0b3JDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246eIr5g7IFOmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcXVlc3Rpb25uYWlyZS1lbmFibGUtb3BlcmF0b3LAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqcBAoHQW5zd2VyWBIvCgdib29sZWFuGAEgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuSAASLwoHZGVjaW1hbBgCIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbEgAEi8KB2ludGVnZXIYAyABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXJIABIpCgRkYXRlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlSAASMgoJZGF0ZV90aW1lGAUgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZUgAEikKBHRpbWUYBiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLlRpbWVIABI7CgxzdHJpbmdfdmFsdWUYByABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0gAUgZzdHJpbmcSLQoGY29kaW5nGAggASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmdIABIxCghxdWFudGl0eRgJIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuUXVhbnRpdHlIABJDCglyZWZlcmVuY2UYCiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2VIADoGoIOD6AYBQggKBmNob2ljZTo1moaToAgvb3BlcmF0b3IgPSAnZXhpc3RzJyBpbXBsaWVzIChhbnN3ZXIgaXMgQm9vbGVhbikarAIKEkVuYWJsZUJlaGF2aW9yQ29kZRJACgV2YWx1ZRgBIAEoDjIxLmdvb2dsZS5maGlyLnI0LmNvcmUuRW5hYmxlV2hlbkJlaGF2aW9yQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOniK+YOyBTpodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3F1ZXN0aW9ubmFpcmUtZW5hYmxlLWJlaGF2aW9ywJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUahwUKDEFuc3dlck9wdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uElIKBXZhbHVlGAQgASgLMjsuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLkl0ZW0uQW5zd2VyT3B0aW9uLlZhbHVlWEIG8NCH6wQBEjYKEGluaXRpYWxfc2VsZWN0ZWQYBSABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4a0gIKBlZhbHVlWBIvCgdpbnRlZ2VyGAEgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VySAASKQoEZGF0ZRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZUgAEikKBHRpbWUYAyABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLlRpbWVIABI7CgxzdHJpbmdfdmFsdWUYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0gAUgZzdHJpbmcSLQoGY29kaW5nGAUgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmdIABJDCglyZWZlcmVuY2UYBiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2VIADoGoIOD6AYBQggKBmNob2ljZRruBgoHSW5pdGlhbBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEk0KBXZhbHVlGAQgASgLMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLkl0ZW0uSW5pdGlhbC5WYWx1ZVhCBvDQh+sEARr7BAoGVmFsdWVYEi8KB2Jvb2xlYW4YASABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW5IABIvCgdkZWNpbWFsGAIgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsSAASLwoHaW50ZWdlchgDIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlckgAEikKBGRhdGUYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVIABIyCglkYXRlX3RpbWUYBSABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lSAASKQoEdGltZRgGIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuVGltZUgAEjsKDHN0cmluZ192YWx1ZRgHIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZxInCgN1cmkYCCABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaUgAEjUKCmF0dGFjaG1lbnQYCSABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkF0dGFjaG1lbnRIABItCgZjb2RpbmcYCiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZ0gAEjEKCHF1YW50aXR5GAsgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eUgAEkMKCXJlZmVyZW5jZRgMIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghSZXNvdXJjZUgAOgagg4PoBgFCCAoGY2hvaWNlOuQGmoaToAhvKHR5cGU9J2dyb3VwJyBpbXBsaWVzIGl0ZW0uZW1wdHkoKS5ub3QoKSkgYW5kICh0eXBlLnRyYWNlKCd0eXBlJyk9J2Rpc3BsYXknIGltcGxpZXMgaXRlbS50cmFjZSgnaXRlbScpLmVtcHR5KCkpmoaToAgfdHlwZSE9J2Rpc3BsYXknIG9yIGNvZGUuZW1wdHkoKZqGk6AILmFuc3dlck9wdGlvbi5lbXB0eSgpIG9yIGFuc3dlclZhbHVlU2V0LmVtcHR5KCmahpOgCOQBKHR5cGUgPSdjaG9pY2UnIG9yIHR5cGUgPSAnb3Blbi1jaG9pY2UnIG9yIHR5cGUgPSAnZGVjaW1hbCcgb3IgdHlwZSA9ICdpbnRlZ2VyJyBvciB0eXBlID0gJ2RhdGUnIG9yIHR5cGUgPSAnZGF0ZVRpbWUnIG9yIHR5cGUgPSAndGltZScgb3IgdHlwZSA9ICdzdHJpbmcnIG9yIHR5cGUgPSAncXVhbnRpdHknKSBvciAoYW5zd2VyVmFsdWVTZXQuZW1wdHkoKSBhbmQgYW5zd2VyT3B0aW9uLmVtcHR5KCkpmoaToAg5dHlwZSE9J2Rpc3BsYXknIG9yIChyZXF1aXJlZC5lbXB0eSgpIGFuZCByZXBlYXRzLmVtcHR5KCkpmoaToAg2KHR5cGUhPSdncm91cCcgYW5kIHR5cGUhPSdkaXNwbGF5Jykgb3IgaW5pdGlhbC5lbXB0eSgpmoaToAgjdHlwZSE9J2Rpc3BsYXknIG9yIHJlYWRPbmx5LmVtcHR5KCmahpOgCG4odHlwZSBpbiAoJ2Jvb2xlYW4nIHwgJ2RlY2ltYWwnIHwgJ2ludGVnZXInIHwgJ3N0cmluZycgfCAndGV4dCcgfCAndXJsJyB8ICdvcGVuLWNob2ljZScpKSBvciBtYXhMZW5ndGguZW1wdHkoKZqGk6AIJ2Fuc3dlck9wdGlvbi5lbXB0eSgpIG9yIGluaXRpYWwuZW1wdHkoKZqGk6AINmVuYWJsZVdoZW4uY291bnQoKSA+IDIgaW1wbGllcyBlbmFibGVCZWhhdmlvci5leGlzdHMoKZqGk6AIJHJlcGVhdHM9dHJ1ZSBvciBpbml0aWFsLmNvdW50KCkgPD0gMTqYAcCf47YFA7L+5JcGNWh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9RdWVzdGlvbm5haXJlmoaToAghZGVzY2VuZGFudHMoKS5saW5rSWQuaXNEaXN0aW5jdCgpmq+upAsqbmFtZS5tYXRjaGVzKCdbQS1aXShbQS1aYS16MC05X10pezAsMjU0fScpSgQIBxAIQn0KF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaWmdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvcXVlc3Rpb25uYWlyZV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.
 * Use `create(QuestionnaireSchema)` to create a new message.
 */
exports.QuestionnaireSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.StatusCode.
 * Use `create(Questionnaire_StatusCodeSchema)` to create a new message.
 */
exports.Questionnaire_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.SubjectTypeCode.
 * Use `create(Questionnaire_SubjectTypeCodeSchema)` to create a new message.
 */
exports.Questionnaire_SubjectTypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.
 * Use `create(Questionnaire_ItemSchema)` to create a new message.
 */
exports.Questionnaire_ItemSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.TypeCode.
 * Use `create(Questionnaire_Item_TypeCodeSchema)` to create a new message.
 */
exports.Questionnaire_Item_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 0);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.EnableWhen.
 * Use `create(Questionnaire_Item_EnableWhenSchema)` to create a new message.
 */
exports.Questionnaire_Item_EnableWhenSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 1);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.EnableWhen.OperatorCode.
 * Use `create(Questionnaire_Item_EnableWhen_OperatorCodeSchema)` to create a new message.
 */
exports.Questionnaire_Item_EnableWhen_OperatorCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 1, 0);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.EnableWhen.AnswerX.
 * Use `create(Questionnaire_Item_EnableWhen_AnswerXSchema)` to create a new message.
 */
exports.Questionnaire_Item_EnableWhen_AnswerXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 1, 1);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.EnableBehaviorCode.
 * Use `create(Questionnaire_Item_EnableBehaviorCodeSchema)` to create a new message.
 */
exports.Questionnaire_Item_EnableBehaviorCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 2);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.AnswerOption.
 * Use `create(Questionnaire_Item_AnswerOptionSchema)` to create a new message.
 */
exports.Questionnaire_Item_AnswerOptionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 3);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.AnswerOption.ValueX.
 * Use `create(Questionnaire_Item_AnswerOption_ValueXSchema)` to create a new message.
 */
exports.Questionnaire_Item_AnswerOption_ValueXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 3, 0);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.Initial.
 * Use `create(Questionnaire_Item_InitialSchema)` to create a new message.
 */
exports.Questionnaire_Item_InitialSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 4);
/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.Initial.ValueX.
 * Use `create(Questionnaire_Item_Initial_ValueXSchema)` to create a new message.
 */
exports.Questionnaire_Item_Initial_ValueXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 4, 0);