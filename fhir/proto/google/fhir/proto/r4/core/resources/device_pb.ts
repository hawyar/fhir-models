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
// @generated from file proto/google/fhir/proto/r4/core/resources/device.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { DeviceNameTypeCode_Value, FHIRDeviceStatusCode_Value, UDIEntryTypeCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Base64Binary, Code, CodeableConcept, ContactPoint, DateTime, Extension, Id, Identifier, Meta, Narrative, Quantity, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/device.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_device: GenFile = /*@__PURE__*/
  fileDesc("CjZwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9kZXZpY2UucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUikSMKBkRldmljZRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISSgoKZGVmaW5pdGlvbhgLIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhby//zCBhBEZXZpY2VEZWZpbml0aW9uEjsKC3VkaV9jYXJyaWVyGAwgAygLMiYuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2UuVWRpQ2FycmllchI2CgZzdGF0dXMYDSABKAsyJi5nb29nbGUuZmhpci5yNC5jb3JlLkRldmljZS5TdGF0dXNDb2RlEjsKDXN0YXR1c19yZWFzb24YDiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI4ChNkaXN0aW5jdF9pZGVudGlmaWVyGA8gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoMbWFudWZhY3R1cmVyGBAgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSNwoQbWFudWZhY3R1cmVfZGF0ZRgRIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSNgoPZXhwaXJhdGlvbl9kYXRlGBIgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRIvCgpsb3RfbnVtYmVyGBMgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMgoNc2VyaWFsX251bWJlchgUIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjsKC2RldmljZV9uYW1lGBUgAygLMiYuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2UuRGV2aWNlTmFtZRIxCgxtb2RlbF9udW1iZXIYFiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIwCgtwYXJ0X251bWJlchgXIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjIKBHR5cGUYGCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJCCg5zcGVjaWFsaXphdGlvbhgZIAMoCzIqLmdvb2dsZS5maGlyLnI0LmNvcmUuRGV2aWNlLlNwZWNpYWxpemF0aW9uEjQKB3ZlcnNpb24YGiADKAsyIy5nb29nbGUuZmhpci5yNC5jb3JlLkRldmljZS5WZXJzaW9uEjYKCHByb3BlcnR5GBsgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2UuUHJvcGVydHkSPgoHcGF0aWVudBgcIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg3y//zCBgdQYXRpZW50EkEKBW93bmVyGB0gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhIyCgdjb250YWN0GB4gAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0UG9pbnQSQAoIbG9jYXRpb24YHyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYITG9jYXRpb24SJQoDdXJsGCAgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSLQoEbm90ZRghIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQW5ub3RhdGlvbhI0CgZzYWZldHkYIiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI8CgZwYXJlbnQYIyABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIM8v/8wgYGRGV2aWNlGpkGCgpVZGlDYXJyaWVyEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SNgoRZGV2aWNlX2lkZW50aWZpZXIYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIoCgZpc3N1ZXIYBSABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIuCgxqdXJpc2RpY3Rpb24YBiABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRJECgxjYXJyaWVyX2FpZGMYByABKAsyIS5nb29nbGUuZmhpci5yNC5jb3JlLkJhc2U2NEJpbmFyeVILY2FycmllckFJREMSPAoLY2Fycmllcl9ocmYYCCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ1IKY2FycmllckhSRhJICgplbnRyeV90eXBlGAkgASgLMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2UuVWRpQ2Fycmllci5FbnRyeVR5cGVDb2RlGpICCg1FbnRyeVR5cGVDb2RlEjoKBXZhbHVlGAEgASgOMisuZ29vZ2xlLmZoaXIucjQuY29yZS5VRElFbnRyeVR5cGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aYr5g7IFK2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvdWRpLWVudHJ5LXR5cGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqSAgoKU3RhdHVzQ29kZRI+CgV2YWx1ZRgBIAEoDjIvLmdvb2dsZS5maGlyLnI0LmNvcmUuRkhJUkRldmljZVN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpoivmDsgUqaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9kZXZpY2Utc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUasQQKCkRldmljZU5hbWUSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIxCgRuYW1lGAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdCBvDQh+sEARJFCgR0eXBlGAUgASgLMi8uZ29vZ2xlLmZoaXIucjQuY29yZS5EZXZpY2UuRGV2aWNlTmFtZS5UeXBlQ29kZUIG8NCH6wQBGpACCghUeXBlQ29kZRI8CgV2YWx1ZRgBIAEoDjItLmdvb2dsZS5maGlyLnI0LmNvcmUuRGV2aWNlTmFtZVR5cGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aor5g7IFLGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZGV2aWNlLW5hbWV0eXBlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUamQIKDlNwZWNpYWxpemF0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SQQoLc3lzdGVtX3R5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEiwKB3ZlcnNpb24YBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxq9AgoHVmVyc2lvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBHR5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIyCgljb21wb25lbnQYBSABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISMgoFdmFsdWUYBiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0IG8NCH6wQBGs8CCghQcm9wZXJ0eRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKBHR5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEjUKDnZhbHVlX3F1YW50aXR5GAUgAygLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eRI4Cgp2YWx1ZV9jb2RlGAYgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQ6OsCf47YFA7L+5JcGLmh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9EZXZpY2VKBAgHEAhCdgoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpTZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9kZXZpY2VfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Device.
 * Item used in healthcare.
 * See http://hl7.org/fhir/StructureDefinition/Device
 *
 * @generated from message google.fhir.r4.core.Device
 */
export type Device = Message<"google.fhir.r4.core.Device"> & {
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
   * Instance identifier
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * The reference to the definition for the device
   *
   * @generated from field: google.fhir.r4.core.Reference definition = 11;
   */
  definition?: Reference;

  /**
   * @generated from field: repeated google.fhir.r4.core.Device.UdiCarrier udi_carrier = 12;
   */
  udiCarrier: Device_UdiCarrier[];

  /**
   * @generated from field: google.fhir.r4.core.Device.StatusCode status = 13;
   */
  status?: Device_StatusCode;

  /**
   * online | paused | standby | offline | not-ready | transduc-discon |
   * hw-discon | off
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept status_reason = 14;
   */
  statusReason: CodeableConcept[];

  /**
   * The distinct identification string
   *
   * @generated from field: google.fhir.r4.core.String distinct_identifier = 15;
   */
  distinctIdentifier?: String;

  /**
   * Name of device manufacturer
   *
   * @generated from field: google.fhir.r4.core.String manufacturer = 16;
   */
  manufacturer?: String;

  /**
   * Date when the device was made
   *
   * @generated from field: google.fhir.r4.core.DateTime manufacture_date = 17;
   */
  manufactureDate?: DateTime;

  /**
   * Date and time of expiry of this device (if applicable)
   *
   * @generated from field: google.fhir.r4.core.DateTime expiration_date = 18;
   */
  expirationDate?: DateTime;

  /**
   * Lot number of manufacture
   *
   * @generated from field: google.fhir.r4.core.String lot_number = 19;
   */
  lotNumber?: String;

  /**
   * Serial number assigned by the manufacturer
   *
   * @generated from field: google.fhir.r4.core.String serial_number = 20;
   */
  serialNumber?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.Device.DeviceName device_name = 21;
   */
  deviceName: Device_DeviceName[];

  /**
   * The model number for the device
   *
   * @generated from field: google.fhir.r4.core.String model_number = 22;
   */
  modelNumber?: String;

  /**
   * The part number of the device
   *
   * @generated from field: google.fhir.r4.core.String part_number = 23;
   */
  partNumber?: String;

  /**
   * The kind or type of device
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 24;
   */
  type?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.Device.Specialization specialization = 25;
   */
  specialization: Device_Specialization[];

  /**
   * @generated from field: repeated google.fhir.r4.core.Device.Version version = 26;
   */
  version: Device_Version[];

  /**
   * @generated from field: repeated google.fhir.r4.core.Device.Property property = 27;
   */
  property: Device_Property[];

  /**
   * Patient to whom Device is affixed
   *
   * @generated from field: google.fhir.r4.core.Reference patient = 28;
   */
  patient?: Reference;

  /**
   * Organization responsible for device
   *
   * @generated from field: google.fhir.r4.core.Reference owner = 29;
   */
  owner?: Reference;

  /**
   * Details for human/organization for support
   *
   * @generated from field: repeated google.fhir.r4.core.ContactPoint contact = 30;
   */
  contact: ContactPoint[];

  /**
   * Where the device is found
   *
   * @generated from field: google.fhir.r4.core.Reference location = 31;
   */
  location?: Reference;

  /**
   * Network address to contact device
   *
   * @generated from field: google.fhir.r4.core.Uri url = 32;
   */
  url?: Uri;

  /**
   * Device notes and comments
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 33;
   */
  note: Annotation[];

  /**
   * Safety Characteristics of Device
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept safety = 34;
   */
  safety: CodeableConcept[];

  /**
   * The parent device
   *
   * @generated from field: google.fhir.r4.core.Reference parent = 35;
   */
  parent?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.Device.
 * Use `create(DeviceSchema)` to create a new message.
 */
export const DeviceSchema: GenMessage<Device> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_device, 0);

/**
 * Unique Device Identifier (UDI) Barcode string
 *
 * @generated from message google.fhir.r4.core.Device.UdiCarrier
 */
export type Device_UdiCarrier = Message<"google.fhir.r4.core.Device.UdiCarrier"> & {
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
   * Mandatory fixed portion of UDI
   *
   * @generated from field: google.fhir.r4.core.String device_identifier = 4;
   */
  deviceIdentifier?: String;

  /**
   * UDI Issuing Organization
   *
   * @generated from field: google.fhir.r4.core.Uri issuer = 5;
   */
  issuer?: Uri;

  /**
   * Regional UDI authority
   *
   * @generated from field: google.fhir.r4.core.Uri jurisdiction = 6;
   */
  jurisdiction?: Uri;

  /**
   * UDI Machine Readable Barcode String
   *
   * @generated from field: google.fhir.r4.core.Base64Binary carrier_aidc = 7 [json_name = "carrierAIDC"];
   */
  carrierAidc?: Base64Binary;

  /**
   * UDI Human Readable Barcode String
   *
   * @generated from field: google.fhir.r4.core.String carrier_hrf = 8 [json_name = "carrierHRF"];
   */
  carrierHrf?: String;

  /**
   * @generated from field: google.fhir.r4.core.Device.UdiCarrier.EntryTypeCode entry_type = 9;
   */
  entryType?: Device_UdiCarrier_EntryTypeCode;
};

/**
 * Describes the message google.fhir.r4.core.Device.UdiCarrier.
 * Use `create(Device_UdiCarrierSchema)` to create a new message.
 */
export const Device_UdiCarrierSchema: GenMessage<Device_UdiCarrier> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_device, 0, 0);

