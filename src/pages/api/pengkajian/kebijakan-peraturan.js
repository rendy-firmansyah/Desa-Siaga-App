import prisma from "../../../../lib/prisma";

export default async function peraturanHandler(req, res) {
  if (req.method === "POST") {
        const {a,b,c,d,e,f,g,h} = req.body();

        if(!a || !b || !c || !d || !e || !f || !g || !h){
            return res.status(400).json({message:"data tidak lengkap",status:'error'})
        }

        
    }
}