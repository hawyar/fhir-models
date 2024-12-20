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
// @generated from file proto/google/fhir/proto/r4/core/resources/flag.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { FlagStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Code, CodeableConcept, Extension, Id, Identifier, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/flag.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_flag: GenFile = /*@__PURE__*/
  fileDesc("CjRwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9mbGFnLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlItwKCgRGbGFnEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI8CgZzdGF0dXMYCyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkZsYWcuU3RhdHVzQ29kZUIG8NCH6wQBEjYKCGNhdGVnb3J5GAwgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSOgoEY29kZRgNIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAEStQEKB3N1YmplY3QYDiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUKDAfDQh+sEAfL//MIGB1BhdGllbnTy//zCBghMb2NhdGlvbvL//MIGBUdyb3Vw8v/8wgYMT3JnYW5pemF0aW9u8v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYOUGxhbkRlZmluaXRpb27y//zCBgpNZWRpY2F0aW9u8v/8wgYJUHJvY2VkdXJlEisKBnBlcmlvZBgPIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kEkIKCWVuY291bnRlchgQIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg/y//zCBglFbmNvdW50ZXISgwEKBmF1dGhvchgRIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQlPy//zCBgZEZXZpY2Xy//zCBgxPcmdhbml6YXRpb27y//zCBgdQYXRpZW508v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZRqKAgoKU3RhdHVzQ29kZRI4CgV2YWx1ZRgBIAEoDjIpLmdvb2dsZS5maGlyLnI0LmNvcmUuRmxhZ1N0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpmivmDsgUoaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9mbGFnLXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlOjjAn+O2BQOy/uSXBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vRmxhZ0oECAcQCEJ0Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlFnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2ZsYWdfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Flag.
 * Key information to flag to healthcare providers.
 * See http://hl7.org/fhir/StructureDefinition/Flag
 *
 * @generated from message google.fhir.r4.core.Flag
 */
export type Flag = Message<"google.fhir.r4.core.Flag"> & {
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
   * @generated from field: google.fhir.r4.core.Flag.StatusCode status = 11;
   */
  status?: Flag_StatusCode;

  /**
   * Clinical, administrative, etc.
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 12;
   */
  category: CodeableConcept[];

  /**
   * Coded or textual message to display to user
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 13;
   */
  code?: CodeableConcept;

  /**
   * Who/What is flag about?
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 14;
   */
  subject?: Reference;

  /**
   * Time period when flag is active
   *
   * @generated from field: google.fhir.r4.core.Period period = 15;
   */
  period?: Period;

  /**
   * Alert relevant during encounter
   *
   * @generated from field: google.fhir.r4.core.Reference encounter = 16;
   */
  encounter?: Reference;

  /**
   * Flag creator
   *
   * @generated from field: google.fhir.r4.core.Reference author = 17;
   */
  author?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.Flag.
 * Use `create(FlagSchema)` to create a new message.
 */
export const FlagSchema: GenMessage<Flag> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_flag, 0);

/**
 * active | inactive | entered-in-error
 *
 * @generated from message google.fhir.r4.core.Flag.StatusCode
 */
export type Flag_StatusCode = Message<"google.fhir.r4.core.Flag.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.FlagStatusCode.Value value = 1;
   */
  value: FlagStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.Flag.StatusCode.
 * Use `create(Flag_StatusCodeSchema)` to create a new message.
 */
export const Flag_StatusCodeSchema: GenMessage<Flag_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_flag, 0, 0);

