import { CropTextPipe } from './crop-text.pipe';

describe('CropTextPipe', () => {
  let pipe: CropTextPipe;
  beforeEach(() => {
    pipe = new CropTextPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('trim text correctly (value.length > length)', () => {
    const textTest = "Lorem ipsum dolor sit amet consectetur adipiscing elit metus penatibus, parturient fringilla eleifend accumsan platea integer aliquam fames, morbi habitant pharetra nullam egestas rutrum ad nisi. Sociosqu sollicitudin id magnis porttitor donec in feugiat placerat, accumsan aenean orci suspendisse potenti tellus senectus nisi, laoreet venenatis non felis lectus ac aliquam.";
    const length: number = 180;
    const newText = pipe.transform(textTest, length);
    expect(newText.length).toBe(length);
  });

  it('trim text correctly (value.length < length)', () => {
    const textTest = "Lorem ipsum dolor sit amet consectetur adipiscing elit metus penatibus.";
    const length: number = 180;
    const newText = pipe.transform(textTest, length);
    expect(newText.length).toBe(length);
  });
});
