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
// @generated from file proto/google/fhir/proto/r4/core/resources/measure_report.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { MeasureReportStatusCode_Value, MeasureReportTypeCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Canonical, Code, CodeableConcept, DateTime, Extension, Id, Identifier, Integer, Meta, Narrative, Period, Quantity, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/measure_report.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_measure_report: GenFile = /*@__PURE__*/
  fileDesc("Cj5wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWFzdXJlX3JlcG9ydC5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLLIAoNTWVhc3VyZVJlcG9ydBIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISRQoGc3RhdHVzGAsgASgLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5NZWFzdXJlUmVwb3J0LlN0YXR1c0NvZGVCBvDQh+sEARJBCgR0eXBlGAwgASgLMisuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWFzdXJlUmVwb3J0LlR5cGVDb2RlQgbw0IfrBAESNwoHbWVhc3VyZRgNIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsQgbw0IfrBAESngEKB3N1YmplY3QYDiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJt8v/8wgYHUGF0aWVudPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBghMb2NhdGlvbvL//MIGBkRldmljZfL//MIGDVJlbGF0ZWRQZXJzb27y//zCBgVHcm91cBIrCgRkYXRlGA8gASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRJ6CghyZXBvcnRlchgQIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQkjy//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xl8v/8wgYITG9jYXRpb27y//zCBgxPcmdhbml6YXRpb24SMwoGcGVyaW9kGBEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2RCBvDQh+sEARJCChRpbXByb3ZlbWVudF9ub3RhdGlvbhgSIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjcKBWdyb3VwGBMgAygLMiguZ29vZ2xlLmZoaXIucjQuY29yZS5NZWFzdXJlUmVwb3J0Lkdyb3VwEkoKEmV2YWx1YXRlZF9yZXNvdXJjZRgUIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghSZXNvdXJjZRqdAgoKU3RhdHVzQ29kZRJBCgV2YWx1ZRgBIAEoDjIyLmdvb2dsZS5maGlyLnI0LmNvcmUuTWVhc3VyZVJlcG9ydFN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpwivmDsgUyaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZWFzdXJlLXJlcG9ydC1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqXAgoIVHlwZUNvZGUSPwoFdmFsdWUYASABKA4yMC5nb29nbGUuZmhpci5yNC5jb3JlLk1lYXN1cmVSZXBvcnRUeXBlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOm6K+YOyBTBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21lYXN1cmUtcmVwb3J0LXR5cGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqAEQoFR3JvdXASJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIyCgRjb2RlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSRwoKcG9wdWxhdGlvbhgFIAMoCzIzLmdvb2dsZS5maGlyLnI0LmNvcmUuTWVhc3VyZVJlcG9ydC5Hcm91cC5Qb3B1bGF0aW9uEjQKDW1lYXN1cmVfc2NvcmUYBiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLlF1YW50aXR5EkcKCnN0cmF0aWZpZXIYByADKAsyMy5nb29nbGUuZmhpci5yNC5jb3JlLk1lYXN1cmVSZXBvcnQuR3JvdXAuU3RyYXRpZmllchrKAgoKUG9wdWxhdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBGNvZGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIrCgVjb3VudBgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlchJDCg9zdWJqZWN0X3Jlc3VsdHMYBiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIK8v/8wgYETGlzdBqVCwoKU3RyYXRpZmllchInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBGNvZGUYBCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJUCgdzdHJhdHVtGAUgAygLMkMuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWFzdXJlUmVwb3J0Lkdyb3VwLlN0cmF0aWZpZXIuU3RyYXRpZmllckdyb3VwGuQICg9TdHJhdGlmaWVyR3JvdXASJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgV2YWx1ZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EmAKCWNvbXBvbmVudBgFIAMoCzJNLmdvb2dsZS5maGlyLnI0LmNvcmUuTWVhc3VyZVJlcG9ydC5Hcm91cC5TdHJhdGlmaWVyLlN0cmF0aWZpZXJHcm91cC5Db21wb25lbnQScQoKcG9wdWxhdGlvbhgGIAMoCzJdLmdvb2dsZS5maGlyLnI0LmNvcmUuTWVhc3VyZVJlcG9ydC5Hcm91cC5TdHJhdGlmaWVyLlN0cmF0aWZpZXJHcm91cC5TdHJhdGlmaWVyR3JvdXBQb3B1bGF0aW9uEjQKDW1lYXN1cmVfc2NvcmUYByABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLlF1YW50aXR5GpwCCglDb21wb25lbnQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6CgRjb2RlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARI7CgV2YWx1ZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAEa2QIKGVN0cmF0aWZpZXJHcm91cFBvcHVsYXRpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIyCgRjb2RlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSKwoFY291bnQYBSABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXISQwoPc3ViamVjdF9yZXN1bHRzGAYgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCCvL//MIGBExpc3Q6wwHAn+O2BQOy/uSXBjVodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vTWVhc3VyZVJlcG9ydJqGk6AIMyh0eXBlICE9ICdkYXRhLWNvbGxlY3Rpb24nKSBvciBncm91cC5leGlzdHMoKS5ub3QoKZqGk6AIQ2dyb3VwLnN0cmF0aWZpZXIuc3RyYXR1bS5hbGwodmFsdWUuZXhpc3RzKCkgeG9yIGNvbXBvbmVudC5leGlzdHMoKSlKBAgHEAhCfgoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpbZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWFzdXJlX3JlcG9ydF9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for MeasureReport.
 * Results of a measure evaluation.
 * See http://hl7.org/fhir/StructureDefinition/MeasureReport
 *
 * @generated from message google.fhir.r4.core.MeasureReport
 */
export type MeasureReport = Message<"google.fhir.r4.core.MeasureReport"> & {
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
   * Additional identifier for the MeasureReport
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * @generated from field: google.fhir.r4.core.MeasureReport.StatusCode status = 11;
   */
  status?: MeasureReport_StatusCode;

  /**
   * @generated from field: google.fhir.r4.core.MeasureReport.TypeCode type = 12;
   */
  type?: MeasureReport_TypeCode;

  /**
   * What measure was calculated
   *
   * @generated from field: google.fhir.r4.core.Canonical measure = 13;
   */
  measure?: Canonical;

  /**
   * What individual(s) the report is for
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 14;
   */
  subject?: Reference;

  /**
   * When the report was generated
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 15;
   */
  date?: DateTime;

  /**
   * Who is reporting the data
   *
   * @generated from field: google.fhir.r4.core.Reference reporter = 16;
   */
  reporter?: Reference;

  /**
   * What period the report covers
   *
   * @generated from field: google.fhir.r4.core.Period period = 17;
   */
  period?: Period;

  /**
   * increase | decrease
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept improvement_notation = 18;
   */
  improvementNotation?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group group = 19;
   */
  group: MeasureReport_Group[];

  /**
   * What data was used to calculate the measure score
   *
   * @generated from field: repeated google.fhir.r4.core.Reference evaluated_resource = 20;
   */
  evaluatedResource: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.MeasureReport.
 * Use `create(MeasureReportSchema)` to create a new message.
 */
export const MeasureReportSchema: GenMessage<MeasureReport> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_measure_report, 0);

/**
 * complete | pending | error
 *
 * @generated from message google.fhir.r4.core.MeasureReport.StatusCode
 */
export type MeasureReport_StatusCode = Message<"google.fhir.r4.core.MeasureReport.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.MeasureReportStatusCode.Value value = 1;
   */
  value: MeasureReportStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.MeasureReport.StatusCode.
 * Use `create(MeasureReport_StatusCodeSchema)` to create a new message.
 */
export const MeasureReport_StatusCodeSchema: GenMessage<MeasureReport_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 0);

