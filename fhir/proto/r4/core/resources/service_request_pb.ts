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
// @generated from file proto/google/fhir/proto/r4/core/resources/service_request.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { RequestIntentCode_Value, RequestPriorityCode_Value, RequestStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Annotation, Boolean, Canonical, Code, CodeableConcept, DateTime, Extension, Id, Identifier, Meta, Narrative, Period, Quantity, Range, Ratio, Reference, String, Timing, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/service_request.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_service_request: GenFile = /*@__PURE__*/
  fileDesc("Cj9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zZXJ2aWNlX3JlcXVlc3QucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUi1CEKDlNlcnZpY2VSZXF1ZXN0EiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI+ChZpbnN0YW50aWF0ZXNfY2Fub25pY2FsGAsgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5DYW5vbmljYWwSMgoQaW5zdGFudGlhdGVzX3VyaRgMIAMoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEmsKCGJhc2VkX29uGA0gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCOfL//MIGCENhcmVQbGFu8v/8wgYOU2VydmljZVJlcXVlc3Ty//zCBhFNZWRpY2F0aW9uUmVxdWVzdBJGCghyZXBsYWNlcxgOIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhTy//zCBg5TZXJ2aWNlUmVxdWVzdBI0CgtyZXF1aXNpdGlvbhgPIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchJGCgZzdGF0dXMYECABKAsyLi5nb29nbGUuZmhpci5yNC5jb3JlLlNlcnZpY2VSZXF1ZXN0LlN0YXR1c0NvZGVCBvDQh+sEARJGCgZpbnRlbnQYESABKAsyLi5nb29nbGUuZmhpci5yNC5jb3JlLlNlcnZpY2VSZXF1ZXN0LkludGVudENvZGVCBvDQh+sEARI2CghjYXRlZ29yeRgSIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkIKCHByaW9yaXR5GBMgASgLMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5TZXJ2aWNlUmVxdWVzdC5Qcmlvcml0eUNvZGUSNAoOZG9fbm90X3BlcmZvcm0YFCABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SMgoEY29kZRgVIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjoKDG9yZGVyX2RldGFpbBgWIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ej8KCHF1YW50aXR5GBcgASgLMi0uZ29vZ2xlLmZoaXIucjQuY29yZS5TZXJ2aWNlUmVxdWVzdC5RdWFudGl0eVgSaQoHc3ViamVjdBgYIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQjjw0IfrBAHy//zCBgdQYXRpZW508v/8wgYFR3JvdXDy//zCBghMb2NhdGlvbvL//MIGBkRldmljZRJCCgllbmNvdW50ZXIYGSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIP8v/8wgYJRW5jb3VudGVyEkMKCm9jY3VycmVuY2UYGiABKAsyLy5nb29nbGUuZmhpci5yNC5jb3JlLlNlcnZpY2VSZXF1ZXN0Lk9jY3VycmVuY2VYEkAKCWFzX25lZWRlZBgbIAEoCzItLmdvb2dsZS5maGlyLnI0LmNvcmUuU2VydmljZVJlcXVlc3QuQXNOZWVkZWRYEjIKC2F1dGhvcmVkX29uGBwgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRKZAQoJcmVxdWVzdGVyGB0gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCZvL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb27y//zCBgdQYXRpZW508v/8wgYNUmVsYXRlZFBlcnNvbvL//MIGBkRldmljZRI8Cg5wZXJmb3JtZXJfdHlwZRgeIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Er8BCglwZXJmb3JtZXIYHyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUKLAfL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb27y//zCBghDYXJlVGVhbfL//MIGEUhlYWx0aGNhcmVTZXJ2aWNl8v/8wgYHUGF0aWVudPL//MIGBkRldmljZfL//MIGDVJlbGF0ZWRQZXJzb24SOwoNbG9jYXRpb25fY29kZRggIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkoKEmxvY2F0aW9uX3JlZmVyZW5jZRghIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghMb2NhdGlvbhI5CgtyZWFzb25fY29kZRgiIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EocBChByZWFzb25fcmVmZXJlbmNlGCMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCTfL//MIGCUNvbmRpdGlvbvL//MIGC09ic2VydmF0aW9u8v/8wgYQRGlhZ25vc3RpY1JlcG9ydPL//MIGEURvY3VtZW50UmVmZXJlbmNlElQKCWluc3VyYW5jZRgkIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQiHy//zCBghDb3ZlcmFnZfL//MIGDUNsYWltUmVzcG9uc2USRwoPc3VwcG9ydGluZ19pbmZvGCUgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFJlc291cmNlEkAKCHNwZWNpbWVuGCYgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCFNwZWNpbWVuEjcKCWJvZHlfc2l0ZRgnIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Ei0KBG5vdGUYKCADKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLkFubm90YXRpb24SOAoTcGF0aWVudF9pbnN0cnVjdGlvbhgpIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEkoKEHJlbGV2YW50X2hpc3RvcnkYKiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIQ8v/8wgYKUHJvdmVuYW5jZRqQAgoKU3RhdHVzQ29kZRI7CgV2YWx1ZRgBIAEoDjIsLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVxdWVzdFN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjppivmDsgUraHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZXF1ZXN0LXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGpACCgpJbnRlbnRDb2RlEjsKBXZhbHVlGAEgASgOMiwuZ29vZ2xlLmZoaXIucjQuY29yZS5SZXF1ZXN0SW50ZW50Q29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmmK+YOyBStodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3JlcXVlc3QtaW50ZW50wJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUalgIKDFByaW9yaXR5Q29kZRI9CgV2YWx1ZRgBIAEoDjIuLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVxdWVzdFByaW9yaXR5Q29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmuK+YOyBS1odHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3JlcXVlc3QtcHJpb3JpdHnAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqqAQoJUXVhbnRpdHlYEjEKCHF1YW50aXR5GAEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eUgAEisKBXJhdGlvGAIgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYXRpb0gAEisKBXJhbmdlGAMgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYW5nZUgAOgagg4PoBgFCCAoGY2hvaWNlGrEBCgtPY2N1cnJlbmNlWBIyCglkYXRlX3RpbWUYASABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lSAASLQoGcGVyaW9kGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2RIABItCgZ0aW1pbmcYAyABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlRpbWluZ0gAOgagg4PoBgFCCAoGY2hvaWNlGpABCglBc05lZWRlZFgSLwoHYm9vbGVhbhgBIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbkgAEkAKEGNvZGVhYmxlX2NvbmNlcHQYAiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEgAOgagg4PoBgFCCAoGY2hvaWNlOmzAn+O2BQOy/uSXBjZodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vU2VydmljZVJlcXVlc3SahpOgCCRvcmRlckRldGFpbC5lbXB0eSgpIG9yIGNvZGUuZXhpc3RzKClKBAgHEAhCfwoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVpcZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zZXJ2aWNlX3JlcXVlc3RfZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for ServiceRequest.
 * A request for a service to be performed.
 * See http://hl7.org/fhir/StructureDefinition/ServiceRequest
 *
 * @generated from message google.fhir.r4.core.ServiceRequest
 */
export type ServiceRequest = Message<"google.fhir.r4.core.ServiceRequest"> & {
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
   * Identifiers assigned to this order
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * Instantiates FHIR protocol or definition
   *
   * @generated from field: repeated google.fhir.r4.core.Canonical instantiates_canonical = 11;
   */
  instantiatesCanonical: Canonical[];

  /**
   * Instantiates external protocol or definition
   *
   * @generated from field: repeated google.fhir.r4.core.Uri instantiates_uri = 12;
   */
  instantiatesUri: Uri[];

  /**
   * What request fulfills
   *
   * @generated from field: repeated google.fhir.r4.core.Reference based_on = 13;
   */
  basedOn: Reference[];

  /**
   * What request replaces
   *
   * @generated from field: repeated google.fhir.r4.core.Reference replaces = 14;
   */
  replaces: Reference[];

  /**
   * Composite Request ID
   *
   * @generated from field: google.fhir.r4.core.Identifier requisition = 15;
   */
  requisition?: Identifier;

  /**
   * @generated from field: google.fhir.r4.core.ServiceRequest.StatusCode status = 16;
   */
  status?: ServiceRequest_StatusCode;

  /**
   * @generated from field: google.fhir.r4.core.ServiceRequest.IntentCode intent = 17;
   */
  intent?: ServiceRequest_IntentCode;

  /**
   * Classification of service
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept category = 18;
   */
  category: CodeableConcept[];

  /**
   * @generated from field: google.fhir.r4.core.ServiceRequest.PriorityCode priority = 19;
   */
  priority?: ServiceRequest_PriorityCode;

  /**
   * True if service/procedure should not be performed
   *
   * @generated from field: google.fhir.r4.core.Boolean do_not_perform = 20;
   */
  doNotPerform?: Boolean;

  /**
   * What is being requested/ordered
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 21;
   */
  code?: CodeableConcept;

  /**
   * Additional order information
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept order_detail = 22;
   */
  orderDetail: CodeableConcept[];

  /**
   * @generated from field: google.fhir.r4.core.ServiceRequest.QuantityX quantity = 23;
   */
  quantity?: ServiceRequest_QuantityX;

  /**
   * Individual or Entity the service is ordered for
   *
   * @generated from field: google.fhir.r4.core.Reference subject = 24;
   */
  subject?: Reference;

  /**
   * Encounter in which the request was created
   *
   * @generated from field: google.fhir.r4.core.Reference encounter = 25;
   */
  encounter?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.ServiceRequest.OccurrenceX occurrence = 26;
   */
  occurrence?: ServiceRequest_OccurrenceX;

  /**
   * @generated from field: google.fhir.r4.core.ServiceRequest.AsNeededX as_needed = 27;
   */
  asNeeded?: ServiceRequest_AsNeededX;

  /**
   * Date request signed
   *
   * @generated from field: google.fhir.r4.core.DateTime authored_on = 28;
   */
  authoredOn?: DateTime;

  /**
   * Who/what is requesting service
   *
   * @generated from field: google.fhir.r4.core.Reference requester = 29;
   */
  requester?: Reference;

  /**
   * Performer role
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept performer_type = 30;
   */
  performerType?: CodeableConcept;

  /**
   * Requested performer
   *
   * @generated from field: repeated google.fhir.r4.core.Reference performer = 31;
   */
  performer: Reference[];

  /**
   * Requested location
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept location_code = 32;
   */
  locationCode: CodeableConcept[];

  /**
   * Requested location
   *
   * @generated from field: repeated google.fhir.r4.core.Reference location_reference = 33;
   */
  locationReference: Reference[];

  /**
   * Explanation/Justification for procedure or service
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept reason_code = 34;
   */
  reasonCode: CodeableConcept[];

  /**
   * Explanation/Justification for service or service
   *
   * @generated from field: repeated google.fhir.r4.core.Reference reason_reference = 35;
   */
  reasonReference: Reference[];

  /**
   * Associated insurance coverage
   *
   * @generated from field: repeated google.fhir.r4.core.Reference insurance = 36;
   */
  insurance: Reference[];

  /**
   * Additional clinical information
   *
   * @generated from field: repeated google.fhir.r4.core.Reference supporting_info = 37;
   */
  supportingInfo: Reference[];

  /**
   * Procedure Samples
   *
   * @generated from field: repeated google.fhir.r4.core.Reference specimen = 38;
   */
  specimen: Reference[];

  /**
   * Location on Body
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept body_site = 39;
   */
  bodySite: CodeableConcept[];

  /**
   * Comments
   *
   * @generated from field: repeated google.fhir.r4.core.Annotation note = 40;
   */
  note: Annotation[];

  /**
   * Patient or consumer-oriented instructions
   *
   * @generated from field: google.fhir.r4.core.String patient_instruction = 41;
   */
  patientInstruction?: String;

  /**
   * Request provenance
   *
   * @generated from field: repeated google.fhir.r4.core.Reference relevant_history = 42;
   */
  relevantHistory: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.ServiceRequest.
 * Use `create(ServiceRequestSchema)` to create a new message.
 */
export const ServiceRequestSchema: GenMessage<ServiceRequest> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_service_request, 0);

/**
 * draft | active | on-hold | revoked | completed | entered-in-error | unknown
 *
 * @generated from message google.fhir.r4.core.ServiceRequest.StatusCode
 */
export type ServiceRequest_StatusCode = Message<"google.fhir.r4.core.ServiceRequest.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.RequestStatusCode.Value value = 1;
   */
  value: RequestStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.ServiceRequest.StatusCode.
 * Use `create(ServiceRequest_StatusCodeSchema)` to create a new message.
 */
export const ServiceRequest_StatusCodeSchema: GenMessage<ServiceRequest_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 0);

