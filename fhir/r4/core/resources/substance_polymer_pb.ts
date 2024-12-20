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
// @generated from file proto/google/fhir/proto/r4/core/resources/substance_polymer.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { Attachment, Boolean, Code, CodeableConcept, Extension, Id, Integer, Meta, Narrative, String, SubstanceAmount, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/substance_polymer.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_substance_polymer: GenFile = /*@__PURE__*/
  fileDesc("CkFwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzdGFuY2VfcG9seW1lci5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLuGAoQU3Vic3RhbmNlUG9seW1lchIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEkAKC2NsYXNzX3ZhbHVlGAogASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRSBWNsYXNzEjYKCGdlb21ldHJ5GAsgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSRAoWY29wb2x5bWVyX2Nvbm5lY3Rpdml0eRgMIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjEKDG1vZGlmaWNhdGlvbhgNIAMoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEkUKC21vbm9tZXJfc2V0GA4gAygLMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VQb2x5bWVyLk1vbm9tZXJTZXQSPAoGcmVwZWF0GA8gAygLMiwuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VQb2x5bWVyLlJlcGVhdBq+BQoKTW9ub21lclNldBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjgKCnJhdGlvX3R5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJcChFzdGFydGluZ19tYXRlcmlhbBgFIAMoCzJBLmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlUG9seW1lci5Nb25vbWVyU2V0LlN0YXJ0aW5nTWF0ZXJpYWwa/wIKEFN0YXJ0aW5nTWF0ZXJpYWwSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI2CghtYXRlcmlhbBgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjIKBHR5cGUYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIxCgtpc19kZWZpbmluZxgGIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhI0CgZhbW91bnQYByABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZUFtb3VudBrhDAoGUmVwZWF0EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SNQoPbnVtYmVyX29mX3VuaXRzGAQgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VyEj4KGWF2ZXJhZ2VfbW9sZWN1bGFyX2Zvcm11bGEYBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJFChdyZXBlYXRfdW5pdF9hbW91bnRfdHlwZRgGIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkwKC3JlcGVhdF91bml0GAcgAygLMjcuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VQb2x5bWVyLlJlcGVhdC5SZXBlYXRVbml0GrIJCgpSZXBlYXRVbml0EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SSwodb3JpZW50YXRpb25fb2ZfcG9seW1lcmlzYXRpb24YBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIwCgtyZXBlYXRfdW5pdBgFIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjQKBmFtb3VudBgGIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlQW1vdW50EnAKGGRlZ3JlZV9vZl9wb2x5bWVyaXNhdGlvbhgHIAMoCzJOLmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlUG9seW1lci5SZXBlYXQuUmVwZWF0VW5pdC5EZWdyZWVPZlBvbHltZXJpc2F0aW9uEnMKGXN0cnVjdHVyYWxfcmVwcmVzZW50YXRpb24YCCADKAsyUC5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZVBvbHltZXIuUmVwZWF0LlJlcGVhdFVuaXQuU3RydWN0dXJhbFJlcHJlc2VudGF0aW9uGpwCChZEZWdyZWVPZlBvbHltZXJpc2F0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SNAoGZGVncmVlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNAoGYW1vdW50GAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VBbW91bnQa0AIKGFN0cnVjdHVyYWxSZXByZXNlbnRhdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBHR5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIzCg5yZXByZXNlbnRhdGlvbhgFIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjMKCmF0dGFjaG1lbnQYBiABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkF0dGFjaG1lbnQ6RMCf47YFA7L+5JcGOGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9TdWJzdGFuY2VQb2x5bWVySgQIBxAIQoEBChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWl5naXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL3N1YnN0YW5jZV9wb2x5bWVyX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for SubstancePolymer.
 * Todo.
 * See http://hl7.org/fhir/StructureDefinition/SubstancePolymer
 *
 * @generated from message google.fhir.r4.core.SubstancePolymer
 */
export type SubstancePolymer = Message<"google.fhir.r4.core.SubstancePolymer"> & {
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
   * @generated from field: google.fhir.r4.core.CodeableConcept class_value = 10 [json_name = "class"];
   */
  classValue?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept geometry = 11;
   */
  geometry?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept copolymer_connectivity = 12;
   */
  copolymerConnectivity: CodeableConcept[];

  /**
   * Todo
   *
   * @generated from field: repeated google.fhir.r4.core.String modification = 13;
   */
  modification: String[];

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstancePolymer.MonomerSet monomer_set = 14;
   */
  monomerSet: SubstancePolymer_MonomerSet[];

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstancePolymer.Repeat repeat = 15;
   */
  repeat: SubstancePolymer_Repeat[];
};

/**
 * Describes the message google.fhir.r4.core.SubstancePolymer.
 * Use `create(SubstancePolymerSchema)` to create a new message.
 */
export const SubstancePolymerSchema: GenMessage<SubstancePolymer> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_polymer, 0);

