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
// @generated from file proto/google/fhir/proto/r4/core/resources/research_study.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { ResearchStudyStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Code, CodeableConcept, ContactDetail, Extension, Id, Identifier, Markdown, Meta, Narrative, Period, Reference, RelatedArtifact, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/research_study.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_research_study: GenFile = /*@__PURE__*/
  fileDesc("Cj5wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9yZXNlYXJjaF9zdHVkeS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLUFQoNUmVzZWFyY2hTdHVkeRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISKgoFdGl0bGUYCyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJGCghwcm90b2NvbBgMIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhTy//zCBg5QbGFuRGVmaW5pdGlvbhJECgdwYXJ0X29mGA0gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCE/L//MIGDVJlc2VhcmNoU3R1ZHkSRQoGc3RhdHVzGA4gASgLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5SZXNlYXJjaFN0dWR5LlN0YXR1c0NvZGVCBvDQh+sEARJCChRwcmltYXJ5X3B1cnBvc2VfdHlwZRgPIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjMKBXBoYXNlGBAgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNgoIY2F0ZWdvcnkYESADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIzCgVmb2N1cxgSIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjcKCWNvbmRpdGlvbhgTIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjMKB2NvbnRhY3QYFCADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSPgoQcmVsYXRlZF9hcnRpZmFjdBgVIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVsYXRlZEFydGlmYWN0EjUKB2tleXdvcmQYFiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI2Cghsb2NhdGlvbhgXIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjIKC2Rlc2NyaXB0aW9uGBggASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhI/CgplbnJvbGxtZW50GBkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCC/L//MIGBUdyb3VwEisKBnBlcmlvZBgaIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kEkMKB3Nwb25zb3IYGyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEmgKFnByaW5jaXBhbF9pbnZlc3RpZ2F0b3IYHCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIo8v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZRI8CgRzaXRlGB0gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCExvY2F0aW9uEjwKDnJlYXNvbl9zdG9wcGVkGB4gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLQoEbm90ZRgfIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQW5ub3RhdGlvbhIzCgNhcm0YICADKAsyJi5nb29nbGUuZmhpci5yNC5jb3JlLlJlc2VhcmNoU3R1ZHkuQXJtEj8KCW9iamVjdGl2ZRghIAMoCzIsLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVzZWFyY2hTdHVkeS5PYmplY3RpdmUanQIKClN0YXR1c0NvZGUSQQoFdmFsdWUYASABKA4yMi5nb29nbGUuZmhpci5yNC5jb3JlLlJlc2VhcmNoU3R1ZHlTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cIr5g7IFMmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVzZWFyY2gtc3R1ZHktc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUatgIKA0FybRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjEKBG5hbWUYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0IG8NCH6wQBEjIKBHR5cGUYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIwCgtkZXNjcmlwdGlvbhgGIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGoICCglPYmplY3RpdmUSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIpCgRuYW1lGAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMgoEdHlwZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0OkHAn+O2BQOy/uSXBjVodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vUmVzZWFyY2hTdHVkeUoECAcQCEJ+Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWltnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL3Jlc2VhcmNoX3N0dWR5X2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for ResearchStudy.
 * Investigation to increase healthcare-related patient-independent knowledge.
 * See http://hl7.org/fhir/StructureDefinition/ResearchStudy
 *
 * @generated from message google.fhir.r4.core.ResearchStudy
 */
export type ResearchStudy = Message<"google.fhir.r4.core.ResearchStudy"> & {
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
   * Business Identifier for study
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Name for this study
   *
   * @generated from field: google.fhir.r4.core.String title = 11;
   */
  title?: String;

  /**
   * Steps followed in executing study
   *
   * @generated from field: repeated google.fhir.r4.core.Reference protocol = 12;
   */
  protocol: Reference[];

  /**
   * Part of larger study
   *
   * @generated from field: repeated google.fhir.r4.core.Reference part_of = 13;
   */
  partOf: Reference[];

  /**
   * @generated from field: google.fhir.r4.core.ResearchStudy.StatusCode status = 14;
   */
  status?: ResearchStudy_StatusCode;

  /**
   * treatment | prevention | diagnostic | supportive-care | screening |
   * health-services-research | basic-science | device-feasibility
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept primary_purpose_type = 15;
   */
  primaryPurposeType?: CodeableConcept;

  /**
   * n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3
   * | phase-3 | phase-4
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept phase = 16;
   */
  phase?: CodeableConcept;

  /**
   * Classifications for the study
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 17;
   */
  category: CodeableConcept[];

  /**
   * Drugs, devices, etc. under study
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept focus = 18;
   */
  focus: CodeableConcept[];

  /**
   * Condition being studied
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept condition = 19;
   */
  condition: CodeableConcept[];

  /**
   * Contact details for the study
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail contact = 20;
   */
  contact: ContactDetail[];

  /**
   * References and dependencies
   *
   * @generated from field: repeated google.fhir.r4.core.RelatedArtifact related_artifact = 21;
   */
  relatedArtifact: RelatedArtifact[];

  /**
   * Used to search for the study
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept keyword = 22;
   */
  keyword: CodeableConcept[];

  /**
   * Geographic region(s) for study
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept location = 23;
   */
  location: CodeableConcept[];

  /**
   * What this is study doing
   *
   * @generated from field: google.fhir.r4.core.Markdown description = 24;
   */
  description?: Markdown;

  /**
   * Inclusion & exclusion criteria
   *
   * @generated from field: repeated google.fhir.r4.core.Reference enrollment = 25;
   */
  enrollment: Reference[];

  /**
   * When the study began and ended
   *
   * @generated from field: google.fhir.r4.core.Period period = 26;
   */
  period?: Period;

  /**
   * Organization that initiates and is legally responsible for the study
   *
   * @generated from field: google.fhir.r4.core.Reference sponsor = 27;
   */
  sponsor?: Reference;

  /**
   * Researcher who oversees multiple aspects of the study
   *
   * @generated from field: google.fhir.r4.core.Reference principal_investigator = 28;
   */
  principalInvestigator?: Reference;

  /**
   * Facility where study activities are conducted
   *
   * @generated from field: repeated google.fhir.r4.core.Reference site = 29;
   */
  site: Reference[];

  /**
   * accrual-goal-met | closed-due-to-toxicity |
   * closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept reason_stopped = 30;
   */
  reasonStopped?: CodeableConcept;

  /**
   * Comments made about the study
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 31;
   */
  note: Annotation[];

  /**
   * @generated from field: repeated google.fhir.r4.core.ResearchStudy.Arm arm = 32;
   */
  arm: ResearchStudy_Arm[];

  /**
   * @generated from field: repeated google.fhir.r4.core.ResearchStudy.Objective objective = 33;
   */
  objective: ResearchStudy_Objective[];
};

/**
 * Describes the message google.fhir.r4.core.ResearchStudy.
 * Use `create(ResearchStudySchema)` to create a new message.
 */
export const ResearchStudySchema: GenMessage<ResearchStudy> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_research_study, 0);

