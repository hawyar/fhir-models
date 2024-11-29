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
// @generated from file proto/google/fhir/proto/r4/core/resources/observation_definition.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { AdministrativeGenderCode_Value, ObservationDataTypeCode_Value, ObservationRangeCategoryCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Boolean, Code, CodeableConcept, Decimal, Extension, Id, Identifier, Integer, Meta, Narrative, Range, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/observation_definition.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_observation_definition: GenFile = /*@__PURE__*/
  fileDesc("CkZwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9vYnNlcnZhdGlvbl9kZWZpbml0aW9uLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIqgaChVPYnNlcnZhdGlvbkRlZmluaXRpb24SIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI2CghjYXRlZ29yeRgKIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjoKBGNvZGUYCyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEjMKCmlkZW50aWZpZXIYDCADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISXQoTcGVybWl0dGVkX2RhdGFfdHlwZRgNIAMoCzJALmdvb2dsZS5maGlyLnI0LmNvcmUuT2JzZXJ2YXRpb25EZWZpbml0aW9uLlBlcm1pdHRlZERhdGFUeXBlQ29kZRI+ChhtdWx0aXBsZV9yZXN1bHRzX2FsbG93ZWQYDiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SNAoGbWV0aG9kGA8gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSOgoVcHJlZmVycmVkX3JlcG9ydF9uYW1lGBAgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSXAoUcXVhbnRpdGF0aXZlX2RldGFpbHMYESABKAsyPi5nb29nbGUuZmhpci5yNC5jb3JlLk9ic2VydmF0aW9uRGVmaW5pdGlvbi5RdWFudGl0YXRpdmVEZXRhaWxzElgKEnF1YWxpZmllZF9pbnRlcnZhbBgSIAMoCzI8Lmdvb2dsZS5maGlyLnI0LmNvcmUuT2JzZXJ2YXRpb25EZWZpbml0aW9uLlF1YWxpZmllZEludGVydmFsEk0KFXZhbGlkX2NvZGVkX3ZhbHVlX3NldBgTIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghWYWx1ZVNldBJOChZub3JtYWxfY29kZWRfdmFsdWVfc2V0GBQgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFZhbHVlU2V0ElAKGGFibm9ybWFsX2NvZGVkX3ZhbHVlX3NldBgVIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghWYWx1ZVNldBJQChhjcml0aWNhbF9jb2RlZF92YWx1ZV9zZXQYFiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIVmFsdWVTZXQapgIKFVBlcm1pdHRlZERhdGFUeXBlQ29kZRJBCgV2YWx1ZRgBIAEoDjIyLmdvb2dsZS5maGlyLnI0LmNvcmUuT2JzZXJ2YXRpb25EYXRhVHlwZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpuivmDsgUwaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9wZXJtaXR0ZWQtZGF0YS10eXBlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUakQMKE1F1YW50aXRhdGl2ZURldGFpbHMSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI8Cg5jdXN0b21hcnlfdW5pdBgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjIKBHVuaXQYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI3ChFjb252ZXJzaW9uX2ZhY3RvchgGIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbBI3ChFkZWNpbWFsX3ByZWNpc2lvbhgHIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW50ZWdlchrYCQoRUXVhbGlmaWVkSW50ZXJ2YWwSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJbCghjYXRlZ29yeRgEIAEoCzJJLmdvb2dsZS5maGlyLnI0LmNvcmUuT2JzZXJ2YXRpb25EZWZpbml0aW9uLlF1YWxpZmllZEludGVydmFsLkNhdGVnb3J5Q29kZRIpCgVyYW5nZRgFIAEoCzIaLmdvb2dsZS5maGlyLnI0LmNvcmUuUmFuZ2USNQoHY29udGV4dBgGIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjgKCmFwcGxpZXNfdG8YByADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJXCgZnZW5kZXIYCCABKAsyRy5nb29nbGUuZmhpci5yNC5jb3JlLk9ic2VydmF0aW9uRGVmaW5pdGlvbi5RdWFsaWZpZWRJbnRlcnZhbC5HZW5kZXJDb2RlEicKA2FnZRgJIAEoCzIaLmdvb2dsZS5maGlyLnI0LmNvcmUuUmFuZ2USMwoPZ2VzdGF0aW9uYWxfYWdlGAogASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYW5nZRIuCgljb25kaXRpb24YCyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxqpAgoMQ2F0ZWdvcnlDb2RlEkYKBXZhbHVlGAEgASgOMjcuZ29vZ2xlLmZoaXIucjQuY29yZS5PYnNlcnZhdGlvblJhbmdlQ2F0ZWdvcnlDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246dYr5g7IFN2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvb2JzZXJ2YXRpb24tcmFuZ2UtY2F0ZWdvcnnAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqeAgoKR2VuZGVyQ29kZRJCCgV2YWx1ZRgBIAEoDjIzLmdvb2dsZS5maGlyLnI0LmNvcmUuQWRtaW5pc3RyYXRpdmVHZW5kZXJDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cIr5g7IFMmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYWRtaW5pc3RyYXRpdmUtZ2VuZGVywJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGU6ScCf47YFA7L+5JcGPWh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9PYnNlcnZhdGlvbkRlZmluaXRpb25KBAgHEAhChgEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaY2dpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvb2JzZXJ2YXRpb25fZGVmaW5pdGlvbl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for ObservationDefinition.
 * Definition of an observation.
 * See http://hl7.org/fhir/StructureDefinition/ObservationDefinition
 *
 * @generated from message google.fhir.r4.core.ObservationDefinition
 */
export type ObservationDefinition = Message<"google.fhir.r4.core.ObservationDefinition"> & {
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
   * Category of observation
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 10;
   */
  category: CodeableConcept[];

  /**
   * Type of observation (code / type)
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 11;
   */
  code?: CodeableConcept;

  /**
   * Business identifier for this ObservationDefinition instance
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 12;
   */
  identifier: Identifier[];

  /**
   * @generated from field: repeated google.fhir.r4.core.ObservationDefinition.PermittedDataTypeCode permitted_data_type = 13;
   */
  permittedDataType: ObservationDefinition_PermittedDataTypeCode[];

  /**
   * Multiple results allowed
   *
   * @generated from field: google.fhir.r4.core.Boolean multiple_results_allowed = 14;
   */
  multipleResultsAllowed?: Boolean;

  /**
   * Method used to produce the observation
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept method = 15;
   */
  method?: CodeableConcept;

  /**
   * Preferred report name
   *
   * @generated from field: google.fhir.r4.core.String preferred_report_name = 16;
   */
  preferredReportName?: String;

  /**
   * @generated from field: google.fhir.r4.core.ObservationDefinition.QuantitativeDetails quantitative_details = 17;
   */
  quantitativeDetails?: ObservationDefinition_QuantitativeDetails;

  /**
   * @generated from field: repeated google.fhir.r4.core.ObservationDefinition.QualifiedInterval qualified_interval = 18;
   */
  qualifiedInterval: ObservationDefinition_QualifiedInterval[];

  /**
   * Value set of valid coded values for the observations conforming to this
   * ObservationDefinition
   *
   * @generated from field: google.fhir.r4.core.Reference valid_coded_value_set = 19;
   */
  validCodedValueSet?: Reference;

  /**
   * Value set of normal coded values for the observations conforming to this
   * ObservationDefinition
   *
   * @generated from field: google.fhir.r4.core.Reference normal_coded_value_set = 20;
   */
  normalCodedValueSet?: Reference;

  /**
   * Value set of abnormal coded values for the observations conforming to this
   * ObservationDefinition
   *
   * @generated from field: google.fhir.r4.core.Reference abnormal_coded_value_set = 21;
   */
  abnormalCodedValueSet?: Reference;

  /**
   * Value set of critical coded values for the observations conforming to this
   * ObservationDefinition
   *
   * @generated from field: google.fhir.r4.core.Reference critical_coded_value_set = 22;
   */
  criticalCodedValueSet?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.ObservationDefinition.
 * Use `create(ObservationDefinitionSchema)` to create a new message.
 */
export const ObservationDefinitionSchema: GenMessage<ObservationDefinition> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation_definition, 0);

/**
 * Quantity | CodeableConcept | string | boolean | integer | Range | Ratio |
 * SampledData | time | dateTime | Period
 *
 * @generated from message google.fhir.r4.core.ObservationDefinition.PermittedDataTypeCode
 */
export type ObservationDefinition_PermittedDataTypeCode = Message<"google.fhir.r4.core.ObservationDefinition.PermittedDataTypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ObservationDataTypeCode.Value value = 1;
   */
  value: ObservationDataTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.ObservationDefinition.PermittedDataTypeCode.
 * Use `create(ObservationDefinition_PermittedDataTypeCodeSchema)` to create a new message.
 */
export const ObservationDefinition_PermittedDataTypeCodeSchema: GenMessage<ObservationDefinition_PermittedDataTypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation_definition, 0, 0);

