import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TagKeyOnly: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};