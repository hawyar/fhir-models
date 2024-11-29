"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationAffiliationSchema = exports.file_proto_google_fhir_proto_r4_core_resources_organization_affiliation = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/organization_affiliation.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_organization_affiliation = (0, codegenv1_1.fileDesc)("Ckhwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9vcmdhbml6YXRpb25fYWZmaWxpYXRpb24ucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUi0AkKF09yZ2FuaXphdGlvbkFmZmlsaWF0aW9uEiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchIsCgZhY3RpdmUYCyABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SKwoGcGVyaW9kGAwgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2QSSAoMb3JnYW5pemF0aW9uGA0gASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCEvL//MIGDE9yZ2FuaXphdGlvbhJWChpwYXJ0aWNpcGF0aW5nX29yZ2FuaXphdGlvbhgOIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24SQwoHbmV0d29yaxgPIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24SMgoEY29kZRgQIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjcKCXNwZWNpYWx0eRgRIAMoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkAKCGxvY2F0aW9uGBIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDvL//MIGCExvY2F0aW9uElMKEmhlYWx0aGNhcmVfc2VydmljZRgTIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhfy//zCBhFIZWFsdGhjYXJlU2VydmljZRIyCgd0ZWxlY29tGBQgAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0UG9pbnQSQAoIZW5kcG9pbnQYFSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIO8v/8wgYIRW5kcG9pbnQ6S8Cf47YFA7L+5JcGP2h0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9Pcmdhbml6YXRpb25BZmZpbGlhdGlvbkoECAcQCEKIAQoXY29tLmdvb2dsZS5maGlyLnI0LmNvcmVQAVplZ2l0aHViLmNvbS9nb29nbGUvZmhpci9nby9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9vcmdhbml6YXRpb25fYWZmaWxpYXRpb25fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.OrganizationAffiliation.
 * Use `create(OrganizationAffiliationSchema)` to create a new message.
 */
exports.OrganizationAffiliationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_organization_affiliation, 0);
