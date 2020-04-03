export class ResistorColor {
  private colourMapping: string[] = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];
  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present');
    }
    this.colors = colors;
  }
  value = (): number => {
    const [colour1, colour2] = this.colors.slice(0, 2);
    const colour1Index = this.colourMapping.indexOf(colour1);
    const colour2Index = this.colourMapping.indexOf(colour2);

    return parseInt(colour1Index.toString() + colour2Index.toString());
  };
}
