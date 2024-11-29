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
// @generated from file proto/google/fhir/proto/r4/core/resources/medicinal_product_packaged.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { Code, CodeableConcept, Extension, Id, Identifier, MarketingStatus, Meta, Narrative, ProdCharacteristic, ProductShelfLife, Quantity, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/medicinal_product_packaged.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_medicinal_product_packaged: GenFile = /*@__PURE__*/
  fileDesc("Ckpwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWRpY2luYWxfcHJvZHVjdF9wYWNrYWdlZC5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKGEwoYTWVkaWNpbmFsUHJvZHVjdFBhY2thZ2VkEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchJHCgdzdWJqZWN0GAsgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCFvL//MIGEE1lZGljaW5hbFByb2R1Y3QSMAoLZGVzY3JpcHRpb24YDCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJEChZsZWdhbF9zdGF0dXNfb2Zfc3VwcGx5GA0gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSPgoQbWFya2V0aW5nX3N0YXR1cxgOIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuTWFya2V0aW5nU3RhdHVzEmQKF21hcmtldGluZ19hdXRob3JpemF0aW9uGA8gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCI/L//MIGHU1lZGljaW5hbFByb2R1Y3RBdXRob3JpemF0aW9uEkgKDG1hbnVmYWN0dXJlchgQIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24SVwoQYmF0Y2hfaWRlbnRpZmllchgRIAMoCzI9Lmdvb2dsZS5maGlyLnI0LmNvcmUuTWVkaWNpbmFsUHJvZHVjdFBhY2thZ2VkLkJhdGNoSWRlbnRpZmllchJXCgxwYWNrYWdlX2l0ZW0YEiADKAsyOS5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGljaW5hbFByb2R1Y3RQYWNrYWdlZC5QYWNrYWdlSXRlbUIG8NCH6wQBGqkCCg9CYXRjaElkZW50aWZpZXISJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJACg9vdXRlcl9wYWNrYWdpbmcYBCABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXJCBvDQh+sEARI8ChNpbW1lZGlhdGVfcGFja2FnaW5nGAUgASgLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyGt4HCgtQYWNrYWdlSXRlbRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYBCADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISOgoEdHlwZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESNwoIcXVhbnRpdHkYBiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLlF1YW50aXR5Qgbw0IfrBAESNgoIbWF0ZXJpYWwYByADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJAChJhbHRlcm5hdGVfbWF0ZXJpYWwYCCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJGCgZkZXZpY2UYCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIW8v/8wgYQRGV2aWNlRGVmaW5pdGlvbhJdChFtYW51ZmFjdHVyZWRfaXRlbRgKIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQiLy//zCBhxNZWRpY2luYWxQcm9kdWN0TWFudWZhY3R1cmVkEk8KDHBhY2thZ2VfaXRlbRgLIAMoCzI5Lmdvb2dsZS5maGlyLnI0LmNvcmUuTWVkaWNpbmFsUHJvZHVjdFBhY2thZ2VkLlBhY2thZ2VJdGVtEkkKGHBoeXNpY2FsX2NoYXJhY3RlcmlzdGljcxgMIAEoCzInLmdvb2dsZS5maGlyLnI0LmNvcmUuUHJvZENoYXJhY3RlcmlzdGljEkMKFW90aGVyX2NoYXJhY3RlcmlzdGljcxgNIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkEKEnNoZWxmX2xpZmVfc3RvcmFnZRgOIAMoCzIlLmdvb2dsZS5maGlyLnI0LmNvcmUuUHJvZHVjdFNoZWxmTGlmZRJICgxtYW51ZmFjdHVyZXIYDyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uOkzAn+O2BQOy/uSXBkBodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vTWVkaWNpbmFsUHJvZHVjdFBhY2thZ2VkSgQIBxAIQooBChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWmdnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL21lZGljaW5hbF9wcm9kdWN0X3BhY2thZ2VkX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for MedicinalProductPackaged.
 * A medicinal product in a container or package.
 * See http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged
 *
 * @generated from message google.fhir.r4.core.MedicinalProductPackaged
 */
export type MedicinalProductPackaged = Message<"google.fhir.r4.core.MedicinalProductPackaged"> & {
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
   * The product with this is a pack for
   *
   * @generated from field: repeated google.fhir.r4.core.Reference subject = 11;
   */
  subject: Reference[];

  /**
   * Textual description
   *
   * @generated from field: google.fhir.r4.core.String description = 12;
   */
  description?: String;

  /**
   * The legal status of supply of the medicinal product as classified by the
   * regulator
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept legal_status_of_supply = 13;
   */
  legalStatusOfSupply?: CodeableConcept;

  /**
   * Marketing information
   *
   * @generated from field: repeated google.fhir.r4.core.MarketingStatus marketing_status = 14;
   */
  marketingStatus: MarketingStatus[];

  /**
   * Manufacturer of this Package Item
   *
   * @generated from field: google.fhir.r4.core.Reference marketing_authorization = 15;
   */
  marketingAuthorization?: Reference;

  /**
   * Manufacturer of this Package Item
   *
   * @generated from field: repeated google.fhir.r4.core.Reference manufacturer = 16;
   */
  manufacturer: Reference[];

  /**
   * @generated from field: repeated google.fhir.r4.core.MedicinalProductPackaged.BatchIdentifier batch_identifier = 17;
   */
  batchIdentifier: MedicinalProductPackaged_BatchIdentifier[];

  /**
   * @generated from field: repeated google.fhir.r4.core.MedicinalProductPackaged.PackageItem package_item = 18;
   */
  packageItem: MedicinalProductPackaged_PackageItem[];
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProductPackaged.
 * Use `create(MedicinalProductPackagedSchema)` to create a new message.
 */
export const MedicinalProductPackagedSchema: GenMessage<MedicinalProductPackaged> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product_packaged, 0);

/**
 * Batch numbering
 *
 * @generated from message google.fhir.r4.core.MedicinalProductPackaged.BatchIdentifier
 */
export type MedicinalProductPackaged_BatchIdentifier = Message<"google.fhir.r4.core.MedicinalProductPackaged.BatchIdentifier"> & {
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
   * A number appearing on the outer packaging of a specific batch
   *
   * @generated from field: google.fhir.r4.core.Identifier outer_packaging = 4;
   */
  outerPackaging?: Identifier;

  /**
   * A number appearing on the immediate packaging (and not the outer
   * packaging)
   *
   * @generated from field: google.fhir.r4.core.Identifier immediate_packaging = 5;
   */
  immediatePackaging?: Identifier;
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProductPackaged.BatchIdentifier.
 * Use `create(MedicinalProductPackaged_BatchIdentifierSchema)` to create a new message.
 */
export const MedicinalProductPackaged_BatchIdentifierSchema: GenMessage<MedicinalProductPackaged_BatchIdentifier> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product_packaged, 0, 0);

/**
 * A packaging item, as a contained for medicine, possibly with other
 * packaging items within
 *
 * @generated from message google.fhir.r4.core.MedicinalProductPackaged.PackageItem
 */
export type MedicinalProductPackaged_PackageItem = Message<"google.fhir.r4.core.MedicinalProductPackaged.PackageItem"> & {
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
   * Including possibly Data Carrier Identifier
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 4;
   */
  identifier: Identifier[];

  /**
   * The physical type of the container of the medicine
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 5;
   */
  type?: CodeableConcept;

  /**
   * The quantity of this package in the medicinal product, at the current
   * level of packaging. The outermost is always 1
   *
   * @generated from field: google.fhir.r4.core.Quantity quantity = 6;
   */
  quantity?: Quantity;

  /**
   * Material type of the package item
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept material = 7;
   */
  material: CodeableConcept[];

  /**
   * A possible alternate material for the packaging
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept alternate_material = 8;
   */
  alternateMaterial: CodeableConcept[];

  /**
   * A device accompanying a medicinal product
   *
   * @generated from field: repeated google.fhir.r4.core.Reference device = 9;
   */
  device: Reference[];

  /**
   * The manufactured item as contained in the packaged medicinal product
   *
   * @generated from field: repeated google.fhir.r4.core.Reference manufactured_item = 10;
   */
  manufacturedItem: Reference[];

  /**
   * Allows containers within containers
   *
   * @generated from field: repeated google.fhir.r4.core.MedicinalProductPackaged.PackageItem package_item = 11;
   */
  packageItem: MedicinalProductPackaged_PackageItem[];

  /**
   * Dimensions, color etc.
   *
   * @generated from field: google.fhir.r4.core.ProdCharacteristic physical_characteristics = 12;
   */
  physicalCharacteristics?: ProdCharacteristic;

  /**
   * Other codeable characteristics
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept other_characteristics = 13;
   */
  otherCharacteristics: CodeableConcept[];

  /**
   * Shelf Life and storage information
   *
   * @generated from field: repeated google.fhir.r4.core.ProductShelfLife shelf_life_storage = 14;
   */
  shelfLifeStorage: ProductShelfLife[];

  /**
   * Manufacturer of this Package Item
   *
   * @generated from field: repeated google.fhir.r4.core.Reference manufacturer = 15;
   */
  manufacturer: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProductPackaged.PackageItem.
 * Use `create(MedicinalProductPackaged_PackageItemSchema)` to create a new message.
 */
export const MedicinalProductPackaged_PackageItemSchema: GenMessage<MedicinalProductPackaged_PackageItem> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product_packaged, 0, 1);

