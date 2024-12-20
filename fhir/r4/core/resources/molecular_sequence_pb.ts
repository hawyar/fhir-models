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
// @generated from file proto/google/fhir/proto/r4/core/resources/molecular_sequence.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { OrientationTypeCode_Value, QualityTypeCode_Value, RepositoryTypeCode_Value, SequenceTypeCode_Value, StrandTypeCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Boolean, Code, CodeableConcept, Decimal, Extension, Id, Identifier, Integer, Meta, Narrative, Quantity, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/molecular_sequence.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_molecular_sequence: GenFile = /*@__PURE__*/
  fileDesc("CkJwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tb2xlY3VsYXJfc2VxdWVuY2UucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUioTkKEU1vbGVjdWxhclNlcXVlbmNlEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI9CgR0eXBlGAsgASgLMi8uZ29vZ2xlLmZoaXIucjQuY29yZS5Nb2xlY3VsYXJTZXF1ZW5jZS5UeXBlQ29kZRI/ChFjb29yZGluYXRlX3N5c3RlbRgMIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlckIG8NCH6wQBEj4KB3BhdGllbnQYDSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIN8v/8wgYHUGF0aWVudBJACghzcGVjaW1lbhgOIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghTcGVjaW1lbhI8CgZkZXZpY2UYDyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIM8v/8wgYGRGV2aWNlEkUKCXBlcmZvcm1lchgQIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24SLwoIcXVhbnRpdHkYESABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLlF1YW50aXR5EkoKDXJlZmVyZW5jZV9zZXEYEiABKAsyMy5nb29nbGUuZmhpci5yNC5jb3JlLk1vbGVjdWxhclNlcXVlbmNlLlJlZmVyZW5jZVNlcRI/Cgd2YXJpYW50GBMgAygLMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5Nb2xlY3VsYXJTZXF1ZW5jZS5WYXJpYW50EjEKDG9ic2VydmVkX3NlcRgUIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEj8KB3F1YWxpdHkYFSADKAsyLi5nb29nbGUuZmhpci5yNC5jb3JlLk1vbGVjdWxhclNlcXVlbmNlLlF1YWxpdHkSMwoNcmVhZF9jb3ZlcmFnZRgWIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlchJFCgpyZXBvc2l0b3J5GBcgAygLMjEuZ29vZ2xlLmZoaXIucjQuY29yZS5Nb2xlY3VsYXJTZXF1ZW5jZS5SZXBvc2l0b3J5EkgKB3BvaW50ZXIYGCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIX8v/8wgYRTW9sZWN1bGFyU2VxdWVuY2USUgoRc3RydWN0dXJlX3ZhcmlhbnQYGSADKAsyNy5nb29nbGUuZmhpci5yNC5jb3JlLk1vbGVjdWxhclNlcXVlbmNlLlN0cnVjdHVyZVZhcmlhbnQajAIKCFR5cGVDb2RlEjoKBXZhbHVlGAEgASgOMisuZ29vZ2xlLmZoaXIucjQuY29yZS5TZXF1ZW5jZVR5cGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aIr5g7IFKmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvc2VxdWVuY2UtdHlwZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGvULCgxSZWZlcmVuY2VTZXESJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI4CgpjaHJvbW9zb21lGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSMQoMZ2Vub21lX2J1aWxkGAUgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSWAoLb3JpZW50YXRpb24YBiABKAsyQy5nb29nbGUuZmhpci5yNC5jb3JlLk1vbGVjdWxhclNlcXVlbmNlLlJlZmVyZW5jZVNlcS5PcmllbnRhdGlvbkNvZGUSPgoQcmVmZXJlbmNlX3NlcV9pZBgHIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0ElYKFXJlZmVyZW5jZV9zZXFfcG9pbnRlchgIIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhfy//zCBhFNb2xlY3VsYXJTZXF1ZW5jZRI5ChRyZWZlcmVuY2Vfc2VxX3N0cmluZxgJIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEk4KBnN0cmFuZBgKIAEoCzI+Lmdvb2dsZS5maGlyLnI0LmNvcmUuTW9sZWN1bGFyU2VxdWVuY2UuUmVmZXJlbmNlU2VxLlN0cmFuZENvZGUSMgoMd2luZG93X3N0YXJ0GAsgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VyEjAKCndpbmRvd19lbmQYDCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXIamQIKD09yaWVudGF0aW9uQ29kZRI9CgV2YWx1ZRgBIAEoDjIuLmdvb2dsZS5maGlyLnI0LmNvcmUuT3JpZW50YXRpb25UeXBlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmuK+YOyBS1odHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L29yaWVudGF0aW9uLXR5cGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqKAgoKU3RyYW5kQ29kZRI4CgV2YWx1ZRgBIAEoDjIpLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyYW5kVHlwZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpmivmDsgUoaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zdHJhbmQtdHlwZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlOtMBmoaToAheKGNocm9tb3NvbWUuZW1wdHkoKSBhbmQgZ2Vub21lQnVpbGQuZW1wdHkoKSkgb3IgKGNocm9tb3NvbWUuZXhpc3RzKCkgYW5kIGdlbm9tZUJ1aWxkLmV4aXN0cygpKZqGk6AIaShnZW5vbWVCdWlsZC5jb3VudCgpK3JlZmVyZW5jZVNlcUlkLmNvdW50KCkrIHJlZmVyZW5jZVNlcVBvaW50ZXIuY291bnQoKSsgcmVmZXJlbmNlU2VxU3RyaW5nLmNvdW50KCkpID0gMRreAwoHVmFyaWFudBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEisKBXN0YXJ0GAQgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VyEikKA2VuZBgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlchI0Cg9vYnNlcnZlZF9hbGxlbGUYBiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxI1ChByZWZlcmVuY2VfYWxsZWxlGAcgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKgoFY2lnYXIYCCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJKCg92YXJpYW50X3BvaW50ZXIYCSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIR8v/8wgYLT2JzZXJ2YXRpb24a4Q0KB1F1YWxpdHkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJNCgR0eXBlGAQgASgLMjcuZ29vZ2xlLmZoaXIucjQuY29yZS5Nb2xlY3VsYXJTZXF1ZW5jZS5RdWFsaXR5LlR5cGVDb2RlQgbw0IfrBAESPwoRc3RhbmRhcmRfc2VxdWVuY2UYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIrCgVzdGFydBgGIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlchIpCgNlbmQYByABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXISLAoFc2NvcmUYCCABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLlF1YW50aXR5EjQKBm1ldGhvZBgJIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjcKCHRydXRoX3RwGAogASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsUgd0cnV0aFRQEjcKCHF1ZXJ5X3RwGAsgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsUgdxdWVyeVRQEjcKCHRydXRoX2ZuGAwgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsUgd0cnV0aEZOEjcKCHF1ZXJ5X2ZwGA0gASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsUgdxdWVyeUZQEjEKBWd0X2ZwGA4gASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsUgRndEZQEi8KCXByZWNpc2lvbhgPIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbBIsCgZyZWNhbGwYECABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkRlY2ltYWwSLQoHZl9zY29yZRgRIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbBI/CgNyb2MYEiABKAsyMi5nb29nbGUuZmhpci5yNC5jb3JlLk1vbGVjdWxhclNlcXVlbmNlLlF1YWxpdHkuUm9jGooCCghUeXBlQ29kZRI5CgV2YWx1ZRgBIAEoDjIqLmdvb2dsZS5maGlyLnI0LmNvcmUuUXVhbGl0eVR5cGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246Z4r5g7IFKWh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcXVhbGl0eS10eXBlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa/gMKA1JvYxInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEisKBXNjb3JlGAQgAygLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VyEjMKBm51bV90cBgFIAMoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlclIFbnVtVFASMwoGbnVtX2ZwGAYgAygLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VyUgVudW1GUBIzCgZudW1fZm4YByADKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXJSBW51bUZOEi8KCXByZWNpc2lvbhgIIAMoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbBIxCgtzZW5zaXRpdml0eRgJIAMoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbBIvCglmX21lYXN1cmUYCiADKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkRlY2ltYWwa8QUKClJlcG9zaXRvcnkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJQCgR0eXBlGAQgASgLMjouZ29vZ2xlLmZoaXIucjQuY29yZS5Nb2xlY3VsYXJTZXF1ZW5jZS5SZXBvc2l0b3J5LlR5cGVDb2RlQgbw0IfrBAESJQoDdXJsGAUgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKQoEbmFtZRgGIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEi8KCmRhdGFzZXRfaWQYByABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIyCg12YXJpYW50c2V0X2lkGAggASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSLwoKcmVhZHNldF9pZBgJIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGpACCghUeXBlQ29kZRI8CgV2YWx1ZRgBIAEoDjItLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVwb3NpdG9yeVR5cGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aor5g7IFLGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVwb3NpdG9yeS10eXBlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa0QcKEFN0cnVjdHVyZVZhcmlhbnQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6Cgx2YXJpYW50X3R5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIrCgVleGFjdBgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIsCgZsZW5ndGgYBiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXISTAoFb3V0ZXIYByABKAsyPS5nb29nbGUuZmhpci5yNC5jb3JlLk1vbGVjdWxhclNlcXVlbmNlLlN0cnVjdHVyZVZhcmlhbnQuT3V0ZXISTAoFaW5uZXIYCCABKAsyPS5nb29nbGUuZmhpci5yNC5jb3JlLk1vbGVjdWxhclNlcXVlbmNlLlN0cnVjdHVyZVZhcmlhbnQuSW5uZXIa9wEKBU91dGVyEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SKwoFc3RhcnQYBCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXISKQoDZW5kGAUgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VyGvcBCgVJbm5lchInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEisKBXN0YXJ0GAQgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VyEikKA2VuZBgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlcjp3wJ/jtgUDsv7klwY5aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL01vbGVjdWxhclNlcXVlbmNlmoaToAgsY29vcmRpbmF0ZVN5c3RlbSA9IDEgb3IgY29vcmRpbmF0ZVN5c3RlbSA9IDBKBAgHEAhCggEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaX2dpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvbW9sZWN1bGFyX3NlcXVlbmNlX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for MolecularSequence.
 * Information about a biological sequence.
 * See http://hl7.org/fhir/StructureDefinition/MolecularSequence
 *
 * @generated from message google.fhir.r4.core.MolecularSequence
 */
export type MolecularSequence = Message<"google.fhir.r4.core.MolecularSequence"> & {
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
   * Unique ID for this particular sequence. This is a FHIR-defined id
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * @generated from field: google.fhir.r4.core.MolecularSequence.TypeCode type = 11;
   */
  type?: MolecularSequence_TypeCode;

  /**
   * Base number of coordinate system (0 for 0-based numbering or coordinates,
   * inclusive start, exclusive end, 1 for 1-based numbering, inclusive start,
   * inclusive end)
   *
   * @generated from field: google.fhir.r4.core.Integer coordinate_system = 12;
   */
  coordinateSystem?: Integer;

  /**
   * Who and/or what this is about
   *
   * @generated from field: google.fhir.r4.core.Reference patient = 13;
   */
  patient?: Reference;

  /**
   * Specimen used for sequencing
   *
   * @generated from field: google.fhir.r4.core.Reference specimen = 14;
   */
  specimen?: Reference;

  /**
   * The method for sequencing
   *
   * @generated from field: google.fhir.r4.core.Reference device = 15;
   */
  device?: Reference;

  /**
   * Who should be responsible for test result
   *
   * @generated from field: google.fhir.r4.core.Reference performer = 16;
   */
  performer?: Reference;

  /**
   * The number of copies of the sequence of interest.  (RNASeq)
   *
   * @generated from field: google.fhir.r4.core.Quantity quantity = 17;
   */
  quantity?: Quantity;

  /**
   * @generated from field: google.fhir.r4.core.MolecularSequence.ReferenceSeq reference_seq = 18;
   */
  referenceSeq?: MolecularSequence_ReferenceSeq;

  /**
   * @generated from field: repeated google.fhir.r4.core.MolecularSequence.Variant variant = 19;
   */
  variant: MolecularSequence_Variant[];

  /**
   * Sequence that was observed
   *
   * @generated from field: google.fhir.r4.core.String observed_seq = 20;
   */
  observedSeq?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.MolecularSequence.Quality quality = 21;
   */
  quality: MolecularSequence_Quality[];

  /**
   * Average number of reads representing a given nucleotide in the
   * reconstructed sequence
   *
   * @generated from field: google.fhir.r4.core.Integer read_coverage = 22;
   */
  readCoverage?: Integer;

  /**
   * @generated from field: repeated google.fhir.r4.core.MolecularSequence.Repository repository = 23;
   */
  repository: MolecularSequence_Repository[];

  /**
   * Pointer to next atomic sequence
   *
   * @generated from field: repeated google.fhir.r4.core.Reference pointer = 24;
   */
  pointer: Reference[];

  /**
   * @generated from field: repeated google.fhir.r4.core.MolecularSequence.StructureVariant structure_variant = 25;
   */
  structureVariant: MolecularSequence_StructureVariant[];
};

/**
 * Describes the message google.fhir.r4.core.MolecularSequence.
 * Use `create(MolecularSequenceSchema)` to create a new message.
 */
export const MolecularSequenceSchema: GenMessage<MolecularSequence> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0);

