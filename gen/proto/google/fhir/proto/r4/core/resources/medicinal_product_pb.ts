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
// @generated from file proto/google/fhir/proto/r4/core/resources/medicinal_product.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { Code, CodeableConcept, Coding, DateTime, Extension, Id, Identifier, MarketingStatus, Meta, Narrative, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/medicinal_product.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_medicinal_product: GenFile = /*@__PURE__*/
  fileDesc("CkFwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWRpY2luYWxfcHJvZHVjdC5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLrIQoQTWVkaWNpbmFsUHJvZHVjdBIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISMgoEdHlwZRgLIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EisKBmRvbWFpbhgMIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kaW5nEk8KIWNvbWJpbmVkX3BoYXJtYWNldXRpY2FsX2Rvc2VfZm9ybRgNIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkQKFmxlZ2FsX3N0YXR1c19vZl9zdXBwbHkYDiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJNCh9hZGRpdGlvbmFsX21vbml0b3JpbmdfaW5kaWNhdG9yGA8gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNQoQc3BlY2lhbF9tZWFzdXJlcxgQIAMoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEkYKGHBhZWRpYXRyaWNfdXNlX2luZGljYXRvchgRIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkQKFnByb2R1Y3RfY2xhc3NpZmljYXRpb24YEiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI+ChBtYXJrZXRpbmdfc3RhdHVzGBMgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZXRpbmdTdGF0dXMSZAoWcGhhcm1hY2V1dGljYWxfcHJvZHVjdBgUIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQiTy//zCBh5NZWRpY2luYWxQcm9kdWN0UGhhcm1hY2V1dGljYWwSYgoacGFja2FnZWRfbWVkaWNpbmFsX3Byb2R1Y3QYFSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIe8v/8wgYYTWVkaWNpbmFsUHJvZHVjdFBhY2thZ2VkElIKEWF0dGFjaGVkX2RvY3VtZW50GBYgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCF/L//MIGEURvY3VtZW50UmVmZXJlbmNlEkwKC21hc3Rlcl9maWxlGBcgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCF/L//MIGEURvY3VtZW50UmVmZXJlbmNlElkKB2NvbnRhY3QYGCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIo8v/8wgYMT3JnYW5pemF0aW9u8v/8wgYQUHJhY3RpdGlvbmVyUm9sZRJLCg5jbGluaWNhbF90cmlhbBgZIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhPy//zCBg1SZXNlYXJjaFN0dWR5EkAKBG5hbWUYGiADKAsyKi5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGljaW5hbFByb2R1Y3QuTmFtZUIG8NCH6wQBEjgKD2Nyb3NzX3JlZmVyZW5jZRgbIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchJuCiBtYW51ZmFjdHVyaW5nX2J1c2luZXNzX29wZXJhdGlvbhgcIAMoCzJELmdvb2dsZS5maGlyLnI0LmNvcmUuTWVkaWNpbmFsUHJvZHVjdC5NYW51ZmFjdHVyaW5nQnVzaW5lc3NPcGVyYXRpb24SVQoTc3BlY2lhbF9kZXNpZ25hdGlvbhgdIAMoCzI4Lmdvb2dsZS5maGlyLnI0LmNvcmUuTWVkaWNpbmFsUHJvZHVjdC5TcGVjaWFsRGVzaWduYXRpb24a6QcKBE5hbWUSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI5Cgxwcm9kdWN0X25hbWUYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0IG8NCH6wQBEkYKCW5hbWVfcGFydBgFIAMoCzIzLmdvb2dsZS5maGlyLnI0LmNvcmUuTWVkaWNpbmFsUHJvZHVjdC5OYW1lLk5hbWVQYXJ0ElQKEGNvdW50cnlfbGFuZ3VhZ2UYBiADKAsyOi5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGljaW5hbFByb2R1Y3QuTmFtZS5Db3VudHJ5TGFuZ3VhZ2UaiAIKCE5hbWVQYXJ0EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMQoEcGFydBgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nQgbw0IfrBAESMQoEdHlwZRgFIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kaW5nQgbw0IfrBAEa5AIKD0NvdW50cnlMYW5ndWFnZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEj0KB2NvdW50cnkYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBEjoKDGp1cmlzZGljdGlvbhgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ej4KCGxhbmd1YWdlGAYgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARrQBAoeTWFudWZhY3R1cmluZ0J1c2luZXNzT3BlcmF0aW9uEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SPAoOb3BlcmF0aW9uX3R5cGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJHCh5hdXRob3Jpc2F0aW9uX3JlZmVyZW5jZV9udW1iZXIYBSABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISNQoOZWZmZWN0aXZlX2RhdGUYBiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEkcKGWNvbmZpZGVudGlhbGl0eV9pbmRpY2F0b3IYByABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJICgxtYW51ZmFjdHVyZXIYCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEkUKCXJlZ3VsYXRvchgJIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24agAYKElNwZWNpYWxEZXNpZ25hdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYBCADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISMgoEdHlwZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjoKDGludGVuZGVkX3VzZRgGIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0ElgKCmluZGljYXRpb24YByABKAsyRC5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGljaW5hbFByb2R1Y3QuU3BlY2lhbERlc2lnbmF0aW9uLkluZGljYXRpb25YEjQKBnN0YXR1cxgIIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EisKBGRhdGUYCSABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEjUKB3NwZWNpZXMYCiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBq4AQoLSW5kaWNhdGlvblgSQAoQY29kZWFibGVfY29uY2VwdBgBIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0SAASVQoJcmVmZXJlbmNlGAIgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCIPL//MIGGk1lZGljaW5hbFByb2R1Y3RJbmRpY2F0aW9uSAA6BqCDg+gGAUIICgZjaG9pY2U6RMCf47YFA7L+5JcGOGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9NZWRpY2luYWxQcm9kdWN0SgQIBxAIQoEBChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWl5naXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL21lZGljaW5hbF9wcm9kdWN0X2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for MedicinalProduct.
 * Detailed definition of a medicinal product, typically for uses other than
 * direct patient care (e.g. regulatory use). See
 * http://hl7.org/fhir/StructureDefinition/MedicinalProduct
 *
 * @generated from message google.fhir.r4.core.MedicinalProduct
 */
export type MedicinalProduct = Message<"google.fhir.r4.core.MedicinalProduct"> & {
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
   * Business identifier for this product. Could be an MPID
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Regulatory type, e.g. Investigational or Authorized
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 11;
   */
  type?: CodeableConcept;

  /**
   * If this medicine applies to human or veterinary uses
   *
   * @generated from field: google.fhir.r4.core.Coding domain = 12;
   */
  domain?: Coding;

  /**
   * The dose form for a single part product, or combined form of a multiple
   * part product
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept combined_pharmaceutical_dose_form = 13;
   */
  combinedPharmaceuticalDoseForm?: CodeableConcept;

  /**
   * The legal status of supply of the medicinal product as classified by the
   * regulator
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept legal_status_of_supply = 14;
   */
  legalStatusOfSupply?: CodeableConcept;

  /**
   * Whether the Medicinal Product is subject to additional monitoring for
   * regulatory reasons
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept additional_monitoring_indicator = 15;
   */
  additionalMonitoringIndicator?: CodeableConcept;

  /**
   * Whether the Medicinal Product is subject to special measures for regulatory
   * reasons
   *
   * @generated from field: repeated google.fhir.r4.core.String special_measures = 16;
   */
  specialMeasures: String[];

  /**
   * If authorised for use in children
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept paediatric_use_indicator = 17;
   */
  paediatricUseIndicator?: CodeableConcept;

  /**
   * Allows the product to be classified by various systems
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept product_classification = 18;
   */
  productClassification: CodeableConcept[];

  /**
   * Marketing status of the medicinal product, in contrast to marketing
   * authorizaton
   *
   * @generated from field: repeated google.fhir.r4.core.MarketingStatus marketing_status = 19;
   */
  marketingStatus: MarketingStatus[];

  /**
   * Pharmaceutical aspects of product
   *
   * @generated from field: repeated google.fhir.r4.core.Reference pharmaceutical_product = 20;
   */
  pharmaceuticalProduct: Reference[];

  /**
   * Package representation for the product
   *
   * @generated from field: repeated google.fhir.r4.core.Reference packaged_medicinal_product = 21;
   */
  packagedMedicinalProduct: Reference[];

  /**
   * Supporting documentation, typically for regulatory submission
   *
   * @generated from field: repeated google.fhir.r4.core.Reference attached_document = 22;
   */
  attachedDocument: Reference[];

  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System
   * Master File)
   *
   * @generated from field: repeated google.fhir.r4.core.Reference master_file = 23;
   */
  masterFile: Reference[];

  /**
   * A product specific contact, person (in a role), or an organization
   *
   * @generated from field: repeated google.fhir.r4.core.Reference contact = 24;
   */
  contact: Reference[];

  /**
   * Clinical trials or studies that this product is involved in
   *
   * @generated from field: repeated google.fhir.r4.core.Reference clinical_trial = 25;
   */
  clinicalTrial: Reference[];

  /**
   * @generated from field: repeated google.fhir.r4.core.MedicinalProduct.Name name = 26;
   */
  name: MedicinalProduct_Name[];

  /**
   * Reference to another product, e.g. for linking authorised to
   * investigational product
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier cross_reference = 27;
   */
  crossReference: Identifier[];

  /**
   * @generated from field: repeated google.fhir.r4.core.MedicinalProduct.ManufacturingBusinessOperation manufacturing_business_operation = 28;
   */
  manufacturingBusinessOperation: MedicinalProduct_ManufacturingBusinessOperation[];

  /**
   * @generated from field: repeated google.fhir.r4.core.MedicinalProduct.SpecialDesignation special_designation = 29;
   */
  specialDesignation: MedicinalProduct_SpecialDesignation[];
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProduct.
 * Use `create(MedicinalProductSchema)` to create a new message.
 */
export const MedicinalProductSchema: GenMessage<MedicinalProduct> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product, 0);

