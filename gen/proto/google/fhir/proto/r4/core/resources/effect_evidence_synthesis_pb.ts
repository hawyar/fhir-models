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
// @generated from file proto/google/fhir/proto/r4/core/resources/effect_evidence_synthesis.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { ExposureStateCode_Value, PublicationStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Code, CodeableConcept, ContactDetail, Date, DateTime, Decimal, Extension, Id, Identifier, Integer, Markdown, Meta, Narrative, Period, Reference, RelatedArtifact, String, Uri, UsageContext } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/effect_evidence_synthesis.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis: GenFile = /*@__PURE__*/
  fileDesc("Cklwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9lZmZlY3RfZXZpZGVuY2Vfc3ludGhlc2lzLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIpIrChdFZmZlY3RFdmlkZW5jZVN5bnRoZXNpcxIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEiUKA3VybBgKIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEjMKCmlkZW50aWZpZXIYCyADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISLAoHdmVyc2lvbhgMIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEikKBG5hbWUYDSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIqCgV0aXRsZRgOIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEk8KBnN0YXR1cxgPIAEoCzI3Lmdvb2dsZS5maGlyLnI0LmNvcmUuRWZmZWN0RXZpZGVuY2VTeW50aGVzaXMuU3RhdHVzQ29kZUIG8NCH6wQBEisKBGRhdGUYECABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEi4KCXB1Ymxpc2hlchgRIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjMKB2NvbnRhY3QYEiADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSMgoLZGVzY3JpcHRpb24YEyABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEi0KBG5vdGUYFCADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkFubm90YXRpb24SNgoLdXNlX2NvbnRleHQYFSADKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLlVzYWdlQ29udGV4dBI6CgxqdXJpc2RpY3Rpb24YFiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIwCgljb3B5cmlnaHQYFyABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEjAKDWFwcHJvdmFsX2RhdGUYGCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGUSMwoQbGFzdF9yZXZpZXdfZGF0ZRgZIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZRI1ChBlZmZlY3RpdmVfcGVyaW9kGBogASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2QSMwoFdG9waWMYGyADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIyCgZhdXRob3IYHCADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSMgoGZWRpdG9yGB0gAygLMiIuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0RGV0YWlsEjQKCHJldmlld2VyGB4gAygLMiIuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0RGV0YWlsEjQKCGVuZG9yc2VyGB8gAygLMiIuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0RGV0YWlsEj4KEHJlbGF0ZWRfYXJ0aWZhY3QYICADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLlJlbGF0ZWRBcnRpZmFjdBI8Cg5zeW50aGVzaXNfdHlwZRghIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjgKCnN0dWR5X3R5cGUYIiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJQCgpwb3B1bGF0aW9uGCMgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCHPDQh+sEAfL//MIGEEV2aWRlbmNlVmFyaWFibGUSTgoIZXhwb3N1cmUYJCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIc8NCH6wQB8v/8wgYQRXZpZGVuY2VWYXJpYWJsZRJaChRleHBvc3VyZV9hbHRlcm5hdGl2ZRglIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhzw0IfrBAHy//zCBhBFdmlkZW5jZVZhcmlhYmxlEk0KB291dGNvbWUYJiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIc8NCH6wQB8v/8wgYQRXZpZGVuY2VWYXJpYWJsZRJMCgtzYW1wbGVfc2l6ZRgnIAEoCzI3Lmdvb2dsZS5maGlyLnI0LmNvcmUuRWZmZWN0RXZpZGVuY2VTeW50aGVzaXMuU2FtcGxlU2l6ZRJbChNyZXN1bHRzX2J5X2V4cG9zdXJlGCggAygLMj4uZ29vZ2xlLmZoaXIucjQuY29yZS5FZmZlY3RFdmlkZW5jZVN5bnRoZXNpcy5SZXN1bHRzQnlFeHBvc3VyZRJUCg9lZmZlY3RfZXN0aW1hdGUYKSADKAsyOy5nb29nbGUuZmhpci5yNC5jb3JlLkVmZmVjdEV2aWRlbmNlU3ludGhlc2lzLkVmZmVjdEVzdGltYXRlEkkKCWNlcnRhaW50eRgqIAMoCzI2Lmdvb2dsZS5maGlyLnI0LmNvcmUuRWZmZWN0RXZpZGVuY2VTeW50aGVzaXMuQ2VydGFpbnR5GpgCCgpTdGF0dXNDb2RlEj8KBXZhbHVlGAEgASgOMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5QdWJsaWNhdGlvblN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjptivmDsgUvaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9wdWJsaWNhdGlvbi1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrNAgoKU2FtcGxlU2l6ZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjAKC2Rlc2NyaXB0aW9uGAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSNwoRbnVtYmVyX29mX3N0dWRpZXMYBSABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXISPAoWbnVtYmVyX29mX3BhcnRpY2lwYW50cxgGIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlchqCBgoRUmVzdWx0c0J5RXhwb3N1cmUSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIwCgtkZXNjcmlwdGlvbhgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEmgKDmV4cG9zdXJlX3N0YXRlGAUgASgLMlAuZ29vZ2xlLmZoaXIucjQuY29yZS5FZmZlY3RFdmlkZW5jZVN5bnRoZXNpcy5SZXN1bHRzQnlFeHBvc3VyZS5FeHBvc3VyZVN0YXRlQ29kZRI7Cg12YXJpYW50X3N0YXRlGAYgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSYgoXcmlza19ldmlkZW5jZV9zeW50aGVzaXMYByABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIh8NCH6wQB8v/8wgYVUmlza0V2aWRlbmNlU3ludGhlc2lzGpcCChFFeHBvc3VyZVN0YXRlQ29kZRI7CgV2YWx1ZRgBIAEoDjIsLmdvb2dsZS5maGlyLnI0LmNvcmUuRXhwb3N1cmVTdGF0ZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjppivmDsgUraHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9leHBvc3VyZS1zdGF0ZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGocHCg5FZmZlY3RFc3RpbWF0ZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjAKC2Rlc2NyaXB0aW9uGAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMgoEdHlwZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjsKDXZhcmlhbnRfc3RhdGUYBiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIrCgV2YWx1ZRgHIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbBI9Cg91bml0X29mX21lYXN1cmUYCCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJpChJwcmVjaXNpb25fZXN0aW1hdGUYCSADKAsyTS5nb29nbGUuZmhpci5yNC5jb3JlLkVmZmVjdEV2aWRlbmNlU3ludGhlc2lzLkVmZmVjdEVzdGltYXRlLlByZWNpc2lvbkVzdGltYXRlGuICChFQcmVjaXNpb25Fc3RpbWF0ZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBHR5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIrCgVsZXZlbBgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbBIqCgRmcm9tGAYgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsEigKAnRvGAcgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsGsEFCglDZXJ0YWludHkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI0CgZyYXRpbmcYBCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBItCgRub3RlGAUgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5Bbm5vdGF0aW9uEmwKFmNlcnRhaW50eV9zdWJjb21wb25lbnQYBiADKAsyTC5nb29nbGUuZmhpci5yNC5jb3JlLkVmZmVjdEV2aWRlbmNlU3ludGhlc2lzLkNlcnRhaW50eS5DZXJ0YWludHlTdWJjb21wb25lbnQayAIKFUNlcnRhaW50eVN1YmNvbXBvbmVudBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBHR5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI0CgZyYXRpbmcYBSADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBItCgRub3RlGAYgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5Bbm5vdGF0aW9uOnvAn+O2BQOy/uSXBj9odHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vRWZmZWN0RXZpZGVuY2VTeW50aGVzaXOar66kCypuYW1lLm1hdGNoZXMoJ1tBLVpdKFtBLVphLXowLTlfXSl7MCwyNTR9JylKBAgHEAhCiQEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaZmdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvZWZmZWN0X2V2aWRlbmNlX3N5bnRoZXNpc19nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for EffectEvidenceSynthesis.
 * A quantified estimate of effect based on a body of evidence.
 * See http://hl7.org/fhir/StructureDefinition/EffectEvidenceSynthesis
 *
 * @generated from message google.fhir.r4.core.EffectEvidenceSynthesis
 */
export type EffectEvidenceSynthesis = Message<"google.fhir.r4.core.EffectEvidenceSynthesis"> & {
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
   * Canonical identifier for this effect evidence synthesis, represented as a
   * URI (globally unique)
   *
   * @generated from field: google.fhir.r4.core.Uri url = 10;
   */
  url?: Uri;

  /**
   * Additional identifier for the effect evidence synthesis
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 11;
   */
  identifier: Identifier[];

  /**
   * Business version of the effect evidence synthesis
   *
   * @generated from field: google.fhir.r4.core.String version = 12;
   */
  version?: String;

  /**
   * Name for this effect evidence synthesis (computer friendly)
   *
   * @generated from field: google.fhir.r4.core.String name = 13;
   */
  name?: String;

  /**
   * Name for this effect evidence synthesis (human friendly)
   *
   * @generated from field: google.fhir.r4.core.String title = 14;
   */
  title?: String;

  /**
   * @generated from field: google.fhir.r4.core.EffectEvidenceSynthesis.StatusCode status = 15;
   */
  status?: EffectEvidenceSynthesis_StatusCode;

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
   * Natural language description of the effect evidence synthesis
   *
   * @generated from field: google.fhir.r4.core.Markdown description = 19;
   */
  description?: Markdown;

  /**
   * Used for footnotes or explanatory notes
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 20;
   */
  note: Annotation[];

  /**
   * The context that the content is intended to support
   *
   * @generated from field: repeated google.fhir.r4.core.UsageContext use_context = 21;
   */
  useContext: UsageContext[];

  /**
   * Intended jurisdiction for effect evidence synthesis (if applicable)
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept jurisdiction = 22;
   */
  jurisdiction: CodeableConcept[];

  /**
   * Use and/or publishing restrictions
   *
   * @generated from field: google.fhir.r4.core.Markdown copyright = 23;
   */
  copyright?: Markdown;

  /**
   * When the effect evidence synthesis was approved by publisher
   *
   * @generated from field: google.fhir.r4.core.Date approval_date = 24;
   */
  approvalDate?: Date;

  /**
   * When the effect evidence synthesis was last reviewed
   *
   * @generated from field: google.fhir.r4.core.Date last_review_date = 25;
   */
  lastReviewDate?: Date;

  /**
   * When the effect evidence synthesis is expected to be used
   *
   * @generated from field: google.fhir.r4.core.Period effective_period = 26;
   */
  effectivePeriod?: Period;

  /**
   * The category of the EffectEvidenceSynthesis, such as Education, Treatment,
   * Assessment, etc.
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept topic = 27;
   */
  topic: CodeableConcept[];

  /**
   * Who authored the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail author = 28;
   */
  author: ContactDetail[];

  /**
   * Who edited the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail editor = 29;
   */
  editor: ContactDetail[];

  /**
   * Who reviewed the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail reviewer = 30;
   */
  reviewer: ContactDetail[];

  /**
   * Who endorsed the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail endorser = 31;
   */
  endorser: ContactDetail[];

  /**
   * Additional documentation, citations, etc.
   *
   * @generated from field: repeated google.fhir.r4.core.RelatedArtifact related_artifact = 32;
   */
  relatedArtifact: RelatedArtifact[];

  /**
   * Type of synthesis
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept synthesis_type = 33;
   */
  synthesisType?: CodeableConcept;

  /**
   * Type of study
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept study_type = 34;
   */
  studyType?: CodeableConcept;

  /**
   * What population?
   *
   * @generated from field: google.fhir.r4.core.Reference population = 35;
   */
  population?: Reference;

  /**
   * What exposure?
   *
   * @generated from field: google.fhir.r4.core.Reference exposure = 36;
   */
  exposure?: Reference;

  /**
   * What comparison exposure?
   *
   * @generated from field: google.fhir.r4.core.Reference exposure_alternative = 37;
   */
  exposureAlternative?: Reference;

  /**
   * What outcome?
   *
   * @generated from field: google.fhir.r4.core.Reference outcome = 38;
   */
  outcome?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.EffectEvidenceSynthesis.SampleSize sample_size = 39;
   */
  sampleSize?: EffectEvidenceSynthesis_SampleSize;

  /**
   * @generated from field: repeated google.fhir.r4.core.EffectEvidenceSynthesis.ResultsByExposure results_by_exposure = 40;
   */
  resultsByExposure: EffectEvidenceSynthesis_ResultsByExposure[];

  /**
   * @generated from field: repeated google.fhir.r4.core.EffectEvidenceSynthesis.EffectEstimate effect_estimate = 41;
   */
  effectEstimate: EffectEvidenceSynthesis_EffectEstimate[];

  /**
   * @generated from field: repeated google.fhir.r4.core.EffectEvidenceSynthesis.Certainty certainty = 42;
   */
  certainty: EffectEvidenceSynthesis_Certainty[];
};

/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.
 * Use `create(EffectEvidenceSynthesisSchema)` to create a new message.
 */
export const EffectEvidenceSynthesisSchema: GenMessage<EffectEvidenceSynthesis> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0);