/**
 * barcode | rfid | manual +
 *
 * @generated from message google.fhir.r4.core.Device.UdiCarrier.EntryTypeCode
 */
export type Device_UdiCarrier_EntryTypeCode = Message<"google.fhir.r4.core.Device.UdiCarrier.EntryTypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.UDIEntryTypeCode.Value value = 1;
   */
  value: UDIEntryTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.Device.UdiCarrier.EntryTypeCode.
 * Use `create(Device_UdiCarrier_EntryTypeCodeSchema)` to create a new message.
 */
export const Device_UdiCarrier_EntryTypeCodeSchema: GenMessage<Device_UdiCarrier_EntryTypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_device, 0, 0, 0);

/**
 * active | inactive | entered-in-error | unknown
 *
 * @generated from message google.fhir.r4.core.Device.StatusCode
 */
export type Device_StatusCode = Message<"google.fhir.r4.core.Device.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.FHIRDeviceStatusCode.Value value = 1;
   */
  value: FHIRDeviceStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.Device.StatusCode.
 * Use `create(Device_StatusCodeSchema)` to create a new message.
 */
export const Device_StatusCodeSchema: GenMessage<Device_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_device, 0, 1);

/**
 * The name of the device as given by the manufacturer
 *
 * @generated from message google.fhir.r4.core.Device.DeviceName
 */
