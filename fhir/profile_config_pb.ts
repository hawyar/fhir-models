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

// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file proto/google/fhir/proto/profile_config.proto (package google.fhir.proto, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { FhirVersion } from "./annotations_pb";
import { file_proto_google_fhir_proto_annotations } from "./annotations_pb";
import type { BindingStrengthCode_Value, PublicationStatusCode_Value, SlicingRulesCode_Value } from "./r4/core/codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "./r4/core/codes_pb";
import type { ElementDefinition } from "./r4/core/datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "./r4/core/datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/profile_config.proto.
 */
export const file_proto_google_fhir_proto_profile_config: GenFile = /*@__PURE__*/
  fileDesc("Cixwcm90by9nb29nbGUvZmhpci9wcm90by9wcm9maWxlX2NvbmZpZy5wcm90bxIRZ29vZ2xlLmZoaXIucHJvdG8ixQEKDlByb3RvZ2VuQ29uZmlnEhUKDXByb3RvX3BhY2thZ2UYASABKAkSGgoSamF2YV9wcm90b19wYWNrYWdlGAIgASgJEhkKEW5vcm1hdGl2ZV9wYWNrYWdlGAMgASgJEhgKEHNvdXJjZV9kaXJlY3RvcnkYBCABKAkSGwoTbm9ybWF0aXZlX2RpcmVjdG9yeRgFIAEoCRIUCgxsaWNlbnNlX2RhdGUYBiABKAkSGAoQbGVnYWN5X3JldGFnZ2luZxgHIAEoCCKWBgoLUGFja2FnZUluZm8SNAoMZmhpcl92ZXJzaW9uGAEgASgOMh4uZ29vZ2xlLmZoaXIucHJvdG8uRmhpclZlcnNpb24SEAoIYmFzZV91cmwYAiABKAkSFQoNcHJvdG9fcGFja2FnZRgDIAEoCRIaChJqYXZhX3Byb3RvX3BhY2thZ2UYBCABKAkSIgoYbG9jYWxfY29udGFpbmVkX3Jlc291cmNlGAYgASgISAASJAoaY29udGFpbmVkX3Jlc291cmNlX3BhY2thZ2UYByABKAlIABIRCglwdWJsaXNoZXIYCCABKAkSEgoKdGVsY29tX3VybBgJIAEoCRI3CgdsaWNlbnNlGAogASgOMiYuZ29vZ2xlLmZoaXIucHJvdG8uUGFja2FnZUluZm8uTGljZW5zZRIUCgxsaWNlbnNlX2RhdGUYCyABKAkSXQobY29udGFpbmVkX3Jlc291cmNlX2JlaGF2aW9yGAwgASgOMjguZ29vZ2xlLmZoaXIucHJvdG8uUGFja2FnZUluZm8uQ29udGFpbmVkUmVzb3VyY2VCZWhhdmlvchJVChdmaWxlX3NwbGl0dGluZ19iZWhhdmlvchgNIAEoDjI0Lmdvb2dsZS5maGlyLnByb3RvLlBhY2thZ2VJbmZvLkZpbGVTcGxpdHRpbmdCZWhhdmlvchIPCgd2ZXJzaW9uGA4gASgJIh8KB0xpY2Vuc2USCAoETk9ORRAAEgoKBkFQQUNIRRABIk8KGUNvbnRhaW5lZFJlc291cmNlQmVoYXZpb3ISCwoHREVGQVVMVBAAEgcKA0FOWRABEhwKGFRZUEVEX0NPTlRBSU5FRF9SRVNPVVJDRRACIncKFUZpbGVTcGxpdHRpbmdCZWhhdmlvchIeChpERUZBVUxUX1NQTElUVElOR19CRUhBVklPUhAAEhAKDE5PX1NQTElUVElORxABEhcKE1NFUEFSQVRFX0VYVEVOU0lPTlMQAhITCg9TUExJVF9SRVNPVVJDRVMQA0IUChJjb250YWluZWRfcmVzb3VyY2VKBAgFEAYiNwoIUHJvZmlsZXMSKwoHcHJvZmlsZRgCIAMoCzIaLmdvb2dsZS5maGlyLnByb3RvLlByb2ZpbGUiigEKCkV4dGVuc2lvbnMSPAoQc2ltcGxlX2V4dGVuc2lvbhgCIAMoCzIiLmdvb2dsZS5maGlyLnByb3RvLlNpbXBsZUV4dGVuc2lvbhI+ChFjb21wbGV4X2V4dGVuc2lvbhgDIAMoCzIjLmdvb2dsZS5maGlyLnByb3RvLkNvbXBsZXhFeHRlbnNpb24ifwoNVGVybWlub2xvZ2llcxI4Cgtjb2RlX3N5c3RlbRgBIAMoCzIjLmdvb2dsZS5maGlyLnByb3RvLkNvZGVTeXN0ZW1Db25maWcSNAoJdmFsdWVfc2V0GAIgAygLMiEuZ29vZ2xlLmZoaXIucHJvdG8uVmFsdWVTZXRDb25maWci1AIKB1Byb2ZpbGUSNAoMZWxlbWVudF9kYXRhGAEgASgLMh4uZ29vZ2xlLmZoaXIucHJvdG8uRWxlbWVudERhdGESEAoIYmFzZV91cmwYAiABKAkSQgoSZWxlbWVudF9kZWZpbml0aW9uGAYgAygLMiYuZ29vZ2xlLmZoaXIucjQuY29yZS5FbGVtZW50RGVmaW5pdGlvbhI6Cg9leHRlbnNpb25fc2xpY2UYBCADKAsyIS5nb29nbGUuZmhpci5wcm90by5FeHRlbnNpb25TbGljZRJHChZjb2RlYWJsZV9jb25jZXB0X3NsaWNlGAUgAygLMicuZ29vZ2xlLmZoaXIucHJvdG8uQ29kZWFibGVDb25jZXB0U2xpY2USOAoLcmVzdHJpY3Rpb24YAyADKAsyIy5nb29nbGUuZmhpci5wcm90by5GaWVsZFJlc3RyaWN0aW9uIvkCChBGaWVsZFJlc3RyaWN0aW9uEhAKCGZpZWxkX2lkGAEgASgJEjwKEHNpemVfcmVzdHJpY3Rpb24YAiABKA4yIi5nb29nbGUuZmhpci5wcm90by5TaXplUmVzdHJpY3Rpb24SRgoVcmVmZXJlbmNlX3Jlc3RyaWN0aW9uGAMgASgLMicuZ29vZ2xlLmZoaXIucHJvdG8uUmVmZXJlbmNlUmVzdHJpY3Rpb24SSQoXY2hvaWNlX3R5cGVfcmVzdHJpY3Rpb24YBCABKAsyKC5nb29nbGUuZmhpci5wcm90by5DaG9pY2VUeXBlUmVzdHJpY3Rpb24SQwoUZmhpcl9wYXRoX2NvbnN0cmFpbnQYBSADKAsyJS5nb29nbGUuZmhpci5wcm90by5GaGlyUGF0aENvbnN0cmFpbnQSPQoRdmFsdWVfc2V0X2JpbmRpbmcYBiABKAsyIi5nb29nbGUuZmhpci5wcm90by5WYWx1ZVNldEJpbmRpbmciJwoUUmVmZXJlbmNlUmVzdHJpY3Rpb24SDwoHYWxsb3dlZBgBIAMoCSIoChVDaG9pY2VUeXBlUmVzdHJpY3Rpb24SDwoHYWxsb3dlZBgBIAMoCSKwAQoSRmhpclBhdGhDb25zdHJhaW50EkAKCHNldmVyaXR5GAEgASgOMi4uZ29vZ2xlLmZoaXIucHJvdG8uRmhpclBhdGhDb25zdHJhaW50LlNldmVyaXR5EhMKC2Rlc2NyaXB0aW9uGAIgASgJEhIKCmV4cHJlc3Npb24YAyABKAkiLwoIU2V2ZXJpdHkSCwoHREVGQVVMVBAAEgkKBUVSUk9SEAESCwoHV0FSTklORxACInsKDkV4dGVuc2lvblNsaWNlEhAKCGZpZWxkX2lkGAEgASgJEjQKDGVsZW1lbnRfZGF0YRgCIAEoCzIeLmdvb2dsZS5maGlyLnByb3RvLkVsZW1lbnREYXRhEgsKA3VybBgDIAEoCRIUCgxtdXN0X3N1cHBvcnQYBCABKAgiqwIKFENvZGVhYmxlQ29uY2VwdFNsaWNlEhAKCGZpZWxkX2lkGAEgASgJEkkKDGNvZGluZ19zbGljZRgCIAMoCzIzLmdvb2dsZS5maGlyLnByb3RvLkNvZGVhYmxlQ29uY2VwdFNsaWNlLkNvZGluZ1NsaWNlEjoKBXJ1bGVzGAQgASgOMisuZ29vZ2xlLmZoaXIucjQuY29yZS5TbGljaW5nUnVsZXNDb2RlLlZhbHVlGnoKC0NvZGluZ1NsaWNlEjQKDGVsZW1lbnRfZGF0YRgBIAEoCzIeLmdvb2dsZS5maGlyLnByb3RvLkVsZW1lbnREYXRhEjUKCWNvZGVfZGF0YRgCIAEoCzIiLmdvb2dsZS5maGlyLnByb3RvLlZhbHVlU2V0QmluZGluZyLmAQoQQ29tcGxleEV4dGVuc2lvbhI0CgxlbGVtZW50X2RhdGEYASABKAsyHi5nb29nbGUuZmhpci5wcm90by5FbGVtZW50RGF0YRImCh5jYW5faGF2ZV9hZGRpdGlvbmFsX2V4dGVuc2lvbnMYAiABKAgSOAoMc2ltcGxlX2ZpZWxkGAMgAygLMiIuZ29vZ2xlLmZoaXIucHJvdG8uU2ltcGxlRXh0ZW5zaW9uEjoKDWNvbXBsZXhfZmllbGQYBCADKAsyIy5nb29nbGUuZmhpci5wcm90by5Db21wbGV4RXh0ZW5zaW9uIqkBCg9TaW1wbGVFeHRlbnNpb24SNAoMZWxlbWVudF9kYXRhGAEgASgLMh4uZ29vZ2xlLmZoaXIucHJvdG8uRWxlbWVudERhdGESDAoEdHlwZRgCIAMoCRI1Cgljb2RlX3R5cGUYAyABKAsyIi5nb29nbGUuZmhpci5wcm90by5WYWx1ZVNldEJpbmRpbmcSGwoTY2FuX2hhdmVfZXh0ZW5zaW9ucxgEIAEoCCKkAQoLRWxlbWVudERhdGESDAoEbmFtZRgBIAEoCRI8ChBzaXplX3Jlc3RyaWN0aW9uGAIgASgOMiIuZ29vZ2xlLmZoaXIucHJvdG8uU2l6ZVJlc3RyaWN0aW9uEhMKC2Rlc2NyaXB0aW9uGAMgASgJEg0KBXNob3J0GAQgASgJEg8KB2NvbW1lbnQYBSABKAkSFAoMdXJsX292ZXJyaWRlGAYgASgJIpUBCg9WYWx1ZVNldEJpbmRpbmcSDgoGc3lzdGVtGAEgASgJEkgKEGJpbmRpbmdfc3RyZW5ndGgYAiABKA4yLi5nb29nbGUuZmhpci5yNC5jb3JlLkJpbmRpbmdTdHJlbmd0aENvZGUuVmFsdWUSEwoLZml4ZWRfdmFsdWUYAyABKAkSEwoLZGVzY3JpcHRpb24YBCABKAkinQIKEENvZGVTeXN0ZW1Db25maWcSDAoEbmFtZRgBIAEoCRJACgZzdGF0dXMYAiABKA4yMC5nb29nbGUuZmhpci5yNC5jb3JlLlB1YmxpY2F0aW9uU3RhdHVzQ29kZS5WYWx1ZRITCgtkZXNjcmlwdGlvbhgDIAEoCRIUCgx1cmxfb3ZlcnJpZGUYBCABKAkSPAoHY29uY2VwdBgFIAMoCzIrLmdvb2dsZS5maGlyLnByb3RvLkNvZGVTeXN0ZW1Db25maWcuQ29uY2VwdBpQCgdDb25jZXB0EgwKBGNvZGUYASABKAkSDwoHZGlzcGxheRgCIAEoCRISCgpkZWZpbml0aW9uGAMgASgJEhIKCmRlcHJlY2F0ZWQYBCABKAgi/gEKDlZhbHVlU2V0Q29uZmlnEgwKBG5hbWUYASABKAkSQAoGc3RhdHVzGAIgASgOMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5QdWJsaWNhdGlvblN0YXR1c0NvZGUuVmFsdWUSEwoLZGVzY3JpcHRpb24YAyABKAkSFAoMdXJsX292ZXJyaWRlGAQgASgJEjgKBnN5c3RlbRgFIAMoCzIoLmdvb2dsZS5maGlyLnByb3RvLlZhbHVlU2V0Q29uZmlnLlN5c3RlbRo3CgZTeXN0ZW0SCwoDdXJsGAEgASgJEg8KB2luY2x1ZGUYAiADKAkSDwoHZXhjbHVkZRgDIAMoCSpkCg9TaXplUmVzdHJpY3Rpb24SCQoFVU5TRVQQABIKCgZBQlNFTlQQARIMCghSRVFVSVJFRBACEgwKCE9QVElPTkFMEAMSEAoMQVRfTEVBU1RfT05FEAQSDAoIUkVQRUFURUQQBUIZChVjb20uZ29vZ2xlLmZoaXIucHJvdG9QAWIGcHJvdG8z", [file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Config containing all info needed to generate the core protos for a FHIR
 * version (e.g., R4, R5).
 * This should only contain info that is unique to proto generation (like proto
 * package) and therefore not contain information that can be found in the FHIR
 * definitions themselves.
 *
 * @generated from message google.fhir.proto.ProtogenConfig
 */
export type ProtogenConfig = Message<"google.fhir.proto.ProtogenConfig"> & {
  /**
   * Package for the generated protos for the resources.
   *
   * @generated from field: string proto_package = 1;
   */
  protoPackage: string;

  /**
   * Java package for the generated protos for the resources.
   *
   * @generated from field: string java_proto_package = 2;
   */
  javaProtoPackage: string;

  /**
   * The package to reference for normative protos.  This can be the same as
   * proto_package for single-version mode.
   *
   * @generated from field: string normative_package = 3;
   */
  normativePackage: string;

  /**
   * Directory to place generated package.  This is needed for intra-package
   * imports.
   *
   * @generated from field: string source_directory = 4;
   */
  sourceDirectory: string;

  /**
   * Directory to use for normative resources.  This can be the same as
   * source_directory for single-version mode.
   *
   * @generated from field: string normative_directory = 5;
   */
  normativeDirectory: string;

  /**
   * The copyright date to be included in the license text, which
   * may simply be a year.
   *
   * @generated from field: string license_date = 6;
   */
  licenseDate: string;

  /**
   * If true, will attempt to retag the newly generated protos to match tag
   * numbers of existing protos.
   *
   * @generated from field: bool legacy_retagging = 7;
   */
  legacyRetagging: boolean;
};

/**
 * Describes the message google.fhir.proto.ProtogenConfig.
 * Use `create(ProtogenConfigSchema)` to create a new message.
 */
export const ProtogenConfigSchema: GenMessage<ProtogenConfig> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 0);

/**
 * Metadata for generating FHIR packages
 *
 * @generated from message google.fhir.proto.PackageInfo
 */
export type PackageInfo = Message<"google.fhir.proto.PackageInfo"> & {
  /**
   * FHIR version for the package (e.g., STU3, R4, R5, etc).
   *
   * @generated from field: google.fhir.proto.FhirVersion fhir_version = 1;
   */
  fhirVersion: FhirVersion;

  /**
   * Base url to use for all profiles defined here.
   * e.g., g.co/fhir/profiles
   *
   * @generated from field: string base_url = 2;
   */
  baseUrl: string;

  /**
   * Package for the generated protos for the resources.
   *
   * @generated from field: string proto_package = 3;
   */
  protoPackage: string;

  /**
   * Java package for the generated protos for the resources.
   *
   * @generated from field: string java_proto_package = 4;
   */
  javaProtoPackage: string;

  /**
   * Defines whether to generate a local ContainedResource proto or reuse one.
   * If neither of these fields are set, use the core contained resource on
   * all generated files.
   *
   * @generated from oneof google.fhir.proto.PackageInfo.contained_resource
   */
  containedResource: {
    /**
     * Generates a local ContainedResource
     *
     * @generated from field: bool local_contained_resource = 6;
     */
    value: boolean;
    case: "localContainedResource";
  } | {
    /**
     * for the profiles being created.
     *
     * A fully-qualified
     *
     * @generated from field: string contained_resource_package = 7;
     */
    value: string;
    case: "containedResourcePackage";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: string publisher = 8;
   */
  publisher: string;

  /**
   * @generated from field: string telcom_url = 9;
   */
  telcomUrl: string;

  /**
   * @generated from field: google.fhir.proto.PackageInfo.License license = 10;
   */
  license: PackageInfo_License;

  /**
   * The copyright date to be included in the license text, which
   * may simply be a year. The generator will use the current year
   * if this is unset.
   *
   * @generated from field: string license_date = 11;
   */
  licenseDate: string;

  /**
   * If unset, defaults to TYPED_CONTAINED_RESOURCE for DSTU2 and STU3, and
   * ANY for later versions.
   *
   * @generated from field: google.fhir.proto.PackageInfo.ContainedResourceBehavior contained_resource_behavior = 12;
   */
  containedResourceBehavior: PackageInfo_ContainedResourceBehavior;

  /**
   * If unset, defaults to no splitting
   *
   * @generated from field: google.fhir.proto.PackageInfo.FileSplittingBehavior file_splitting_behavior = 13;
   */
  fileSplittingBehavior: PackageInfo_FileSplittingBehavior;

  /**
   * The package's version number.
   *
   * @generated from field: string version = 14;
   */
  version: string;
};

/**
 * Describes the message google.fhir.proto.PackageInfo.
 * Use `create(PackageInfoSchema)` to create a new message.
 */
export const PackageInfoSchema: GenMessage<PackageInfo> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 1);

/**
 * The license to include in the generated profile, if any.
 *
 * @generated from enum google.fhir.proto.PackageInfo.License
 */
export enum PackageInfo_License {
  /**
   * @generated from enum value: NONE = 0;
   */
  NONE = 0,

  /**
   * @generated from enum value: APACHE = 1;
   */
  APACHE = 1,
}

/**
 * Describes the enum google.fhir.proto.PackageInfo.License.
 */
export const PackageInfo_LicenseSchema: GenEnum<PackageInfo_License> = /*@__PURE__*/
  enumDesc(file_proto_google_fhir_proto_profile_config, 1, 0);

/**
 * @generated from enum google.fhir.proto.PackageInfo.ContainedResourceBehavior
 */
export enum PackageInfo_ContainedResourceBehavior {
  /**
   * See field below for default behavior.
   *
   * @generated from enum value: DEFAULT = 0;
   */
  DEFAULT = 0,

  /**
   * Uses protobuf.Any for contained resource fields.
   *
   * @generated from enum value: ANY = 1;
   */
  ANY = 1,

  /**
   * Use the corresponding resource protos
   *
   * @generated from enum value: TYPED_CONTAINED_RESOURCE = 2;
   */
  TYPED_CONTAINED_RESOURCE = 2,
}

/**
 * Describes the enum google.fhir.proto.PackageInfo.ContainedResourceBehavior.
 */
export const PackageInfo_ContainedResourceBehaviorSchema: GenEnum<PackageInfo_ContainedResourceBehavior> = /*@__PURE__*/
  enumDesc(file_proto_google_fhir_proto_profile_config, 1, 1);

/**
 * How the output messages should be divided into files.
 *
 * @generated from enum google.fhir.proto.PackageInfo.FileSplittingBehavior
 */
export enum PackageInfo_FileSplittingBehavior {
  /**
   * Default is NO_SPLITTING
   *
   * @generated from enum value: DEFAULT_SPLITTING_BEHAVIOR = 0;
   */
  DEFAULT_SPLITTING_BEHAVIOR = 0,

  /**
   * All messages will be output into a single file,
   *
   * @generated from enum value: NO_SPLITTING = 1;
   */
  NO_SPLITTING = 1,

  /**
   * regardless of type
   *
   * All extensions will be put into a single file,
   *
   * @generated from enum value: SEPARATE_EXTENSIONS = 2;
   */
  SEPARATE_EXTENSIONS = 2,

  /**
   * and all other types will be put into a second
   * file
   *
   * Like SEPARATE_EXTENSIONS, all extensions will
   *
   * @generated from enum value: SPLIT_RESOURCES = 3;
   */
  SPLIT_RESOURCES = 3,
}

/**
 * Describes the enum google.fhir.proto.PackageInfo.FileSplittingBehavior.
 */
export const PackageInfo_FileSplittingBehaviorSchema: GenEnum<PackageInfo_FileSplittingBehavior> = /*@__PURE__*/
  enumDesc(file_proto_google_fhir_proto_profile_config, 1, 2);

/**
 * Config for definition of Profiles that are part of an Implementation
 * Guide to be generated
 *
 * @generated from message google.fhir.proto.Profiles
 */
export type Profiles = Message<"google.fhir.proto.Profiles"> & {
  /**
   * @generated from field: repeated google.fhir.proto.Profile profile = 2;
   */
  profile: Profile[];
};

/**
 * Describes the message google.fhir.proto.Profiles.
 * Use `create(ProfilesSchema)` to create a new message.
 */
export const ProfilesSchema: GenMessage<Profiles> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 2);