/**
 * proposal | plan | directive | order | original-order | reflex-order |
 * filler-order | instance-order | option
 *
 * @generated from message google.fhir.r4.core.ServiceRequest.IntentCode
 */
export type ServiceRequest_IntentCode = Message<"google.fhir.r4.core.ServiceRequest.IntentCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.RequestIntentCode.Value value = 1;
   */
  value: RequestIntentCode_Value;

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
 * Describes the message google.fhir.r4.core.ServiceRequest.IntentCode.
 * Use `create(ServiceRequest_IntentCodeSchema)` to create a new message.
 */
export const ServiceRequest_IntentCodeSchema: GenMessage<ServiceRequest_IntentCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 1);

/**
 * routine | urgent | asap | stat
 *
 * @generated from message google.fhir.r4.core.ServiceRequest.PriorityCode
 */
export type ServiceRequest_PriorityCode = Message<"google.fhir.r4.core.ServiceRequest.PriorityCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.RequestPriorityCode.Value value = 1;
   */
  value: RequestPriorityCode_Value;

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
 * Describes the message google.fhir.r4.core.ServiceRequest.PriorityCode.
 * Use `create(ServiceRequest_PriorityCodeSchema)` to create a new message.
 */
export const ServiceRequest_PriorityCodeSchema: GenMessage<ServiceRequest_PriorityCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 2);

