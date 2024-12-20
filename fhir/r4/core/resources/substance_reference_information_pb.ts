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
// @generated from file proto/google/fhir/proto/r4/core/resources/substance_reference_information.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { Code, CodeableConcept, Extension, Id, Identifier, Meta, Narrative, Quantity, Range, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/substance_reference_information.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_substance_reference_information: GenFile = /*@__PURE__*/
  fileDesc("Ck9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzdGFuY2VfcmVmZXJlbmNlX2luZm9ybWF0aW9uLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIv4VCh1TdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEiwKB2NvbW1lbnQYCiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJFCgRnZW5lGAsgAygLMjcuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbi5HZW5lElQKDGdlbmVfZWxlbWVudBgMIAMoCzI+Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb24uR2VuZUVsZW1lbnQSWQoOY2xhc3NpZmljYXRpb24YDSADKAsyQS5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uLkNsYXNzaWZpY2F0aW9uEkkKBnRhcmdldBgOIAMoCzI5Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlUmVmZXJlbmNlSW5mb3JtYXRpb24uVGFyZ2V0Gt8CCgRHZW5lEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SQgoUZ2VuZV9zZXF1ZW5jZV9vcmlnaW4YBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIyCgRnZW5lGAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSRwoGc291cmNlGAYgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCF/L//MIGEURvY3VtZW50UmVmZXJlbmNlGtQCCgtHZW5lRWxlbWVudBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBHR5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIwCgdlbGVtZW50GAUgASgLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEkcKBnNvdXJjZRgGIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhfy//zCBhFEb2N1bWVudFJlZmVyZW5jZRqcAwoOQ2xhc3NpZmljYXRpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI0CgZkb21haW4YBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI8Cg5jbGFzc2lmaWNhdGlvbhgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjUKB3N1YnR5cGUYBiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJHCgZzb3VyY2UYByADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIX8v/8wgYRRG9jdW1lbnRSZWZlcmVuY2UaxwYKBlRhcmdldBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEi8KBnRhcmdldBgEIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchIyCgR0eXBlGAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSOQoLaW50ZXJhY3Rpb24YBiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI2CghvcmdhbmlzbRgHIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjsKDW9yZ2FuaXNtX3R5cGUYCCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJRCgZhbW91bnQYCSABKAsyQS5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uLlRhcmdldC5BbW91bnRYEjkKC2Ftb3VudF90eXBlGAogASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSRwoGc291cmNlGAsgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCF/L//MIGEURvY3VtZW50UmVmZXJlbmNlGrgBCgdBbW91bnRYEjEKCHF1YW50aXR5GAEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eUgAEisKBXJhbmdlGAIgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYW5nZUgAEjsKDHN0cmluZ192YWx1ZRgDIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZzoGoIOD6AYBQggKBmNob2ljZTpRwJ/jtgUDsv7klwZFaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1N1YnN0YW5jZVJlZmVyZW5jZUluZm9ybWF0aW9uSgQIBxAIQo8BChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWmxnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL3N1YnN0YW5jZV9yZWZlcmVuY2VfaW5mb3JtYXRpb25fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for SubstanceReferenceInformation.
 * Todo.
 * See http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation
 *
 * @generated from message google.fhir.r4.core.SubstanceReferenceInformation
 */
export type SubstanceReferenceInformation = Message<"google.fhir.r4.core.SubstanceReferenceInformation"> & {
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
   * Todo
   *
   * @generated from field: google.fhir.r4.core.String comment = 10;
   */
  comment?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstanceReferenceInformation.Gene gene = 11;
   */
  gene: SubstanceReferenceInformation_Gene[];

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstanceReferenceInformation.GeneElement gene_element = 12;
   */
  geneElement: SubstanceReferenceInformation_GeneElement[];

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstanceReferenceInformation.Classification classification = 13;
   */
  classification: SubstanceReferenceInformation_Classification[];

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstanceReferenceInformation.Target target = 14;
   */
  target: SubstanceReferenceInformation_Target[];
};

/**
 * Describes the message google.fhir.r4.core.SubstanceReferenceInformation.
 * Use `create(SubstanceReferenceInformationSchema)` to create a new message.
 */
export const SubstanceReferenceInformationSchema: GenMessage<SubstanceReferenceInformation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_reference_information, 0);

/**
 * Todo
 *
 * @generated from message google.fhir.r4.core.SubstanceReferenceInformation.Gene
 */
