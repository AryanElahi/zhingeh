const {PrismaClient} = require("@prisma/client")
const { use } = require("bcrypt/promises")
const prisma = new PrismaClient()

async function initiateSetting (data){
    const newAnnoun = await prisma.setting.create({
        data :
            data    
    })
    return newAnnoun
}
async function logoAdding(Url){
    return await prisma.setting.update({
    where: {id : 1},
    data : {logo : Url}
    })
    }
module.exports = {
    initiateSetting,
    logoAdding
}