/**
 * individual | subject-list | summary | data-collection
 *
 * @generated from message google.fhir.r4.core.MeasureReport.TypeCode
 */
export type MeasureReport_TypeCode = Message<"google.fhir.r4.core.MeasureReport.TypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.MeasureReportTypeCode.Value value = 1;
   */
  value: MeasureReportTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.MeasureReport.TypeCode.
 * Use `create(MeasureReport_TypeCodeSchema)` to create a new message.
 */
export const MeasureReport_TypeCodeSchema: GenMessage<MeasureReport_TypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 1);

/**
 * Measure results for each group
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group
 */
export type MeasureReport_Group = Message<"google.fhir.r4.core.MeasureReport.Group"> & {
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
   * Meaning of the group
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 4;
   */
  code?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group.Population population = 5;
   */
  population: MeasureReport_Group_Population[];

  /**
   * What score this group achieved
   *
   * @generated from field: google.fhir.r4.core.Quantity measure_score = 6;
   */
  measureScore?: Quantity;

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group.Stratifier stratifier = 7;
   */
  stratifier: MeasureReport_Group_Stratifier[];
};

/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.
 * Use `create(MeasureReport_GroupSchema)` to create a new message.
 */
export const MeasureReport_GroupSchema: GenMessage<MeasureReport_Group> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2);

