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

// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file proto/google/fhir/proto/r4/core/resources/questionnaire.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { EnableWhenBehaviorCode_Value, PublicationStatusCode_Value, QuestionnaireItemOperatorCode_Value, QuestionnaireItemTypeCode_Value, ResourceTypeCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Attachment, Boolean, Canonical, Code, CodeableConcept, Coding, ContactDetail, Date, DateTime, Decimal, Extension, Id, Identifier, Integer, Markdown, Meta, Narrative, Period, Quantity, Reference, String, Time, Uri, UsageContext } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/questionnaire.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_questionnaire: GenFile = /*@__PURE__*/
  fileDesc("Cj1wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9xdWVzdGlvbm5haXJlLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIrU7Cg1RdWVzdGlvbm5haXJlEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SJQoDdXJsGAogASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSMwoKaWRlbnRpZmllchgLIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchIsCgd2ZXJzaW9uGAwgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKQoEbmFtZRgNIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEioKBXRpdGxlGA4gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSNAoMZGVyaXZlZF9mcm9tGA8gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5DYW5vbmljYWwSRQoGc3RhdHVzGBAgASgLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLlN0YXR1c0NvZGVCBvDQh+sEARIyCgxleHBlcmltZW50YWwYESABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SSAoMc3ViamVjdF90eXBlGBIgAygLMjIuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLlN1YmplY3RUeXBlQ29kZRIrCgRkYXRlGBMgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRIuCglwdWJsaXNoZXIYFCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIzCgdjb250YWN0GBUgAygLMiIuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0RGV0YWlsEjIKC2Rlc2NyaXB0aW9uGBYgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhI2Cgt1c2VfY29udGV4dBgXIAMoCzIhLmdvb2dsZS5maGlyLnI0LmNvcmUuVXNhZ2VDb250ZXh0EjoKDGp1cmlzZGljdGlvbhgYIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ei4KB3B1cnBvc2UYGSABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEjAKCWNvcHlyaWdodBgaIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuTWFya2Rvd24SMAoNYXBwcm92YWxfZGF0ZRgbIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZRIzChBsYXN0X3Jldmlld19kYXRlGBwgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlEjUKEGVmZmVjdGl2ZV9wZXJpb2QYHSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBIpCgRjb2RlGB4gAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmcSNQoEaXRlbRgfIAMoCzInLmdvb2dsZS5maGlyLnI0LmNvcmUuUXVlc3Rpb25uYWlyZS5JdGVtGpgCCgpTdGF0dXNDb2RlEj8KBXZhbHVlGAEgASgOMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5QdWJsaWNhdGlvblN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjptivmDsgUvaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9wdWJsaWNhdGlvbi1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqUAgoPU3ViamVjdFR5cGVDb2RlEjoKBXZhbHVlGAEgASgOMisuZ29vZ2xlLmZoaXIucjQuY29yZS5SZXNvdXJjZVR5cGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aYr5g7IFK2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVzb3VyY2UtdHlwZXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrlKQoESXRlbRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjQKB2xpbmtfaWQYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0IG8NCH6wQBEiwKCmRlZmluaXRpb24YBSABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIpCgRjb2RlGAYgAygLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmcSKwoGcHJlZml4GAcgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKQoEdGV4dBgIIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEkYKBHR5cGUYCSABKAsyMC5nb29nbGUuZmhpci5yNC5jb3JlLlF1ZXN0aW9ubmFpcmUuSXRlbS5UeXBlQ29kZUIG8NCH6wQBEkcKC2VuYWJsZV93aGVuGAogAygLMjIuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLkl0ZW0uRW5hYmxlV2hlbhJTCg9lbmFibGVfYmVoYXZpb3IYCyABKAsyOi5nb29nbGUuZmhpci5yNC5jb3JlLlF1ZXN0aW9ubmFpcmUuSXRlbS5FbmFibGVCZWhhdmlvckNvZGUSLgoIcmVxdWlyZWQYDCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SLQoHcmVwZWF0cxgNIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIvCglyZWFkX29ubHkYDiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SMAoKbWF4X2xlbmd0aBgPIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlchI4ChBhbnN3ZXJfdmFsdWVfc2V0GBAgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5DYW5vbmljYWwSSwoNYW5zd2VyX29wdGlvbhgRIAMoCzI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuUXVlc3Rpb25uYWlyZS5JdGVtLkFuc3dlck9wdGlvbhJACgdpbml0aWFsGBIgAygLMi8uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLkl0ZW0uSW5pdGlhbBI1CgRpdGVtGBMgAygLMicuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLkl0ZW0akQIKCFR5cGVDb2RlEkMKBXZhbHVlGAEgASgOMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlSXRlbVR5cGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246ZIr5g7IFJmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvaXRlbS10eXBlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUakAoKCkVuYWJsZVdoZW4SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI1CghxdWVzdGlvbhgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nQgbw0IfrBAESWQoIb3BlcmF0b3IYBSABKAsyPy5nb29nbGUuZmhpci5yNC5jb3JlLlF1ZXN0aW9ubmFpcmUuSXRlbS5FbmFibGVXaGVuLk9wZXJhdG9yQ29kZUIG8NCH6wQBElIKBmFuc3dlchgGIAEoCzI6Lmdvb2dsZS5maGlyLnI0LmNvcmUuUXVlc3Rpb25uYWlyZS5JdGVtLkVuYWJsZVdoZW4uQW5zd2VyWEIG8NCH6wQBGq0CCgxPcGVyYXRvckNvZGUSRwoFdmFsdWUYASABKA4yOC5nb29nbGUuZmhpci5yNC5jb3JlLlF1ZXN0aW9ubmFpcmVJdGVtT3BlcmF0b3JDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246eIr5g7IFOmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcXVlc3Rpb25uYWlyZS1lbmFibGUtb3BlcmF0b3LAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqcBAoHQW5zd2VyWBIvCgdib29sZWFuGAEgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuSAASLwoHZGVjaW1hbBgCIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbEgAEi8KB2ludGVnZXIYAyABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXJIABIpCgRkYXRlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlSAASMgoJZGF0ZV90aW1lGAUgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZUgAEikKBHRpbWUYBiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLlRpbWVIABI7CgxzdHJpbmdfdmFsdWUYByABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0gAUgZzdHJpbmcSLQoGY29kaW5nGAggASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmdIABIxCghxdWFudGl0eRgJIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuUXVhbnRpdHlIABJDCglyZWZlcmVuY2UYCiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2VIADoGoIOD6AYBQggKBmNob2ljZTo1moaToAgvb3BlcmF0b3IgPSAnZXhpc3RzJyBpbXBsaWVzIChhbnN3ZXIgaXMgQm9vbGVhbikarAIKEkVuYWJsZUJlaGF2aW9yQ29kZRJACgV2YWx1ZRgBIAEoDjIxLmdvb2dsZS5maGlyLnI0LmNvcmUuRW5hYmxlV2hlbkJlaGF2aW9yQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOniK+YOyBTpodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3F1ZXN0aW9ubmFpcmUtZW5hYmxlLWJlaGF2aW9ywJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUahwUKDEFuc3dlck9wdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uElIKBXZhbHVlGAQgASgLMjsuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLkl0ZW0uQW5zd2VyT3B0aW9uLlZhbHVlWEIG8NCH6wQBEjYKEGluaXRpYWxfc2VsZWN0ZWQYBSABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4a0gIKBlZhbHVlWBIvCgdpbnRlZ2VyGAEgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VySAASKQoEZGF0ZRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZUgAEikKBHRpbWUYAyABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLlRpbWVIABI7CgxzdHJpbmdfdmFsdWUYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0gAUgZzdHJpbmcSLQoGY29kaW5nGAUgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RpbmdIABJDCglyZWZlcmVuY2UYBiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2VIADoGoIOD6AYBQggKBmNob2ljZRruBgoHSW5pdGlhbBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEk0KBXZhbHVlGAQgASgLMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5RdWVzdGlvbm5haXJlLkl0ZW0uSW5pdGlhbC5WYWx1ZVhCBvDQh+sEARr7BAoGVmFsdWVYEi8KB2Jvb2xlYW4YASABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW5IABIvCgdkZWNpbWFsGAIgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsSAASLwoHaW50ZWdlchgDIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlckgAEikKBGRhdGUYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVIABIyCglkYXRlX3RpbWUYBSABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lSAASKQoEdGltZRgGIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuVGltZUgAEjsKDHN0cmluZ192YWx1ZRgHIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZxInCgN1cmkYCCABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaUgAEjUKCmF0dGFjaG1lbnQYCSABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkF0dGFjaG1lbnRIABItCgZjb2RpbmcYCiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZ0gAEjEKCHF1YW50aXR5GAsgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eUgAEkMKCXJlZmVyZW5jZRgMIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghSZXNvdXJjZUgAOgagg4PoBgFCCAoGY2hvaWNlOuQGmoaToAhvKHR5cGU9J2dyb3VwJyBpbXBsaWVzIGl0ZW0uZW1wdHkoKS5ub3QoKSkgYW5kICh0eXBlLnRyYWNlKCd0eXBlJyk9J2Rpc3BsYXknIGltcGxpZXMgaXRlbS50cmFjZSgnaXRlbScpLmVtcHR5KCkpmoaToAgfdHlwZSE9J2Rpc3BsYXknIG9yIGNvZGUuZW1wdHkoKZqGk6AILmFuc3dlck9wdGlvbi5lbXB0eSgpIG9yIGFuc3dlclZhbHVlU2V0LmVtcHR5KCmahpOgCOQBKHR5cGUgPSdjaG9pY2UnIG9yIHR5cGUgPSAnb3Blbi1jaG9pY2UnIG9yIHR5cGUgPSAnZGVjaW1hbCcgb3IgdHlwZSA9ICdpbnRlZ2VyJyBvciB0eXBlID0gJ2RhdGUnIG9yIHR5cGUgPSAnZGF0ZVRpbWUnIG9yIHR5cGUgPSAndGltZScgb3IgdHlwZSA9ICdzdHJpbmcnIG9yIHR5cGUgPSAncXVhbnRpdHknKSBvciAoYW5zd2VyVmFsdWVTZXQuZW1wdHkoKSBhbmQgYW5zd2VyT3B0aW9uLmVtcHR5KCkpmoaToAg5dHlwZSE9J2Rpc3BsYXknIG9yIChyZXF1aXJlZC5lbXB0eSgpIGFuZCByZXBlYXRzLmVtcHR5KCkpmoaToAg2KHR5cGUhPSdncm91cCcgYW5kIHR5cGUhPSdkaXNwbGF5Jykgb3IgaW5pdGlhbC5lbXB0eSgpmoaToAgjdHlwZSE9J2Rpc3BsYXknIG9yIHJlYWRPbmx5LmVtcHR5KCmahpOgCG4odHlwZSBpbiAoJ2Jvb2xlYW4nIHwgJ2RlY2ltYWwnIHwgJ2ludGVnZXInIHwgJ3N0cmluZycgfCAndGV4dCcgfCAndXJsJyB8ICdvcGVuLWNob2ljZScpKSBvciBtYXhMZW5ndGguZW1wdHkoKZqGk6AIJ2Fuc3dlck9wdGlvbi5lbXB0eSgpIG9yIGluaXRpYWwuZW1wdHkoKZqGk6AINmVuYWJsZVdoZW4uY291bnQoKSA+IDIgaW1wbGllcyBlbmFibGVCZWhhdmlvci5leGlzdHMoKZqGk6AIJHJlcGVhdHM9dHJ1ZSBvciBpbml0aWFsLmNvdW50KCkgPD0gMTqYAcCf47YFA7L+5JcGNWh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9RdWVzdGlvbm5haXJlmoaToAghZGVzY2VuZGFudHMoKS5saW5rSWQuaXNEaXN0aW5jdCgpmq+upAsqbmFtZS5tYXRjaGVzKCdbQS1aXShbQS1aYS16MC05X10pezAsMjU0fScpSgQIBxAIQn0KF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaWmdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvcXVlc3Rpb25uYWlyZV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Questionnaire.
 * A structured set of questions.
 * See http://hl7.org/fhir/StructureDefinition/Questionnaire
 *
 * @generated from message google.fhir.r4.core.Questionnaire
 */
export type Questionnaire = Message<"google.fhir.r4.core.Questionnaire"> & {
  /**
   * Logical id of this artifact
   *
   * @generated from field: google.fhir.r4.core.Id id = 1;
   */
  id?: Id;

  /**
   * Metadata about the resource
   *
   * @generated from field: google.fhir.r4.core.Meta meta = 2;
   */
  meta?: Meta;

  /**
   * A set of rules under which this content was created
   *
   * @generated from field: google.fhir.r4.core.Uri implicit_rules = 3;
   */
  implicitRules?: Uri;

  /**
   * Language of the resource content
   *
   * @generated from field: google.fhir.r4.core.Code language = 4;
   */
  language?: Code;

  /**
   * Text summary of the resource, for human interpretation
   *
   * @generated from field: google.fhir.r4.core.Narrative text = 5;
   */
  text?: Narrative;

  /**
   * Contained, inline Resources
   *
   * @generated from field: repeated google.protobuf.Any contained = 6;
   */
  contained: Any[];

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 8;
   */
  extension: Extension[];

  /**
   * Extensions that cannot be ignored
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 9;
   */
  modifierExtension: Extension[];

  /**
   * Canonical identifier for this questionnaire, represented as a URI (globally
   * unique)
   *
   * @generated from field: google.fhir.r4.core.Uri url = 10;
   */
  url?: Uri;

  /**
   * Additional identifier for the questionnaire
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 11;
   */
  identifier: Identifier[];

  /**
   * Business version of the questionnaire
   *
   * @generated from field: google.fhir.r4.core.String version = 12;
   */
  version?: String;

  /**
   * Name for this questionnaire (computer friendly)
   *
   * @generated from field: google.fhir.r4.core.String name = 13;
   */
  name?: String;

  /**
   * Name for this questionnaire (human friendly)
   *
   * @generated from field: google.fhir.r4.core.String title = 14;
   */
  title?: String;

  /**
   * Instantiates protocol or definition
   *
   * @generated from field: repeated google.fhir.r4.core.Canonical derived_from = 15;
   */
  derivedFrom: Canonical[];

  /**
   * @generated from field: google.fhir.r4.core.Questionnaire.StatusCode status = 16;
   */
  status?: Questionnaire_StatusCode;

  /**
   * For testing purposes, not real usage
   *
   * @generated from field: google.fhir.r4.core.Boolean experimental = 17;
   */
  experimental?: Boolean;

  /**
   * @generated from field: repeated google.fhir.r4.core.Questionnaire.SubjectTypeCode subject_type = 18;
   */
  subjectType: Questionnaire_SubjectTypeCode[];

  /**
   * Date last changed
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 19;
   */
  date?: DateTime;

  /**
   * Name of the publisher (organization or individual)
   *
   * @generated from field: google.fhir.r4.core.String publisher = 20;
   */
  publisher?: String;

  /**
   * Contact details for the publisher
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail contact = 21;
   */
  contact: ContactDetail[];

  /**
   * Natural language description of the questionnaire
   *
   * @generated from field: google.fhir.r4.core.Markdown description = 22;
   */
  description?: Markdown;

  /**
   * The context that the content is intended to support
   *
   * @generated from field: repeated google.fhir.r4.core.UsageContext use_context = 23;
   */
  useContext: UsageContext[];

  /**
   * Intended jurisdiction for questionnaire (if applicable)
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept jurisdiction = 24;
   */
  jurisdiction: CodeableConcept[];

  /**
   * Why this questionnaire is defined
   *
   * @generated from field: google.fhir.r4.core.Markdown purpose = 25;
   */
  purpose?: Markdown;

  /**
   * Use and/or publishing restrictions
   *
   * @generated from field: google.fhir.r4.core.Markdown copyright = 26;
   */
  copyright?: Markdown;

  /**
   * When the questionnaire was approved by publisher
   *
   * @generated from field: google.fhir.r4.core.Date approval_date = 27;
   */
  approvalDate?: Date;

  /**
   * When the questionnaire was last reviewed
   *
   * @generated from field: google.fhir.r4.core.Date last_review_date = 28;
   */
  lastReviewDate?: Date;

  /**
   * When the questionnaire is expected to be used
   *
   * @generated from field: google.fhir.r4.core.Period effective_period = 29;
   */
  effectivePeriod?: Period;

  /**
   * Concept that represents the overall questionnaire
   *
   * @generated from field: repeated google.fhir.r4.core.Coding code = 30;
   */
  code: Coding[];

  /**
   * @generated from field: repeated google.fhir.r4.core.Questionnaire.Item item = 31;
   */
  item: Questionnaire_Item[];
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.
 * Use `create(QuestionnaireSchema)` to create a new message.
 */
export const QuestionnaireSchema: GenMessage<Questionnaire> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0);

/**
 * draft | active | retired | unknown
 *
 * @generated from message google.fhir.r4.core.Questionnaire.StatusCode
 */
export type Questionnaire_StatusCode = Message<"google.fhir.r4.core.Questionnaire.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.PublicationStatusCode.Value value = 1;
   */
  value: PublicationStatusCode_Value;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[];
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.StatusCode.
 * Use `create(Questionnaire_StatusCodeSchema)` to create a new message.
 */
export const Questionnaire_StatusCodeSchema: GenMessage<Questionnaire_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 0);

