import app, { starServer }from  "./app";

const PORT: number=4000;

const main=async ()=> {
    await  starServer();
    app.listen(PORT,()=>{console.log(`App escuchando en el Puerto ${PORT}`)});
}
