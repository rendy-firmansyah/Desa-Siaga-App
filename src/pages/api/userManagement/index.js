import { sign } from "jsonwebtoken";
import prisma from "../../../../lib/prisma";
const JWT_SECRET = 'siaga bencana';
import { compare, hash } from "bcrypt";

export default async function UserHandler(req,res){
    //login method
    if(req.method === 'POST'){
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: "Data tidak boleh Kosong!"})
        }
        try {
            const users = await prisma.user.findUnique({where : {email}})
            const passwordCheck = await compare(password,users.password);
            if(!passwordCheck){
                return res.status(200).json({message : "Password yang anda masukkan salah!"})
            }
            const user = users.role;
            const id = Number(users.id);
            const message = 'Berhasil Login';
            const status = 'success';
            const desa_id = users.desa_id
            const token = sign({ userId: id }, JWT_SECRET, { expiresIn: '1d' });
            return res.status(200).json({token,user,message,status, desa_id});
            
        } catch (error) {
            return res.status(500).json({message: "Server error!",status: 'failed'})
        }

    }
    // create user method 
    if(req.method === 'PUT'){
        const {email,password,username,role,desa_id} = req.body;

        if(!email || !password || !username || !role){
            return res.status(400).json({message: "Data tidak Lengkap!"})
        }
        try {
            const chekAutentic = await prisma.user.findFirst({ where:{email}})
            if(chekAutentic){
               return res.status(400).json({message: "email sudah digunakan user lain!"}) 
            }
            const hashPassword = await hash(password,10);
            const saveUser = await prisma.user.create({
                data:{
                    email,
                    password : hashPassword,
                    username,
                    desa_id : parseInt(desa_id),
                    role
                }
            })
            return res.status(200).json({message : "Registrasi User Berhasil", status:'success'})
        } catch (error) {
            return res.status(500).json({message: "Server error!"})
        }
    }

    if (req.method === "GET") {
        try {
            const data = await prisma.user.findMany({})
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({message: "Server error!"})
        }
    }
    if (req.method === "DELETE") {
        try {
            const id = req.query.id
            const data = await prisma.user.delete({
                where:{
                    id : parseInt(id)
                }
            })
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({message: "Server error!"})
        }
    }
    if(req.method === "PATCH"){
        const id = req.query.id
        const {username,role,password} = req.body
        try {
            const hashPassword = await hash(password,10)
            const data = await prisma.user.update({
                where:{
                    id : parseInt(id)
                },
                data:{
                    username,
                    password : hashPassword,
                    role
                }
            })
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({message: "Server error!"})
        }
    }
}