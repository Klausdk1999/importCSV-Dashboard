let csvJson={};
export default function handler(req, res) {
    console.log(req.body)
    if(req.method === 'GET'){
        return res.status(200).send(csvJson);
    }

    if(req.method === 'POST'){
        csvJson=req.body;
    
        return res.status(200).json({})
    }
    
}