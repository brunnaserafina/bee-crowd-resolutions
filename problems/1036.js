function formulaBaskara(lines) {
  let [A, B, C] = lines[0].split(" ");

  const delta = B * B - 4 * A * C;

  if (delta < 0 || A == 0) {
    console.log("Impossivel calcular");
    return;
  }

  const raiz = Math.sqrt(delta);
  const R1 = (-B + raiz) / (2 * A);
  const R2 = (-B - raiz) / (2 * A);

  console.log("R1 = " + R1.toFixed(5));
  console.log("R2 = " + R2.toFixed(5));
}

//exemplo de entrada:
formulaBaskara(["10.0 20.1 5.1"]);