/**
 * Resource that can be subject of QuestionnaireResponse
 *
 * @generated from message google.fhir.r4.core.Questionnaire.SubjectTypeCode
 */
export type Questionnaire_SubjectTypeCode = Message<"google.fhir.r4.core.Questionnaire.SubjectTypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ResourceTypeCode.Value value = 1;
   */
  value: ResourceTypeCode_Value;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[];
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.SubjectTypeCode.
 * Use `create(Questionnaire_SubjectTypeCodeSchema)` to create a new message.
 */
export const Questionnaire_SubjectTypeCodeSchema: GenMessage<Questionnaire_SubjectTypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 1);

/**
 * Questions and sections within the Questionnaire
 *
 * @generated from message google.fhir.r4.core.Questionnaire.Item
 */
export type Questionnaire_Item = Message<"google.fhir.r4.core.Questionnaire.Item"> & {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 2;
   */
  extension: Extension[];

  /**
   * Extensions that cannot be ignored even if unrecognized
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 3;
   */
  modifierExtension: Extension[];

  /**
   * Unique id for item in questionnaire
   *
   * @generated from field: google.fhir.r4.core.String link_id = 4;
   */
  linkId?: String;

  /**
   * ElementDefinition - details for the item
   *
   * @generated from field: google.fhir.r4.core.Uri definition = 5;
   */
  definition?: Uri;

  /**
   * Corresponding concept for this item in a terminology
   *
   * @generated from field: repeated google.fhir.r4.core.Coding code = 6;
   */
  code: Coding[];

  /**
   * E.g. "1(a)", "2.5.3"
   *
   * @generated from field: google.fhir.r4.core.String prefix = 7;
   */
  prefix?: String;

  /**
   * Primary text for the item
   *
   * @generated from field: google.fhir.r4.core.String text = 8;
   */
  text?: String;

  /**
   * @generated from field: google.fhir.r4.core.Questionnaire.Item.TypeCode type = 9;
   */
  type?: Questionnaire_Item_TypeCode;

  /**
   * @generated from field: repeated google.fhir.r4.core.Questionnaire.Item.EnableWhen enable_when = 10;
   */
  enableWhen: Questionnaire_Item_EnableWhen[];

  /**
   * @generated from field: google.fhir.r4.core.Questionnaire.Item.EnableBehaviorCode enable_behavior = 11;
   */
  enableBehavior?: Questionnaire_Item_EnableBehaviorCode;

  /**
   * Whether the item must be included in data results
   *
   * @generated from field: google.fhir.r4.core.Boolean required = 12;
   */
  required?: Boolean;

  /**
   * Whether the item may repeat
   *
   * @generated from field: google.fhir.r4.core.Boolean repeats = 13;
   */
  repeats?: Boolean;

  /**
   * Don't allow human editing
   *
   * @generated from field: google.fhir.r4.core.Boolean read_only = 14;
   */
  readOnly?: Boolean;

  /**
   * No more than this many characters
   *
   * @generated from field: google.fhir.r4.core.Integer max_length = 15;
   */
  maxLength?: Integer;

  /**
   * Valueset containing permitted answers
   *
   * @generated from field: google.fhir.r4.core.Canonical answer_value_set = 16;
   */
  answerValueSet?: Canonical;

  /**
   * @generated from field: repeated google.fhir.r4.core.Questionnaire.Item.AnswerOption answer_option = 17;
   */
  answerOption: Questionnaire_Item_AnswerOption[];

  /**
   * @generated from field: repeated google.fhir.r4.core.Questionnaire.Item.Initial initial = 18;
   */
  initial: Questionnaire_Item_Initial[];

  /**
   * Nested questionnaire items
   *
   * @generated from field: repeated google.fhir.r4.core.Questionnaire.Item item = 19;
   */
  item: Questionnaire_Item[];
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.
 * Use `create(Questionnaire_ItemSchema)` to create a new message.
 */
export const Questionnaire_ItemSchema: GenMessage<Questionnaire_Item> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2);