/**
 * Config for definition of Extensions  that are part of an Implementation
 * Guide to be generated
 *
 * @generated from message google.fhir.proto.Extensions
 */
export type Extensions = Message<"google.fhir.proto.Extensions"> & {
  /**
   * @generated from field: repeated google.fhir.proto.SimpleExtension simple_extension = 2;
   */
  simpleExtension: SimpleExtension[];

  /**
   * @generated from field: repeated google.fhir.proto.ComplexExtension complex_extension = 3;
   */
  complexExtension: ComplexExtension[];
};

/**
 * Describes the message google.fhir.proto.Extensions.
 * Use `create(ExtensionsSchema)` to create a new message.
 */
export const ExtensionsSchema: GenMessage<Extensions> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 3);

/**
 * Config for definition of Terminologies (CodeSysems and ValueSets) that are
 * part of an Implementation Guide to be generated
 *
 * @generated from message google.fhir.proto.Terminologies
 */
export type Terminologies = Message<"google.fhir.proto.Terminologies"> & {
  /**
   * @generated from field: repeated google.fhir.proto.CodeSystemConfig code_system = 1;
   */
  codeSystem: CodeSystemConfig[];

  /**
   * @generated from field: repeated google.fhir.proto.ValueSetConfig value_set = 2;
   */
  valueSet: ValueSetConfig[];
};

