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
// @generated from file proto/google/fhir/proto/r4/core/resources/medicinal_product_authorization.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { Code, CodeableConcept, DateTime, Extension, Id, Identifier, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/medicinal_product_authorization.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_medicinal_product_authorization: GenFile = /*@__PURE__*/
  fileDesc("Ck9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWRpY2luYWxfcHJvZHVjdF9hdXRob3JpemF0aW9uLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIrUUCh1NZWRpY2luYWxQcm9kdWN0QXV0aG9yaXphdGlvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISZQoHc3ViamVjdBgLIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQjTy//zCBhBNZWRpY2luYWxQcm9kdWN08v/8wgYYTWVkaWNpbmFsUHJvZHVjdFBhY2thZ2VkEjUKB2NvdW50cnkYDCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI6CgxqdXJpc2RpY3Rpb24YDSADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI0CgZzdGF0dXMYDiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIyCgtzdGF0dXNfZGF0ZRgPIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSMwoMcmVzdG9yZV9kYXRlGBAgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRI0Cg92YWxpZGl0eV9wZXJpb2QYESABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBI8ChdkYXRhX2V4Y2x1c2l2aXR5X3BlcmlvZBgSIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kEkIKG2RhdGVfb2ZfZmlyc3RfYXV0aG9yaXphdGlvbhgTIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSPwoYaW50ZXJuYXRpb25hbF9iaXJ0aF9kYXRlGBQgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRI5CgtsZWdhbF9iYXNpcxgVIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EnQKHGp1cmlzZGljdGlvbmFsX2F1dGhvcml6YXRpb24YFiADKAsyTi5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGljaW5hbFByb2R1Y3RBdXRob3JpemF0aW9uLkp1cmlzZGljdGlvbmFsQXV0aG9yaXphdGlvbhJCCgZob2xkZXIYFyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEkUKCXJlZ3VsYXRvchgYIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24STwoJcHJvY2VkdXJlGBkgASgLMjwuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWRpY2luYWxQcm9kdWN0QXV0aG9yaXphdGlvbi5Qcm9jZWR1cmUa2QMKG0p1cmlzZGljdGlvbmFsQXV0aG9yaXphdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYBCADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISNQoHY291bnRyeRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjoKDGp1cmlzZGljdGlvbhgGIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkQKFmxlZ2FsX3N0YXR1c19vZl9zdXBwbHkYByABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI0Cg92YWxpZGl0eV9wZXJpb2QYCCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBq3BAoJUHJvY2VkdXJlEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgEIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI6CgR0eXBlGAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARJQCgRkYXRlGAYgASgLMkIuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWRpY2luYWxQcm9kdWN0QXV0aG9yaXphdGlvbi5Qcm9jZWR1cmUuRGF0ZVgSUQoLYXBwbGljYXRpb24YByADKAsyPC5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGljaW5hbFByb2R1Y3RBdXRob3JpemF0aW9uLlByb2NlZHVyZRp8CgVEYXRlWBItCgZwZXJpb2QYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZEgAEjIKCWRhdGVfdGltZRgCIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWVIADoGoIOD6AYBQggKBmNob2ljZTpRwJ/jtgUDsv7klwZFaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL01lZGljaW5hbFByb2R1Y3RBdXRob3JpemF0aW9uSgQIBxAIQo8BChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWmxnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL21lZGljaW5hbF9wcm9kdWN0X2F1dGhvcml6YXRpb25fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for MedicinalProductAuthorization.
 * The regulatory authorization of a medicinal product.
 * See http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization
 *
 * @generated from message google.fhir.r4.core.MedicinalProductAuthorization
 */
export type MedicinalProductAuthorization = Message<"google.fhir.r4.core.MedicinalProductAuthorization"> & {
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
   * Business identifier for the marketing authorization, as assigned by a
   * regulator
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * The medicinal product that is being authorized
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 11;
   */
  subject?: Reference;

  /**
   * The country in which the marketing authorization has been granted
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept country = 12;
   */
  country: CodeableConcept[];

  /**
   * Jurisdiction within a country
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept jurisdiction = 13;
   */
  jurisdiction: CodeableConcept[];

  /**
   * The status of the marketing authorization
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept status = 14;
   */
  status?: CodeableConcept;

  /**
   * The date at which the given status has become applicable
   *
   * @generated from field: google.fhir.r4.core.DateTime status_date = 15;
   */
  statusDate?: DateTime;

  /**
   * The date when a suspended the marketing or the marketing authorization of
   * the product is anticipated to be restored
   *
   * @generated from field: google.fhir.r4.core.DateTime restore_date = 16;
   */
  restoreDate?: DateTime;

  /**
   * The beginning of the time period in which the marketing authorization is in
   * the specific status shall be specified A complete date consisting of day,
   * month and year shall be specified using the ISO 8601 date format
   *
   * @generated from field: google.fhir.r4.core.Period validity_period = 17;
   */
  validityPeriod?: Period;

  /**
   * A period of time after authorization before generic product applicatiosn
   * can be submitted
   *
   * @generated from field: google.fhir.r4.core.Period data_exclusivity_period = 18;
   */
  dataExclusivityPeriod?: Period;

  /**
   * The date when the first authorization was granted by a Medicines Regulatory
   * Agency
   *
   * @generated from field: google.fhir.r4.core.DateTime date_of_first_authorization = 19;
   */
  dateOfFirstAuthorization?: DateTime;

  /**
   * Date of first marketing authorization for a company's new medicinal product
   * in any country in the World
   *
   * @generated from field: google.fhir.r4.core.DateTime international_birth_date = 20;
   */
  internationalBirthDate?: DateTime;

  /**
   * The legal framework against which this authorization is granted
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept legal_basis = 21;
   */
  legalBasis?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.MedicinalProductAuthorization.JurisdictionalAuthorization jurisdictional_authorization = 22;
   */
  jurisdictionalAuthorization: MedicinalProductAuthorization_JurisdictionalAuthorization[];

  /**
   * Marketing Authorization Holder
   *
   * @generated from field: google.fhir.r4.core.Reference holder = 23;
   */
  holder?: Reference;

  /**
   * Medicines Regulatory Agency
   *
   * @generated from field: google.fhir.r4.core.Reference regulator = 24;
   */
  regulator?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.MedicinalProductAuthorization.Procedure procedure = 25;
   */
  procedure?: MedicinalProductAuthorization_Procedure;
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProductAuthorization.
 * Use `create(MedicinalProductAuthorizationSchema)` to create a new message.
 */
export const MedicinalProductAuthorizationSchema: GenMessage<MedicinalProductAuthorization> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product_authorization, 0);

/**
 * Authorization in areas within a country
 *
 * @generated from message google.fhir.r4.core.MedicinalProductAuthorization.JurisdictionalAuthorization
 */
export type MedicinalProductAuthorization_JurisdictionalAuthorization = Message<"google.fhir.r4.core.MedicinalProductAuthorization.JurisdictionalAuthorization"> & {
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
   * The assigned number for the marketing authorization
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 4;
   */
  identifier: Identifier[];

  /**
   * Country of authorization
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept country = 5;
   */
  country?: CodeableConcept;

  /**
   * Jurisdiction within a country
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept jurisdiction = 6;
   */
  jurisdiction: CodeableConcept[];

  /**
   * The legal status of supply in a jurisdiction or region
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept legal_status_of_supply = 7;
   */
  legalStatusOfSupply?: CodeableConcept;

  /**
   * The start and expected end date of the authorization
   *
   * @generated from field: google.fhir.r4.core.Period validity_period = 8;
   */
  validityPeriod?: Period;
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProductAuthorization.JurisdictionalAuthorization.
 * Use `create(MedicinalProductAuthorization_JurisdictionalAuthorizationSchema)` to create a new message.
 */
export const MedicinalProductAuthorization_JurisdictionalAuthorizationSchema: GenMessage<MedicinalProductAuthorization_JurisdictionalAuthorization> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product_authorization, 0, 0);

/**
 * The regulatory procedure for granting or amending a marketing authorization
 *
 * @generated from message google.fhir.r4.core.MedicinalProductAuthorization.Procedure
 */
export type MedicinalProductAuthorization_Procedure = Message<"google.fhir.r4.core.MedicinalProductAuthorization.Procedure"> & {
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
   * Identifier for this procedure
   *
   * @generated from field: google.fhir.r4.core.Identifier identifier = 4;
   */
  identifier?: Identifier;

  /**
   * Type of procedure
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 5;
   */
  type?: CodeableConcept;

  /**
   * @generated from field: google.fhir.r4.core.MedicinalProductAuthorization.Procedure.DateX date = 6;
   */
  date?: MedicinalProductAuthorization_Procedure_DateX;

  /**
   * Applcations submitted to obtain a marketing authorization
   *
   * @generated from field: repeated google.fhir.r4.core.MedicinalProductAuthorization.Procedure application = 7;
   */
  application: MedicinalProductAuthorization_Procedure[];
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProductAuthorization.Procedure.
 * Use `create(MedicinalProductAuthorization_ProcedureSchema)` to create a new message.
 */
export const MedicinalProductAuthorization_ProcedureSchema: GenMessage<MedicinalProductAuthorization_Procedure> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product_authorization, 0, 1);

/**
 * Date of procedure
 *
 * @generated from message google.fhir.r4.core.MedicinalProductAuthorization.Procedure.DateX
 */
export type MedicinalProductAuthorization_Procedure_DateX = Message<"google.fhir.r4.core.MedicinalProductAuthorization.Procedure.DateX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.MedicinalProductAuthorization.Procedure.DateX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Period period = 1;
     */
    value: Period;
    case: "period";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 2;
     */
    value: DateTime;
    case: "dateTime";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProductAuthorization.Procedure.DateX.
 * Use `create(MedicinalProductAuthorization_Procedure_DateXSchema)` to create a new message.
 */
export const MedicinalProductAuthorization_Procedure_DateXSchema: GenMessage<MedicinalProductAuthorization_Procedure_DateX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product_authorization, 0, 1, 0);

