import { faker } from '@faker-js/faker';

export const generateRandomFirstName = () => {
    return faker.person.firstName();
};

export const generateRandomLastName = () => {
    return faker.person.lastName();
};

export const generateRandomZipCode = () => {
    return faker.location.zipCode('#####');
};