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
// @generated from file proto/google/fhir/proto/r4/core/resources/research_subject.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { ResearchSubjectStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Code, Extension, Id, Identifier, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/research_subject.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_research_subject: GenFile = /*@__PURE__*/
  fileDesc("CkBwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9yZXNlYXJjaF9zdWJqZWN0LnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlItUJCg9SZXNlYXJjaFN1YmplY3QSIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEkcKBnN0YXR1cxgLIAEoCzIvLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVzZWFyY2hTdWJqZWN0LlN0YXR1c0NvZGVCBvDQh+sEARIrCgZwZXJpb2QYDCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBJICgVzdHVkeRgNIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhnw0IfrBAHy//zCBg1SZXNlYXJjaFN0dWR5EkcKCmluZGl2aWR1YWwYDiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIT8NCH6wQB8v/8wgYHUGF0aWVudBIxCgxhc3NpZ25lZF9hcm0YDyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIvCgphY3R1YWxfYXJtGBAgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSPgoHY29uc2VudBgRIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg3y//zCBgdDb25zZW50GqECCgpTdGF0dXNDb2RlEkMKBXZhbHVlGAEgASgOMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5SZXNlYXJjaFN1YmplY3RTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cor5g7IFNGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVzZWFyY2gtc3ViamVjdC1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZTpDwJ/jtgUDsv7klwY3aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1Jlc2VhcmNoU3ViamVjdEoECAcQCEKAAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpdZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9yZXNlYXJjaF9zdWJqZWN0X2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for ResearchSubject.
 * Physical entity which is the primary unit of interest in the study.
 * See http://hl7.org/fhir/StructureDefinition/ResearchSubject
 *
 * @generated from message google.fhir.r4.core.ResearchSubject
 */
export type ResearchSubject = Message<"google.fhir.r4.core.ResearchSubject"> & {
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
   * Business Identifier for research subject in a study
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * @generated from field: google.fhir.r4.core.ResearchSubject.StatusCode status = 11;
   */
  status?: ResearchSubject_StatusCode;

  /**
   * Start and end of participation
   *
   * @generated from field: google.fhir.r4.core.Period period = 12;
   */
  period?: Period;

  /**
   * Study subject is part of
   *
   * @generated from field: google.fhir.r4.core.Reference study = 13;
   */
  study?: Reference;

  /**
   * Who is part of study
   *
   * @generated from field: google.fhir.r4.core.Reference individual = 14;
   */
  individual?: Reference;

  /**
   * What path should be followed
   *
   * @generated from field: google.fhir.r4.core.String assigned_arm = 15;
   */
  assignedArm?: String;

  /**
   * What path was followed
   *
   * @generated from field: google.fhir.r4.core.String actual_arm = 16;
   */
  actualArm?: String;

  /**
   * Agreement to participate in study
   *
   * @generated from field: google.fhir.r4.core.Reference consent = 17;
   */
  consent?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.ResearchSubject.
 * Use `create(ResearchSubjectSchema)` to create a new message.
 */
export const ResearchSubjectSchema: GenMessage<ResearchSubject> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_research_subject, 0);

/**
 * candidate | eligible | follow-up | ineligible | not-registered | off-study
 * | on-study | on-study-intervention | on-study-observation |
 * pending-on-study | potential-candidate | screening | withdrawn
 *
 * @generated from message google.fhir.r4.core.ResearchSubject.StatusCode
 */
export type ResearchSubject_StatusCode = Message<"google.fhir.r4.core.ResearchSubject.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ResearchSubjectStatusCode.Value value = 1;
   */
  value: ResearchSubjectStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.ResearchSubject.StatusCode.
 * Use `create(ResearchSubject_StatusCodeSchema)` to create a new message.
 */
export const ResearchSubject_StatusCodeSchema: GenMessage<ResearchSubject_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_research_subject, 0, 0);