/**
 * aa | dna | rna
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.TypeCode
 */
export type MolecularSequence_TypeCode = Message<"google.fhir.r4.core.MolecularSequence.TypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.SequenceTypeCode.Value value = 1;
   */
  value: SequenceTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.MolecularSequence.TypeCode.
 * Use `create(MolecularSequence_TypeCodeSchema)` to create a new message.
 */
export const MolecularSequence_TypeCodeSchema: GenMessage<MolecularSequence_TypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 0);

/**
 * A sequence used as reference
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.ReferenceSeq
 */
export type MolecularSequence_ReferenceSeq = Message<"google.fhir.r4.core.MolecularSequence.ReferenceSeq"> & {
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
   * Chromosome containing genetic finding
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept chromosome = 4;
   */
  chromosome?: CodeableConcept;

  /**
   * The Genome Build used for reference, following GRCh build versions e.g.
   * 'GRCh 37'
   *
   * @generated from field: google.fhir.r4.core.String genome_build = 5;
   */
  genomeBuild?: String;

  /**
   * @generated from field: google.fhir.r4.core.MolecularSequence.ReferenceSeq.OrientationCode orientation = 6;
   */
  orientation?: MolecularSequence_ReferenceSeq_OrientationCode;

  /**
   * Reference identifier
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept reference_seq_id = 7;
   */
  referenceSeqId?: CodeableConcept;

  /**
   * A pointer to another MolecularSequence entity as reference sequence
   *
   * @generated from field: google.fhir.r4.core.Reference reference_seq_pointer = 8;
   */
  referenceSeqPointer?: Reference;

  /**
   * A string to represent reference sequence
   *
   * @generated from field: google.fhir.r4.core.String reference_seq_string = 9;
   */
  referenceSeqString?: String;

  /**
   * @generated from field: google.fhir.r4.core.MolecularSequence.ReferenceSeq.StrandCode strand = 10;
   */
  strand?: MolecularSequence_ReferenceSeq_StrandCode;

  /**
   * Start position of the window on the  reference sequence
   *
   * @generated from field: google.fhir.r4.core.Integer window_start = 11;
   */
  windowStart?: Integer;

  /**
   * End position of the window on the reference sequence
   *
   * @generated from field: google.fhir.r4.core.Integer window_end = 12;
   */
  windowEnd?: Integer;
};

