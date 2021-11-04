const Contador = () => {
  const [contador, setContador] = React.useState(0);
  const aumentar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);
  const reset = () => setContador(contador * 0);
  return (
    <div>
      <h1 className={contador > 0 ? "mayor" : "menor"}>Contador: {contador}</h1>
      <hr />
      <button className="boton" onClick={aumentar}>
        Aumentar
      </button>
      <button className="boton" onClick={disminuir}>
        Disminuir
      </button>
      <button className="boton" onClick={reset}>
        Resetear
      </button>
    </div>
  );
};
