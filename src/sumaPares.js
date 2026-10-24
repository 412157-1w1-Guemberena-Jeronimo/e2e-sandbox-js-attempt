// Devuelve la suma de los numeros pares de la lista.
export function sumaPares(numeros) {
    return numeros.filter((n) => n % 2 === 0).reduce((acc, n) => acc + n, 0);
}
