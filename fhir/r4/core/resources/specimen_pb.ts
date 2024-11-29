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
// @generated from file proto/google/fhir/proto/r4/core/resources/specimen.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { SpecimenStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Code, CodeableConcept, DateTime, Duration, Extension, Id, Identifier, Meta, Narrative, Period, Reference, SimpleQuantity, String, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/specimen.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_specimen: GenFile = /*@__PURE__*/
  fileDesc("Cjhwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zcGVjaW1lbi5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLRHAoIU3BlY2ltZW4SIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEj0KFGFjY2Vzc2lvbl9pZGVudGlmaWVyGAsgASgLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEjgKBnN0YXR1cxgMIAEoCzIoLmdvb2dsZS5maGlyLnI0LmNvcmUuU3BlY2ltZW4uU3RhdHVzQ29kZRIyCgR0eXBlGA0gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQScgoHc3ViamVjdBgOIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQkHy//zCBgdQYXRpZW508v/8wgYFR3JvdXDy//zCBgZEZXZpY2Xy//zCBglTdWJzdGFuY2Xy//zCBghMb2NhdGlvbhI0Cg1yZWNlaXZlZF90aW1lGA8gASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRI+CgZwYXJlbnQYECADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIU3BlY2ltZW4SRQoHcmVxdWVzdBgRIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhTy//zCBg5TZXJ2aWNlUmVxdWVzdBI8Cgpjb2xsZWN0aW9uGBIgASgLMiguZ29vZ2xlLmZoaXIucjQuY29yZS5TcGVjaW1lbi5Db2xsZWN0aW9uEjwKCnByb2Nlc3NpbmcYEyADKAsyKC5nb29nbGUuZmhpci5yNC5jb3JlLlNwZWNpbWVuLlByb2Nlc3NpbmcSOgoJY29udGFpbmVyGBQgAygLMicuZ29vZ2xlLmZoaXIucjQuY29yZS5TcGVjaW1lbi5Db250YWluZXISNwoJY29uZGl0aW9uGBUgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLQoEbm90ZRgWIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuQW5ub3RhdGlvbhqSAgoKU3RhdHVzQ29kZRI8CgV2YWx1ZRgBIAEoDjItLmdvb2dsZS5maGlyLnI0LmNvcmUuU3BlY2ltZW5TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aor5g7IFLGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvc3BlY2ltZW4tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUajwcKCkNvbGxlY3Rpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJbCgljb2xsZWN0b3IYBCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIo8v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZRJGCgljb2xsZWN0ZWQYBSABKAsyMy5nb29nbGUuZmhpci5yNC5jb3JlLlNwZWNpbWVuLkNvbGxlY3Rpb24uQ29sbGVjdGVkWBIvCghkdXJhdGlvbhgGIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRHVyYXRpb24SNQoIcXVhbnRpdHkYByABKAsyIy5nb29nbGUuZmhpci5yNC5jb3JlLlNpbXBsZVF1YW50aXR5EjQKBm1ldGhvZBgIIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjcKCWJvZHlfc2l0ZRgJIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ek8KDmZhc3Rpbmdfc3RhdHVzGAogASgLMjcuZ29vZ2xlLmZoaXIucjQuY29yZS5TcGVjaW1lbi5Db2xsZWN0aW9uLkZhc3RpbmdTdGF0dXNYGoEBCgpDb2xsZWN0ZWRYEjIKCWRhdGVfdGltZRgBIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWVIABItCgZwZXJpb2QYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZEgAOgagg4PoBgFCCAoGY2hvaWNlGpcBCg5GYXN0aW5nU3RhdHVzWBJAChBjb2RlYWJsZV9jb25jZXB0GAEgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRIABIxCghkdXJhdGlvbhgCIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRHVyYXRpb25IADoGoIOD6AYBQggKBmNob2ljZRqOBAoKUHJvY2Vzc2luZxInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjAKC2Rlc2NyaXB0aW9uGAQgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSNwoJcHJvY2VkdXJlGAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSQQoIYWRkaXRpdmUYBiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJU3Vic3RhbmNlEjwKBHRpbWUYByABKAsyLi5nb29nbGUuZmhpci5yNC5jb3JlLlNwZWNpbWVuLlByb2Nlc3NpbmcuVGltZVgafAoFVGltZVgSMgoJZGF0ZV90aW1lGAEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZUgAEi0KBnBlcmlvZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kSAA6BqCDg+gGAUIICgZjaG9pY2UaogUKCUNvbnRhaW5lchInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYBCADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISMAoLZGVzY3JpcHRpb24YBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIyCgR0eXBlGAYgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNQoIY2FwYWNpdHkYByABKAsyIy5nb29nbGUuZmhpci5yNC5jb3JlLlNpbXBsZVF1YW50aXR5Ej4KEXNwZWNpbWVuX3F1YW50aXR5GAggASgLMiMuZ29vZ2xlLmZoaXIucjQuY29yZS5TaW1wbGVRdWFudGl0eRJDCghhZGRpdGl2ZRgJIAEoCzIxLmdvb2dsZS5maGlyLnI0LmNvcmUuU3BlY2ltZW4uQ29udGFpbmVyLkFkZGl0aXZlWBqlAQoJQWRkaXRpdmVYEkAKEGNvZGVhYmxlX2NvbmNlcHQYASABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEgAEkQKCXJlZmVyZW5jZRgCIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg/y//zCBglTdWJzdGFuY2VIADoGoIOD6AYBQggKBmNob2ljZTo8wJ/jtgUDsv7klwYwaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1NwZWNpbWVuSgQIBxAIQngKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaVWdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvc3BlY2ltZW5fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Specimen.
 * Sample for analysis.
 * See http://hl7.org/fhir/StructureDefinition/Specimen
 *
 * @generated from message google.fhir.r4.core.Specimen
 */
export type Specimen = Message<"google.fhir.r4.core.Specimen"> & {
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
   * External Identifier
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Identifier assigned by the lab
   *
   * @generated from field: google.fhir.r4.core.Identifier accession_identifier = 11;
   */
  accessionIdentifier?: Identifier;

  /**
   * @generated from field: google.fhir.r4.core.Specimen.StatusCode status = 12;
   */
  status?: Specimen_StatusCode;

  /**
   * Kind of material that forms the specimen
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 13;
   */
  type?: CodeableConcept;

  /**
   * Where the specimen came from. This may be from patient(s), from a location
   * (e.g., the source of an environmental sample), or a sampling of a substance
   * or a device
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 14;
   */
  subject?: Reference;

  /**
   * The time when specimen was received for processing
   *
   * @generated from field: google.fhir.r4.core.DateTime received_time = 15;
   */
  receivedTime?: DateTime;

  /**
   * Specimen from which this specimen originated
   *
   * @generated from field: repeated google.fhir.r4.core.Reference parent = 16;
   */
  parent: Reference[];

  /**
   * Why the specimen was collected
   *
   * @generated from field: repeated google.fhir.r4.core.Reference request = 17;
   */
  request: Reference[];

  /**
   * @generated from field: google.fhir.r4.core.Specimen.Collection collection = 18;
   */
  collection?: Specimen_Collection;

  /**
   * @generated from field: repeated google.fhir.r4.core.Specimen.Processing processing = 19;
   */
  processing: Specimen_Processing[];

  /**
   * @generated from field: repeated google.fhir.r4.core.Specimen.Container container = 20;
   */
  container: Specimen_Container[];

  /**
   * State of the specimen
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept condition = 21;
   */
  condition: CodeableConcept[];

  /**
   * Comments
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 22;
   */
  note: Annotation[];
};

/**
 * Describes the message google.fhir.r4.core.Specimen.
 * Use `create(SpecimenSchema)` to create a new message.
 */
export const SpecimenSchema: GenMessage<Specimen> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_specimen, 0);

