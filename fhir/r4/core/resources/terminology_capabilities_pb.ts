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
// @generated from file proto/google/fhir/proto/r4/core/resources/terminology_capabilities.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { CapabilityStatementKindCode_Value, CodeSearchSupportCode_Value, PublicationStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Boolean, Canonical, Code, CodeableConcept, ContactDetail, DateTime, Extension, Id, Markdown, Meta, Narrative, String, Uri, Url, UsageContext } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/terminology_capabilities.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities: GenFile = /*@__PURE__*/
  fileDesc("Ckhwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy90ZXJtaW5vbG9neV9jYXBhYmlsaXRpZXMucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUi5jAKF1Rlcm1pbm9sb2d5Q2FwYWJpbGl0aWVzEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SJQoDdXJsGAogASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSLAoHdmVyc2lvbhgLIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEikKBG5hbWUYDCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIqCgV0aXRsZRgNIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEk8KBnN0YXR1cxgOIAEoCzI3Lmdvb2dsZS5maGlyLnI0LmNvcmUuVGVybWlub2xvZ3lDYXBhYmlsaXRpZXMuU3RhdHVzQ29kZUIG8NCH6wQBEjIKDGV4cGVyaW1lbnRhbBgPIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIzCgRkYXRlGBAgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZUIG8NCH6wQBEi4KCXB1Ymxpc2hlchgRIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjMKB2NvbnRhY3QYEiADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSMgoLZGVzY3JpcHRpb24YEyABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEjYKC3VzZV9jb250ZXh0GBQgAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Vc2FnZUNvbnRleHQSOgoManVyaXNkaWN0aW9uGBUgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLgoHcHVycG9zZRgWIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuTWFya2Rvd24SMAoJY29weXJpZ2h0GBcgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhJLCgRraW5kGBggASgLMjUuZ29vZ2xlLmZoaXIucjQuY29yZS5UZXJtaW5vbG9neUNhcGFiaWxpdGllcy5LaW5kQ29kZUIG8NCH6wQBEkcKCHNvZnR3YXJlGBkgASgLMjUuZ29vZ2xlLmZoaXIucjQuY29yZS5UZXJtaW5vbG9neUNhcGFiaWxpdGllcy5Tb2Z0d2FyZRJTCg5pbXBsZW1lbnRhdGlvbhgaIAEoCzI7Lmdvb2dsZS5maGlyLnI0LmNvcmUuVGVybWlub2xvZ3lDYXBhYmlsaXRpZXMuSW1wbGVtZW50YXRpb24SMQoLbG9ja2VkX2RhdGUYGyABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4STAoLY29kZV9zeXN0ZW0YHCADKAsyNy5nb29nbGUuZmhpci5yNC5jb3JlLlRlcm1pbm9sb2d5Q2FwYWJpbGl0aWVzLkNvZGVTeXN0ZW0SSQoJZXhwYW5zaW9uGB0gASgLMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5UZXJtaW5vbG9neUNhcGFiaWxpdGllcy5FeHBhbnNpb24SUAoLY29kZV9zZWFyY2gYHiABKAsyOy5nb29nbGUuZmhpci5yNC5jb3JlLlRlcm1pbm9sb2d5Q2FwYWJpbGl0aWVzLkNvZGVTZWFyY2hDb2RlElAKDXZhbGlkYXRlX2NvZGUYHyABKAsyOS5nb29nbGUuZmhpci5yNC5jb3JlLlRlcm1pbm9sb2d5Q2FwYWJpbGl0aWVzLlZhbGlkYXRlQ29kZRJNCgt0cmFuc2xhdGlvbhggIAEoCzI4Lmdvb2dsZS5maGlyLnI0LmNvcmUuVGVybWlub2xvZ3lDYXBhYmlsaXRpZXMuVHJhbnNsYXRpb24SRQoHY2xvc3VyZRghIAEoCzI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuVGVybWlub2xvZ3lDYXBhYmlsaXRpZXMuQ2xvc3VyZRqYAgoKU3RhdHVzQ29kZRI/CgV2YWx1ZRgBIAEoDjIwLmdvb2dsZS5maGlyLnI0LmNvcmUuUHVibGljYXRpb25TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bYr5g7IFL2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcHVibGljYXRpb24tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUaowIKCEtpbmRDb2RlEkUKBXZhbHVlGAEgASgOMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5DYXBhYmlsaXR5U3RhdGVtZW50S2luZENvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjp0ivmDsgU2aHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jYXBhYmlsaXR5LXN0YXRlbWVudC1raW5kwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUagwIKCFNvZnR3YXJlEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMQoEbmFtZRgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nQgbw0IfrBAESLAoHdmVyc2lvbhgFIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGokCCg5JbXBsZW1lbnRhdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjgKC2Rlc2NyaXB0aW9uGAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdCBvDQh+sEARIlCgN1cmwYBSABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVybBr/CAoKQ29kZVN5c3RlbRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEisKA3VyaRgEIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsElAKB3ZlcnNpb24YBSADKAsyPy5nb29nbGUuZmhpci5yNC5jb3JlLlRlcm1pbm9sb2d5Q2FwYWJpbGl0aWVzLkNvZGVTeXN0ZW0uVmVyc2lvbhIxCgtzdWJzdW1wdGlvbhgGIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhroBQoHVmVyc2lvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEikKBGNvZGUYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIwCgppc19kZWZhdWx0GAUgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEjMKDWNvbXBvc2l0aW9uYWwYBiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SKwoIbGFuZ3VhZ2UYByADKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSVgoGZmlsdGVyGAggAygLMkYuZ29vZ2xlLmZoaXIucjQuY29yZS5UZXJtaW5vbG9neUNhcGFiaWxpdGllcy5Db2RlU3lzdGVtLlZlcnNpb24uRmlsdGVyEisKCHByb3BlcnR5GAkgAygLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlGoACCgZGaWx0ZXISJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIvCgRjb2RlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlQgbw0IfrBAESLQoCb3AYBSADKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVCBvDQh+sEATo8moaToAg2dmVyc2lvbi5jb3VudCgpID4gMSBpbXBsaWVzIHZlcnNpb24uYWxsKGNvZGUuZXhpc3RzKCkpGssFCglFeHBhbnNpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIyCgxoaWVyYXJjaGljYWwYBCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SLAoGcGFnaW5nGAUgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEjAKCmluY29tcGxldGUYBiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SUwoJcGFyYW1ldGVyGAcgAygLMkAuZ29vZ2xlLmZoaXIucjQuY29yZS5UZXJtaW5vbG9neUNhcGFiaWxpdGllcy5FeHBhbnNpb24uUGFyYW1ldGVyEjIKC3RleHRfZmlsdGVyGAggASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhqIAgoJUGFyYW1ldGVyEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SLwoEbmFtZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZUIG8NCH6wQBEjIKDWRvY3VtZW50YXRpb24YBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxqdAgoOQ29kZVNlYXJjaENvZGUSPwoFdmFsdWUYASABKA4yMC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVTZWFyY2hTdXBwb3J0Q29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOm6K+YOyBTBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvZGUtc2VhcmNoLXN1cHBvcnTAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRriAQoMVmFsaWRhdGVDb2RlEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoMdHJhbnNsYXRpb25zGAQgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuQgbw0IfrBAEa3gEKC1RyYW5zbGF0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SNwoJbmVlZHNfbWFwGAQgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuQgbw0IfrBAEa1AEKB0Nsb3N1cmUSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIxCgt0cmFuc2xhdGlvbhgEIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbjqrA8Cf47YFA7L+5JcGP2h0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9UZXJtaW5vbG9neUNhcGFiaWxpdGllc5qGk6AIRShkZXNjcmlwdGlvbi5jb3VudCgpICsgc29mdHdhcmUuY291bnQoKSArIGltcGxlbWVudGF0aW9uLmNvdW50KCkpID4gMJqGk6AILyhraW5kICE9ICdpbnN0YW5jZScpIG9yIGltcGxlbWVudGF0aW9uLmV4aXN0cygpmoaToAhPKGtpbmQgIT0gJ2NhcGFiaWxpdHknKSBvciAoaW1wbGVtZW50YXRpb24uZXhpc3RzKCkubm90KCkgYW5kIHNvZnR3YXJlLmV4aXN0cygpKZqGk6AIVShraW5kIT0ncmVxdWlyZW1lbnRzJykgb3IgKGltcGxlbWVudGF0aW9uLmV4aXN0cygpLm5vdCgpIGFuZCBzb2Z0d2FyZS5leGlzdHMoKS5ub3QoKSmar66kCypuYW1lLm1hdGNoZXMoJ1tBLVpdKFtBLVphLXowLTlfXSl7MCwyNTR9JylKBAgHEAhCiAEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaZWdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvdGVybWlub2xvZ3lfY2FwYWJpbGl0aWVzX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for TerminologyCapabilities.
 * A statement of system capabilities.
 * See http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities
 */
export type TerminologyCapabilities = Message<"google.fhir.r4.core.TerminologyCapabilities"> & {
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
   * Canonical identifier for this terminology capabilities, represented as a
   * URI (globally unique)
   *
   * @generated from field: google.fhir.r4.core.Uri url = 10;
   */
  url?: Uri;

  /**
   * Business version of the terminology capabilities
   *
   * @generated from field: google.fhir.r4.core.String version = 11;
   */
  version?: String;

  /**
   * Name for this terminology capabilities (computer friendly)
   *
   * @generated from field: google.fhir.r4.core.String name = 12;
   */
  name?: String;

  /**
   * Name for this terminology capabilities (human friendly)
   *
   * @generated from field: google.fhir.r4.core.String title = 13;
   */
  title?: String;

  /**
   * @generated from field: google.fhir.r4.core.TerminologyCapabilities.StatusCode status = 14;
   */
  status?: TerminologyCapabilities_StatusCode;

  /**
   * For testing purposes, not real usage
   *
   * @generated from field: google.fhir.r4.core.Boolean experimental = 15;
   */
  experimental?: Boolean;

  /**
   * Date last changed
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 16;
   */
  date?: DateTime;

  /**
   * Name of the publisher (organization or individual)
   *
   * @generated from field: google.fhir.r4.core.String publisher = 17;
   */
  publisher?: String;

  /**
   * Contact details for the publisher
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail contact = 18;
   */
  contact: ContactDetail[];

  /**
   * Natural language description of the terminology capabilities
   *
   * @generated from field: google.fhir.r4.core.Markdown description = 19;
   */
  description?: Markdown;

  /**
   * The context that the content is intended to support
   *
   * @generated from field: repeated google.fhir.r4.core.UsageContext use_context = 20;
   */
  useContext: UsageContext[];

  /**
   * Intended jurisdiction for terminology capabilities (if applicable)
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept jurisdiction = 21;
   */
  jurisdiction: CodeableConcept[];

  /**
   * Why this terminology capabilities is defined
   *
   * @generated from field: google.fhir.r4.core.Markdown purpose = 22;
   */
  purpose?: Markdown;

  /**
   * Use and/or publishing restrictions
   *
   * @generated from field: google.fhir.r4.core.Markdown copyright = 23;
   */
  copyright?: Markdown;

  /**
   * @generated from field: google.fhir.r4.core.TerminologyCapabilities.KindCode kind = 24;
   */
  kind?: TerminologyCapabilities_KindCode;

  /**
   * @generated from field: google.fhir.r4.core.TerminologyCapabilities.Software software = 25;
   */
  software?: TerminologyCapabilities_Software;

  /**
   * @generated from field: google.fhir.r4.core.TerminologyCapabilities.Implementation implementation = 26;
   */
  implementation?: TerminologyCapabilities_Implementation;

  /**
   * Whether lockedDate is supported
   *
   * @generated from field: google.fhir.r4.core.Boolean locked_date = 27;
   */
  lockedDate?: Boolean;

  /**
   * @generated from field: repeated google.fhir.r4.core.TerminologyCapabilities.CodeSystem code_system = 28;
   */
  codeSystem: TerminologyCapabilities_CodeSystem[];

  /**
   * @generated from field: google.fhir.r4.core.TerminologyCapabilities.Expansion expansion = 29;
   */
  expansion?: TerminologyCapabilities_Expansion;

  /**
   * @generated from field: google.fhir.r4.core.TerminologyCapabilities.CodeSearchCode code_search = 30;
   */
  codeSearch?: TerminologyCapabilities_CodeSearchCode;

  /**
   * @generated from field: google.fhir.r4.core.TerminologyCapabilities.ValidateCode validate_code = 31;
   */
  validateCode?: TerminologyCapabilities_ValidateCode;

  /**
   * @generated from field: google.fhir.r4.core.TerminologyCapabilities.Translation translation = 32;
   */
  translation?: TerminologyCapabilities_Translation;

  /**
   * @generated from field: google.fhir.r4.core.TerminologyCapabilities.Closure closure = 33;
   */
  closure?: TerminologyCapabilities_Closure;
};

/**
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.
 * Use `create(TerminologyCapabilitiesSchema)` to create a new message.
 */
export const TerminologyCapabilitiesSchema: GenMessage<TerminologyCapabilities> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0);