/**
 * Describes the message google.fhir.proto.Terminologies.
 * Use `create(TerminologiesSchema)` to create a new message.
 */
export const TerminologiesSchema: GenMessage<Terminologies> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 4);

/**
 * Defines a profile for a specific FHIR resource.
 *
 * @generated from message google.fhir.proto.Profile
 */
export type Profile = Message<"google.fhir.proto.Profile"> & {
  /**
   * Description of the top-level element of the FHIR profile. For instance,
   * this would be "Patient" in a patient profile.
   *
   * @generated from field: google.fhir.proto.ElementData element_data = 1;
   */
  elementData?: ElementData;

  /**
   * Url of the Structure Definition being profiled
   * e.g., http://hl7.org/fhir/StructureDefinition/Patient
   *
   * @generated from field: string base_url = 2;
   */
  baseUrl: string;

  /**
   * Element definitions to merge into the base definitions.
   * Each ElementDefinition added here will be merged on top of the base
   * definition for the element with the same ID, allowing adding new
   * restrictions or documentation to the field. This cannot add any new fields,
   * and it is invalid to supply an ElementDefinition whose id does not
   * correspond to an id in the base definition.
   *
   * @generated from field: repeated google.fhir.r4.core.ElementDefinition element_definition = 6;
   */
  elementDefinition: ElementDefinition[];

  /**
   * Extensions to be inlined as fields
   *
   * @generated from field: repeated google.fhir.proto.ExtensionSlice extension_slice = 4;
   */
  extensionSlice: ExtensionSlice[];

  /**
   * CodeableConcept field to slice by Coding system uri.
   *
   * @generated from field: repeated google.fhir.proto.CodeableConceptSlice codeable_concept_slice = 5;
   */
  codeableConceptSlice: CodeableConceptSlice[];

  /**
   * Restrictions to existing fields (does not add new fields/slices)
   * DEPRECATED - use `element_definition` instead
   *
   * @generated from field: repeated google.fhir.proto.FieldRestriction restriction = 3;
   */
  restriction: FieldRestriction[];
};