/**
 * The product's name, including full name and possibly coded parts
 *
 * @generated from message google.fhir.r4.core.MedicinalProduct.Name
 */
export type MedicinalProduct_Name = Message<"google.fhir.r4.core.MedicinalProduct.Name"> & {
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
   * The full product name
   *
   * @generated from field: google.fhir.r4.core.String product_name = 4;
   */
  productName?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.MedicinalProduct.Name.NamePart name_part = 5;
   */
  namePart: MedicinalProduct_Name_NamePart[];

  /**
   * @generated from field: repeated google.fhir.r4.core.MedicinalProduct.Name.CountryLanguage country_language = 6;
   */
  countryLanguage: MedicinalProduct_Name_CountryLanguage[];
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProduct.Name.
 * Use `create(MedicinalProduct_NameSchema)` to create a new message.
 */
export const MedicinalProduct_NameSchema: GenMessage<MedicinalProduct_Name> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product, 0, 0);

/**
 * Coding words or phrases of the name
 *
 * @generated from message google.fhir.r4.core.MedicinalProduct.Name.NamePart
 */
export type MedicinalProduct_Name_NamePart = Message<"google.fhir.r4.core.MedicinalProduct.Name.NamePart"> & {
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
   * A fragment of a product name
   *
   * @generated from field: google.fhir.r4.core.String part = 4;
   */
  part?: String;

  /**
   * Idenifying type for this part of the name (e.g. strength part)
   *
   * @generated from field: google.fhir.r4.core.Coding type = 5;
   */
  type?: Coding;
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProduct.Name.NamePart.
 * Use `create(MedicinalProduct_Name_NamePartSchema)` to create a new message.
 */
export const MedicinalProduct_Name_NamePartSchema: GenMessage<MedicinalProduct_Name_NamePart> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product, 0, 0, 0);

