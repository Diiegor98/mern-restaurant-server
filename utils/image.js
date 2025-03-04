function getPathImage(file) {
  const filePath = file.path;
  const fileSplit = filePath.split("/"); // Asegurar compatibilidad con Linux/macOS

  return fileSplit.slice(1).join("/"); // Excluir "uploads/"
}

module.exports = { getPathImage };
