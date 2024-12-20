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
// @generated from file proto/google/fhir/proto/r4/core/resources/location.proto (package google.fhir.r4.core, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_proto_google_fhir_proto_annotations } from "../../../annotations_pb";
import type { DaysOfWeekCode_Value, LocationModeCode_Value, LocationStatusCode_Value } from "../codes_pb";
import { file_proto_google_fhir_proto_r4_core_codes } from "../codes_pb";
import type { Address, Boolean, Code, CodeableConcept, Coding, ContactPoint, Decimal, Extension, Id, Identifier, Meta, Narrative, Reference, String, Time, Uri } from "../datatypes_pb";
import { file_proto_google_fhir_proto_r4_core_datatypes } from "../datatypes_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/location.proto.
 */
export const file_proto_google_fhir_proto_r4_core_resources_location: GenFile = /*@__PURE__*/
  fileDesc("Cjhwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9sb2NhdGlvbi5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSKlFwoITG9jYXRpb24SIwoCaWQYASABKAsyFy5nb29nbGUuZmhpci5yNC5jb3JlLklkEicKBG1ldGEYAiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLk1ldGESMAoOaW1wbGljaXRfcnVsZXMYAyABKAsyGC5nb29nbGUuZmhpci5yNC5jb3JlLlVyaRIrCghsYW5ndWFnZRgEIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZRIsCgR0ZXh0GAUgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5OYXJyYXRpdmUSJwoJY29udGFpbmVkGAYgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIxCglleHRlbnNpb24YCCADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YCSADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAogAygLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEjgKBnN0YXR1cxgLIAEoCzIoLmdvb2dsZS5maGlyLnI0LmNvcmUuTG9jYXRpb24uU3RhdHVzQ29kZRI3ChJvcGVyYXRpb25hbF9zdGF0dXMYDCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGluZxIpCgRuYW1lGA0gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSKgoFYWxpYXMYDiADKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIwCgtkZXNjcmlwdGlvbhgPIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjQKBG1vZGUYECABKAsyJi5nb29nbGUuZmhpci5yNC5jb3JlLkxvY2F0aW9uLk1vZGVDb2RlEjIKBHR5cGUYESADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIyCgd0ZWxlY29tGBIgAygLMiEuZ29vZ2xlLmZoaXIucjQuY29yZS5Db250YWN0UG9pbnQSLQoHYWRkcmVzcxgTIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQWRkcmVzcxI7Cg1waHlzaWNhbF90eXBlGBQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSOAoIcG9zaXRpb24YFSABKAsyJi5nb29nbGUuZmhpci5yNC5jb3JlLkxvY2F0aW9uLlBvc2l0aW9uElEKFW1hbmFnaW5nX29yZ2FuaXphdGlvbhgWIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhLy//zCBgxPcmdhbml6YXRpb24SPwoHcGFydF9vZhgXIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghMb2NhdGlvbhJKChJob3Vyc19vZl9vcGVyYXRpb24YGCADKAsyLi5nb29nbGUuZmhpci5yNC5jb3JlLkxvY2F0aW9uLkhvdXJzT2ZPcGVyYXRpb24SPAoXYXZhaWxhYmlsaXR5X2V4Y2VwdGlvbnMYGSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJACghlbmRwb2ludBgaIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQg7y//zCBghFbmRwb2ludBqSAgoKU3RhdHVzQ29kZRI8CgV2YWx1ZRgBIAEoDjItLmdvb2dsZS5maGlyLnI0LmNvcmUuTG9jYXRpb25TdGF0dXNDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aor5g7IFLGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbG9jYXRpb24tc3RhdHVzwJ/jtgUBmrWOkwYsaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL2NvZGUajAIKCE1vZGVDb2RlEjoKBXZhbHVlGAEgASgOMisuZ29vZ2xlLmZoaXIucjQuY29yZS5Mb2NhdGlvbk1vZGVDb2RlLlZhbHVlEicKAmlkGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb246aIr5g7IFKmh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbG9jYXRpb24tbW9kZcCf47YFAZq1jpMGLGh0dHA6Ly9obDcub3JnL2ZoaXIvU3RydWN0dXJlRGVmaW5pdGlvbi9jb2RlGsMCCghQb3NpdGlvbhInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjcKCWxvbmdpdHVkZRgEIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuRGVjaW1hbEIG8NCH6wQBEjYKCGxhdGl0dWRlGAUgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5EZWNpbWFsQgbw0IfrBAESLgoIYWx0aXR1ZGUYBiABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkRlY2ltYWwaogUKEEhvdXJzT2ZPcGVyYXRpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhJTCgxkYXlzX29mX3dlZWsYBCADKAsyPS5nb29nbGUuZmhpci5yNC5jb3JlLkxvY2F0aW9uLkhvdXJzT2ZPcGVyYXRpb24uRGF5c09mV2Vla0NvZGUSLQoHYWxsX2RheRgFIAEoCzIcLmdvb2dsZS5maGlyLnI0LmNvcmUuQm9vbGVhbhIvCgxvcGVuaW5nX3RpbWUYBiABKAsyGS5nb29nbGUuZmhpci5yNC5jb3JlLlRpbWUSLwoMY2xvc2luZ190aW1lGAcgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5UaW1lGo8CCg5EYXlzT2ZXZWVrQ29kZRI4CgV2YWx1ZRgBIAEoDjIpLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF5c09mV2Vla0NvZGUuVmFsdWUSJwoCaWQYAiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbjpnivmDsgUpaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9kYXlzLW9mLXdlZWvAn+O2BQGatY6TBixodHRwOi8vaGw3Lm9yZy9maGlyL1N0cnVjdHVyZURlZmluaXRpb24vY29kZTo8wJ/jtgUDsv7klwYwaHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL0xvY2F0aW9uSgQIBxAIQngKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaVWdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvbG9jYXRpb25fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [file_google_protobuf_any, file_proto_google_fhir_proto_annotations, file_proto_google_fhir_proto_r4_core_codes, file_proto_google_fhir_proto_r4_core_datatypes]);

/**
 * Auto-generated from StructureDefinition for Location.
 * Details and position information for a physical place.
 * See http://hl7.org/fhir/StructureDefinition/Location
 *
 * @generated from message google.fhir.r4.core.Location
 */
export type Location = Message<"google.fhir.r4.core.Location"> & {
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
   * Unique code or number identifying the location to its users
   *
   * @generated from field: repeated google.fhir.r4.core.Identifier identifier = 10;
   */
  identifier: Identifier[];

  /**
   * @generated from field: google.fhir.r4.core.Location.StatusCode status = 11;
   */
  status?: Location_StatusCode;

  /**
   * The operational status of the location (typically only for a bed/room)
   *
   * @generated from field: google.fhir.r4.core.Coding operational_status = 12;
   */
  operationalStatus?: Coding;

  /**
   * Name of the location as used by humans
   *
   * @generated from field: google.fhir.r4.core.String name = 13;
   */
  name?: String;

  /**
   * A list of alternate names that the location is known as, or was known as,
   * in the past
   *
   * @generated from field: repeated google.fhir.r4.core.String alias = 14;
   */
  alias: String[];

  /**
   * Additional details about the location that could be displayed as further
   * information to identify the location beyond its name
   *
   * @generated from field: google.fhir.r4.core.String description = 15;
   */
  description?: String;

  /**
   * @generated from field: google.fhir.r4.core.Location.ModeCode mode = 16;
   */
  mode?: Location_ModeCode;

  /**
   * Type of function performed
   *
   * @generated from field: repeated google.fhir.r4.core.CodeableConcept type = 17;
   */
  type: CodeableConcept[];

  /**
   * Contact details of the location
   *
   * @generated from field: repeated google.fhir.r4.core.ContactPoint telecom = 18;
   */
  telecom: ContactPoint[];

  /**
   * Physical location
   *
   * @generated from field: google.fhir.r4.core.Address address = 19;
   */
  address?: Address;

  /**
   * Physical form of the location
   *
   * @generated from field: google.fhir.r4.core.CodeableConcept physical_type = 20;
   */
  physicalType?: CodeableConcept;

  /**
   * @generated from field: google.fhir.r4.core.Location.Position position = 21;
   */
  position?: Location_Position;

  /**
   * Organization responsible for provisioning and upkeep
   *
   * @generated from field: google.fhir.r4.core.Reference managing_organization = 22;
   */
  managingOrganization?: Reference;

  /**
   * Another Location this one is physically a part of
   *
   * @generated from field: google.fhir.r4.core.Reference part_of = 23;
   */
  partOf?: Reference;

  /**
   * @generated from field: repeated google.fhir.r4.core.Location.HoursOfOperation hours_of_operation = 24;
   */
  hoursOfOperation: Location_HoursOfOperation[];

  /**
   * Description of availability exceptions
   *
   * @generated from field: google.fhir.r4.core.String availability_exceptions = 25;
   */
  availabilityExceptions?: String;

  /**
   * Technical endpoints providing access to services operated for the location
   *
   * @generated from field: repeated google.fhir.r4.core.Reference endpoint = 26;
   */
  endpoint: Reference[];
};

/**
 * Describes the message google.fhir.r4.core.Location.
 * Use `create(LocationSchema)` to create a new message.
 */
export const LocationSchema: GenMessage<Location> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_location, 0);

