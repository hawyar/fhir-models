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
// @generated from file proto/google/fhir/proto/r4/core/resources/insurance_plan.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { PublicationStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Address, Code, CodeableConcept, ContactPoint, Extension, HumanName, Id, Identifier, Meta, Money, Narrative, Period, PositiveInt, Quantity, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/insurance_plan.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_insurance_plan: GenFile = /*@__PURE__*/
  fileDesc("Cj5wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9pbnN1cmFuY2VfcGxhbi5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSK6JgoNSW5zdXJhbmNlUGxhbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISPQoGc3RhdHVzGAsgASgLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5JbnN1cmFuY2VQbGFuLlN0YXR1c0NvZGUSMgoEdHlwZRgMIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EikKBG5hbWUYDSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIqCgVhbGlhcxgOIAMoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEisKBnBlcmlvZBgPIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kEkQKCG93bmVkX2J5GBAgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhJLCg9hZG1pbmlzdGVyZWRfYnkYESABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEkUKDWNvdmVyYWdlX2FyZWEYEiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYITG9jYXRpb24SOwoHY29udGFjdBgTIAMoCzIqLmdvb2dsZS5maGlyLnI0LmNvcmUuSW5zdXJhbmNlUGxhbi5Db250YWN0EkAKCGVuZHBvaW50GBQgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCEVuZHBvaW50EkMKB25ldHdvcmsYFSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEj0KCGNvdmVyYWdlGBYgAygLMisuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnN1cmFuY2VQbGFuLkNvdmVyYWdlEjUKBHBsYW4YFyADKAsyJy5nb29nbGUuZmhpci5yNC5jb3JlLkluc3VyYW5jZVBsYW4uUGxhbhqYAgoKU3RhdHVzQ29kZRI/CgV2YWx1ZRgBIAEoDjIwLmdvb2dsZS5maGlyLnI0LmNvcmUuUHVibGljYXRpb25TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bYr5g7IFL2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcHVibGljYXRpb24tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa6QIKB0NvbnRhY3QSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI1CgdwdXJwb3NlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLAoEbmFtZRgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuSHVtYW5OYW1lEjIKB3RlbGVjb20YBiADKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3RQb2ludBItCgdhZGRyZXNzGAcgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5BZGRyZXNzGukHCghDb3ZlcmFnZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKBHR5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEkMKB25ldHdvcmsYBSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uElQKB2JlbmVmaXQYBiADKAsyOy5nb29nbGUuZmhpci5yNC5jb3JlLkluc3VyYW5jZVBsYW4uQ292ZXJhZ2UuQ292ZXJhZ2VCZW5lZml0Qgbw0IfrBAEa7QQKD0NvdmVyYWdlQmVuZWZpdBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKBHR5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEjAKC3JlcXVpcmVtZW50GAUgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSUAoFbGltaXQYBiADKAsyQS5nb29nbGUuZmhpci5yNC5jb3JlLkluc3VyYW5jZVBsYW4uQ292ZXJhZ2UuQ292ZXJhZ2VCZW5lZml0LkxpbWl0GoECCgVMaW1pdBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEiwKBXZhbHVlGAQgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eRIyCgRjb2RlGAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQajA8KBFBsYW4SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAQgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEjIKBHR5cGUYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJFCg1jb3ZlcmFnZV9hcmVhGAYgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCExvY2F0aW9uEkMKB25ldHdvcmsYByADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEkkKDGdlbmVyYWxfY29zdBgIIAMoCzIzLmdvb2dsZS5maGlyLnI0LmNvcmUuSW5zdXJhbmNlUGxhbi5QbGFuLkdlbmVyYWxDb3N0EksKDXNwZWNpZmljX2Nvc3QYCSADKAsyNC5nb29nbGUuZmhpci5yNC5jb3JlLkluc3VyYW5jZVBsYW4uUGxhbi5TcGVjaWZpY0Nvc3Qa5wIKC0dlbmVyYWxDb3N0EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMgoEdHlwZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjQKCmdyb3VwX3NpemUYBSABKAsyIC5nb29nbGUuZmhpci5yNC5jb3JlLlBvc2l0aXZlSW50EigKBGNvc3QYBiABKAsyGi5nb29nbGUuZmhpci5yNC5jb3JlLk1vbmV5EiwKB2NvbW1lbnQYByABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxr0BwoMU3BlY2lmaWNDb3N0EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SPgoIY2F0ZWdvcnkYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBElEKB2JlbmVmaXQYBSADKAsyQC5nb29nbGUuZmhpci5yNC5jb3JlLkluc3VyYW5jZVBsYW4uUGxhbi5TcGVjaWZpY0Nvc3QuUGxhbkJlbmVmaXQauAUKC1BsYW5CZW5lZml0EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoEdHlwZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESUwoEY29zdBgFIAMoCzJFLmdvb2dsZS5maGlyLnI0LmNvcmUuSW5zdXJhbmNlUGxhbi5QbGFuLlNwZWNpZmljQ29zdC5QbGFuQmVuZWZpdC5Db3N0Gv8CCgRDb3N0EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoEdHlwZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESOwoNYXBwbGljYWJpbGl0eRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjgKCnF1YWxpZmllcnMYBiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIsCgV2YWx1ZRgHIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuUXVhbnRpdHk6bsCf47YFA7L+5JcGNWh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9JbnN1cmFuY2VQbGFumoaToAgnKGlkZW50aWZpZXIuY291bnQoKSArIG5hbWUuY291bnQoKSkgPiAwSgQIBxAIQn4KF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaW2dpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvaW5zdXJhbmNlX3BsYW5fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for InsurancePlan.
 * Details of a Health Insurance product/plan provided by an organization.
 * See http://hl7.org/fhir/StructureDefinition/InsurancePlan
 *
 * @generated from message google.fhir.r4.core.InsurancePlan
 */
export type InsurancePlan = Message<"google.fhir.r4.core.InsurancePlan"> & {
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
   * Business Identifier for Product
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * @generated from field: google.fhir.r4.core.InsurancePlan.StatusCode status = 11;
   */
  status?: InsurancePlan_StatusCode;

  /**
   * Kind of product
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept type = 12;
   */
  type: CodeableConcept[];

  /**
   * Official name
   *
   * @generated from field: google.fhir.r4.core.String name = 13;
   */
  name?: String;

  /**
   * Alternate names
   *
   * @generated from field: repeated google.fhir.r4.core.String alias = 14;
   */
  alias: String[];

  /**
   * When the product is available
   *
   * @generated from field: google.fhir.r4.core.Period period = 15;
   */
  period?: Period;

  /**
   * Plan issuer
   *
   * @generated from field: google.fhir.r4.core.Reference owned_by = 16;
   */
  ownedBy?: Reference;

  /**
   * Product administrator
   *
   * @generated from field: google.fhir.r4.core.Reference administered_by = 17;
   */
  administeredBy?: Reference;

  /**
   * Where product applies
   *
   * @generated from field: repeated google.fhir.r4.core.Reference coverage_area = 18;
   */
  coverageArea: Reference[];

  /**
   * @generated from field: repeated google.fhir.r4.core.InsurancePlan.Contact contact = 19;
   */
  contact: InsurancePlan_Contact[];

  /**
   * Technical endpoint
   *
   * @generated from field: repeated google.fhir.r4.core.Reference endpoint = 20;
   */
  endpoint: Reference[];

  /**
   * What networks are Included
   *
   * @generated from field: repeated google.fhir.r4.core.Reference network = 21;
   */
  network: Reference[];

  /**
   * @generated from field: repeated google.fhir.r4.core.InsurancePlan.Coverage coverage = 22;
   */
  coverage: InsurancePlan_Coverage[];

  /**
   * @generated from field: repeated google.fhir.r4.core.InsurancePlan.Plan plan = 23;
   */
  plan: InsurancePlan_Plan[];
};

/**
 * Describes the message google.fhir.r4.core.InsurancePlan.
 * Use `create(InsurancePlanSchema)` to create a new message.
 */
export const InsurancePlanSchema: GenMessage<InsurancePlan> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_insurance_plan, 0);

