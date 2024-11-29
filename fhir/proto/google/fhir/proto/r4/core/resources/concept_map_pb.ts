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
// @generated from file proto/google/fhir/proto/r4/core/resources/concept_map.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { ConceptMapEquivalenceCode_Value, ConceptMapGroupUnmappedModeCode_Value, PublicationStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Boolean, Canonical, Code, CodeableConcept, ContactDetail, DateTime, Extension, Id, Identifier, Markdown, Meta, Narrative, String, Uri, UsageContext } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/concept_map.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_concept_map: GenFile = /*@__PURE__*/
  fileDesc("Cjtwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jb25jZXB0X21hcC5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLQJgoKQ29uY2VwdE1hcBIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEiUKA3VybBgKIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEjMKCmlkZW50aWZpZXIYCyABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISLAoHdmVyc2lvbhgMIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEikKBG5hbWUYDSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIqCgV0aXRsZRgOIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEkIKBnN0YXR1cxgPIAEoCzIqLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29uY2VwdE1hcC5TdGF0dXNDb2RlQgbw0IfrBAESMgoMZXhwZXJpbWVudGFsGBAgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEisKBGRhdGUYESABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lEi4KCXB1Ymxpc2hlchgSIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjMKB2NvbnRhY3QYEyADKAsyIi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbnRhY3REZXRhaWwSMgoLZGVzY3JpcHRpb24YFCABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLk1hcmtkb3duEjYKC3VzZV9jb250ZXh0GBUgAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Vc2FnZUNvbnRleHQSOgoManVyaXNkaWN0aW9uGBYgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLgoHcHVycG9zZRgXIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuTWFya2Rvd24SMAoJY29weXJpZ2h0GBggASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5NYXJrZG93bhI3CgZzb3VyY2UYGSABKAsyJy5nb29nbGUuZmhpci5yNC5jb3JlLkNvbmNlcHRNYXAuU291cmNlWBI3CgZ0YXJnZXQYGiABKAsyJy5nb29nbGUuZmhpci5yNC5jb3JlLkNvbmNlcHRNYXAuVGFyZ2V0WBI0CgVncm91cBgbIAMoCzIlLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29uY2VwdE1hcC5Hcm91cBqYAgoKU3RhdHVzQ29kZRI/CgV2YWx1ZRgBIAEoDjIwLmdvb2dsZS5maGlyLnI0LmNvcmUuUHVibGljYXRpb25TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246bYr5g7IFL2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcHVibGljYXRpb24tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUaeQoHU291cmNlWBInCgN1cmkYASABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaUgAEjMKCWNhbm9uaWNhbBgCIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsSAA6BqCDg+gGAUIICgZjaG9pY2UaeQoHVGFyZ2V0WBInCgN1cmkYASABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaUgAEjMKCWNhbm9uaWNhbBgCIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsSAA6BqCDg+gGAUIICgZjaG9pY2UaqhcKBUdyb3VwEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SKAoGc291cmNlGAQgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSMwoOc291cmNlX3ZlcnNpb24YBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIoCgZ0YXJnZXQYBiABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIzCg50YXJnZXRfdmVyc2lvbhgHIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEkwKB2VsZW1lbnQYCCADKAsyMy5nb29nbGUuZmhpci5yNC5jb3JlLkNvbmNlcHRNYXAuR3JvdXAuU291cmNlRWxlbWVudEIG8NCH6wQBEkAKCHVubWFwcGVkGAkgASgLMi4uZ29vZ2xlLmZoaXIucjQuY29yZS5Db25jZXB0TWFwLkdyb3VwLlVubWFwcGVkGrwNCg1Tb3VyY2VFbGVtZW50EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SJwoEY29kZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgdkaXNwbGF5GAUgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSUQoGdGFyZ2V0GAYgAygLMkEuZ29vZ2xlLmZoaXIucjQuY29yZS5Db25jZXB0TWFwLkdyb3VwLlNvdXJjZUVsZW1lbnQuVGFyZ2V0RWxlbWVudBroCgoNVGFyZ2V0RWxlbWVudBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEicKBGNvZGUYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoHZGlzcGxheRgFIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEm4KC2VxdWl2YWxlbmNlGAYgASgLMlEuZ29vZ2xlLmZoaXIucjQuY29yZS5Db25jZXB0TWFwLkdyb3VwLlNvdXJjZUVsZW1lbnQuVGFyZ2V0RWxlbWVudC5FcXVpdmFsZW5jZUNvZGVCBvDQh+sEARIsCgdjb21tZW50GAcgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSYgoKZGVwZW5kc19vbhgIIAMoCzJOLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29uY2VwdE1hcC5Hcm91cC5Tb3VyY2VFbGVtZW50LlRhcmdldEVsZW1lbnQuT3RoZXJFbGVtZW50El8KB3Byb2R1Y3QYCSADKAsyTi5nb29nbGUuZmhpci5yNC5jb3JlLkNvbmNlcHRNYXAuR3JvdXAuU291cmNlRWxlbWVudC5UYXJnZXRFbGVtZW50Lk90aGVyRWxlbWVudBqmAgoPRXF1aXZhbGVuY2VDb2RlEkMKBXZhbHVlGAEgASgOMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db25jZXB0TWFwRXF1aXZhbGVuY2VDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246cor5g7IFNGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29uY2VwdC1tYXAtZXF1aXZhbGVuY2XAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrsAgoMT3RoZXJFbGVtZW50EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMgoIcHJvcGVydHkYBCABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaUIG8NCH6wQBEi4KBnN5c3RlbRgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsEjIKBXZhbHVlGAYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdCBvDQh+sEARIsCgdkaXNwbGF5GAcgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmc6bZqGk6AIZ2NvbW1lbnQuZXhpc3RzKCkgb3IgZXF1aXZhbGVuY2UuZW1wdHkoKSBvciAoKGVxdWl2YWxlbmNlICE9ICduYXJyb3dlcicpIGFuZCAoZXF1aXZhbGVuY2UgIT0gJ2luZXhhY3QnKSka+wUKCFVubWFwcGVkEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24STQoEbW9kZRgEIAEoCzI3Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ29uY2VwdE1hcC5Hcm91cC5Vbm1hcHBlZC5Nb2RlQ29kZUIG8NCH6wQBEicKBGNvZGUYBSABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoHZGlzcGxheRgGIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEisKA3VybBgHIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2Fub25pY2FsGqYCCghNb2RlQ29kZRJJCgV2YWx1ZRgBIAEoDjI6Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ29uY2VwdE1hcEdyb3VwVW5tYXBwZWRNb2RlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnOK+YOyBTVodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbmNlcHRtYXAtdW5tYXBwZWQtbW9kZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlOluahpOgCCYobW9kZSA9ICdmaXhlZCcpIGltcGxpZXMgY29kZS5leGlzdHMoKZqGk6AIKShtb2RlID0gJ290aGVyLW1hcCcpIGltcGxpZXMgdXJsLmV4aXN0cygpOm7An+O2BQOy/uSXBjJodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vQ29uY2VwdE1hcJqvrqQLKm5hbWUubWF0Y2hlcygnW0EtWl0oW0EtWmEtejAtOV9dKXswLDI1NH0nKUoECAcQCEJ7Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWlhnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2NvbmNlcHRfbWFwX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for ConceptMap.
 * A map from one set of concepts to one or more other concepts.
 * See http://hl7.org/fhir/StructureDefinition/ConceptMap
 *
 * @generated from message google.fhir.r4.core.ConceptMap
 */
export type ConceptMap = Message<"google.fhir.r4.core.ConceptMap"> & {
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
   * Canonical identifier for this concept map, represented as a URI (globally
   * unique)
   *
   * @generated from field: google.fhir.r4.core.Uri url = 10;
   */
  url?: Uri;

  /**
   * Additional identifier for the concept map
   *
   * @generated from field: google.fhir.r4.core.Identifier identifier = 11;
   */
  identifier?: Identifier;

  /**
   * Business version of the concept map
   *
   * @generated from field: google.fhir.r4.core.String version = 12;
   */
  version?: String;

  /**
   * Name for this concept map (computer friendly)
   *
   * @generated from field: google.fhir.r4.core.String name = 13;
   */
  name?: String;

  /**
   * Name for this concept map (human friendly)
   *
   * @generated from field: google.fhir.r4.core.String title = 14;
   */
  title?: String;

  /**
   * @generated from field: google.fhir.r4.core.ConceptMap.StatusCode status = 15;
   */
  status?: ConceptMap_StatusCode;

  /**
   * For testing purposes, not real usage
   *
   * @generated from field: google.fhir.r4.core.Boolean experimental = 16;
   */
  experimental?: Boolean;

  /**
   * Date last changed
   *
   * @generated from field: google.fhir.r4.core.DateTime date = 17;
   */
  date?: DateTime;

  /**
   * Name of the publisher (organization or individual)
   *
   * @generated from field: google.fhir.r4.core.String publisher = 18;
   */
  publisher?: String;

  /**
   * Contact details for the publisher
   *
   * @generated from field: repeated google.fhir.r4.core.ContactDetail contact = 19;
   */
  contact: ContactDetail[];

  /**
   * Natural language description of the concept map
   *
   * @generated from field: google.fhir.r4.core.Markdown description = 20;
   */
  description?: Markdown;

  /**
   * The context that the content is intended to support
   *
   * @generated from field: repeated google.fhir.r4.core.UsageContext use_context = 21;
   */
  useContext: UsageContext[];

  /**
   * Intended jurisdiction for concept map (if applicable)
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept jurisdiction = 22;
   */
  jurisdiction: CodeableConcept[];

  /**
   * Why this concept map is defined
   *
   * @generated from field: google.fhir.r4.core.Markdown purpose = 23;
   */
  purpose?: Markdown;

  /**
   * Use and/or publishing restrictions
   *
   * @generated from field: google.fhir.r4.core.Markdown copyright = 24;
   */
  copyright?: Markdown;

  /**
   * @generated from field: google.fhir.r4.core.ConceptMap.SourceX source = 25;
   */
  source?: ConceptMap_SourceX;

  /**
   * @generated from field: google.fhir.r4.core.ConceptMap.TargetX target = 26;
   */
  target?: ConceptMap_TargetX;

  /**
   * @generated from field: repeated google.fhir.r4.core.ConceptMap.Group group = 27;
   */
  group: ConceptMap_Group[];
};

/**
 * Describes the message google.fhir.r4.core.ConceptMap.
 * Use `create(ConceptMapSchema)` to create a new message.
 */
export const ConceptMapSchema: GenMessage<ConceptMap> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_concept_map, 0);

