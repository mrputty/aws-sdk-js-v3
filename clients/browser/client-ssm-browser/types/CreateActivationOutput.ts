import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateActivationOutput shape
 */
export interface CreateActivationOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID number generated by the system when it processed the activation. The activation ID functions like a user name.</p>
   */
  ActivationId?: string;

  /**
   * <p>The code the system generates when it processes the activation. The activation code functions like a password to validate the activation ID. </p>
   */
  ActivationCode?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}