export type Device_DeviceName = Message<"google.fhir.r4.core.Device.DeviceName"> & {
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
   * The name of the device
   *
   * @generated from field: google.fhir.r4.core.String name = 4;
   */
  name?: String;

  /**
   * @generated from field: google.fhir.r4.core.Device.DeviceName.TypeCode type = 5;
   */
  type?: Device_DeviceName_TypeCode;
};

/**
 * Describes the message google.fhir.r4.core.Device.DeviceName.
 * Use `create(Device_DeviceNameSchema)` to create a new message.
 */
export const Device_DeviceNameSchema: GenMessage<Device_DeviceName> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_device, 0, 2);

/**
 * udi-label-name | user-friendly-name | patient-reported-name |
 * manufacturer-name | model-name | other
 *
 * @generated from message google.fhir.r4.core.Device.DeviceName.TypeCode
 */
export type Device_DeviceName_TypeCode = Message<"google.fhir.r4.core.Device.DeviceName.TypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.DeviceNameTypeCode.Value value = 1;
   */
  value: DeviceNameTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.Device.DeviceName.TypeCode.
 * Use `create(Device_DeviceName_TypeCodeSchema)` to create a new message.
 */
export const Device_DeviceName_TypeCodeSchema: GenMessage<Device_DeviceName_TypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_device, 0, 2, 0);

