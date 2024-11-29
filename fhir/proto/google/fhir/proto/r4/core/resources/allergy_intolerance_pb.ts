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
// @generated from file proto/google/fhir/proto/r4/core/resources/allergy_intolerance.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { AllergyIntoleranceCategoryCode_Value, AllergyIntoleranceCriticalityCode_Value, AllergyIntoleranceSeverityCode_Value, AllergyIntoleranceTypeCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Age, Annotation, Code, CodeableConcept, DateTime, Extension, Id, Identifier, Meta, Narrative, Period, Range, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/allergy_intolerance.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_allergy_intolerance: GenFile = /*@__PURE__*/
  fileDesc("CkNwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9hbGxlcmd5X2ludG9sZXJhbmNlLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIrcfChJBbGxlcmd5SW50b2xlcmFuY2USIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEj0KD2NsaW5pY2FsX3N0YXR1cxgLIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkEKE3ZlcmlmaWNhdGlvbl9zdGF0dXMYDCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI+CgR0eXBlGA0gASgLMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5BbGxlcmd5SW50b2xlcmFuY2UuVHlwZUNvZGUSRgoIY2F0ZWdvcnkYDiADKAsyNC5nb29nbGUuZmhpci5yNC5jb3JlLkFsbGVyZ3lJbnRvbGVyYW5jZS5DYXRlZ29yeUNvZGUSTAoLY3JpdGljYWxpdHkYDyABKAsyNy5nb29nbGUuZmhpci5yNC5jb3JlLkFsbGVyZ3lJbnRvbGVyYW5jZS5Dcml0aWNhbGl0eUNvZGUSMgoEY29kZRgQIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkQKB3BhdGllbnQYESABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIT8NCH6wQB8v/8wgYHUGF0aWVudBJCCgllbmNvdW50ZXIYEiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJRW5jb3VudGVyEj0KBW9uc2V0GBMgASgLMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5BbGxlcmd5SW50b2xlcmFuY2UuT25zZXRYEjQKDXJlY29yZGVkX2RhdGUYFCABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEnoKCHJlY29yZGVyGBUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCSPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgdQYXRpZW508v/8wgYNUmVsYXRlZFBlcnNvbhJ6Cghhc3NlcnRlchgWIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQkjy//zCBgdQYXRpZW508v/8wgYNUmVsYXRlZFBlcnNvbvL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGUSNgoPbGFzdF9vY2N1cnJlbmNlGBcgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRItCgRub3RlGBggAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5Bbm5vdGF0aW9uEkIKCHJlYWN0aW9uGBkgAygLMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5BbGxlcmd5SW50b2xlcmFuY2UuUmVhY3Rpb24aoQIKCFR5cGVDb2RlEkQKBXZhbHVlGAEgASgOMjUuZ29vZ2xlLmZoaXIucjQuY29yZS5BbGxlcmd5SW50b2xlcmFuY2VUeXBlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnOK+YOyBTVodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2FsbGVyZ3ktaW50b2xlcmFuY2UtdHlwZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGq0CCgxDYXRlZ29yeUNvZGUSSAoFdmFsdWUYASABKA4yOS5nb29nbGUuZmhpci5yNC5jb3JlLkFsbGVyZ3lJbnRvbGVyYW5jZUNhdGVnb3J5Q29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOneK+YOyBTlodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2FsbGVyZ3ktaW50b2xlcmFuY2UtY2F0ZWdvcnnAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRq2AgoPQ3JpdGljYWxpdHlDb2RlEksKBXZhbHVlGAEgASgOMjwuZ29vZ2xlLmZoaXIucjQuY29yZS5BbGxlcmd5SW50b2xlcmFuY2VDcml0aWNhbGl0eUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjp6ivmDsgU8aHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hbGxlcmd5LWludG9sZXJhbmNlLWNyaXRpY2FsaXR5wJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUakAIKBk9uc2V0WBIyCglkYXRlX3RpbWUYASABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lSAASJwoDYWdlGAIgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5BZ2VIABItCgZwZXJpb2QYAyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZEgAEisKBXJhbmdlGAQgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYW5nZUgAEjsKDHN0cmluZ192YWx1ZRgFIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZzoGoIOD6AYBQggKBmNob2ljZRrpBgoIUmVhY3Rpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI3CglzdWJzdGFuY2UYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJDCg1tYW5pZmVzdGF0aW9uGAUgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARIwCgtkZXNjcmlwdGlvbhgGIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEiwKBW9uc2V0GAcgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRJPCghzZXZlcml0eRgIIAEoCzI9Lmdvb2dsZS5maGlyLnI0LmNvcmUuQWxsZXJneUludG9sZXJhbmNlLlJlYWN0aW9uLlNldmVyaXR5Q29kZRI8Cg5leHBvc3VyZV9yb3V0ZRgJIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ei0KBG5vdGUYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkFubm90YXRpb24aqAIKDFNldmVyaXR5Q29kZRJICgV2YWx1ZRgBIAEoDjI5Lmdvb2dsZS5maGlyLnI0LmNvcmUuQWxsZXJneUludG9sZXJhbmNlU2V2ZXJpdHlDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cor5g7IFNGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVhY3Rpb24tZXZlbnQtc2V2ZXJpdHnAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZTq4A8Cf47YFA7L+5JcGOmh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9BbGxlcmd5SW50b2xlcmFuY2WahpOgCLMBdmVyaWZpY2F0aW9uU3RhdHVzLmNvZGluZy53aGVyZShzeXN0ZW0gPSAnaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hbGxlcmd5aW50b2xlcmFuY2UtdmVyaWZpY2F0aW9uJyBhbmQgY29kZSA9ICdlbnRlcmVkLWluLWVycm9yJykuZXhpc3RzKCkgb3IgY2xpbmljYWxTdGF0dXMuZXhpc3RzKCmahpOgCLEBdmVyaWZpY2F0aW9uU3RhdHVzLmNvZGluZy53aGVyZShzeXN0ZW0gPSAnaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9hbGxlcmd5aW50b2xlcmFuY2UtdmVyaWZpY2F0aW9uJyBhbmQgY29kZSA9ICdlbnRlcmVkLWluLWVycm9yJykuZW1wdHkoKSBvciBjbGluaWNhbFN0YXR1cy5lbXB0eSgpSgQIBxAIQoMBChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWmBnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2FsbGVyZ3lfaW50b2xlcmFuY2VfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for AllergyIntolerance.
 * Allergy or Intolerance (generally: Risk of adverse reaction to a substance).
 * See http://hl7.org/fhir/StructureDefinition/AllergyIntolerance
 *
 * @generated from message google.fhir.r4.core.AllergyIntolerance
 */
export type AllergyIntolerance = Message<"google.fhir.r4.core.AllergyIntolerance"> & {
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
   * External ids for this item
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * active | inactive | resolved
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept clinical_status = 11;
   */
  clinicalStatus?: CodeableConcept;

  /**
   * unconfirmed | confirmed | refuted | entered-in-error
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept verification_status = 12;
   */
  verificationStatus?: CodeableConcept;

  /**
   * @generated from field: google.fhir.r4.core.AllergyIntolerance.TypeCode type = 13;
   */
  type?: AllergyIntolerance_TypeCode;

  /**
   * @generated from field: repeated google.fhir.r4.core.AllergyIntolerance.CategoryCode category = 14;
   */
  category: AllergyIntolerance_CategoryCode[];

  /**
   * @generated from field: google.fhir.r4.core.AllergyIntolerance.CriticalityCode criticality = 15;
   */
  criticality?: AllergyIntolerance_CriticalityCode;

  /**
   * Code that identifies the allergy or intolerance
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 16;
   */
  code?: CodeableConcept;

  /**
   * Who the sensitivity is for
   *
   * @generated from field: google.fhir.r4.core.Reference patient = 17;
   */
  patient?: Reference;

  /**
   * Encounter when the allergy or intolerance was asserted
   *
   * @generated from field: google.fhir.r4.core.Reference encounter = 18;
   */
  encounter?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.AllergyIntolerance.OnsetX onset = 19;
   */
  onset?: AllergyIntolerance_OnsetX;

  /**
   * Date first version of the resource instance was recorded
   *
   * @generated from field: google.fhir.r4.core.DateTime recorded_date = 20;
   */
  recordedDate?: DateTime;

  /**
   * Who recorded the sensitivity
   *
   * @generated from field: google.fhir.r4.core.Reference recorder = 21;
   */
  recorder?: Reference;

  /**
   * Source of the information about the allergy
   *
   * @generated from field: google.fhir.r4.core.Reference asserter = 22;
   */
  asserter?: Reference;

  /**
   * Date(/time) of last known occurrence of a reaction
   *
   * @generated from field: google.fhir.r4.core.DateTime last_occurrence = 23;
   */
  lastOccurrence?: DateTime;

  /**
   * Additional text not captured in other fields
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 24;
   */
  note: Annotation[];

  /**
   * @generated from field: repeated google.fhir.r4.core.AllergyIntolerance.Reaction reaction = 25;
   */
  reaction: AllergyIntolerance_Reaction[];
};

/**
 * Describes the message google.fhir.r4.core.AllergyIntolerance.
 * Use `create(AllergyIntoleranceSchema)` to create a new message.
 */
export const AllergyIntoleranceSchema: GenMessage<AllergyIntolerance> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_allergy_intolerance, 0);

