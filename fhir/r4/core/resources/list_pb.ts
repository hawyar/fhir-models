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
// @generated from file proto/google/fhir/proto/r4/core/resources/list.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { ListModeCode_Value, ListStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Boolean, Code, CodeableConcept, DateTime, Extension, Id, Identifier, Meta, Narrative, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/list.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_list: GenFile = /*@__PURE__*/
  fileDesc("CjRwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9saXN0LnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIvQRCgRMaXN0EiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI8CgZzdGF0dXMYCyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkxpc3QuU3RhdHVzQ29kZUIG8NCH6wQBEjgKBG1vZGUYDCABKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkxpc3QuTW9kZUNvZGVCBvDQh+sEARIqCgV0aXRsZRgNIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjIKBGNvZGUYDiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJjCgdzdWJqZWN0GA8gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCMvL//MIGB1BhdGllbnTy//zCBgVHcm91cPL//MIGBkRldmljZfL//MIGCExvY2F0aW9uEkIKCWVuY291bnRlchgQIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg/y//zCBglFbmNvdW50ZXISKwoEZGF0ZRgRIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUScQoGc291cmNlGBIgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCQfL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgdQYXRpZW508v/8wgYGRGV2aWNlEjgKCm9yZGVyZWRfYnkYEyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBItCgRub3RlGBQgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5Bbm5vdGF0aW9uEi4KBWVudHJ5GBUgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5MaXN0LkVudHJ5EjoKDGVtcHR5X3JlYXNvbhgWIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0GooCCgpTdGF0dXNDb2RlEjgKBXZhbHVlGAEgASgOMikuZ29vZ2xlLmZoaXIucjQuY29yZS5MaXN0U3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmaK+YOyBShodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2xpc3Qtc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUahAIKCE1vZGVDb2RlEjYKBXZhbHVlGAEgASgOMicuZ29vZ2xlLmZoaXIucjQuY29yZS5MaXN0TW9kZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpkivmDsgUmaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9saXN0LW1vZGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrzAgoFRW50cnkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIyCgRmbGFnGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLQoHZGVsZXRlZBgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIrCgRkYXRlGAYgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRJCCgRpdGVtGAcgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCFPDQh+sEAfL//MIGCFJlc291cmNlOr0BwJ/jtgUDsv7klwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0xpc3SahpOgCCRlbXB0eVJlYXNvbi5lbXB0eSgpIG9yIGVudHJ5LmVtcHR5KCmahpOgCCltb2RlID0gJ2NoYW5nZXMnIG9yIGVudHJ5LmRlbGV0ZWQuZW1wdHkoKZqGk6AIJm1vZGUgPSAnd29ya2luZycgb3IgZW50cnkuZGF0ZS5lbXB0eSgpSgQIBxAIQnQKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaUWdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvbGlzdF9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for List.
 * A list is a curated collection of resources.
 * See http://hl7.org/fhir/StructureDefinition/List
 *
 * @generated from message google.fhir.r4.core.List
 */
export type List = Message<"google.fhir.r4.core.List"> & {
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
   * @generated from field: google.fhir.r4.core.List.StatusCode status = 11;
   */
  status?: List_StatusCode;

  /**
   * @generated from field: google.fhir.r4.core.List.ModeCode mode = 12;
   */
  mode?: List_ModeCode;

  /**
   * Descriptive name for the list
   *
   * @generated from field: google.fhir.r4.core.String title = 13;
   */
  title?: String;

  /**
   * What the purpose of this list is
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 14;
   */
  code?: CodeableConcept;

  /**
   * If all resources have the same subject
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 15;
   */
  subject?: Reference;

  /**
   * Context in which list created
   *
   * @generated from field: google.fhir.r4.core.Reference encounter = 16;
   */
  encounter?: Reference;

  /**
   * When the list was prepared
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 17;
   */
  date?: DateTime;

  /**
   * Who and/or what defined the list contents (aka Author)
   *
   * @generated from field: google.fhir.r4.core.Reference source = 18;
   */
  source?: Reference;

  /**
   * What order the list has
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept ordered_by = 19;
   */
  orderedBy?: CodeableConcept;

  /**
   * Comments about the list
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 20;
   */
  note: Annotation[];

  /**
   * @generated from field: repeated google.fhir.r4.core.List.Entry entry = 21;
   */
  entry: List_Entry[];

  /**
   * Why list is empty
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept empty_reason = 22;
   */
  emptyReason?: CodeableConcept;
};

/**
 * Describes the message google.fhir.r4.core.List.
 * Use `create(ListSchema)` to create a new message.
 */
export const ListSchema: GenMessage<List> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_list, 0);

/**
 * current | retired | entered-in-error
 *
 * @generated from message google.fhir.r4.core.List.StatusCode
 */
export type List_StatusCode = Message<"google.fhir.r4.core.List.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ListStatusCode.Value value = 1;
   */
  value: ListStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.List.StatusCode.
 * Use `create(List_StatusCodeSchema)` to create a new message.
 */
export const List_StatusCodeSchema: GenMessage<List_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_list, 0, 0);

/**
 * working | snapshot | changes
 *
 * @generated from message google.fhir.r4.core.List.ModeCode
 */
export type List_ModeCode = Message<"google.fhir.r4.core.List.ModeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ListModeCode.Value value = 1;
   */
  value: ListModeCode_Value;

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
 * Describes the message google.fhir.r4.core.List.ModeCode.
 * Use `create(List_ModeCodeSchema)` to create a new message.
 */
export const List_ModeCodeSchema: GenMessage<List_ModeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_list, 0, 1);

/**
 * Entries in the list
 *
 * @generated from message google.fhir.r4.core.List.Entry
 */
export type List_Entry = Message<"google.fhir.r4.core.List.Entry"> & {
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
   * Status/Workflow information about this item
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept flag = 4;
   */
  flag?: CodeableConcept;

  /**
   * If this item is actually marked as deleted
   *
   * @generated from field: google.fhir.r4.core.Boolean deleted = 5;
   */
  deleted?: Boolean;

  /**
   * When item added to list
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 6;
   */
  date?: DateTime;

  /**
   * Actual entry
   *
   * @generated from field: google.fhir.r4.core.Reference item = 7;
   */
  item?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.List.Entry.
 * Use `create(List_EntrySchema)` to create a new message.
 */
export const List_EntrySchema: GenMessage<List_Entry> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_list, 0, 2);