/**
 * Describes the message google.fhir.r4.core.MolecularSequence.ReferenceSeq.
 * Use `create(MolecularSequence_ReferenceSeqSchema)` to create a new message.
 */
export const MolecularSequence_ReferenceSeqSchema: GenMessage<MolecularSequence_ReferenceSeq> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 1);

/**
 * sense | antisense
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.ReferenceSeq.OrientationCode
 */
export type MolecularSequence_ReferenceSeq_OrientationCode = Message<"google.fhir.r4.core.MolecularSequence.ReferenceSeq.OrientationCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.OrientationTypeCode.Value value = 1;
   */
  value: OrientationTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.MolecularSequence.ReferenceSeq.OrientationCode.
 * Use `create(MolecularSequence_ReferenceSeq_OrientationCodeSchema)` to create a new message.
 */
export const MolecularSequence_ReferenceSeq_OrientationCodeSchema: GenMessage<MolecularSequence_ReferenceSeq_OrientationCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 1, 0);

/**
 * watson | crick
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.ReferenceSeq.StrandCode
 */
export type MolecularSequence_ReferenceSeq_StrandCode = Message<"google.fhir.r4.core.MolecularSequence.ReferenceSeq.StrandCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.StrandTypeCode.Value value = 1;
   */
  value: StrandTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.MolecularSequence.ReferenceSeq.StrandCode.
 * Use `create(MolecularSequence_ReferenceSeq_StrandCodeSchema)` to create a new message.
 */
