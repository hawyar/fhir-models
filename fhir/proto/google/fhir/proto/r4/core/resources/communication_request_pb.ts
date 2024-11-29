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
// @generated from file proto/google/fhir/proto/r4/core/resources/communication_request.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { RequestPriorityCode_Value, RequestStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Attachment, Boolean, Code, CodeableConcept, DateTime, Extension, Id, Identifier, Meta, Narrative, Period, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/communication_request.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_communication_request: GenFile = /*@__PURE__*/
  fileDesc("CkVwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jb21tdW5pY2F0aW9uX3JlcXVlc3QucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUi8hoKFENvbW11bmljYXRpb25SZXF1ZXN0EiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchJACghiYXNlZF9vbhgLIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghSZXNvdXJjZRJMCghyZXBsYWNlcxgMIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhry//zCBhRDb21tdW5pY2F0aW9uUmVxdWVzdBI5ChBncm91cF9pZGVudGlmaWVyGA0gASgLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEkwKBnN0YXR1cxgOIAEoCzI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ29tbXVuaWNhdGlvblJlcXVlc3QuU3RhdHVzQ29kZUIG8NCH6wQBEjsKDXN0YXR1c19yZWFzb24YDyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI2CghjYXRlZ29yeRgQIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkgKCHByaW9yaXR5GBEgASgLMjYuZ29vZ2xlLmZoaXIucjQuY29yZS5Db21tdW5pY2F0aW9uUmVxdWVzdC5Qcmlvcml0eUNvZGUSNAoOZG9fbm90X3BlcmZvcm0YEiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SNAoGbWVkaXVtGBMgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSSQoHc3ViamVjdBgUIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhjy//zCBgdQYXRpZW508v/8wgYFR3JvdXASPQoFYWJvdXQYFSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIUmVzb3VyY2USQgoJZW5jb3VudGVyGBYgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCD/L//MIGCUVuY291bnRlchJCCgdwYXlsb2FkGBcgAygLMjEuZ29vZ2xlLmZoaXIucjQuY29yZS5Db21tdW5pY2F0aW9uUmVxdWVzdC5QYXlsb2FkEkkKCm9jY3VycmVuY2UYGCABKAsyNS5nb29nbGUuZmhpci5yNC5jb3JlLkNvbW11bmljYXRpb25SZXF1ZXN0Lk9jY3VycmVuY2VYEjIKC2F1dGhvcmVkX29uGBkgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRKZAQoJcmVxdWVzdGVyGBogASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCZvL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb27y//zCBgdQYXRpZW508v/8wgYNUmVsYXRlZFBlcnNvbvL//MIGBkRldmljZRLKAQoJcmVjaXBpZW50GBsgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VClgHy//zCBgZEZXZpY2Xy//zCBgxPcmdhbml6YXRpb27y//zCBgdQYXRpZW508v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZfL//MIGDVJlbGF0ZWRQZXJzb27y//zCBgVHcm91cPL//MIGCENhcmVUZWFt8v/8wgYRSGVhbHRoY2FyZVNlcnZpY2USrQEKBnNlbmRlchgcIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQn3y//zCBgZEZXZpY2Xy//zCBgxPcmdhbml6YXRpb27y//zCBgdQYXRpZW508v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZfL//MIGDVJlbGF0ZWRQZXJzb27y//zCBhFIZWFsdGhjYXJlU2VydmljZRI5CgtyZWFzb25fY29kZRgdIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EocBChByZWFzb25fcmVmZXJlbmNlGB4gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCTfL//MIGCUNvbmRpdGlvbvL//MIGC09ic2VydmF0aW9u8v/8wgYQRGlhZ25vc3RpY1JlcG9ydPL//MIGEURvY3VtZW50UmVmZXJlbmNlEi0KBG5vdGUYHyADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkFubm90YXRpb24akAIKClN0YXR1c0NvZGUSOwoFdmFsdWUYASABKA4yLC5nb29nbGUuZmhpci5yNC5jb3JlLlJlcXVlc3RTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aYr5g7IFK2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVxdWVzdC1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqWAgoMUHJpb3JpdHlDb2RlEj0KBXZhbHVlGAEgASgOMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZXF1ZXN0UHJpb3JpdHlDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246a4r5g7IFLWh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVxdWVzdC1wcmlvcml0ecCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGs4DCgdQYXlsb2FkEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SUwoHY29udGVudBgEIAEoCzI6Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ29tbXVuaWNhdGlvblJlcXVlc3QuUGF5bG9hZC5Db250ZW50WEIG8NCH6wQBGtUBCghDb250ZW50WBI7CgxzdHJpbmdfdmFsdWUYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0gAUgZzdHJpbmcSNQoKYXR0YWNobWVudBgCIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQXR0YWNobWVudEgAEkMKCXJlZmVyZW5jZRgDIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghSZXNvdXJjZUgAOgagg4PoBgFCCAoGY2hvaWNlGoIBCgtPY2N1cnJlbmNlWBIyCglkYXRlX3RpbWUYASABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lSAASLQoGcGVyaW9kGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2RIADoGoIOD6AYBQggKBmNob2ljZTpIwJ/jtgUDsv7klwY8aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0NvbW11bmljYXRpb25SZXF1ZXN0SgQIBxAIQoUBChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWmJnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2NvbW11bmljYXRpb25fcmVxdWVzdF9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for CommunicationRequest.
 * A request for information to be sent to a receiver.
 * See http://hl7.org/fhir/StructureDefinition/CommunicationRequest
 *
 * @generated from message google.fhir.r4.core.CommunicationRequest
 */
export type CommunicationRequest = Message<"google.fhir.r4.core.CommunicationRequest"> & {
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
   * Fulfills plan or proposal
   *
   * @generated from field: repeated google.fhir.r4.core.Reference based_on = 11;
   */
  basedOn: Reference[];

  /**
   * Request(s) replaced by this request
   *
   * @generated from field: repeated google.fhir.r4.core.Reference replaces = 12;
   */
  replaces: Reference[];

  /**
   * Composite request this is part of
   *
   * @generated from field: google.fhir.r4.core.Identifier group_identifier = 13;
   */
  groupIdentifier?: Identifier;

  /**
   * @generated from field: google.fhir.r4.core.CommunicationRequest.StatusCode status = 14;
   */
  status?: CommunicationRequest_StatusCode;

  /**
   * Reason for current status
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept status_reason = 15;
   */
  statusReason?: CodeableConcept;

  /**
   * Message category
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 16;
   */
  category: CodeableConcept[];

  /**
   * @generated from field: google.fhir.r4.core.CommunicationRequest.PriorityCode priority = 17;
   */
  priority?: CommunicationRequest_PriorityCode;

  /**
   * True if request is prohibiting action
   *
   * @generated from field: google.fhir.r4.core.Boolean do_not_perform = 18;
   */
  doNotPerform?: Boolean;

  /**
   * A channel of communication
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept medium = 19;
   */
  medium: CodeableConcept[];

  /**
   * Focus of message
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 20;
   */
  subject?: Reference;

  /**
   * Resources that pertain to this communication request
   *
   * @generated from field: repeated google.fhir.r4.core.Reference about = 21;
   */
  about: Reference[];

  /**
   * Encounter created as part of
   *
   * @generated from field: google.fhir.r4.core.Reference encounter = 22;
   */
  encounter?: Reference;

  /**
   * @generated from field: repeated google.fhir.r4.core.CommunicationRequest.Payload payload = 23;
   */
  payload: CommunicationRequest_Payload[];

  /**
   * @generated from field: google.fhir.r4.core.CommunicationRequest.OccurrenceX occurrence = 24;
   */
  occurrence?: CommunicationRequest_OccurrenceX;

  /**
   * When request transitioned to being actionable
   *
   * @generated from field: google.fhir.r4.core.DateTime authored_on = 25;
   */
  authoredOn?: DateTime;

  /**
   * Who/what is requesting service
   *
   * @generated from field: google.fhir.r4.core.Reference requester = 26;
   */
  requester?: Reference;

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
   * Why is communication needed?
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept reason_code = 29;
   */
  reasonCode: CodeableConcept[];

  /**
   * Why is communication needed?
   *
   * @generated from field: repeated google.fhir.r4.core.Reference reason_reference = 30;
   */
  reasonReference: Reference[];

  /**
   * Comments made about communication request
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 31;
   */
  note: Annotation[];
};

/**
 * Describes the message google.fhir.r4.core.CommunicationRequest.
 * Use `create(CommunicationRequestSchema)` to create a new message.
 */
export const CommunicationRequestSchema: GenMessage<CommunicationRequest> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_communication_request, 0);

