export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "janiexio"
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "jnxiong"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const maxMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/)
  if (maxMatch) {
    const x: number = parseInt(maxMatch[1]);
    const y: number = parseInt(maxMatch[2]);
    const z: number = parseInt(maxMatch[3]);
    return Math.max(x, y, z).toString()
  }

  const mulMatch = query.match(/What is (\d+) multiplied by (\d+)?/)
  if (mulMatch) {
    const x: number = parseInt(mulMatch[1]);
    const y: number = parseInt(mulMatch[2]);
    return (x*y).toString();
  }
  return "";
}
