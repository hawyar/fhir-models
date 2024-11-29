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
// @generated from file proto/google/fhir/proto/r4/core/resources/substance_nucleic_acid.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { Attachment, Code, CodeableConcept, Extension, Id, Identifier, Integer, Meta, Narrative, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/substance_nucleic_acid.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_substance_nucleic_acid: GenFile = /*@__PURE__*/
  fileDesc("CkZwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzdGFuY2VfbnVjbGVpY19hY2lkLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIqsQChRTdWJzdGFuY2VOdWNsZWljQWNpZBIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjsKDXNlcXVlbmNlX3R5cGUYCiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI4ChJudW1iZXJfb2Zfc3VidW5pdHMYCyABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXISOgoVYXJlYV9vZl9oeWJyaWRpc2F0aW9uGAwgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSQwoVb2xpZ29fbnVjbGVvdGlkZV90eXBlGA0gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSQgoHc3VidW5pdBgOIAMoCzIxLmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlTnVjbGVpY0FjaWQuU3VidW5pdBqTCgoHU3VidW5pdBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEi0KB3N1YnVuaXQYBCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXISLQoIc2VxdWVuY2UYBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIsCgZsZW5ndGgYBiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXISPAoTc2VxdWVuY2VfYXR0YWNobWVudBgHIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQXR0YWNobWVudBI4CgpmaXZlX3ByaW1lGAggASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSOQoLdGhyZWVfcHJpbWUYCSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJKCgdsaW5rYWdlGAogAygLMjkuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VOdWNsZWljQWNpZC5TdWJ1bml0LkxpbmthZ2USRgoFc3VnYXIYCyADKAsyNy5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZU51Y2xlaWNBY2lkLlN1YnVuaXQuU3VnYXIa5wIKB0xpbmthZ2USJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIxCgxjb25uZWN0aXZpdHkYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIzCgppZGVudGlmaWVyGAUgASgLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEikKBG5hbWUYBiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCgxyZXNpZHVlX3NpdGUYByABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxqyAgoFU3VnYXISJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAQgASgLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEikKBG5hbWUYBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCgxyZXNpZHVlX3NpdGUYBiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZzpIwJ/jtgUDsv7klwY8aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1N1YnN0YW5jZU51Y2xlaWNBY2lkSgQIBxAIQoYBChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWmNnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL3N1YnN0YW5jZV9udWNsZWljX2FjaWRfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for SubstanceNucleicAcid.
 * Nucleic acids are defined by three distinct elements: the base, sugar and
 * linkage. Individual substance/moiety IDs will be created for each of these
 * elements. The nucleotide sequence will be always entered in the 5’-3’
 * direction. See http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid
 *
 * @generated from message google.fhir.r4.core.SubstanceNucleicAcid
 */
export type SubstanceNucleicAcid = Message<"google.fhir.r4.core.SubstanceNucleicAcid"> & {
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
   * The type of the sequence shall be specified based on a controlled
   * vocabulary
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept sequence_type = 10;
   */
  sequenceType?: CodeableConcept;

  /**
   * The number of linear sequences of nucleotides linked through phosphodiester
   * bonds shall be described. Subunits would be strands of nucleic acids that
   * are tightly associated typically through Watson-Crick base pairing. NOTE:
   * If not specified in the reference source, the assumption is that there is 1
   * subunit
   *
   * @generated from field: google.fhir.r4.core.Integer number_of_subunits = 11;
   */
  numberOfSubunits?: Integer;

  /**
   * The area of hybridisation shall be described if applicable for double
   * stranded RNA or DNA. The number associated with the subunit followed by the
   * number associated to the residue shall be specified in increasing order.
   * The underscore “” shall be used as separator as follows: “Subunitnumber
   * Residue”
   *
   * @generated from field: google.fhir.r4.core.String area_of_hybridisation = 12;
   */
  areaOfHybridisation?: String;

  /**
   * (TBC)
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept oligo_nucleotide_type = 13;
   */
  oligoNucleotideType?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstanceNucleicAcid.Subunit subunit = 14;
   */
  subunit: SubstanceNucleicAcid_Subunit[];
};

/**
 * Describes the message google.fhir.r4.core.SubstanceNucleicAcid.
 * Use `create(SubstanceNucleicAcidSchema)` to create a new message.
 */
export const SubstanceNucleicAcidSchema: GenMessage<SubstanceNucleicAcid> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_nucleic_acid, 0);

/**
 * Subunits are listed in order of decreasing length; sequences of the same
 * length will be ordered by molecular weight; subunits that have identical
 * sequences will be repeated multiple times
 *
 * @generated from message google.fhir.r4.core.SubstanceNucleicAcid.Subunit
 */