export const MolecularSequence_ReferenceSeq_StrandCodeSchema: GenMessage<MolecularSequence_ReferenceSeq_StrandCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 1, 1);

/**
 * Variant in sequence
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.Variant
 */
export type MolecularSequence_Variant = Message<"google.fhir.r4.core.MolecularSequence.Variant"> & {
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
   * Start position of the variant on the  reference sequence
   *
   * @generated from field: google.fhir.r4.core.Integer start = 4;
   */
  start?: Integer;

  /**
   * End position of the variant on the reference sequence
   *
   * @generated from field: google.fhir.r4.core.Integer end = 5;
   */
  end?: Integer;

  /**
   * Allele that was observed
   *
   * @generated from field: google.fhir.r4.core.String observed_allele = 6;
   */
  observedAllele?: String;

  /**
   * Allele in the reference sequence
   *
   * @generated from field: google.fhir.r4.core.String reference_allele = 7;
   */
  referenceAllele?: String;

  /**
   * Extended CIGAR string for aligning the sequence with reference bases
   *
   * @generated from field: google.fhir.r4.core.String cigar = 8;
   */
  cigar?: String;

  /**
   * Pointer to observed variant information
   *
   * @generated from field: google.fhir.r4.core.Reference variant_pointer = 9;
   */
  variantPointer?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.MolecularSequence.Variant.
 * Use `create(MolecularSequence_VariantSchema)` to create a new message.
 */
export const MolecularSequence_VariantSchema: GenMessage<MolecularSequence_Variant> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 2);

