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
// @generated from file proto/google/fhir/proto/r4/core/resources/coverage_eligibility_response.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { ClaimProcessingCode_Value, EligibilityResponsePurposeCode_Value, FinancialResourceStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Boolean, Code, CodeableConcept, Date, DateTime, Extension, Id, Identifier, Meta, Money, Narrative, Period, Reference, String, UnsignedInt, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/coverage_eligibility_response.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response: GenFile = /*@__PURE__*/
  fileDesc("Ck1wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9jb3ZlcmFnZV9lbGlnaWJpbGl0eV9yZXNwb25zZS5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLWJwobQ292ZXJhZ2VFbGlnaWJpbGl0eVJlc3BvbnNlEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchJTCgZzdGF0dXMYCyABKAsyOy5nb29nbGUuZmhpci5yNC5jb3JlLkNvdmVyYWdlRWxpZ2liaWxpdHlSZXNwb25zZS5TdGF0dXNDb2RlQgbw0IfrBAESVQoHcHVycG9zZRgMIAMoCzI8Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ292ZXJhZ2VFbGlnaWJpbGl0eVJlc3BvbnNlLlB1cnBvc2VDb2RlQgbw0IfrBAESRAoHcGF0aWVudBgNIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhPw0IfrBAHy//zCBgdQYXRpZW50EkwKCHNlcnZpY2VkGA4gASgLMjouZ29vZ2xlLmZoaXIucjQuY29yZS5Db3ZlcmFnZUVsaWdpYmlsaXR5UmVzcG9uc2UuU2VydmljZWRYEjYKB2NyZWF0ZWQYDyABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVUaW1lQgbw0IfrBAESbQoJcmVxdWVzdG9yGBAgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCOvL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBgxPcmdhbml6YXRpb24SVwoHcmVxdWVzdBgRIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQibw0IfrBAHy//zCBhpDb3ZlcmFnZUVsaWdpYmlsaXR5UmVxdWVzdBJVCgdvdXRjb21lGBIgASgLMjwuZ29vZ2xlLmZoaXIucjQuY29yZS5Db3ZlcmFnZUVsaWdpYmlsaXR5UmVzcG9uc2UuT3V0Y29tZUNvZGVCBvDQh+sEARIwCgtkaXNwb3NpdGlvbhgTIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEkkKB2luc3VyZXIYFCABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIY8NCH6wQB8v/8wgYMT3JnYW5pemF0aW9uEk0KCWluc3VyYW5jZRgVIAMoCzI6Lmdvb2dsZS5maGlyLnI0LmNvcmUuQ292ZXJhZ2VFbGlnaWJpbGl0eVJlc3BvbnNlLkluc3VyYW5jZRIxCgxwcmVfYXV0aF9yZWYYFiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIyCgRmb3JtGBcgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSRgoFZXJyb3IYGCADKAsyNy5nb29nbGUuZmhpci5yNC5jb3JlLkNvdmVyYWdlRWxpZ2liaWxpdHlSZXNwb25zZS5FcnJvcnMalQIKClN0YXR1c0NvZGUSRQoFdmFsdWUYASABKA4yNi5nb29nbGUuZmhpci5yNC5jb3JlLkZpbmFuY2lhbFJlc291cmNlU3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOmSK+YOyBSZodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2ZtLXN0YXR1c8Cf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGqsCCgtQdXJwb3NlQ29kZRJICgV2YWx1ZRgBIAEoDjI5Lmdvb2dsZS5maGlyLnI0LmNvcmUuRWxpZ2liaWxpdHlSZXNwb25zZVB1cnBvc2VDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246dor5g7IFOGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZWxpZ2liaWxpdHlyZXNwb25zZS1wdXJwb3NlwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUadwoJU2VydmljZWRYEikKBGRhdGUYASABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkRhdGVIABItCgZwZXJpb2QYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlBlcmlvZEgAOgagg4PoBgFCCAoGY2hvaWNlGpcCCgtPdXRjb21lQ29kZRI9CgV2YWx1ZRgBIAEoDjIuLmdvb2dsZS5maGlyLnI0LmNvcmUuQ2xhaW1Qcm9jZXNzaW5nQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOm2K+YOyBS9odHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3JlbWl0dGFuY2Utb3V0Y29tZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGu0RCglJbnN1cmFuY2USJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJGCghjb3ZlcmFnZRgEIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhTw0IfrBAHy//zCBghDb3ZlcmFnZRItCgdpbmZvcmNlGAUgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuEjMKDmJlbmVmaXRfcGVyaW9kGAYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2QSTgoEaXRlbRgHIAMoCzJALmdvb2dsZS5maGlyLnI0LmNvcmUuQ292ZXJhZ2VFbGlnaWJpbGl0eVJlc3BvbnNlLkluc3VyYW5jZS5JdGVtcxrLDgoFSXRlbXMSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI2CghjYXRlZ29yeRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkAKEnByb2R1Y3Rfb3Jfc2VydmljZRgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjYKCG1vZGlmaWVyGAYgAygLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSWgoIcHJvdmlkZXIYByABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIo8v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZRIuCghleGNsdWRlZBgIIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIpCgRuYW1lGAkgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMAoLZGVzY3JpcHRpb24YCiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxI1CgduZXR3b3JrGAsgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSMgoEdW5pdBgMIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjIKBHRlcm0YDSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJZCgdiZW5lZml0GA4gAygLMkguZ29vZ2xlLmZoaXIucjQuY29yZS5Db3ZlcmFnZUVsaWdpYmlsaXR5UmVzcG9uc2UuSW5zdXJhbmNlLkl0ZW1zLkJlbmVmaXQSPAoWYXV0aG9yaXphdGlvbl9yZXF1aXJlZBgPIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhJGChhhdXRob3JpemF0aW9uX3N1cHBvcnRpbmcYECADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIzChFhdXRob3JpemF0aW9uX3VybBgRIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpGqIGCgdCZW5lZml0EicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoEdHlwZRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0Qgbw0IfrBAESYgoHYWxsb3dlZBgFIAEoCzJRLmdvb2dsZS5maGlyLnI0LmNvcmUuQ292ZXJhZ2VFbGlnaWJpbGl0eVJlc3BvbnNlLkluc3VyYW5jZS5JdGVtcy5CZW5lZml0LkFsbG93ZWRYElwKBHVzZWQYBiABKAsyTi5nb29nbGUuZmhpci5yNC5jb3JlLkNvdmVyYWdlRWxpZ2liaWxpdHlSZXNwb25zZS5JbnN1cmFuY2UuSXRlbXMuQmVuZWZpdC5Vc2VkWBrAAQoIQWxsb3dlZFgSOAoMdW5zaWduZWRfaW50GAEgASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5VbnNpZ25lZEludEgAEjsKDHN0cmluZ192YWx1ZRgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZxIrCgVtb25leRgDIAEoCzIaLmdvb2dsZS5maGlyLnI0LmNvcmUuTW9uZXlIADoGoIOD6AYBQggKBmNob2ljZRq9AQoFVXNlZFgSOAoMdW5zaWduZWRfaW50GAEgASgLMiAuZ29vZ2xlLmZoaXIucjQuY29yZS5VbnNpZ25lZEludEgAEjsKDHN0cmluZ192YWx1ZRgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZxIrCgVtb25leRgDIAEoCzIaLmdvb2dsZS5maGlyLnI0LmNvcmUuTW9uZXlIADoGoIOD6AYBQggKBmNob2ljZTo1moaToAgvY2F0ZWdvcnkuZXhpc3RzKCkgeG9yIHByb2R1Y3RPclNlcnZpY2UuZXhpc3RzKCka3AEKBkVycm9ycxInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKBGNvZGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEIG8NCH6wQBOk/An+O2BQOy/uSXBkNodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vQ292ZXJhZ2VFbGlnaWJpbGl0eVJlc3BvbnNlSgQIBxAIQo0BChdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWmpnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL2NvdmVyYWdlX2VsaWdpYmlsaXR5X3Jlc3BvbnNlX2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for CoverageEligibilityResponse.
 * CoverageEligibilityResponse resource.
 * See http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse
 *
 * @generated from message google.fhir.r4.core.CoverageEligibilityResponse
 */
export type CoverageEligibilityResponse = Message<"google.fhir.r4.core.CoverageEligibilityResponse"> & {
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
   * Business Identifier for coverage eligiblity request
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * @generated from field: google.fhir.r4.core.CoverageEligibilityResponse.StatusCode status = 11;
   */
  status?: CoverageEligibilityResponse_StatusCode;

  /**
   * @generated from field: repeated google.fhir.r4.core.CoverageEligibilityResponse.PurposeCode purpose = 12;
   */
  purpose: CoverageEligibilityResponse_PurposeCode[];

  /**
   * Intended recipient of products and services
   *
   * @generated from field: google.fhir.r4.core.Reference patient = 13;
   */
  patient?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.CoverageEligibilityResponse.ServicedX serviced = 14;
   */
  serviced?: CoverageEligibilityResponse_ServicedX;

  /**
   * Response creation date
   *
   * @generated from field: google.fhir.r4.core.DateTime created = 15;
   */
  created?: DateTime;

  /**
   * Party responsible for the request
   *
   * @generated from field: google.fhir.r4.core.Reference requestor = 16;
   */
  requestor?: Reference;

  /**
   * Eligibility request reference
   *
   * @generated from field: google.fhir.r4.core.Reference request = 17;
   */
  request?: Reference;

  /**
   * @generated from field: google.fhir.r4.core.CoverageEligibilityResponse.OutcomeCode outcome = 18;
   */
  outcome?: CoverageEligibilityResponse_OutcomeCode;

  /**
   * Disposition Message
   *
   * @generated from field: google.fhir.r4.core.String disposition = 19;
   */
  disposition?: String;

  /**
   * Coverage issuer
   *
   * @generated from field: google.fhir.r4.core.Reference insurer = 20;
   */
  insurer?: Reference;

  /**
   * @generated from field: repeated google.fhir.r4.core.CoverageEligibilityResponse.Insurance insurance = 21;
   */
  insurance: CoverageEligibilityResponse_Insurance[];

  /**
   * Preauthorization reference
   *
   * @generated from field: google.fhir.r4.core.String pre_auth_ref = 22;
   */
  preAuthRef?: String;

  /**
   * Printed form identifier
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept form = 23;
   */
  form?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.CoverageEligibilityResponse.Errors error = 24;
   */
  error: CoverageEligibilityResponse_Errors[];
};

/**
 * Describes the message google.fhir.r4.core.CoverageEligibilityResponse.
 * Use `create(CoverageEligibilityResponseSchema)` to create a new message.
 */
export const CoverageEligibilityResponseSchema: GenMessage<CoverageEligibilityResponse> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response, 0);

