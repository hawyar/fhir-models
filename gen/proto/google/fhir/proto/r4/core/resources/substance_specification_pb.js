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
exports.SubstanceSpecification_Relationship_AmountXSchema = exports.SubstanceSpecification_Relationship_SubstanceXSchema = exports.SubstanceSpecification_RelationshipSchema = exports.SubstanceSpecification_Name_OfficialSchema = exports.SubstanceSpecification_NameSchema = exports.SubstanceSpecification_CodeTypeSchema = exports.SubstanceSpecification_Structure_RepresentationSchema = exports.SubstanceSpecification_Structure_Isotope_MolecularWeightSchema = exports.SubstanceSpecification_Structure_IsotopeSchema = exports.SubstanceSpecification_StructureSchema = exports.SubstanceSpecification_Property_AmountXSchema = exports.SubstanceSpecification_Property_DefiningSubstanceXSchema = exports.SubstanceSpecification_PropertySchema = exports.SubstanceSpecification_Moiety_AmountXSchema = exports.SubstanceSpecification_MoietySchema = exports.SubstanceSpecificationSchema = exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification = void 0;
var codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
var wkt_1 = require("@bufbuild/protobuf/wkt");
var annotations_pb_1 = require("../../../annotations_pb");
var datatypes_pb_1 = require("../datatypes_pb");
/**
 * Describes the file proto/google/fhir/proto/r4/core/resources/substance_specification.proto.
 */
exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification = (0, codegenv1_1.fileDesc)("Ckdwcm90by9nb29nbGUvZmhpci9wcm90by9yNC9jb3JlL3Jlc291cmNlcy9zdWJzdGFuY2Vfc3BlY2lmaWNhdGlvbi5wcm90bxITZ29vZ2xlLmZoaXIucjQuY29yZSLrPQoWU3Vic3RhbmNlU3BlY2lmaWNhdGlvbhIjCgJpZBgBIAEoCzIXLmdvb2dsZS5maGlyLnI0LmNvcmUuSWQSJwoEbWV0YRgCIAEoCzIZLmdvb2dsZS5maGlyLnI0LmNvcmUuTWV0YRIwCg5pbXBsaWNpdF9ydWxlcxgDIAEoCzIYLmdvb2dsZS5maGlyLnI0LmNvcmUuVXJpEisKCGxhbmd1YWdlGAQgASgLMhkuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlEiwKBHRleHQYBSABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLk5hcnJhdGl2ZRInCgljb250YWluZWQYBiADKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjEKCWV4dGVuc2lvbhgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgJIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjMKCmlkZW50aWZpZXIYCiABKAsyHy5nb29nbGUuZmhpci5yNC5jb3JlLklkZW50aWZpZXISMgoEdHlwZRgLIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjQKBnN0YXR1cxgMIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjQKBmRvbWFpbhgNIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjAKC2Rlc2NyaXB0aW9uGA4gASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSRwoGc291cmNlGA8gAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCF/L//MIGEURvY3VtZW50UmVmZXJlbmNlEiwKB2NvbW1lbnQYECABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJCCgZtb2lldHkYESADKAsyMi5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZVNwZWNpZmljYXRpb24uTW9pZXR5EkYKCHByb3BlcnR5GBIgAygLMjQuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VTcGVjaWZpY2F0aW9uLlByb3BlcnR5EmIKFXJlZmVyZW5jZV9pbmZvcm1hdGlvbhgTIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQiPy//zCBh1TdWJzdGFuY2VSZWZlcmVuY2VJbmZvcm1hdGlvbhJICglzdHJ1Y3R1cmUYFCABKAsyNS5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZVNwZWNpZmljYXRpb24uU3RydWN0dXJlEkIKBGNvZGUYFSADKAsyNC5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZVNwZWNpZmljYXRpb24uQ29kZVR5cGUSPgoEbmFtZRgWIAMoCzIwLmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlU3BlY2lmaWNhdGlvbi5OYW1lEmcKEG1vbGVjdWxhcl93ZWlnaHQYFyADKAsyTS5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZVNwZWNpZmljYXRpb24uU3RydWN0dXJlLklzb3RvcGUuTW9sZWN1bGFyV2VpZ2h0Ek4KDHJlbGF0aW9uc2hpcBgYIAMoCzI4Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlU3BlY2lmaWNhdGlvbi5SZWxhdGlvbnNoaXASUAoMbnVjbGVpY19hY2lkGBkgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCGvL//MIGFFN1YnN0YW5jZU51Y2xlaWNBY2lkEkcKB3BvbHltZXIYGiABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIW8v/8wgYQU3Vic3RhbmNlUG9seW1lchJHCgdwcm90ZWluGBsgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCFvL//MIGEFN1YnN0YW5jZVByb3RlaW4SVgoPc291cmNlX21hdGVyaWFsGBwgASgLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5SZWZlcmVuY2VCHfL//MIGF1N1YnN0YW5jZVNvdXJjZU1hdGVyaWFsGsUFCgZNb2lldHkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIyCgRyb2xlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSMwoKaWRlbnRpZmllchgFIAEoCzIfLmdvb2dsZS5maGlyLnI0LmNvcmUuSWRlbnRpZmllchIpCgRuYW1lGAYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSPQoPc3RlcmVvY2hlbWlzdHJ5GAcgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSPgoQb3B0aWNhbF9hY3Rpdml0eRgIIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjYKEW1vbGVjdWxhcl9mb3JtdWxhGAkgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSSgoGYW1vdW50GAogASgLMjouZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VTcGVjaWZpY2F0aW9uLk1vaWV0eS5BbW91bnRYGosBCgdBbW91bnRYEjEKCHF1YW50aXR5GAEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eUgAEjsKDHN0cmluZ192YWx1ZRgCIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZzoGoIOD6AYBQggKBmNob2ljZRrNBgoIUHJvcGVydHkSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI2CghjYXRlZ29yeRgEIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjIKBGNvZGUYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIvCgpwYXJhbWV0ZXJzGAYgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSYwoSZGVmaW5pbmdfc3Vic3RhbmNlGAcgASgLMkcuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VTcGVjaWZpY2F0aW9uLlByb3BlcnR5LkRlZmluaW5nU3Vic3RhbmNlWBJMCgZhbW91bnQYCCABKAsyPC5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZVNwZWNpZmljYXRpb24uUHJvcGVydHkuQW1vdW50WBrKAQoSRGVmaW5pbmdTdWJzdGFuY2VYEmAKCXJlZmVyZW5jZRgBIAEoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQivy//zCBhZTdWJzdGFuY2VTcGVjaWZpY2F0aW9u8v/8wgYJU3Vic3RhbmNlSAASQAoQY29kZWFibGVfY29uY2VwdBgCIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0SAA6BqCDg+gGAUIICgZjaG9pY2UaiwEKB0Ftb3VudFgSMQoIcXVhbnRpdHkYASABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLlF1YW50aXR5SAASOwoMc3RyaW5nX3ZhbHVlGAIgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmdIAFIGc3RyaW5nOgagg4PoBgFCCAoGY2hvaWNlGu4OCglTdHJ1Y3R1cmUSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI9Cg9zdGVyZW9jaGVtaXN0cnkYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI+ChBvcHRpY2FsX2FjdGl2aXR5GAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSNgoRbW9sZWN1bGFyX2Zvcm11bGEYBiABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJAChttb2xlY3VsYXJfZm9ybXVsYV9ieV9tb2lldHkYByABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxJOCgdpc290b3BlGAggAygLMj0uZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VTcGVjaWZpY2F0aW9uLlN0cnVjdHVyZS5Jc290b3BlEmcKEG1vbGVjdWxhcl93ZWlnaHQYCSABKAsyTS5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZVNwZWNpZmljYXRpb24uU3RydWN0dXJlLklzb3RvcGUuTW9sZWN1bGFyV2VpZ2h0EkcKBnNvdXJjZRgKIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhfy//zCBhFEb2N1bWVudFJlZmVyZW5jZRJcCg5yZXByZXNlbnRhdGlvbhgLIAMoCzJELmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlU3BlY2lmaWNhdGlvbi5TdHJ1Y3R1cmUuUmVwcmVzZW50YXRpb24apgYKB0lzb3RvcGUSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIzCgppZGVudGlmaWVyGAQgASgLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5JZGVudGlmaWVyEjIKBG5hbWUYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI6CgxzdWJzdGl0dXRpb24YBiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIwCgloYWxmX2xpZmUYByABKAsyHS5nb29nbGUuZmhpci5yNC5jb3JlLlF1YW50aXR5EmcKEG1vbGVjdWxhcl93ZWlnaHQYCCABKAsyTS5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZVNwZWNpZmljYXRpb24uU3RydWN0dXJlLklzb3RvcGUuTW9sZWN1bGFyV2VpZ2h0GsICCg9Nb2xlY3VsYXJXZWlnaHQSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI0CgZtZXRob2QYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIyCgR0eXBlGAUgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSLQoGYW1vdW50GAYgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eRrGAgoOUmVwcmVzZW50YXRpb24SJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhIyCgR0eXBlGAQgASgLMiQuZ29vZ2xlLmZoaXIucjQuY29yZS5Db2RlYWJsZUNvbmNlcHQSMwoOcmVwcmVzZW50YXRpb24YBSABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIzCgphdHRhY2htZW50GAYgASgLMh8uZ29vZ2xlLmZoaXIucjQuY29yZS5BdHRhY2htZW50GrcDCghDb2RlVHlwZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjIKBGNvZGUYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI0CgZzdGF0dXMYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIyCgtzdGF0dXNfZGF0ZRgGIAEoCzIdLmdvb2dsZS5maGlyLnI0LmNvcmUuRGF0ZVRpbWUSLAoHY29tbWVudBgHIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEkcKBnNvdXJjZRgIIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhfy//zCBhFEb2N1bWVudFJlZmVyZW5jZRr3CAoETmFtZRInCgJpZBgBIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nEjEKCWV4dGVuc2lvbhgCIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjoKEm1vZGlmaWVyX2V4dGVuc2lvbhgDIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuRXh0ZW5zaW9uEjEKBG5hbWUYBCABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZ0IG8NCH6wQBEjIKBHR5cGUYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI0CgZzdGF0dXMYBiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIvCglwcmVmZXJyZWQYByABKAsyHC5nb29nbGUuZmhpci5yNC5jb3JlLkJvb2xlYW4SNgoIbGFuZ3VhZ2UYCCADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI0CgZkb21haW4YCSADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI6CgxqdXJpc2RpY3Rpb24YCiADKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBJBCgdzeW5vbnltGAsgAygLMjAuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VTcGVjaWZpY2F0aW9uLk5hbWUSRQoLdHJhbnNsYXRpb24YDCADKAsyMC5nb29nbGUuZmhpci5yNC5jb3JlLlN1YnN0YW5jZVNwZWNpZmljYXRpb24uTmFtZRJLCghvZmZpY2lhbBgNIAMoCzI5Lmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlU3BlY2lmaWNhdGlvbi5OYW1lLk9mZmljaWFsEkcKBnNvdXJjZRgOIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhfy//zCBhFEb2N1bWVudFJlZmVyZW5jZRq+AgoIT2ZmaWNpYWwSJwoCaWQYASABKAsyGy5nb29nbGUuZmhpci5yNC5jb3JlLlN0cmluZxIxCglleHRlbnNpb24YAiADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI6ChJtb2RpZmllcl9leHRlbnNpb24YAyADKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLkV4dGVuc2lvbhI3CglhdXRob3JpdHkYBCABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBI0CgZzdGF0dXMYBSABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdBIrCgRkYXRlGAYgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5EYXRlVGltZRqdCAoMUmVsYXRpb25zaGlwEicKAmlkGAEgASgLMhsuZ29vZ2xlLmZoaXIucjQuY29yZS5TdHJpbmcSMQoJZXh0ZW5zaW9uGAIgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SOgoSbW9kaWZpZXJfZXh0ZW5zaW9uGAMgAygLMh4uZ29vZ2xlLmZoaXIucjQuY29yZS5FeHRlbnNpb24SVgoJc3Vic3RhbmNlGAQgASgLMkMuZ29vZ2xlLmZoaXIucjQuY29yZS5TdWJzdGFuY2VTcGVjaWZpY2F0aW9uLlJlbGF0aW9uc2hpcC5TdWJzdGFuY2VYEjoKDHJlbGF0aW9uc2hpcBgFIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EjEKC2lzX2RlZmluaW5nGAYgASgLMhwuZ29vZ2xlLmZoaXIucjQuY29yZS5Cb29sZWFuElAKBmFtb3VudBgHIAEoCzJALmdvb2dsZS5maGlyLnI0LmNvcmUuU3Vic3RhbmNlU3BlY2lmaWNhdGlvbi5SZWxhdGlvbnNoaXAuQW1vdW50WBI6ChZhbW91bnRfcmF0aW9fbG93X2xpbWl0GAggASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYXRpbxI5CgthbW91bnRfdHlwZRgJIAEoCzIkLmdvb2dsZS5maGlyLnI0LmNvcmUuQ29kZWFibGVDb25jZXB0EkcKBnNvdXJjZRgKIAMoCzIeLmdvb2dsZS5maGlyLnI0LmNvcmUuUmVmZXJlbmNlQhfy//zCBhFEb2N1bWVudFJlZmVyZW5jZRqzAQoKU3Vic3RhbmNlWBJRCglyZWZlcmVuY2UYASABKAsyHi5nb29nbGUuZmhpci5yNC5jb3JlLlJlZmVyZW5jZUIc8v/8wgYWU3Vic3RhbmNlU3BlY2lmaWNhdGlvbkgAEkAKEGNvZGVhYmxlX2NvbmNlcHQYAiABKAsyJC5nb29nbGUuZmhpci5yNC5jb3JlLkNvZGVhYmxlQ29uY2VwdEgAOgagg4PoBgFCCAoGY2hvaWNlGuUBCgdBbW91bnRYEjEKCHF1YW50aXR5GAEgASgLMh0uZ29vZ2xlLmZoaXIucjQuY29yZS5RdWFudGl0eUgAEisKBXJhbmdlGAIgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYW5nZUgAEisKBXJhdGlvGAMgASgLMhouZ29vZ2xlLmZoaXIucjQuY29yZS5SYXRpb0gAEjsKDHN0cmluZ192YWx1ZRgEIAEoCzIbLmdvb2dsZS5maGlyLnI0LmNvcmUuU3RyaW5nSABSBnN0cmluZzoGoIOD6AYBQggKBmNob2ljZTpKwJ/jtgUDsv7klwY+aHR0cDovL2hsNy5vcmcvZmhpci9TdHJ1Y3R1cmVEZWZpbml0aW9uL1N1YnN0YW5jZVNwZWNpZmljYXRpb25KBAgHEAhChwEKF2NvbS5nb29nbGUuZmhpci5yNC5jb3JlUAFaZGdpdGh1Yi5jb20vZ29vZ2xlL2ZoaXIvZ28vcHJvdG8vZ29vZ2xlL2ZoaXIvcHJvdG8vcjQvY29yZS9yZXNvdXJjZXMvc3Vic3RhbmNlX3NwZWNpZmljYXRpb25fZ29fcHJvdG+YxrC1BwRiBnByb3RvMw", [wkt_1.file_google_protobuf_any, annotations_pb_1.file_proto_google_fhir_proto_annotations, datatypes_pb_1.file_proto_google_fhir_proto_r4_core_datatypes]);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.
 * Use `create(SubstanceSpecificationSchema)` to create a new message.
 */