/**
 * allergy | intolerance - Underlying mechanism (if known)
 *
 * @generated from message google.fhir.r4.core.AllergyIntolerance.TypeCode
 */
export type AllergyIntolerance_TypeCode = Message<"google.fhir.r4.core.AllergyIntolerance.TypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.AllergyIntoleranceTypeCode.Value value = 1;
   */
  value: AllergyIntoleranceTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.AllergyIntolerance.TypeCode.
 * Use `create(AllergyIntolerance_TypeCodeSchema)` to create a new message.
 */
export const AllergyIntolerance_TypeCodeSchema: GenMessage<AllergyIntolerance_TypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_allergy_intolerance, 0, 0);

/**
 * food | medication | environment | biologic
 *
 * @generated from message google.fhir.r4.core.AllergyIntolerance.CategoryCode
 */
export type AllergyIntolerance_CategoryCode = Message<"google.fhir.r4.core.AllergyIntolerance.CategoryCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.AllergyIntoleranceCategoryCode.Value value = 1;
   */
  value: AllergyIntoleranceCategoryCode_Value;

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
 * Describes the message google.fhir.r4.core.AllergyIntolerance.CategoryCode.
 * Use `create(AllergyIntolerance_CategoryCodeSchema)` to create a new message.
 */
export const AllergyIntolerance_CategoryCodeSchema: GenMessage<AllergyIntolerance_CategoryCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_allergy_intolerance, 0, 1);

