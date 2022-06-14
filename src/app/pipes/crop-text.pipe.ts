import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropText'
})
export class CropTextPipe implements PipeTransform {
  textTest = "Lorem ipsum dolor sit amet consectetur adipiscing elit metus penatibus, parturient fringilla eleifend accumsan platea integer aliquam fames, morbi habitant pharetra nullam egestas rutrum ad nisi. Sociosqu sollicitudin id magnis porttitor donec in feugiat placerat, accumsan aenean orci suspendisse potenti tellus senectus nisi, laoreet venenatis non felis lectus ac aliquam.";

  transform(value: string, length: number): string {
    return value.length > length ? value.slice(0,length-3) + "..." : this.textTest.slice(0,length-3) + "..."
  }

}