/**
 * active | cancelled | draft | entered-in-error
 *
 * @generated from message google.fhir.r4.core.CoverageEligibilityResponse.StatusCode
 */
export type CoverageEligibilityResponse_StatusCode = Message<"google.fhir.r4.core.CoverageEligibilityResponse.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.FinancialResourceStatusCode.Value value = 1;
   */
  value: FinancialResourceStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.CoverageEligibilityResponse.StatusCode.
 * Use `create(CoverageEligibilityResponse_StatusCodeSchema)` to create a new message.
 */
export const CoverageEligibilityResponse_StatusCodeSchema: GenMessage<CoverageEligibilityResponse_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response, 0, 0);

/**
 * auth-requirements | benefits | discovery | validation
 *
 * @generated from message google.fhir.r4.core.CoverageEligibilityResponse.PurposeCode
 */
export type CoverageEligibilityResponse_PurposeCode = Message<"google.fhir.r4.core.CoverageEligibilityResponse.PurposeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.EligibilityResponsePurposeCode.Value value = 1;
   */
  value: EligibilityResponsePurposeCode_Value;

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
 * Describes the message google.fhir.r4.core.CoverageEligibilityResponse.PurposeCode.
 * Use `create(CoverageEligibilityResponse_PurposeCodeSchema)` to create a new message.
 */
