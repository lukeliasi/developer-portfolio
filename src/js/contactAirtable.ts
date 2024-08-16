import Airtable from "airtable";

export type ContactForm = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type ContactAirtable = {
    fields: {
        Name: string;
        Email: string;
        Subject: string;
        Message: string;
    };
};
console.log(import.meta.env);
const contactCrud = new Airtable({
  apiKey: import.meta.env.PUBLIC_AIRTABLE_API_KEY,
}).base(import.meta.env.PUBLIC_AIRTABLE_BASE_ID)("Contactos");

const transformContactData = (contactData: ContactForm): ContactAirtable => {
    return {
        fields: {
            Name: contactData.name,
            Email: contactData.email,
            Subject: contactData.subject,
            Message: contactData.message,
        },
    };
}

const handleError = (error: Error | undefined, records: any) => {
    if (error) {
        console.error(error);
        throw error;
    }
    records.forEach((record: any) => {
        console.log(record.getId());
    });
}

export const createContact = async (contactData: ContactForm) => {
    const contactAirtable = transformContactData(contactData);
    await contactCrud.create([contactAirtable], handleError);
}; 