/**
 * Country where the name applies
 *
 * @generated from message google.fhir.r4.core.MedicinalProduct.Name.CountryLanguage
 */
export type MedicinalProduct_Name_CountryLanguage = Message<"google.fhir.r4.core.MedicinalProduct.Name.CountryLanguage"> & {
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
   * Country code for where this name applies
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept country = 4;
   */
  country?: CodeableConcept;

  /**
   * Jurisdiction code for where this name applies
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept jurisdiction = 5;
   */
  jurisdiction?: CodeableConcept;

  /**
   * Language code for this name
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept language = 6;
   */
  language?: CodeableConcept;
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProduct.Name.CountryLanguage.
 * Use `create(MedicinalProduct_Name_CountryLanguageSchema)` to create a new message.
 */
export const MedicinalProduct_Name_CountryLanguageSchema: GenMessage<MedicinalProduct_Name_CountryLanguage> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product, 0, 0, 1);

/**
 * An operation applied to the product, for manufacturing or adminsitrative
 * purpose
 *
 * @generated from message google.fhir.r4.core.MedicinalProduct.ManufacturingBusinessOperation
 */
export type MedicinalProduct_ManufacturingBusinessOperation = Message<"google.fhir.r4.core.MedicinalProduct.ManufacturingBusinessOperation"> & {
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
   * The type of manufacturing operation
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept operation_type = 4;
   */
  operationType?: CodeableConcept;

  /**
   * Regulatory authorization reference number
   *
   * @generated from field: google.fhir.r4.core.Identifier authorisation_reference_number = 5;
   */
  authorisationReferenceNumber?: Identifier;

  /**
   * Regulatory authorization date
   *
   * @generated from field: google.fhir.r4.core.DateTime effective_date = 6;
   */
  effectiveDate?: DateTime;

  /**
   * To indicate if this proces is commercially confidential
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept confidentiality_indicator = 7;
   */
  confidentialityIndicator?: CodeableConcept;

  /**
   * The manufacturer or establishment associated with the process
   *
   * @generated from field: repeated google.fhir.r4.core.Reference manufacturer = 8;
   */
  manufacturer: Reference[];

  /**
   * A regulator which oversees the operation
   *
   * @generated from field: google.fhir.r4.core.Reference regulator = 9;
   */
  regulator?: Reference;
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProduct.ManufacturingBusinessOperation.
 * Use `create(MedicinalProduct_ManufacturingBusinessOperationSchema)` to create a new message.
 */
export const MedicinalProduct_ManufacturingBusinessOperationSchema: GenMessage<MedicinalProduct_ManufacturingBusinessOperation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product, 0, 1);