export const CoverageEligibilityResponse_PurposeCodeSchema: GenMessage<CoverageEligibilityResponse_PurposeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response, 0, 1);

/**
 * Estimated date or dates of service
 *
 * @generated from message google.fhir.r4.core.CoverageEligibilityResponse.ServicedX
 */
export type CoverageEligibilityResponse_ServicedX = Message<"google.fhir.r4.core.CoverageEligibilityResponse.ServicedX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.CoverageEligibilityResponse.ServicedX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.Date date = 1;
     */
    value: Date;
    case: "date";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Period period = 2;
     */
    value: Period;
    case: "period";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.CoverageEligibilityResponse.ServicedX.
 * Use `create(CoverageEligibilityResponse_ServicedXSchema)` to create a new message.
 */
export const CoverageEligibilityResponse_ServicedXSchema: GenMessage<CoverageEligibilityResponse_ServicedX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response, 0, 2);

/**
 * queued | complete | error | partial
 *
 * @generated from message google.fhir.r4.core.CoverageEligibilityResponse.OutcomeCode
 */
export type CoverageEligibilityResponse_OutcomeCode = Message<"google.fhir.r4.core.CoverageEligibilityResponse.OutcomeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.ClaimProcessingCode.Value value = 1;
   */
  value: ClaimProcessingCode_Value;

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
 * Describes the message google.fhir.r4.core.CoverageEligibilityResponse.OutcomeCode.
 * Use `create(CoverageEligibilityResponse_OutcomeCodeSchema)` to create a new message.
 */
