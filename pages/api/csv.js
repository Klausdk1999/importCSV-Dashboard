export default function handler(req, res) {
    console.log(req.body)

    // Save the imported rows in req.body to your database here
    return res.status(200).json({})
}