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
// @generated from file proto/google/fhir/proto/r4/core/resources/document_reference.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { CompositionStatusCode_Value, DocumentReferenceStatusCode_Value, DocumentRelationshipTypeCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Attachment, Code, CodeableConcept, Coding, Extension, Id, Identifier, Instant, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/document_reference.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_document_reference: GenFile = /*@__PURE__*/
  fileDesc("CkJwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9kb2N1bWVudF9yZWZlcmVuY2UucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUilh0KEURvY3VtZW50UmVmZXJlbmNlEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoRbWFzdGVyX2lkZW50aWZpZXIYCiABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISMwoKaWRlbnRpZmllchgLIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchJJCgZzdGF0dXMYDCABKAsyMS5nb29nbGUuZmhpci5yNC5jb3JlLkRvY3VtZW50UmVmZXJlbmNlLlN0YXR1c0NvZGVCBvDQh+sEARJICgpkb2Nfc3RhdHVzGA0gASgLMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5Eb2N1bWVudFJlZmVyZW5jZS5Eb2NTdGF0dXNDb2RlEjIKBHR5cGUYDiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI2CghjYXRlZ29yeRgPIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EmcKB3N1YmplY3QYECABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUI28v/8wgYHUGF0aWVudPL//MIGDFByYWN0aXRpb25lcvL//MIGBUdyb3Vw8v/8wgYGRGV2aWNlEioKBGRhdGUYESABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkluc3RhbnQSlgEKBmF1dGhvchgSIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQmby//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xl8v/8wgYMT3JnYW5pemF0aW9u8v/8wgYGRGV2aWNl8v/8wgYHUGF0aWVudPL//MIGDVJlbGF0ZWRQZXJzb24ScQoNYXV0aGVudGljYXRvchgTIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQjry//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xl8v/8wgYMT3JnYW5pemF0aW9uEkUKCWN1c3RvZGlhbhgUIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24SRAoKcmVsYXRlc190bxgVIAMoCzIwLmdvb2dsZS5maGlyLnI0LmNvcmUuRG9jdW1lbnRSZWZlcmVuY2UuUmVsYXRlc1RvEjAKC2Rlc2NyaXB0aW9uGBYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSPAoOc2VjdXJpdHlfbGFiZWwYFyADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJHCgdjb250ZW50GBggAygLMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5Eb2N1bWVudFJlZmVyZW5jZS5Db250ZW50Qgbw0IfrBAESPwoHY29udGV4dBgZIAEoCzIuLmdvb2dsZS5maGlyLnI0LmNvcmUuRG9jdW1lbnRSZWZlcmVuY2UuQ29udGV4dBqlAgoKU3RhdHVzQ29kZRJFCgV2YWx1ZRgBIAEoDjI2Lmdvb2dsZS5maGlyLnI0LmNvcmUuRG9jdW1lbnRSZWZlcmVuY2VTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246dIr5g7IFNmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZG9jdW1lbnQtcmVmZXJlbmNlLXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGpsCCg1Eb2NTdGF0dXNDb2RlEj8KBXZhbHVlGAEgASgOMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5Db21wb3NpdGlvblN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjptivmDsgUvaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jb21wb3NpdGlvbi1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrrBAoJUmVsYXRlc1RvEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24STwoEY29kZRgEIAEoCzI5Lmdvb2dsZS5maGlyLnI0LmNvcmUuRG9jdW1lbnRSZWZlcmVuY2UuUmVsYXRlc1RvLkNvZGVUeXBlQgbw0IfrBAESTQoGdGFyZ2V0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCHfDQh+sEAfL//MIGEURvY3VtZW50UmVmZXJlbmNlGqUCCghDb2RlVHlwZRJGCgV2YWx1ZRgBIAEoDjI3Lmdvb2dsZS5maGlyLnI0LmNvcmUuRG9jdW1lbnRSZWxhdGlvbnNoaXBUeXBlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnWK+YOyBTdodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2RvY3VtZW50LXJlbGF0aW9uc2hpcC10eXBlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUaiwIKB0NvbnRlbnQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI7CgphdHRhY2htZW50GAQgASgLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5BdHRhY2htZW50Qgbw0IfrBAESKwoGZm9ybWF0GAUgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2Rpbmca5AQKB0NvbnRleHQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJVCgllbmNvdW50ZXIYBCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIi8v/8wgYJRW5jb3VudGVy8v/8wgYNRXBpc29kZU9mQ2FyZRIzCgVldmVudBgFIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EisKBnBlcmlvZBgGIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kEjsKDWZhY2lsaXR5X3R5cGUYByABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI+ChBwcmFjdGljZV9zZXR0aW5nGAggASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSSgoTc291cmNlX3BhdGllbnRfaW5mbxgJIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg3y//zCBgdQYXRpZW50Ej8KB3JlbGF0ZWQYCiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2U6RcCf47YFA7L+5JcGOWh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9Eb2N1bWVudFJlZmVyZW5jZUoECAcQCEKCAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpfZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9kb2N1bWVudF9yZWZlcmVuY2VfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for DocumentReference.
 * A reference to a document.
 * See http://hl7.org/fhir/StructureDefinition/DocumentReference
 *
 * @generated from message google.fhir.r4.core.DocumentReference
 */
export type DocumentReference = Message<"google.fhir.r4.core.DocumentReference"> & {
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
   * Master Version Specific Identifier
   *
   * @generated from field: google.fhir.r4.core.Identifier master_identifier = 10;
   */
  masterIdentifier?: Identifier;

  /**
   * Other identifiers for the document
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 11;
   */
  identifier: Identifier[];

  /**
   * @generated from field: google.fhir.r4.core.DocumentReference.StatusCode status = 12;
   */
  status?: DocumentReference_StatusCode;

  /**
   * @generated from field: google.fhir.r4.core.DocumentReference.DocStatusCode doc_status = 13;
   */
  docStatus?: DocumentReference_DocStatusCode;

  /**
   * Kind of document (LOINC if possible)
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 14;
   */
  type?: CodeableConcept;

  /**
   * Categorization of document
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 15;
   */
  category: CodeableConcept[];

  /**
   * Who/what is the subject of the document
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 16;
   */
  subject?: Reference;

  /**
   * When this document reference was created
   *
   * @generated from field: google.fhir.r4.core.Instant date = 17;
   */
  date?: Instant;

  /**
   * Who and/or what authored the document
   *
   * @generated from field: repeated google.fhir.r4.core.Reference author = 18;
   */
  author: Reference[];

  /**
   * Who/what authenticated the document
   *
   * @generated from field: google.fhir.r4.core.Reference authenticator = 19;
   */
  authenticator?: Reference;

  /**
   * Organization which maintains the document
   *
   * @generated from field: google.fhir.r4.core.Reference custodian = 20;
   */
  custodian?: Reference;

  /**
   * @generated from field: repeated google.fhir.r4.core.DocumentReference.RelatesTo relates_to = 21;
   */
  relatesTo: DocumentReference_RelatesTo[];

  /**
   * Human-readable description
   *
   * @generated from field: google.fhir.r4.core.String description = 22;
   */
  description?: String;

  /**
   * Document security-tags
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept security_label = 23;
   */
  securityLabel: CodeableConcept[];

  /**
   * @generated from field: repeated google.fhir.r4.core.DocumentReference.Content content = 24;
   */
  content: DocumentReference_Content[];

  /**
   * @generated from field: google.fhir.r4.core.DocumentReference.Context context = 25;
   */
  context?: DocumentReference_Context;
};

/**
 * Describes the message google.fhir.r4.core.DocumentReference.
 * Use `create(DocumentReferenceSchema)` to create a new message.
 */
export const DocumentReferenceSchema: GenMessage<DocumentReference> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_document_reference, 0);

