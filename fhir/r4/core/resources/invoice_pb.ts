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
// @generated from file proto/google/fhir/proto/r4/core/resources/invoice.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { InvoicePriceComponentTypeCode_Value, InvoiceStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Code, CodeableConcept, DateTime, Decimal, Extension, Id, Identifier, Markdown, Meta, Money, Narrative, PositiveInt, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/invoice.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_invoice: GenFile = /*@__PURE__*/
  fileDesc("Cjdwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9pbnZvaWNlLnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIv0ZCgdJbnZvaWNlEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI/CgZzdGF0dXMYCyABKAsyJy5nb29nbGUuZmhpci5yNC5jb3JlLkludm9pY2UuU3RhdHVzQ29kZUIG8NCH6wQBEjUKEGNhbmNlbGxlZF9yZWFzb24YDCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIyCgR0eXBlGA0gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSSQoHc3ViamVjdBgOIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhjy//zCBgdQYXRpZW508v/8wgYFR3JvdXASZQoJcmVjaXBpZW50GA8gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCMvL//MIGDE9yZ2FuaXphdGlvbvL//MIGB1BhdGllbnTy//zCBg1SZWxhdGVkUGVyc29uEisKBGRhdGUYECABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEj0KC3BhcnRpY2lwYW50GBEgAygLMiguZ29vZ2xlLmZoaXIucjQuY29yZS5JbnZvaWNlLlBhcnRpY2lwYW50EkIKBmlzc3VlchgSIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24SPgoHYWNjb3VudBgTIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg3y//zCBgdBY2NvdW50EjgKCWxpbmVfaXRlbRgUIAMoCzIlLmdvb2dsZS5maGlyLnI0LmNvcmUuSW52b2ljZS5MaW5lSXRlbRJTChV0b3RhbF9wcmljZV9jb21wb25lbnQYFSADKAsyNC5nb29nbGUuZmhpci5yNC5jb3JlLkludm9pY2UuTGluZUl0ZW0uUHJpY2VDb21wb25lbnQSLQoJdG90YWxfbmV0GBYgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5Nb25leRIvCgt0b3RhbF9ncm9zcxgXIAEoCzIaLmdvb2dsZS5maGlyLnI0LmNvcmUuTW9uZXkSNAoNcGF5bWVudF90ZXJtcxgYIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuTWFya2Rvd24SLQoEbm90ZRgZIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQW5ub3RhdGlvbhqQAgoKU3RhdHVzQ29kZRI7CgV2YWx1ZRgBIAEoDjIsLmdvb2dsZS5maGlyLnI0LmNvcmUuSW52b2ljZVN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjppivmDsgUraHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9pbnZvaWNlLXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGvcCCgtQYXJ0aWNpcGFudBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBHJvbGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBKbAQoFYWN0b3IYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJs8NCH6wQB8v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYMT3JnYW5pemF0aW9u8v/8wgYHUGF0aWVudPL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgZEZXZpY2Xy//zCBg1SZWxhdGVkUGVyc29uGtcJCghMaW5lSXRlbRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKCHNlcXVlbmNlGAQgASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5Qb3NpdGl2ZUludBJOCgtjaGFyZ2VfaXRlbRgFIAEoCzIxLmdvb2dsZS5maGlyLnI0LmNvcmUuSW52b2ljZS5MaW5lSXRlbS5DaGFyZ2VJdGVtWEIG8NCH6wQBEk0KD3ByaWNlX2NvbXBvbmVudBgGIAMoCzI0Lmdvb2dsZS5maGlyLnI0LmNvcmUuSW52b2ljZS5MaW5lSXRlbS5QcmljZUNvbXBvbmVudBqoAQoLQ2hhcmdlSXRlbVgSRQoJcmVmZXJlbmNlGAEgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEPL//MIGCkNoYXJnZUl0ZW1IABJAChBjb2RlYWJsZV9jb25jZXB0GAIgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRIADoGoIOD6AYBQggKBmNob2ljZRq0BQoOUHJpY2VDb21wb25lbnQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJTCgR0eXBlGAQgASgLMj0uZ29vZ2xlLmZoaXIucjQuY29yZS5JbnZvaWNlLkxpbmVJdGVtLlByaWNlQ29tcG9uZW50LlR5cGVDb2RlQgbw0IfrBAESMgoEY29kZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EiwKBmZhY3RvchgGIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbBIqCgZhbW91bnQYByABKAsyGi5nb29nbGUuZmhpci5yNC5jb3JlLk1vbmV5GqYCCghUeXBlQ29kZRJHCgV2YWx1ZRgBIAEoDjI4Lmdvb2dsZS5maGlyLnI0LmNvcmUuSW52b2ljZVByaWNlQ29tcG9uZW50VHlwZUNvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjp1ivmDsgU3aHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9pbnZvaWNlLXByaWNlQ29tcG9uZW50VHlwZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlOjvAn+O2BQOy/uSXBi9odHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vSW52b2ljZUoECAcQCEJ3Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlRnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2ludm9pY2VfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Invoice.
 * Invoice containing ChargeItems from an Account.
 * See http://hl7.org/fhir/StructureDefinition/Invoice
 *
 * @generated from message google.fhir.r4.core.Invoice
 */
export type Invoice = Message<"google.fhir.r4.core.Invoice"> & {
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
   * @generated from field: google.fhir.r4.core.Invoice.StatusCode status = 11;
   */
  status?: Invoice_StatusCode;

  /**
   * Reason for cancellation of this Invoice
   *
   * @generated from field: google.fhir.r4.core.String cancelled_reason = 12;
   */
  cancelledReason?: String;

  /**
   * Type of Invoice
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 13;
   */
  type?: CodeableConcept;

  /**
   * Recipient(s) of goods and services
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 14;
   */
  subject?: Reference;

  /**
   * Recipient of this invoice
   *
   * @generated from field: google.fhir.r4.core.Reference recipient = 15;
   */
  recipient?: Reference;

  /**
   * Invoice date / posting date
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 16;
   */
  date?: DateTime;

  /**
   * @generated from field: repeated google.fhir.r4.core.Invoice.Participant participant = 17;
   */
  participant: Invoice_Participant[];

  /**
   * Issuing Organization of Invoice
   *
   * @generated from field: google.fhir.r4.core.Reference issuer = 18;
   */
  issuer?: Reference;

  /**
   * Account that is being balanced
   *
   * @generated from field: google.fhir.r4.core.Reference account = 19;
   */
  account?: Reference;

  /**
   * @generated from field: repeated google.fhir.r4.core.Invoice.LineItem line_item = 20;
   */
  lineItem: Invoice_LineItem[];

  /**
   * Components of Invoice total
   *
   * @generated from field: repeated google.fhir.r4.core.Invoice.LineItem.PriceComponent total_price_component = 21;
   */
  totalPriceComponent: Invoice_LineItem_PriceComponent[];

  /**
   * Net total of this Invoice
   *
   * @generated from field: google.fhir.r4.core.Money total_net = 22;
   */
  totalNet?: Money;

  /**
   * Gross total of this Invoice
   *
   * @generated from field: google.fhir.r4.core.Money total_gross = 23;
   */
  totalGross?: Money;

  /**
   * Payment details
   *
   * @generated from field: google.fhir.r4.core.Markdown payment_terms = 24;
   */
  paymentTerms?: Markdown;

  /**
   * Comments made about the invoice
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 25;
   */
  note: Annotation[];
};

/**
 * Describes the message google.fhir.r4.core.Invoice.
 * Use `create(InvoiceSchema)` to create a new message.
 */
export const InvoiceSchema: GenMessage<Invoice> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_invoice, 0);

