import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreatePhoneNumberOrderRequest, CreatePhoneNumberOrderResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreatePhoneNumberOrderCommand,
  serializeAws_restJson1CreatePhoneNumberOrderCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreatePhoneNumberOrderCommandInput = CreatePhoneNumberOrderRequest;
export type CreatePhoneNumberOrderCommandOutput = CreatePhoneNumberOrderResponse & __MetadataBearer;

/**
 * <p>Creates an order for phone numbers to be provisioned. Choose from Amazon Chime Business
 *       Calling and Amazon Chime Voice Connector product types. For toll-free numbers, you must use
 *       the Amazon Chime Voice Connector product type.</p>
 */
export class CreatePhoneNumberOrderCommand extends $Command<
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePhoneNumberOrderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePhoneNumberOrderCommandInput, CreatePhoneNumberOrderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreatePhoneNumberOrderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePhoneNumberOrderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePhoneNumberOrderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePhoneNumberOrderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePhoneNumberOrderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePhoneNumberOrderCommandOutput> {
    return deserializeAws_restJson1CreatePhoneNumberOrderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