/**
 * draft | active | retired | unknown
 *
 * @generated from message google.fhir.r4.core.ConceptMap.StatusCode
 */
export type ConceptMap_StatusCode = Message<"google.fhir.r4.core.ConceptMap.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.PublicationStatusCode.Value value = 1;
   */
  value: PublicationStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.ConceptMap.StatusCode.
 * Use `create(ConceptMap_StatusCodeSchema)` to create a new message.
 */
export const ConceptMap_StatusCodeSchema: GenMessage<ConceptMap_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_concept_map, 0, 0);

/**
 * The source value set that contains the concepts that are being mapped
 *
 * @generated from message google.fhir.r4.core.ConceptMap.SourceX
 */
export type ConceptMap_SourceX = Message<"google.fhir.r4.core.ConceptMap.SourceX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.ConceptMap.SourceX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Uri uri = 1;
     */
    value: Uri;
    case: "uri";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Canonical canonical = 2;
     */
    value: Canonical;
    case: "canonical";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.ConceptMap.SourceX.
 * Use `create(ConceptMap_SourceXSchema)` to create a new message.
 */
export const ConceptMap_SourceXSchema: GenMessage<ConceptMap_SourceX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_concept_map, 0, 1);

/**
 * The target value set which provides context for the mappings
 *
 * @generated from message google.fhir.r4.core.ConceptMap.TargetX
 */