/**
 * group | display | boolean | decimal | integer | date | dateTime +
 *
 * @generated from message google.fhir.r4.core.Questionnaire.Item.TypeCode
 */
export type Questionnaire_Item_TypeCode = Message<"google.fhir.r4.core.Questionnaire.Item.TypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.QuestionnaireItemTypeCode.Value value = 1;
   */
  value: QuestionnaireItemTypeCode_Value;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[];
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.TypeCode.
 * Use `create(Questionnaire_Item_TypeCodeSchema)` to create a new message.
 */
export const Questionnaire_Item_TypeCodeSchema: GenMessage<Questionnaire_Item_TypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 0);

/**
 * Only allow data when
 *
 * @generated from message google.fhir.r4.core.Questionnaire.Item.EnableWhen
 */
export type Questionnaire_Item_EnableWhen = Message<"google.fhir.r4.core.Questionnaire.Item.EnableWhen"> & {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 2;
   */
  extension: Extension[];

  /**
   * Extensions that cannot be ignored even if unrecognized
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 3;
   */
  modifierExtension: Extension[];

  /**
   * Question that determines whether item is enabled
   *
   * @generated from field: google.fhir.r4.core.String question = 4;
   */
  question?: String;

  /**
   * @generated from field: google.fhir.r4.core.Questionnaire.Item.EnableWhen.OperatorCode operator = 5;
   */
  operator?: Questionnaire_Item_EnableWhen_OperatorCode;

  /**
   * @generated from field: google.fhir.r4.core.Questionnaire.Item.EnableWhen.AnswerX answer = 6;
   */
  answer?: Questionnaire_Item_EnableWhen_AnswerX;
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.EnableWhen.
 * Use `create(Questionnaire_Item_EnableWhenSchema)` to create a new message.
 */
export const Questionnaire_Item_EnableWhenSchema: GenMessage<Questionnaire_Item_EnableWhen> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 1);

