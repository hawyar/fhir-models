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
// @generated from file proto/google/fhir/proto/r4/core/resources/charge_item.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { ChargeItemStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Canonical, Code, CodeableConcept, DateTime, Decimal, Extension, Id, Identifier, Meta, Money, Narrative, Period, Quantity, Reference, String, Timing, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/charge_item.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_charge_item: GenFile = /*@__PURE__*/
  fileDesc("Cjtwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jaGFyZ2VfaXRlbS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLBGgoKQ2hhcmdlSXRlbRIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISMAoOZGVmaW5pdGlvbl91cmkYCyADKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRI8ChRkZWZpbml0aW9uX2Nhbm9uaWNhbBgMIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsEkIKBnN0YXR1cxgNIAEoCzIqLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2hhcmdlSXRlbS5TdGF0dXNDb2RlQgbw0IfrBAESQQoHcGFydF9vZhgOIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhDy//zCBgpDaGFyZ2VJdGVtEjoKBGNvZGUYDyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEk8KB3N1YmplY3QYECABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIe8NCH6wQB8v/8wgYHUGF0aWVudPL//MIGBUdyb3VwElMKB2NvbnRleHQYESABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIi8v/8wgYJRW5jb3VudGVy8v/8wgYNRXBpc29kZU9mQ2FyZRI/CgpvY2N1cnJlbmNlGBIgASgLMisuZ29vZ2xlLmZoaXIucjQuY29yZS5DaGFyZ2VJdGVtLk9jY3VycmVuY2VYEjwKCXBlcmZvcm1lchgTIAMoCzIpLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2hhcmdlSXRlbS5QZXJmb3JtZXISUwoXcGVyZm9ybWluZ19vcmdhbml6YXRpb24YFCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uElMKF3JlcXVlc3Rpbmdfb3JnYW5pemF0aW9uGBUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhJHCgtjb3N0X2NlbnRlchgWIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24SLwoIcXVhbnRpdHkYFyABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLlF1YW50aXR5EjYKCGJvZHlzaXRlGBggAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNQoPZmFjdG9yX292ZXJyaWRlGBkgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsEjIKDnByaWNlX292ZXJyaWRlGBogASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5Nb25leRI0Cg9vdmVycmlkZV9yZWFzb24YGyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxKXAQoHZW50ZXJlchgcIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQmby//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xl8v/8wgYMT3JnYW5pemF0aW9u8v/8wgYHUGF0aWVudPL//MIGBkRldmljZfL//MIGDVJlbGF0ZWRQZXJzb24SMwoMZW50ZXJlZF9kYXRlGB0gASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRI0CgZyZWFzb24YHiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBLWAQoHc2VydmljZRgfIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQqQB8v/8wgYQRGlhZ25vc3RpY1JlcG9ydPL//MIGDEltYWdpbmdTdHVkefL//MIGDEltbXVuaXphdGlvbvL//MIGGE1lZGljYXRpb25BZG1pbmlzdHJhdGlvbvL//MIGEk1lZGljYXRpb25EaXNwZW5zZfL//MIGC09ic2VydmF0aW9u8v/8wgYJUHJvY2VkdXJl8v/8wgYOU3VwcGx5RGVsaXZlcnkSOQoHcHJvZHVjdBggIAEoCzIoLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2hhcmdlSXRlbS5Qcm9kdWN0WBI+CgdhY2NvdW50GCEgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDfL//MIGB0FjY291bnQSLQoEbm90ZRgiIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQW5ub3RhdGlvbhJOChZzdXBwb3J0aW5nX2luZm9ybWF0aW9uGCMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFJlc291cmNlGpYCCgpTdGF0dXNDb2RlEj4KBXZhbHVlGAEgASgOMi8uZ29vZ2xlLmZoaXIucjQuY29yZS5DaGFyZ2VJdGVtU3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmyK+YOyBS5odHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NoYXJnZWl0ZW0tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUasQEKC09jY3VycmVuY2VYEjIKCWRhdGVfdGltZRgBIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWVIABItCgZwZXJpb2QYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZEgAEi0KBnRpbWluZxgDIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuVGltaW5nSAA6BqCDg+gGAUIICgZjaG9pY2UahwMKCVBlcmZvcm1lchInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjYKCGZ1bmN0aW9uGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSqQEKBWFjdG9yGAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCevDQh+sEAfL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb27y//zCBghDYXJlVGVhbfL//MIGB1BhdGllbnTy//zCBgZEZXZpY2Xy//zCBg1SZWxhdGVkUGVyc29uGsABCghQcm9kdWN0WBJgCglyZWZlcmVuY2UYASABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIr8v/8wgYGRGV2aWNl8v/8wgYKTWVkaWNhdGlvbvL//MIGCVN1YnN0YW5jZUgAEkAKEGNvZGVhYmxlX2NvbmNlcHQYAiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEgAOgagg4PoBgFCCAoGY2hvaWNlOj7An+O2BQOy/uSXBjJodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vQ2hhcmdlSXRlbUoECAcQCEJ7Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlhnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2NoYXJnZV9pdGVtX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for ChargeItem.
 * Item containing charge code(s) associated with the provision of healthcare
 * provider products. See http://hl7.org/fhir/StructureDefinition/ChargeItem
 *
 * @generated from message google.fhir.r4.core.ChargeItem
 */
export type ChargeItem = Message<"google.fhir.r4.core.ChargeItem"> & {
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
   * Business Identifier for item
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Defining information about the code of this charge item
   *
   * @generated from field: repeated google.fhir.r4.core.Uri definition_uri = 11;
   */
  definitionUri: Uri[];

  /**
   * Resource defining the code of this ChargeItem
   *
   * @generated from field: repeated google.fhir.r4.core.Canonical definition_canonical = 12;
   */
  definitionCanonical: Canonical[];

  /**
   * @generated from field: google.fhir.r4.core.ChargeItem.StatusCode status = 13;
   */
  status?: ChargeItem_StatusCode;

  /**
   * Part of referenced ChargeItem
   *
   * @generated from field: repeated google.fhir.r4.core.Reference part_of = 14;
   */
  partOf: Reference[];

  /**
   * A code that identifies the charge, like a billing code
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 15;
   */
  code?: CodeableConcept;

  /**
   * Individual service was done for/to
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 16;
   */
  subject?: Reference;

  /**
   * Encounter / Episode associated with event
   *
   * @generated from field: google.fhir.r4.core.Reference context = 17;
   */
  context?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.ChargeItem.OccurrenceX occurrence = 18;
   */
  occurrence?: ChargeItem_OccurrenceX;

  /**
   * @generated from field: repeated google.fhir.r4.core.ChargeItem.Performer performer = 19;
   */
  performer: ChargeItem_Performer[];

  /**
   * Organization providing the charged service
   *
   * @generated from field: google.fhir.r4.core.Reference performing_organization = 20;
   */
  performingOrganization?: Reference;

  /**
   * Organization requesting the charged service
   *
   * @generated from field: google.fhir.r4.core.Reference requesting_organization = 21;
   */
  requestingOrganization?: Reference;

  /**
   * Organization that has ownership of the (potential, future) revenue
   *
   * @generated from field: google.fhir.r4.core.Reference cost_center = 22;
   */
  costCenter?: Reference;

  /**
   * Quantity of which the charge item has been serviced
   *
   * @generated from field: google.fhir.r4.core.Quantity quantity = 23;
   */
  quantity?: Quantity;

  /**
   * Anatomical location, if relevant
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept bodysite = 24;
   */
  bodysite: CodeableConcept[];

  /**
   * Factor overriding the associated rules
   *
   * @generated from field: google.fhir.r4.core.Decimal factor_override = 25;
   */
  factorOverride?: Decimal;

  /**
   * Price overriding the associated rules
   *
   * @generated from field: google.fhir.r4.core.Money price_override = 26;
   */
  priceOverride?: Money;

  /**
   * Reason for overriding the list price/factor
   *
   * @generated from field: google.fhir.r4.core.String override_reason = 27;
   */
  overrideReason?: String;

  /**
   * Individual who was entering
   *
   * @generated from field: google.fhir.r4.core.Reference enterer = 28;
   */
  enterer?: Reference;

  /**
   * Date the charge item was entered
   *
   * @generated from field: google.fhir.r4.core.DateTime entered_date = 29;
   */
  enteredDate?: DateTime;

  /**
   * Why was the charged  service rendered?
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept reason = 30;
   */
  reason: CodeableConcept[];

  /**
   * Which rendered service is being charged?
   *
   * @generated from field: repeated google.fhir.r4.core.Reference service = 31;
   */
  service: Reference[];

  /**
   * @generated from field: google.fhir.r4.core.ChargeItem.ProductX product = 32;
   */
  product?: ChargeItem_ProductX;

  /**
   * Account to place this charge
   *
   * @generated from field: repeated google.fhir.r4.core.Reference account = 33;
   */
  account: Reference[];

  /**
   * Comments made about the ChargeItem
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 34;
   */
  note: Annotation[];

  /**
   * Further information supporting this charge
   *
   * @generated from field: repeated google.fhir.r4.core.Reference supporting_information = 35;
   */
  supportingInformation: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.ChargeItem.
 * Use `create(ChargeItemSchema)` to create a new message.
 */
export const ChargeItemSchema: GenMessage<ChargeItem> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_charge_item, 0);

/**
 * planned | billable | not-billable | aborted | billed | entered-in-error |
 * unknown
 *
 * @generated from message google.fhir.r4.core.ChargeItem.StatusCode
 */
export type ChargeItem_StatusCode = Message<"google.fhir.r4.core.ChargeItem.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ChargeItemStatusCode.Value value = 1;
   */
  value: ChargeItemStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.ChargeItem.StatusCode.
 * Use `create(ChargeItem_StatusCodeSchema)` to create a new message.
 */
export const ChargeItem_StatusCodeSchema: GenMessage<ChargeItem_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_charge_item, 0, 0);

