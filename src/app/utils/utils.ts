export function formatDate(date: string): string {
  const newDate = new Date(date);
  const resDate = newDate.toISOString().split("T");
  const resTIme = resDate[1].split(":");
  return `${resTIme[0]}:${resTIme[1]}, ${resDate[0]} `;
}

export function clearTitleArticle(article: string): string {
  return article.split("-").slice(0, -1).toString() || "";
}