/**
 * Describes the message google.fhir.proto.Profile.
 * Use `create(ProfileSchema)` to create a new message.
 */
export const ProfileSchema: GenMessage<Profile> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 5);

/**
 * A restriction on a single field.
 *
 * @generated from message google.fhir.proto.FieldRestriction
 */
export type FieldRestriction = Message<"google.fhir.proto.FieldRestriction"> & {
  /**
   * Id in the Structure Definition of the field to modify.
   * e.g., Patient.birthDate
   *
   * @generated from field: string field_id = 1;
   */
  fieldId: string;

  /**
   * Restriction on the size of the field.  Must be stricter than the
   * original - the new size must be a valid subset of the original.
   *
   * @generated from field: google.fhir.proto.SizeRestriction size_restriction = 2;
   */
  sizeRestriction: SizeRestriction;

  /**
   * For reference fields, restricts what resources the reference
   * can point to. Must be a subset of the original.
   *
   * @generated from field: google.fhir.proto.ReferenceRestriction reference_restriction = 3;
   */
  referenceRestriction?: ReferenceRestriction;

  /**
   * For choice fields, restricts what types the choice can have.
   * Must be a subset of the original.
   *
   * @generated from field: google.fhir.proto.ChoiceTypeRestriction choice_type_restriction = 4;
   */
  choiceTypeRestriction?: ChoiceTypeRestriction;

  /**
   * @generated from field: repeated google.fhir.proto.FhirPathConstraint fhir_path_constraint = 5;
   */
  fhirPathConstraint: FhirPathConstraint[];

  /**
   * For fields of type code, Coding, or CodeableConcept, binding to a ValueSet.
   * See: https://www.hl7.org/fhir/terminologies.html
   *
   * @generated from field: google.fhir.proto.ValueSetBinding value_set_binding = 6;
   */
  valueSetBinding?: ValueSetBinding;
};

