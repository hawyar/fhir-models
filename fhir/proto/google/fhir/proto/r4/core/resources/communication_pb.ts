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
// @generated from file proto/google/fhir/proto/r4/core/resources/communication.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { EventStatusCode_Value, RequestPriorityCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Attachment, Canonical, Code, CodeableConcept, DateTime, Extension, Id, Identifier, Meta, Narrative, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/communication.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_communication: GenFile = /*@__PURE__*/
  fileDesc("Cj1wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jb21tdW5pY2F0aW9uLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIvoYCg1Db21tdW5pY2F0aW9uEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI+ChZpbnN0YW50aWF0ZXNfY2Fub25pY2FsGAsgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5DYW5vbmljYWwSMgoQaW5zdGFudGlhdGVzX3VyaRgMIAMoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEkAKCGJhc2VkX29uGA0gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFJlc291cmNlEj8KB3BhcnRfb2YYDiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2USSwoOaW5fcmVzcG9uc2VfdG8YDyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIT8v/8wgYNQ29tbXVuaWNhdGlvbhJFCgZzdGF0dXMYECABKAsyLS5nb29nbGUuZmhpci5yNC5jb3JlLkNvbW11bmljYXRpb24uU3RhdHVzQ29kZUIG8NCH6wQBEjsKDXN0YXR1c19yZWFzb24YESABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI2CghjYXRlZ29yeRgSIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkEKCHByaW9yaXR5GBMgASgLMi8uZ29vZ2xlLmZoaXIucjQuY29yZS5Db21tdW5pY2F0aW9uLlByaW9yaXR5Q29kZRI0CgZtZWRpdW0YFCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJJCgdzdWJqZWN0GBUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCGPL//MIGB1BhdGllbnTy//zCBgVHcm91cBIzCgV0b3BpYxgWIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ej0KBWFib3V0GBcgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFJlc291cmNlEkIKCWVuY291bnRlchgYIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg/y//zCBglFbmNvdW50ZXISKwoEc2VudBgZIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSLwoIcmVjZWl2ZWQYGiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEsoBCglyZWNpcGllbnQYGyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUKWAfL//MIGBkRldmljZfL//MIGDE9yZ2FuaXphdGlvbvL//MIGB1BhdGllbnTy//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xl8v/8wgYNUmVsYXRlZFBlcnNvbvL//MIGBUdyb3Vw8v/8wgYIQ2FyZVRlYW3y//zCBhFIZWFsdGhjYXJlU2VydmljZRKtAQoGc2VuZGVyGBwgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCffL//MIGBkRldmljZfL//MIGDE9yZ2FuaXphdGlvbvL//MIGB1BhdGllbnTy//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xl8v/8wgYNUmVsYXRlZFBlcnNvbvL//MIGEUhlYWx0aGNhcmVTZXJ2aWNlEjkKC3JlYXNvbl9jb2RlGB0gAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQShwEKEHJlYXNvbl9yZWZlcmVuY2UYHiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJN8v/8wgYJQ29uZGl0aW9u8v/8wgYLT2JzZXJ2YXRpb27y//zCBhBEaWFnbm9zdGljUmVwb3J08v/8wgYRRG9jdW1lbnRSZWZlcmVuY2USOwoHcGF5bG9hZBgfIAMoCzIqLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29tbXVuaWNhdGlvbi5QYXlsb2FkEi0KBG5vdGUYICADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkFubm90YXRpb24ajAIKClN0YXR1c0NvZGUSOQoFdmFsdWUYASABKA4yKi5nb29nbGUuZmhpci5yNC5jb3JlLkV2ZW50U3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmeK+YOyBSlodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2V2ZW50LXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGpYCCgxQcmlvcml0eUNvZGUSPQoFdmFsdWUYASABKA4yLi5nb29nbGUuZmhpci5yNC5jb3JlLlJlcXVlc3RQcmlvcml0eUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjprivmDsgUtaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZXF1ZXN0LXByaW9yaXR5wJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUaxwMKB1BheWxvYWQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJMCgdjb250ZW50GAQgASgLMjMuZ29vZ2xlLmZoaXIucjQuY29yZS5Db21tdW5pY2F0aW9uLlBheWxvYWQuQ29udGVudFhCBvDQh+sEARrVAQoIQ29udGVudFgSOwoMc3RyaW5nX3ZhbHVlGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdIAFIGc3RyaW5nEjUKCmF0dGFjaG1lbnQYAiABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkF0dGFjaG1lbnRIABJDCglyZWZlcmVuY2UYAyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2VIADoGoIOD6AYBQggKBmNob2ljZTpBwJ/jtgUDsv7klwY1aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0NvbW11bmljYXRpb25KBAgHEAhCfQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpaZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jb21tdW5pY2F0aW9uX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Communication.
 * A record of information transmitted from a sender to a receiver.
 * See http://hl7.org/fhir/StructureDefinition/Communication
 *
 * @generated from message google.fhir.r4.core.Communication
 */
export type Communication = Message<"google.fhir.r4.core.Communication"> & {
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
   * Unique identifier
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Instantiates FHIR protocol or definition
   *
   * @generated from field: repeated google.fhir.r4.core.Canonical instantiates_canonical = 11;
   */
  instantiatesCanonical: Canonical[];

  /**
   * Instantiates external protocol or definition
   *
   * @generated from field: repeated google.fhir.r4.core.Uri instantiates_uri = 12;
   */
  instantiatesUri: Uri[];

  /**
   * Request fulfilled by this communication
   *
   * @generated from field: repeated google.fhir.r4.core.Reference based_on = 13;
   */
  basedOn: Reference[];

  /**
   * Part of this action
   *
   * @generated from field: repeated google.fhir.r4.core.Reference part_of = 14;
   */
  partOf: Reference[];

  /**
   * Reply to
   *
   * @generated from field: repeated google.fhir.r4.core.Reference in_response_to = 15;
   */
  inResponseTo: Reference[];

  /**
   * @generated from field: google.fhir.r4.core.Communication.StatusCode status = 16;
   */
  status?: Communication_StatusCode;

  /**
   * Reason for current status
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept status_reason = 17;
   */
  statusReason?: CodeableConcept;

  /**
   * Message category
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 18;
   */
  category: CodeableConcept[];

  /**
   * @generated from field: google.fhir.r4.core.Communication.PriorityCode priority = 19;
   */
  priority?: Communication_PriorityCode;

  /**
   * A channel of communication
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept medium = 20;
   */
  medium: CodeableConcept[];

  /**
   * Focus of message
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 21;
   */
  subject?: Reference;

  /**
   * Description of the purpose/content
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept topic = 22;
   */
  topic?: CodeableConcept;

  /**
   * Resources that pertain to this communication
   *
   * @generated from field: repeated google.fhir.r4.core.Reference about = 23;
   */
  about: Reference[];

  /**
   * Encounter created as part of
   *
   * @generated from field: google.fhir.r4.core.Reference encounter = 24;
   */
  encounter?: Reference;

  /**
   * When sent
   *
   * @generated from field: google.fhir.r4.core.DateTime sent = 25;
   */
  sent?: DateTime;

  /**
   * When received
   *
   * @generated from field: google.fhir.r4.core.DateTime received = 26;
   */
  received?: DateTime;

  /**
   * Message recipient
   *
   * @generated from field: repeated google.fhir.r4.core.Reference recipient = 27;
   */
  recipient: Reference[];

  /**
   * Message sender
   *
   * @generated from field: google.fhir.r4.core.Reference sender = 28;
   */
  sender?: Reference;

  /**
   * Indication for message
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept reason_code = 29;
   */
  reasonCode: CodeableConcept[];

  /**
   * Why was communication done?
   *
   * @generated from field: repeated google.fhir.r4.core.Reference reason_reference = 30;
   */
  reasonReference: Reference[];

  /**
   * @generated from field: repeated google.fhir.r4.core.Communication.Payload payload = 31;
   */
  payload: Communication_Payload[];

  /**
   * Comments made about the communication
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 32;
   */
  note: Annotation[];
};

/**
 * Describes the message google.fhir.r4.core.Communication.
 * Use `create(CommunicationSchema)` to create a new message.
 */
export const CommunicationSchema: GenMessage<Communication> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_communication, 0);

