#!/bin/bash

PROTOC="protoc --plugin=./node_modules/.bin/protoc-gen-es --proto_path=. --es_out=./fhir --es_opt=target=ts"

# Cleanup
rm -rf fhir

# Create output directory
mkdir -p fhir

# Base annotations and dependencies
$PROTOC \
  ./proto/google/fhir/proto/annotations.proto \
  ./proto/google/fhir/proto/protogenerator_annotations.proto \
  ./proto/google/fhir/proto/profile_config.proto

# Core types
$PROTOC \
  ./proto/google/fhir/proto/r4/core/codes.proto \
  ./proto/google/fhir/proto/r4/core/datatypes.proto \
  ./proto/google/fhir/proto/r4/core/valuesets.proto

# Extensions
$PROTOC \
  ./proto/google/fhir/proto/r4/core/extensions.proto \
  ./proto/google/fhir/proto/r4/fhirproto_extensions.proto

# R4 Resources
$PROTOC ./proto/google/fhir/proto/r4/core/resources/*.proto

# $PROTOC \
#   ./proto/google/fhir/proto/r4/core/resources/bundle_and_contained_resource.proto