/**
 * draft | active | retired | unknown
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.StatusCode
 */
export type TerminologyCapabilities_StatusCode = Message<"google.fhir.r4.core.TerminologyCapabilities.StatusCode"> & {
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
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.StatusCode.
 * Use `create(TerminologyCapabilities_StatusCodeSchema)` to create a new message.
 */
export const TerminologyCapabilities_StatusCodeSchema: GenMessage<TerminologyCapabilities_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 0);

/**
 * instance | capability | requirements
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.KindCode
 */
export type TerminologyCapabilities_KindCode = Message<"google.fhir.r4.core.TerminologyCapabilities.KindCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.CapabilityStatementKindCode.Value value = 1;
   */
  value: CapabilityStatementKindCode_Value;

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
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.KindCode.
 * Use `create(TerminologyCapabilities_KindCodeSchema)` to create a new message.
 */
export const TerminologyCapabilities_KindCodeSchema: GenMessage<TerminologyCapabilities_KindCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 1);

/**
 * Software that is covered by this terminology capability statement
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.Software
 */
export type TerminologyCapabilities_Software = Message<"google.fhir.r4.core.TerminologyCapabilities.Software"> & {
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
   * A name the software is known by
   *
   * @generated from field: google.fhir.r4.core.String name = 4;
   */
  name?: String;

  /**
   * Version covered by this statement
   *
   * @generated from field: google.fhir.r4.core.String version = 5;
   */
  version?: String;
};

