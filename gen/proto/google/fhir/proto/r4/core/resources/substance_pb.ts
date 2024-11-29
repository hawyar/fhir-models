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
// @generated from file proto/google/fhir/proto/r4/core/resources/substance.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { FHIRSubstanceStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Code, CodeableConcept, DateTime, Extension, Id, Identifier, Meta, Narrative, Ratio, Reference, SimpleQuantity, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/substance.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_substance: GenFile = /*@__PURE__*/
  fileDesc("Cjlwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzdGFuY2UucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUi/Q4KCVN1YnN0YW5jZRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISOQoGc3RhdHVzGAsgASgLMikuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2UuU3RhdHVzQ29kZRI2CghjYXRlZ29yeRgMIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjoKBGNvZGUYDSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEjAKC2Rlc2NyaXB0aW9uGA4gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSOQoIaW5zdGFuY2UYDyADKAsyJy5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZS5JbnN0YW5jZRI9CgppbmdyZWRpZW50GBAgAygLMikuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2UuSW5ncmVkaWVudBqYAgoKU3RhdHVzQ29kZRJBCgV2YWx1ZRgBIAEoDjIyLmdvb2dsZS5maGlyLnI0LmNvcmUuRkhJUlN1YnN0YW5jZVN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjprivmDsgUtaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zdWJzdGFuY2Utc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUavQIKCEluc3RhbmNlEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgEIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchItCgZleHBpcnkYBSABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEjUKCHF1YW50aXR5GAYgASgLMiMuZ29vZ2xlLmZoaXIucjQuY29yZS5TaW1wbGVRdWFudGl0eRrMAwoKSW5ncmVkaWVudBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEiwKCHF1YW50aXR5GAQgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYXRpbxJPCglzdWJzdGFuY2UYBSABKAsyNC5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZS5JbmdyZWRpZW50LlN1YnN0YW5jZVhCBvDQh+sEARqmAQoKU3Vic3RhbmNlWBJAChBjb2RlYWJsZV9jb25jZXB0GAEgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRIABJECglyZWZlcmVuY2UYAiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJU3Vic3RhbmNlSAA6BqCDg+gGAUIICgZjaG9pY2U6PcCf47YFA7L+5JcGMWh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9TdWJzdGFuY2VKBAgHEAhCeQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpWZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzdGFuY2VfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Substance.
 * A homogeneous material with a definite composition.
 * See http://hl7.org/fhir/StructureDefinition/Substance
 *
 * @generated from message google.fhir.r4.core.Substance
 */
export type Substance = Message<"google.fhir.r4.core.Substance"> & {
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
   * Unique identifier
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * @generated from field: google.fhir.r4.core.Substance.StatusCode status = 11;
   */
  status?: Substance_StatusCode;

  /**
   * What class/type of substance this is
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 12;
   */
  category: CodeableConcept[];

  /**
   * What substance this is
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 13;
   */
  code?: CodeableConcept;

  /**
   * Textual description of the substance, comments
   *
   * @generated from field: google.fhir.r4.core.String description = 14;
   */
  description?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Substance.Instance instance = 15;
   */
  instance: Substance_Instance[];

  /**
   * @generated from field: repeated google.fhir.r4.core.Substance.Ingredient ingredient = 16;
   */
  ingredient: Substance_Ingredient[];
};

/**
 * Describes the message google.fhir.r4.core.Substance.
 * Use `create(SubstanceSchema)` to create a new message.
 */
export const SubstanceSchema: GenMessage<Substance> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance, 0);

/**
 * active | inactive | entered-in-error
 *
 * @generated from message google.fhir.r4.core.Substance.StatusCode
 */
export type Substance_StatusCode = Message<"google.fhir.r4.core.Substance.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.FHIRSubstanceStatusCode.Value value = 1;
   */
  value: FHIRSubstanceStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.Substance.StatusCode.
 * Use `create(Substance_StatusCodeSchema)` to create a new message.
 */
export const Substance_StatusCodeSchema: GenMessage<Substance_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance, 0, 0);

/**
 * If this describes a specific package/container of the substance
 *
 * @generated from message google.fhir.r4.core.Substance.Instance
 */
export type Substance_Instance = Message<"google.fhir.r4.core.Substance.Instance"> & {
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
   * Identifier of the package/container
   *
   * @generated from field: google.fhir.r4.core.Identifier identifier = 4;
   */
  identifier?: Identifier;

  /**
   * When no longer valid to use
   *
   * @generated from field: google.fhir.r4.core.DateTime expiry = 5;
   */
  expiry?: DateTime;

  /**
   * Amount of substance in the package
   *
   * @generated from field: google.fhir.r4.core.SimpleQuantity quantity = 6;
   */
  quantity?: SimpleQuantity;
};

/**
 * Describes the message google.fhir.r4.core.Substance.Instance.
 * Use `create(Substance_InstanceSchema)` to create a new message.
 */
export const Substance_InstanceSchema: GenMessage<Substance_Instance> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance, 0, 1);

/**
 * Composition information about the substance
 *
 * @generated from message google.fhir.r4.core.Substance.Ingredient
 */
export type Substance_Ingredient = Message<"google.fhir.r4.core.Substance.Ingredient"> & {
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
   * Optional amount (concentration)
   *
   * @generated from field: google.fhir.r4.core.Ratio quantity = 4;
   */
  quantity?: Ratio;

  /**
   * @generated from field: google.fhir.r4.core.Substance.Ingredient.SubstanceX substance = 5;
   */
  substance?: Substance_Ingredient_SubstanceX;
};

/**
 * Describes the message google.fhir.r4.core.Substance.Ingredient.
 * Use `create(Substance_IngredientSchema)` to create a new message.
 */
export const Substance_IngredientSchema: GenMessage<Substance_Ingredient> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance, 0, 2);

/**
 * A component of the substance
 *
 * @generated from message google.fhir.r4.core.Substance.Ingredient.SubstanceX
 */
export type Substance_Ingredient_SubstanceX = Message<"google.fhir.r4.core.Substance.Ingredient.SubstanceX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Substance.Ingredient.SubstanceX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.CodeableConcept codeable_concept = 1;
     */
    value: CodeableConcept;
    case: "codeableConcept";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Reference reference = 2;
     */
    value: Reference;
    case: "reference";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.Substance.Ingredient.SubstanceX.
 * Use `create(Substance_Ingredient_SubstanceXSchema)` to create a new message.
 */
export const Substance_Ingredient_SubstanceXSchema: GenMessage<Substance_Ingredient_SubstanceX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance, 0, 2, 0);

