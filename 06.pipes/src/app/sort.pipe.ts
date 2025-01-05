import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sort',
    pure: false,
    standalone: true
})
export default class SortPipe<T> implements PipeTransform {
    transform(value: T[], order: 'asc' | 'desc' = 'asc') {
        return [...value].sort((a, b) => {
            if (order === 'asc') {
                return a > b ? 1 : -1;
            }
            else {
                return a > b ? -1 : 1;
            }
        });
    }
}