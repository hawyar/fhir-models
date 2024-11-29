//    Copyright 2018 Google Inc.
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

// This file defines extensions to FieldOptions and MessageOptions to enable
// adding FHIR-specific metadata to the proto implementation of the FHIR spec.

// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file proto/google/fhir/proto/annotations.proto (package google.fhir.proto, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, extDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { EnumOptions, EnumValueOptions, FieldOptions, FileOptions, MessageOptions, OneofOptions } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_descriptor } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/annotations.proto.
 */
export const file_proto_google_fhir_proto_annotations: GenFile = /*@__PURE__*/
  fileDesc("Cilwcm90by9nb29nbGUvZmhpci9wcm90by9hbm5vdGF0aW9ucy5wcm90bxIRZ29vZ2xlLmZoaXIucHJvdG8iaQoPU2VhcmNoUGFyYW1ldGVyEgwKBG5hbWUYASABKAkSNAoEdHlwZRgCIAEoDjImLmdvb2dsZS5maGlyLnByb3RvLlNlYXJjaFBhcmFtZXRlclR5cGUSEgoKZXhwcmVzc2lvbhgDIAEoCSpVCgtGaGlyVmVyc2lvbhIYChRGSElSX1ZFUlNJT05fVU5LTk9XThAAEgkKBURTVFUyEAESCAoEU1RVMxACEgYKAlI0EAQSBwoDUjRCEC0SBgoCUjUQBSqFAQocU3RydWN0dXJlRGVmaW5pdGlvbktpbmRWYWx1ZRIQCgxLSU5EX1VOS05PV04QABIXChNLSU5EX1BSSU1JVElWRV9UWVBFEAESFQoRS0lORF9DT01QTEVYX1RZUEUQAhIRCg1LSU5EX1JFU09VUkNFEAMSEAoMS0lORF9MT0dJQ0FMEAQqNQoLUmVxdWlyZW1lbnQSEAoMTk9UX1JFUVVJUkVEEAASFAoQUkVRVUlSRURfQllfRkhJUhABKqcBChNTZWFyY2hQYXJhbWV0ZXJUeXBlEiEKHUlOVkFMSURfU0VBUkNIX1BBUkFNRVRFUl9UWVBFEAASCgoGTlVNQkVSEAESCAoEREFURRACEgoKBlNUUklORxADEgkKBVRPS0VOEAQSDQoJUkVGRVJFTkNFEAUSDQoJQ09NUE9TSVRFEAYSDAoIUVVBTlRJVFkQBxIHCgNVUkkQCBILCgdTUEVDSUFMEAk6TgoRZmhpcl92YWx1ZXNldF91cmwSHy5nb29nbGUucHJvdG9idWYuTWVzc2FnZU9wdGlvbnMYkb+gViABKAlSD2ZoaXJWYWx1ZXNldFVybDpSChNmaGlyX3JlZmVyZW5jZV90eXBlEh8uZ29vZ2xlLnByb3RvYnVmLk1lc3NhZ2VPcHRpb25zGJHkwlcgAygJUhFmaGlyUmVmZXJlbmNlVHlwZTqPAQoZc3RydWN0dXJlX2RlZmluaXRpb25fa2luZBIfLmdvb2dsZS5wcm90b2J1Zi5NZXNzYWdlT3B0aW9ucxj4s+xWIAEoDjIvLmdvb2dsZS5maGlyLnByb3RvLlN0cnVjdHVyZURlZmluaXRpb25LaW5kVmFsdWVSF3N0cnVjdHVyZURlZmluaXRpb25LaW5kOkMKC3ZhbHVlX3JlZ2V4Eh8uZ29vZ2xlLnByb3RvYnVmLk1lc3NhZ2VPcHRpb25zGKKvxGEgASgJUgp2YWx1ZVJlZ2V4OmUKHWZoaXJfc3RydWN0dXJlX2RlZmluaXRpb25fdXJsEh8uZ29vZ2xlLnByb3RvYnVmLk1lc3NhZ2VPcHRpb25zGObP/GIgASgJUhpmaGlyU3RydWN0dXJlRGVmaW5pdGlvblVybDpQChJhbmFseXRpY19wcm90b19mb3ISHy5nb29nbGUucHJvdG9idWYuTWVzc2FnZU9wdGlvbnMYlPbxeSABKAlSEGFuYWx5dGljUHJvdG9Gb3I6TgoRZmhpcl9wcm9maWxlX2Jhc2USHy5nb29nbGUucHJvdG9idWYuTWVzc2FnZU9wdGlvbnMY0+axYiADKAlSD2ZoaXJQcm9maWxlQmFzZTpMChBpc19hYnN0cmFjdF90eXBlEh8uZ29vZ2xlLnByb3RvYnVmLk1lc3NhZ2VPcHRpb25zGM7d6GwgASgIUg5pc0Fic3RyYWN0VHlwZTpICg5pc19jaG9pY2VfdHlwZRIfLmdvb2dsZS5wcm90b2J1Zi5NZXNzYWdlT3B0aW9ucxi0sIBtIAEoCFIMaXNDaG9pY2VUeXBlOk4KEWZoaXJfZml4ZWRfc3lzdGVtEh8uZ29vZ2xlLnByb3RvYnVmLk1lc3NhZ2VPcHRpb25zGJP28XkgASgJUg9maGlyRml4ZWRTeXN0ZW06ZAocZmhpcl9wYXRoX21lc3NhZ2VfY29uc3RyYWludBIfLmdvb2dsZS5wcm90b2J1Zi5NZXNzYWdlT3B0aW9ucxjjsIKEASADKAlSGWZoaXJQYXRoTWVzc2FnZUNvbnN0cmFpbnQ6cwokZmhpcl9wYXRoX21lc3NhZ2Vfd2FybmluZ19jb25zdHJhaW50Eh8uZ29vZ2xlLnByb3RvYnVmLk1lc3NhZ2VPcHRpb25zGPPlxbQBIAMoCVIgZmhpclBhdGhNZXNzYWdlV2FybmluZ0NvbnN0cmFpbnQ6VQoUaXNfY29tcGxleF9leHRlbnNpb24SHy5nb29nbGUucHJvdG9idWYuTWVzc2FnZU9wdGlvbnMY5efkoQEgASgIUhJpc0NvbXBsZXhFeHRlbnNpb246VAoSZmhpcl9leHRlbnNpb25fdXJsEh8uZ29vZ2xlLnByb3RvYnVmLk1lc3NhZ2VPcHRpb25zGMWZtlQgASgJQgIYAVIQZmhpckV4dGVuc2lvblVybDpyChBzZWFyY2hfcGFyYW1ldGVyEh8uZ29vZ2xlLnByb3RvYnVmLk1lc3NhZ2VPcHRpb25zGNbe/poBIAMoCzIiLmdvb2dsZS5maGlyLnByb3RvLlNlYXJjaFBhcmFtZXRlclIPc2VhcmNoUGFyYW1ldGVyOlAKFGZoaXJfY29kZV9zeXN0ZW1fdXJsEhwuZ29vZ2xlLnByb3RvYnVmLkVudW1PcHRpb25zGJGS6X8gASgJUhFmaGlyQ29kZVN5c3RlbVVybDpMChFlbnVtX3ZhbHVlc2V0X3VybBIcLmdvb2dsZS5wcm90b2J1Zi5FbnVtT3B0aW9ucxjZpIOEASABKAlSD2VudW1WYWx1ZXNldFVybDpSChJmaGlyX29yaWdpbmFsX2NvZGUSIS5nb29nbGUucHJvdG9idWYuRW51bVZhbHVlT3B0aW9ucxjnsqdWIAEoCVIQZmhpck9yaWdpbmFsQ29kZTpTChJzb3VyY2VfY29kZV9zeXN0ZW0SIS5nb29nbGUucHJvdG9idWYuRW51bVZhbHVlT3B0aW9ucxj5u5uDASABKAlSEHNvdXJjZUNvZGVTeXN0ZW06TgoPZGVwcmVjYXRlZF9jb2RlEiEuZ29vZ2xlLnByb3RvYnVmLkVudW1WYWx1ZU9wdGlvbnMYx8WDsQEgASgIUg5kZXByZWNhdGVkQ29kZTp3ChZ2YWxpZGF0aW9uX3JlcXVpcmVtZW50Eh0uZ29vZ2xlLnByb3RvYnVmLkZpZWxkT3B0aW9ucxiO+rBNIAEoDjIeLmdvb2dsZS5maGlyLnByb3RvLlJlcXVpcmVtZW50UhV2YWxpZGF0aW9uUmVxdWlyZW1lbnQ6RAoNZmhpcl9zbGljZV9ieRIdLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE9wdGlvbnMY1M2CZSABKAlSC2ZoaXJTbGljZUJ5OkQKDWZoaXJfc2xpY2Vfb2YSHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGPzrgWUgASgJUgtmaGlyU2xpY2VPZjpKChBmaGlyX3NsaWNlX3ZhbHVlEh0uZ29vZ2xlLnByb3RvYnVmLkZpZWxkT3B0aW9ucxjbz4JlIAEoCVIOZmhpclNsaWNlVmFsdWU6XQoaZmhpcl9pbmxpbmVkX2V4dGVuc2lvbl91cmwSHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGMX/sWIgASgJUhdmaGlySW5saW5lZEV4dGVuc2lvblVybDpdChpmaGlyX2lubGluZWRfY29kaW5nX3N5c3RlbRIdLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE9wdGlvbnMY/8yCZSABKAlSF2ZoaXJJbmxpbmVkQ29kaW5nU3lzdGVtOlkKGGZoaXJfaW5saW5lZF9jb2RpbmdfY29kZRIdLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE9wdGlvbnMYxPeSZSABKAlSFWZoaXJJbmxpbmVkQ29kaW5nQ29kZTpSChRmaGlyX3BhdGhfY29uc3RyYWludBIdLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE9wdGlvbnMY7ofIdCADKAlSEmZoaXJQYXRoQ29uc3RyYWludDpiChxmaGlyX3BhdGhfd2FybmluZ19jb25zdHJhaW50Eh0uZ29vZ2xlLnByb3RvYnVmLkZpZWxkT3B0aW9ucxiex7y0ASADKAlSGWZoaXJQYXRoV2FybmluZ0NvbnN0cmFpbnQ6UgoUdmFsaWRfcmVmZXJlbmNlX3R5cGUSHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGP7Pr2ggAygJUhJ2YWxpZFJlZmVyZW5jZVR5cGU6UgoUcmVmZXJlbmNlZF9maGlyX3R5cGUSHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGK7QlnIgASgJUhJyZWZlcmVuY2VkRmhpclR5cGU6VQoWZmhpcl9vbmVvZl9pc19vcHRpb25hbBIdLmdvb2dsZS5wcm90b2J1Zi5PbmVvZk9wdGlvbnMY5q2iZiABKAhSE2ZoaXJPbmVvZklzT3B0aW9uYWw6YgoMZmhpcl92ZXJzaW9uEhwuZ29vZ2xlLnByb3RvYnVmLkZpbGVPcHRpb25zGOOI1nYgASgOMh4uZ29vZ2xlLmZoaXIucHJvdG8uRmhpclZlcnNpb25SC2ZoaXJWZXJzaW9uQmwKFWNvbS5nb29nbGUuZmhpci5wcm90b0ILQW5ub3RhdGlvbnNaRmdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vYW5ub3RhdGlvbnNfZ29fcHJvdG9iBnByb3RvMw", [file_google_protobuf_descriptor]);