/**
 * draft | active | retired | unknown
 *
 * @generated from message google.fhir.r4.core.InsurancePlan.StatusCode
 */
export type InsurancePlan_StatusCode = Message<"google.fhir.r4.core.InsurancePlan.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.PublicationStatusCode.Value value = 1;
   */
  value: PublicationStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.InsurancePlan.StatusCode.
 * Use `create(InsurancePlan_StatusCodeSchema)` to create a new message.
 */
export const InsurancePlan_StatusCodeSchema: GenMessage<InsurancePlan_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_insurance_plan, 0, 0);

/**
 * Contact for the product
 *
 * @generated from message google.fhir.r4.core.InsurancePlan.Contact
 */
export type InsurancePlan_Contact = Message<"google.fhir.r4.core.InsurancePlan.Contact"> & {
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
   * The type of contact
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept purpose = 4;
   */
  purpose?: CodeableConcept;

  /**
   * A name associated with the contact
   *
   * @generated from field: google.fhir.r4.core.HumanName name = 5;
   */
  name?: HumanName;

  /**
   * Contact details (telephone, email, etc.)  for a contact
   *
   * @generated from field: repeated google.fhir.r4.core.ContactPoint telecom = 6;
   */
  telecom: ContactPoint[];

  /**
   * Visiting or postal addresses for the contact
   *
   * @generated from field: google.fhir.r4.core.Address address = 7;
   */
  address?: Address;
};

