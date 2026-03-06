
const alunos = [
    { nome: "Ana", nota: 8.5, turma: "3A" },
    { nome: "Beto", nota: 5.0, turma: "3B" },
    { nome: "Carla", nota: 9.0, turma: "3A" },
    { nome: "Diego", nota: 6.0, turma: "3B" },
    { nome: "Elisa", nota: 4.5, turma: "3A" },
    { nome: "Fábio", nota: 7.5, turma: "3A" }
  ];
  
  
  const aprovados = alunos.filter(aluno => aluno.nota >= 6);
  console.log("Alunos aprovados:");
  console.log(aprovados);
  
  
  const nomes = alunos.map(aluno => aluno.nome);
  console.log("\nNomes dos alunos:");
  console.log(nomes);
  

  const statusMap = aluno => {
    const status = aluno.nota >= 6 ? "Aprovado" : "Reprovado";
    return `${aluno.nome} - Nota: ${aluno.nota} - Status: ${status}`;
  };
  const boletim = alunos.map(statusMap);
  console.log("\nBoletim:");
  boletim.forEach(item => console.log(item));
  

  const somaNotas = alunos.reduce((total, aluno) => total + aluno.nota, 0);
  const media = somaNotas / alunos.length;
  console.log("\nMédia da turma:");
  console.log(media.toFixed(2));
  
  
  const agrupadosPorTurma = alunos.reduce((acc, aluno) => {
    if (!acc[aluno.turma]) {
      acc[aluno.turma] = [];
    }
    acc[aluno.turma].push(aluno.nome);
    return acc;
  }, {});
  console.log("\nAlunos agrupados por turma:");
  console.log(agrupadosPorTurma);
  
  
  const melhores3A = alunos
    .filter(aluno => aluno.turma === "3A" && aluno.nota >= 8)
    .map(aluno => aluno.nome);
  
  console.log("\nMelhores alunos da 3A:");
  console.log(melhores3A);
  