/**
 * @generated from message google.fhir.proto.SearchParameter
 */
export type SearchParameter = Message<"google.fhir.proto.SearchParameter"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: google.fhir.proto.SearchParameterType type = 2;
   */
  type: SearchParameterType;

  /**
   * @generated from field: string expression = 3;
   */
  expression: string;
};

/**
 * Describes the message google.fhir.proto.SearchParameter.
 * Use `create(SearchParameterSchema)` to create a new message.
 */
export const SearchParameterSchema: GenMessage<SearchParameter> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_annotations, 0);

/**
 * @generated from enum google.fhir.proto.FhirVersion
 */
export enum FhirVersion {
  /**
   * @generated from enum value: FHIR_VERSION_UNKNOWN = 0;
   */
  FHIR_VERSION_UNKNOWN = 0,

  /**
   * @generated from enum value: DSTU2 = 1;
   */
  DSTU2 = 1,

  /**
   * @generated from enum value: STU3 = 2;
   */
  STU3 = 2,

  /**
   * @generated from enum value: R4 = 4;
   */
  R4 = 4,

  /**
   * @generated from enum value: R4B = 45;
   */
  R4B = 45,

  /**
   * @generated from enum value: R5 = 5;
   */
  R5 = 5,
}

/**
 * Describes the enum google.fhir.proto.FhirVersion.
 */
