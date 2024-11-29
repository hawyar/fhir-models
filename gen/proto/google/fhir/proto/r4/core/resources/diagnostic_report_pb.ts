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
// @generated from file proto/google/fhir/proto/r4/core/resources/diagnostic_report.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { DiagnosticReportStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Attachment, Code, CodeableConcept, DateTime, Extension, Id, Identifier, Instant, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/diagnostic_report.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_diagnostic_report: GenFile = /*@__PURE__*/
  fileDesc("CkFwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9kaWFnbm9zdGljX3JlcG9ydC5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSL3EwoQRGlhZ25vc3RpY1JlcG9ydBIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISnwEKCGJhc2VkX29uGAsgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCbfL//MIGCENhcmVQbGFu8v/8wgYaSW1tdW5pemF0aW9uUmVjb21tZW5kYXRpb27y//zCBhFNZWRpY2F0aW9uUmVxdWVzdPL//MIGDk51dHJpdGlvbk9yZGVy8v/8wgYOU2VydmljZVJlcXVlc3QSSAoGc3RhdHVzGAwgASgLMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5EaWFnbm9zdGljUmVwb3J0LlN0YXR1c0NvZGVCBvDQh+sEARI2CghjYXRlZ29yeRgNIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjoKBGNvZGUYDiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEmMKB3N1YmplY3QYDyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIy8v/8wgYHUGF0aWVudPL//MIGBUdyb3Vw8v/8wgYGRGV2aWNl8v/8wgYITG9jYXRpb24SQgoJZW5jb3VudGVyGBAgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCD/L//MIGCUVuY291bnRlchJDCgllZmZlY3RpdmUYESABKAsyMC5nb29nbGUuZmhpci5yNC5jb3JlLkRpYWdub3N0aWNSZXBvcnQuRWZmZWN0aXZlWBIsCgZpc3N1ZWQYEiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkluc3RhbnQSewoJcGVyZm9ybWVyGBMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCSPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb27y//zCBghDYXJlVGVhbRKFAQoTcmVzdWx0c19pbnRlcnByZXRlchgUIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQkjy//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xl8v/8wgYMT3JnYW5pemF0aW9u8v/8wgYIQ2FyZVRlYW0SQAoIc3BlY2ltZW4YFSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIU3BlY2ltZW4SQQoGcmVzdWx0GBYgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEfL//MIGC09ic2VydmF0aW9uEkkKDWltYWdpbmdfc3R1ZHkYFyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMSW1hZ2luZ1N0dWR5EjoKBW1lZGlhGBggAygLMisuZ29vZ2xlLmZoaXIucjQuY29yZS5EaWFnbm9zdGljUmVwb3J0Lk1lZGlhEi8KCmNvbmNsdXNpb24YGSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxI9Cg9jb25jbHVzaW9uX2NvZGUYGiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI3Cg5wcmVzZW50ZWRfZm9ybRgbIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQXR0YWNobWVudBqjAgoKU3RhdHVzQ29kZRJECgV2YWx1ZRgBIAEoDjI1Lmdvb2dsZS5maGlyLnI0LmNvcmUuRGlhZ25vc3RpY1JlcG9ydFN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpzivmDsgU1aHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9kaWFnbm9zdGljLXJlcG9ydC1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqBAQoKRWZmZWN0aXZlWBIyCglkYXRlX3RpbWUYASABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lSAASLQoGcGVyaW9kGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2RIADoGoIOD6AYBQggKBmNob2ljZRqOAgoFTWVkaWESJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIsCgdjb21tZW50GAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSPwoEbGluaxgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhHw0IfrBAHy//zCBgVNZWRpYTpEwJ/jtgUDsv7klwY4aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0RpYWdub3N0aWNSZXBvcnRKBAgHEAhCgQEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaXmdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvZGlhZ25vc3RpY19yZXBvcnRfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for DiagnosticReport.
 * A Diagnostic report - a combination of request information, atomic results,
 * images, interpretation, as well as formatted reports. See
 * http://hl7.org/fhir/StructureDefinition/DiagnosticReport
 *
 * @generated from message google.fhir.r4.core.DiagnosticReport
 */
export type DiagnosticReport = Message<"google.fhir.r4.core.DiagnosticReport"> & {
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
   * Business identifier for report
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * What was requested
   *
   * @generated from field: repeated google.fhir.r4.core.Reference based_on = 11;
   */
  basedOn: Reference[];

  /**
   * @generated from field: google.fhir.r4.core.DiagnosticReport.StatusCode status = 12;
   */
  status?: DiagnosticReport_StatusCode;

  /**
   * Service category
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 13;
   */
  category: CodeableConcept[];

  /**
   * Name/Code for this diagnostic report
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 14;
   */
  code?: CodeableConcept;

  /**
   * The subject of the report - usually, but not always, the patient
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 15;
   */
  subject?: Reference;

  /**
   * Health care event when test ordered
   *
   * @generated from field: google.fhir.r4.core.Reference encounter = 16;
   */
  encounter?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.DiagnosticReport.EffectiveX effective = 17;
   */
  effective?: DiagnosticReport_EffectiveX;

  /**
   * DateTime this version was made
   *
   * @generated from field: google.fhir.r4.core.Instant issued = 18;
   */
  issued?: Instant;

  /**
   * Responsible Diagnostic Service
   *
   * @generated from field: repeated google.fhir.r4.core.Reference performer = 19;
   */
  performer: Reference[];

  /**
   * Primary result interpreter
   *
   * @generated from field: repeated google.fhir.r4.core.Reference results_interpreter = 20;
   */
  resultsInterpreter: Reference[];

  /**
   * Specimens this report is based on
   *
   * @generated from field: repeated google.fhir.r4.core.Reference specimen = 21;
   */
  specimen: Reference[];

  /**
   * Observations
   *
   * @generated from field: repeated google.fhir.r4.core.Reference result = 22;
   */
  result: Reference[];

  /**
   * Reference to full details of imaging associated with the diagnostic report
   *
   * @generated from field: repeated google.fhir.r4.core.Reference imaging_study = 23;
   */
  imagingStudy: Reference[];

  /**
   * @generated from field: repeated google.fhir.r4.core.DiagnosticReport.Media media = 24;
   */
  media: DiagnosticReport_Media[];

  /**
   * Clinical conclusion (interpretation) of test results
   *
   * @generated from field: google.fhir.r4.core.String conclusion = 25;
   */
  conclusion?: String;

  /**
   * Codes for the clinical conclusion of test results
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept conclusion_code = 26;
   */
  conclusionCode: CodeableConcept[];

  /**
   * Entire report as issued
   *
   * @generated from field: repeated google.fhir.r4.core.Attachment presented_form = 27;
   */
  presentedForm: Attachment[];
};

/**
 * Describes the message google.fhir.r4.core.DiagnosticReport.
 * Use `create(DiagnosticReportSchema)` to create a new message.
 */
export const DiagnosticReportSchema: GenMessage<DiagnosticReport> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_diagnostic_report, 0);