/**
 * Todo
 *
 * @generated from message google.fhir.r4.core.SubstancePolymer.MonomerSet
 */
export type SubstancePolymer_MonomerSet = Message<"google.fhir.r4.core.SubstancePolymer.MonomerSet"> & {
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
   * @generated from field: google.fhir.r4.core.CodeableConcept ratio_type = 4;
   */
  ratioType?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstancePolymer.MonomerSet.StartingMaterial starting_material = 5;
   */
  startingMaterial: SubstancePolymer_MonomerSet_StartingMaterial[];
};

/**
 * Describes the message google.fhir.r4.core.SubstancePolymer.MonomerSet.
 * Use `create(SubstancePolymer_MonomerSetSchema)` to create a new message.
 */
export const SubstancePolymer_MonomerSetSchema: GenMessage<SubstancePolymer_MonomerSet> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_polymer, 0, 0);

/**
 * Todo
 *
 * @generated from message google.fhir.r4.core.SubstancePolymer.MonomerSet.StartingMaterial
 */
export type SubstancePolymer_MonomerSet_StartingMaterial = Message<"google.fhir.r4.core.SubstancePolymer.MonomerSet.StartingMaterial"> & {
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
   * @generated from field: google.fhir.r4.core.CodeableConcept material = 4;
   */
  material?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 5;
   */
  type?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.Boolean is_defining = 6;
   */
  isDefining?: Boolean;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.SubstanceAmount amount = 7;
   */
  amount?: SubstanceAmount;
};

/**
 * Describes the message google.fhir.r4.core.SubstancePolymer.MonomerSet.StartingMaterial.
 * Use `create(SubstancePolymer_MonomerSet_StartingMaterialSchema)` to create a new message.
 */
export const SubstancePolymer_MonomerSet_StartingMaterialSchema: GenMessage<SubstancePolymer_MonomerSet_StartingMaterial> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_polymer, 0, 0, 0);

/**
 * Todo
 *
 * @generated from message google.fhir.r4.core.SubstancePolymer.Repeat
 */
export type SubstancePolymer_Repeat = Message<"google.fhir.r4.core.SubstancePolymer.Repeat"> & {
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
   * @generated from field: google.fhir.r4.core.Integer number_of_units = 4;
   */
  numberOfUnits?: Integer;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.String average_molecular_formula = 5;
   */
  averageMolecularFormula?: String;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept repeat_unit_amount_type = 6;
   */
  repeatUnitAmountType?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit repeat_unit = 7;
   */
  repeatUnit: SubstancePolymer_Repeat_RepeatUnit[];
};

/**
 * Describes the message google.fhir.r4.core.SubstancePolymer.Repeat.
 * Use `create(SubstancePolymer_RepeatSchema)` to create a new message.
 */
export const SubstancePolymer_RepeatSchema: GenMessage<SubstancePolymer_Repeat> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_polymer, 0, 1);

/**
 * Todo
 *
 * @generated from message google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit
 */
export type SubstancePolymer_Repeat_RepeatUnit = Message<"google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit"> & {
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
   * @generated from field: google.fhir.r4.core.CodeableConcept orientation_of_polymerisation = 4;
   */
  orientationOfPolymerisation?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.String repeat_unit = 5;
   */
  repeatUnit?: String;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.SubstanceAmount amount = 6;
   */
  amount?: SubstanceAmount;

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation degree_of_polymerisation = 7;
   */
  degreeOfPolymerisation: SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation[];

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation structural_representation = 8;
   */
  structuralRepresentation: SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation[];
};

/**
 * Describes the message google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit.
 * Use `create(SubstancePolymer_Repeat_RepeatUnitSchema)` to create a new message.
 */
export const SubstancePolymer_Repeat_RepeatUnitSchema: GenMessage<SubstancePolymer_Repeat_RepeatUnit> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_polymer, 0, 1, 0);

/**
 * Todo
 *
 * @generated from message google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation
 */
export type SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation = Message<"google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation"> & {
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
   * @generated from field: google.fhir.r4.core.CodeableConcept degree = 4;
   */
  degree?: CodeableConcept;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.SubstanceAmount amount = 5;
   */
  amount?: SubstanceAmount;
};

/**
 * Describes the message google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation.
 * Use `create(SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchema)` to create a new message.
 */
export const SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchema: GenMessage<SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_polymer, 0, 1, 0, 0);

/**
 * Todo
 *
 * @generated from message google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation
 */
export type SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation = Message<"google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation"> & {
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
   * @generated from field: google.fhir.r4.core.String representation = 5;
   */
  representation?: String;

  /**
   * Todo
   *
   * @generated from field: google.fhir.r4.core.Attachment attachment = 6;
   */
  attachment?: Attachment;
};

/**
 * Describes the message google.fhir.r4.core.SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation.
 * Use `create(SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchema)` to create a new message.
 */
export const SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchema: GenMessage<SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_polymer, 0, 1, 0, 1);