/**
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.Software.
 * Use `create(TerminologyCapabilities_SoftwareSchema)` to create a new message.
 */
export const TerminologyCapabilities_SoftwareSchema: GenMessage<TerminologyCapabilities_Software> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 2);

/**
 * If this describes a specific instance
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.Implementation
 */
export type TerminologyCapabilities_Implementation = Message<"google.fhir.r4.core.TerminologyCapabilities.Implementation"> & {
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
   * Describes this specific instance
   *
   * @generated from field: google.fhir.r4.core.String description = 4;
   */
  description?: String;

  /**
   * Base URL for the implementation
   *
   * @generated from field: google.fhir.r4.core.Url url = 5;
   */
  url?: Url;
};

/**
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.Implementation.
 * Use `create(TerminologyCapabilities_ImplementationSchema)` to create a new message.
 */
export const TerminologyCapabilities_ImplementationSchema: GenMessage<TerminologyCapabilities_Implementation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 3);

/**
 * A code system supported by the server
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.CodeSystem
 */
export type TerminologyCapabilities_CodeSystem = Message<"google.fhir.r4.core.TerminologyCapabilities.CodeSystem"> & {
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
   * URI for the Code System
   *
   * @generated from field: google.fhir.r4.core.Canonical uri = 4;
   */
  uri?: Canonical;

  /**
   * @generated from field: repeated google.fhir.r4.core.TerminologyCapabilities.CodeSystem.Version version = 5;
   */
  version: TerminologyCapabilities_CodeSystem_Version[];

  /**
   * Whether subsumption is supported
   *
   * @generated from field: google.fhir.r4.core.Boolean subsumption = 6;
   */
  subsumption?: Boolean;
};