/**
 * Describes the message google.fhir.proto.FieldRestriction.
 * Use `create(FieldRestrictionSchema)` to create a new message.
 */
export const FieldRestrictionSchema: GenMessage<FieldRestriction> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 6);

/**
 * For Reference types, additional restrictions to apply
 *
 * @generated from message google.fhir.proto.ReferenceRestriction
 */
export type ReferenceRestriction = Message<"google.fhir.proto.ReferenceRestriction"> & {
  /**
   * Allowed types to refer to.
   * Must use unprofiled FHIR resource type name,
   * e.g., Patient, Observation, Medication
   *
   * @generated from field: repeated string allowed = 1;
   */
  allowed: string[];
};

/**
 * Describes the message google.fhir.proto.ReferenceRestriction.
 * Use `create(ReferenceRestrictionSchema)` to create a new message.
 */
export const ReferenceRestrictionSchema: GenMessage<ReferenceRestriction> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 7);

/**
 * Which types are allowed for Choice types. These typically come from
 * the types at https://www.hl7.org/fhir/valueset-defined-types.html
 * but custom types ccan be used as well.
 *
 * @generated from message google.fhir.proto.ChoiceTypeRestriction
 */
export type ChoiceTypeRestriction = Message<"google.fhir.proto.ChoiceTypeRestriction"> & {
  /**
   * @generated from field: repeated string allowed = 1;
   */
  allowed: string[];
};

