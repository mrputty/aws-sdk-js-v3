import {NodeHttpOptions as __HttpOptions__} from '@aws/types';
import * as __aws_types from '@aws/types';

/**
 * DeleteMLModelInput shape
 */
export interface DeleteMLModelInput {
    /**
     * <p>A user-supplied ID that uniquely identifies the <code>MLModel</code>.</p>
     */
    MLModelId: string;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}