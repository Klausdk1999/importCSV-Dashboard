let csvJson={};
export default function handler(req, res) {
    console.log("aaaaaaaaaaaa req")
    

    if(req.method === 'GET'){
        return res.status(200).send(csvJson);
    }

    if(req.method === 'POST'){
        console.log("post");
        csvJson=req.body;
        console.log(req.body)
        return res.status(200).json({})
    }
    
}