/**
 * exists | = | != | > | < | >= | <=
 *
 * @generated from message google.fhir.r4.core.Questionnaire.Item.EnableWhen.OperatorCode
 */
export type Questionnaire_Item_EnableWhen_OperatorCode = Message<"google.fhir.r4.core.Questionnaire.Item.EnableWhen.OperatorCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.QuestionnaireItemOperatorCode.Value value = 1;
   */
  value: QuestionnaireItemOperatorCode_Value;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[];
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.EnableWhen.OperatorCode.
 * Use `create(Questionnaire_Item_EnableWhen_OperatorCodeSchema)` to create a new message.
 */
export const Questionnaire_Item_EnableWhen_OperatorCodeSchema: GenMessage<Questionnaire_Item_EnableWhen_OperatorCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 1, 0);

/**
 * Value for question comparison based on operator
 *
 * @generated from message google.fhir.r4.core.Questionnaire.Item.EnableWhen.AnswerX
 */
export type Questionnaire_Item_EnableWhen_AnswerX = Message<"google.fhir.r4.core.Questionnaire.Item.EnableWhen.AnswerX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Questionnaire.Item.EnableWhen.AnswerX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Boolean boolean = 1;
     */
    value: Boolean;
    case: "boolean";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Decimal decimal = 2;
     */
    value: Decimal;
    case: "decimal";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Integer integer = 3;
     */
    value: Integer;
    case: "integer";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Date date = 4;
     */
    value: Date;
    case: "date";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 5;
     */
    value: DateTime;
    case: "dateTime";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Time time = 6;
     */
    value: Time;
    case: "time";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 7 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Coding coding = 8;
     */
    value: Coding;
    case: "coding";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Quantity quantity = 9;
     */
    value: Quantity;
    case: "quantity";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Reference reference = 10;
     */
    value: Reference;
    case: "reference";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.EnableWhen.AnswerX.
 * Use `create(Questionnaire_Item_EnableWhen_AnswerXSchema)` to create a new message.
 */