export const FhirVersionSchema: GenEnum<FhirVersion> = /*@__PURE__*/
  enumDesc(file_proto_google_fhir_proto_annotations, 0);

/**
 * TODO(b/244184211): Unify with StructureDefinitionKindCode
 *
 * @generated from enum google.fhir.proto.StructureDefinitionKindValue
 */
export enum StructureDefinitionKindValue {
  /**
   * @generated from enum value: KIND_UNKNOWN = 0;
   */
  KIND_UNKNOWN = 0,

  /**
   * @generated from enum value: KIND_PRIMITIVE_TYPE = 1;
   */
  KIND_PRIMITIVE_TYPE = 1,

  /**
   * @generated from enum value: KIND_COMPLEX_TYPE = 2;
   */
  KIND_COMPLEX_TYPE = 2,

  /**
   * @generated from enum value: KIND_RESOURCE = 3;
   */
  KIND_RESOURCE = 3,

  /**
   * @generated from enum value: KIND_LOGICAL = 4;
   */
  KIND_LOGICAL = 4,
}

/**
 * Describes the enum google.fhir.proto.StructureDefinitionKindValue.
 */
export const StructureDefinitionKindValueSchema: GenEnum<StructureDefinitionKindValue> = /*@__PURE__*/
  enumDesc(file_proto_google_fhir_proto_annotations, 1);