/**
 * draft | active | retired | unknown
 *
 * @generated from message google.fhir.r4.core.EffectEvidenceSynthesis.StatusCode
 */
export type EffectEvidenceSynthesis_StatusCode = Message<"google.fhir.r4.core.EffectEvidenceSynthesis.StatusCode"> & {
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
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.StatusCode.
 * Use `create(EffectEvidenceSynthesis_StatusCodeSchema)` to create a new message.
 */
export const EffectEvidenceSynthesis_StatusCodeSchema: GenMessage<EffectEvidenceSynthesis_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 0);

/**
 * What sample size was involved?
 *
 * @generated from message google.fhir.r4.core.EffectEvidenceSynthesis.SampleSize
 */
export type EffectEvidenceSynthesis_SampleSize = Message<"google.fhir.r4.core.EffectEvidenceSynthesis.SampleSize"> & {
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
   * Description of sample size
   *
   * @generated from field: google.fhir.r4.core.String description = 4;
   */
  description?: String;

  /**
   * How many studies?
   *
   * @generated from field: google.fhir.r4.core.Integer number_of_studies = 5;
   */
  numberOfStudies?: Integer;

  /**
   * How many participants?
   *
   * @generated from field: google.fhir.r4.core.Integer number_of_participants = 6;
   */
  numberOfParticipants?: Integer;
};

