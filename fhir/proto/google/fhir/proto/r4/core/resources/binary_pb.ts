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
// @generated from file proto/google/fhir/proto/r4/core/resources/binary.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { Base64Binary, Code, Extension, Id, Meta, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/binary.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_binary: GenFile = /*@__PURE__*/
  fileDesc("CjZwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9iaW5hcnkucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUiogUKBkJpbmFyeRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEkkKDGNvbnRlbnRfdHlwZRgFIAEoCzIrLmdvb2dsZS5maGlyLnI0LmNvcmUuQmluYXJ5LkNvbnRlbnRUeXBlQ29kZUIG8NCH6wQBEkgKEHNlY3VyaXR5X2NvbnRleHQYBiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2USLwoEZGF0YRgHIAEoCzIhLmdvb2dsZS5maGlyLnI0LmNvcmUuQmFzZTY0QmluYXJ5GugBCg9Db250ZW50VHlwZUNvZGUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhINCgV2YWx1ZRgEIAEoCTpkivmDsgUmaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9taW1ldHlwZXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZUoECAEQAjo6wJ/jtgUDsv7klwYuaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0JpbmFyeUJ2Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlNnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2JpbmFyeV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Binary.
 * Pure binary content defined by a format other than FHIR.
 * See http://hl7.org/fhir/StructureDefinition/Binary
 *
 * @generated from message google.fhir.r4.core.Binary
 */
export type Binary = Message<"google.fhir.r4.core.Binary"> & {
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
   * @generated from field: google.fhir.r4.core.Binary.ContentTypeCode content_type = 5;
   */
  contentType?: Binary_ContentTypeCode;

  /**
   * Identifies another resource to use as proxy when enforcing access control
   *
   * @generated from field: google.fhir.r4.core.Reference security_context = 6;
   */
  securityContext?: Reference;

  /**
   * The actual content
   *
   * @generated from field: google.fhir.r4.core.Base64Binary data = 7;
   */
  data?: Base64Binary;
};

/**
 * Describes the message google.fhir.r4.core.Binary.
 * Use `create(BinarySchema)` to create a new message.
 */
export const BinarySchema: GenMessage<Binary> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_binary, 0);

/**
 * MimeType of the binary content
 *
 * @generated from message google.fhir.r4.core.Binary.ContentTypeCode
 */
export type Binary_ContentTypeCode = Message<"google.fhir.r4.core.Binary.ContentTypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.String id = 2;
   */
  id?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Extension extension = 3;
   */
  extension: Extension[];

  /**
   * This valueset is not enumerable, and so is represented as a string.
   *
   * @generated from field: string value = 4;
   */
  value: string;
};

/**
 * Describes the message google.fhir.r4.core.Binary.ContentTypeCode.
 * Use `create(Binary_ContentTypeCodeSchema)` to create a new message.
 */
export const Binary_ContentTypeCodeSchema: GenMessage<Binary_ContentTypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_binary, 0, 0);