export type ConceptMap_TargetX = Message<"google.fhir.r4.core.ConceptMap.TargetX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.ConceptMap.TargetX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Uri uri = 1;
     */
    value: Uri;
    case: "uri";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Canonical canonical = 2;
     */
    value: Canonical;
    case: "canonical";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.ConceptMap.TargetX.
 * Use `create(ConceptMap_TargetXSchema)` to create a new message.
 */
export const ConceptMap_TargetXSchema: GenMessage<ConceptMap_TargetX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_concept_map, 0, 2);

/**
 * Same source and target systems
 *
 * @generated from message google.fhir.r4.core.ConceptMap.Group
 */
export type ConceptMap_Group = Message<"google.fhir.r4.core.ConceptMap.Group"> & {
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
   * Source system where concepts to be mapped are defined
   *
   * @generated from field: google.fhir.r4.core.Uri source = 4;
   */
  source?: Uri;

  /**
   * Specific version of the  code system
   *
   * @generated from field: google.fhir.r4.core.String source_version = 5;
   */
  sourceVersion?: String;

  /**
   * Target system that the concepts are to be mapped to
   *
   * @generated from field: google.fhir.r4.core.Uri target = 6;
   */
  target?: Uri;

  /**
   * Specific version of the  code system
   *
   * @generated from field: google.fhir.r4.core.String target_version = 7;
   */
  targetVersion?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.ConceptMap.Group.SourceElement element = 8;
   */
  element: ConceptMap_Group_SourceElement[];

  /**
   * @generated from field: google.fhir.r4.core.ConceptMap.Group.Unmapped unmapped = 9;
   */
  unmapped?: ConceptMap_Group_Unmapped;
};