exports.SubstanceSpecificationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Moiety.
 * Use `create(SubstanceSpecification_MoietySchema)` to create a new message.
 */
exports.SubstanceSpecification_MoietySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Moiety.AmountX.
 * Use `create(SubstanceSpecification_Moiety_AmountXSchema)` to create a new message.
 */
exports.SubstanceSpecification_Moiety_AmountXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 0, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Property.
 * Use `create(SubstanceSpecification_PropertySchema)` to create a new message.
 */
exports.SubstanceSpecification_PropertySchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 1);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Property.DefiningSubstanceX.
 * Use `create(SubstanceSpecification_Property_DefiningSubstanceXSchema)` to create a new message.
 */
exports.SubstanceSpecification_Property_DefiningSubstanceXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 1, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Property.AmountX.
 * Use `create(SubstanceSpecification_Property_AmountXSchema)` to create a new message.
 */
exports.SubstanceSpecification_Property_AmountXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 1, 1);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Structure.
 * Use `create(SubstanceSpecification_StructureSchema)` to create a new message.
 */
exports.SubstanceSpecification_StructureSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 2);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Structure.Isotope.
 * Use `create(SubstanceSpecification_Structure_IsotopeSchema)` to create a new message.
 */
exports.SubstanceSpecification_Structure_IsotopeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 2, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Structure.Isotope.MolecularWeight.
 * Use `create(SubstanceSpecification_Structure_Isotope_MolecularWeightSchema)` to create a new message.
 */