/**
 * Describes the message google.fhir.r4.core.InsurancePlan.Contact.
 * Use `create(InsurancePlan_ContactSchema)` to create a new message.
 */
export const InsurancePlan_ContactSchema: GenMessage<InsurancePlan_Contact> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_insurance_plan, 0, 1);

/**
 * Coverage details
 *
 * @generated from message google.fhir.r4.core.InsurancePlan.Coverage
 */
export type InsurancePlan_Coverage = Message<"google.fhir.r4.core.InsurancePlan.Coverage"> & {
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
   * Type of coverage
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * What networks provide coverage
   *
   * @generated from field: repeated google.fhir.r4.core.Reference network = 5;
   */
  network: Reference[];

  /**
   * @generated from field: repeated google.fhir.r4.core.InsurancePlan.Coverage.CoverageBenefit benefit = 6;
   */
  benefit: InsurancePlan_Coverage_CoverageBenefit[];
};

/**
 * Describes the message google.fhir.r4.core.InsurancePlan.Coverage.
 * Use `create(InsurancePlan_CoverageSchema)` to create a new message.
 */
export const InsurancePlan_CoverageSchema: GenMessage<InsurancePlan_Coverage> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_insurance_plan, 0, 2);

/**
 * List of benefits
 *
 * @generated from message google.fhir.r4.core.InsurancePlan.Coverage.CoverageBenefit
 */
export type InsurancePlan_Coverage_CoverageBenefit = Message<"google.fhir.r4.core.InsurancePlan.Coverage.CoverageBenefit"> & {
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
   * Type of benefit
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * Referral requirements
   *
   * @generated from field: google.fhir.r4.core.String requirement = 5;
   */
  requirement?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.InsurancePlan.Coverage.CoverageBenefit.Limit limit = 6;
   */
  limit: InsurancePlan_Coverage_CoverageBenefit_Limit[];
};

/**
 * Describes the message google.fhir.r4.core.InsurancePlan.Coverage.CoverageBenefit.
 * Use `create(InsurancePlan_Coverage_CoverageBenefitSchema)` to create a new message.
 */
export const InsurancePlan_Coverage_CoverageBenefitSchema: GenMessage<InsurancePlan_Coverage_CoverageBenefit> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_insurance_plan, 0, 2, 0);

/**
 * Benefit limits
 *
 * @generated from message google.fhir.r4.core.InsurancePlan.Coverage.CoverageBenefit.Limit
 */
export type InsurancePlan_Coverage_CoverageBenefit_Limit = Message<"google.fhir.r4.core.InsurancePlan.Coverage.CoverageBenefit.Limit"> & {
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
   * Maximum value allowed
   *
   * @generated from field: google.fhir.r4.core.Quantity value = 4;
   */
  value?: Quantity;

  /**
   * Benefit limit details
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 5;
   */
  code?: CodeableConcept;
};

/**
 * Describes the message google.fhir.r4.core.InsurancePlan.Coverage.CoverageBenefit.Limit.
 * Use `create(InsurancePlan_Coverage_CoverageBenefit_LimitSchema)` to create a new message.
 */
export const InsurancePlan_Coverage_CoverageBenefit_LimitSchema: GenMessage<InsurancePlan_Coverage_CoverageBenefit_Limit> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_insurance_plan, 0, 2, 0, 0);

/**
 * Plan details
 *
 * @generated from message google.fhir.r4.core.InsurancePlan.Plan
 */
export type InsurancePlan_Plan = Message<"google.fhir.r4.core.InsurancePlan.Plan"> & {
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
   * Business Identifier for Product
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 4;
   */
  identifier: Identifier[];

  /**
   * Type of plan
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 5;
   */
  type?: CodeableConcept;

  /**
   * Where product applies
   *
   * @generated from field: repeated google.fhir.r4.core.Reference coverage_area = 6;
   */
  coverageArea: Reference[];

  /**
   * What networks provide coverage
   *
   * @generated from field: repeated google.fhir.r4.core.Reference network = 7;
   */
  network: Reference[];

  /**
   * @generated from field: repeated google.fhir.r4.core.InsurancePlan.Plan.GeneralCost general_cost = 8;
   */
  generalCost: InsurancePlan_Plan_GeneralCost[];

  /**
   * @generated from field: repeated google.fhir.r4.core.InsurancePlan.Plan.SpecificCost specific_cost = 9;
   */
  specificCost: InsurancePlan_Plan_SpecificCost[];
};

