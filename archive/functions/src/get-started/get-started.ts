import { Email } from '../email/email';
import { Recaptcha } from '../recaptcha/recaptcha';

export class GetStarted {

    private email: Email;
    private db: FirebaseFirestore.Firestore;
    private recaptcha: Recaptcha;

    constructor(
        db: FirebaseFirestore.Firestore
    ) {
        this.db = db;
        this.email = new Email(db);
        this.recaptcha = new Recaptcha();
    }

    create(req: any, res: any) {
        // console.log('body: ', body);

        const data = req.body.data;

        // check recaptcha
        this.recaptcha.verify(
            req.body.recaptchaToken,
            req.body.recaptchaType,
            req.connection.remoteAddress
        ).then((verified: { success: boolean, msg: string }) => {

            if (verified.success) {

                const promiseArr = [
                    this.addContact(data),
                    this.subscribeToMailingList(data.email),
                    this.sendConfirmEmail(
                        data.first,
                        data.email,
                        data.info
                    )
                ];

                Promise.all(promiseArr)
                    .then((_data) => {
                        // console.log("New "+ req.body.firestorePath +" - Document ID: ", docRef.id);
                        return res.json({ 'success': true, 'msg': _data });
                    }).catch((error) => {
                        console.error("Error adding document: ", error);
                        return res.json({ 'success': false, 'msg': error });
                    });

            } else {
                // recaptcha failed to get verified so sending back recaptcha failure message
                return res.json(verified);
            }

        });

    }

    subscribeToMailingList(emailAddress: string): Promise<any> {
        return this.email.subscribe(emailAddress, ['general']);
    }

    sendConfirmEmail(first: string, email: string, reMsg: string): Promise<any> {
        // send confirmation email to user and cc admin
        return this.email.sendEmail(
            {
                sender: {
                    name: 'Chase Oliphant',
                    email: 'chase@oliadvisory.com'
                },
                to: [{
                    name: first,
                    email: email
                }],
                // bcc so that admin is alerted to user's inquiry
                bcc: [{
                    name: 'Chase Oliphant',
                    email: 'chase@oliadvisory.com'
                }],
                htmlContent: this.email.htmlTemplates.addUnsubscribeBtn(
                    this.email.htmlTemplates.gettingStarted(first, reMsg),
                    email,
                    ['na'],
                    true
                ),
                textContent: this.email.plainTemplates.gettingStarted(first, reMsg),
                subject: 'Thanks for your message ' + first + '!',
            }
        );
    }

    addContact(data: any): Promise<any> {

        return new Promise((resolve, reject) => {

            const _doc = {
                date: new Date().toISOString(),
                company: data.company,
                info: data.info,
                first: data.first,
                last: data.last,
                phone: data.phone,
                email: data.email
            };

            // add info to firebase firestore
            this.db.collection('contacts')
                .add(_doc)
                .then((docRef) => {
                    // console.log("New "+ req.body.firestorePath +" - Document ID: ", docRef.id);
                    resolve({ 'success': true, 'msg': 'Recorded record to firebase.' });
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                    resolve({ 'success': false, 'msg': 'Unable to write to firebase.' });
                });
        });

    }

}