/**
 * Describes the message google.fhir.proto.ChoiceTypeRestriction.
 * Use `create(ChoiceTypeRestrictionSchema)` to create a new message.
 */
export const ChoiceTypeRestrictionSchema: GenMessage<ChoiceTypeRestriction> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 8);

/**
 * Structure used to create constraints as described in
 * https://www.hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.constraint
 *
 * @generated from message google.fhir.proto.FhirPathConstraint
 */
export type FhirPathConstraint = Message<"google.fhir.proto.FhirPathConstraint"> & {
  /**
   * @generated from field: google.fhir.proto.FhirPathConstraint.Severity severity = 1;
   */
  severity: FhirPathConstraint_Severity;

  /**
   * Human-readable description of the constraint
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * The FHIRPath expression defining the constraint
   *
   * @generated from field: string expression = 3;
   */
  expression: string;
};

/**
 * Describes the message google.fhir.proto.FhirPathConstraint.
 * Use `create(FhirPathConstraintSchema)` to create a new message.
 */
export const FhirPathConstraintSchema: GenMessage<FhirPathConstraint> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 9);

/**
 * Constraint severity.
 *
 * @generated from enum google.fhir.proto.FhirPathConstraint.Severity
 */
export enum FhirPathConstraint_Severity {
  /**
   * Generator defaults to error if unset
   *
   * @generated from enum value: DEFAULT = 0;
   */
  DEFAULT = 0,

  /**
   * @generated from enum value: ERROR = 1;
   */
  ERROR = 1,

  /**
   * @generated from enum value: WARNING = 2;
   */
  WARNING = 2,
}

/**
 * Describes the enum google.fhir.proto.FhirPathConstraint.Severity.
 */
export const FhirPathConstraint_SeveritySchema: GenEnum<FhirPathConstraint_Severity> = /*@__PURE__*/
  enumDesc(file_proto_google_fhir_proto_profile_config, 9, 0);

/**
 * Declares an extension to add to a profile. Modeled as a slice because
 * extensions are always sliced by URL, per the FHIR spec.
 *
 * @generated from message google.fhir.proto.ExtensionSlice
 */
export type ExtensionSlice = Message<"google.fhir.proto.ExtensionSlice"> & {
  /**
   * Id in the Structure Definition of the field to add the extension to.
   * e.g., Patient.birthDate
   * Optional - if empty, defaults to top-level element.
   *
   * @generated from field: string field_id = 1;
   */
  fieldId: string;

  /**
   * @generated from field: google.fhir.proto.ElementData element_data = 2;
   */
  elementData?: ElementData;

  /**
   * Must be an absolute url for the Structure Definition that defines this
   * extension.
   * e.g., http://hl7.org/fhir/StructureDefinition/patient-birthTime
   * or https://g.co/fhir/extensions/BinaryClassificationMetadata
   *
   * @generated from field: string url = 3;
   */
  url: string;

  /**
   * Whether to set the "mustSupport" bit on the resulting ElementDefinition.
   * See:
   * http://hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.mustSupport
   *
   * @generated from field: bool must_support = 4;
   */
  mustSupport: boolean;
};

/**
 * Describes the message google.fhir.proto.ExtensionSlice.
 * Use `create(ExtensionSliceSchema)` to create a new message.
 */
export const ExtensionSliceSchema: GenMessage<ExtensionSlice> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 10);

/**
 * Defines a FHIR slice on a codeable concept as described in
 * https://www.hl7.org/fhir/profiling.html#slicing
 * These are used in the protobuf representation of profiled resources
 * to create concrete fields for specific code systems.
 *
 * @generated from message google.fhir.proto.CodeableConceptSlice
 */
export type CodeableConceptSlice = Message<"google.fhir.proto.CodeableConceptSlice"> & {
  /**
   * Id in the Structure Definition of the CodeableConcept to slice.
   * e.g., Observation.code, or RiskAssessment.prediction.qualitativeRisk
   * Note that this should be of type CodeableConcept, NOT type Coding.
   *
   * @generated from field: string field_id = 1;
   */
  fieldId: string;

  /**
   * @generated from field: repeated google.fhir.proto.CodeableConceptSlice.CodingSlice coding_slice = 2;
   */
  codingSlice: CodeableConceptSlice_CodingSlice[];

  /**
   * Whether or not to allow Codings that do not fit into any of the above
   * slices.
   * Optional - defaults to OPEN
   *
   * @generated from field: google.fhir.r4.core.SlicingRulesCode.Value rules = 4;
   */
  rules: SlicingRulesCode_Value;
};

/**
 * Describes the message google.fhir.proto.CodeableConceptSlice.
 * Use `create(CodeableConceptSliceSchema)` to create a new message.
 */
export const CodeableConceptSliceSchema: GenMessage<CodeableConceptSlice> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 11);

/**
 * @generated from message google.fhir.proto.CodeableConceptSlice.CodingSlice
 */
export type CodeableConceptSlice_CodingSlice = Message<"google.fhir.proto.CodeableConceptSlice.CodingSlice"> & {
  /**
   * @generated from field: google.fhir.proto.ElementData element_data = 1;
   */
  elementData?: ElementData;

  /**
   * @generated from field: google.fhir.proto.ValueSetBinding code_data = 2;
   */
  codeData?: ValueSetBinding;
};

