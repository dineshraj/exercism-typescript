class TwoFer {
  public static twoFer(name = ''): string {
    const value = name ? name : 'you';
    return `One for ${value}, one for me.`;
  }
}

export default TwoFer;