/**
 * Describes the message google.fhir.r4.core.ConceptMap.Group.
 * Use `create(ConceptMap_GroupSchema)` to create a new message.
 */
export const ConceptMap_GroupSchema: GenMessage<ConceptMap_Group> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_concept_map, 0, 3);

/**
 * Mappings for a concept from the source set
 *
 * @generated from message google.fhir.r4.core.ConceptMap.Group.SourceElement
 */
export type ConceptMap_Group_SourceElement = Message<"google.fhir.r4.core.ConceptMap.Group.SourceElement"> & {
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
   * Identifies element being mapped
   *
   * @generated from field: google.fhir.r4.core.Code code = 4;
   */
  code?: Code;

  /**
   * Display for the code
   *
   * @generated from field: google.fhir.r4.core.String display = 5;
   */
  display?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement target = 6;
   */
  target: ConceptMap_Group_SourceElement_TargetElement[];
};

/**
 * Describes the message google.fhir.r4.core.ConceptMap.Group.SourceElement.
 * Use `create(ConceptMap_Group_SourceElementSchema)` to create a new message.
 */
export const ConceptMap_Group_SourceElementSchema: GenMessage<ConceptMap_Group_SourceElement> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_concept_map, 0, 3, 0);

/**
 * Concept in target system for element
 *
 * @generated from message google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement
 */
export type ConceptMap_Group_SourceElement_TargetElement = Message<"google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement"> & {
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
   * Code that identifies the target element
   *
   * @generated from field: google.fhir.r4.core.Code code = 4;
   */
  code?: Code;

  /**
   * Display for the code
   *
   * @generated from field: google.fhir.r4.core.String display = 5;
   */
  display?: String;

  /**
   * @generated from field: google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement.EquivalenceCode equivalence = 6;
   */
  equivalence?: ConceptMap_Group_SourceElement_TargetElement_EquivalenceCode;

  /**
   * Description of status/issues in mapping
   *
   * @generated from field: google.fhir.r4.core.String comment = 7;
   */
  comment?: String;

  /**
   * @generated from field: repeated google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement.OtherElement depends_on = 8;
   */
  dependsOn: ConceptMap_Group_SourceElement_TargetElement_OtherElement[];

  /**
   * Other concepts that this mapping also produces
   *
   * @generated from field: repeated google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement.OtherElement product = 9;
   */
  product: ConceptMap_Group_SourceElement_TargetElement_OtherElement[];
};

/**
 * Describes the message google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement.
 * Use `create(ConceptMap_Group_SourceElement_TargetElementSchema)` to create a new message.
 */
export const ConceptMap_Group_SourceElement_TargetElementSchema: GenMessage<ConceptMap_Group_SourceElement_TargetElement> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_concept_map, 0, 3, 0, 0);

/**
 * relatedto | equivalent | equal | wider | subsumes | narrower |
 * specializes | inexact | unmatched | disjoint
 *
 * @generated from message google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement.EquivalenceCode
 */
