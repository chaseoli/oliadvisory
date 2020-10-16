export class PlainEmailTemplates {

    /**
     * replace [BODY]
     * 
     * @returns {string} 
     * @memberof HTMLEmailTemplates
     */
    defaultEmail(): string {
        return `
        Oliphant Advisory
        
        [BODY]
        
        73161 Fred Waring Drive, STE 201, Palm Desert, CA 92260
        `;
    }

    /**
     * Replace [NAME] [MESSAGE]
     * 
     * @returns {string} 
     * @memberof HTMLEmailTemplates
     */
    gettingStarted(name: string, re_message: string): string {
        const body = `
        Hi [NAME],
            
        Thanks for reaching out. We have received your message!
        
        RE: "[MESSAGE]"
            
        We are excited to learn more about you and your business. We will be in touch shortly.
            
        Thanks,
        Chase Oliphant`;
        return this.defaultEmail()
            .replace('[BODY]', body)
            .replace('[NAME]', name)
            .replace('[MESSAGE]', re_message);

    }

}
