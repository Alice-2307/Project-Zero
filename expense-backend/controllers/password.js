const Sib = require("sib-api-v3-sdk");

exports.forgotPassword = async (req, res, next) => {
    const email = req.body.email;
    const client = Sib.ApiClient.instance;

    const apiKey = client.authentications['api-key'];
    apiKey.apiKey = process.env.EMAIL_API_KEY

    const transEmailApi = new Sib.TransactionalEmailsApi()

    const sender = {
        email: 'testing@gmail.com'
    }

    const receivers = [
        {
            email: email
        }
    ]
try{
    const result = await transEmailApi.sendTransacEmail({
        sender,
        to: receivers,
        subject: 'Forget Password',
        textContent: `Forget Password Link`
    })
    console.log(result);
} catch(err){
    console.log(err);
    res.status(500).json({Error: "An error occurred"});
}

}