/**
 * An set of value as quality of sequence
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.Quality
 */
export type MolecularSequence_Quality = Message<"google.fhir.r4.core.MolecularSequence.Quality"> & {
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
   * @generated from field: google.fhir.r4.core.MolecularSequence.Quality.TypeCode type = 4;
   */
  type?: MolecularSequence_Quality_TypeCode;

  /**
   * Standard sequence for comparison
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept standard_sequence = 5;
   */
  standardSequence?: CodeableConcept;

  /**
   * Start position of the sequence
   *
   * @generated from field: google.fhir.r4.core.Integer start = 6;
   */
  start?: Integer;

  /**
   * End position of the sequence
   *
   * @generated from field: google.fhir.r4.core.Integer end = 7;
   */
  end?: Integer;

  /**
   * Quality score for the comparison
   *
   * @generated from field: google.fhir.r4.core.Quantity score = 8;
   */
  score?: Quantity;

  /**
   * Method to get quality
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept method = 9;
   */
  method?: CodeableConcept;

  /**
   * True positives from the perspective of the truth data
   *
   * @generated from field: google.fhir.r4.core.Decimal truth_tp = 10 [json_name = "truthTP"];
   */
  truthTp?: Decimal;

  /**
   * True positives from the perspective of the query data
   *
   * @generated from field: google.fhir.r4.core.Decimal query_tp = 11 [json_name = "queryTP"];
   */
  queryTp?: Decimal;

  /**
   * False negatives
   *
   * @generated from field: google.fhir.r4.core.Decimal truth_fn = 12 [json_name = "truthFN"];
   */
  truthFn?: Decimal;

  /**
   * False positives
   *
   * @generated from field: google.fhir.r4.core.Decimal query_fp = 13 [json_name = "queryFP"];
   */
  queryFp?: Decimal;

  /**
   * False positives where the non-REF alleles in the Truth and Query Call
   * Sets match
   *
   * @generated from field: google.fhir.r4.core.Decimal gt_fp = 14 [json_name = "gtFP"];
   */
  gtFp?: Decimal;

  /**
   * Precision of comparison
   *
   * @generated from field: google.fhir.r4.core.Decimal precision = 15;
   */
  precision?: Decimal;

  /**
   * Recall of comparison
   *
   * @generated from field: google.fhir.r4.core.Decimal recall = 16;
   */
  recall?: Decimal;

  /**
   * F-score
   *
   * @generated from field: google.fhir.r4.core.Decimal f_score = 17;
   */
  fScore?: Decimal;

  /**
   * @generated from field: google.fhir.r4.core.MolecularSequence.Quality.Roc roc = 18;
   */
  roc?: MolecularSequence_Quality_Roc;
};