/**
 * Describes the message google.fhir.proto.CodeableConceptSlice.CodingSlice.
 * Use `create(CodeableConceptSlice_CodingSliceSchema)` to create a new message.
 */
export const CodeableConceptSlice_CodingSliceSchema: GenMessage<CodeableConceptSlice_CodingSlice> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 11, 0);

/**
 * Definition for a complex extension, i.e. one that contains one or more nested
 * simple or complex extension fields.
 *
 * @generated from message google.fhir.proto.ComplexExtension
 */
export type ComplexExtension = Message<"google.fhir.proto.ComplexExtension"> & {
  /**
   * @generated from field: google.fhir.proto.ElementData element_data = 1;
   */
  elementData?: ElementData;

  /**
   * @generated from field: bool can_have_additional_extensions = 2;
   */
  canHaveAdditionalExtensions: boolean;

  /**
   * @generated from field: repeated google.fhir.proto.SimpleExtension simple_field = 3;
   */
  simpleField: SimpleExtension[];

  /**
   * @generated from field: repeated google.fhir.proto.ComplexExtension complex_field = 4;
   */
  complexField: ComplexExtension[];
};

/**
 * Describes the message google.fhir.proto.ComplexExtension.
 * Use `create(ComplexExtensionSchema)` to create a new message.
 */
export const ComplexExtensionSchema: GenMessage<ComplexExtension> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 12);

/**
 * Definition for a simple extension, i.e. one that contains
 * only a primitive data type.
 * TODO(b/244184211): support references with target profiles.
 *
 * @generated from message google.fhir.proto.SimpleExtension
 */
export type SimpleExtension = Message<"google.fhir.proto.SimpleExtension"> & {
  /**
   * @generated from field: google.fhir.proto.ElementData element_data = 1;
   */
  elementData?: ElementData;

  /**
   * Must be one of the types listed in the Extension.value[x] element here:
   * http://hl7.org/fhir/extension.profile.json
   * If this field has size > 1 it will generate a choice-type value
   * For legacy reasons, if this is unset but `code_type` is set, this is
   * assumed to be of type `code`.
   *
   * @generated from field: repeated string type = 2;
   */
  type: string[];

  /**
   * For fields of type code, Coding, or CodeableConcept, binding to a ValueSet.
   * See: https://www.hl7.org/fhir/terminologies.html
   *
   * @generated from field: google.fhir.proto.ValueSetBinding code_type = 3;
   */
  codeType?: ValueSetBinding;

  /**
   * @generated from field: bool can_have_extensions = 4;
   */
  canHaveExtensions: boolean;
};

/**
 * Describes the message google.fhir.proto.SimpleExtension.
 * Use `create(SimpleExtensionSchema)` to create a new message.
 */
export const SimpleExtensionSchema: GenMessage<SimpleExtension> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 13);

/**
 * Description of a data element being profiled.
 *
 * @generated from message google.fhir.proto.ElementData
 */
export type ElementData = Message<"google.fhir.proto.ElementData"> & {
  /**
   * Name for the element.
   * For top-level elements:
   * * This will be the name of the generated message
   * * Must TitleCased and unique within all top-level elements in the package.
   * * The url will be this name appended to Extensions#base_url.
   * For subfields:
   * * This will be the name of the field
   * * Must jsonCased and unique within the containing message.
   * * If this represents a container field, the generated message will be
   *   this name in TitleCase.
   * * The url will be equal to the name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Size constraints for the element.
   *
   * @generated from field: google.fhir.proto.SizeRestriction size_restriction = 2;
   */
  sizeRestriction: SizeRestriction;

  /**
   * Human-readable description ofthe element.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Short description.
   * Optional - will re-use description if absent
   *
   * @generated from field: string short = 4;
   */
  short: string;

  /**
   * Free-form comment
   * Optional
   *
   * @generated from field: string comment = 5;
   */
  comment: string;

  /**
   * If set, provides an override for the structure definition URL.
   * Should ONLY be used on top-level elements.
   *
   * @generated from field: string url_override = 6;
   */
  urlOverride: string;
};

/**
 * Describes the message google.fhir.proto.ElementData.
 * Use `create(ElementDataSchema)` to create a new message.
 */
export const ElementDataSchema: GenMessage<ElementData> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 14);

/**
 * Describes ValueSet bindings for terminology fields.
 *
 * @generated from message google.fhir.proto.ValueSetBinding
 */
export type ValueSetBinding = Message<"google.fhir.proto.ValueSetBinding"> & {
  /**
   * Fixed ValueSet Url
   *
   * @generated from field: string system = 1;
   */
  system: string;

  /**
   * "Strength" of value set binding - i.e., whether to allow codes that
   * are not in that value set.
   * Optional - defaults to required.
   *
   * @generated from field: google.fhir.r4.core.BindingStrengthCode.Value binding_strength = 2;
   */
  bindingStrength: BindingStrengthCode_Value;

  /**
   * Optional - if set, this code will have a fixed value, and will not be
   * inlined as a field.
   *
   * @generated from field: string fixed_value = 3;
   */
  fixedValue: string;

  /**
   * Optional human-readable description of the binding.
   * See:
   * https://www.hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.binding.description
   *
   * @generated from field: string description = 4;
   */
  description: string;
};

/**
 * Describes the message google.fhir.proto.ValueSetBinding.
 * Use `create(ValueSetBindingSchema)` to create a new message.
 */
export const ValueSetBindingSchema: GenMessage<ValueSetBinding> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 15);

/**
 * A compact representation of a code system used by the
 * TerminologyGenerator to build the FHIR equivalent.
 * See https://www.hl7.org/fhir/codesystem.html for
 * the FHIR resource this will generate.
 *
 * @generated from message google.fhir.proto.CodeSystemConfig
 */