export type SubstanceReferenceInformation_Gene = Message<"google.fhir.r4.core.SubstanceReferenceInformation.Gene"> & {
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
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept gene_sequence_origin = 4;
   */
  geneSequenceOrigin?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept gene = 5;
   */
  gene?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: repeated google.fhir.r4.core.Reference source = 6;
   */
  source: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.SubstanceReferenceInformation.Gene.
 * Use `create(SubstanceReferenceInformation_GeneSchema)` to create a new message.
 */
export const SubstanceReferenceInformation_GeneSchema: GenMessage<SubstanceReferenceInformation_Gene> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_reference_information, 0, 0);

/**
 * Todo
 *
 * @generated from message google.fhir.r4.core.SubstanceReferenceInformation.GeneElement
 */
export type SubstanceReferenceInformation_GeneElement = Message<"google.fhir.r4.core.SubstanceReferenceInformation.GeneElement"> & {
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
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.Identifier element = 5;
   */
  element?: Identifier;

  /**
   * Todo
   *
   * @generated from field: repeated google.fhir.r4.core.Reference source = 6;
   */
  source: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.SubstanceReferenceInformation.GeneElement.
 * Use `create(SubstanceReferenceInformation_GeneElementSchema)` to create a new message.
 */
export const SubstanceReferenceInformation_GeneElementSchema: GenMessage<SubstanceReferenceInformation_GeneElement> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_reference_information, 0, 1);

/**
 * Todo
 *
 * @generated from message google.fhir.r4.core.SubstanceReferenceInformation.Classification
 */
export type SubstanceReferenceInformation_Classification = Message<"google.fhir.r4.core.SubstanceReferenceInformation.Classification"> & {
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
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept domain = 4;
   */
  domain?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept classification = 5;
   */
  classification?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept subtype = 6;
   */
  subtype: CodeableConcept[];

  /**
   * Todo
   *
   * @generated from field: repeated google.fhir.r4.core.Reference source = 7;
   */
  source: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.SubstanceReferenceInformation.Classification.
 * Use `create(SubstanceReferenceInformation_ClassificationSchema)` to create a new message.
 */
export const SubstanceReferenceInformation_ClassificationSchema: GenMessage<SubstanceReferenceInformation_Classification> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_reference_information, 0, 2);

/**
 * Todo
 *
 * @generated from message google.fhir.r4.core.SubstanceReferenceInformation.Target
 */
export type SubstanceReferenceInformation_Target = Message<"google.fhir.r4.core.SubstanceReferenceInformation.Target"> & {
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
   * Todo
   *
   * @generated from field: google.fhir.r4.core.Identifier target = 4;
   */
  target?: Identifier;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 5;
   */
  type?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept interaction = 6;
   */
  interaction?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept organism = 7;
   */
  organism?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept organism_type = 8;
   */
  organismType?: CodeableConcept;

  /**
   * @generated from field: google.fhir.r4.core.SubstanceReferenceInformation.Target.AmountX amount = 9;
   */
  amount?: SubstanceReferenceInformation_Target_AmountX;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept amount_type = 10;
   */
  amountType?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: repeated google.fhir.r4.core.Reference source = 11;
   */
  source: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.SubstanceReferenceInformation.Target.
 * Use `create(SubstanceReferenceInformation_TargetSchema)` to create a new message.
 */
export const SubstanceReferenceInformation_TargetSchema: GenMessage<SubstanceReferenceInformation_Target> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_reference_information, 0, 3);

/**
 * Todo
 *
 * @generated from message google.fhir.r4.core.SubstanceReferenceInformation.Target.AmountX
 */
export type SubstanceReferenceInformation_Target_AmountX = Message<"google.fhir.r4.core.SubstanceReferenceInformation.Target.AmountX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.SubstanceReferenceInformation.Target.AmountX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Quantity quantity = 1;
     */
    value: Quantity;
    case: "quantity";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Range range = 2;
     */
    value: Range;
    case: "range";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 3 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.SubstanceReferenceInformation.Target.AmountX.
 * Use `create(SubstanceReferenceInformation_Target_AmountXSchema)` to create a new message.
 */
export const SubstanceReferenceInformation_Target_AmountXSchema: GenMessage<SubstanceReferenceInformation_Target_AmountX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_reference_information, 0, 3, 0);

