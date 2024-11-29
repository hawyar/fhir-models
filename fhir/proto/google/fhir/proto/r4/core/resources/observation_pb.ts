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
// @generated from file proto/google/fhir/proto/r4/core/resources/observation.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { ObservationStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Boolean, Code, CodeableConcept, DateTime, Extension, Id, Identifier, Instant, Integer, Meta, Narrative, Period, Quantity, Range, Ratio, Reference, SampledData, SimpleQuantity, String, Time, Timing, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/observation.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_observation: GenFile = /*@__PURE__*/
  fileDesc("Cjtwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9vYnNlcnZhdGlvbi5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLgKQoLT2JzZXJ2YXRpb24SIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyErMBCghiYXNlZF9vbhgLIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQoAB8v/8wgYIQ2FyZVBsYW7y//zCBg1EZXZpY2VSZXF1ZXN08v/8wgYaSW1tdW5pemF0aW9uUmVjb21tZW5kYXRpb27y//zCBhFNZWRpY2F0aW9uUmVxdWVzdPL//MIGDk51dHJpdGlvbk9yZGVy8v/8wgYOU2VydmljZVJlcXVlc3QStAEKB3BhcnRfb2YYDCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUKCAfL//MIGGE1lZGljYXRpb25BZG1pbmlzdHJhdGlvbvL//MIGEk1lZGljYXRpb25EaXNwZW5zZfL//MIGE01lZGljYXRpb25TdGF0ZW1lbnTy//zCBglQcm9jZWR1cmXy//zCBgxJbW11bml6YXRpb27y//zCBgxJbWFnaW5nU3R1ZHkSQwoGc3RhdHVzGA0gASgLMisuZ29vZ2xlLmZoaXIucjQuY29yZS5PYnNlcnZhdGlvbi5TdGF0dXNDb2RlQgbw0IfrBAESNgoIY2F0ZWdvcnkYDiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI6CgRjb2RlGA8gASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRCBvDQh+sEARJjCgdzdWJqZWN0GBAgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCMvL//MIGB1BhdGllbnTy//zCBgVHcm91cPL//MIGBkRldmljZfL//MIGCExvY2F0aW9uEj0KBWZvY3VzGBEgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFJlc291cmNlEkIKCWVuY291bnRlchgSIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg/y//zCBglFbmNvdW50ZXISPgoJZWZmZWN0aXZlGBMgASgLMisuZ29vZ2xlLmZoaXIucjQuY29yZS5PYnNlcnZhdGlvbi5FZmZlY3RpdmVYEiwKBmlzc3VlZBgUIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuSW5zdGFudBKbAQoJcGVyZm9ybWVyGBUgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCaPL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb27y//zCBghDYXJlVGVhbfL//MIGB1BhdGllbnTy//zCBg1SZWxhdGVkUGVyc29uEjYKBXZhbHVlGBYgASgLMicuZ29vZ2xlLmZoaXIucjQuY29yZS5PYnNlcnZhdGlvbi5WYWx1ZVgSQAoSZGF0YV9hYnNlbnRfcmVhc29uGBcgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSPAoOaW50ZXJwcmV0YXRpb24YGCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBItCgRub3RlGBkgAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5Bbm5vdGF0aW9uEjcKCWJvZHlfc2l0ZRgaIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjQKBm1ldGhvZBgbIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkAKCHNwZWNpbWVuGBwgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFNwZWNpbWVuEk4KBmRldmljZRgdIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQh7y//zCBgZEZXZpY2Xy//zCBgxEZXZpY2VNZXRyaWMSSAoPcmVmZXJlbmNlX3JhbmdlGB4gAygLMi8uZ29vZ2xlLmZoaXIucjQuY29yZS5PYnNlcnZhdGlvbi5SZWZlcmVuY2VSYW5nZRJ3CgpoYXNfbWVtYmVyGB8gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCQ/L//MIGC09ic2VydmF0aW9u8v/8wgYVUXVlc3Rpb25uYWlyZVJlc3BvbnNl8v/8wgYRTW9sZWN1bGFyU2VxdWVuY2USrQEKDGRlcml2ZWRfZnJvbRggIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQnfy//zCBhFEb2N1bWVudFJlZmVyZW5jZfL//MIGDEltYWdpbmdTdHVkefL//MIGBU1lZGlh8v/8wgYVUXVlc3Rpb25uYWlyZVJlc3BvbnNl8v/8wgYLT2JzZXJ2YXRpb27y//zCBhFNb2xlY3VsYXJTZXF1ZW5jZRI9Cgljb21wb25lbnQYISADKAsyKi5nb29nbGUuZmhpci5yNC5jb3JlLk9ic2VydmF0aW9uLkNvbXBvbmVudBqYAgoKU3RhdHVzQ29kZRI/CgV2YWx1ZRgBIAEoDjIwLmdvb2dsZS5maGlyLnI0LmNvcmUuT2JzZXJ2YXRpb25TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bYr5g7IFL2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvb2JzZXJ2YXRpb24tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUa4QEKCkVmZmVjdGl2ZVgSMgoJZGF0ZV90aW1lGAEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZUgAEi0KBnBlcmlvZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kSAASLQoGdGltaW5nGAMgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5UaW1pbmdIABIvCgdpbnN0YW50GAQgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnN0YW50SAA6BqCDg+gGAUIICgZjaG9pY2Ua0AQKBlZhbHVlWBIxCghxdWFudGl0eRgBIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuUXVhbnRpdHlIABJAChBjb2RlYWJsZV9jb25jZXB0GAIgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHRIABI7CgxzdHJpbmdfdmFsdWUYAyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0gAUgZzdHJpbmcSLwoHYm9vbGVhbhgEIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbkgAEi8KB2ludGVnZXIYBSABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkludGVnZXJIABIrCgVyYW5nZRgGIAEoCzIaLmdvb2dsZS5maGlyLnI0LmNvcmUuUmFuZ2VIABIrCgVyYXRpbxgHIAEoCzIaLmdvb2dsZS5maGlyLnI0LmNvcmUuUmF0aW9IABI4CgxzYW1wbGVkX2RhdGEYCCABKAsyIC5nb29nbGUuZmhpci5yNC5jb3JlLlNhbXBsZWREYXRhSAASKQoEdGltZRgJIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuVGltZUgAEjIKCWRhdGVfdGltZRgKIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWVIABItCgZwZXJpb2QYCyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZEgAOgagg4PoBgFCCAoGY2hvaWNlGoUECg5SZWZlcmVuY2VSYW5nZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjAKA2xvdxgEIAEoCzIjLmdvb2dsZS5maGlyLnI0LmNvcmUuU2ltcGxlUXVhbnRpdHkSMQoEaGlnaBgFIAEoCzIjLmdvb2dsZS5maGlyLnI0LmNvcmUuU2ltcGxlUXVhbnRpdHkSMgoEdHlwZRgGIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjgKCmFwcGxpZXNfdG8YByADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBInCgNhZ2UYCCABKAsyGi5nb29nbGUuZmhpci5yNC5jb3JlLlJhbmdlEikKBHRleHQYCSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZzo0moaToAgubG93LmV4aXN0cygpIG9yIGhpZ2guZXhpc3RzKCkgb3IgdGV4dC5leGlzdHMoKRq+CAoJQ29tcG9uZW50EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoEY29kZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESQAoFdmFsdWUYBSABKAsyMS5nb29nbGUuZmhpci5yNC5jb3JlLk9ic2VydmF0aW9uLkNvbXBvbmVudC5WYWx1ZVgSQAoSZGF0YV9hYnNlbnRfcmVhc29uGAYgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSPAoOaW50ZXJwcmV0YXRpb24YByADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJICg9yZWZlcmVuY2VfcmFuZ2UYCCADKAsyLy5nb29nbGUuZmhpci5yNC5jb3JlLk9ic2VydmF0aW9uLlJlZmVyZW5jZVJhbmdlGtAECgZWYWx1ZVgSMQoIcXVhbnRpdHkYASABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLlF1YW50aXR5SAASQAoQY29kZWFibGVfY29uY2VwdBgCIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0SAASOwoMc3RyaW5nX3ZhbHVlGAMgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdIAFIGc3RyaW5nEi8KB2Jvb2xlYW4YBCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW5IABIvCgdpbnRlZ2VyGAUgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnRlZ2VySAASKwoFcmFuZ2UYBiABKAsyGi5nb29nbGUuZmhpci5yNC5jb3JlLlJhbmdlSAASKwoFcmF0aW8YByABKAsyGi5nb29nbGUuZmhpci5yNC5jb3JlLlJhdGlvSAASOAoMc2FtcGxlZF9kYXRhGAggASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5TYW1wbGVkRGF0YUgAEikKBHRpbWUYCSABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLlRpbWVIABIyCglkYXRlX3RpbWUYCiABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lSAASLQoGcGVyaW9kGAsgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2RIADoGoIOD6AYBQggKBmNob2ljZTrTAcCf47YFA7L+5JcGM2h0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9PYnNlcnZhdGlvbpqGk6AIKWRhdGFBYnNlbnRSZWFzb24uZW1wdHkoKSBvciB2YWx1ZS5lbXB0eSgpmoaToAhfdmFsdWUuZW1wdHkoKSBvciBjb21wb25lbnQuY29kZS53aGVyZShjb2RpbmcuaW50ZXJzZWN0KCVyZXNvdXJjZS5jb2RlLmNvZGluZykuZXhpc3RzKCkpLmVtcHR5KClKBAgHEAhCewoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpYZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9vYnNlcnZhdGlvbl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Observation.
 * Measurements and simple assertions.
 * See http://hl7.org/fhir/StructureDefinition/Observation
 *
 * @generated from message google.fhir.r4.core.Observation
 */
export type Observation = Message<"google.fhir.r4.core.Observation"> & {
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
   * Business Identifier for observation
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Fulfills plan, proposal or order
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
   * @generated from field: google.fhir.r4.core.Observation.StatusCode status = 13;
   */
  status?: Observation_StatusCode;

  /**
   * Classification of  type of observation
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 14;
   */
  category: CodeableConcept[];

  /**
   * Type of observation (code / type)
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 15;
   */
  code?: CodeableConcept;

  /**
   * Who and/or what the observation is about
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 16;
   */
  subject?: Reference;

  /**
   * What the observation is about, when it is not about the subject of record
   *
   * @generated from field: repeated google.fhir.r4.core.Reference focus = 17;
   */
  focus: Reference[];

  /**
   * Healthcare event during which this observation is made
   *
   * @generated from field: google.fhir.r4.core.Reference encounter = 18;
   */
  encounter?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.Observation.EffectiveX effective = 19;
   */
  effective?: Observation_EffectiveX;

  /**
   * Date/Time this version was made available
   *
   * @generated from field: google.fhir.r4.core.Instant issued = 20;
   */
  issued?: Instant;

  /**
   * Who is responsible for the observation
   *
   * @generated from field: repeated google.fhir.r4.core.Reference performer = 21;
   */
  performer: Reference[];

  /**
   * @generated from field: google.fhir.r4.core.Observation.ValueX value = 22;
   */
  value?: Observation_ValueX;

  /**
   * Why the result is missing
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept data_absent_reason = 23;
   */
  dataAbsentReason?: CodeableConcept;

  /**
   * High, low, normal, etc.
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept interpretation = 24;
   */
  interpretation: CodeableConcept[];

  /**
   * Comments about the observation
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 25;
   */
  note: Annotation[];

  /**
   * Observed body part
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept body_site = 26;
   */
  bodySite?: CodeableConcept;

  /**
   * How it was done
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept method = 27;
   */
  method?: CodeableConcept;

  /**
   * Specimen used for this observation
   *
   * @generated from field: google.fhir.r4.core.Reference specimen = 28;
   */
  specimen?: Reference;

  /**
   * (Measurement) Device
   *
   * @generated from field: google.fhir.r4.core.Reference device = 29;
   */
  device?: Reference;

  /**
   * @generated from field: repeated google.fhir.r4.core.Observation.ReferenceRange reference_range = 30;
   */
  referenceRange: Observation_ReferenceRange[];

  /**
   * Related resource that belongs to the Observation group
   *
   * @generated from field: repeated google.fhir.r4.core.Reference has_member = 31;
   */
  hasMember: Reference[];

  /**
   * Related measurements the observation is made from
   *
   * @generated from field: repeated google.fhir.r4.core.Reference derived_from = 32;
   */
  derivedFrom: Reference[];

  /**
   * @generated from field: repeated google.fhir.r4.core.Observation.Component component = 33;
   */
  component: Observation_Component[];
};

/**
 * Describes the message google.fhir.r4.core.Observation.
 * Use `create(ObservationSchema)` to create a new message.
 */
export const ObservationSchema: GenMessage<Observation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation, 0);

