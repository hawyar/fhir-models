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
// @generated from file proto/google/fhir/proto/r4/core/resources/media.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { EventStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Attachment, Code, CodeableConcept, DateTime, Decimal, Extension, Id, Identifier, Instant, Meta, Narrative, Period, PositiveInt, Reference, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/media.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_media: GenFile = /*@__PURE__*/
  fileDesc("CjVwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWRpYS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKTEgoFTWVkaWESIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyElQKCGJhc2VkX29uGAsgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCIvL//MIGDlNlcnZpY2VSZXF1ZXN08v/8wgYIQ2FyZVBsYW4SPwoHcGFydF9vZhgMIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghSZXNvdXJjZRI9CgZzdGF0dXMYDSABKAsyJS5nb29nbGUuZmhpci5yNC5jb3JlLk1lZGlhLlN0YXR1c0NvZGVCBvDQh+sEARIyCgR0eXBlGA4gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNgoIbW9kYWxpdHkYDyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIyCgR2aWV3GBAgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSmQEKB3N1YmplY3QYESABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJo8v/8wgYHUGF0aWVudPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgVHcm91cPL//MIGBkRldmljZfL//MIGCFNwZWNpbWVu8v/8wgYITG9jYXRpb24SQgoJZW5jb3VudGVyGBIgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCD/L//MIGCUVuY291bnRlchI0CgdjcmVhdGVkGBMgASgLMiMuZ29vZ2xlLmZoaXIucjQuY29yZS5NZWRpYS5DcmVhdGVkWBIsCgZpc3N1ZWQYFCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkluc3RhbnQSpgEKCG9wZXJhdG9yGBUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCdPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb27y//zCBghDYXJlVGVhbfL//MIGB1BhdGllbnTy//zCBgZEZXZpY2Xy//zCBg1SZWxhdGVkUGVyc29uEjkKC3JlYXNvbl9jb2RlGBYgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNwoJYm9keV9zaXRlGBcgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSMAoLZGV2aWNlX25hbWUYGCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJaCgZkZXZpY2UYGSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIq8v/8wgYGRGV2aWNl8v/8wgYMRGV2aWNlTWV0cmlj8v/8wgYGRGV2aWNlEjAKBmhlaWdodBgaIAEoCzIgLmdvb2dsZS5maGlyLnI0LmNvcmUuUG9zaXRpdmVJbnQSLwoFd2lkdGgYGyABKAsyIC5nb29nbGUuZmhpci5yNC5jb3JlLlBvc2l0aXZlSW50EjAKBmZyYW1lcxgcIAEoCzIgLmdvb2dsZS5maGlyLnI0LmNvcmUuUG9zaXRpdmVJbnQSLgoIZHVyYXRpb24YHSABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkRlY2ltYWwSOAoHY29udGVudBgeIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQXR0YWNobWVudEIG8NCH6wQBEi0KBG5vdGUYHyADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkFubm90YXRpb24ajAIKClN0YXR1c0NvZGUSOQoFdmFsdWUYASABKA4yKi5nb29nbGUuZmhpci5yNC5jb3JlLkV2ZW50U3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmeK+YOyBSlodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2V2ZW50LXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGn8KCENyZWF0ZWRYEjIKCWRhdGVfdGltZRgBIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWVIABItCgZwZXJpb2QYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZEgAOgagg4PoBgFCCAoGY2hvaWNlOjnAn+O2BQOy/uSXBi1odHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vTWVkaWFKBAgHEAhCdQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpSZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9tZWRpYV9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Media.
 * A photo, video, or audio recording acquired or used in healthcare. The actual
 * content may be inline or provided by direct reference. See
 * http://hl7.org/fhir/StructureDefinition/Media
 *
 * @generated from message google.fhir.r4.core.Media
 */
export type Media = Message<"google.fhir.r4.core.Media"> & {
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
   * Identifier(s) for the image
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Procedure that caused this media to be created
   *
   * @generated from field: repeated google.fhir.r4.core.Reference based_on = 11;
   */
  basedOn: Reference[];

  /**
   * Part of referenced event
   *
   * @generated from field: repeated google.fhir.r4.core.Reference part_of = 12;
   */
  partOf: Reference[];

  /**
   * @generated from field: google.fhir.r4.core.Media.StatusCode status = 13;
   */
  status?: Media_StatusCode;

  /**
   * Classification of media as image, video, or audio
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 14;
   */
  type?: CodeableConcept;

  /**
   * The type of acquisition equipment/process
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept modality = 15;
   */
  modality?: CodeableConcept;

  /**
   * Imaging view, e.g. Lateral or Antero-posterior
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept view = 16;
   */
  view?: CodeableConcept;

  /**
   * Who/What this Media is a record of
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 17;
   */
  subject?: Reference;

  /**
   * Encounter associated with media
   *
   * @generated from field: google.fhir.r4.core.Reference encounter = 18;
   */
  encounter?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.Media.CreatedX created = 19;
   */
  created?: Media_CreatedX;

  /**
   * Date/Time this version was made available
   *
   * @generated from field: google.fhir.r4.core.Instant issued = 20;
   */
  issued?: Instant;

  /**
   * The person who generated the image
   *
   * @generated from field: google.fhir.r4.core.Reference operator = 21;
   */
  operator?: Reference;

  /**
   * Why was event performed?
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept reason_code = 22;
   */
  reasonCode: CodeableConcept[];

  /**
   * Observed body part
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept body_site = 23;
   */
  bodySite?: CodeableConcept;

  /**
   * Name of the device/manufacturer
   *
   * @generated from field: google.fhir.r4.core.String device_name = 24;
   */
  deviceName?: String;

  /**
   * Observing Device
   *
   * @generated from field: google.fhir.r4.core.Reference device = 25;
   */
  device?: Reference;

  /**
   * Height of the image in pixels (photo/video)
   *
   * @generated from field: google.fhir.r4.core.PositiveInt height = 26;
   */
  height?: PositiveInt;

  /**
   * Width of the image in pixels (photo/video)
   *
   * @generated from field: google.fhir.r4.core.PositiveInt width = 27;
   */
  width?: PositiveInt;

  /**
   * Number of frames if > 1 (photo)
   *
   * @generated from field: google.fhir.r4.core.PositiveInt frames = 28;
   */
  frames?: PositiveInt;

  /**
   * Length in seconds (audio / video)
   *
   * @generated from field: google.fhir.r4.core.Decimal duration = 29;
   */
  duration?: Decimal;

  /**
   * Actual Media - reference or data
   *
   * @generated from field: google.fhir.r4.core.Attachment content = 30;
   */
  content?: Attachment;

  /**
   * Comments made about the media
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 31;
   */
  note: Annotation[];
};

/**
 * Describes the message google.fhir.r4.core.Media.
 * Use `create(MediaSchema)` to create a new message.
 */
export const MediaSchema: GenMessage<Media> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_media, 0);

/**
 * preparation | in-progress | not-done | on-hold | stopped | completed |
 * entered-in-error | unknown
 *
 * @generated from message google.fhir.r4.core.Media.StatusCode
 */
export type Media_StatusCode = Message<"google.fhir.r4.core.Media.StatusCode"> & {
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
 * Describes the message google.fhir.r4.core.Media.StatusCode.
 * Use `create(Media_StatusCodeSchema)` to create a new message.
 */
export const Media_StatusCodeSchema: GenMessage<Media_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_media, 0, 0);

/**
 * When Media was collected
 *
 * @generated from message google.fhir.r4.core.Media.CreatedX
 */
export type Media_CreatedX = Message<"google.fhir.r4.core.Media.CreatedX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Media.CreatedX.choice
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
 * Describes the message google.fhir.r4.core.Media.CreatedX.
 * Use `create(Media_CreatedXSchema)` to create a new message.
 */
export const Media_CreatedXSchema: GenMessage<Media_CreatedX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_media, 0, 1);