export type CodeSystemConfig = Message<"google.fhir.proto.CodeSystemConfig"> & {
  /**
   * Sets the FHIR CodeSystem.name field.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Sets the FHIR CodeSystem.status field.
   *
   * @generated from field: google.fhir.r4.core.PublicationStatusCode.Value status = 2;
   */
  status: PublicationStatusCode_Value;

  /**
   * Sets the FHIR CodeSystem.description field.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Overrides the URL for the generated code system. The generator
   * will use the PackageInfo.baseUrl/ValuesetConfig.name if this is unset.
   *
   * @generated from field: string url_override = 4;
   */
  urlOverride: string;

  /**
   * @generated from field: repeated google.fhir.proto.CodeSystemConfig.Concept concept = 5;
   */
  concept: CodeSystemConfig_Concept[];
};

/**
 * Describes the message google.fhir.proto.CodeSystemConfig.
 * Use `create(CodeSystemConfigSchema)` to create a new message.
 */
export const CodeSystemConfigSchema: GenMessage<CodeSystemConfig> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 16);

/**
 * Defines the CodeSystem.concept structure to be generated.
 *
 * @generated from message google.fhir.proto.CodeSystemConfig.Concept
 */
export type CodeSystemConfig_Concept = Message<"google.fhir.proto.CodeSystemConfig.Concept"> & {
  /**
   * Sets the FHIR Codesystem.concept.code field.
   *
   * @generated from field: string code = 1;
   */
  code: string;

  /**
   * Sets the FHIR Codesystem.concept.display field.
   *
   * @generated from field: string display = 2;
   */
  display: string;

  /**
   * Sets the FHIR Codesystem.concept.definition field.
   *
   * @generated from field: string definition = 3;
   */
  definition: string;

  /**
   * Flag indicating the code value is deprecated.
   *
   * @generated from field: bool deprecated = 4;
   */
  deprecated: boolean;
};

/**
 * Describes the message google.fhir.proto.CodeSystemConfig.Concept.
 * Use `create(CodeSystemConfig_ConceptSchema)` to create a new message.
 */
export const CodeSystemConfig_ConceptSchema: GenMessage<CodeSystemConfig_Concept> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 16, 0);

/**
 * A compact representation of a value set used by the
 * TerminologyGenerator to build the FHIR equivalent.
 * See https://www.hl7.org/fhir/valueset.html for the FHIR
 * resource this will generate.
 *
 * @generated from message google.fhir.proto.ValueSetConfig
 */
export type ValueSetConfig = Message<"google.fhir.proto.ValueSetConfig"> & {
  /**
   * Sets the FHIR ValueSet.name field.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Sets the FHIR ValueSet.status field with the publication status.
   *
   * @generated from field: google.fhir.r4.core.PublicationStatusCode.Value status = 2;
   */
  status: PublicationStatusCode_Value;

  /**
   * Sets the FHIR ValueSet.description field.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Overrides the URL for the generated valueset. The generator
   * will use the PackageInfo.baseUrl/ValuesetConfig.name if this is unset.
   *
   * @generated from field: string url_override = 4;
   */
  urlOverride: string;

  /**
   * @generated from field: repeated google.fhir.proto.ValueSetConfig.System system = 5;
   */
  system: ValueSetConfig_System[];
};

/**
 * Describes the message google.fhir.proto.ValueSetConfig.
 * Use `create(ValueSetConfigSchema)` to create a new message.
 */
export const ValueSetConfigSchema: GenMessage<ValueSetConfig> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 17);

/**
 * A code system and the subset of its values to include in the value set.
 *
 * @generated from message google.fhir.proto.ValueSetConfig.System
 */
export type ValueSetConfig_System = Message<"google.fhir.proto.ValueSetConfig.System"> & {
  /**
   * The code system URL.
   *
   * @generated from field: string url = 1;
   */
  url: string;

  /**
   * Codes from this system to include.
   *
   * @generated from field: repeated string include = 2;
   */
  include: string[];

  /**
   * Codes from this system to exclude.
   *
   * @generated from field: repeated string exclude = 3;
   */
  exclude: string[];
};

/**
 * Describes the message google.fhir.proto.ValueSetConfig.System.
 * Use `create(ValueSetConfig_SystemSchema)` to create a new message.
 */
export const ValueSetConfig_SystemSchema: GenMessage<ValueSetConfig_System> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_profile_config, 17, 0);

/**
 * @generated from enum google.fhir.proto.SizeRestriction
 */
export enum SizeRestriction {
  /**
   * Does not set a size restriction on the field.
   *
   * @generated from enum value: UNSET = 0;
   */
  UNSET = 0,

  /**
   * Field should have zero values, i.e. omitted from the record.
   *
   * @generated from enum value: ABSENT = 1;
   */
  ABSENT = 1,

  /**
   * Field must have exactly one value.
   *
   * @generated from enum value: REQUIRED = 2;
   */
  REQUIRED = 2,

  /**
   * Field may have zero or one value.
   *
   * @generated from enum value: OPTIONAL = 3;
   */
  OPTIONAL = 3,

  /**
   * Repeated field that should have at least one value.
   *
   * @generated from enum value: AT_LEAST_ONE = 4;
   */
  AT_LEAST_ONE = 4,

  /**
   * Repeated field that may have zero or more values.
   *
   * @generated from enum value: REPEATED = 5;
   */
  REPEATED = 5,
}

/**
 * Describes the enum google.fhir.proto.SizeRestriction.
 */
export const SizeRestrictionSchema: GenEnum<SizeRestriction> = /*@__PURE__*/
  enumDesc(file_proto_google_fhir_proto_profile_config, 0);