/**
 * registered | preliminary | final | amended +
 *
 * @generated from message google.fhir.r4.core.Observation.StatusCode
 */
export type Observation_StatusCode = Message<"google.fhir.r4.core.Observation.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ObservationStatusCode.Value value = 1;
   */
  value: ObservationStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.Observation.StatusCode.
 * Use `create(Observation_StatusCodeSchema)` to create a new message.
 */
export const Observation_StatusCodeSchema: GenMessage<Observation_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation, 0, 0);

/**
 * Clinically relevant time/time-period for observation
 *
 * @generated from message google.fhir.r4.core.Observation.EffectiveX
 */
export type Observation_EffectiveX = Message<"google.fhir.r4.core.Observation.EffectiveX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Observation.EffectiveX.choice
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
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Instant instant = 4;
     */
    value: Instant;
    case: "instant";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.Observation.EffectiveX.
 * Use `create(Observation_EffectiveXSchema)` to create a new message.
 */
export const Observation_EffectiveXSchema: GenMessage<Observation_EffectiveX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation, 0, 1);

/**
 * Actual result
 *
 * @generated from message google.fhir.r4.core.Observation.ValueX
 */
export type Observation_ValueX = Message<"google.fhir.r4.core.Observation.ValueX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Observation.ValueX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Quantity quantity = 1;
     */
    value: Quantity;
    case: "quantity";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.CodeableConcept codeable_concept = 2;
     */
    value: CodeableConcept;
    case: "codeableConcept";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 3 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Boolean boolean = 4;
     */
    value: Boolean;
    case: "boolean";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Integer integer = 5;
     */
    value: Integer;
    case: "integer";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Range range = 6;
     */
    value: Range;
    case: "range";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Ratio ratio = 7;
     */
    value: Ratio;
    case: "ratio";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.SampledData sampled_data = 8;
     */
    value: SampledData;
    case: "sampledData";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Time time = 9;
     */
    value: Time;
    case: "time";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 10;
     */
    value: DateTime;
    case: "dateTime";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Period period = 11;
     */
    value: Period;
    case: "period";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.Observation.ValueX.
 * Use `create(Observation_ValueXSchema)` to create a new message.
 */