/**
 * active | suspended | inactive
 *
 * @generated from message google.fhir.r4.core.Location.StatusCode
 */
export type Location_StatusCode = Message<"google.fhir.r4.core.Location.StatusCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.LocationStatusCode.Value value = 1;
   */
  value: LocationStatusCode_Value;

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
 * Describes the message google.fhir.r4.core.Location.StatusCode.
 * Use `create(Location_StatusCodeSchema)` to create a new message.
 */
export const Location_StatusCodeSchema: GenMessage<Location_StatusCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_location, 0, 0);

/**
 * instance | kind
 *
 * @generated from message google.fhir.r4.core.Location.ModeCode
 */
export type Location_ModeCode = Message<"google.fhir.r4.core.Location.ModeCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.LocationModeCode.Value value = 1;
   */
  value: LocationModeCode_Value;

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
 * Describes the message google.fhir.r4.core.Location.ModeCode.
 * Use `create(Location_ModeCodeSchema)` to create a new message.
 */
export const Location_ModeCodeSchema: GenMessage<Location_ModeCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_location, 0, 1);

/**
 * The absolute geographic location
 *
 * @generated from message google.fhir.r4.core.Location.Position
 */
export type Location_Position = Message<"google.fhir.r4.core.Location.Position"> & {
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
   * Longitude with WGS84 datum
   *
   * @generated from field: google.fhir.r4.core.Decimal longitude = 4;
   */
  longitude?: Decimal;

  /**
   * Latitude with WGS84 datum
   *
   * @generated from field: google.fhir.r4.core.Decimal latitude = 5;
   */
  latitude?: Decimal;

  /**
   * Altitude with WGS84 datum
   *
   * @generated from field: google.fhir.r4.core.Decimal altitude = 6;
   */
  altitude?: Decimal;
};