export type SubstanceNucleicAcid_Subunit = Message<"google.fhir.r4.core.SubstanceNucleicAcid.Subunit"> & {
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
   * Index of linear sequences of nucleic acids in order of decreasing length.
   * Sequences of the same length will be ordered by molecular weight.
   * Subunits that have identical sequences will be repeated and have
   * sequential subscripts
   *
   * @generated from field: google.fhir.r4.core.Integer subunit = 4;
   */
  subunit?: Integer;

  /**
   * Actual nucleotide sequence notation from 5' to 3' end using standard
   * single letter codes. In addition to the base sequence, sugar and type of
   * phosphate or non-phosphate linkage should also be captured
   *
   * @generated from field: google.fhir.r4.core.String sequence = 5;
   */
  sequence?: String;

  /**
   * The length of the sequence shall be captured
   *
   * @generated from field: google.fhir.r4.core.Integer length = 6;
   */
  length?: Integer;

  /**
   * (TBC)
   *
   * @generated from field: google.fhir.r4.core.Attachment sequence_attachment = 7;
   */
  sequenceAttachment?: Attachment;

  /**
   * The nucleotide present at the 5’ terminal shall be specified based on a
   * controlled vocabulary. Since the sequence is represented from the 5' to
   * the 3' end, the 5’ prime nucleotide is the letter at the first position
   * in the sequence. A separate representation would be redundant
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept five_prime = 8;
   */
  fivePrime?: CodeableConcept;

  /**
   * The nucleotide present at the 3’ terminal shall be specified based on a
   * controlled vocabulary. Since the sequence is represented from the 5' to
   * the 3' end, the 5’ prime nucleotide is the letter at the last position in
   * the sequence. A separate representation would be redundant
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept three_prime = 9;
   */
  threePrime?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstanceNucleicAcid.Subunit.Linkage linkage = 10;
   */
  linkage: SubstanceNucleicAcid_Subunit_Linkage[];

  /**
   * @generated from field: repeated google.fhir.r4.core.SubstanceNucleicAcid.Subunit.Sugar sugar = 11;
   */
  sugar: SubstanceNucleicAcid_Subunit_Sugar[];
};

/**
 * Describes the message google.fhir.r4.core.SubstanceNucleicAcid.Subunit.
 * Use `create(SubstanceNucleicAcid_SubunitSchema)` to create a new message.
 */
export const SubstanceNucleicAcid_SubunitSchema: GenMessage<SubstanceNucleicAcid_Subunit> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_nucleic_acid, 0, 0);

/**
 * The linkages between sugar residues will also be captured
 *
 * @generated from message google.fhir.r4.core.SubstanceNucleicAcid.Subunit.Linkage
 */
export type SubstanceNucleicAcid_Subunit_Linkage = Message<"google.fhir.r4.core.SubstanceNucleicAcid.Subunit.Linkage"> & {
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
   * The entity that links the sugar residues together should also be
   * captured for nearly all naturally occurring nucleic acid the linkage is
   * a phosphate group. For many synthetic oligonucleotides phosphorothioate
   * linkages are often seen. Linkage connectivity is assumed to be 3’-5’.
   * If the linkage is either 3’-3’ or 5’-5’ this should be specified
   *
   * @generated from field: google.fhir.r4.core.String connectivity = 4;
   */
  connectivity?: String;

  /**
   * Each linkage will be registered as a fragment and have an ID
   *
   * @generated from field: google.fhir.r4.core.Identifier identifier = 5;
   */
  identifier?: Identifier;

  /**
   * Each linkage will be registered as a fragment and have at least one
   * name. A single name shall be assigned to each linkage
   *
   * @generated from field: google.fhir.r4.core.String name = 6;
   */
  name?: String;

  /**
   * Residues shall be captured as described in 5.3.6.8.3
   *
   * @generated from field: google.fhir.r4.core.String residue_site = 7;
   */
  residueSite?: String;
};

/**
 * Describes the message google.fhir.r4.core.SubstanceNucleicAcid.Subunit.Linkage.
 * Use `create(SubstanceNucleicAcid_Subunit_LinkageSchema)` to create a new message.
 */
export const SubstanceNucleicAcid_Subunit_LinkageSchema: GenMessage<SubstanceNucleicAcid_Subunit_Linkage> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_nucleic_acid, 0, 0, 0);

/**
 * 5.3.6.8.1 Sugar ID (Mandatory)
 *
 * @generated from message google.fhir.r4.core.SubstanceNucleicAcid.Subunit.Sugar
 */
export type SubstanceNucleicAcid_Subunit_Sugar = Message<"google.fhir.r4.core.SubstanceNucleicAcid.Subunit.Sugar"> & {
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
   * The Substance ID of the sugar or sugar-like component that make up the
   * nucleotide
   *
   * @generated from field: google.fhir.r4.core.Identifier identifier = 4;
   */
  identifier?: Identifier;

  /**
   * The name of the sugar or sugar-like component that make up the
   * nucleotide
   *
   * @generated from field: google.fhir.r4.core.String name = 5;
   */
  name?: String;

  /**
   * The residues that contain a given sugar will be captured. The order of
   * given residues will be captured in the 5‘-3‘direction consistent with
   * the base sequences listed above
   *
   * @generated from field: google.fhir.r4.core.String residue_site = 6;
   */
  residueSite?: String;
};

/**
 * Describes the message google.fhir.r4.core.SubstanceNucleicAcid.Subunit.Sugar.
 * Use `create(SubstanceNucleicAcid_Subunit_SugarSchema)` to create a new message.
 */
export const SubstanceNucleicAcid_Subunit_SugarSchema: GenMessage<SubstanceNucleicAcid_Subunit_Sugar> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_substance_nucleic_acid, 0, 0, 1);

