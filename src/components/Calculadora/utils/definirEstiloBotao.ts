const definirEstiloBotao = (label: string | number) => {
  if (!isNaN(parseInt(label.toString())))
    return { background: '#0a0a0a', color: '#808080' };

  if (label === '=')
    return { background: '#d10028', color: '#fff' };

  if (label === 'C')
    return { background: '#ea4900', color: '#fff' };

  return { background: '#d3d3d3', color: '#0a0a0a' };
}

export default definirEstiloBotao;