/**
 * preparation | in-progress | not-done | on-hold | stopped | completed |
 * entered-in-error | unknown
 *
 * @generated from message google.fhir.r4.core.Communication.StatusCode
 */
export type Communication_StatusCode = Message<"google.fhir.r4.core.Communication.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.EventStatusCode.Value value = 1;
   */
  value: EventStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.Communication.StatusCode.
 * Use `create(Communication_StatusCodeSchema)` to create a new message.
 */
export const Communication_StatusCodeSchema: GenMessage<Communication_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_communication, 0, 0);

/**
 * routine | urgent | asap | stat
 *
 * @generated from message google.fhir.r4.core.Communication.PriorityCode
 */
export type Communication_PriorityCode = Message<"google.fhir.r4.core.Communication.PriorityCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.RequestPriorityCode.Value value = 1;
   */
  value: RequestPriorityCode_Value;

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
 * Describes the message google.fhir.r4.core.Communication.PriorityCode.
 * Use `create(Communication_PriorityCodeSchema)` to create a new message.
 */
export const Communication_PriorityCodeSchema: GenMessage<Communication_PriorityCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_communication, 0, 1);

/**
 * Message payload
 *
 * @generated from message google.fhir.r4.core.Communication.Payload
 */
export type Communication_Payload = Message<"google.fhir.r4.core.Communication.Payload"> & {
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
   * @generated from field: google.fhir.r4.core.Communication.Payload.ContentX content = 4;
   */
  content?: Communication_Payload_ContentX;
};

/**
 * Describes the message google.fhir.r4.core.Communication.Payload.
 * Use `create(Communication_PayloadSchema)` to create a new message.
 */
export const Communication_PayloadSchema: GenMessage<Communication_Payload> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_communication, 0, 2);

/**
 * Message part content
 *
 * @generated from message google.fhir.r4.core.Communication.Payload.ContentX
 */
export type Communication_Payload_ContentX = Message<"google.fhir.r4.core.Communication.Payload.ContentX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Communication.Payload.ContentX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 1 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Attachment attachment = 2;
     */
    value: Attachment;
    case: "attachment";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Reference reference = 3;
     */
    value: Reference;
    case: "reference";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.Communication.Payload.ContentX.
 * Use `create(Communication_Payload_ContentXSchema)` to create a new message.
 */
export const Communication_Payload_ContentXSchema: GenMessage<Communication_Payload_ContentX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_communication, 0, 2, 0);