/**
 * To annotate cardinality constraints.
 *
 * @generated from enum google.fhir.proto.Requirement
 */
export enum Requirement {
  /**
   * @generated from enum value: NOT_REQUIRED = 0;
   */
  NOT_REQUIRED = 0,

  /**
   * @generated from enum value: REQUIRED_BY_FHIR = 1;
   */
  REQUIRED_BY_FHIR = 1,
}

/**
 * Describes the enum google.fhir.proto.Requirement.
 */
export const RequirementSchema: GenEnum<Requirement> = /*@__PURE__*/
  enumDesc(file_proto_google_fhir_proto_annotations, 2);

/**
 * @generated from enum google.fhir.proto.SearchParameterType
 */
export enum SearchParameterType {
  /**
   * @generated from enum value: INVALID_SEARCH_PARAMETER_TYPE = 0;
   */
  INVALID_SEARCH_PARAMETER_TYPE = 0,

  /**
   * @generated from enum value: NUMBER = 1;
   */
  NUMBER = 1,

  /**
   * @generated from enum value: DATE = 2;
   */
  DATE = 2,

  /**
   * @generated from enum value: STRING = 3;
   */
  STRING = 3,

  /**
   * @generated from enum value: TOKEN = 4;
   */
  TOKEN = 4,

  /**
   * @generated from enum value: REFERENCE = 5;
   */
  REFERENCE = 5,

  /**
   * @generated from enum value: COMPOSITE = 6;
   */
  COMPOSITE = 6,

  /**
   * @generated from enum value: QUANTITY = 7;
   */
  QUANTITY = 7,

  /**
   * @generated from enum value: URI = 8;
   */
  URI = 8,

  /**
   * @generated from enum value: SPECIAL = 9;
   */
  SPECIAL = 9,
}

/**
 * Describes the enum google.fhir.proto.SearchParameterType.
 */
export const SearchParameterTypeSchema: GenEnum<SearchParameterType> = /*@__PURE__*/
  enumDesc(file_proto_google_fhir_proto_annotations, 3);

/**
 * If this message is a Code constrained to a specific valueset, this is the
 * valueset identifier.
 *
 * @generated from extension: string fhir_valueset_url = 180887441;
 */
export const fhir_valueset_url: GenExtension<MessageOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 0);

/**
 * If this message is a Reference, the reference is constrained to these
 * resource types.
 *
 * @generated from extension: repeated string fhir_reference_type = 183546385;
 */
export const fhir_reference_type: GenExtension<MessageOptions, string[]> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 1);

/**
 * What type of fhir structure does this message represent?
 *
 * @generated from extension: google.fhir.proto.StructureDefinitionKindValue structure_definition_kind = 182131192;
 */