/**
 * active | administratively-completed | approved | closed-to-accrual |
 * closed-to-accrual-and-intervention | completed | disapproved | in-review |
 * temporarily-closed-to-accrual |
 * temporarily-closed-to-accrual-and-intervention | withdrawn
 *
 * @generated from message google.fhir.r4.core.ResearchStudy.StatusCode
 */
export type ResearchStudy_StatusCode = Message<"google.fhir.r4.core.ResearchStudy.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ResearchStudyStatusCode.Value value = 1;
   */
  value: ResearchStudyStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.ResearchStudy.StatusCode.
 * Use `create(ResearchStudy_StatusCodeSchema)` to create a new message.
 */
export const ResearchStudy_StatusCodeSchema: GenMessage<ResearchStudy_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_research_study, 0, 0);

/**
 * Defined path through the study for a subject
 *
 * @generated from message google.fhir.r4.core.ResearchStudy.Arm
 */
export type ResearchStudy_Arm = Message<"google.fhir.r4.core.ResearchStudy.Arm"> & {
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
   * Label for study arm
   *
   * @generated from field: google.fhir.r4.core.String name = 4;
   */
  name?: String;

  /**
   * Categorization of study arm
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 5;
   */
  type?: CodeableConcept;

  /**
   * Short explanation of study path
   *
   * @generated from field: google.fhir.r4.core.String description = 6;
   */
  description?: String;
};

/**
 * Describes the message google.fhir.r4.core.ResearchStudy.Arm.
 * Use `create(ResearchStudy_ArmSchema)` to create a new message.
 */
export const ResearchStudy_ArmSchema: GenMessage<ResearchStudy_Arm> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_research_study, 0, 1);

/**
 * A goal for the study
 *
 * @generated from message google.fhir.r4.core.ResearchStudy.Objective
 */
export type ResearchStudy_Objective = Message<"google.fhir.r4.core.ResearchStudy.Objective"> & {
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
   * Label for the objective
   *
   * @generated from field: google.fhir.r4.core.String name = 4;
   */
  name?: String;

  /**
   * primary | secondary | exploratory
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 5;
   */
  type?: CodeableConcept;
};

/**
 * Describes the message google.fhir.r4.core.ResearchStudy.Objective.
 * Use `create(ResearchStudy_ObjectiveSchema)` to create a new message.
 */
export const ResearchStudy_ObjectiveSchema: GenMessage<ResearchStudy_Objective> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_research_study, 0, 2);