/**
 * current | superseded | entered-in-error
 *
 * @generated from message google.fhir.r4.core.DocumentReference.StatusCode
 */
export type DocumentReference_StatusCode = Message<"google.fhir.r4.core.DocumentReference.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.DocumentReferenceStatusCode.Value value = 1;
   */
  value: DocumentReferenceStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.DocumentReference.StatusCode.
 * Use `create(DocumentReference_StatusCodeSchema)` to create a new message.
 */
export const DocumentReference_StatusCodeSchema: GenMessage<DocumentReference_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_document_reference, 0, 0);

/**
 * preliminary | final | amended | entered-in-error
 *
 * @generated from message google.fhir.r4.core.DocumentReference.DocStatusCode
 */
export type DocumentReference_DocStatusCode = Message<"google.fhir.r4.core.DocumentReference.DocStatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.CompositionStatusCode.Value value = 1;
   */
  value: CompositionStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.DocumentReference.DocStatusCode.
 * Use `create(DocumentReference_DocStatusCodeSchema)` to create a new message.
 */
export const DocumentReference_DocStatusCodeSchema: GenMessage<DocumentReference_DocStatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_document_reference, 0, 1);

/**
 * Relationships to other documents
 *
 * @generated from message google.fhir.r4.core.DocumentReference.RelatesTo
 */
