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
exports.SupplyDelivery_OccurrenceXSchema = exports.SupplyDelivery_SuppliedItem_ItemXSchema = exports.SupplyDelivery_SuppliedItemSchema = exports.SupplyDelivery_StatusCodeSchema = exports.SupplyDeliverySchema = exports.file_proto_google_fhir_proto_r4_core_resources_supply_delivery = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/supply_delivery.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_supply_delivery = (0, codegenv1_1.fileDesc)("Cj9wcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdXBwbHlfZGVsaXZlcnkucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUiqhEKDlN1cHBseURlbGl2ZXJ5EiMKAmlkGAEgASgLMhcuZ29vZ2xlLmZoaXIucjQuY29yZS5JZBInCgRtZXRhGAIgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5NZXRhEjAKDmltcGxpY2l0X3J1bGVzGAMgASgLMhguZ29vZ2xlLmZoaXIucjQuY29yZS5VcmkSKwoIbGFuZ3VhZ2UYBCABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGUSLAoEdGV4dBgFIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuTmFycmF0aXZlEicKCWNvbnRhaW5lZBgGIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSMQoJZXh0ZW5zaW9uGAggAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAkgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SMwoKaWRlbnRpZmllchgKIAMoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchJFCghiYXNlZF9vbhgLIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhPy//zCBg1TdXBwbHlSZXF1ZXN0ElMKB3BhcnRfb2YYDCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIi8v/8wgYOU3VwcGx5RGVsaXZlcnny//zCBghDb250cmFjdBI+CgZzdGF0dXMYDSABKAsyLi5nb29nbGUuZmhpci5yNC5jb3JlLlN1cHBseURlbGl2ZXJ5LlN0YXR1c0NvZGUSPgoHcGF0aWVudBgOIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg3y//zCBgdQYXRpZW50EjIKBHR5cGUYDyABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJHCg1zdXBwbGllZF9pdGVtGBAgASgLMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5TdXBwbHlEZWxpdmVyeS5TdXBwbGllZEl0ZW0SQwoKb2NjdXJyZW5jZRgRIAEoCzIvLmdvb2dsZS5maGlyLnI0LmNvcmUuU3VwcGx5RGVsaXZlcnkuT2NjdXJyZW5jZVgSbAoIc3VwcGxpZXIYEiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUI68v/8wgYMUHJhY3RpdGlvbmVy8v/8wgYQUHJhY3RpdGlvbmVyUm9sZfL//MIGDE9yZ2FuaXphdGlvbhJDCgtkZXN0aW5hdGlvbhgTIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghMb2NhdGlvbhJaCghyZWNlaXZlchgUIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQijy//zCBgxQcmFjdGl0aW9uZXLy//zCBhBQcmFjdGl0aW9uZXJSb2xlGp4CCgpTdGF0dXNDb2RlEkIKBXZhbHVlGAEgASgOMjMuZ29vZ2xlLmZoaXIucjQuY29yZS5TdXBwbHlEZWxpdmVyeVN0YXR1c0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpwivmDsgUyaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zdXBwbHlkZWxpdmVyeS1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrjAwoMU3VwcGxpZWRJdGVtEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SNQoIcXVhbnRpdHkYBCABKAsyIy5nb29nbGUuZmhpci5yNC5jb3JlLlNpbXBsZVF1YW50aXR5EkQKBGl0ZW0YBSABKAsyNi5nb29nbGUuZmhpci5yNC5jb3JlLlN1cHBseURlbGl2ZXJ5LlN1cHBsaWVkSXRlbS5JdGVtWBq9AQoFSXRlbVgSQAoQY29kZWFibGVfY29uY2VwdBgBIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0SAASYAoJcmVmZXJlbmNlGAIgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCK/L//MIGCk1lZGljYXRpb27y//zCBglTdWJzdGFuY2Xy//zCBgZEZXZpY2VIADoGoIOD6AYBQggKBmNob2ljZRqxAQoLT2NjdXJyZW5jZVgSMgoJZGF0ZV90aW1lGAEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZUgAEi0KBnBlcmlvZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuUGVyaW9kSAASLQoGdGltaW5nGAMgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5UaW1pbmdIADoGoIOD6AYBQggKBmNob2ljZTpCwJ/jtgUDsv7klwY2aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1N1cHBseURlbGl2ZXJ5SgQIBxAIQn8KF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaXGdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvc3VwcGx5X2RlbGl2ZXJ5X2dvX3Byb3RvmMawtQcEYgZwcm90bzM", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.SupplyDelivery.
 * Use `create(SupplyDeliverySchema)` to create a new message.
 */
exports.SupplyDeliverySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_supply_delivery, 0);
/**
 * Describes the message google.fhir.r4.core.SupplyDelivery.StatusCode.
 * Use `create(SupplyDelivery_StatusCodeSchema)` to create a new message.
 */
exports.SupplyDelivery_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_supply_delivery, 0, 0);
/**
 * Describes the message google.fhir.r4.core.SupplyDelivery.SuppliedItem.
 * Use `create(SupplyDelivery_SuppliedItemSchema)` to create a new message.
 */
exports.SupplyDelivery_SuppliedItemSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_supply_delivery, 0, 1);
/**
 * Describes the message google.fhir.r4.core.SupplyDelivery.SuppliedItem.ItemX.
 * Use `create(SupplyDelivery_SuppliedItem_ItemXSchema)` to create a new message.
 */
exports.SupplyDelivery_SuppliedItem_ItemXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_supply_delivery, 0, 1, 0);
/**
 * Describes the message google.fhir.r4.core.SupplyDelivery.OccurrenceX.
 * Use `create(SupplyDelivery_OccurrenceXSchema)` to create a new message.
 */
exports.SupplyDelivery_OccurrenceXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_supply_delivery, 0, 2);
