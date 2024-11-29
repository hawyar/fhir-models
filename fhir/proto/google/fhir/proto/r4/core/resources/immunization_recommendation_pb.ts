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
// @generated from file proto/google/fhir/proto/r4/core/resources/immunization_recommendation.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { Code, CodeableConcept, DateTime, Extension, Id, Identifier, Meta, Narrative, PositiveInt, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/immunization_recommendation.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation: GenFile = /*@__PURE__*/
  fileDesc("Cktwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9pbW11bml6YXRpb25fcmVjb21tZW5kYXRpb24ucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUiihQKGkltbXVuaXphdGlvblJlY29tbWVuZGF0aW9uEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchJECgdwYXRpZW50GAsgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCE/DQh+sEAfL//MIGB1BhdGllbnQSMwoEZGF0ZRgMIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWVCBvDQh+sEARJFCglhdXRob3JpdHkYDSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEl4KDnJlY29tbWVuZGF0aW9uGA4gAygLMj4uZ29vZ2xlLmZoaXIucjQuY29yZS5JbW11bml6YXRpb25SZWNvbW1lbmRhdGlvbi5SZWNvbW1lbmRhdGlvbkIG8NCH6wQBGssNCg5SZWNvbW1lbmRhdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKDHZhY2NpbmVfY29kZRgEIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjwKDnRhcmdldF9kaXNlYXNlGAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSSgocY29udHJhaW5kaWNhdGVkX3ZhY2NpbmVfY29kZRgGIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkUKD2ZvcmVjYXN0X3N0YXR1cxgHIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESPQoPZm9yZWNhc3RfcmVhc29uGAggAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSZAoOZGF0ZV9jcml0ZXJpb24YCSADKAsyTC5nb29nbGUuZmhpci5yNC5jb3JlLkltbXVuaXphdGlvblJlY29tbWVuZGF0aW9uLlJlY29tbWVuZGF0aW9uLkRhdGVDcml0ZXJpb24SMAoLZGVzY3JpcHRpb24YCiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIrCgZzZXJpZXMYCyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJfCgtkb3NlX251bWJlchgMIAEoCzJKLmdvb2dsZS5maGlyLnI0LmNvcmUuSW1tdW5pemF0aW9uUmVjb21tZW5kYXRpb24uUmVjb21tZW5kYXRpb24uRG9zZU51bWJlclgSYQoMc2VyaWVzX2Rvc2VzGA0gASgLMksuZ29vZ2xlLmZoaXIucjQuY29yZS5JbW11bml6YXRpb25SZWNvbW1lbmRhdGlvbi5SZWNvbW1lbmRhdGlvbi5TZXJpZXNEb3Nlc1gSbwoXc3VwcG9ydGluZ19pbW11bml6YXRpb24YDiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIu8v/8wgYMSW1tdW5pemF0aW9u8v/8wgYWSW1tdW5pemF0aW9uRXZhbHVhdGlvbhJWCh5zdXBwb3J0aW5nX3BhdGllbnRfaW5mb3JtYXRpb24YDyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2UamQIKDURhdGVDcml0ZXJpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6CgRjb2RlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARI0CgV2YWx1ZRgFIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWVCBvDQh+sEARqWAQoLRG9zZU51bWJlclgSOAoMcG9zaXRpdmVfaW50GAEgASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5Qb3NpdGl2ZUludEgAEjsKDHN0cmluZ192YWx1ZRgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZzoGoIOD6AYBQggKBmNob2ljZRqXAQoMU2VyaWVzRG9zZXNYEjgKDHBvc2l0aXZlX2ludBgBIAEoCzIgLmdvb2dsZS5maGlyLnI0LmNvcmUuUG9zaXRpdmVJbnRIABI7CgxzdHJpbmdfdmFsdWUYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0gAUgZzdHJpbmc6BqCDg+gGAUIICgZjaG9pY2U6NJqGk6AILnZhY2NpbmVDb2RlLmV4aXN0cygpIG9yIHRhcmdldERpc2Vhc2UuZXhpc3RzKCk6TsCf47YFA7L+5JcGQmh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9JbW11bml6YXRpb25SZWNvbW1lbmRhdGlvbkoECAcQCEKLAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpoZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9pbW11bml6YXRpb25fcmVjb21tZW5kYXRpb25fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for ImmunizationRecommendation.
 * Guidance or advice relating to an immunization.
 * See http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation
 *
 * @generated from message google.fhir.r4.core.ImmunizationRecommendation
 */
export type ImmunizationRecommendation = Message<"google.fhir.r4.core.ImmunizationRecommendation"> & {
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
   * Business identifier
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Who this profile is for
   *
   * @generated from field: google.fhir.r4.core.Reference patient = 11;
   */
  patient?: Reference;

  /**
   * Date recommendation(s) created
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 12;
   */
  date?: DateTime;

  /**
   * Who is responsible for protocol
   *
   * @generated from field: google.fhir.r4.core.Reference authority = 13;
   */
  authority?: Reference;

  /**
   * @generated from field: repeated google.fhir.r4.core.ImmunizationRecommendation.Recommendation recommendation = 14;
   */
  recommendation: ImmunizationRecommendation_Recommendation[];
};

/**
 * Describes the message google.fhir.r4.core.ImmunizationRecommendation.
 * Use `create(ImmunizationRecommendationSchema)` to create a new message.
 */
export const ImmunizationRecommendationSchema: GenMessage<ImmunizationRecommendation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation, 0);