/**
 * Characteristics of quantitative results
 *
 * @generated from message google.fhir.r4.core.ObservationDefinition.QuantitativeDetails
 */
export type ObservationDefinition_QuantitativeDetails = Message<"google.fhir.r4.core.ObservationDefinition.QuantitativeDetails"> & {
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
   * Customary unit for quantitative results
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept customary_unit = 4;
   */
  customaryUnit?: CodeableConcept;

  /**
   * SI unit for quantitative results
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept unit = 5;
   */
  unit?: CodeableConcept;

  /**
   * SI to Customary unit conversion factor
   *
   * @generated from field: google.fhir.r4.core.Decimal conversion_factor = 6;
   */
  conversionFactor?: Decimal;

  /**
   * Decimal precision of observation quantitative results
   *
   * @generated from field: google.fhir.r4.core.Integer decimal_precision = 7;
   */
  decimalPrecision?: Integer;
};

/**
 * Describes the message google.fhir.r4.core.ObservationDefinition.QuantitativeDetails.
 * Use `create(ObservationDefinition_QuantitativeDetailsSchema)` to create a new message.
 */
export const ObservationDefinition_QuantitativeDetailsSchema: GenMessage<ObservationDefinition_QuantitativeDetails> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation_definition, 0, 1);

/**
 * Qualified range for continuous and ordinal observation results
 *
 * @generated from message google.fhir.r4.core.ObservationDefinition.QualifiedInterval
 */