/**
 * available | unavailable | unsatisfactory | entered-in-error
 *
 * @generated from message google.fhir.r4.core.Specimen.StatusCode
 */
export type Specimen_StatusCode = Message<"google.fhir.r4.core.Specimen.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.SpecimenStatusCode.Value value = 1;
   */
  value: SpecimenStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.Specimen.StatusCode.
 * Use `create(Specimen_StatusCodeSchema)` to create a new message.
 */
export const Specimen_StatusCodeSchema: GenMessage<Specimen_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_specimen, 0, 0);

/**
 * Collection details
 *
 * @generated from message google.fhir.r4.core.Specimen.Collection
 */
export type Specimen_Collection = Message<"google.fhir.r4.core.Specimen.Collection"> & {
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
   * Who collected the specimen
   *
   * @generated from field: google.fhir.r4.core.Reference collector = 4;
   */
  collector?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.Specimen.Collection.CollectedX collected = 5;
   */
  collected?: Specimen_Collection_CollectedX;

  /**
   * How long it took to collect specimen
   *
   * @generated from field: google.fhir.r4.core.Duration duration = 6;
   */
  duration?: Duration;

  /**
   * The quantity of specimen collected
   *
   * @generated from field: google.fhir.r4.core.SimpleQuantity quantity = 7;
   */
  quantity?: SimpleQuantity;

  /**
   * Technique used to perform collection
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept method = 8;
   */
  method?: CodeableConcept;

  /**
   * Anatomical collection site
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept body_site = 9;
   */
  bodySite?: CodeableConcept;

  /**
   * @generated from field: google.fhir.r4.core.Specimen.Collection.FastingStatusX fasting_status = 10;
   */
  fastingStatus?: Specimen_Collection_FastingStatusX;
};

/**
 * Describes the message google.fhir.r4.core.Specimen.Collection.
 * Use `create(Specimen_CollectionSchema)` to create a new message.
 */
export const Specimen_CollectionSchema: GenMessage<Specimen_Collection> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_specimen, 0, 1);

/**
 * Collection time
 *
 * @generated from message google.fhir.r4.core.Specimen.Collection.CollectedX
 */
