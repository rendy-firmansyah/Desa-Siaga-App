import prisma from "../../../../lib/prisma";

export default async function UserHandler(req,res){
    if(req.method === 'GET'){
        // return res.status(200).json({message:"test"})
        const id = req.query.id;
        const desa = await prisma.desa.findFirst({where : {id:Number(id)}})
        return res.status(200).json(desa)
    }
}