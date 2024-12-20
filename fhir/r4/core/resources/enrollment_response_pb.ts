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
// @generated from file proto/google/fhir/proto/r4/core/resources/enrollment_response.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { ClaimProcessingCode_Value, FinancialResourceStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Code, DateTime, Extension, Id, Identifier, Meta, Narrative, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/enrollment_response.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_enrollment_response: GenFile = /*@__PURE__*/
  fileDesc("CkNwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9lbnJvbGxtZW50X3Jlc3BvbnNlLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIrIMChJFbnJvbGxtZW50UmVzcG9uc2USIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEkIKBnN0YXR1cxgLIAEoCzIyLmdvb2dsZS5maGlyLnI0LmNvcmUuRW5yb2xsbWVudFJlc3BvbnNlLlN0YXR1c0NvZGUSSAoHcmVxdWVzdBgMIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhfy//zCBhFFbnJvbGxtZW50UmVxdWVzdBJECgdvdXRjb21lGA0gASgLMjMuZ29vZ2xlLmZoaXIucjQuY29yZS5FbnJvbGxtZW50UmVzcG9uc2UuT3V0Y29tZUNvZGUSMAoLZGlzcG9zaXRpb24YDiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIuCgdjcmVhdGVkGA8gASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRJICgxvcmdhbml6YXRpb24YECABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEnQKEHJlcXVlc3RfcHJvdmlkZXIYESABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUI68v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZfL//MIGDE9yZ2FuaXphdGlvbhqVAgoKU3RhdHVzQ29kZRJFCgV2YWx1ZRgBIAEoDjI2Lmdvb2dsZS5maGlyLnI0LmNvcmUuRmluYW5jaWFsUmVzb3VyY2VTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246ZIr5g7IFJmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZm0tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUalwIKC091dGNvbWVDb2RlEj0KBXZhbHVlGAEgASgOMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5DbGFpbVByb2Nlc3NpbmdDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bYr5g7IFL2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVtaXR0YW5jZS1vdXRjb21lwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGU6RsCf47YFA7L+5JcGOmh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9FbnJvbGxtZW50UmVzcG9uc2VKBAgHEAhCgwEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaYGdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvZW5yb2xsbWVudF9yZXNwb25zZV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for EnrollmentResponse.
 * EnrollmentResponse resource.
 * See http://hl7.org/fhir/StructureDefinition/EnrollmentResponse
 *
 * @generated from message google.fhir.r4.core.EnrollmentResponse
 */
export type EnrollmentResponse = Message<"google.fhir.r4.core.EnrollmentResponse"> & {
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
   * Business Identifier
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * @generated from field: google.fhir.r4.core.EnrollmentResponse.StatusCode status = 11;
   */
  status?: EnrollmentResponse_StatusCode;

  /**
   * Claim reference
   *
   * @generated from field: google.fhir.r4.core.Reference request = 12;
   */
  request?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.EnrollmentResponse.OutcomeCode outcome = 13;
   */
  outcome?: EnrollmentResponse_OutcomeCode;

  /**
   * Disposition Message
   *
   * @generated from field: google.fhir.r4.core.String disposition = 14;
   */
  disposition?: String;

  /**
   * Creation date
   *
   * @generated from field: google.fhir.r4.core.DateTime created = 15;
   */
  created?: DateTime;

  /**
   * Insurer
   *
   * @generated from field: google.fhir.r4.core.Reference organization = 16;
   */
  organization?: Reference;

  /**
   * Responsible practitioner
   *
   * @generated from field: google.fhir.r4.core.Reference request_provider = 17;
   */
  requestProvider?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.EnrollmentResponse.
 * Use `create(EnrollmentResponseSchema)` to create a new message.
 */
export const EnrollmentResponseSchema: GenMessage<EnrollmentResponse> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_enrollment_response, 0);

/**
 * active | cancelled | draft | entered-in-error
 *
 * @generated from message google.fhir.r4.core.EnrollmentResponse.StatusCode
 */
export type EnrollmentResponse_StatusCode = Message<"google.fhir.r4.core.EnrollmentResponse.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.FinancialResourceStatusCode.Value value = 1;
   */
  value: FinancialResourceStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.EnrollmentResponse.StatusCode.
 * Use `create(EnrollmentResponse_StatusCodeSchema)` to create a new message.
 */
export const EnrollmentResponse_StatusCodeSchema: GenMessage<EnrollmentResponse_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_enrollment_response, 0, 0);

/**
 * queued | complete | error | partial
 *
 * @generated from message google.fhir.r4.core.EnrollmentResponse.OutcomeCode
 */
export type EnrollmentResponse_OutcomeCode = Message<"google.fhir.r4.core.EnrollmentResponse.OutcomeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ClaimProcessingCode.Value value = 1;
   */
  value: ClaimProcessingCode_Value;

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
 * Describes the message google.fhir.r4.core.EnrollmentResponse.OutcomeCode.
 * Use `create(EnrollmentResponse_OutcomeCodeSchema)` to create a new message.
 */
export const EnrollmentResponse_OutcomeCodeSchema: GenMessage<EnrollmentResponse_OutcomeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_enrollment_response, 0, 1);