/**
 * Describes the message google.fhir.r4.core.MolecularSequence.Quality.
 * Use `create(MolecularSequence_QualitySchema)` to create a new message.
 */
export const MolecularSequence_QualitySchema: GenMessage<MolecularSequence_Quality> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 3);

/**
 * indel | snp | unknown
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.Quality.TypeCode
 */
export type MolecularSequence_Quality_TypeCode = Message<"google.fhir.r4.core.MolecularSequence.Quality.TypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.QualityTypeCode.Value value = 1;
   */
  value: QualityTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.MolecularSequence.Quality.TypeCode.
 * Use `create(MolecularSequence_Quality_TypeCodeSchema)` to create a new message.
 */
export const MolecularSequence_Quality_TypeCodeSchema: GenMessage<MolecularSequence_Quality_TypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 3, 0);

/**
 * Receiver Operator Characteristic (ROC) Curve
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.Quality.Roc
 */
export type MolecularSequence_Quality_Roc = Message<"google.fhir.r4.core.MolecularSequence.Quality.Roc"> & {
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
   * Genotype quality score
   *
   * @generated from field: repeated google.fhir.r4.core.Integer score = 4;
   */
  score: Integer[];

  /**
   * Roc score true positive numbers
   *
   * @generated from field: repeated google.fhir.r4.core.Integer num_tp = 5 [json_name = "numTP"];
   */
  numTp: Integer[];

  /**
   * Roc score false positive numbers
   *
   * @generated from field: repeated google.fhir.r4.core.Integer num_fp = 6 [json_name = "numFP"];
   */
  numFp: Integer[];

  /**
   * Roc score false negative numbers
   *
   * @generated from field: repeated google.fhir.r4.core.Integer num_fn = 7 [json_name = "numFN"];
   */
  numFn: Integer[];

  /**
   * Precision of the GQ score
   *
   * @generated from field: repeated google.fhir.r4.core.Decimal precision = 8;
   */
  precision: Decimal[];

  /**
   * Sensitivity of the GQ score
   *
   * @generated from field: repeated google.fhir.r4.core.Decimal sensitivity = 9;
   */
  sensitivity: Decimal[];

  /**
   * FScore of the GQ score
   *
   * @generated from field: repeated google.fhir.r4.core.Decimal f_measure = 10;
   */
  fMeasure: Decimal[];
};

/**
 * Describes the message google.fhir.r4.core.MolecularSequence.Quality.Roc.
 * Use `create(MolecularSequence_Quality_RocSchema)` to create a new message.
 */
export const MolecularSequence_Quality_RocSchema: GenMessage<MolecularSequence_Quality_Roc> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 3, 1);

/**
 * External repository which contains detailed report related with observedSeq
 * in this resource
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.Repository
 */
export type MolecularSequence_Repository = Message<"google.fhir.r4.core.MolecularSequence.Repository"> & {
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
   * @generated from field: google.fhir.r4.core.MolecularSequence.Repository.TypeCode type = 4;
   */
  type?: MolecularSequence_Repository_TypeCode;

  /**
   * URI of the repository
   *
   * @generated from field: google.fhir.r4.core.Uri url = 5;
   */
  url?: Uri;

  /**
   * Repository's name
   *
   * @generated from field: google.fhir.r4.core.String name = 6;
   */
  name?: String;

  /**
   * Id of the dataset that used to call for dataset in repository
   *
   * @generated from field: google.fhir.r4.core.String dataset_id = 7;
   */
  datasetId?: String;

  /**
   * Id of the variantset that used to call for variantset in repository
   *
   * @generated from field: google.fhir.r4.core.String variantset_id = 8;
   */
  variantsetId?: String;

  /**
   * Id of the read
   *
   * @generated from field: google.fhir.r4.core.String readset_id = 9;
   */
  readsetId?: String;
};