export type DocumentReference_RelatesTo = Message<"google.fhir.r4.core.DocumentReference.RelatesTo"> & {
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
   * @generated from field: google.fhir.r4.core.DocumentReference.RelatesTo.CodeType code = 4;
   */
  code?: DocumentReference_RelatesTo_CodeType;

  /**
   * Target of the relationship
   *
   * @generated from field: google.fhir.r4.core.Reference target = 5;
   */
  target?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.DocumentReference.RelatesTo.
 * Use `create(DocumentReference_RelatesToSchema)` to create a new message.
 */
export const DocumentReference_RelatesToSchema: GenMessage<DocumentReference_RelatesTo> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_document_reference, 0, 2);

/**
 * replaces | transforms | signs | appends
 *
 * @generated from message google.fhir.r4.core.DocumentReference.RelatesTo.CodeType
 */
export type DocumentReference_RelatesTo_CodeType = Message<"google.fhir.r4.core.DocumentReference.RelatesTo.CodeType"> & {
  /**
   * @generated from field: google.fhir.r4.core.DocumentRelationshipTypeCode.Value value = 1;
   */
  value: DocumentRelationshipTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.DocumentReference.RelatesTo.CodeType.
 * Use `create(DocumentReference_RelatesTo_CodeTypeSchema)` to create a new message.
 */
export const DocumentReference_RelatesTo_CodeTypeSchema: GenMessage<DocumentReference_RelatesTo_CodeType> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_document_reference, 0, 2, 0);

/**
 * Document referenced
 *
 * @generated from message google.fhir.r4.core.DocumentReference.Content
 */
export type DocumentReference_Content = Message<"google.fhir.r4.core.DocumentReference.Content"> & {
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
   * Where to access the document
   *
   * @generated from field: google.fhir.r4.core.Attachment attachment = 4;
   */
  attachment?: Attachment;

  /**
   * Format/content rules for the document
   *
   * @generated from field: google.fhir.r4.core.Coding format = 5;
   */
  format?: Coding;
};

/**
 * Describes the message google.fhir.r4.core.DocumentReference.Content.
 * Use `create(DocumentReference_ContentSchema)` to create a new message.
 */
export const DocumentReference_ContentSchema: GenMessage<DocumentReference_Content> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_document_reference, 0, 3);

/**
 * Clinical context of document
 *
 * @generated from message google.fhir.r4.core.DocumentReference.Context
 */
export type DocumentReference_Context = Message<"google.fhir.r4.core.DocumentReference.Context"> & {
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
   * Context of the document  content
   *
   * @generated from field: repeated google.fhir.r4.core.Reference encounter = 4;
   */
  encounter: Reference[];

  /**
   * Main clinical acts documented
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept event = 5;
   */
  event: CodeableConcept[];

  /**
   * Time of service that is being documented
   *
   * @generated from field: google.fhir.r4.core.Period period = 6;
   */
  period?: Period;

  /**
   * Kind of facility where patient was seen
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept facility_type = 7;
   */
  facilityType?: CodeableConcept;

  /**
   * Additional details about where the content was created (e.g. clinical
   * specialty)
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept practice_setting = 8;
   */
  practiceSetting?: CodeableConcept;

  /**
   * Patient demographics from source
   *
   * @generated from field: google.fhir.r4.core.Reference source_patient_info = 9;
   */
  sourcePatientInfo?: Reference;

  /**
   * Related identifiers or resources
   *
   * @generated from field: repeated google.fhir.r4.core.Reference related = 10;
   */
  related: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.DocumentReference.Context.
 * Use `create(DocumentReference_ContextSchema)` to create a new message.
 */
export const DocumentReference_ContextSchema: GenMessage<DocumentReference_Context> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_document_reference, 0, 4);