export const CoverageEligibilityResponse_OutcomeCodeSchema: GenMessage<CoverageEligibilityResponse_OutcomeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response, 0, 3);

/**
 * Patient insurance information
 *
 * @generated from message google.fhir.r4.core.CoverageEligibilityResponse.Insurance
 */
export type CoverageEligibilityResponse_Insurance = Message<"google.fhir.r4.core.CoverageEligibilityResponse.Insurance"> & {
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
   * Insurance information
   *
   * @generated from field: google.fhir.r4.core.Reference coverage = 4;
   */
  coverage?: Reference;

  /**
   * Coverage inforce indicator
   *
   * @generated from field: google.fhir.r4.core.Boolean inforce = 5;
   */
  inforce?: Boolean;

  /**
   * When the benefits are applicable
   *
   * @generated from field: google.fhir.r4.core.Period benefit_period = 6;
   */
  benefitPeriod?: Period;

  /**
   * @generated from field: repeated google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items item = 7;
   */
  item: CoverageEligibilityResponse_Insurance_Items[];
};

/**
 * Describes the message google.fhir.r4.core.CoverageEligibilityResponse.Insurance.
 * Use `create(CoverageEligibilityResponse_InsuranceSchema)` to create a new message.
 */
export const CoverageEligibilityResponse_InsuranceSchema: GenMessage<CoverageEligibilityResponse_Insurance> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response, 0, 4);

/**
 * Benefits and authorization details
 *
 * @generated from message google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items
 */
export type CoverageEligibilityResponse_Insurance_Items = Message<"google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items"> & {
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
   * Benefit classification
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept category = 4;
   */
  category?: CodeableConcept;

  /**
   * Billing, service, product, or drug code
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept product_or_service = 5;
   */
  productOrService?: CodeableConcept;

  /**
   * Product or service billing modifiers
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept modifier = 6;
   */
  modifier: CodeableConcept[];

  /**
   * Performing practitioner
   *
   * @generated from field: google.fhir.r4.core.Reference provider = 7;
   */
  provider?: Reference;

  /**
   * Excluded from the plan
   *
   * @generated from field: google.fhir.r4.core.Boolean excluded = 8;
   */
  excluded?: Boolean;

  /**
   * Short name for the benefit
   *
   * @generated from field: google.fhir.r4.core.String name = 9;
   */
  name?: String;

  /**
   * Description of the benefit or services covered
   *
   * @generated from field: google.fhir.r4.core.String description = 10;
   */
  description?: String;

  /**
   * In or out of network
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept network = 11;
   */
  network?: CodeableConcept;

  /**
   * Individual or family
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept unit = 12;
   */
  unit?: CodeableConcept;

  /**
   * Annual or lifetime
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept term = 13;
   */
  term?: CodeableConcept;

  /**
   * @generated from field: repeated google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit benefit = 14;
   */
  benefit: CoverageEligibilityResponse_Insurance_Items_Benefit[];

  /**
   * Authorization required flag
   *
   * @generated from field: google.fhir.r4.core.Boolean authorization_required = 15;
   */
  authorizationRequired?: Boolean;

  /**
   * Type of required supporting materials
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept authorization_supporting = 16;
   */
  authorizationSupporting: CodeableConcept[];

  /**
   * Preauthorization requirements endpoint
   *
   * @generated from field: google.fhir.r4.core.Uri authorization_url = 17;
   */
  authorizationUrl?: Uri;
};