export const Questionnaire_Item_EnableWhen_AnswerXSchema: GenMessage<Questionnaire_Item_EnableWhen_AnswerX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 1, 1);

/**
 * all | any
 *
 * @generated from message google.fhir.r4.core.Questionnaire.Item.EnableBehaviorCode
 */
export type Questionnaire_Item_EnableBehaviorCode = Message<"google.fhir.r4.core.Questionnaire.Item.EnableBehaviorCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.EnableWhenBehaviorCode.Value value = 1;
   */
  value: EnableWhenBehaviorCode_Value;

  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[];
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.EnableBehaviorCode.
 * Use `create(Questionnaire_Item_EnableBehaviorCodeSchema)` to create a new message.
 */
export const Questionnaire_Item_EnableBehaviorCodeSchema: GenMessage<Questionnaire_Item_EnableBehaviorCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 2);

/**
 * Permitted answer
 *
 * @generated from message google.fhir.r4.core.Questionnaire.Item.AnswerOption
 */
export type Questionnaire_Item_AnswerOption = Message<"google.fhir.r4.core.Questionnaire.Item.AnswerOption"> & {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 2;
   */
  extension: Extension[];

  /**
   * Extensions that cannot be ignored even if unrecognized
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 3;
   */
  modifierExtension: Extension[];

  /**
   * @generated from field: google.fhir.r4.core.Questionnaire.Item.AnswerOption.ValueX value = 4;
   */
  value?: Questionnaire_Item_AnswerOption_ValueX;

  /**
   * Whether option is selected by default
   *
   * @generated from field: google.fhir.r4.core.Boolean initial_selected = 5;
   */
  initialSelected?: Boolean;
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.AnswerOption.
 * Use `create(Questionnaire_Item_AnswerOptionSchema)` to create a new message.
 */
export const Questionnaire_Item_AnswerOptionSchema: GenMessage<Questionnaire_Item_AnswerOption> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 3);