/**
 * draft | issued | balanced | cancelled | entered-in-error
 *
 * @generated from message google.fhir.r4.core.Invoice.StatusCode
 */
export type Invoice_StatusCode = Message<"google.fhir.r4.core.Invoice.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.InvoiceStatusCode.Value value = 1;
   */
  value: InvoiceStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.Invoice.StatusCode.
 * Use `create(Invoice_StatusCodeSchema)` to create a new message.
 */
export const Invoice_StatusCodeSchema: GenMessage<Invoice_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_invoice, 0, 0);

/**
 * Participant in creation of this Invoice
 *
 * @generated from message google.fhir.r4.core.Invoice.Participant
 */
export type Invoice_Participant = Message<"google.fhir.r4.core.Invoice.Participant"> & {
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
   * Type of involvement in creation of this Invoice
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept role = 4;
   */
  role?: CodeableConcept;

  /**
   * Individual who was involved
   *
   * @generated from field: google.fhir.r4.core.Reference actor = 5;
   */
  actor?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.Invoice.Participant.
 * Use `create(Invoice_ParticipantSchema)` to create a new message.
 */
export const Invoice_ParticipantSchema: GenMessage<Invoice_Participant> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_invoice, 0, 1);

/**
 * Line items of this Invoice
 *
 * @generated from message google.fhir.r4.core.Invoice.LineItem
 */