exports.SubstanceSpecification_Structure_Isotope_MolecularWeightSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 2, 0, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Structure.Representation.
 * Use `create(SubstanceSpecification_Structure_RepresentationSchema)` to create a new message.
 */
exports.SubstanceSpecification_Structure_RepresentationSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 2, 1);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.CodeType.
 * Use `create(SubstanceSpecification_CodeTypeSchema)` to create a new message.
 */
exports.SubstanceSpecification_CodeTypeSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 3);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Name.
 * Use `create(SubstanceSpecification_NameSchema)` to create a new message.
 */
exports.SubstanceSpecification_NameSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 4);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Name.Official.
 * Use `create(SubstanceSpecification_Name_OfficialSchema)` to create a new message.
 */
exports.SubstanceSpecification_Name_OfficialSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 4, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Relationship.
 * Use `create(SubstanceSpecification_RelationshipSchema)` to create a new message.
 */
exports.SubstanceSpecification_RelationshipSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 5);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Relationship.SubstanceX.
 * Use `create(SubstanceSpecification_Relationship_SubstanceXSchema)` to create a new message.
 */
exports.SubstanceSpecification_Relationship_SubstanceXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 5, 0);
/**
 * Describes the message google.fhir.r4.core.SubstanceSpecification.Relationship.AmountX.
 * Use `create(SubstanceSpecification_Relationship_AmountXSchema)` to create a new message.
 */
exports.SubstanceSpecification_Relationship_AmountXSchema = (0, codegenv1_1.messageDesc)(exports.file_proto_google_fhir_proto_r4_core_resources_substance_specification, 0, 5, 1);