export const structure_definition_kind: GenExtension<MessageOptions, StructureDefinitionKindValue> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 2);

/**
 * For primitive types, values must match this regex if present.
 *
 * @generated from extension: string value_regex = 204543906;
 */
export const value_regex: GenExtension<MessageOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 3);

/**
 * Url for the structure definition this message was built from.
 *
 * @generated from extension: string fhir_structure_definition_url = 207562726;
 */
export const fhir_structure_definition_url: GenExtension<MessageOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 4);

/**
 * Url for the structure definition this analytics message was built from.
 *
 * @generated from extension: string analytic_proto_for = 255621908;
 */
export const analytic_proto_for: GenExtension<MessageOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 5);

/**
 * A list of structure definitions of elements that this element is a
 * profile of.
 * In the case of a profile of a profile, this will have the Structure
 * definition of all elements in this profile's inheritance chain.
 *
 * @generated from extension: repeated string fhir_profile_base = 206336851;
 */
export const fhir_profile_base: GenExtension<MessageOptions, string[]> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 6);

/**
 * This message refers to an abstract type in FHIR
 *
 * @generated from extension: bool is_abstract_type = 228208334;
 */
export const is_abstract_type: GenExtension<MessageOptions, boolean> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 7);

/**
 * Is this message a wrapper around a choice type?
 *
 * @generated from extension: bool is_choice_type = 228595764;
 */
export const is_choice_type: GenExtension<MessageOptions, boolean> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 8);

/**
 * @generated from extension: string fhir_fixed_system = 255621907;
 */
export const fhir_fixed_system: GenExtension<MessageOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 9);

/**
 * FHIRPath-based constraints that apply to the message in question.
 * These constraints are propagated from the constraint.expression
 * field on the FHIR ElementDefinition and may be used for data validation.
 *
 * @generated from extension: repeated string fhir_path_message_constraint = 276863075;
 */
export const fhir_path_message_constraint: GenExtension<MessageOptions, string[]> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 10);

/**
 * @generated from extension: repeated string fhir_path_message_warning_constraint = 378630899;
 */
export const fhir_path_message_warning_constraint: GenExtension<MessageOptions, string[]> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 11);

/**
 * Used to differentiate complex vs simple extensions in the case where it is
 * ambiguous.  Specifically, any extension with only a single fhir datatype
 * field will be assumed to be a simple extension UNLESS this annotation is
 * present.
 * Note that this option is NOT set on messages where it can be determined
 * they are complex extensions via inspecting the structure alone (e.g., an
 * extension with more than one data field).
 *
 * @generated from extension: bool is_complex_extension = 339293157;
 */
export const is_complex_extension: GenExtension<MessageOptions, boolean> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 12);

/**
 * DEPRECATED: use fhir_profile_base to identify extension, and
 * fhir_structure_definition_url to get the extension url.
 *
 * @generated from extension: string fhir_extension_url = 177048773 [deprecated = true];
 * @deprecated
 */
export const fhir_extension_url: GenExtension<MessageOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 13);

/**
 * A list of search parameters defined on the Resource.
 *
 * @generated from extension: repeated google.fhir.proto.SearchParameter search_parameter = 325037910;
 */
export const search_parameter: GenExtension<MessageOptions, SearchParameter[]> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 14);

/**
 * If this message CodeSystem enum, this is the url for the CodeSystem
 *
 * @generated from extension: string fhir_code_system_url = 268060945;
 */
export const fhir_code_system_url: GenExtension<EnumOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 15);

/**
 * If this message ValueSet enum, this is the url for the CodeSystem
 *
 * @generated from extension: string enum_valueset_url = 276877913;
 */
export const enum_valueset_url: GenExtension<EnumOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 16);

/**
 * If we had to rename this code to make a valid enum identifier, what was
 * the original name?
 *
 * @generated from extension: string fhir_original_code = 181000551;
 */
export const fhir_original_code: GenExtension<EnumValueOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 17);

/**
 * If the code system cannot be determined by the enum it is a part of,
 * (e.g., a valueset with multiple codesystems), this lists the source system.
 *
 * @generated from extension: string source_code_system = 275176953;
 */
export const source_code_system: GenExtension<EnumValueOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 18);

