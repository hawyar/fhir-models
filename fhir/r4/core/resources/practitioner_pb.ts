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
// @generated from file proto/google/fhir/proto/r4/core/resources/practitioner.proto (package google.fhir.r4.core, syntax proto3)
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
 * Describes the file proto/google/fhir/proto/r4/core/resources/practitioner.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_practitioner: GenFile = /*@__PURE__*/
  fileDesc("Cjxwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9wcmFjdGl0aW9uZXIucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUijA0KDFByYWN0aXRpb25lchIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISLAoGYWN0aXZlGAsgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEiwKBG5hbWUYDCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkh1bWFuTmFtZRIyCgd0ZWxlY29tGA0gAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0UG9pbnQSLQoHYWRkcmVzcxgOIAMoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQWRkcmVzcxI8CgZnZW5kZXIYDyABKAsyLC5nb29nbGUuZmhpci5yNC5jb3JlLlByYWN0aXRpb25lci5HZW5kZXJDb2RlEi0KCmJpcnRoX2RhdGUYECABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGUSLgoFcGhvdG8YESADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkF0dGFjaG1lbnQSRgoNcXVhbGlmaWNhdGlvbhgSIAMoCzIvLmdvb2dsZS5maGlyLnI0LmNvcmUuUHJhY3RpdGlvbmVyLlF1YWxpZmljYXRpb24SOwoNY29tbXVuaWNhdGlvbhgTIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Gp4CCgpHZW5kZXJDb2RlEkIKBXZhbHVlGAEgASgOMjMuZ29vZ2xlLmZoaXIucjQuY29yZS5BZG1pbmlzdHJhdGl2ZUdlbmRlckNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpwivmDsgUyaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hZG1pbmlzdHJhdGl2ZS1nZW5kZXLAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqJAwoNUXVhbGlmaWNhdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYBCADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISOgoEY29kZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESKwoGcGVyaW9kGAYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2QSQgoGaXNzdWVyGAcgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbjpAwJ/jtgUDsv7klwY0aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1ByYWN0aXRpb25lckoECAcQCEJ8Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWllnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL3ByYWN0aXRpb25lcl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Practitioner.
 * A person with a  formal responsibility in the provisioning of healthcare or
 * related services. See http://hl7.org/fhir/StructureDefinition/Practitioner
 *
 * @generated from message google.fhir.r4.core.Practitioner
 */
export type Practitioner = Message<"google.fhir.r4.core.Practitioner"> & {
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
   * An identifier for the person as this agent
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Whether this practitioner's record is in active use
   *
   * @generated from field: google.fhir.r4.core.Boolean active = 11;
   */
  active?: Boolean;

  /**
   * The name(s) associated with the practitioner
   *
   * @generated from field: repeated google.fhir.r4.core.HumanName name = 12;
   */
  name: HumanName[];

  /**
   * A contact detail for the practitioner (that apply to all roles)
   *
   * @generated from field: repeated google.fhir.r4.core.ContactPoint telecom = 13;
   */
  telecom: ContactPoint[];

  /**
   * Address(es) of the practitioner that are not role specific (typically home
   * address)
   *
   * @generated from field: repeated google.fhir.r4.core.Address address = 14;
   */
  address: Address[];

  /**
   * @generated from field: google.fhir.r4.core.Practitioner.GenderCode gender = 15;
   */
  gender?: Practitioner_GenderCode;

  /**
   * The date  on which the practitioner was born
   *
   * @generated from field: google.fhir.r4.core.Date birth_date = 16;
   */
  birthDate?: Date;

  /**
   * Image of the person
   *
   * @generated from field: repeated google.fhir.r4.core.Attachment photo = 17;
   */
  photo: Attachment[];

  /**
   * @generated from field: repeated google.fhir.r4.core.Practitioner.Qualification qualification = 18;
   */
  qualification: Practitioner_Qualification[];

  /**
   * A language the practitioner can use in patient communication
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept communication = 19;
   */
  communication: CodeableConcept[];
};

/**
 * Describes the message google.fhir.r4.core.Practitioner.
 * Use `create(PractitionerSchema)` to create a new message.
 */
export const PractitionerSchema: GenMessage<Practitioner> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_practitioner, 0);

/**
 * male | female | other | unknown
 *
 * @generated from message google.fhir.r4.core.Practitioner.GenderCode
 */
export type Practitioner_GenderCode = Message<"google.fhir.r4.core.Practitioner.GenderCode"> & {
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
 * Describes the message google.fhir.r4.core.Practitioner.GenderCode.
 * Use `create(Practitioner_GenderCodeSchema)` to create a new message.
 */
export const Practitioner_GenderCodeSchema: GenMessage<Practitioner_GenderCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_practitioner, 0, 0);

/**
 * Certification, licenses, or training pertaining to the provision of care
 *
 * @generated from message google.fhir.r4.core.Practitioner.Qualification
 */
export type Practitioner_Qualification = Message<"google.fhir.r4.core.Practitioner.Qualification"> & {
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
   * An identifier for this qualification for the practitioner
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 4;
   */
  identifier: Identifier[];

  /**
   * Coded representation of the qualification
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 5;
   */
  code?: CodeableConcept;

  /**
   * Period during which the qualification is valid
   *
   * @generated from field: google.fhir.r4.core.Period period = 6;
   */
  period?: Period;

  /**
   * Organization that regulates and issues the qualification
   *
   * @generated from field: google.fhir.r4.core.Reference issuer = 7;
   */
  issuer?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.Practitioner.Qualification.
 * Use `create(Practitioner_QualificationSchema)` to create a new message.
 */
export const Practitioner_QualificationSchema: GenMessage<Practitioner_Qualification> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_practitioner, 0, 1);

