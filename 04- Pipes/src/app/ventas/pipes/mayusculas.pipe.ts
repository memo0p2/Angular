import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(value: string, ...args: any[]):string {
        return value.toUpperCase()
    }

}