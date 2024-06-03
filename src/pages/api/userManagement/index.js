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
            const status = 'success'
            const token = sign({ userId: id }, JWT_SECRET, { expiresIn: '1d' });
            return res.status(200).json({token,user,message,status});
            
        } catch (error) {
            return res.status(500).json({message: "Server error!",status: 'failed'})
        }

    }
    // create user method 
    if(req.method === 'PUT'){
        const {email,password,username,role} = req.body;

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
                    role
                }
            })
            return res.status(200).json({message : "Registrasi User Berhasil"})
        } catch (error) {
            return res.status(500).json({message: "Server error!"})
        }
    }
}