/**
 * Describes the message google.fhir.r4.core.InsurancePlan.Plan.
 * Use `create(InsurancePlan_PlanSchema)` to create a new message.
 */
export const InsurancePlan_PlanSchema: GenMessage<InsurancePlan_Plan> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_insurance_plan, 0, 3);

/**
 * Overall costs
 *
 * @generated from message google.fhir.r4.core.InsurancePlan.Plan.GeneralCost
 */
export type InsurancePlan_Plan_GeneralCost = Message<"google.fhir.r4.core.InsurancePlan.Plan.GeneralCost"> & {
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
   * Type of cost
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * Number of enrollees
   *
   * @generated from field: google.fhir.r4.core.PositiveInt group_size = 5;
   */
  groupSize?: PositiveInt;

  /**
   * Cost value
   *
   * @generated from field: google.fhir.r4.core.Money cost = 6;
   */
  cost?: Money;

  /**
   * Additional cost information
   *
   * @generated from field: google.fhir.r4.core.String comment = 7;
   */
  comment?: String;
};

/**
 * Describes the message google.fhir.r4.core.InsurancePlan.Plan.GeneralCost.
 * Use `create(InsurancePlan_Plan_GeneralCostSchema)` to create a new message.
 */
export const InsurancePlan_Plan_GeneralCostSchema: GenMessage<InsurancePlan_Plan_GeneralCost> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_insurance_plan, 0, 3, 0);

/**
 * Specific costs
 *
 * @generated from message google.fhir.r4.core.InsurancePlan.Plan.SpecificCost
 */
export type InsurancePlan_Plan_SpecificCost = Message<"google.fhir.r4.core.InsurancePlan.Plan.SpecificCost"> & {
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
   * General category of benefit
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept category = 4;
   */
  category?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.InsurancePlan.Plan.SpecificCost.PlanBenefit benefit = 5;
   */
  benefit: InsurancePlan_Plan_SpecificCost_PlanBenefit[];
};

/**
 * Describes the message google.fhir.r4.core.InsurancePlan.Plan.SpecificCost.
 * Use `create(InsurancePlan_Plan_SpecificCostSchema)` to create a new message.
 */
export const InsurancePlan_Plan_SpecificCostSchema: GenMessage<InsurancePlan_Plan_SpecificCost> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_insurance_plan, 0, 3, 1);

/**
 * Benefits list
 *
 * @generated from message google.fhir.r4.core.InsurancePlan.Plan.SpecificCost.PlanBenefit
 */
export type InsurancePlan_Plan_SpecificCost_PlanBenefit = Message<"google.fhir.r4.core.InsurancePlan.Plan.SpecificCost.PlanBenefit"> & {
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
   * Type of specific benefit
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.InsurancePlan.Plan.SpecificCost.PlanBenefit.Cost cost = 5;
   */
  cost: InsurancePlan_Plan_SpecificCost_PlanBenefit_Cost[];
};

/**
 * Describes the message google.fhir.r4.core.InsurancePlan.Plan.SpecificCost.PlanBenefit.
 * Use `create(InsurancePlan_Plan_SpecificCost_PlanBenefitSchema)` to create a new message.
 */
export const InsurancePlan_Plan_SpecificCost_PlanBenefitSchema: GenMessage<InsurancePlan_Plan_SpecificCost_PlanBenefit> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_insurance_plan, 0, 3, 1, 0);

/**
 * List of the costs
 *
 * @generated from message google.fhir.r4.core.InsurancePlan.Plan.SpecificCost.PlanBenefit.Cost
 */
export type InsurancePlan_Plan_SpecificCost_PlanBenefit_Cost = Message<"google.fhir.r4.core.InsurancePlan.Plan.SpecificCost.PlanBenefit.Cost"> & {
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
   * Type of cost
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * in-network | out-of-network | other
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept applicability = 5;
   */
  applicability?: CodeableConcept;

  /**
   * Additional information about the cost
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept qualifiers = 6;
   */
  qualifiers: CodeableConcept[];

  /**
   * The actual cost value
   *
   * @generated from field: google.fhir.r4.core.Quantity value = 7;
   */
  value?: Quantity;
};

/**
 * Describes the message google.fhir.r4.core.InsurancePlan.Plan.SpecificCost.PlanBenefit.Cost.
 * Use `create(InsurancePlan_Plan_SpecificCost_PlanBenefit_CostSchema)` to create a new message.
 */
export const InsurancePlan_Plan_SpecificCost_PlanBenefit_CostSchema: GenMessage<InsurancePlan_Plan_SpecificCost_PlanBenefit_Cost> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_insurance_plan, 0, 3, 1, 0, 0);
