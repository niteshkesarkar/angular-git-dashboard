import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash-es';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, maxChars?: any): any {
    if (_.isEmpty(maxChars) || _.isEmpty(value) || value.length <= maxChars) {
      return value;
    }

    return value.substring(0, maxChars) + '...';
  }

}
