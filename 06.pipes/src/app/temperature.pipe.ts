import { Pipe, PipeTransform } from "@angular/core";

type TemperatureScale = 'F' | 'C';

@Pipe({
    name: 'temp',
    standalone: true
})
export default class TemperaturePipe implements PipeTransform {

    convert({temp, scale} : {temp: number, scale: TemperatureScale}) {
        return {
            scale,
            temp: scale === 'F' ? temp * (9/5) + 32 : (temp - 32) * (5/9)
        }
    }

    transform(value: number | string, inputType: TemperatureScale, outputType?: TemperatureScale) {
        const v = typeof value === 'string' ? parseFloat(value) : value;

        if (isNaN(v))
            return 'null';

        const sign = v > 0 ? '+' : '';

        let info : {temp: number, scale: TemperatureScale};

        if (outputType && outputType !== inputType) 
            info = this.convert({temp: v, scale: outputType});
        else
            info = {temp: v, scale: inputType};

        return `${sign}${info.temp.toFixed(2)} °${info.scale}`;
    }
}