/**
 * The populations in the group
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group.Population
 */
export type MeasureReport_Group_Population = Message<"google.fhir.r4.core.MeasureReport.Group.Population"> & {
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
   * initial-population | numerator | numerator-exclusion | denominator |
   * denominator-exclusion | denominator-exception | measure-population |
   * measure-population-exclusion | measure-observation
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 4;
   */
  code?: CodeableConcept;

  /**
   * Size of the population
   *
   * @generated from field: google.fhir.r4.core.Integer count = 5;
   */
  count?: Integer;

  /**
   * For subject-list reports, the subject results in this population
   *
   * @generated from field: google.fhir.r4.core.Reference subject_results = 6;
   */
  subjectResults?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.Population.
 * Use `create(MeasureReport_Group_PopulationSchema)` to create a new message.
 */
export const MeasureReport_Group_PopulationSchema: GenMessage<MeasureReport_Group_Population> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2, 0);

/**
 * Stratification results
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group.Stratifier
 */
export type MeasureReport_Group_Stratifier = Message<"google.fhir.r4.core.MeasureReport.Group.Stratifier"> & {
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
   * What stratifier of the group
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept code = 4;
   */
  code: CodeableConcept[];

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup stratum = 5;
   */
  stratum: MeasureReport_Group_Stratifier_StratifierGroup[];
};

/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.Stratifier.
 * Use `create(MeasureReport_Group_StratifierSchema)` to create a new message.
 */
export const MeasureReport_Group_StratifierSchema: GenMessage<MeasureReport_Group_Stratifier> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2, 1);

/**
 * Stratum results, one for each unique value, or set of values, in the
 * stratifier, or stratifier components
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup
 */
export type MeasureReport_Group_Stratifier_StratifierGroup = Message<"google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup"> & {
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
   * The stratum value, e.g. male
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept value = 4;
   */
  value?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.Component component = 5;
   */
  component: MeasureReport_Group_Stratifier_StratifierGroup_Component[];

  /**
   * @generated from field: repeated google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation population = 6;
   */
  population: MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation[];

  /**
   * What score this stratum achieved
   *
   * @generated from field: google.fhir.r4.core.Quantity measure_score = 7;
   */
  measureScore?: Quantity;
};

/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.
 * Use `create(MeasureReport_Group_Stratifier_StratifierGroupSchema)` to create a new message.
 */
export const MeasureReport_Group_Stratifier_StratifierGroupSchema: GenMessage<MeasureReport_Group_Stratifier_StratifierGroup> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2, 1, 0);

/**
 * Stratifier component values
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.Component
 */
export type MeasureReport_Group_Stratifier_StratifierGroup_Component = Message<"google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.Component"> & {
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
   * What stratifier component of the group
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 4;
   */
  code?: CodeableConcept;

  /**
   * The stratum component value, e.g. male
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept value = 5;
   */
  value?: CodeableConcept;
};

/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.Component.
 * Use `create(MeasureReport_Group_Stratifier_StratifierGroup_ComponentSchema)` to create a new message.
 */
export const MeasureReport_Group_Stratifier_StratifierGroup_ComponentSchema: GenMessage<MeasureReport_Group_Stratifier_StratifierGroup_Component> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2, 1, 0, 0);

/**
 * Population results in this stratum
 *
 * @generated from message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation
 */
export type MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation = Message<"google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation"> & {
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
   * initial-population | numerator | numerator-exclusion | denominator
   * | denominator-exclusion | denominator-exception |
   * measure-population | measure-population-exclusion |
   * measure-observation
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 4;
   */
  code?: CodeableConcept;

  /**
   * Size of the population
   *
   * @generated from field: google.fhir.r4.core.Integer count = 5;
   */
  count?: Integer;

  /**
   * For subject-list reports, the subject results in this population
   *
   * @generated from field: google.fhir.r4.core.Reference subject_results = 6;
   */
  subjectResults?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation.
 * Use `create(MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulationSchema)` to create a new message.
 */
export const MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulationSchema: GenMessage<MeasureReport_Group_Stratifier_StratifierGroup_StratifierGroupPopulation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_measure_report, 0, 2, 1, 0, 1);

