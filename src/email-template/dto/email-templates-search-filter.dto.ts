import { PartialType } from '@nestjs/swagger';
import { CommonSearchFieldDto } from '../../common/extra/common-search-field.dto';

export class EmailTemplatesSearchFilterDto extends PartialType(CommonSearchFieldDto) {}