export type ConceptMap_Group_SourceElement_TargetElement_EquivalenceCode = Message<"google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement.EquivalenceCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ConceptMapEquivalenceCode.Value value = 1;
   */
  value: ConceptMapEquivalenceCode_Value;

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
 * Describes the message google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement.EquivalenceCode.
 * Use `create(ConceptMap_Group_SourceElement_TargetElement_EquivalenceCodeSchema)` to create a new message.
 */
export const ConceptMap_Group_SourceElement_TargetElement_EquivalenceCodeSchema: GenMessage<ConceptMap_Group_SourceElement_TargetElement_EquivalenceCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_concept_map, 0, 3, 0, 0, 0);

/**
 * Other elements required for this mapping (from context)
 *
 * @generated from message google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement.OtherElement
 */
export type ConceptMap_Group_SourceElement_TargetElement_OtherElement = Message<"google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement.OtherElement"> & {
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
   * Reference to property mapping depends on
   *
   * @generated from field: google.fhir.r4.core.Uri property = 4;
   */
  property?: Uri;

  /**
   * Code System (if necessary)
   *
   * @generated from field: google.fhir.r4.core.Canonical system = 5;
   */
  system?: Canonical;

  /**
   * Value of the referenced element
   *
   * @generated from field: google.fhir.r4.core.String value = 6;
   */
  value?: String;

  /**
   * Display for the code (if value is a code)
   *
   * @generated from field: google.fhir.r4.core.String display = 7;
   */
  display?: String;
};

/**
 * Describes the message google.fhir.r4.core.ConceptMap.Group.SourceElement.TargetElement.OtherElement.
 * Use `create(ConceptMap_Group_SourceElement_TargetElement_OtherElementSchema)` to create a new message.
 */
export const ConceptMap_Group_SourceElement_TargetElement_OtherElementSchema: GenMessage<ConceptMap_Group_SourceElement_TargetElement_OtherElement> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_concept_map, 0, 3, 0, 0, 1);

/**
 * What to do when there is no mapping for the source concept
 *
 * @generated from message google.fhir.r4.core.ConceptMap.Group.Unmapped
 */
export type ConceptMap_Group_Unmapped = Message<"google.fhir.r4.core.ConceptMap.Group.Unmapped"> & {
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
   * @generated from field: google.fhir.r4.core.ConceptMap.Group.Unmapped.ModeCode mode = 4;
   */
  mode?: ConceptMap_Group_Unmapped_ModeCode;

  /**
   * Fixed code when mode = fixed
   *
   * @generated from field: google.fhir.r4.core.Code code = 5;
   */
  code?: Code;

  /**
   * Display for the code
   *
   * @generated from field: google.fhir.r4.core.String display = 6;
   */
  display?: String;

  /**
   * canonical reference to an additional ConceptMap to use for mapping if
   * the source concept is unmapped
   *
   * @generated from field: google.fhir.r4.core.Canonical url = 7;
   */
  url?: Canonical;
};

/**
 * Describes the message google.fhir.r4.core.ConceptMap.Group.Unmapped.
 * Use `create(ConceptMap_Group_UnmappedSchema)` to create a new message.
 */
export const ConceptMap_Group_UnmappedSchema: GenMessage<ConceptMap_Group_Unmapped> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_concept_map, 0, 3, 1);

/**
 * provided | fixed | other-map
 *
 * @generated from message google.fhir.r4.core.ConceptMap.Group.Unmapped.ModeCode
 */
export type ConceptMap_Group_Unmapped_ModeCode = Message<"google.fhir.r4.core.ConceptMap.Group.Unmapped.ModeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ConceptMapGroupUnmappedModeCode.Value value = 1;
   */
  value: ConceptMapGroupUnmappedModeCode_Value;

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
 * Describes the message google.fhir.r4.core.ConceptMap.Group.Unmapped.ModeCode.
 * Use `create(ConceptMap_Group_Unmapped_ModeCodeSchema)` to create a new message.
 */
export const ConceptMap_Group_Unmapped_ModeCodeSchema: GenMessage<ConceptMap_Group_Unmapped_ModeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_concept_map, 0, 3, 1, 0);

