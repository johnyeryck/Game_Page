export const emaildata = (email: string, cod: number) => {
  return {
    from: "johnyeryckdev@gmail.com",
    to: email,
    subject: "Confirme seu email",
    html: `<div style="background-color: black; height : 360px; text-color : white">
         <h1 style="color: white">Código de verificação</h1>
         <p>${cod}</p>
         </div>`,
  };
};