/**
 * The capabilities supported on a  device, the standards to which the device
 * conforms for a particular purpose, and used for the communication
 *
 * @generated from message google.fhir.r4.core.Device.Specialization
 */
export type Device_Specialization = Message<"google.fhir.r4.core.Device.Specialization"> & {
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
   * The standard that is used to operate and communicate
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept system_type = 4;
   */
  systemType?: CodeableConcept;

  /**
   * The version of the standard that is used to operate and communicate
   *
   * @generated from field: google.fhir.r4.core.String version = 5;
   */
  version?: String;
};

/**
 * Describes the message google.fhir.r4.core.Device.Specialization.
 * Use `create(Device_SpecializationSchema)` to create a new message.
 */
export const Device_SpecializationSchema: GenMessage<Device_Specialization> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_device, 0, 3);

/**
 * The actual design of the device or software version running on the device
 *
 * @generated from message google.fhir.r4.core.Device.Version
 */
export type Device_Version = Message<"google.fhir.r4.core.Device.Version"> & {
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
   * The type of the device version
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * A single component of the device version
   *
   * @generated from field: google.fhir.r4.core.Identifier component = 5;
   */
  component?: Identifier;

  /**
   * The version text
   *
   * @generated from field: google.fhir.r4.core.String value = 6;
   */
  value?: String;
};

/**
 * Describes the message google.fhir.r4.core.Device.Version.
 * Use `create(Device_VersionSchema)` to create a new message.
 */
export const Device_VersionSchema: GenMessage<Device_Version> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_device, 0, 4);

/**
 * The actual configuration settings of a device as it actually operates,
 * e.g., regulation status, time properties
 *
 * @generated from message google.fhir.r4.core.Device.Property
 */
export type Device_Property = Message<"google.fhir.r4.core.Device.Property"> & {
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
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible)
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * Property value as a quantity
   *
   * @generated from field: repeated google.fhir.r4.core.Quantity value_quantity = 5;
   */
  valueQuantity: Quantity[];

  /**
   * Property value as a code, e.g., NTP4 (synced to NTP)
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept value_code = 6;
   */
  valueCode: CodeableConcept[];
};

/**
 * Describes the message google.fhir.r4.core.Device.Property.
 * Use `create(Device_PropertySchema)` to create a new message.
 */
export const Device_PropertySchema: GenMessage<Device_Property> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_device, 0, 5);