/**
 * When the charged service was applied
 *
 * @generated from message google.fhir.r4.core.ChargeItem.OccurrenceX
 */
export type ChargeItem_OccurrenceX = Message<"google.fhir.r4.core.ChargeItem.OccurrenceX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.ChargeItem.OccurrenceX.choice
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
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Timing timing = 3;
     */
    value: Timing;
    case: "timing";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.ChargeItem.OccurrenceX.
 * Use `create(ChargeItem_OccurrenceXSchema)` to create a new message.
 */
export const ChargeItem_OccurrenceXSchema: GenMessage<ChargeItem_OccurrenceX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_charge_item, 0, 1);

/**
 * Who performed charged service
 *
 * @generated from message google.fhir.r4.core.ChargeItem.Performer
 */
export type ChargeItem_Performer = Message<"google.fhir.r4.core.ChargeItem.Performer"> & {
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
   * What type of performance was done
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept function = 4;
   */
  function?: CodeableConcept;

  /**
   * Individual who was performing
   *
   * @generated from field: google.fhir.r4.core.Reference actor = 5;
   */
  actor?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.ChargeItem.Performer.
 * Use `create(ChargeItem_PerformerSchema)` to create a new message.
 */
export const ChargeItem_PerformerSchema: GenMessage<ChargeItem_Performer> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_charge_item, 0, 2);

/**
 * Product charged
 *
 * @generated from message google.fhir.r4.core.ChargeItem.ProductX
 */
export type ChargeItem_ProductX = Message<"google.fhir.r4.core.ChargeItem.ProductX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.ChargeItem.ProductX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Reference reference = 1;
     */
    value: Reference;
    case: "reference";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.CodeableConcept codeable_concept = 2;
     */
    value: CodeableConcept;
    case: "codeableConcept";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.ChargeItem.ProductX.
 * Use `create(ChargeItem_ProductXSchema)` to create a new message.
 */
export const ChargeItem_ProductXSchema: GenMessage<ChargeItem_ProductX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_charge_item, 0, 3);