/**
 * draft | active | on-hold | revoked | completed | entered-in-error | unknown
 *
 * @generated from message google.fhir.r4.core.CommunicationRequest.StatusCode
 */
export type CommunicationRequest_StatusCode = Message<"google.fhir.r4.core.CommunicationRequest.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.RequestStatusCode.Value value = 1;
   */
  value: RequestStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.CommunicationRequest.StatusCode.
 * Use `create(CommunicationRequest_StatusCodeSchema)` to create a new message.
 */
export const CommunicationRequest_StatusCodeSchema: GenMessage<CommunicationRequest_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_communication_request, 0, 0);

/**
 * routine | urgent | asap | stat
 *
 * @generated from message google.fhir.r4.core.CommunicationRequest.PriorityCode
 */
export type CommunicationRequest_PriorityCode = Message<"google.fhir.r4.core.CommunicationRequest.PriorityCode"> & {
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
 * Describes the message google.fhir.r4.core.CommunicationRequest.PriorityCode.
 * Use `create(CommunicationRequest_PriorityCodeSchema)` to create a new message.
 */
export const CommunicationRequest_PriorityCodeSchema: GenMessage<CommunicationRequest_PriorityCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_communication_request, 0, 1);

/**
 * Message payload
 *
 * @generated from message google.fhir.r4.core.CommunicationRequest.Payload
 */