export const Observation_ValueXSchema: GenMessage<Observation_ValueX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation, 0, 2);

/**
 * Provides guide for interpretation
 *
 * @generated from message google.fhir.r4.core.Observation.ReferenceRange
 */
export type Observation_ReferenceRange = Message<"google.fhir.r4.core.Observation.ReferenceRange"> & {
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
   * Low Range, if relevant
   *
   * @generated from field: google.fhir.r4.core.SimpleQuantity low = 4;
   */
  low?: SimpleQuantity;

  /**
   * High Range, if relevant
   *
   * @generated from field: google.fhir.r4.core.SimpleQuantity high = 5;
   */
  high?: SimpleQuantity;

  /**
   * Reference range qualifier
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 6;
   */
  type?: CodeableConcept;

  /**
   * Reference range population
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept applies_to = 7;
   */
  appliesTo: CodeableConcept[];

  /**
   * Applicable age range, if relevant
   *
   * @generated from field: google.fhir.r4.core.Range age = 8;
   */
  age?: Range;

  /**
   * Text based reference range in an observation
   *
   * @generated from field: google.fhir.r4.core.String text = 9;
   */
  text?: String;
};

/**
 * Describes the message google.fhir.r4.core.Observation.ReferenceRange.
 * Use `create(Observation_ReferenceRangeSchema)` to create a new message.
 */
