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
// @generated from file proto/google/fhir/proto/r4/core/resources/appointment_response.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { ParticipationStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Code, CodeableConcept, Extension, Id, Identifier, Instant, Meta, Narrative, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/appointment_response.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_appointment_response: GenFile = /*@__PURE__*/
  fileDesc("CkRwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9hcHBvaW50bWVudF9yZXNwb25zZS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKICwoTQXBwb2ludG1lbnRSZXNwb25zZRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISTAoLYXBwb2ludG1lbnQYCyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIX8NCH6wQB8v/8wgYLQXBwb2ludG1lbnQSKwoFc3RhcnQYDCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkluc3RhbnQSKQoDZW5kGA0gASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnN0YW50Ej4KEHBhcnRpY2lwYW50X3R5cGUYDiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBKoAQoFYWN0b3IYDyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJ58v/8wgYHUGF0aWVudPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBg1SZWxhdGVkUGVyc29u8v/8wgYGRGV2aWNl8v/8wgYRSGVhbHRoY2FyZVNlcnZpY2Xy//zCBghMb2NhdGlvbhJiChJwYXJ0aWNpcGFudF9zdGF0dXMYECABKAsyPi5nb29nbGUuZmhpci5yNC5jb3JlLkFwcG9pbnRtZW50UmVzcG9uc2UuUGFydGljaXBhbnRTdGF0dXNDb2RlQgbw0IfrBAESLAoHY29tbWVudBgRIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nGqYCChVQYXJ0aWNpcGFudFN0YXR1c0NvZGUSQQoFdmFsdWUYASABKA4yMi5nb29nbGUuZmhpci5yNC5jb3JlLlBhcnRpY2lwYXRpb25TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bor5g7IFMGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcGFydGljaXBhdGlvbnN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlOnfAn+O2BQOy/uSXBjtodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vQXBwb2ludG1lbnRSZXNwb25zZZqGk6AIKnBhcnRpY2lwYW50VHlwZS5leGlzdHMoKSBvciBhY3Rvci5leGlzdHMoKUoECAcQCEKEAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVphZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9hcHBvaW50bWVudF9yZXNwb25zZV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for AppointmentResponse.
 * A reply to an appointment request for a patient and/or practitioner(s), such
 * as a confirmation or rejection. See
 * http://hl7.org/fhir/StructureDefinition/AppointmentResponse
 *
 * @generated from message google.fhir.r4.core.AppointmentResponse
 */
export type AppointmentResponse = Message<"google.fhir.r4.core.AppointmentResponse"> & {
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
   * External Ids for this item
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Appointment this response relates to
   *
   * @generated from field: google.fhir.r4.core.Reference appointment = 11;
   */
  appointment?: Reference;

  /**
   * Time from appointment, or requested new start time
   *
   * @generated from field: google.fhir.r4.core.Instant start = 12;
   */
  start?: Instant;

  /**
   * Time from appointment, or requested new end time
   *
   * @generated from field: google.fhir.r4.core.Instant end = 13;
   */
  end?: Instant;

  /**
   * Role of participant in the appointment
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept participant_type = 14;
   */
  participantType: CodeableConcept[];

  /**
   * Person, Location, HealthcareService, or Device
   *
   * @generated from field: google.fhir.r4.core.Reference actor = 15;
   */
  actor?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.AppointmentResponse.ParticipantStatusCode participant_status = 16;
   */
  participantStatus?: AppointmentResponse_ParticipantStatusCode;

  /**
   * Additional comments
   *
   * @generated from field: google.fhir.r4.core.String comment = 17;
   */
  comment?: String;
};

/**
 * Describes the message google.fhir.r4.core.AppointmentResponse.
 * Use `create(AppointmentResponseSchema)` to create a new message.
 */
export const AppointmentResponseSchema: GenMessage<AppointmentResponse> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_appointment_response, 0);

/**
 * accepted | declined | tentative | needs-action
 *
 * @generated from message google.fhir.r4.core.AppointmentResponse.ParticipantStatusCode
 */
export type AppointmentResponse_ParticipantStatusCode = Message<"google.fhir.r4.core.AppointmentResponse.ParticipantStatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ParticipationStatusCode.Value value = 1;
   */
  value: ParticipationStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.AppointmentResponse.ParticipantStatusCode.
 * Use `create(AppointmentResponse_ParticipantStatusCodeSchema)` to create a new message.
 */
export const AppointmentResponse_ParticipantStatusCodeSchema: GenMessage<AppointmentResponse_ParticipantStatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_appointment_response, 0, 0);

