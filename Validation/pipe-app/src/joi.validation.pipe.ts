import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from "@hapi/joi";

@Injectable()
export default class JoiValidationPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) {}

    transform(value: any, metaData: ArgumentMetadata) {
      const { error } = this.schema.validate(value);
      if (error) {
          throw new BadRequestException('Vaidation failed');
      }
      return value;
    }
}