/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.SampleSize.
 * Use `create(EffectEvidenceSynthesis_SampleSizeSchema)` to create a new message.
 */
export const EffectEvidenceSynthesis_SampleSizeSchema: GenMessage<EffectEvidenceSynthesis_SampleSize> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 1);

/**
 * What was the result per exposure?
 *
 * @generated from message google.fhir.r4.core.EffectEvidenceSynthesis.ResultsByExposure
 */
export type EffectEvidenceSynthesis_ResultsByExposure = Message<"google.fhir.r4.core.EffectEvidenceSynthesis.ResultsByExposure"> & {
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
   * Description of results by exposure
   *
   * @generated from field: google.fhir.r4.core.String description = 4;
   */
  description?: String;

  /**
   * @generated from field: google.fhir.r4.core.EffectEvidenceSynthesis.ResultsByExposure.ExposureStateCode exposure_state = 5;
   */
  exposureState?: EffectEvidenceSynthesis_ResultsByExposure_ExposureStateCode;

  /**
   * Variant exposure states
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept variant_state = 6;
   */
  variantState?: CodeableConcept;

  /**
   * Risk evidence synthesis
   *
   * @generated from field: google.fhir.r4.core.Reference risk_evidence_synthesis = 7;
   */
  riskEvidenceSynthesis?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.ResultsByExposure.
 * Use `create(EffectEvidenceSynthesis_ResultsByExposureSchema)` to create a new message.
 */
export const EffectEvidenceSynthesis_ResultsByExposureSchema: GenMessage<EffectEvidenceSynthesis_ResultsByExposure> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 2);

