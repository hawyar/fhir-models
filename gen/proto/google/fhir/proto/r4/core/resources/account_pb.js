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
exports.Account_GuarantorSchema = exports.Account_CoverageSchema = exports.Account_StatusCodeSchema = exports.AccountSchema = exports.file_proto_google_fhir_proto_r4_core_resources_account = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/account.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_account = (0, codegenv1_1.fileDesc)("Cjdwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9hY2NvdW50LnByb3RvEhNnb29nbGUuZmhpci5yNC5jb3JlIr0QCgdBY2NvdW50EiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchI/CgZzdGF0dXMYCyABKAsyJy5nb29nbGUuZmhpci5yNC5jb3JlLkFjY291bnQuU3RhdHVzQ29kZUIG8NCH6wQBEjIKBHR5cGUYDCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIpCgRuYW1lGA0gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSqQEKB3N1YmplY3QYDiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUJ48v/8wgYHUGF0aWVudPL//MIGBkRldmljZfL//MIGDFByYWN0aXRpb25lcvL//MIGEFByYWN0aXRpb25lclJvbGXy//zCBghMb2NhdGlvbvL//MIGEUhlYWx0aGNhcmVTZXJ2aWNl8v/8wgYMT3JnYW5pemF0aW9uEjMKDnNlcnZpY2VfcGVyaW9kGA8gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2QSNwoIY292ZXJhZ2UYECADKAsyJS5nb29nbGUuZmhpci5yNC5jb3JlLkFjY291bnQuQ292ZXJhZ2USQQoFb3duZXIYESABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIS8v/8wgYMT3JnYW5pemF0aW9uEjAKC2Rlc2NyaXB0aW9uGBIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSOQoJZ3VhcmFudG9yGBMgAygLMiYuZ29vZ2xlLmZoaXIucjQuY29yZS5BY2NvdW50Lkd1YXJhbnRvchI+CgdwYXJ0X29mGBQgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCDfL//MIGB0FjY291bnQakAIKClN0YXR1c0NvZGUSOwoFdmFsdWUYASABKA4yLC5nb29nbGUuZmhpci5yNC5jb3JlLkFjY291bnRTdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aYr5g7IFK2h0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYWNjb3VudC1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqeAgoIQ292ZXJhZ2USJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJGCghjb3ZlcmFnZRgEIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhTw0IfrBAHy//zCBghDb3ZlcmFnZRIyCghwcmlvcml0eRgFIAEoCzIgLmdvb2dsZS5maGlyLnI0LmNvcmUuUG9zaXRpdmVJbnQa6AIKCUd1YXJhbnRvchInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEmcKBXBhcnR5GAQgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCOPDQh+sEAfL//MIGB1BhdGllbnTy//zCBg1SZWxhdGVkUGVyc29u8v/8wgYMT3JnYW5pemF0aW9uEi0KB29uX2hvbGQYBSABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SKwoGcGVyaW9kGAYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5QZXJpb2Q6O8Cf47YFA7L+5JcGL2h0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9BY2NvdW50SgQIBxAIQncKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaVGdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvYWNjb3VudF9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Account.
 * Use `create(AccountSchema)` to create a new message.
 */
exports.AccountSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_account, 0);
/**
 * Describes the message google.fhir.r4.core.Account.StatusCode.
 * Use `create(Account_StatusCodeSchema)` to create a new message.
 */
exports.Account_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_account, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Account.Coverage.
 * Use `create(Account_CoverageSchema)` to create a new message.
 */
exports.Account_CoverageSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_account, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Account.Guarantor.
 * Use `create(Account_GuarantorSchema)` to create a new message.
 */
exports.Account_GuarantorSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_account, 0, 2);
