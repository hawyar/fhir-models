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
// @generated from file proto/google/fhir/proto/r4/core/resources/related_person.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { AdministrativeGenderCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Address, Attachment, Boolean, Code, CodeableConcept, ContactPoint, Date, Extension, HumanName, Id, Identifier, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/related_person.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_related_person: GenFile = /*@__PURE__*/
  fileDesc("Cj5wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9yZWxhdGVkX3BlcnNvbi5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKRDQoNUmVsYXRlZFBlcnNvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISLAoGYWN0aXZlGAsgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEkQKB3BhdGllbnQYDCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIT8NCH6wQB8v/8wgYHUGF0aWVudBI6CgxyZWxhdGlvbnNoaXAYDSADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIsCgRuYW1lGA4gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5IdW1hbk5hbWUSMgoHdGVsZWNvbRgPIAMoCzIhLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29udGFjdFBvaW50Ej0KBmdlbmRlchgQIAEoCzItLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVsYXRlZFBlcnNvbi5HZW5kZXJDb2RlEi0KCmJpcnRoX2RhdGUYESABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGUSLQoHYWRkcmVzcxgSIAMoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQWRkcmVzcxIuCgVwaG90bxgTIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQXR0YWNobWVudBIrCgZwZXJpb2QYFCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZBJHCg1jb21tdW5pY2F0aW9uGBUgAygLMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5SZWxhdGVkUGVyc29uLkNvbW11bmljYXRpb24angIKCkdlbmRlckNvZGUSQgoFdmFsdWUYASABKA4yMy5nb29nbGUuZmhpci5yNC5jb3JlLkFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnCK+YOyBTJodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2FkbWluaXN0cmF0aXZlLWdlbmRlcsCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGpgCCg1Db21tdW5pY2F0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SPgoIbGFuZ3VhZ2UYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEi8KCXByZWZlcnJlZBgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbjpBwJ/jtgUDsv7klwY1aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1JlbGF0ZWRQZXJzb25KBAgHEAhCfgoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpbZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9yZWxhdGVkX3BlcnNvbl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for RelatedPerson.
 * A person that is related to a patient, but who is not a direct target of
 * care. See http://hl7.org/fhir/StructureDefinition/RelatedPerson
 *
 * @generated from message google.fhir.r4.core.RelatedPerson
 */
export type RelatedPerson = Message<"google.fhir.r4.core.RelatedPerson"> & {
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
   * A human identifier for this person
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Whether this related person's record is in active use
   *
   * @generated from field: google.fhir.r4.core.Boolean active = 11;
   */
  active?: Boolean;

  /**
   * The patient this person is related to
   *
   * @generated from field: google.fhir.r4.core.Reference patient = 12;
   */
  patient?: Reference;

  /**
   * The nature of the relationship
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept relationship = 13;
   */
  relationship: CodeableConcept[];

  /**
   * A name associated with the person
   *
   * @generated from field: repeated google.fhir.r4.core.HumanName name = 14;
   */
  name: HumanName[];

  /**
   * A contact detail for the person
   *
   * @generated from field: repeated google.fhir.r4.core.ContactPoint telecom = 15;
   */
  telecom: ContactPoint[];

  /**
   * @generated from field: google.fhir.r4.core.RelatedPerson.GenderCode gender = 16;
   */
  gender?: RelatedPerson_GenderCode;

  /**
   * The date on which the related person was born
   *
   * @generated from field: google.fhir.r4.core.Date birth_date = 17;
   */
  birthDate?: Date;

  /**
   * Address where the related person can be contacted or visited
   *
   * @generated from field: repeated google.fhir.r4.core.Address address = 18;
   */
  address: Address[];

  /**
   * Image of the person
   *
   * @generated from field: repeated google.fhir.r4.core.Attachment photo = 19;
   */
  photo: Attachment[];

  /**
   * Period of time that this relationship is considered valid
   *
   * @generated from field: google.fhir.r4.core.Period period = 20;
   */
  period?: Period;

  /**
   * @generated from field: repeated google.fhir.r4.core.RelatedPerson.Communication communication = 21;
   */
  communication: RelatedPerson_Communication[];
};

/**
 * Describes the message google.fhir.r4.core.RelatedPerson.
 * Use `create(RelatedPersonSchema)` to create a new message.
 */
export const RelatedPersonSchema: GenMessage<RelatedPerson> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_related_person, 0);

/**
 * male | female | other | unknown
 *
 * @generated from message google.fhir.r4.core.RelatedPerson.GenderCode
 */
export type RelatedPerson_GenderCode = Message<"google.fhir.r4.core.RelatedPerson.GenderCode"> & {
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
 * Describes the message google.fhir.r4.core.RelatedPerson.GenderCode.
 * Use `create(RelatedPerson_GenderCodeSchema)` to create a new message.
 */
export const RelatedPerson_GenderCodeSchema: GenMessage<RelatedPerson_GenderCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_related_person, 0, 0);

/**
 * A language which may be used to communicate with about the patient's health
 *
 * @generated from message google.fhir.r4.core.RelatedPerson.Communication
 */
export type RelatedPerson_Communication = Message<"google.fhir.r4.core.RelatedPerson.Communication"> & {
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
   * The language which can be used to communicate with the patient about his
   * or her health
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept language = 4;
   */
  language?: CodeableConcept;

  /**
   * Language preference indicator
   *
   * @generated from field: google.fhir.r4.core.Boolean preferred = 5;
   */
  preferred?: Boolean;
};

/**
 * Describes the message google.fhir.r4.core.RelatedPerson.Communication.
 * Use `create(RelatedPerson_CommunicationSchema)` to create a new message.
 */
export const RelatedPerson_CommunicationSchema: GenMessage<RelatedPerson_Communication> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_related_person, 0, 1);