/**
 * Describes the message google.fhir.r4.core.MolecularSequence.Repository.
 * Use `create(MolecularSequence_RepositorySchema)` to create a new message.
 */
export const MolecularSequence_RepositorySchema: GenMessage<MolecularSequence_Repository> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 4);

/**
 * directlink | openapi | login | oauth | other
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.Repository.TypeCode
 */
export type MolecularSequence_Repository_TypeCode = Message<"google.fhir.r4.core.MolecularSequence.Repository.TypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.RepositoryTypeCode.Value value = 1;
   */
  value: RepositoryTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.MolecularSequence.Repository.TypeCode.
 * Use `create(MolecularSequence_Repository_TypeCodeSchema)` to create a new message.
 */
export const MolecularSequence_Repository_TypeCodeSchema: GenMessage<MolecularSequence_Repository_TypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 4, 0);

/**
 * Structural variant
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.StructureVariant
 */
export type MolecularSequence_StructureVariant = Message<"google.fhir.r4.core.MolecularSequence.StructureVariant"> & {
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
   * Structural variant change type
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept variant_type = 4;
   */
  variantType?: CodeableConcept;

  /**
   * Does the structural variant have base pair resolution breakpoints?
   *
   * @generated from field: google.fhir.r4.core.Boolean exact = 5;
   */
  exact?: Boolean;

  /**
   * Structural variant length
   *
   * @generated from field: google.fhir.r4.core.Integer length = 6;
   */
  length?: Integer;

  /**
   * @generated from field: google.fhir.r4.core.MolecularSequence.StructureVariant.Outer outer = 7;
   */
  outer?: MolecularSequence_StructureVariant_Outer;

  /**
   * @generated from field: google.fhir.r4.core.MolecularSequence.StructureVariant.Inner inner = 8;
   */
  inner?: MolecularSequence_StructureVariant_Inner;
};

/**
 * Describes the message google.fhir.r4.core.MolecularSequence.StructureVariant.
 * Use `create(MolecularSequence_StructureVariantSchema)` to create a new message.
 */
export const MolecularSequence_StructureVariantSchema: GenMessage<MolecularSequence_StructureVariant> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 5);

/**
 * Structural variant outer
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.StructureVariant.Outer
 */
export type MolecularSequence_StructureVariant_Outer = Message<"google.fhir.r4.core.MolecularSequence.StructureVariant.Outer"> & {
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
   * Structural variant outer start
   *
   * @generated from field: google.fhir.r4.core.Integer start = 4;
   */
  start?: Integer;

  /**
   * Structural variant outer end
   *
   * @generated from field: google.fhir.r4.core.Integer end = 5;
   */
  end?: Integer;
};

/**
 * Describes the message google.fhir.r4.core.MolecularSequence.StructureVariant.Outer.
 * Use `create(MolecularSequence_StructureVariant_OuterSchema)` to create a new message.
 */
export const MolecularSequence_StructureVariant_OuterSchema: GenMessage<MolecularSequence_StructureVariant_Outer> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 5, 0);

/**
 * Structural variant inner
 *
 * @generated from message google.fhir.r4.core.MolecularSequence.StructureVariant.Inner
 */
export type MolecularSequence_StructureVariant_Inner = Message<"google.fhir.r4.core.MolecularSequence.StructureVariant.Inner"> & {
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
   * Structural variant inner start
   *
   * @generated from field: google.fhir.r4.core.Integer start = 4;
   */
  start?: Integer;

  /**
   * Structural variant inner end
   *
   * @generated from field: google.fhir.r4.core.Integer end = 5;
   */
  end?: Integer;
};

/**
 * Describes the message google.fhir.r4.core.MolecularSequence.StructureVariant.Inner.
 * Use `create(MolecularSequence_StructureVariant_InnerSchema)` to create a new message.
 */
export const MolecularSequence_StructureVariant_InnerSchema: GenMessage<MolecularSequence_StructureVariant_Inner> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_molecular_sequence, 0, 5, 1);

