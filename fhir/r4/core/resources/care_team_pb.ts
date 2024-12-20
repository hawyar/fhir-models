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
// @generated from file proto/google/fhir/proto/r4/core/resources/care_team.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { CareTeamStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Code, CodeableConcept, ContactPoint, Extension, Id, Identifier, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/care_team.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_care_team: GenFile = /*@__PURE__*/
  fileDesc("Cjlwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jYXJlX3RlYW0ucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUitxAKCENhcmVUZWFtEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI4CgZzdGF0dXMYCyABKAsyKC5nb29nbGUuZmhpci5yNC5jb3JlLkNhcmVUZWFtLlN0YXR1c0NvZGUSNgoIY2F0ZWdvcnkYDCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIpCgRuYW1lGA0gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSSQoHc3ViamVjdBgOIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhjy//zCBgdQYXRpZW508v/8wgYFR3JvdXASQgoJZW5jb3VudGVyGA8gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCD/L//MIGCUVuY291bnRlchIrCgZwZXJpb2QYECABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBI+CgtwYXJ0aWNpcGFudBgRIAMoCzIpLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2FyZVRlYW0uUGFydGljaXBhbnQSOQoLcmVhc29uX2NvZGUYEiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJJChByZWFzb25fcmVmZXJlbmNlGBMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCD/L//MIGCUNvbmRpdGlvbhJRChVtYW5hZ2luZ19vcmdhbml6YXRpb24YFCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEjIKB3RlbGVjb20YFSADKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3RQb2ludBItCgRub3RlGBYgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5Bbm5vdGF0aW9uGpMCCgpTdGF0dXNDb2RlEjwKBXZhbHVlGAEgASgOMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5DYXJlVGVhbVN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjprivmDsgUtaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jYXJlLXRlYW0tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa0wQKC1BhcnRpY2lwYW50EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMgoEcm9sZRgEIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EpgBCgZtZW1iZXIYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJo8v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZfL//MIGDVJlbGF0ZWRQZXJzb27y//zCBgdQYXRpZW508v/8wgYMT3JnYW5pemF0aW9u8v/8wgYIQ2FyZVRlYW0SSAoMb25fYmVoYWxmX29mGAYgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhIrCgZwZXJpb2QYByABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZDpmmoaToAhgb25CZWhhbGZPZi5leGlzdHMoKSBpbXBsaWVzIChtZW1iZXIucmVzb2x2ZSgpLmlpZihlbXB0eSgpLCB0cnVlLCBvZlR5cGUoUHJhY3RpdGlvbmVyKS5leGlzdHMoKSkpOjzAn+O2BQOy/uSXBjBodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vQ2FyZVRlYW1KBAgHEAhCeQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpWZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jYXJlX3RlYW1fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for CareTeam.
 * Planned participants in the coordination and delivery of care for a patient
 * or group. See http://hl7.org/fhir/StructureDefinition/CareTeam
 *
 * @generated from message google.fhir.r4.core.CareTeam
 */
export type CareTeam = Message<"google.fhir.r4.core.CareTeam"> & {
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
   * External Ids for this team
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * @generated from field: google.fhir.r4.core.CareTeam.StatusCode status = 11;
   */
  status?: CareTeam_StatusCode;

  /**
   * Type of team
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 12;
   */
  category: CodeableConcept[];

  /**
   * Name of the team, such as crisis assessment team
   *
   * @generated from field: google.fhir.r4.core.String name = 13;
   */
  name?: String;

  /**
   * Who care team is for
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 14;
   */
  subject?: Reference;

  /**
   * Encounter created as part of
   *
   * @generated from field: google.fhir.r4.core.Reference encounter = 15;
   */
  encounter?: Reference;

  /**
   * Time period team covers
   *
   * @generated from field: google.fhir.r4.core.Period period = 16;
   */
  period?: Period;

  /**
   * @generated from field: repeated google.fhir.r4.core.CareTeam.Participant participant = 17;
   */
  participant: CareTeam_Participant[];

  /**
   * Why the care team exists
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept reason_code = 18;
   */
  reasonCode: CodeableConcept[];

  /**
   * Why the care team exists
   *
   * @generated from field: repeated google.fhir.r4.core.Reference reason_reference = 19;
   */
  reasonReference: Reference[];

  /**
   * Organization responsible for the care team
   *
   * @generated from field: repeated google.fhir.r4.core.Reference managing_organization = 20;
   */
  managingOrganization: Reference[];

  /**
   * A contact detail for the care team (that applies to all members)
   *
   * @generated from field: repeated google.fhir.r4.core.ContactPoint telecom = 21;
   */
  telecom: ContactPoint[];

  /**
   * Comments made about the CareTeam
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 22;
   */
  note: Annotation[];
};

/**
 * Describes the message google.fhir.r4.core.CareTeam.
 * Use `create(CareTeamSchema)` to create a new message.
 */
export const CareTeamSchema: GenMessage<CareTeam> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_care_team, 0);

/**
 * proposed | active | suspended | inactive | entered-in-error
 *
 * @generated from message google.fhir.r4.core.CareTeam.StatusCode
 */
export type CareTeam_StatusCode = Message<"google.fhir.r4.core.CareTeam.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.CareTeamStatusCode.Value value = 1;
   */
  value: CareTeamStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.CareTeam.StatusCode.
 * Use `create(CareTeam_StatusCodeSchema)` to create a new message.
 */
export const CareTeam_StatusCodeSchema: GenMessage<CareTeam_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_care_team, 0, 0);

/**
 * Members of the team
 *
 * @generated from message google.fhir.r4.core.CareTeam.Participant
 */
export type CareTeam_Participant = Message<"google.fhir.r4.core.CareTeam.Participant"> & {
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
   * Type of involvement
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept role = 4;
   */
  role: CodeableConcept[];

  /**
   * Who is involved
   *
   * @generated from field: google.fhir.r4.core.Reference member = 5;
   */
  member?: Reference;

  /**
   * Organization of the practitioner
   *
   * @generated from field: google.fhir.r4.core.Reference on_behalf_of = 6;
   */
  onBehalfOf?: Reference;

  /**
   * Time period of participant
   *
   * @generated from field: google.fhir.r4.core.Period period = 7;
   */
  period?: Period;
};

/**
 * Describes the message google.fhir.r4.core.CareTeam.Participant.
 * Use `create(CareTeam_ParticipantSchema)` to create a new message.
 */
export const CareTeam_ParticipantSchema: GenMessage<CareTeam_Participant> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_care_team, 0, 1);

