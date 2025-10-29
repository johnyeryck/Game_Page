export default function GenerateCode() {
  const num = Math.random() / Number(10);
  const numList = num.toString().replace(".", "");
  return Number(numList.slice(4, 10));
}