/**
 * Answer value
 *
 * @generated from message google.fhir.r4.core.Questionnaire.Item.AnswerOption.ValueX
 */
export type Questionnaire_Item_AnswerOption_ValueX = Message<"google.fhir.r4.core.Questionnaire.Item.AnswerOption.ValueX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Questionnaire.Item.AnswerOption.ValueX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Integer integer = 1;
     */
    value: Integer;
    case: "integer";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Date date = 2;
     */
    value: Date;
    case: "date";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Time time = 3;
     */
    value: Time;
    case: "time";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 4 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Coding coding = 5;
     */
    value: Coding;
    case: "coding";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Reference reference = 6;
     */
    value: Reference;
    case: "reference";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.AnswerOption.ValueX.
 * Use `create(Questionnaire_Item_AnswerOption_ValueXSchema)` to create a new message.
 */
export const Questionnaire_Item_AnswerOption_ValueXSchema: GenMessage<Questionnaire_Item_AnswerOption_ValueX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 3, 0);

/**
 * Initial value(s) when item is first rendered
 *
 * @generated from message google.fhir.r4.core.Questionnaire.Item.Initial
 */
export type Questionnaire_Item_Initial = Message<"google.fhir.r4.core.Questionnaire.Item.Initial"> & {
  /**
   * Unique id for inter-element referencing
   *
   * @generated from field: google.fhir.r4.core.String id = 1;
   */
  id?: String;

  /**
   * Additional content defined by implementations
   *
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 2;
   */
  extension: Extension[];

  /**
   * Extensions that cannot be ignored even if unrecognized
   *
   * @generated from field: repeated google.fhir.r4.core.Extension modifier_extension = 3;
   */
  modifierExtension: Extension[];

  /**
   * @generated from field: google.fhir.r4.core.Questionnaire.Item.Initial.ValueX value = 4;
   */
  value?: Questionnaire_Item_Initial_ValueX;
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.Initial.
 * Use `create(Questionnaire_Item_InitialSchema)` to create a new message.
 */
export const Questionnaire_Item_InitialSchema: GenMessage<Questionnaire_Item_Initial> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 4);