/**
 * low | high | unable-to-assess
 *
 * @generated from message google.fhir.r4.core.AllergyIntolerance.CriticalityCode
 */
export type AllergyIntolerance_CriticalityCode = Message<"google.fhir.r4.core.AllergyIntolerance.CriticalityCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.AllergyIntoleranceCriticalityCode.Value value = 1;
   */
  value: AllergyIntoleranceCriticalityCode_Value;

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
 * Describes the message google.fhir.r4.core.AllergyIntolerance.CriticalityCode.
 * Use `create(AllergyIntolerance_CriticalityCodeSchema)` to create a new message.
 */
export const AllergyIntolerance_CriticalityCodeSchema: GenMessage<AllergyIntolerance_CriticalityCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_allergy_intolerance, 0, 2);

/**
 * When allergy or intolerance was identified
 *
 * @generated from message google.fhir.r4.core.AllergyIntolerance.OnsetX
 */
export type AllergyIntolerance_OnsetX = Message<"google.fhir.r4.core.AllergyIntolerance.OnsetX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.AllergyIntolerance.OnsetX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 1;
     */
    value: DateTime;
    case: "dateTime";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Age age = 2;
     */
    value: Age;
    case: "age";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Period period = 3;
     */
    value: Period;
    case: "period";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Range range = 4;
     */
    value: Range;
    case: "range";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 5 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.AllergyIntolerance.OnsetX.
 * Use `create(AllergyIntolerance_OnsetXSchema)` to create a new message.
 */
export const AllergyIntolerance_OnsetXSchema: GenMessage<AllergyIntolerance_OnsetX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_allergy_intolerance, 0, 3);

/**
 * Adverse Reaction Events linked to exposure to substance
 *
 * @generated from message google.fhir.r4.core.AllergyIntolerance.Reaction
 */
export type AllergyIntolerance_Reaction = Message<"google.fhir.r4.core.AllergyIntolerance.Reaction"> & {
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
   * Specific substance or pharmaceutical product considered to be responsible
   * for event
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept substance = 4;
   */
  substance?: CodeableConcept;

  /**
   * Clinical symptoms/signs associated with the Event
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept manifestation = 5;
   */
  manifestation: CodeableConcept[];

  /**
   * Description of the event as a whole
   *
   * @generated from field: google.fhir.r4.core.String description = 6;
   */
  description?: String;

  /**
   * Date(/time) when manifestations showed
   *
   * @generated from field: google.fhir.r4.core.DateTime onset = 7;
   */
  onset?: DateTime;

  /**
   * @generated from field: google.fhir.r4.core.AllergyIntolerance.Reaction.SeverityCode severity = 8;
   */
  severity?: AllergyIntolerance_Reaction_SeverityCode;

  /**
   * How the subject was exposed to the substance
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept exposure_route = 9;
   */
  exposureRoute?: CodeableConcept;

  /**
   * Text about event not captured in other fields
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 10;
   */
  note: Annotation[];
};

/**
 * Describes the message google.fhir.r4.core.AllergyIntolerance.Reaction.
 * Use `create(AllergyIntolerance_ReactionSchema)` to create a new message.
 */
export const AllergyIntolerance_ReactionSchema: GenMessage<AllergyIntolerance_Reaction> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_allergy_intolerance, 0, 4);

/**
 * mild | moderate | severe (of event as a whole)
 *
 * @generated from message google.fhir.r4.core.AllergyIntolerance.Reaction.SeverityCode
 */
export type AllergyIntolerance_Reaction_SeverityCode = Message<"google.fhir.r4.core.AllergyIntolerance.Reaction.SeverityCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.AllergyIntoleranceSeverityCode.Value value = 1;
   */
  value: AllergyIntoleranceSeverityCode_Value;

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
 * Describes the message google.fhir.r4.core.AllergyIntolerance.Reaction.SeverityCode.
 * Use `create(AllergyIntolerance_Reaction_SeverityCodeSchema)` to create a new message.
 */
export const AllergyIntolerance_Reaction_SeverityCodeSchema: GenMessage<AllergyIntolerance_Reaction_SeverityCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_allergy_intolerance, 0, 4, 0);