/**
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.CodeSystem.
 * Use `create(TerminologyCapabilities_CodeSystemSchema)` to create a new message.
 */
export const TerminologyCapabilities_CodeSystemSchema: GenMessage<TerminologyCapabilities_CodeSystem> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 4);

/**
 * Version of Code System supported
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.CodeSystem.Version
 */
export type TerminologyCapabilities_CodeSystem_Version = Message<"google.fhir.r4.core.TerminologyCapabilities.CodeSystem.Version"> & {
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
   * Version identifier for this version
   *
   * @generated from field: google.fhir.r4.core.String code = 4;
   */
  code?: String;

  /**
   * If this is the default version for this code system
   *
   * @generated from field: google.fhir.r4.core.Boolean is_default = 5;
   */
  isDefault?: Boolean;

  /**
   * If compositional grammar is supported
   *
   * @generated from field: google.fhir.r4.core.Boolean compositional = 6;
   */
  compositional?: Boolean;

  /**
   * Language Displays supported
   *
   * @generated from field: repeated google.fhir.r4.core.Code language = 7;
   */
  language: Code[];

  /**
   * @generated from field: repeated google.fhir.r4.core.TerminologyCapabilities.CodeSystem.Version.Filter filter = 8;
   */
  filter: TerminologyCapabilities_CodeSystem_Version_Filter[];

  /**
   * Properties supported for $lookup
   *
   * @generated from field: repeated google.fhir.r4.core.Code property = 9;
   */
  property: Code[];
};

