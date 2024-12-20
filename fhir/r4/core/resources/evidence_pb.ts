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
// @generated from file proto/google/fhir/proto/r4/core/resources/evidence.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { PublicationStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Code, CodeableConcept, ContactDetail, Date, DateTime, Extension, Id, Identifier, Markdown, Meta, Narrative, Period, Reference, RelatedArtifact, String, Uri, UsageContext } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/evidence.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_evidence: GenFile = /*@__PURE__*/
  fileDesc("Cjhwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9ldmlkZW5jZS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKIEgoIRXZpZGVuY2USIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIlCgN1cmwYCiABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIzCgppZGVudGlmaWVyGAsgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEiwKB3ZlcnNpb24YDCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIpCgRuYW1lGA0gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKgoFdGl0bGUYDiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIwCgtzaG9ydF90aXRsZRgPIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEi0KCHN1YnRpdGxlGBAgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSQAoGc3RhdHVzGBEgASgLMiguZ29vZ2xlLmZoaXIucjQuY29yZS5FdmlkZW5jZS5TdGF0dXNDb2RlQgbw0IfrBAESKwoEZGF0ZRgSIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSLgoJcHVibGlzaGVyGBMgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMwoHY29udGFjdBgUIAMoCzIiLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29udGFjdERldGFpbBIyCgtkZXNjcmlwdGlvbhgVIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuTWFya2Rvd24SLQoEbm90ZRgWIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQW5ub3RhdGlvbhI2Cgt1c2VfY29udGV4dBgXIAMoCzIhLmdvb2dsZS5maGlyLnI0LmNvcmUuVXNhZ2VDb250ZXh0EjoKDGp1cmlzZGljdGlvbhgYIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjAKCWNvcHlyaWdodBgZIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuTWFya2Rvd24SMAoNYXBwcm92YWxfZGF0ZRgaIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZRIzChBsYXN0X3Jldmlld19kYXRlGBsgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlEjUKEGVmZmVjdGl2ZV9wZXJpb2QYHCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBIzCgV0b3BpYxgdIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjIKBmF1dGhvchgeIAMoCzIiLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29udGFjdERldGFpbBIyCgZlZGl0b3IYHyADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSNAoIcmV2aWV3ZXIYICADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSNAoIZW5kb3JzZXIYISADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSPgoQcmVsYXRlZF9hcnRpZmFjdBgiIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVsYXRlZEFydGlmYWN0ElkKE2V4cG9zdXJlX2JhY2tncm91bmQYIyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIc8NCH6wQB8v/8wgYQRXZpZGVuY2VWYXJpYWJsZRJQChBleHBvc3VyZV92YXJpYW50GCQgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCFvL//MIGEEV2aWRlbmNlVmFyaWFibGUSRwoHb3V0Y29tZRglIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhby//zCBhBFdmlkZW5jZVZhcmlhYmxlGpgCCgpTdGF0dXNDb2RlEj8KBXZhbHVlGAEgASgOMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5QdWJsaWNhdGlvblN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjptivmDsgUvaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9wdWJsaWNhdGlvbi1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZTpswJ/jtgUDsv7klwYwaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0V2aWRlbmNlmq+upAsqbmFtZS5tYXRjaGVzKCdbQS1aXShbQS1aYS16MC05X10pezAsMjU0fScpSgQIBxAIQngKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaVWdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvZXZpZGVuY2VfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Evidence.
 * A research context or question.
 * See http://hl7.org/fhir/StructureDefinition/Evidence
 *
 * @generated from message google.fhir.r4.core.Evidence
 */
export type Evidence = Message<"google.fhir.r4.core.Evidence"> & {
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
   * Canonical identifier for this evidence, represented as a URI (globally
   * unique)
   *
   * @generated from field: google.fhir.r4.core.Uri url = 10;
   */
  url?: Uri;

  /**
   * Additional identifier for the evidence
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 11;
   */
  identifier: Identifier[];

  /**
   * Business version of the evidence
   *
   * @generated from field: google.fhir.r4.core.String version = 12;
   */
  version?: String;

  /**
   * Name for this evidence (computer friendly)
   *
   * @generated from field: google.fhir.r4.core.String name = 13;
   */
  name?: String;

  /**
   * Name for this evidence (human friendly)
   *
   * @generated from field: google.fhir.r4.core.String title = 14;
   */
  title?: String;

  /**
   * Title for use in informal contexts
   *
   * @generated from field: google.fhir.r4.core.String short_title = 15;
   */
  shortTitle?: String;

  /**
   * Subordinate title of the Evidence
   *
   * @generated from field: google.fhir.r4.core.String subtitle = 16;
   */
  subtitle?: String;

  /**
   * @generated from field: google.fhir.r4.core.Evidence.StatusCode status = 17;
   */
  status?: Evidence_StatusCode;

  /**
   * Date last changed
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 18;
   */
  date?: DateTime;

  /**
   * Name of the publisher (organization or individual)
   *
   * @generated from field: google.fhir.r4.core.String publisher = 19;
   */
  publisher?: String;

  /**
   * Contact details for the publisher
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail contact = 20;
   */
  contact: ContactDetail[];

  /**
   * Natural language description of the evidence
   *
   * @generated from field: google.fhir.r4.core.Markdown description = 21;
   */
  description?: Markdown;

  /**
   * Used for footnotes or explanatory notes
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 22;
   */
  note: Annotation[];

  /**
   * The context that the content is intended to support
   *
   * @generated from field: repeated google.fhir.r4.core.UsageContext use_context = 23;
   */
  useContext: UsageContext[];

  /**
   * Intended jurisdiction for evidence (if applicable)
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept jurisdiction = 24;
   */
  jurisdiction: CodeableConcept[];

  /**
   * Use and/or publishing restrictions
   *
   * @generated from field: google.fhir.r4.core.Markdown copyright = 25;
   */
  copyright?: Markdown;

  /**
   * When the evidence was approved by publisher
   *
   * @generated from field: google.fhir.r4.core.Date approval_date = 26;
   */
  approvalDate?: Date;

  /**
   * When the evidence was last reviewed
   *
   * @generated from field: google.fhir.r4.core.Date last_review_date = 27;
   */
  lastReviewDate?: Date;

  /**
   * When the evidence is expected to be used
   *
   * @generated from field: google.fhir.r4.core.Period effective_period = 28;
   */
  effectivePeriod?: Period;

  /**
   * The category of the Evidence, such as Education, Treatment, Assessment,
   * etc.
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept topic = 29;
   */
  topic: CodeableConcept[];

  /**
   * Who authored the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail author = 30;
   */
  author: ContactDetail[];

  /**
   * Who edited the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail editor = 31;
   */
  editor: ContactDetail[];

  /**
   * Who reviewed the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail reviewer = 32;
   */
  reviewer: ContactDetail[];

  /**
   * Who endorsed the content
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail endorser = 33;
   */
  endorser: ContactDetail[];

  /**
   * Additional documentation, citations, etc.
   *
   * @generated from field: repeated google.fhir.r4.core.RelatedArtifact related_artifact = 34;
   */
  relatedArtifact: RelatedArtifact[];

  /**
   * What population?
   *
   * @generated from field: google.fhir.r4.core.Reference exposure_background = 35;
   */
  exposureBackground?: Reference;

  /**
   * What exposure?
   *
   * @generated from field: repeated google.fhir.r4.core.Reference exposure_variant = 36;
   */
  exposureVariant: Reference[];

  /**
   * What outcome?
   *
   * @generated from field: repeated google.fhir.r4.core.Reference outcome = 37;
   */
  outcome: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.Evidence.
 * Use `create(EvidenceSchema)` to create a new message.
 */
export const EvidenceSchema: GenMessage<Evidence> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_evidence, 0);

/**
 * draft | active | retired | unknown
 *
 * @generated from message google.fhir.r4.core.Evidence.StatusCode
 */
export type Evidence_StatusCode = Message<"google.fhir.r4.core.Evidence.StatusCode"> & {
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
 * Describes the message google.fhir.r4.core.Evidence.StatusCode.
 * Use `create(Evidence_StatusCodeSchema)` to create a new message.
 */
export const Evidence_StatusCodeSchema: GenMessage<Evidence_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_evidence, 0, 0);