export type Specimen_Collection_CollectedX = Message<"google.fhir.r4.core.Specimen.Collection.CollectedX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Specimen.Collection.CollectedX.choice
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
 * Describes the message google.fhir.r4.core.Specimen.Collection.CollectedX.
 * Use `create(Specimen_Collection_CollectedXSchema)` to create a new message.
 */
export const Specimen_Collection_CollectedXSchema: GenMessage<Specimen_Collection_CollectedX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_specimen, 0, 1, 0);

/**
 * Whether or how long patient abstained from food and/or drink
 *
 * @generated from message google.fhir.r4.core.Specimen.Collection.FastingStatusX
 */
export type Specimen_Collection_FastingStatusX = Message<"google.fhir.r4.core.Specimen.Collection.FastingStatusX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Specimen.Collection.FastingStatusX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.CodeableConcept codeable_concept = 1;
     */
    value: CodeableConcept;
    case: "codeableConcept";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Duration duration = 2;
     */
    value: Duration;
    case: "duration";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.Specimen.Collection.FastingStatusX.
 * Use `create(Specimen_Collection_FastingStatusXSchema)` to create a new message.
 */
export const Specimen_Collection_FastingStatusXSchema: GenMessage<Specimen_Collection_FastingStatusX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_specimen, 0, 1, 1);

/**
 * Processing and processing step details
 *
 * @generated from message google.fhir.r4.core.Specimen.Processing
 */
export type Specimen_Processing = Message<"google.fhir.r4.core.Specimen.Processing"> & {
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
   * Textual description of procedure
   *
   * @generated from field: google.fhir.r4.core.String description = 4;
   */
  description?: String;

  /**
   * Indicates the treatment step  applied to the specimen
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept procedure = 5;
   */
  procedure?: CodeableConcept;

  /**
   * Material used in the processing step
   *
   * @generated from field: repeated google.fhir.r4.core.Reference additive = 6;
   */
  additive: Reference[];

  /**
   * @generated from field: google.fhir.r4.core.Specimen.Processing.TimeX time = 7;
   */
  time?: Specimen_Processing_TimeX;
};

/**
 * Describes the message google.fhir.r4.core.Specimen.Processing.
 * Use `create(Specimen_ProcessingSchema)` to create a new message.
 */
export const Specimen_ProcessingSchema: GenMessage<Specimen_Processing> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_specimen, 0, 2);

/**
 * Date and time of specimen processing
 *
 * @generated from message google.fhir.r4.core.Specimen.Processing.TimeX
 */
export type Specimen_Processing_TimeX = Message<"google.fhir.r4.core.Specimen.Processing.TimeX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Specimen.Processing.TimeX.choice
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
 * Describes the message google.fhir.r4.core.Specimen.Processing.TimeX.
 * Use `create(Specimen_Processing_TimeXSchema)` to create a new message.
 */
export const Specimen_Processing_TimeXSchema: GenMessage<Specimen_Processing_TimeX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_specimen, 0, 2, 0);

/**
 * Direct container of specimen (tube/slide, etc.)
 *
 * @generated from message google.fhir.r4.core.Specimen.Container
 */
export type Specimen_Container = Message<"google.fhir.r4.core.Specimen.Container"> & {
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
   * Id for the container
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 4;
   */
  identifier: Identifier[];

  /**
   * Textual description of the container
   *
   * @generated from field: google.fhir.r4.core.String description = 5;
   */
  description?: String;

  /**
   * Kind of container directly associated with specimen
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 6;
   */
  type?: CodeableConcept;

  /**
   * Container volume or size
   *
   * @generated from field: google.fhir.r4.core.SimpleQuantity capacity = 7;
   */
  capacity?: SimpleQuantity;

  /**
   * Quantity of specimen within container
   *
   * @generated from field: google.fhir.r4.core.SimpleQuantity specimen_quantity = 8;
   */
  specimenQuantity?: SimpleQuantity;

  /**
   * @generated from field: google.fhir.r4.core.Specimen.Container.AdditiveX additive = 9;
   */
  additive?: Specimen_Container_AdditiveX;
};

/**
 * Describes the message google.fhir.r4.core.Specimen.Container.
 * Use `create(Specimen_ContainerSchema)` to create a new message.
 */
export const Specimen_ContainerSchema: GenMessage<Specimen_Container> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_specimen, 0, 3);

/**
 * Additive associated with container
 *
 * @generated from message google.fhir.r4.core.Specimen.Container.AdditiveX
 */
export type Specimen_Container_AdditiveX = Message<"google.fhir.r4.core.Specimen.Container.AdditiveX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Specimen.Container.AdditiveX.choice
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
 * Describes the message google.fhir.r4.core.Specimen.Container.AdditiveX.
 * Use `create(Specimen_Container_AdditiveXSchema)` to create a new message.
 */
export const Specimen_Container_AdditiveXSchema: GenMessage<Specimen_Container_AdditiveX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_specimen, 0, 3, 0);
