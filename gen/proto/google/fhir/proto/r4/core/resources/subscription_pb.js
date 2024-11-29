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
exports.Subscription_Channel_PayloadCodeSchema = exports.Subscription_Channel_TypeCodeSchema = exports.Subscription_ChannelSchema = exports.Subscription_StatusCodeSchema = exports.SubscriptionSchema = exports.file_proto_google_fhir_proto_r4_core_resources_subscription = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var codes_pb_1 = require("../codes_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/subscription.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_subscription = (0, codegenv1_1.fileDesc)("Cjxwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzY3JpcHRpb24ucHJvdG8SE2dvb2dsZS5maGlyLnI0LmNvcmUigxAKDFN1YnNjcmlwdGlvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEkQKBnN0YXR1cxgKIAEoCzIsLmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic2NyaXB0aW9uLlN0YXR1c0NvZGVCBvDQh+sEARIyCgdjb250YWN0GAsgAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0UG9pbnQSKQoDZW5kGAwgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5JbnN0YW50EjMKBnJlYXNvbhgNIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nQgbw0IfrBAESNQoIY3JpdGVyaWEYDiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0IG8NCH6wQBEioKBWVycm9yGA8gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSQgoHY2hhbm5lbBgQIAEoCzIpLmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic2NyaXB0aW9uLkNoYW5uZWxCBvDQh+sEARqaAgoKU3RhdHVzQ29kZRJACgV2YWx1ZRgBIAEoDjIxLmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic2NyaXB0aW9uU3RhdHVzQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOm6K+YOyBTBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3N1YnNjcmlwdGlvbi1zdGF0dXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRqZBwoHQ2hhbm5lbBInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEkgKBHR5cGUYBCABKAsyMi5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnNjcmlwdGlvbi5DaGFubmVsLlR5cGVDb2RlQgbw0IfrBAESKgoIZW5kcG9pbnQYBSABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVybBJGCgdwYXlsb2FkGAYgASgLMjUuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzY3JpcHRpb24uQ2hhbm5lbC5QYXlsb2FkQ29kZRIrCgZoZWFkZXIYByADKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxqjAgoIVHlwZUNvZGUSRQoFdmFsdWUYASABKA4yNi5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnNjcmlwdGlvbkNoYW5uZWxUeXBlQ29kZS5WYWx1ZRInCgJpZBgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uOnSK+YOyBTZodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3N1YnNjcmlwdGlvbi1jaGFubmVsLXR5cGXAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZRrkAQoLUGF5bG9hZENvZGUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhINCgV2YWx1ZRgEIAEoCTpkivmDsgUmaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9taW1ldHlwZXPAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZUoECAEQAjpAwJ/jtgUDsv7klwY0aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1N1YnNjcmlwdGlvbkoECAcQCEJ8Chdjb20uZ29vZ2xlLmZoaXIucjQuY29yZVABWllnaXRodWIuY29tL2dvb2dsZS9maGlyL2dvL3Byb3RvL2dvb2dsZS9maGlyL3Byb3RvL3I0L2NvcmUvcmVzb3VyY2VzL3N1YnNjcmlwdGlvbl9nb19wcm90b5jGsLUHBGIGcHJvdG8z", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, codes_pb_1.file_proto_google_fhir_proto_r4_core_codes, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.Subscription.
 * Use `create(SubscriptionSchema)` to create a new message.
 */
exports.SubscriptionSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_subscription, 0);
/**
 * Describes the message google.fhir.r4.core.Subscription.StatusCode.
 * Use `create(Subscription_StatusCodeSchema)` to create a new message.
 */
exports.Subscription_StatusCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_subscription, 0, 0);
/**
 * Describes the message google.fhir.r4.core.Subscription.Channel.
 * Use `create(Subscription_ChannelSchema)` to create a new message.
 */
exports.Subscription_ChannelSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_subscription, 0, 1);
/**
 * Describes the message google.fhir.r4.core.Subscription.Channel.TypeCode.
 * Use `create(Subscription_Channel_TypeCodeSchema)` to create a new message.
 */
exports.Subscription_Channel_TypeCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_subscription, 0, 1, 0);
/**
 * Describes the message google.fhir.r4.core.Subscription.Channel.PayloadCode.
 * Use `create(Subscription_Channel_PayloadCodeSchema)` to create a new message.
 */
exports.Subscription_Channel_PayloadCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_subscription, 0, 1, 1);