/**
 * Describes the message google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.
 * Use `create(CoverageEligibilityResponse_Insurance_ItemsSchema)` to create a new message.
 */
export const CoverageEligibilityResponse_Insurance_ItemsSchema: GenMessage<CoverageEligibilityResponse_Insurance_Items> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response, 0, 4, 0);

/**
 * Benefit Summary
 *
 * @generated from message google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit
 */
export type CoverageEligibilityResponse_Insurance_Items_Benefit = Message<"google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit"> & {
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
   * Benefit classification
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept type = 4;
   */
  type?: CodeableConcept;

  /**
   * @generated from field: google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit.AllowedX allowed = 5;
   */
  allowed?: CoverageEligibilityResponse_Insurance_Items_Benefit_AllowedX;

  /**
   * @generated from field: google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit.UsedX used = 6;
   */
  used?: CoverageEligibilityResponse_Insurance_Items_Benefit_UsedX;
};

/**
 * Describes the message google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit.
 * Use `create(CoverageEligibilityResponse_Insurance_Items_BenefitSchema)` to create a new message.
 */
export const CoverageEligibilityResponse_Insurance_Items_BenefitSchema: GenMessage<CoverageEligibilityResponse_Insurance_Items_Benefit> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response, 0, 4, 0, 0);

/**
 * Benefits allowed
 *
 * @generated from message google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit.AllowedX
 */
export type CoverageEligibilityResponse_Insurance_Items_Benefit_AllowedX = Message<"google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit.AllowedX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit.AllowedX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.UnsignedInt unsigned_int = 1;
     */
    value: UnsignedInt;
    case: "unsignedInt";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 2 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Money money = 3;
     */
    value: Money;
    case: "money";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit.AllowedX.
 * Use `create(CoverageEligibilityResponse_Insurance_Items_Benefit_AllowedXSchema)` to create a new message.
 */
export const CoverageEligibilityResponse_Insurance_Items_Benefit_AllowedXSchema: GenMessage<CoverageEligibilityResponse_Insurance_Items_Benefit_AllowedX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response, 0, 4, 0, 0, 0);

/**
 * Benefits used
 *
 * @generated from message google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit.UsedX
 */
export type CoverageEligibilityResponse_Insurance_Items_Benefit_UsedX = Message<"google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit.UsedX"> & {
  /**
   * @generated from oneof google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit.UsedX.choice
   */
  choice: {
    /**
     * @generated from field: google.fhir.r4.core.UnsignedInt unsigned_int = 1;
     */
    value: UnsignedInt;
    case: "unsignedInt";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.String string_value = 2 [json_name = "string"];
     */
    value: String;
    case: "stringValue";
  } | {
    /**
     * @generated from field: google.fhir.r4.core.Money money = 3;
     */
    value: Money;
    case: "money";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.fhir.r4.core.CoverageEligibilityResponse.Insurance.Items.Benefit.UsedX.
 * Use `create(CoverageEligibilityResponse_Insurance_Items_Benefit_UsedXSchema)` to create a new message.
 */
export const CoverageEligibilityResponse_Insurance_Items_Benefit_UsedXSchema: GenMessage<CoverageEligibilityResponse_Insurance_Items_Benefit_UsedX> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response, 0, 4, 0, 0, 1);

/**
 * Processing errors
 *
 * @generated from message google.fhir.r4.core.CoverageEligibilityResponse.Errors
 */
export type CoverageEligibilityResponse_Errors = Message<"google.fhir.r4.core.CoverageEligibilityResponse.Errors"> & {
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
   * Error code detailing processing issues
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept code = 4;
   */
  code?: CodeableConcept;
};

/**
 * Describes the message google.fhir.r4.core.CoverageEligibilityResponse.Errors.
 * Use `create(CoverageEligibilityResponse_ErrorsSchema)` to create a new message.
 */
export const CoverageEligibilityResponse_ErrorsSchema: GenMessage<CoverageEligibilityResponse_Errors> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_coverage_eligibility_response, 0, 5);