/**
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.CodeSystem.Version.
 * Use `create(TerminologyCapabilities_CodeSystem_VersionSchema)` to create a new message.
 */
export const TerminologyCapabilities_CodeSystem_VersionSchema: GenMessage<TerminologyCapabilities_CodeSystem_Version> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 4, 0);

/**
 * Filter Properties supported
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.CodeSystem.Version.Filter
 */
export type TerminologyCapabilities_CodeSystem_Version_Filter = Message<"google.fhir.r4.core.TerminologyCapabilities.CodeSystem.Version.Filter"> & {
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
   * Code of the property supported
   *
   * @generated from field: google.fhir.r4.core.Code code = 4;
   */
  code?: Code;

  /**
   * Operations supported for the property
   *
   * @generated from field: repeated google.fhir.r4.core.Code op = 5;
   */
  op: Code[];
};

/**
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.CodeSystem.Version.Filter.
 * Use `create(TerminologyCapabilities_CodeSystem_Version_FilterSchema)` to create a new message.
 */
export const TerminologyCapabilities_CodeSystem_Version_FilterSchema: GenMessage<TerminologyCapabilities_CodeSystem_Version_Filter> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 4, 0, 0);

/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html)
 * operation
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.Expansion
 */
export type TerminologyCapabilities_Expansion = Message<"google.fhir.r4.core.TerminologyCapabilities.Expansion"> & {
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
   * Whether the server can return nested value sets
   *
   * @generated from field: google.fhir.r4.core.Boolean hierarchical = 4;
   */
  hierarchical?: Boolean;

  /**
   * Whether the server supports paging on expansion
   *
   * @generated from field: google.fhir.r4.core.Boolean paging = 5;
   */
  paging?: Boolean;

  /**
   * Allow request for incomplete expansions?
   *
   * @generated from field: google.fhir.r4.core.Boolean incomplete = 6;
   */
  incomplete?: Boolean;

  /**
   * @generated from field: repeated google.fhir.r4.core.TerminologyCapabilities.Expansion.Parameter parameter = 7;
   */
  parameter: TerminologyCapabilities_Expansion_Parameter[];

  /**
   * Documentation about text searching works
   *
   * @generated from field: google.fhir.r4.core.Markdown text_filter = 8;
   */
  textFilter?: Markdown;
};