/**
 * Vaccine administration recommendations
 *
 * @generated from message google.fhir.r4.core.ImmunizationRecommendation.Recommendation
 */
export type ImmunizationRecommendation_Recommendation = Message<"google.fhir.r4.core.ImmunizationRecommendation.Recommendation"> & {
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
   * Vaccine  or vaccine group recommendation applies to
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept vaccine_code = 4;
   */
  vaccineCode: CodeableConcept[];

  /**
   * Disease to be immunized against
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept target_disease = 5;
   */
  targetDisease?: CodeableConcept;

  /**
   * Vaccine which is contraindicated to fulfill the recommendation
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept contraindicated_vaccine_code = 6;
   */
  contraindicatedVaccineCode: CodeableConcept[];

  /**
   * Vaccine recommendation status
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept forecast_status = 7;
   */
  forecastStatus?: CodeableConcept;

  /**
   * Vaccine administration status reason
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept forecast_reason = 8;
   */
  forecastReason: CodeableConcept[];

  /**
   * @generated from field: repeated google.fhir.r4.core.ImmunizationRecommendation.Recommendation.DateCriterion date_criterion = 9;
   */
  dateCriterion: ImmunizationRecommendation_Recommendation_DateCriterion[];

  /**
   * Protocol details
   *
   * @generated from field: google.fhir.r4.core.String description = 10;
   */
  description?: String;

  /**
   * Name of vaccination series
   *
   * @generated from field: google.fhir.r4.core.String series = 11;
   */
  series?: String;

  /**
   * @generated from field: google.fhir.r4.core.ImmunizationRecommendation.Recommendation.DoseNumberX dose_number = 12;
   */
  doseNumber?: ImmunizationRecommendation_Recommendation_DoseNumberX;

  /**
   * @generated from field: google.fhir.r4.core.ImmunizationRecommendation.Recommendation.SeriesDosesX series_doses = 13;
   */
  seriesDoses?: ImmunizationRecommendation_Recommendation_SeriesDosesX;

  /**
   * Past immunizations supporting recommendation
   *
   * @generated from field: repeated google.fhir.r4.core.Reference supporting_immunization = 14;
   */
  supportingImmunization: Reference[];

  /**
   * Patient observations supporting recommendation
   *
   * @generated from field: repeated google.fhir.r4.core.Reference supporting_patient_information = 15;
   */
  supportingPatientInformation: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.ImmunizationRecommendation.Recommendation.
 * Use `create(ImmunizationRecommendation_RecommendationSchema)` to create a new message.
 */
export const ImmunizationRecommendation_RecommendationSchema: GenMessage<ImmunizationRecommendation_Recommendation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation, 0, 0);

/**
 * Dates governing proposed immunization
 *
 * @generated from message google.fhir.r4.core.ImmunizationRecommendation.Recommendation.DateCriterion
 */
export type ImmunizationRecommendation_Recommendation_DateCriterion = Message<"google.fhir.r4.core.ImmunizationRecommendation.Recommendation.DateCriterion"> & {
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
   * Type of date
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 4;
   */
  code?: CodeableConcept;

  /**
   * Recommended date
   *
   * @generated from field: google.fhir.r4.core.DateTime value = 5;
   */
  value?: DateTime;
};

/**
 * Describes the message google.fhir.r4.core.ImmunizationRecommendation.Recommendation.DateCriterion.
 * Use `create(ImmunizationRecommendation_Recommendation_DateCriterionSchema)` to create a new message.
 */
export const ImmunizationRecommendation_Recommendation_DateCriterionSchema: GenMessage<ImmunizationRecommendation_Recommendation_DateCriterion> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation, 0, 0, 0);

/**
 * Recommended dose number within series
 *
 * @generated from message google.fhir.r4.core.ImmunizationRecommendation.Recommendation.DoseNumberX
 */
export type ImmunizationRecommendation_Recommendation_DoseNumberX = Message<"google.fhir.r4.core.ImmunizationRecommendation.Recommendation.DoseNumberX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.ImmunizationRecommendation.Recommendation.DoseNumberX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.PositiveInt positive_int = 1;
     */
    value: PositiveInt;
    case: "positiveInt";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 2 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.ImmunizationRecommendation.Recommendation.DoseNumberX.
 * Use `create(ImmunizationRecommendation_Recommendation_DoseNumberXSchema)` to create a new message.
 */
export const ImmunizationRecommendation_Recommendation_DoseNumberXSchema: GenMessage<ImmunizationRecommendation_Recommendation_DoseNumberX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation, 0, 0, 1);

/**
 * Recommended number of doses for immunity
 *
 * @generated from message google.fhir.r4.core.ImmunizationRecommendation.Recommendation.SeriesDosesX
 */
export type ImmunizationRecommendation_Recommendation_SeriesDosesX = Message<"google.fhir.r4.core.ImmunizationRecommendation.Recommendation.SeriesDosesX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.ImmunizationRecommendation.Recommendation.SeriesDosesX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.PositiveInt positive_int = 1;
     */
    value: PositiveInt;
    case: "positiveInt";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 2 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.ImmunizationRecommendation.Recommendation.SeriesDosesX.
 * Use `create(ImmunizationRecommendation_Recommendation_SeriesDosesXSchema)` to create a new message.
 */
export const ImmunizationRecommendation_Recommendation_SeriesDosesXSchema: GenMessage<ImmunizationRecommendation_Recommendation_SeriesDosesX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_immunization_recommendation, 0, 0, 2);