export type CommunicationRequest_Payload = Message<"google.fhir.r4.core.CommunicationRequest.Payload"> & {
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
   * @generated from field: google.fhir.r4.core.CommunicationRequest.Payload.ContentX content = 4;
   */
  content?: CommunicationRequest_Payload_ContentX;
};

/**
 * Describes the message google.fhir.r4.core.CommunicationRequest.Payload.
 * Use `create(CommunicationRequest_PayloadSchema)` to create a new message.
 */
export const CommunicationRequest_PayloadSchema: GenMessage<CommunicationRequest_Payload> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_communication_request, 0, 2);

/**
 * Message part content
 *
 * @generated from message google.fhir.r4.core.CommunicationRequest.Payload.ContentX
 */
export type CommunicationRequest_Payload_ContentX = Message<"google.fhir.r4.core.CommunicationRequest.Payload.ContentX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.CommunicationRequest.Payload.ContentX.choice
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
 * Describes the message google.fhir.r4.core.CommunicationRequest.Payload.ContentX.
 * Use `create(CommunicationRequest_Payload_ContentXSchema)` to create a new message.
 */
export const CommunicationRequest_Payload_ContentXSchema: GenMessage<CommunicationRequest_Payload_ContentX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_communication_request, 0, 2, 0);

/**
 * When scheduled
 *
 * @generated from message google.fhir.r4.core.CommunicationRequest.OccurrenceX
 */
export type CommunicationRequest_OccurrenceX = Message<"google.fhir.r4.core.CommunicationRequest.OccurrenceX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.CommunicationRequest.OccurrenceX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 1;
     */
    value: DateTime;
    case: "dateTime";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Period period = 2;
     */
    value: Period;
    case: "period";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.CommunicationRequest.OccurrenceX.
 * Use `create(CommunicationRequest_OccurrenceXSchema)` to create a new message.
 */
export const CommunicationRequest_OccurrenceXSchema: GenMessage<CommunicationRequest_OccurrenceX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_communication_request, 0, 3);
