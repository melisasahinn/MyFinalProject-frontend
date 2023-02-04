import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded',
})
export class VatAddedPipe implements PipeTransform {
  public transform(value: number, rate: number): number {
    const calculateKdv = value + (value * rate) / 100;
    return calculateKdv;
  }
}