/**
 * registered | partial | preliminary | final +
 *
 * @generated from message google.fhir.r4.core.DiagnosticReport.StatusCode
 */
export type DiagnosticReport_StatusCode = Message<"google.fhir.r4.core.DiagnosticReport.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.DiagnosticReportStatusCode.Value value = 1;
   */
  value: DiagnosticReportStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.DiagnosticReport.StatusCode.
 * Use `create(DiagnosticReport_StatusCodeSchema)` to create a new message.
 */
export const DiagnosticReport_StatusCodeSchema: GenMessage<DiagnosticReport_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_diagnostic_report, 0, 0);

/**
 * Clinically relevant time/time-period for report
 *
 * @generated from message google.fhir.r4.core.DiagnosticReport.EffectiveX
 */
export type DiagnosticReport_EffectiveX = Message<"google.fhir.r4.core.DiagnosticReport.EffectiveX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.DiagnosticReport.EffectiveX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 1;
     */
    value: DateTime;
    case: "dateTime";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Period period = 2;
     */
    value: Period;
    case: "period";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.DiagnosticReport.EffectiveX.
 * Use `create(DiagnosticReport_EffectiveXSchema)` to create a new message.
 */
export const DiagnosticReport_EffectiveXSchema: GenMessage<DiagnosticReport_EffectiveX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_diagnostic_report, 0, 1);

/**
 * Key images associated with this report
 *
 * @generated from message google.fhir.r4.core.DiagnosticReport.Media
 */
export type DiagnosticReport_Media = Message<"google.fhir.r4.core.DiagnosticReport.Media"> & {
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
   * Comment about the image (e.g. explanation)
   *
   * @generated from field: google.fhir.r4.core.String comment = 4;
   */
  comment?: String;

  /**
   * Reference to the image source
   *
   * @generated from field: google.fhir.r4.core.Reference link = 5;
   */
  link?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.DiagnosticReport.Media.
 * Use `create(DiagnosticReport_MediaSchema)` to create a new message.
 */
export const DiagnosticReport_MediaSchema: GenMessage<DiagnosticReport_Media> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_diagnostic_report, 0, 2);