/**
 * Service amount
 *
 * @generated from message google.fhir.r4.core.ServiceRequest.QuantityX
 */
export type ServiceRequest_QuantityX = Message<"google.fhir.r4.core.ServiceRequest.QuantityX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.ServiceRequest.QuantityX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Quantity quantity = 1;
     */
    value: Quantity;
    case: "quantity";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Ratio ratio = 2;
     */
    value: Ratio;
    case: "ratio";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Range range = 3;
     */
    value: Range;
    case: "range";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.ServiceRequest.QuantityX.
 * Use `create(ServiceRequest_QuantityXSchema)` to create a new message.
 */
export const ServiceRequest_QuantityXSchema: GenMessage<ServiceRequest_QuantityX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 3);

/**
 * When service should occur
 *
 * @generated from message google.fhir.r4.core.ServiceRequest.OccurrenceX
 */
export type ServiceRequest_OccurrenceX = Message<"google.fhir.r4.core.ServiceRequest.OccurrenceX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.ServiceRequest.OccurrenceX.choice
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
 * Describes the message google.fhir.r4.core.ServiceRequest.OccurrenceX.
 * Use `create(ServiceRequest_OccurrenceXSchema)` to create a new message.
 */
export const ServiceRequest_OccurrenceXSchema: GenMessage<ServiceRequest_OccurrenceX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 4);

/**
 * Preconditions for service
 *
 * @generated from message google.fhir.r4.core.ServiceRequest.AsNeededX
 */
export type ServiceRequest_AsNeededX = Message<"google.fhir.r4.core.ServiceRequest.AsNeededX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.ServiceRequest.AsNeededX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Boolean boolean = 1;
     */
    value: Boolean;
    case: "boolean";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.CodeableConcept codeable_concept = 2;
     */
    value: CodeableConcept;
    case: "codeableConcept";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.ServiceRequest.AsNeededX.
 * Use `create(ServiceRequest_AsNeededXSchema)` to create a new message.
 */
export const ServiceRequest_AsNeededXSchema: GenMessage<ServiceRequest_AsNeededX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_service_request, 0, 5);