/**
 * Flag indicating that the code value has been deprecated.
 *
 * @generated from extension: bool deprecated_code = 371253959;
 */
export const deprecated_code: GenExtension<EnumValueOptions, boolean> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 19);

/**
 * Is this field required?
 *
 * @generated from extension: google.fhir.proto.Requirement validation_requirement = 162282766;
 */
export const validation_requirement: GenExtension<FieldOptions, Requirement> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 20);

/**
 * If this field has slices on it, this indicates the subfield to slice it by
 * (slicing.discriminator.path in the structure definition).
 *
 * @generated from extension: string fhir_slice_by = 211855060;
 */
export const fhir_slice_by: GenExtension<FieldOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 21);

/**
 * This field is a slice of another field with this name.
 *
 * @generated from extension: string fhir_slice_of = 211842556;
 */
export const fhir_slice_of: GenExtension<FieldOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 22);

/**
 * If this field is a slice, this is the value of the field indicated by the
 * fhir_slice_by_field on the main field that should be placed in this slice.
 *
 * @generated from extension: string fhir_slice_value = 211855323;
 */
export const fhir_slice_value: GenExtension<FieldOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 23);

/**
 * Indicates the url for an extension slice.
 * This is a special case of the fhir_slice_value annotation that implies:
 * * fhir_slice_by = "url"  on the extension field
 * * fhir_slice_of = "extension" on this field
 * This has the additional behavior of inlining simple extensions (i.e.,
 * extensions with a value, rather than sub-extensions) as the value
 * itself.
 *
 * @generated from extension: string fhir_inlined_extension_url = 206340037;
 */
export const fhir_inlined_extension_url: GenExtension<FieldOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 24);

/**
 * Indicates the system for a coding slice within a codeable concept.
 * This is a special case of the fhir_slice_value annotation that implies:
 * * fhir_slice_by = "code"  on the coding field
 * * fhir_slice_of = "coding" on this field
 * This has the additional behavior of inlining the code directly, instead
 * of a coding with fixed system.
 *
 * @generated from extension: string fhir_inlined_coding_system = 211854975;
 */
export const fhir_inlined_coding_system: GenExtension<FieldOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 25);

/**
 * Indicates the code for a coding slice within a codeable concept.
 * This should only be used on fields that have fhir_inlined_coding_system
 * set.  In addition to the implications of fhir_inlined_coding_system,
 * this also sets a fixed code.
 *
 * @generated from extension: string fhir_inlined_coding_code = 212122564;
 */
export const fhir_inlined_coding_code: GenExtension<FieldOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 26);

/**
 * FHIRPath-based constraints that apply to the field in question.
 * These constraints are propagated from the constraint.expression
 * field on the FHIR ElementDefinition and may be used for data validation.
 *
 * @generated from extension: repeated string fhir_path_constraint = 244450286;
 */
export const fhir_path_constraint: GenExtension<FieldOptions, string[]> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 27);

/**
 * @generated from extension: repeated string fhir_path_warning_constraint = 378479518;
 */
export const fhir_path_warning_constraint: GenExtension<FieldOptions, string[]> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 28);

/**
 * Indicates which resource types can be valid references.
 *
 * @generated from extension: repeated string valid_reference_type = 218884094;
 */
export const valid_reference_type: GenExtension<FieldOptions, string[]> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 29);

/**
 * Indicates the base FHIR resource type a ReferenceId field points to.
 *
 * @generated from extension: string referenced_fhir_type = 239446062;
 */
export const referenced_fhir_type: GenExtension<FieldOptions, string> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 30);

/**
 * Whether or not this oneof is optional
 * If absent, oneofs are assumed to be REQUIRED if their containing message is
 * set. The most common case of oneofs is choice types, where the requirements
 * should be applied to the containing message.
 *
 * @generated from extension: bool fhir_oneof_is_optional = 214472422;
 */
export const fhir_oneof_is_optional: GenExtension<OneofOptions, boolean> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 31);

/**
 * What version of FHIR the protos in this file use (e.g., STU3, R4)
 *
 * @generated from extension: google.fhir.proto.FhirVersion fhir_version = 248874083;
 */
export const fhir_version: GenExtension<FileOptions, FhirVersion> = /*@__PURE__*/
  extDesc(file_proto_google_fhir_proto_annotations, 32);