/**
 * Indicates if the medicinal product has an orphan designation for the
 * treatment of a rare disease
 *
 * @generated from message google.fhir.r4.core.MedicinalProduct.SpecialDesignation
 */
export type MedicinalProduct_SpecialDesignation = Message<"google.fhir.r4.core.MedicinalProduct.SpecialDesignation"> & {
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
   * Identifier for the designation, or procedure number
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 4;
   */
  identifier: Identifier[];

  /**
   * The type of special designation, e.g. orphan drug, minor use
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 5;
   */
  type?: CodeableConcept;

  /**
   * The intended use of the product, e.g. prevention, treatment
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept intended_use = 6;
   */
  intendedUse?: CodeableConcept;

  /**
   * @generated from field: google.fhir.r4.core.MedicinalProduct.SpecialDesignation.IndicationX indication = 7;
   */
  indication?: MedicinalProduct_SpecialDesignation_IndicationX;

  /**
   * For example granted, pending, expired or withdrawn
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept status = 8;
   */
  status?: CodeableConcept;

  /**
   * Date when the designation was granted
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 9;
   */
  date?: DateTime;

  /**
   * Animal species for which this applies
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept species = 10;
   */
  species?: CodeableConcept;
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProduct.SpecialDesignation.
 * Use `create(MedicinalProduct_SpecialDesignationSchema)` to create a new message.
 */
export const MedicinalProduct_SpecialDesignationSchema: GenMessage<MedicinalProduct_SpecialDesignation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product, 0, 2);

/**
 * Condition for which the medicinal use applies
 *
 * @generated from message google.fhir.r4.core.MedicinalProduct.SpecialDesignation.IndicationX
 */
export type MedicinalProduct_SpecialDesignation_IndicationX = Message<"google.fhir.r4.core.MedicinalProduct.SpecialDesignation.IndicationX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.MedicinalProduct.SpecialDesignation.IndicationX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.CodeableConcept codeable_concept = 1;
     */
    value: CodeableConcept;
    case: "codeableConcept";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Reference reference = 2;
     */
    value: Reference;
    case: "reference";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.MedicinalProduct.SpecialDesignation.IndicationX.
 * Use `create(MedicinalProduct_SpecialDesignation_IndicationXSchema)` to create a new message.
 */
export const MedicinalProduct_SpecialDesignation_IndicationXSchema: GenMessage<MedicinalProduct_SpecialDesignation_IndicationX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_medicinal_product, 0, 2, 0);