export const Observation_ReferenceRangeSchema: GenMessage<Observation_ReferenceRange> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation, 0, 3);

/**
 * Component results
 *
 * @generated from message google.fhir.r4.core.Observation.Component
 */
export type Observation_Component = Message<"google.fhir.r4.core.Observation.Component"> & {
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
   * Type of component observation (code / type)
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 4;
   */
  code?: CodeableConcept;

  /**
   * @generated from field: google.fhir.r4.core.Observation.Component.ValueX value = 5;
   */
  value?: Observation_Component_ValueX;

  /**
   * Why the component result is missing
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept data_absent_reason = 6;
   */
  dataAbsentReason?: CodeableConcept;

  /**
   * High, low, normal, etc.
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept interpretation = 7;
   */
  interpretation: CodeableConcept[];

  /**
   * Provides guide for interpretation of component result
   *
   * @generated from field: repeated google.fhir.r4.core.Observation.ReferenceRange reference_range = 8;
   */
  referenceRange: Observation_ReferenceRange[];
};

/**
 * Describes the message google.fhir.r4.core.Observation.Component.
 * Use `create(Observation_ComponentSchema)` to create a new message.
 */
export const Observation_ComponentSchema: GenMessage<Observation_Component> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation, 0, 4);

/**
 * Actual component result
 *
 * @generated from message google.fhir.r4.core.Observation.Component.ValueX
 */
export type Observation_Component_ValueX = Message<"google.fhir.r4.core.Observation.Component.ValueX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.Observation.Component.ValueX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Quantity quantity = 1;
     */
    value: Quantity;
    case: "quantity";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.CodeableConcept codeable_concept = 2;
     */
    value: CodeableConcept;
    case: "codeableConcept";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 3 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Boolean boolean = 4;
     */
    value: Boolean;
    case: "boolean";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Integer integer = 5;
     */
    value: Integer;
    case: "integer";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Range range = 6;
     */
    value: Range;
    case: "range";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Ratio ratio = 7;
     */
    value: Ratio;
    case: "ratio";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.SampledData sampled_data = 8;
     */
    value: SampledData;
    case: "sampledData";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Time time = 9;
     */
    value: Time;
    case: "time";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.DateTime date_time = 10;
     */
    value: DateTime;
    case: "dateTime";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Period period = 11;
     */
    value: Period;
    case: "period";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.Observation.Component.ValueX.
 * Use `create(Observation_Component_ValueXSchema)` to create a new message.
 */
export const Observation_Component_ValueXSchema: GenMessage<Observation_Component_ValueX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_observation, 0, 4, 0);