/**
 * exposure | exposure-alternative
 *
 * @generated from message google.fhir.r4.core.EffectEvidenceSynthesis.ResultsByExposure.ExposureStateCode
 */
export type EffectEvidenceSynthesis_ResultsByExposure_ExposureStateCode = Message<"google.fhir.r4.core.EffectEvidenceSynthesis.ResultsByExposure.ExposureStateCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ExposureStateCode.Value value = 1;
   */
  value: ExposureStateCode_Value;

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
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.ResultsByExposure.ExposureStateCode.
 * Use `create(EffectEvidenceSynthesis_ResultsByExposure_ExposureStateCodeSchema)` to create a new message.
 */
export const EffectEvidenceSynthesis_ResultsByExposure_ExposureStateCodeSchema: GenMessage<EffectEvidenceSynthesis_ResultsByExposure_ExposureStateCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 2, 0);

/**
 * What was the estimated effect
 *
 * @generated from message google.fhir.r4.core.EffectEvidenceSynthesis.EffectEstimate
 */
export type EffectEvidenceSynthesis_EffectEstimate = Message<"google.fhir.r4.core.EffectEvidenceSynthesis.EffectEstimate"> & {
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
   * Description of effect estimate
   *
   * @generated from field: google.fhir.r4.core.String description = 4;
   */
  description?: String;

  /**
   * Type of efffect estimate
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 5;
   */
  type?: CodeableConcept;

  /**
   * Variant exposure states
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept variant_state = 6;
   */
  variantState?: CodeableConcept;

  /**
   * Point estimate
   *
   * @generated from field: google.fhir.r4.core.Decimal value = 7;
   */
  value?: Decimal;

  /**
   * What unit is the outcome described in?
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept unit_of_measure = 8;
   */
  unitOfMeasure?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate precision_estimate = 9;
   */
  precisionEstimate: EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimate[];
};