export type Invoice_LineItem = Message<"google.fhir.r4.core.Invoice.LineItem"> & {
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
   * Sequence number of line item
   *
   * @generated from field: google.fhir.r4.core.PositiveInt sequence = 4;
   */
  sequence?: PositiveInt;

  /**
   * @generated from field: google.fhir.r4.core.Invoice.LineItem.ChargeItemX charge_item = 5;
   */
  chargeItem?: Invoice_LineItem_ChargeItemX;

  /**
   * @generated from field: repeated google.fhir.r4.core.Invoice.LineItem.PriceComponent price_component = 6;
   */
  priceComponent: Invoice_LineItem_PriceComponent[];
};

/**
 * Describes the message google.fhir.r4.core.Invoice.LineItem.
 * Use `create(Invoice_LineItemSchema)` to create a new message.
 */
export const Invoice_LineItemSchema: GenMessage<Invoice_LineItem> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_invoice, 0, 2);

/**
 * Reference to ChargeItem containing details of this line item or an inline
 * billing code
 *
 * @generated from message google.fhir.r4.core.Invoice.LineItem.ChargeItemX
 */
export type Invoice_LineItem_ChargeItemX = Message<"google.fhir.r4.core.Invoice.LineItem.ChargeItemX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Invoice.LineItem.ChargeItemX.choice
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
 * Describes the message google.fhir.r4.core.Invoice.LineItem.ChargeItemX.
 * Use `create(Invoice_LineItem_ChargeItemXSchema)` to create a new message.
 */
export const Invoice_LineItem_ChargeItemXSchema: GenMessage<Invoice_LineItem_ChargeItemX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_invoice, 0, 2, 0);

/**
 * Components of total line item price
 *
 * @generated from message google.fhir.r4.core.Invoice.LineItem.PriceComponent
 */
export type Invoice_LineItem_PriceComponent = Message<"google.fhir.r4.core.Invoice.LineItem.PriceComponent"> & {
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
   * @generated from field: google.fhir.r4.core.Invoice.LineItem.PriceComponent.TypeCode type = 4;
   */
  type?: Invoice_LineItem_PriceComponent_TypeCode;

  /**
   * Code identifying the specific component
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 5;
   */
  code?: CodeableConcept;

  /**
   * Factor used for calculating this component
   *
   * @generated from field: google.fhir.r4.core.Decimal factor = 6;
   */
  factor?: Decimal;

  /**
   * Monetary amount associated with this component
   *
   * @generated from field: google.fhir.r4.core.Money amount = 7;
   */
  amount?: Money;
};

/**
 * Describes the message google.fhir.r4.core.Invoice.LineItem.PriceComponent.
 * Use `create(Invoice_LineItem_PriceComponentSchema)` to create a new message.
 */
export const Invoice_LineItem_PriceComponentSchema: GenMessage<Invoice_LineItem_PriceComponent> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_invoice, 0, 2, 1);

/**
 * base | surcharge | deduction | discount | tax | informational
 *
 * @generated from message google.fhir.r4.core.Invoice.LineItem.PriceComponent.TypeCode
 */
export type Invoice_LineItem_PriceComponent_TypeCode = Message<"google.fhir.r4.core.Invoice.LineItem.PriceComponent.TypeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.InvoicePriceComponentTypeCode.Value value = 1;
   */
  value: InvoicePriceComponentTypeCode_Value;

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
 * Describes the message google.fhir.r4.core.Invoice.LineItem.PriceComponent.TypeCode.
 * Use `create(Invoice_LineItem_PriceComponent_TypeCodeSchema)` to create a new message.
 */
export const Invoice_LineItem_PriceComponent_TypeCodeSchema: GenMessage<Invoice_LineItem_PriceComponent_TypeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_invoice, 0, 2, 1, 0);

