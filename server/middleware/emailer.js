var codeLength = 6;
var nodeMailer = require('nodemailer');

let email_config = {
	service: '163',
	secure: true,
	port: 465,
	auth: {
		user: 'miotokyo@163.com',
		pass: 'charlotte2'
	}
}

let transporter = nodeMailer.createTransport(email_config);

function ssl (user) {

	/*let mailOptions = {
		from: 'mio<miotokyo@163.com>',
		to: user.email,
		subject: 'Welcome to Phenanthrene`s Website.',
        	text: 'Your validate code for registering is: ' + user.validCode
	}*/
	let mailOptions = {
        from: 'Phenanthrene<miotokyo@163.com>',
        to: user.email,
        subject: 'Welcome-To-Phenanthrene`s-WebSite',
        text: '您注册邮箱账户的验证码是：' + user.validCode
    }

	return mailOptions;

}

module.exports = function (emailAds) {

    let user = {
        email: emailAds,
        validCode: ''
    }

    for (var i = 0; i < codeLength; i++) {  
        user.validCode += parseInt(Math.random() * 9).toString();
    }

    transporter.sendMail(ssl(user), (error, info) => {
    		if (error) {
			return console.log(error);
	     } else {
			console.log('Validate email sent, validCode:' + user.validCode);
	     }
    });
	
	return user.validCode.toString();
}