/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.EffectEstimate.
 * Use `create(EffectEvidenceSynthesis_EffectEstimateSchema)` to create a new message.
 */
export const EffectEvidenceSynthesis_EffectEstimateSchema: GenMessage<EffectEvidenceSynthesis_EffectEstimate> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 3);

/**
 * How precise the estimate is
 *
 * @generated from message google.fhir.r4.core.EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate
 */
export type EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimate = Message<"google.fhir.r4.core.EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate"> & {
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
   * Type of precision estimate
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * Level of confidence interval
   *
   * @generated from field: google.fhir.r4.core.Decimal level = 5;
   */
  level?: Decimal;

  /**
   * Lower bound
   *
   * @generated from field: google.fhir.r4.core.Decimal from = 6;
   */
  from?: Decimal;

  /**
   * Upper bound
   *
   * @generated from field: google.fhir.r4.core.Decimal to = 7;
   */
  to?: Decimal;
};

/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate.
 * Use `create(EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchema)` to create a new message.
 */
export const EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchema: GenMessage<EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimate> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 3, 0);

/**
 * How certain is the effect
 *
 * @generated from message google.fhir.r4.core.EffectEvidenceSynthesis.Certainty
 */
export type EffectEvidenceSynthesis_Certainty = Message<"google.fhir.r4.core.EffectEvidenceSynthesis.Certainty"> & {
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
   * Certainty rating
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept rating = 4;
   */
  rating: CodeableConcept[];

  /**
   * Used for footnotes or explanatory notes
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 5;
   */
  note: Annotation[];

  /**
   * @generated from field: repeated google.fhir.r4.core.EffectEvidenceSynthesis.Certainty.CertaintySubcomponent certainty_subcomponent = 6;
   */
  certaintySubcomponent: EffectEvidenceSynthesis_Certainty_CertaintySubcomponent[];
};

/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.Certainty.
 * Use `create(EffectEvidenceSynthesis_CertaintySchema)` to create a new message.
 */
export const EffectEvidenceSynthesis_CertaintySchema: GenMessage<EffectEvidenceSynthesis_Certainty> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 4);

/**
 * A component that contributes to the overall certainty
 *
 * @generated from message google.fhir.r4.core.EffectEvidenceSynthesis.Certainty.CertaintySubcomponent
 */
export type EffectEvidenceSynthesis_Certainty_CertaintySubcomponent = Message<"google.fhir.r4.core.EffectEvidenceSynthesis.Certainty.CertaintySubcomponent"> & {
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
   * Type of subcomponent of certainty rating
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * Subcomponent certainty rating
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept rating = 5;
   */
  rating: CodeableConcept[];

  /**
   * Used for footnotes or explanatory notes
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 6;
   */
  note: Annotation[];
};

/**
 * Describes the message google.fhir.r4.core.EffectEvidenceSynthesis.Certainty.CertaintySubcomponent.
 * Use `create(EffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchema)` to create a new message.
 */
export const EffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchema: GenMessage<EffectEvidenceSynthesis_Certainty_CertaintySubcomponent> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_effect_evidence_synthesis, 0, 4, 0);