export type ObservationDefinition_QualifiedInterval = Message<"google.fhir.r4.core.ObservationDefinition.QualifiedInterval"> & {
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
   * @generated from field: google.fhir.r4.core.ObservationDefinition.QualifiedInterval.CategoryCode category = 4;
   */
  category?: ObservationDefinition_QualifiedInterval_CategoryCode;

  /**
   * The interval itself, for continuous or ordinal observations
   *
   * @generated from field: google.fhir.r4.core.Range range = 5;
   */
  range?: Range;

  /**
   * Range context qualifier
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept context = 6;
   */
  context?: CodeableConcept;

  /**
   * Targetted population of the range
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept applies_to = 7;
   */
  appliesTo: CodeableConcept[];

  /**
   * @generated from field: google.fhir.r4.core.ObservationDefinition.QualifiedInterval.GenderCode gender = 8;
   */
  gender?: ObservationDefinition_QualifiedInterval_GenderCode;

  /**
   * Applicable age range, if relevant
   *
   * @generated from field: google.fhir.r4.core.Range age = 9;
   */
  age?: Range;

  /**
   * Applicable gestational age range, if relevant
   *
   * @generated from field: google.fhir.r4.core.Range gestational_age = 10;
   */
  gestationalAge?: Range;

  /**
   * Condition associated with the reference range
   *
   * @generated from field: google.fhir.r4.core.String condition = 11;
   */
  condition?: String;
};

/**
 * Describes the message google.fhir.r4.core.ObservationDefinition.QualifiedInterval.
 * Use `create(ObservationDefinition_QualifiedIntervalSchema)` to create a new message.
 */
export const ObservationDefinition_QualifiedIntervalSchema: GenMessage<ObservationDefinition_QualifiedInterval> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation_definition, 0, 2);

/**
 * reference | critical | absolute
 *
 * @generated from message google.fhir.r4.core.ObservationDefinition.QualifiedInterval.CategoryCode
 */
export type ObservationDefinition_QualifiedInterval_CategoryCode = Message<"google.fhir.r4.core.ObservationDefinition.QualifiedInterval.CategoryCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ObservationRangeCategoryCode.Value value = 1;
   */
  value: ObservationRangeCategoryCode_Value;

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
 * Describes the message google.fhir.r4.core.ObservationDefinition.QualifiedInterval.CategoryCode.
 * Use `create(ObservationDefinition_QualifiedInterval_CategoryCodeSchema)` to create a new message.
 */
export const ObservationDefinition_QualifiedInterval_CategoryCodeSchema: GenMessage<ObservationDefinition_QualifiedInterval_CategoryCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation_definition, 0, 2, 0);

/**
 * male | female | other | unknown
 *
 * @generated from message google.fhir.r4.core.ObservationDefinition.QualifiedInterval.GenderCode
 */
export type ObservationDefinition_QualifiedInterval_GenderCode = Message<"google.fhir.r4.core.ObservationDefinition.QualifiedInterval.GenderCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.AdministrativeGenderCode.Value value = 1;
   */
  value: AdministrativeGenderCode_Value;

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
 * Describes the message google.fhir.r4.core.ObservationDefinition.QualifiedInterval.GenderCode.
 * Use `create(ObservationDefinition_QualifiedInterval_GenderCodeSchema)` to create a new message.
 */
export const ObservationDefinition_QualifiedInterval_GenderCodeSchema: GenMessage<ObservationDefinition_QualifiedInterval_GenderCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation_definition, 0, 2, 1);