/**
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.Expansion.
 * Use `create(TerminologyCapabilities_ExpansionSchema)` to create a new message.
 */
export const TerminologyCapabilities_ExpansionSchema: GenMessage<TerminologyCapabilities_Expansion> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 5);

/**
 * Supported expansion parameter
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.Expansion.Parameter
 */
export type TerminologyCapabilities_Expansion_Parameter = Message<"google.fhir.r4.core.TerminologyCapabilities.Expansion.Parameter"> & {
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
   * Expansion Parameter name
   *
   * @generated from field: google.fhir.r4.core.Code name = 4;
   */
  name?: Code;

  /**
   * Description of support for parameter
   *
   * @generated from field: google.fhir.r4.core.String documentation = 5;
   */
  documentation?: String;
};

/**
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.Expansion.Parameter.
 * Use `create(TerminologyCapabilities_Expansion_ParameterSchema)` to create a new message.
 */
export const TerminologyCapabilities_Expansion_ParameterSchema: GenMessage<TerminologyCapabilities_Expansion_Parameter> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 5, 0);

/**
 * explicit | all
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.CodeSearchCode
 */
export type TerminologyCapabilities_CodeSearchCode = Message<"google.fhir.r4.core.TerminologyCapabilities.CodeSearchCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.CodeSearchSupportCode.Value value = 1;
   */
  value: CodeSearchSupportCode_Value;

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
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.CodeSearchCode.
 * Use `create(TerminologyCapabilities_CodeSearchCodeSchema)` to create a new message.
 */
export const TerminologyCapabilities_CodeSearchCodeSchema: GenMessage<TerminologyCapabilities_CodeSearchCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 6);

/**
 * Information about the
 * [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.ValidateCode
 */
export type TerminologyCapabilities_ValidateCode = Message<"google.fhir.r4.core.TerminologyCapabilities.ValidateCode"> & {
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
   * Whether translations are validated
   *
   * @generated from field: google.fhir.r4.core.Boolean translations = 4;
   */
  translations?: Boolean;
};

/**
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.ValidateCode.
 * Use `create(TerminologyCapabilities_ValidateCodeSchema)` to create a new message.
 */
export const TerminologyCapabilities_ValidateCodeSchema: GenMessage<TerminologyCapabilities_ValidateCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 7);

/**
 * Information about the
 * [ConceptMap/$translate](conceptmap-operation-translate.html) operation
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.Translation
 */
export type TerminologyCapabilities_Translation = Message<"google.fhir.r4.core.TerminologyCapabilities.Translation"> & {
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
   * Whether the client must identify the map
   *
   * @generated from field: google.fhir.r4.core.Boolean needs_map = 4;
   */
  needsMap?: Boolean;
};

/**
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.Translation.
 * Use `create(TerminologyCapabilities_TranslationSchema)` to create a new message.
 */
export const TerminologyCapabilities_TranslationSchema: GenMessage<TerminologyCapabilities_Translation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 8);

/**
 * Information about the
 * [ConceptMap/$closure](conceptmap-operation-closure.html) operation
 *
 * @generated from message google.fhir.r4.core.TerminologyCapabilities.Closure
 */
export type TerminologyCapabilities_Closure = Message<"google.fhir.r4.core.TerminologyCapabilities.Closure"> & {
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
   * If cross-system closure is supported
   *
   * @generated from field: google.fhir.r4.core.Boolean translation = 4;
   */
  translation?: Boolean;
};

/**
 * Describes the message google.fhir.r4.core.TerminologyCapabilities.Closure.
 * Use `create(TerminologyCapabilities_ClosureSchema)` to create a new message.
 */
export const TerminologyCapabilities_ClosureSchema: GenMessage<TerminologyCapabilities_Closure> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_terminology_capabilities, 0, 9);