/**
 * Actual value for initializing the question
 *
 * @generated from message google.fhir.r4.core.Questionnaire.Item.Initial.ValueX
 */
export type Questionnaire_Item_Initial_ValueX = Message<"google.fhir.r4.core.Questionnaire.Item.Initial.ValueX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Questionnaire.Item.Initial.ValueX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Boolean boolean = 1;
     */
    value: Boolean;
    case: "boolean";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Decimal decimal = 2;
     */
    value: Decimal;
    case: "decimal";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Integer integer = 3;
     */
    value: Integer;
    case: "integer";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Date date = 4;
     */
    value: Date;
    case: "date";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 5;
     */
    value: DateTime;
    case: "dateTime";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Time time = 6;
     */
    value: Time;
    case: "time";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 7 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Uri uri = 8;
     */
    value: Uri;
    case: "uri";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Attachment attachment = 9;
     */
    value: Attachment;
    case: "attachment";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Coding coding = 10;
     */
    value: Coding;
    case: "coding";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Quantity quantity = 11;
     */
    value: Quantity;
    case: "quantity";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Reference reference = 12;
     */
    value: Reference;
    case: "reference";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.Questionnaire.Item.Initial.ValueX.
 * Use `create(Questionnaire_Item_Initial_ValueXSchema)` to create a new message.
 */
export const Questionnaire_Item_Initial_ValueXSchema: GenMessage<Questionnaire_Item_Initial_ValueX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_questionnaire, 0, 2, 4, 0);