/**
 * Describes the message google.fhir.r4.core.Location.Position.
 * Use `create(Location_PositionSchema)` to create a new message.
 */
export const Location_PositionSchema: GenMessage<Location_Position> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_location, 0, 2);

/**
 * What days/times during a week is this location usually open
 *
 * @generated from message google.fhir.r4.core.Location.HoursOfOperation
 */
export type Location_HoursOfOperation = Message<"google.fhir.r4.core.Location.HoursOfOperation"> & {
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
   * @generated from field: repeated google.fhir.r4.core.Location.HoursOfOperation.DaysOfWeekCode days_of_week = 4;
   */
  daysOfWeek: Location_HoursOfOperation_DaysOfWeekCode[];

  /**
   * The Location is open all day
   *
   * @generated from field: google.fhir.r4.core.Boolean all_day = 5;
   */
  allDay?: Boolean;

  /**
   * Time that the Location opens
   *
   * @generated from field: google.fhir.r4.core.Time opening_time = 6;
   */
  openingTime?: Time;

  /**
   * Time that the Location closes
   *
   * @generated from field: google.fhir.r4.core.Time closing_time = 7;
   */
  closingTime?: Time;
};

/**
 * Describes the message google.fhir.r4.core.Location.HoursOfOperation.
 * Use `create(Location_HoursOfOperationSchema)` to create a new message.
 */
export const Location_HoursOfOperationSchema: GenMessage<Location_HoursOfOperation> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_location, 0, 3);

/**
 * mon | tue | wed | thu | fri | sat | sun
 *
 * @generated from message google.fhir.r4.core.Location.HoursOfOperation.DaysOfWeekCode
 */
export type Location_HoursOfOperation_DaysOfWeekCode = Message<"google.fhir.r4.core.Location.HoursOfOperation.DaysOfWeekCode"> & {
  /**
   * @generated from field: google.fhir.r4.core.DaysOfWeekCode.Value value = 1;
   */
  value: DaysOfWeekCode_Value;

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
 * Describes the message google.fhir.r4.core.Location.HoursOfOperation.DaysOfWeekCode.
 * Use `create(Location_HoursOfOperation_DaysOfWeekCodeSchema)` to create a new message.
 */
export const Location_HoursOfOperation_DaysOfWeekCodeSchema: GenMessage<Location_HoursOfOperation_DaysOfWeekCode> = /*@__PURE__*/
  messageDesc(file_proto_google_fhir_proto_r4_core_resources_location, 0, 3, 0);

