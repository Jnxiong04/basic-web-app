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

  const isSquareCubeMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)?/)
  if (isSquareCubeMatch) {
    for (let i = 1; i <= 6; i++) {
      const x: number = parseInt(isSquareCubeMatch[i]);
      if (Number.isInteger(Math.sqrt(x)) && Number.isInteger(Math.cbrt(x))){
        return x.toString();
      }
    }
    return ""
  }

  const subMatch = query.match(/What is (\d+) minus (\d+)?/)
  if (subMatch) {
    const x: number = parseInt(subMatch[1]);
    const y: number = parseInt(subMatch[2]);
    return (x-y).toString();
  }

  const powerMatch = query.match(/What is (\d+) to the power of (\d+)?/)
  if (powerMatch) {
    const x: number = parseInt(powerMatch[1]);
    const y: number = parseInt(powerMatch[2]);
    return (Math.pow(x, y)).toString();
  }

  // const primeMatch = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)?/)
  // const primes = []
  // if (primeMatch) {
  //   for (let i = 1; i <= 5; i++) {
  //     const x: number = parseInt(primeMatch[i]);
  //     if (x == 1) {
  //       continue;
  //     }
  //     for (let j = 1; j <= 10; j ++) {
  //       if (Number.isInteger(x/j)){
  //         primes.push(x)
  //         break
  //       }
  //     }
  //   }
    
  //}

  return "";
}
