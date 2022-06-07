export function OutToString(src: any[]): string {
  let result: string;

  result = " ";

  if (src.length > 0) {
    src.map((value) => {
      result += value + " ";
    });
  }

  return result.trim();
}